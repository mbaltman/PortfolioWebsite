import {CompatibilityReport} from "@/app/loveCalculator/dataobjects";

export function isValidName(name: string): boolean {
    return name.trim() != '';
}
export function getReport(name1: string, name2: string): CompatibilityReport {

    const subtitle = name1.trim() + " + " + name2.trim()
    if (isAAndM(name1, name2)) {
        const summary = aAndMSummaryOptions[getRandomInt(aAndMSummaryOptions.length)]
        return {subtitle: subtitle, score: 100, summary: summary}
    } else if (isAnania(name1)) {
        const summary = aAndWhoOptions[getRandomInt(aAndWhoOptions.length)]
        return {subtitle: subtitle, score: 30, summary: summary}
    } else if (isMaxwell(name1)) {
        const summary = mAndWhoOptions[getRandomInt(mAndWhoOptions.length)]
        return {subtitle: subtitle, score: 20, summary: summary}
    }

    return {subtitle: subtitle, score: 50, summary: "idk?"};
}

const aAndMSummaryOptions = [
    "Maxwell.. hmmm. He can be stubborn, self-conscious, distracted. \n He can also be loyal, passionate, and incredibly handsome. I think that if you find yourself a Maxwell, you should give him a chance.",
    "For these two to find each other is one of those chance encounters that you could only hope for. There are a lot of people in the world, and in New York. To find someone you truly connect with is special.",
    "There is something that feels cosmically destined about this pairing. The magnetic connection here is strong. Follow your gut.", 
    "YES. ABSOLUTELY. 100%"
]

const negativeOptions = [
    "This relationship will be unrewarding for both people. It is probably better that they end things immediately.",
    "Yikes... this pairing is destined for disaster.",
    "Some people are meant to be together... and some people are not. These ones are not.",
    "This is fine.. as long as you don’t mind long slow messy divorces. Like fighting over custody, petty years of legal proceedings type divorces."
]

const aAndWhoOptions = [
    "Eh I mean sure. But... I think Anania could do better.",
    "You know who might be a better match for Anania... someone named Maxwell!",
    "I really think Anania should be with a Maxwell. I bet he would treat them right. Is he perfect? No.. but he.. well he’s got a lot of heart! And that should count for something? right?"
].concat(negativeOptions)

const mAndWhoOptions = [
    "nope :/ try again!"
].concat(negativeOptions)

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function isAAndM(name1: string, name2: string): boolean {
    // full name checks
    if (isMaxwell(name1) && isAnania(name2) ||
    isAnania(name1) && isMaxwell(name2))
    {
        return true
    }
    // a + m 
    var initial1 = strip(name1)
    var initial2 = strip(name2)

    if ((initial1 == "m" && initial2 == "a") || (initial1 == "a" && initial2 == "m" )){
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