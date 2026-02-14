import {CompatibilityReport} from "@/app/loveCalculator/dataobjects";

export function isValidName(name: string): boolean {
    return name.trim() != '';
}
export function getReport(name1: string, name2: string): CompatibilityReport{
    
    const subtitle = name1.trim() + " + " + name2.trim()
    if (isAAndM(name1, name2)){

        return { subtitle: subtitle, score: 100, summary: "The stars have aligned."}

    }
    
    return {subtitle: subtitle, score: 10, summary: "I don't think this is going to work out"}
}


function isAAndM(name1: string, name2: string): boolean {
    // full name checks
    if (isMaxwell(name1) && isAnania(name2) ||
    isAnania(name1) && isMaxwell(name2))
    {
        return true
    }
    // a + m 
    if ((name1 == "m" && name2 == "a") || (name1 == "a" && name2 == "m" )){
        return true
    }
    
    return false
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