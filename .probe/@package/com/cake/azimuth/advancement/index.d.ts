import { $CreateAdvancement } from "@package/com/simibubi/create/foundation/advancement";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/com/cake/azimuth/advancement" {
    export class $CreateAdvancementIdAccessor {
        static asId(arg0: $CreateAdvancement): $ResourceLocation;
    }
    export interface $CreateAdvancementIdAccessor {
        azimuth$getId(): string;
    }
    /**
     * Values that may be interpreted as {@link $CreateAdvancementIdAccessor}.
     */
    export type $CreateAdvancementIdAccessor_ = (() => string);
}
