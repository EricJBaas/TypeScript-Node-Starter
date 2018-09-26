import { CsvParserProxy } from "./Parser";
import { DataRow } from "./models/DataRow";
import { writeFileSync } from "fs";
import { resolve } from "path";

const parsedData: DataRow[] = new CsvParserProxy("samplecsv.csv").parseByHeader();
writeFileSync(resolve("parsedCsv.json"), JSON.stringify(parsedData[0]));
parsedData.forEach((row) => {
  console.log(row["% Freq."]);
});
