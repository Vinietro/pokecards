export interface Card {
    id: string;
    name: string;
    nationalPokedexNumber: number;
    imageUrl: string;
    imageUrlHiRes: string;
    types: string[];
    supertype: string;
    subtype: string;
    evolvesFrom: string;
    hp: string;
    retreatCost: string[];
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    attacks: Attack[];
    weaknesses: Weakness[];
}

interface Attack {
    cost: string[];
    name: string;
    text: string;
    convertedEnergyCost: number;
}

interface Weakness {
    type: string;
    value: string;
}
