import type { ElvishName } from "@shared/schema";

export const nameDatabase: ElvishName[] = [
  // This would be populated from the server, but including a local copy for reference
  { id: 1, name: "Arwen", meaning: "Noble maiden", language: "sindarin", gender: "female", category: "traditional", pronunciation: "AR-wen" },
  { id: 2, name: "Legolas", meaning: "Green leaves", language: "sindarin", gender: "male", category: "traditional", pronunciation: "LEG-oh-las" },
  { id: 3, name: "Elrond", meaning: "Vault of stars", language: "sindarin", gender: "male", category: "traditional", pronunciation: "EL-rond" },
  // ... more names would be added here
];

export const getNamesByCategory = (language: string, gender: string, category: string): ElvishName[] => {
  return nameDatabase.filter(name => {
    const genderMatch = gender === "any" || name.gender === gender || name.gender === "neutral";
    const languageMatch = name.language === language;
    const categoryMatch = name.category === category;
    return genderMatch && languageMatch && categoryMatch;
  });
};
