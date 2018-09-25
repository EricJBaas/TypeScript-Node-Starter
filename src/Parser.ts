import * as syncParser from "csv-parse/lib/sync";
import * as fs from "fs";
import { resolve } from "path";
import { DataRow } from "./models/DataRow";

export class CsvParserProxy {
    private csvText: string;
    constructor(private fileName: string) {
        this.csvText = fs.readFileSync(resolve(fileName)).toString("utf8");
        return this;
    }

    parseByHeader(): DataRow[] {
        // cast: true
        return syncParser.default(this.csvText, {columns: true});
    }

    parseByRow() {
        return syncParser.default(this.csvText);
    }
}
