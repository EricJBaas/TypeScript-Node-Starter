import { CsvParserProxy } from "./Parser";
import { DataRow } from "./models/DataRow";

const parsedData: DataRow[] = new CsvParserProxy("samplecsv.csv").parseByHeader();

parsedData.forEach((row) => {
  console.log(row["% Freq."]);
});
