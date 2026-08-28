import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $Pattern } from "@package/java/util/regex";
import { $Set, $ListIterator, $List_ } from "@package/java/util";
import { $DimensionDataStorage, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $SimpleRegionStorage, $ChunkStorage, $RegionFile } from "@package/net/minecraft/world/level/chunk/storage";
import { $Reference2FloatMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Record, $AutoCloseable } from "@package/java/lang";
import { $LevelStem } from "@package/net/minecraft/world/level/dimension";

declare module "@package/net/minecraft/util/worldupdate" {
    export class $WorldUpgrader$SimpleRegionStorageUpgrader extends $WorldUpgrader$AbstractUpgrader<$SimpleRegionStorage> {
    }
    export class $WorldUpgrader$ChunkUpgrader extends $WorldUpgrader$AbstractUpgrader<$ChunkStorage> {
    }
    export class $WorldUpgrader$EntityUpgrader extends $WorldUpgrader$SimpleRegionStorageUpgrader {
    }
    export class $WorldUpgrader$AbstractUpgrader<T extends $AutoCloseable> {
    }
    export class $WorldUpgrader$PoiUpgrader extends $WorldUpgrader$SimpleRegionStorageUpgrader {
    }
    export class $WorldUpgrader {
        cancel(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getStatus(): $Component;
        isFinished(): boolean;
        getProgress(): number;
        getConverted(): number;
        getTotalChunks(): number;
        dimensionProgress(level: $ResourceKey_<$Level>): number;
        static resolveRecreateDirectory(path: $Path_): $Path;
        getSkipped(): number;
        static STATUS_UPGRADING_ENTITIES: $MutableComponent;
        recreateRegionFiles: boolean;
        static REGEX: $Pattern;
        static STATUS_FINISHED_ENTITIES: $MutableComponent;
        dataFixer: $DataFixer;
        overworldDataStorage: $DimensionDataStorage;
        skipped: number;
        running: boolean;
        static STATUS_UPGRADING_POI: $MutableComponent;
        static STATUS_FINISHED_CHUNKS: $MutableComponent;
        eraseCache: boolean;
        converted: number;
        levelStorage: $LevelStorageSource$LevelStorageAccess;
        progress: number;
        totalChunks: number;
        static LOGGER: $Logger;
        static STATUS_UPGRADING_CHUNKS: $MutableComponent;
        totalFiles: number;
        progressMap: $Reference2FloatMap<$ResourceKey<$Level>>;
        static STATUS_FINISHED_POI: $MutableComponent;
        dimensions: $Registry<$LevelStem>;
        status: $Component;
        constructor(levelStorage: $LevelStorageSource$LevelStorageAccess, dataFixer: $DataFixer, registryAccess: $RegistryAccess, eraseCache: boolean, recreateRegionFiles: boolean);
        get finished(): boolean;
    }
    export class $WorldUpgrader$FileToUpgrade extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WorldUpgrader$FileToUpgrade}.
     */
    export type $WorldUpgrader$FileToUpgrade_ = { chunksToUpgrade?: $List_<$ChunkPos>, file?: $RegionFile,  } | [chunksToUpgrade?: $List_<$ChunkPos>, file?: $RegionFile, ];
    export class $WorldUpgrader$DimensionToUpgrade<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WorldUpgrader$DimensionToUpgrade}.
     */
    export type $WorldUpgrader$DimensionToUpgrade_<T> = { storage?: any, dimensionKey?: $ResourceKey_<$Level>, files?: $ListIterator<$WorldUpgrader$FileToUpgrade_>,  } | [storage?: any, dimensionKey?: $ResourceKey_<$Level>, files?: $ListIterator<$WorldUpgrader$FileToUpgrade_>, ];
}
