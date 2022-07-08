import {GQLFilterNftOnMarket} from './server';

export enum SLIME_TYPE {
    PURITY = 'Purity',
    NORMAL = 'Normal',
    BLESSED = 'Blessed',
    PERFECT = 'Perfect',
}

export enum CLASS_TYPE {
    ASSASSIN = 'Assassin',
    TANK = 'Tank',
    ARCHER = 'Archer',
    MAGE = 'Mage',
    SUPPORTER = 'Support',
    WARRIOR = 'Warrior',
}


const language: any = localStorage.getItem('language');

export enum SORTING {
    // @ts-ignore
    PRICE_LOW_TO_HIGH = language !== "cn" ? "Lowest to highest price" : "价格最高的",
    // @ts-ignore
    PRICE_HIGH_TO_LOW = language !== "cn" ? 'Highest to lowest price' : '价格最低的',
    // @ts-ignore
    LISTING_LAST_TO_OLD = language !== "cn" ? "Latest to oldest listing" : "最新的",
    // @ts-ignore
    LISTING_OLD_TO_LAST = language !== "cn" ? "Oldest to latest listing" : "最古老的",
}


export enum STAGE_TYPE {
    BABY = 'Baby',
    GROWING = 'Growing',
    MATURE = 'Mature',
}

interface Slime {
    name: string;
    token_id: string;
}

interface FilterNftOnMarket extends GQLFilterNftOnMarket {
    id: number;
    selected: boolean;
    name: string;
}

export type {Slime, FilterNftOnMarket};
