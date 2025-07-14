import { ElvishName, InsertElvishName, NameGenerationRequest, InsertNameGenerationRequest } from "@shared/schema";

export interface IStorage {
  // Elvish Names
  getElvishNames(): Promise<ElvishName[]>;
  getElvishNamesByFilters(gender: string, language: string, category: string): Promise<ElvishName[]>;
  createElvishName(name: InsertElvishName): Promise<ElvishName>;
  
  // Name Generation Requests
  createNameGenerationRequest(request: InsertNameGenerationRequest): Promise<NameGenerationRequest>;
}

export class MemStorage implements IStorage {
  private elvishNames: Map<number, ElvishName>;
  private nameGenerationRequests: Map<number, NameGenerationRequest>;
  private currentElvishNameId: number;
  private currentRequestId: number;

  constructor() {
    this.elvishNames = new Map();
    this.nameGenerationRequests = new Map();
    this.currentElvishNameId = 1;
    this.currentRequestId = 1;
    
    // Initialize with comprehensive name database
    this.initializeNameDatabase();
  }

  private initializeNameDatabase() {
    const names: Omit<ElvishName, 'id'>[] = [
      // Sindarin Traditional Names
      { name: "Arwen", meaning: "Noble maiden", language: "sindarin", gender: "female", category: "traditional", pronunciation: "AR-wen" },
      { name: "Legolas", meaning: "Green leaves", language: "sindarin", gender: "male", category: "traditional", pronunciation: "LEG-oh-las" },
      { name: "Elrond", meaning: "Vault of stars", language: "sindarin", gender: "male", category: "traditional", pronunciation: "EL-rond" },
      { name: "Galadriel", meaning: "Maiden crowned with gleaming hair", language: "sindarin", gender: "female", category: "traditional", pronunciation: "ga-LAD-ree-el" },
      { name: "Thranduil", meaning: "Vigorous spring", language: "sindarin", gender: "male", category: "traditional", pronunciation: "THRAN-duil" },
      { name: "Celebrían", meaning: "Silver queen", language: "sindarin", gender: "female", category: "traditional", pronunciation: "ke-LEB-ree-an" },
      { name: "Elladan", meaning: "Elf-man", language: "sindarin", gender: "male", category: "traditional", pronunciation: "EL-la-dan" },
      { name: "Elrohir", meaning: "Elf-knight", language: "sindarin", gender: "male", category: "traditional", pronunciation: "EL-ro-heer" },
      { name: "Nimrodel", meaning: "Lady of the white grotto", language: "sindarin", gender: "female", category: "traditional", pronunciation: "NIM-ro-del" },
      { name: "Glorfindel", meaning: "Golden hair", language: "sindarin", gender: "male", category: "traditional", pronunciation: "glor-FIN-del" },
      
      // Sindarin Nature Names
      { name: "Galion", meaning: "Son of trees", language: "sindarin", gender: "male", category: "nature", pronunciation: "GAL-ee-on" },
      { name: "Silveth", meaning: "Silver maiden", language: "sindarin", gender: "female", category: "nature", pronunciation: "SIL-veth" },
      { name: "Morwen", meaning: "Dark maiden", language: "sindarin", gender: "female", category: "nature", pronunciation: "MOR-wen" },
      { name: "Caelynn", meaning: "Sea song", language: "sindarin", gender: "female", category: "nature", pronunciation: "KAY-lin" },
      { name: "Mithrellas", meaning: "Grey maiden", language: "sindarin", gender: "female", category: "nature", pronunciation: "mith-REL-las" },
      { name: "Galadwen", meaning: "Tree maiden", language: "sindarin", gender: "female", category: "nature", pronunciation: "ga-LAD-wen" },
      { name: "Silvyr", meaning: "Forest guardian", language: "sindarin", gender: "male", category: "nature", pronunciation: "SIL-veer" },
      { name: "Thrandion", meaning: "Spring wanderer", language: "sindarin", gender: "male", category: "nature", pronunciation: "THRAN-dee-on" },
      
      // Sindarin Warrior Names
      { name: "Beregond", meaning: "Bold stone", language: "sindarin", gender: "male", category: "warrior", pronunciation: "BER-e-gond" },
      { name: "Dúnhere", meaning: "Dark lord", language: "sindarin", gender: "male", category: "warrior", pronunciation: "DOON-here" },
      { name: "Targon", meaning: "Stiff-necked", language: "sindarin", gender: "male", category: "warrior", pronunciation: "TAR-gon" },
      { name: "Idhrenniel", meaning: "Patient lady", language: "sindarin", gender: "female", category: "warrior", pronunciation: "id-HREN-nee-el" },
      { name: "Malthen", meaning: "Golden brave", language: "sindarin", gender: "male", category: "warrior", pronunciation: "MAL-then" },
      { name: "Baraneth", meaning: "Fiery lady", language: "sindarin", gender: "female", category: "warrior", pronunciation: "BAR-a-neth" },
      
      // Sindarin Noble Names
      { name: "Arathorn", meaning: "Noble eagle", language: "sindarin", gender: "male", category: "noble", pronunciation: "AR-a-thorn" },
      { name: "Finduilas", meaning: "Hair of leaves", language: "sindarin", gender: "female", category: "noble", pronunciation: "fin-DUIL-as" },
      { name: "Celeborn", meaning: "Silver tree", language: "sindarin", gender: "male", category: "noble", pronunciation: "KEL-e-born" },
      { name: "Gilraen", meaning: "Star-wanderer", language: "sindarin", gender: "female", category: "noble", pronunciation: "GIL-ray-en" },
      { name: "Elendil", meaning: "Star-lover", language: "sindarin", gender: "male", category: "noble", pronunciation: "e-LEN-dil" },
      
      // Sindarin Mystical Names
      { name: "Lúthien", meaning: "Enchantress", language: "sindarin", gender: "female", category: "mystical", pronunciation: "LOO-thee-en" },
      { name: "Mithrandir", meaning: "Grey pilgrim", language: "sindarin", gender: "male", category: "mystical", pronunciation: "MITH-ran-deer" },
      { name: "Elanor", meaning: "Sun-star", language: "sindarin", gender: "female", category: "mystical", pronunciation: "EL-a-nor" },
      { name: "Pallando", meaning: "Far wanderer", language: "sindarin", gender: "male", category: "mystical", pronunciation: "pal-LAN-do" },
      { name: "Nimloth", meaning: "White flower", language: "sindarin", gender: "female", category: "mystical", pronunciation: "NIM-loth" },
      
      // Quenya Traditional Names
      { name: "Finrod", meaning: "Noble wanderer", language: "quenya", gender: "male", category: "traditional", pronunciation: "FIN-rod" },
      { name: "Idril", meaning: "Sparkling brilliance", language: "quenya", gender: "female", category: "traditional", pronunciation: "ID-ril" },
      { name: "Elenwë", meaning: "Star-person", language: "quenya", gender: "female", category: "traditional", pronunciation: "e-LEN-way" },
      { name: "Isildur", meaning: "Moon-servant", language: "quenya", gender: "male", category: "traditional", pronunciation: "i-SIL-dur" },
      { name: "Anárion", meaning: "Son of the sun", language: "quenya", gender: "male", category: "traditional", pronunciation: "a-NAR-ee-on" },
      { name: "Amarië", meaning: "Good", language: "quenya", gender: "female", category: "traditional", pronunciation: "a-MAR-ee-ay" },
      { name: "Fingolfin", meaning: "Hair-Fin", language: "quenya", gender: "male", category: "traditional", pronunciation: "fin-GOL-fin" },
      
      // Quenya Noble Names
      { name: "Finwë", meaning: "Hair", language: "quenya", gender: "male", category: "noble", pronunciation: "FIN-way" },
      { name: "Fëanor", meaning: "Spirit of fire", language: "quenya", gender: "male", category: "noble", pronunciation: "FAY-a-nor" },
      { name: "Varda", meaning: "Lofty", language: "quenya", gender: "female", category: "noble", pronunciation: "VAR-da" },
      { name: "Elendil", meaning: "Star-lover", language: "quenya", gender: "male", category: "noble", pronunciation: "e-LEN-dil" },
      { name: "Tar-Míriel", meaning: "Queen jewel-daughter", language: "quenya", gender: "female", category: "noble", pronunciation: "tar-MEER-ee-el" },
      
      // Quenya Mystical Names
      { name: "Manwë", meaning: "Blessed being", language: "quenya", gender: "male", category: "mystical", pronunciation: "MAN-way" },
      { name: "Yavanna", meaning: "Giver of fruits", language: "quenya", gender: "female", category: "mystical", pronunciation: "ya-VAN-na" },
      { name: "Olorin", meaning: "Dream", language: "quenya", gender: "male", category: "mystical", pronunciation: "o-LOR-in" },
      { name: "Nienna", meaning: "She who weeps", language: "quenya", gender: "female", category: "mystical", pronunciation: "nee-EN-na" },
      
      // More Sindarin Names
      { name: "Celebros", meaning: "Silver foam", language: "sindarin", gender: "male", category: "nature", pronunciation: "ke-LEB-ros" },
      { name: "Morwenna", meaning: "Dark maiden", language: "sindarin", gender: "female", category: "traditional", pronunciation: "mor-WEN-na" },
      { name: "Galador", meaning: "Tree lord", language: "sindarin", gender: "male", category: "noble", pronunciation: "GAL-a-dor" },
      { name: "Nimreth", meaning: "White lady", language: "sindarin", gender: "female", category: "noble", pronunciation: "NIM-reth" },
      { name: "Thrandion", meaning: "Steadfast lord", language: "sindarin", gender: "male", category: "warrior", pronunciation: "THRAN-dee-on" },
      { name: "Laerwen", meaning: "Song maiden", language: "sindarin", gender: "female", category: "mystical", pronunciation: "LAY-er-wen" },
      { name: "Bregolas", meaning: "Fierce leaf", language: "sindarin", gender: "male", category: "warrior", pronunciation: "BREG-oh-las" },
      { name: "Mithrellas", meaning: "Grey maiden", language: "sindarin", gender: "female", category: "mystical", pronunciation: "mith-REL-las" },
      { name: "Denethor", meaning: "Lithe man", language: "sindarin", gender: "male", category: "noble", pronunciation: "DEN-e-thor" },
      { name: "Finduilas", meaning: "Hair of leaves", language: "sindarin", gender: "female", category: "nature", pronunciation: "fin-DUIL-as" },
      
      // More Quenya Names  
      { name: "Elenwë", meaning: "Star maiden", language: "quenya", gender: "female", category: "mystical", pronunciation: "e-LEN-way" },
      { name: "Turukáno", meaning: "Victorious commander", language: "quenya", gender: "male", category: "warrior", pronunciation: "tu-ru-KAH-no" },
      { name: "Nerdanel", meaning: "Man-friend", language: "quenya", gender: "female", category: "traditional", pronunciation: "NER-da-nel" },
      { name: "Maglor", meaning: "Gold fire", language: "quenya", gender: "male", category: "mystical", pronunciation: "MAG-lor" },
      { name: "Eldalótë", meaning: "Elf flower", language: "quenya", gender: "female", category: "nature", pronunciation: "el-da-LOH-tay" },
      { name: "Rúmil", meaning: "Red flame", language: "quenya", gender: "male", category: "traditional", pronunciation: "ROO-mil" },
      { name: "Melian", meaning: "Dear gift", language: "quenya", gender: "female", category: "noble", pronunciation: "MEL-ee-an" },
      { name: "Curufin", meaning: "Skillful Finwë", language: "quenya", gender: "male", category: "noble", pronunciation: "ku-RU-fin" },
      { name: "Elwing", meaning: "Star spray", language: "quenya", gender: "female", category: "mystical", pronunciation: "EL-wing" },
      { name: "Pengolodh", meaning: "Teaching sage", language: "quenya", gender: "male", category: "traditional", pronunciation: "PEN-go-lodh" },

      // General Fantasy Names
      { name: "Aelindra", meaning: "Noble song", language: "general", gender: "female", category: "traditional", pronunciation: "ay-LIN-dra" },
      { name: "Thalion", meaning: "Steadfast", language: "general", gender: "male", category: "warrior", pronunciation: "THAL-ee-on" },
      { name: "Celebreth", meaning: "Silver lady", language: "general", gender: "female", category: "noble", pronunciation: "ke-LEB-reth" },
      { name: "Aldanor", meaning: "Tree lord", language: "general", gender: "male", category: "nature", pronunciation: "AL-da-nor" },
      { name: "Mithrelda", meaning: "Grey singer", language: "general", gender: "female", category: "mystical", pronunciation: "mith-REL-da" },
      { name: "Galethion", meaning: "Tree guardian", language: "general", gender: "male", category: "nature", pronunciation: "ga-LETH-ee-on" },
      { name: "Eärendil", meaning: "Sea-lover", language: "general", gender: "male", category: "mystical", pronunciation: "ay-AR-en-dil" },
      { name: "Nimloth", meaning: "White blossom", language: "general", gender: "female", category: "nature", pronunciation: "NIM-loth" },
      { name: "Valandil", meaning: "Friend of the Valar", language: "general", gender: "male", category: "noble", pronunciation: "va-LAN-dil" },
      { name: "Silmarien", meaning: "Jewel maiden", language: "general", gender: "female", category: "noble", pronunciation: "sil-MAR-ee-en" },
      { name: "Thorondir", meaning: "Eagle lord", language: "general", gender: "male", category: "warrior", pronunciation: "thor-ON-deer" },
      { name: "Lúthien", meaning: "Blossom", language: "general", gender: "female", category: "mystical", pronunciation: "LOO-thee-en" },
      { name: "Berendir", meaning: "Bold man", language: "general", gender: "male", category: "warrior", pronunciation: "BER-en-deer" },
      { name: "Morwen", meaning: "Dark maiden", language: "general", gender: "female", category: "traditional", pronunciation: "MOR-wen" },
      { name: "Elboron", meaning: "Elf steadfast", language: "general", gender: "male", category: "traditional", pronunciation: "EL-bo-ron" },
    ];

    names.forEach(name => {
      const id = this.currentElvishNameId++;
      this.elvishNames.set(id, { ...name, id });
    });
  }

  async getElvishNames(): Promise<ElvishName[]> {
    return Array.from(this.elvishNames.values());
  }

  async getElvishNamesByFilters(gender: string, language: string, category: string): Promise<ElvishName[]> {
    const allNames = Array.from(this.elvishNames.values());
    return allNames.filter(name => {
      const genderMatch = gender === "any" || name.gender === gender || name.gender === "neutral";
      const languageMatch = name.language === language;
      const categoryMatch = name.category === category;
      return genderMatch && languageMatch && categoryMatch;
    });
  }

  async createElvishName(insertName: InsertElvishName): Promise<ElvishName> {
    const id = this.currentElvishNameId++;
    const name: ElvishName = { 
      ...insertName, 
      id,
      pronunciation: insertName.pronunciation || null
    };
    this.elvishNames.set(id, name);
    return name;
  }

  async createNameGenerationRequest(insertRequest: InsertNameGenerationRequest): Promise<NameGenerationRequest> {
    const id = this.currentRequestId++;
    const request: NameGenerationRequest = { ...insertRequest, id };
    this.nameGenerationRequests.set(id, request);
    return request;
  }
}

export const storage = new MemStorage();
