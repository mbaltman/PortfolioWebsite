import {CompatibilityReport} from "@/app/matchmaker/dataobjects";

export function isValidName(name: string): boolean {
    return name.trim() != '';
}
export function getReport(name1: string, name2: string): CompatibilityReport{
    
    const subtitle = name1.trim() + " + " + name2.trim()
    if ((isMaxwell(name1) && isAnania(name2)) || 
         isAnania(name1) && isMaxwell(name2)){

        return { subtitle: subtitle, score: 100, summary: "The stars have aligned."}

    }
    
    return {subtitle: subtitle, score: 3, summary: "I don't think this is going to work out"}
}


function isMaxwell(name: string): boolean  {
    let strippedName = strip(name);
    return strippedName == "maxwell" || 
        strippedName == "maxwella" || 
        strippedName == "maxwellbrookealtman" || 
        strippedName == "maxwellaltman" || 
        strippedName == "maxwellba" ||
        strippedName == "maxwellbsunshine"
        ;
}

function isAnania(name: string): boolean  {
    let strippedName = strip(name);
    return strippedName == "anania" ||
        strippedName == "ananiajaymichaelcollinswilliams" ||
        strippedName == "anania00" ||
        strippedName == "ananiawilliams"
        ;
}

function strip(string: string): string {
    return string.trim().toLowerCase().replace(" ", "");
}