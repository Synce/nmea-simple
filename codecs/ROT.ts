//https://www.trimble.com/oem_receiverhelp/v4.44/en/NMEA-0183messages_ROT.html

import { parseFloatSafe } from "../helpers";

export const sentenceId: "ROT" = "ROT";
export const sentenceName = "Rate and direction of turn";

export interface ROTPacket {
    sentenceId: "ROT";
    sentenceName?: string;
    talkerId?: string;
    rateOfTurn: number;
    isValid: boolean;
}

export function decodeSentence(fields: string[]): ROTPacket {
    return {
        sentenceId: sentenceId,
        sentenceName: sentenceName,
        rateOfTurn: parseFloatSafe(fields[1]),
        isValid: fields[2] === "A" ? true : false,
    };
}
