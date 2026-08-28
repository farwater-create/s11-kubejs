import { $Enum } from "@package/java/lang";
export * as voice from "@package/de/maxhenkel/voicechat/voice";
export * as api from "@package/de/maxhenkel/voicechat/api";
export * as events from "@package/de/maxhenkel/voicechat/events";
export * as config from "@package/de/maxhenkel/voicechat/config";
export * as plugins from "@package/de/maxhenkel/voicechat/plugins";
export * as configbuilder from "@package/de/maxhenkel/voicechat/configbuilder";
export * as net from "@package/de/maxhenkel/voicechat/net";

declare module "@package/de/maxhenkel/voicechat" {
    export class $Voicechat$Loader extends $Enum<$Voicechat$Loader> {
        static values(): $Voicechat$Loader[];
        static valueOf(arg0: string): $Voicechat$Loader;
        static QUILT: $Voicechat$Loader;
        static FABRIC: $Voicechat$Loader;
        static NEOFORGE: $Voicechat$Loader;
        static FORGE: $Voicechat$Loader;
        static PAPER: $Voicechat$Loader;
    }
    /**
     * Values that may be interpreted as {@link $Voicechat$Loader}.
     */
    export type $Voicechat$Loader_ = "fabric" | "neoforge" | "forge" | "quilt" | "paper";
}
