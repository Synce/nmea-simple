/*
 * === MWV - Wind speed and angle ===
 *
 * ------------------------------------------------------------------------------
 *        1   2 3   4 5
 *        |   | |   | |
 * $--MWV,x.x,a,x.x,a*hh<CR><LF>
 * ------------------------------------------------------------------------------
 *
 * Field Number:
 *
 * 1. Wind Angle, 0 to 360 degrees
 * 2. Reference, R = Relative, T = True
 * 3. Wind Speed
 * 4. Wind Speed Units, K/M/N
 * 5. Status, A = Data Valid
 * 6. Checksum
 */

import { parseFloatSafe } from "../helpers";

export const sentenceId: "MWD" = "MWD";
export const sentenceName = "Wind speed and angle";

export interface MWDPacket {
    sentenceId: "MWD";
    sentenceName?: string;
    talkerId?: string;
    windAngleTrue: number;
    windAngleMagnetic: number;

    speedKnots: number;
    speedMS: number;
}

export function decodeSentence(fields: string[]): MWDPacket {
    return {
        sentenceId: sentenceId,
        sentenceName: sentenceName,
        windAngleTrue: parseFloatSafe(fields[1]),
        windAngleMagnetic: parseFloatSafe(fields[3]),
        speedKnots: parseFloatSafe(fields[5]),
        speedMS: parseFloatSafe(fields[7]),
    };
}
