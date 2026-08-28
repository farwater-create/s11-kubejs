import { $UnaryOperator_ } from "@package/java/util/function";
import { $ChunkTaskPriorityQueueSorter$Message, $ThreadedLevelLightEngine, $ServerLevel, $GenerationChunkHolder } from "@package/net/minecraft/server/level";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ProcessorHandle } from "@package/net/minecraft/util/thread";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Runnable_, $Enum, $Record, $Runnable } from "@package/java/lang";
import { $List, $EnumSet } from "@package/java/util";
import { $Heightmap$Types, $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $StaticCache2D } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/chunk/status" {
    export class $ChunkStatusTask {
    }
    export interface $ChunkStatusTask {
        doWork(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatusTask}.
     */
    export type $ChunkStatusTask_ = ((arg0: $WorldGenContext, arg1: $ChunkStep, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess) => $CompletableFuture<$ChunkAccess>);
    export class $ChunkStatusTasks {
        static full(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static light(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static passThrough(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static initializeLight(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateBiomes(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateSpawn(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateSurface(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateNoise(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateCarvers(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateFeatures(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static loadStructureStarts(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateStructureStarts(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        static generateStructureReferences(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        constructor();
    }
    export class $ChunkStep$Builder {
        build(): $ChunkStep;
        addRequirement(status: $ChunkStatus, radius: number): $ChunkStep$Builder;
        blockStateWriteRadius(blockStateWriteRadius: number): $ChunkStep$Builder;
        setTask(task: $ChunkStatusTask_): $ChunkStep$Builder;
        constructor(status: $ChunkStatus);
        constructor(status: $ChunkStatus, parent: $ChunkStep_);
        set task(value: $ChunkStatusTask_);
    }
    export class $WorldGenContext extends $Record {
        generator(): $ChunkGenerator;
        level(): $ServerLevel;
        structureManager(): $StructureTemplateManager;
        lightEngine(): $ThreadedLevelLightEngine;
        mainThreadMailBox(): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        constructor(arg0: $ServerLevel, arg1: $ChunkGenerator, arg2: $StructureTemplateManager, arg3: $ThreadedLevelLightEngine, arg4: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    /**
     * Values that may be interpreted as {@link $WorldGenContext}.
     */
    export type $WorldGenContext_ = { level?: $ServerLevel, structureManager?: $StructureTemplateManager, mainThreadMailBox?: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>, lightEngine?: $ThreadedLevelLightEngine, generator?: $ChunkGenerator,  } | [level?: $ServerLevel, structureManager?: $StructureTemplateManager, mainThreadMailBox?: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>, lightEngine?: $ThreadedLevelLightEngine, generator?: $ChunkGenerator, ];
    export class $ChunkPyramid extends $Record {
        steps(): $ImmutableList<$ChunkStep>;
        getStepTo(status: $ChunkStatus): $ChunkStep;
        static GENERATION_PYRAMID: $ChunkPyramid;
        static LOADING_PYRAMID: $ChunkPyramid;
        constructor(arg0: $ImmutableList<$ChunkStep_>);
    }
    /**
     * Values that may be interpreted as {@link $ChunkPyramid}.
     */
    export type $ChunkPyramid_ = { steps?: $ImmutableList<$ChunkStep_>,  } | [steps?: $ImmutableList<$ChunkStep_>, ];
    export class $ChunkDependencies {
        size(): number;
        get(radius: number): $ChunkStatus;
        asList(): $ImmutableList<$ChunkStatus>;
        getRadius(): number;
        getRadiusOf(status: $ChunkStatus): number;
        constructor(dependencyByRadius: $ImmutableList<$ChunkStatus>);
        get radius(): number;
    }
    export class $ChunkPyramid$Builder {
        step(status: $ChunkStatus, task: $UnaryOperator_<$ChunkStep$Builder>): $ChunkPyramid$Builder;
        build(): $ChunkPyramid;
        constructor();
    }
    export class $ChunkType extends $Enum<$ChunkType> {
        static values(): $ChunkType[];
        static valueOf(arg0: string): $ChunkType;
        static LEVELCHUNK: $ChunkType;
        static PROTOCHUNK: $ChunkType;
    }
    /**
     * Values that may be interpreted as {@link $ChunkType}.
     */
    export type $ChunkType_ = "protochunk" | "levelchunk";
    export class $ChunkStep extends $Record {
        apply(worldGenContext: $WorldGenContext_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        task(): $ChunkStatusTask;
        targetStatus(): $ChunkStatus;
        directDependencies(): $ChunkDependencies;
        getAccumulatedRadiusOf(status: $ChunkStatus): number;
        blockStateWriteRadius(): number;
        accumulatedDependencies(): $ChunkDependencies;
        constructor(arg0: $ChunkStatus, arg1: $ChunkDependencies, arg2: $ChunkDependencies, arg3: number, arg4: $ChunkStatusTask_);
    }
    /**
     * Values that may be interpreted as {@link $ChunkStep}.
     */
    export type $ChunkStep_ = { targetStatus?: $ChunkStatus, directDependencies?: $ChunkDependencies, accumulatedDependencies?: $ChunkDependencies, blockStateWriteRadius?: number, task?: $ChunkStatusTask_,  } | [targetStatus?: $ChunkStatus, directDependencies?: $ChunkDependencies, accumulatedDependencies?: $ChunkDependencies, blockStateWriteRadius?: number, task?: $ChunkStatusTask_, ];
    export class $ChunkStatus {
        getName(): string;
        static max(first: $ChunkStatus, second: $ChunkStatus): $ChunkStatus;
        getParent(): $ChunkStatus;
        getIndex(): number;
        isAfter(chunkStatus: $ChunkStatus): boolean;
        isBefore(chunkStatus: $ChunkStatus): boolean;
        static byName(name: string): $ChunkStatus;
        isOrBefore(chunkStatus: $ChunkStatus): boolean;
        heightmapsAfter(): $EnumSet<$Heightmap$Types>;
        getChunkSaveHeightmaps(): $EnumSet<$Heightmap$Types>;
        getChunkType(): $ChunkType;
        static getStatusList(): $List<$ChunkStatus>;
        isOrAfter(chunkStatus: $ChunkStatus): boolean;
        static LIGHT: $ChunkStatus;
        static NOISE: $ChunkStatus;
        static MAX_STRUCTURE_DISTANCE: number;
        static SPAWN: $ChunkStatus;
        static FULL: $ChunkStatus;
        static FEATURES: $ChunkStatus;
        static STRUCTURE_STARTS: $ChunkStatus;
        static STRUCTURE_REFERENCES: $ChunkStatus;
        static FINAL_HEIGHTMAPS: $EnumSet<$Heightmap$Types>;
        static SURFACE: $ChunkStatus;
        static INITIALIZE_LIGHT: $ChunkStatus;
        static BIOMES: $ChunkStatus;
        static CARVERS: $ChunkStatus;
        static EMPTY: $ChunkStatus;
        constructor(parent: $ChunkStatus | null, heightmapsAfter: $EnumSet<$Heightmap$Types_>, chunkType: $ChunkType_);
        get name(): string;
        get parent(): $ChunkStatus;
        get index(): number;
        get chunkSaveHeightmaps(): $EnumSet<$Heightmap$Types>;
        get chunkType(): $ChunkType;
        static get statusList(): $List<$ChunkStatus>;
    }
}
