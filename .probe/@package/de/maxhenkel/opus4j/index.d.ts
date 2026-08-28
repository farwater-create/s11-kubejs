import { $Enum } from "@package/java/lang";

declare module "@package/de/maxhenkel/opus4j" {
    export class $OpusEncoder$Application extends $Enum<$OpusEncoder$Application> {
        static values(): $OpusEncoder$Application[];
        static valueOf(arg0: string): $OpusEncoder$Application;
        static VOIP: $OpusEncoder$Application;
        static AUDIO: $OpusEncoder$Application;
        static LOW_DELAY: $OpusEncoder$Application;
    }
    /**
     * Values that may be interpreted as {@link $OpusEncoder$Application}.
     */
    export type $OpusEncoder$Application_ = "voip" | "audio" | "low_delay";
}
