

import { parseFloatSafe } from "../helpers";
const FromPgn = require("@canboat/canboatjs").FromPgn;

const parser = new FromPgn();


export const sentenceId: "PGN" = "PGN";
export const sentenceName = "PGN Packet";

export interface PGNPacket {
    sentenceId: "PGN";
    sentenceName?: string;
    talkerId?: string;
    parsed:any;
    
}

export function decodeSentence(sentence: string): PGNPacket {
    return {
        sentenceId: sentenceId,
        sentenceName: sentenceName,
        parsed:parser.parseString(sentence)
       
    };
}
