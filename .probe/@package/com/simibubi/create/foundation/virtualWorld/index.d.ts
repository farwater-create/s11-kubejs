import { $ChunkPos, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $VisualizationLevel } from "@package/dev/engine_room/flywheel/api/visualization";
import { $BlendingData } from "@package/net/minecraft/world/level/levelgen/blending";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $UpgradeData, $LevelChunk, $ChunkSource, $LevelChunkSection, $PalettedContainer, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $ArrayList, $List, $Map, $UUID_, $Collection_ } from "@package/java/util";
import { $ChunkSkyLightSources } from "@package/net/minecraft/world/level/lighting";
import { $AbortableIterationConsumer_, $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos, $Vec3i } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Thread, $Runnable_, $Iterable } from "@package/java/lang";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Heightmap$Types, $Heightmap, $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";
import { $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $EntityAccess, $EntityTypeTest, $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/com/simibubi/create/foundation/virtualWorld" {
    export class $VirtualChunk extends $LevelChunk {
        upgradeData: $UpgradeData;
        xaero_wm_chunkClean: boolean;
        chunkPos: $ChunkPos;
        level: $Level;
        xaero_chunkClean: boolean;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        loaded: boolean;
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        world: $VirtualRenderWorld;
        blendingData: $BlendingData;
        static LOGGER: $Logger;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $VirtualRenderWorld, arg1: number, arg2: number);
    }
    export class $VirtualChunkSource extends $ChunkSource {
        getLevel(): $Level;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        constructor(arg0: $VirtualRenderWorld);
        get level(): $Level;
    }
    export class $VirtualChunkSection extends $LevelChunkSection {
        owner: $VirtualChunk;
        static SECTION_WIDTH: number;
        tickingBlockCount: number;
        nonEmptyBlockCount: number;
        xStart: number;
        static SECTION_HEIGHT: number;
        yStart: number;
        static BIOME_CONTAINER_BITS: number;
        static SECTION_SIZE: number;
        zStart: number;
        tickingFluidCount: number;
        states: $PalettedContainer<$BlockState>;
        constructor(arg0: $VirtualChunk, arg1: number);
    }
    export class $VirtualRenderWorld extends $Level implements $VisualizationLevel {
        clear(): void;
        getBlockState(arg0: number, arg1: number, arg2: number): $BlockState;
        static nextMultipleOf16(arg0: number): number;
        runLightEngine(): void;
        setBlockEntities(arg0: $Collection_<$BlockEntity>): void;
        setExternalLight(arg0: number): void;
        resetExternalLight(): void;
        getAnyChunkImmediately(arg0: number, arg1: number): $ChunkAccess;
        getChunkAtImmediately(arg0: number, arg1: number): $LevelChunk;
        supportsVisualization(): boolean;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $Level, arg1: number, arg2: number, arg3: $Vec3i, arg4: $Runnable_);
        set blockEntities(value: $Collection_<$BlockEntity>);
        set externalLight(value: number);
    }
    export class $VirtualLevelEntityGetter<T extends $EntityAccess> implements $LevelEntityGetter<T> {
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): void;
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AbortableIterationConsumer_<U>): void;
        get(arg0: $AABB_, arg1: $Consumer_<T>): void;
        get(arg0: $UUID_): T;
        get(arg0: number): T;
        getAll(): $Iterable<T>;
        constructor();
        get all(): $Iterable<T>;
    }
}
