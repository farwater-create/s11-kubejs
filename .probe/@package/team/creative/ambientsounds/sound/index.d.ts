import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/team/creative/ambientsounds/sound" {
    export class $OggAudioStreamExtended {
    }
    export interface $OggAudioStreamExtended {
        setPositionRandomly(arg0: number, arg1: $ResourceLocation_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $OggAudioStreamExtended}.
     */
    export type $OggAudioStreamExtended_ = ((arg0: number, arg1: $ResourceLocation) => boolean);
}
