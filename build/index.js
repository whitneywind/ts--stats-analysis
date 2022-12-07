"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReading_1 = require("./CsvFileReading");
const MatchReader_1 = require("./MatchReader");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
// create an obj that satisfies the datareader interface
const csvFileReader = new CsvFileReading_1.CsvFileReader('football.csv');
// create an instance of matchreader and pass in sth satisfying the interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// access data with matchReader.matches
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
