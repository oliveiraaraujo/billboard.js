/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
import { Selection } from "d3-selection";

export type PrimitiveArray = Array<string | boolean | number | Date | null>;
export type ArrayOrString = string[] | string;
export type Selection = Selection<any, any, any, any>;

export type DataArray = Array<{
    id: string;
    id_org: string;
    values: DataItem[]
}>;

export interface DataItem {
    id: string;
    index: number;
    value: number;
    x: number;
    ratio?: number;
}

export interface RegionsType {
    [key: string]: {
        start?: number;
        end?: number;
        style?: {
        dasharray?: string;
        }
  };
}
