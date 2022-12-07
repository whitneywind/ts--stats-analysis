import { MatchResult } from './MatchResult'

// changed first index to string from Date bc used toLocaleDateString() below
export type MatchData = [string, string, string, number, number, MatchResult, string]