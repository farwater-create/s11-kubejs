import { $ChunkPos, $LevelHeightAccessor, $LevelReader } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $PointOfInterestSetExtended, $PointOfInterestStorageExtended } from "@package/net/caffeinemc/mods/lithium/common/world/interests";
import { $LevelChunkSection } from "@package/net/minecraft/world/level/chunk";
import { $Set, $Optional, $Set_ } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $RandomSource } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $RegionStorageInfo_, $ChunkIOErrorReporter, $SectionStorage } from "@package/net/minecraft/world/level/chunk/storage";
import { $Predicate, $Consumer_, $BiConsumer, $Predicate_, $BiPredicate_ } from "@package/java/util/function";
import { $SectionTracker } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Holder_, $RegistryAccess, $Registry, $SectionPos, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Runnable_, $Enum, $Record } from "@package/java/lang";
import { $IPOIUnloading } from "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks";

declare module "@package/net/minecraft/world/entity/ai/village/poi" {
    export class $PoiType extends $Record {
        is(state: $BlockState_): boolean;
        maxTickets(): number;
        validRange(): number;
        matchingStates(): $Set<$BlockState>;
        static NONE: $Predicate<$Holder<$PoiType>>;
        constructor(matchingStates: $Set_<$BlockState_>, maxTickets: number, validRange: number);
    }
    /**
     * Values that may be interpreted as {@link $PoiType}.
     */
    export type $PoiType_ = { maxTickets?: number, validRange?: number, matchingStates?: $Set_<$BlockState_>,  } | [maxTickets?: number, validRange?: number, matchingStates?: $Set_<$BlockState_>, ];
    export class $PoiManager extends $SectionStorage<$PoiSection> implements $PointOfInterestStorageExtended, $IPOIUnloading {
        remove(pos: $BlockPos_): void;
        add(pos: $BlockPos_, type: $Holder_<$PoiType>): void;
        find(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): ($BlockPos) | undefined;
        getType(pos: $BlockPos_): ($Holder<$PoiType>) | undefined;
        release(pos: $BlockPos_): boolean;
        exists(pos: $BlockPos_, typePredicate: $Predicate_<$Holder<$PoiType>>): boolean;
        findAll(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$BlockPos>;
        take(typePredicate: $Predicate_<$Holder<$PoiType>>, combinedTypePosPredicate: $BiPredicate_<$Holder<$PoiType>, $BlockPos>, pos: $BlockPos_, distance: number): ($BlockPos) | undefined;
        existsAtPosition(type: $ResourceKey_<$PoiType>, pos: $BlockPos_): boolean;
        findClosest(typePredicate: $Predicate_<any>, posPredicate: $Predicate_<any>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Optional<any>;
        findClosest(typePredicate: $Predicate_<any>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Optional<any>;
        sectionsToVillage(sectionPos: $SectionPos): number;
        getInRange(typePredicate: $Predicate_<any>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<any>;
        findClosestWithType(typePredicate: $Predicate_<$Holder<$PoiType>>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): ($Pair<$Holder<$PoiType>, $BlockPos>) | undefined;
        checkConsistencyWithBlocks(sectionPos: $SectionPos, levelChunkSection: $LevelChunkSection): void;
        getRandom(typePredicate: $Predicate_<any>, posPredicate: $Predicate_<any>, status: $PoiManager$Occupancy_, pos: $BlockPos_, distance: number, random: $RandomSource): $Optional<any>;
        findAllWithType(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>;
        getInSquare(typePredicate: $Predicate_<$Holder<$PoiType>>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        getCountInRange(typePredicate: $Predicate_<any>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): number;
        /**
         * @deprecated
         */
        getFreeTickets(pos: $BlockPos_): number;
        isVillageCenter(chunkPos: number): boolean;
        findAllClosestFirstWithType(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>;
        getInChunk(typePredicate: $Predicate_<any>, posChunk: $ChunkPos, status: $PoiManager$Occupancy_): $Stream<any>;
        lithium$findNearestForPortalLogic(arg0: $BlockPos_, arg1: number, arg2: $Holder_<any>, arg3: $PoiManager$Occupancy_, arg4: $Predicate_<any>, arg5: $WorldBorder): $Optional<any>;
        ensureLoadedAndValid(levelReader: $LevelReader, pos: $BlockPos_, coordinateOffset: number): void;
        static MAX_VILLAGE_DISTANCE: number;
        static VILLAGE_SECTION_SIZE: number;
        levelHeightAccessor: $LevelHeightAccessor;
        constructor(info: $RegionStorageInfo_, folder: $Path_, fixerUpper: $DataFixer, sync: boolean, registryAccess: $RegistryAccess, errorReporter: $ChunkIOErrorReporter, levelHeightAccessor: $LevelHeightAccessor);
    }
    export class $PoiManager$DistanceTracker extends $SectionTracker {
        levelCount: number;
        static SOURCE: number;
    }
    export class $PoiManager$Occupancy extends $Enum<$PoiManager$Occupancy> {
        static values(): $PoiManager$Occupancy[];
        static valueOf(arg0: string): $PoiManager$Occupancy;
        getTest(): $Predicate<$PoiRecord>;
        static IS_OCCUPIED: $PoiManager$Occupancy;
        static HAS_SPACE: $PoiManager$Occupancy;
        static ANY: $PoiManager$Occupancy;
        get test(): $Predicate<$PoiRecord>;
    }
    /**
     * Values that may be interpreted as {@link $PoiManager$Occupancy}.
     */
    export type $PoiManager$Occupancy_ = "has_space" | "is_occupied" | "any";
    export class $PoiRecord {
        getPoiType(): $Holder<$PoiType>;
        hasSpace(): boolean;
        static codec(executable: $Runnable_): $Codec<$PoiRecord>;
        isOccupied(): boolean;
        getPos(): $BlockPos;
        acquireTicket(): boolean;
        /**
         * @deprecated
         */
        getFreeTickets(): number;
        releaseTicket(): boolean;
        constructor(pod: $BlockPos_, poiType: $Holder_<$PoiType>, setDirty: $Runnable_);
        get poiType(): $Holder<$PoiType>;
        get occupied(): boolean;
        get pos(): $BlockPos;
        get freeTickets(): number;
    }
    export class $PoiTypes {
        static register(key: $Registry<$PoiType_>, value: $ResourceKey_<$PoiType>, matchingStates: $Set_<$BlockState_>, maxTickets: number, validRange: number): $PoiType;
        static bootstrap(registry: $Registry<$PoiType_>): $PoiType;
        static registerBlockStates(poi: $Holder_<$PoiType>, states: $Set_<$BlockState_>): void;
        static hasPoi(state: $BlockState_): boolean;
        static forState(state: $BlockState_): ($Holder<$PoiType>) | undefined;
        static CARTOGRAPHER: $ResourceKey<$PoiType>;
        static MASON: $ResourceKey<$PoiType>;
        static SHEPHERD: $ResourceKey<$PoiType>;
        static ARMORER: $ResourceKey<$PoiType>;
        static TOOLSMITH: $ResourceKey<$PoiType>;
        static MEETING: $ResourceKey<$PoiType>;
        static BEE_NEST: $ResourceKey<$PoiType>;
        static LODESTONE: $ResourceKey<$PoiType>;
        static FARMER: $ResourceKey<$PoiType>;
        static FLETCHER: $ResourceKey<$PoiType>;
        static LEATHERWORKER: $ResourceKey<$PoiType>;
        static LIBRARIAN: $ResourceKey<$PoiType>;
        static CLERIC: $ResourceKey<$PoiType>;
        static FISHERMAN: $ResourceKey<$PoiType>;
        static BUTCHER: $ResourceKey<$PoiType>;
        static BEEHIVE: $ResourceKey<$PoiType>;
        static NETHER_PORTAL: $ResourceKey<$PoiType>;
        static WEAPONSMITH: $ResourceKey<$PoiType>;
        static LIGHTNING_ROD: $ResourceKey<$PoiType>;
        static HOME: $ResourceKey<$PoiType>;
        constructor();
    }
    export class $PoiSection implements $PointOfInterestSetExtended {
        remove(pos: $BlockPos_): void;
        add(pos: $BlockPos_, type: $Holder_<$PoiType>): void;
        getType(pos: $BlockPos_): ($Holder<$PoiType>) | undefined;
        release(pos: $BlockPos_): boolean;
        exists(pos: $BlockPos_, typePredicate: $Predicate_<$Holder<$PoiType>>): boolean;
        isValid(): boolean;
        refresh(posToTypeConsumer: $Consumer_<$BiConsumer<$BlockPos, $Holder<$PoiType>>>): void;
        static codec(executable: $Runnable_): $Codec<$PoiSection>;
        getRecords(typePredicate: $Predicate_<$Holder<$PoiType>>, status: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        /**
         * @deprecated
         */
        getFreeTickets(pos: $BlockPos_): number;
        lithium$collectMatchingPoints(arg0: $Predicate_<any>, arg1: $PoiManager$Occupancy_, arg2: $Consumer_<any>): void;
        constructor(setDirty: $Runnable_);
        get valid(): boolean;
    }
}
