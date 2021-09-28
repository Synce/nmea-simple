//Ships's heading, Pith and Roll

import { parseFloatSafe } from "../helpers";

export const sentenceId: "FEC" = "FEC";
export const sentenceName = "(FURNO)";

export interface FECPacket {
    sentenceId: "FEC";
    sentenceName?: string;
    talkerId?: string;
   packet:ATTPacket|null
}

export interface ATTPacket {
    sentenceId: "ATT";
    sentenceName?: string;
    heading:number,
    pitch:number,
    roll:number
   
  
}


export function decodeSentence(fields: string[]): FECPacket {
    return {
        sentenceId: sentenceId,
        sentenceName: sentenceName,
        packet:decodePacket(fields),
        
    };
}
export function decodePacket(fields: string[]): ATTPacket|null {
    if(fields[1]=="GPatt")
    return {
        sentenceId: "ATT",
        sentenceName: "Ship's heading Pitch and Roll",
        heading: parseFloatSafe(fields[2]),
        pitch: parseFloatSafe(fields[3]),
        roll: parseFloatSafe(fields[4]),
    };
    return null
}
 