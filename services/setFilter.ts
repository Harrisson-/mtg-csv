import { ART_SERIES } from "../const/constant";
import { SetItem } from "../models/filter";


export function SetOnly(setList: SetItem[]) {
    return setList.filter(set => !set.parent_set_code);
}

export function artOnly(setList: SetItem[]) {
    return setList.filter(set => set.name.includes(ART_SERIES));
}

export function sortSetReleaseFrom(setList: SetItem[], releaseDateFilter: Date) {
    return setList.filter(set => new Date(set.released_at) > releaseDateFilter )
}

export function sortSetByName(setList: SetItem[], text: string) {
    return setList.filter(set => set.name.includes(text));
}