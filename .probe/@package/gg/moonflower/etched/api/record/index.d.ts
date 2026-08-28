import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/gg/moonflower/etched/api/record" {
    export class $TrackData extends $Record {
        url(): string;
        isValid(): boolean;
        getDisplayName(): $Component;
        static isValidURL(arg0: string): boolean;
        title(): $Component;
        artist(): string;
        withArtist(arg0: string): $TrackData;
        static isLocalSound(arg0: string): boolean;
        withUrl(arg0: string): $TrackData;
        withTitle(arg0: string): $TrackData;
        withTitle(arg0: $Component_): $TrackData;
        static CODEC: $Codec<$TrackData>;
        static EMPTY: $TrackData;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TrackData>;
        constructor(url: string, artist: string, title: $Component_);
        get valid(): boolean;
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $TrackData}.
     */
    export type $TrackData_ = { artist?: string, title?: $Component_, url?: string,  } | [artist?: string, title?: $Component_, url?: string, ];
}
