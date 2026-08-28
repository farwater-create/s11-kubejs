import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Set, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/vista/common/chunk_tracking" {
    export class $ILevelRendererExt {
    }
    export interface $ILevelRendererExt {
        vista$refreshPinnedSections(): void;
    }
    /**
     * Values that may be interpreted as {@link $ILevelRendererExt}.
     */
    export type $ILevelRendererExt_ = (() => void);
    export class $ExtraChunkViewData$Zone extends $Record {
        contains(arg0: number, arg1: number): boolean;
        radius(): number;
        center(): $ChunkPos;
        chunks(): $Set<$ChunkPos>;
        static CODEC: $Codec<$ExtraChunkViewData$Zone>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ExtraChunkViewData$Zone>;
        constructor(center: $ChunkPos, radius: number);
    }
    /**
     * Values that may be interpreted as {@link $ExtraChunkViewData$Zone}.
     */
    export type $ExtraChunkViewData$Zone_ = { center?: $ChunkPos, radius?: number,  } | [center?: $ChunkPos, radius?: number, ];
    export class $IPinnableRenderSection {
    }
    export interface $IPinnableRenderSection {
        vista$setPinned(arg0: boolean): void;
        vista$isPinned(): boolean;
    }
    export class $IChunkViewWithZones {
    }
    export interface $IChunkViewWithZones {
        vista$setExtraZones(arg0: $ExtraChunkViewData): void;
        vista$getExtraZones(): $ExtraChunkViewData;
    }
    export class $ExtraChunkViewData {
        getAllChunks(): $Set<$ChunkPos>;
        clearZones(): void;
        removeZone(arg0: $ChunkPos): void;
        addZone(arg0: $ChunkPos, arg1: number): void;
        getZones(): $List<$ExtraChunkViewData$Zone>;
        containsChunk(arg0: number, arg1: number): boolean;
        static CODEC: $Codec<$ExtraChunkViewData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ExtraChunkViewData>;
        constructor();
        get allChunks(): $Set<$ChunkPos>;
        get zones(): $List<$ExtraChunkViewData$Zone>;
    }
    export class $IViewAreaExt {
    }
    export interface $IViewAreaExt {
        vista$rebuildPinnedSections(): void;
        vista$isPinnedSectionCompiled(arg0: number, arg1: number, arg2: number): boolean;
        vista$setPinnedSectionDirty(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    }
}
