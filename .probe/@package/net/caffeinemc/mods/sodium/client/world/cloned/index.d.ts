import { $Int2ReferenceMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $LightLayer_, $Level } from "@package/net/minecraft/world/level";
import { $Holder, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $DataLayer, $LevelChunkSection, $LevelChunk, $PalettedContainerRO } from "@package/net/minecraft/world/level/chunk";
import { $List, $List_ } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SodiumModelDataContainer } from "@package/net/caffeinemc/mods/sodium/client/services";
import { $SodiumAuxiliaryLightManager } from "@package/net/caffeinemc/mods/sodium/client/world";

declare module "@package/net/caffeinemc/mods/sodium/client/world/cloned" {
    export class $ClonedChunkSection {
        getPosition(): $SectionPos;
        getBlockData(): $PalettedContainerRO<$BlockState>;
        getLightArray(arg0: $LightLayer_): $DataLayer;
        getModelMap(): $SodiumModelDataContainer;
        getBiomeData(): $PalettedContainerRO<$Holder<$Biome>>;
        getBlockEntityMap(): $Int2ReferenceMap<$BlockEntity>;
        getAuxLightManager(): $SodiumAuxiliaryLightManager;
        getBlockEntityRenderDataMap(): $Int2ReferenceMap<$Object>;
        getLastUsedTimestamp(): number;
        setLastUsedTimestamp(arg0: number): void;
        constructor(arg0: $Level, arg1: $LevelChunk, arg2: $LevelChunkSection, arg3: $SectionPos);
        get position(): $SectionPos;
        get blockData(): $PalettedContainerRO<$BlockState>;
        get modelMap(): $SodiumModelDataContainer;
        get biomeData(): $PalettedContainerRO<$Holder<$Biome>>;
        get blockEntityMap(): $Int2ReferenceMap<$BlockEntity>;
        get auxLightManager(): $SodiumAuxiliaryLightManager;
        get blockEntityRenderDataMap(): $Int2ReferenceMap<$Object>;
    }
    export class $ChunkRenderContext {
        getOrigin(): $SectionPos;
        getSections(): $ClonedChunkSection[];
        getRenderers(): $List<never>;
        getVolume(): $BoundingBox;
        constructor(arg0: $SectionPos, arg1: $ClonedChunkSection[], arg2: $BoundingBox, arg3: $List_<never>);
        get origin(): $SectionPos;
        get sections(): $ClonedChunkSection[];
        get renderers(): $List<never>;
        get volume(): $BoundingBox;
    }
}
