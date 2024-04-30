import { getRandomFace } from "./RandomFace"
import { getRandomProgrammingLanguageWithSize } from "./RandomProgrammingLanguage"
import getRandomName from "./RandonName"

export function getRandomPersonPreview(){
    const name = getRandomName()
    return {
        name: name.name,
        surname: name.surname,
        age: 15+Math.floor(Math.random()*60),
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus veniam, nostrum aperiam illum corrupti animi distinctio dolore ipsam quaerat autem, cupiditate minima cumque quisquam eius facere maxime voluptas impedit!",
        image: getRandomFace()
    }
}

export function getRandomPersonFull(){
    const name = getRandomName()
    const tempCompanies:string[] = []
    for (let i = 1; i <= Math.floor(Math.random() * 10); i++) {
        tempCompanies.push(`company-${i}`);
    }
    
    return {
        name: name.name,
        surname: name.surname,
        age: 15+Math.floor(Math.random()*60),
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus veniam, nostrum aperiam illum corrupti animi distinctio dolore ipsam quaerat autem, cupiditate minima cumque quisquam eius facere maxime voluptas impedit!",
        experience: Math.floor(Math.random()*20),
        companies: tempCompanies,
        languages: getRandomProgrammingLanguageWithSize(Math.floor(Math.random()*6)),
        image: getRandomFace()
    }
}