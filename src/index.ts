import { CsvFileReader } from "./CsvFileReading";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

// create an obj that satisfies the datareader interface
const csvFileReader = new CsvFileReader('football.csv');

// create an instance of matchreader and pass in sth satisfying the interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


// access data with matchReader.matches

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);