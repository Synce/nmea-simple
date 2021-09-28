// 1   2   3 4   5   6 7   8  0 10 11
// |   |   | |   |   | |   |  |  |  |
// $--VBW,x.x,x.x,A,x.x,x.x,A,x.x,A,x.x,A*hh<CR><LF>
// 1 Longitudinal water speed, "-" means astern, knots

// 2 Transverse water speed, "-" means port, knots

// 3 Status, A = Data Valid

// 4 Longitudinal ground speed, "-" means astern, knots

// 5 Transverse ground speed, "-" means port, knots

// 6 Status, A = Data Valid

// 7 Stern traverse water speed, knots *NMEA 3 and above)

// 8 Status, stern traverse water speed A = Valid (NMEA 3 and above)

// 9 Stern traverse ground speed, knots *NMEA 3 and above)

// 10 Status, stern ground speed A = Valid (NMEA 3 and above)

// 11 Checksum

import { parseFloatSafe } from "../helpers";

export const sentenceId: "VBW" = "VBW";
export const sentenceName = "Dual Ground/Water Speed";

export interface VBWPacket {
    sentenceId: "VBW";
    sentenceName?: string;
    talkerId?: string;
    longitudinalWaterSpeed: number;
    transverseWaterSpeed: number;
    waterStatus: boolean;
    longitudinalGroundSpeed: number;
    transverseGroundSpeed: number;
    griundStatus: boolean;
    sternTraverseWaterSpeed: number;
    sternTraverseWaterStatus: boolean;
    sternTraverseGroundSpeed: number;
    sternTraverseGroundStatus: boolean;
}

export function decodeSentence(fields: string[]): VBWPacket {
    return {
        sentenceId: sentenceId,
        sentenceName: sentenceName,
        longitudinalWaterSpeed: parseFloatSafe(fields[1]),
        transverseWaterSpeed: parseFloatSafe(fields[2]),
        waterStatus: fields[3] === "A" ? true : false,
        longitudinalGroundSpeed: parseFloatSafe(fields[4]),
        transverseGroundSpeed: parseFloatSafe(fields[5]),
        griundStatus: fields[6] === "A" ? true : false,
        sternTraverseWaterSpeed: parseFloatSafe(fields[7]),
        sternTraverseWaterStatus: fields[8] === "A" ? true : false,
        sternTraverseGroundSpeed: parseFloatSafe(fields[9]),
        sternTraverseGroundStatus: fields[10] === "A" ? true : false,
    };
}
