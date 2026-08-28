import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $MapRegion, $OverlayManager } from "@package/xaero/map/region";
import { $Executor } from "@package/xaero/map/executor";
import { $RegionFile } from "@package/net/minecraft/world/level/chunk/storage";
import { $HolderLookup, $Registry } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Path } from "@package/java/nio/file";
import { $MapProcessor } from "@package/xaero/map";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object, $Enum } from "@package/java/lang";
import { $WorldDataBiomeManager } from "@package/xaero/map/file/worldsave/biome";
import { $BlockStateShortShapeCache } from "@package/xaero/map/cache";
export * as biome from "@package/xaero/map/file/worldsave/biome";

declare module "@package/xaero/map/file/worldsave" {
    export class $WorldDataHandler {
        onResourceReload(): void;
        static onServerWorldUnload(arg0: $ServerLevel): void;
        handleRenderExecutor(): void;
        prepareSingleplayer(arg0: $Level, arg1: $MapProcessor): void;
        getWorldServer(): $ServerLevel;
        getWorldDataReader(): $WorldDataReader;
        getWorldDir(): $Path;
        buildRegion(arg0: $MapRegion, arg1: $HolderLookup<$Block>, arg2: $Registry<$Block>, arg3: $Registry<$Fluid>, arg4: boolean, arg5: number[]): $WorldDataHandler$Result;
        constructor(arg0: $WorldDataReader, arg1: $Executor);
        get worldServer(): $ServerLevel;
        get worldDataReader(): $WorldDataReader;
        get worldDir(): $Path;
    }
    export class $WorldDataReader {
        onResourceReload(): void;
        setMapProcessor(arg0: $MapProcessor): void;
        buildRegion(arg0: $MapRegion, arg1: $ServerLevel, arg2: $HolderLookup<$Block>, arg3: $Registry<$Block>, arg4: $Registry<$Fluid>, arg5: boolean, arg6: number[], arg7: $Executor): boolean;
        readChunk(arg0: $RegionFile, arg1: $ChunkPos): $CompoundTag;
        taskCreationSync: $Object;
        constructor(arg0: $OverlayManager, arg1: $BlockStateShortShapeCache, arg2: $WorldDataBiomeManager, arg3: number, arg4: $Executor);
        set mapProcessor(value: $MapProcessor);
    }
    export class $WorldDataHandler$Result extends $Enum<$WorldDataHandler$Result> {
        static values(): $WorldDataHandler$Result[];
        static valueOf(arg0: string): $WorldDataHandler$Result;
        static SUCCESS: $WorldDataHandler$Result;
        static CANCEL: $WorldDataHandler$Result;
        static FAIL: $WorldDataHandler$Result;
    }
    /**
     * Values that may be interpreted as {@link $WorldDataHandler$Result}.
     */
    export type $WorldDataHandler$Result_ = "success" | "fail" | "cancel";
}
