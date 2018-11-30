/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
import { Chart } from "./chart";
import { Options } from "./options";
import { Selection } from "./types";

export default bb;

export namespace bb {
    function generate(options: Options): Chart;
    const version: string;
    const instance: Chart[];
    const $: {
        chart: Selection;
        svg: Selection;
        defs: Selection;
        main: Selection;
        tooltip: Selection;
        legend: Selection;
        title: Selection;
        grid: Selection;
        arc: Selection;
        bar: {
            bars: Selection;
        };
        line: {
            lines: Selection;
            areas: Selection;
            circles: Selection;
        }
        text: {
            texts: Selection;
        }
    };
}
