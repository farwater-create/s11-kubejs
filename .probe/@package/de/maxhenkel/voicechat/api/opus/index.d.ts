import { $Enum } from "@package/java/lang";

declare module "@package/de/maxhenkel/voicechat/api/opus" {
    export class $OpusEncoderMode extends $Enum<$OpusEncoderMode> {
        static values(): $OpusEncoderMode[];
        static valueOf(arg0: string): $OpusEncoderMode;
        static RESTRICTED_LOWDELAY: $OpusEncoderMode;
        static VOIP: $OpusEncoderMode;
        static AUDIO: $OpusEncoderMode;
    }
    /**
     * Values that may be interpreted as {@link $OpusEncoderMode}.
     */
    export type $OpusEncoderMode_ = "voip" | "audio" | "restricted_lowdelay";
}
