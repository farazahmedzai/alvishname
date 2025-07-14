import { Card, CardContent } from "@/components/ui/card";
import { Volume2, Users, Crown, Languages, Building, Palette } from "lucide-react";

export default function EducationalContent() {
  const popularNames = [
    { name: "Arwen", meaning: "Noble maiden", language: "Sindarin", gender: "Female" },
    { name: "Legolas", meaning: "Green leaves", language: "Sindarin", gender: "Male" },
    { name: "Elrond", meaning: "Vault of stars", language: "Sindarin", gender: "Male" },
    { name: "Galadriel", meaning: "Maiden crowned with gleaming hair", language: "Sindarin", gender: "Female" },
    { name: "Thranduil", meaning: "Vigorous spring", language: "Sindarin", gender: "Male" },
    { name: "Celebrían", meaning: "Silver queen", language: "Sindarin", gender: "Female" },
    { name: "Elladan", meaning: "Elf-man", language: "Sindarin", gender: "Male" },
    { name: "Nimrodel", meaning: "Lady of the white grotto", language: "Sindarin", gender: "Female" },
    { name: "Glorfindel", meaning: "Golden hair", language: "Sindarin", gender: "Male" },
    { name: "Finrod", meaning: "Noble wanderer", language: "Quenya", gender: "Male" },
    { name: "Idril", meaning: "Sparkling brilliance", language: "Quenya", gender: "Female" },
  ];

  return (
    <>
      {/* How to Use Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl font-semibold text-center mb-8 text-elvish-light">
            How to Use the Elvish Name Generator
          </h2>
          <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
            <CardContent className="p-8">
              <p className="text-lg text-elvish-gray mb-4">
                Simply select your preferred gender, language (Sindarin, Quenya, or General Fantasy), and name category to generate authentic Elvish names. Each generated name includes its meaning and linguistic origin, making it perfect for creating characters with depth and cultural authenticity.
              </p>
              <p className="text-lg text-elvish-gray">
                Click the copy button next to any name to save it to your clipboard. You can regenerate names as many times as you'd like to find the perfect match for your character or creative project.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educational Content - History and Linguistics */}
      <section id="guide" className="py-16 bg-elvish-surface/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl font-semibold text-center mb-12 text-elvish-light">
            The History and Linguistics of Elvish Names
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-cinzel text-2xl font-medium text-elvish-accent">Tolkien's Linguistic Creation</h3>
              <p className="text-elvish-gray leading-relaxed">
                J.R.R. Tolkien, a philologist and professor at Oxford University, created the Elvish languages as complete linguistic systems with their own grammar, vocabulary, and cultural context. His passion for language creation began in his youth and became the foundation for Middle-earth itself. Tolkien famously said that he created the stories to provide a world for his languages, not the other way around.
              </p>
              <p className="text-elvish-gray leading-relaxed">
                The two primary Elvish languages, Sindarin and Quenya, represent different periods and cultures in Tolkien's fictional history. Sindarin, spoken by the Grey-elves, became the common Elvish tongue in Middle-earth during the Third Age. Quenya, the "High Elvish," was the language of the Valar and the Eldar in Valinor, considered more ancient and formal.
              </p>
              <p className="text-elvish-gray leading-relaxed">
                Tolkien's linguistic expertise is evident in the consistent phonological and grammatical rules that govern these languages. He drew inspiration from Finnish (for Quenya) and Welsh (for Sindarin), creating languages that feel both familiar and otherworldly. The sound patterns, stress placement, and morphological structures all follow systematic rules that give the languages their distinctive character.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-cinzel text-2xl font-medium text-elvish-accent">Sindarin vs. Quenya Differences</h3>
              <Card className="bg-elvish-dark/30 border border-elvish-accent/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-elvish-light mb-3">Sindarin Characteristics:</h4>
                  <ul className="text-elvish-gray space-y-2 mb-4">
                    <li>• More commonly spoken in Middle-earth</li>
                    <li>• Softer, more flowing sounds</li>
                    <li>• Welsh-inspired phonology</li>
                    <li>• Complex consonant mutations</li>
                  </ul>
                  
                  <h4 className="font-semibold text-elvish-light mb-3">Quenya Characteristics:</h4>
                  <ul className="text-elvish-gray space-y-2">
                    <li>• The "High Elvish" of ceremony and lore</li>
                    <li>• More archaic and formal</li>
                    <li>• Finnish-inspired structure</li>
                    <li>• Rich case system and agglutination</li>
                  </ul>
                </CardContent>
              </Card>
              <p className="text-elvish-gray leading-relaxed">
                Understanding these differences helps in choosing appropriate names for different contexts. Sindarin names might be more suitable for everyday characters, while Quenya names often carry more weight and formality, perfect for noble or ancient characters.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="font-cinzel text-2xl font-medium text-elvish-accent mb-6">Influence on Modern Fantasy</h3>
            <p className="text-elvish-gray leading-relaxed mb-4">
              Tolkien's Elvish languages have profoundly influenced fantasy literature and gaming culture. From Dungeons & Dragons to video games like The Elder Scrolls series, many fantasy works draw inspiration from Tolkien's linguistic innovations. The concept of creating complete, internally consistent fantasy languages has become a hallmark of serious worldbuilding.
            </p>
            <p className="text-elvish-gray leading-relaxed mb-4">
              Modern fantasy authors often attempt to create similar depth in their invented languages, though few have matched Tolkien's linguistic sophistication. The popularity of Elvish names in gaming communities, particularly in role-playing games, demonstrates the enduring appeal of Tolkien's creation. Players seek names that sound authentic and carry meaning, connecting their characters to a rich cultural tradition.
            </p>
            <p className="text-elvish-gray leading-relaxed">
              The influence extends beyond entertainment into academic circles, where Tolkien's languages are studied as examples of successful constructed languages (conlangs). Linguists analyze the systematic nature of Elvish grammar and phonology, often using them as teaching tools for understanding how natural languages develop and change over time.
            </p>
          </div>
        </div>
      </section>

      {/* Naming Conventions Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl font-semibold text-center mb-12 text-elvish-light">
            Understanding Elvish Naming Conventions
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Volume2 className="w-8 h-8 text-elvish-accent mx-auto mb-3" />
                  <h3 className="font-cinzel text-xl font-medium text-elvish-light">Sound Patterns</h3>
                </div>
                <p className="text-elvish-gray text-sm leading-relaxed">
                  Elvish names follow specific phonological patterns that create their distinctive musical quality. Consonant clusters are carefully arranged, and vowel combinations follow systematic rules that make names both pronounceable and aesthetically pleasing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Users className="w-8 h-8 text-elvish-accent mx-auto mb-3" />
                  <h3 className="font-cinzel text-xl font-medium text-elvish-light">Gender Conventions</h3>
                </div>
                <p className="text-elvish-gray text-sm leading-relaxed">
                  While not rigidly gendered, Elvish names often contain subtle indicators. Feminine names may include softer sounds and certain endings, while masculine names might feature stronger consonants and different morphological patterns.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Crown className="w-8 h-8 text-elvish-accent mx-auto mb-3" />
                  <h3 className="font-cinzel text-xl font-medium text-elvish-light">Cultural Significance</h3>
                </div>
                <p className="text-elvish-gray text-sm leading-relaxed">
                  Elvish names often reflect connection to nature, light, music, or noble qualities. Understanding these cultural values helps in selecting names that align with character backgrounds and personality traits.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-12 bg-elvish-dark/30 border border-elvish-accent/20">
            <CardContent className="p-8">
              <h3 className="font-cinzel text-2xl font-medium text-elvish-accent mb-6">Common Elements and Their Meanings</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-elvish-light mb-4">Nature Elements:</h4>
                  <div className="space-y-2 text-sm text-elvish-gray">
                    <p><span className="text-elvish-accent font-medium">Gal-</span> = Tree, wood</p>
                    <p><span className="text-elvish-accent font-medium">Mith-</span> = Grey, mist</p>
                    <p><span className="text-elvish-accent font-medium">Celeb-</span> = Silver</p>
                    <p><span className="text-elvish-accent font-medium">Elanor</span> = Sun-star (flower)</p>
                    <p><span className="text-elvish-accent font-medium">Gil-</span> = Star, bright</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-elvish-light mb-4">Noble Qualities:</h4>
                  <div className="space-y-2 text-sm text-elvish-gray">
                    <p><span className="text-elvish-accent font-medium">-ion</span> = Son of (masculine)</p>
                    <p><span className="text-elvish-accent font-medium">-iel</span> = Daughter of (feminine)</p>
                    <p><span className="text-elvish-accent font-medium">Ar-</span> = Noble, royal</p>
                    <p><span className="text-elvish-accent font-medium">-dir</span> = Man, lord</p>
                    <p><span className="text-elvish-accent font-medium">-wen</span> = Maiden, lady</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Names Table */}
      <section id="names" className="py-16 bg-elvish-surface/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl font-semibold text-center mb-12 text-elvish-light">
            Popular Elvish Names and Their Meanings
          </h2>
          
          <Card className="bg-elvish-surface/60 backdrop-blur-md border border-elvish-accent/20">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-elvish-dark/50">
                    <tr>
                      <th className="px-6 py-4 text-left font-cinzel text-elvish-accent">Name</th>
                      <th className="px-6 py-4 text-left font-cinzel text-elvish-accent">Meaning</th>
                      <th className="px-6 py-4 text-left font-cinzel text-elvish-accent">Language</th>
                      <th className="px-6 py-4 text-left font-cinzel text-elvish-accent">Gender</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-elvish-accent/20">
                    {popularNames.map((name, index) => (
                      <tr key={index} className="hover:bg-elvish-dark/20 transition-colors">
                        <td className="px-6 py-4 font-crimson text-elvish-light font-semibold">{name.name}</td>
                        <td className="px-6 py-4 text-elvish-gray">{name.meaning}</td>
                        <td className="px-6 py-4 text-elvish-gray">{name.language}</td>
                        <td className="px-6 py-4 text-elvish-gray">{name.gender}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl font-semibold text-center mb-12 text-elvish-light">
            Tips for Creating Authentic Elvish Names
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-cinzel text-xl font-medium text-elvish-accent mb-4">
                    <Languages className="inline w-5 h-5 mr-2" />
                    Follow Linguistic Patterns
                  </h3>
                  <p className="text-elvish-gray leading-relaxed mb-4">
                    Authentic Elvish names follow specific phonological rules. Sindarin names often feature soft consonants and flowing vowel combinations, while Quenya names may include more complex consonant clusters and formal structures.
                  </p>
                  <p className="text-elvish-gray leading-relaxed">
                    Pay attention to syllable stress patterns - Sindarin typically stresses the first syllable of polysyllabic words, while Quenya stress patterns can be more varied depending on vowel length and word structure.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-cinzel text-xl font-medium text-elvish-accent mb-4">
                    <Building className="inline w-5 h-5 mr-2" />
                    Common Prefixes and Suffixes
                  </h3>
                  <div className="space-y-3 text-elvish-gray">
                    <div>
                      <span className="text-elvish-accent font-medium">Masculine endings:</span> -ion, -dir, -dur, -orn
                    </div>
                    <div>
                      <span className="text-elvish-accent font-medium">Feminine endings:</span> -iel, -wen, -eth, -ril
                    </div>
                    <div>
                      <span className="text-elvish-accent font-medium">Nature prefixes:</span> Gal- (tree), Mith- (grey), Gil- (star)
                    </div>
                    <div>
                      <span className="text-elvish-accent font-medium">Noble prefixes:</span> Ar- (noble), El- (elf), Fin- (hair)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-cinzel text-xl font-medium text-elvish-accent mb-4">
                    <span className="text-yellow-500">⚠</span> Avoiding Common Mistakes
                  </h3>
                  <ul className="space-y-3 text-elvish-gray">
                    <li className="flex items-start">
                      <span className="text-elvish-accent mr-2">•</span>
                      Don't mix Sindarin and Quenya elements randomly - each language has distinct characteristics
                    </li>
                    <li className="flex items-start">
                      <span className="text-elvish-accent mr-2">•</span>
                      Avoid overly complex consonant clusters that would be difficult to pronounce
                    </li>
                    <li className="flex items-start">
                      <span className="text-elvish-accent mr-2">•</span>
                      Don't ignore gender conventions entirely - while not rigid, they provide authenticity
                    </li>
                    <li className="flex items-start">
                      <span className="text-elvish-accent mr-2">•</span>
                      Ensure the name's meaning aligns with the character's personality or role
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-cinzel text-xl font-medium text-elvish-accent mb-4">
                    <Palette className="inline w-5 h-5 mr-2" />
                    Cultural Authenticity
                  </h3>
                  <p className="text-elvish-gray leading-relaxed mb-4">
                    Consider the cultural context of your character when selecting a name. Elvish culture values beauty, nature, wisdom, and artistry. Names often reflect these values through references to natural phenomena, light, music, or noble qualities.
                  </p>
                  <p className="text-elvish-gray leading-relaxed">
                    Think about your character's background - a woodland elf might have a nature-themed name, while a high court elf might bear a more formal, Quenya-influenced name with noble connotations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Culture Section */}
      <section className="py-16 bg-elvish-surface/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl font-semibold text-center mb-12 text-elvish-light">
            Elvish Names in Popular Culture
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <svg className="w-8 h-8 text-elvish-accent mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.5 6.5h3l1.5-3 3 7 3-7 1.5 3h3m-10 5.5l2-2 2 2 6-6"/>
                  </svg>
                  <h3 className="font-cinzel text-xl font-medium text-elvish-light">LOTR Character Names</h3>
                </div>
                <p className="text-elvish-gray text-sm leading-relaxed mb-4">
                  The Lord of the Rings trilogy popularized many Elvish names that have become iconic in fantasy culture. Characters like Legolas, Arwen, Elrond, and Galadriel showcase the beauty and depth of Tolkien's linguistic creation.
                </p>
                <p className="text-elvish-gray text-sm leading-relaxed">
                  These names demonstrate how Elvish nomenclature reflects character traits and cultural values, from Legolas's connection to nature to Galadriel's regal bearing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <svg className="w-8 h-8 text-elvish-accent mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.5 12l3-3 3 3m-6 6h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <h3 className="font-cinzel text-xl font-medium text-elvish-light">Gaming References</h3>
                </div>
                <p className="text-elvish-gray text-sm leading-relaxed mb-4">
                  Video games from The Elder Scrolls series to Dungeons & Dragons campaigns frequently use Elvish-inspired names. Games like Skyrim feature Altmer (High Elf) names that echo Quenya structures, while Wood Elf names often follow Sindarin patterns.
                </p>
                <p className="text-elvish-gray text-sm leading-relaxed">
                  MMORPGs and tabletop RPGs have made Elvish names a staple of character creation, with players seeking authentic-sounding names for their elven characters.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <svg className="w-8 h-8 text-elvish-accent mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                  <h3 className="font-cinzel text-xl font-medium text-elvish-light">Modern Fantasy Literature</h3>
                </div>
                <p className="text-elvish-gray text-sm leading-relaxed mb-4">
                  Contemporary fantasy authors often create Elvish-inspired names for their elven characters, drawing from Tolkien's linguistic patterns while developing their own unique variations. This creates familiarity while maintaining originality.
                </p>
                <p className="text-elvish-gray text-sm leading-relaxed">
                  Authors like Terry Pratchett, Brandon Sanderson, and Robin Hobb have all created elven cultures with naming conventions that pay homage to Tolkien's linguistic achievements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
