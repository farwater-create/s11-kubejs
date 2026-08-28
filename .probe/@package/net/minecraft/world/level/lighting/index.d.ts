import { $ChunkPos, $LevelHeightAccessor, $BlockGetter, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $LongPredicate_ } from "@package/java/util/function";
import { $Long2ObjectOpenHashMap, $LongLinkedOpenHashSet, $LongSet, $Long2ByteMap, $Long2ObjectMap, $Long2LongLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockPos_, $Direction_, $SectionPos, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SkyLightSectionStorageExtension } from "@package/dev/engine_room/flywheel/backend";
import { $DataLayer, $LightChunk, $LightChunkGetter, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum, $Object } from "@package/java/lang";
import { $LayerLightSectionStorageAccessor, $SkyDataLayerStorageMapAccessor, $LightEngineAccessor } from "@package/dev/engine_room/flywheel/backend/mixin/light";

declare module "@package/net/minecraft/world/level/lighting" {
    export class $LayerLightEventListener {
    }
    export interface $LayerLightEventListener extends $LightEventListener {
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        getLightValue(levelPos: $BlockPos_): number;
    }
    export class $DynamicGraphMinFixedPoint {
        removeIf(predicate: $LongPredicate_): void;
        getLevel(chunkPos: number): number;
        setLevel(chunkPos: number, arg1: number): void;
        isSource(pos: number): boolean;
        runUpdates(toUpdateCount: number): number;
        getQueueSize(): number;
        hasWork(): boolean;
        checkNode(levelPos: number): void;
        removeFromQueue(levelPos: number): void;
        checkEdge(fromPos: number, arg1: number, toPos: number, arg3: boolean): void;
        checkNeighbor(fromPos: number, arg1: number, toPos: number, arg3: boolean): void;
        /**
         * Returns level propagated from start position with specified level to the neighboring end position.
         */
        getComputedLevel(startPos: number, arg1: number, endPos: number): number;
        checkNeighborsAfterUpdate(pos: number, arg1: number, level: boolean): void;
        /**
         * Returns level propagated from start position with specified level to the neighboring end position.
         */
        computeLevelFromNeighbor(startPos: number, arg1: number, endPos: number): number;
        levelCount: number;
        static SOURCE: number;
        constructor(firstQueuedLevel: number, width: number, height: number);
        get queueSize(): number;
    }
    export class $LightEngine$QueueEntry {
        static increaseSkySourceInDirections(down: boolean, north: boolean, south: boolean, west: boolean, east: boolean): number;
        static increaseSkipOneDirection(level: number, fromEmptyShape: boolean, direction: $Direction_): number;
        static decreaseAllDirections(level: number): number;
        static isIncreaseFromEmission(entry: number): boolean;
        static increaseOnlyOneDirection(level: number, fromEmptyShape: boolean, direction: $Direction_): number;
        static shouldPropagateInDirection(entry: number, arg1: $Direction_): boolean;
        static increaseLightFromEmission(level: number, fromEmptyShape: boolean): number;
        static decreaseSkipOneDirection(level: number, direction: $Direction_): number;
        static isFromEmptyShape(entry: number): boolean;
        static getFromLevel(entry: number): number;
        constructor();
    }
    export class $DataLayerStorageMap<M extends $DataLayerStorageMap<M>> {
        getLayer(index: number): $DataLayer;
        copy(): M;
        clearCache(): void;
        hasLayer(sectionPos: number): boolean;
        setLayer(sectionPos: number, arg1: $DataLayer): void;
        disableCache(): void;
        removeLayer(index: number): $DataLayer;
        copyDataLayer(index: number): $DataLayer;
        map: $Long2ObjectOpenHashMap<$DataLayer>;
        constructor(map: $Long2ObjectOpenHashMap<$DataLayer>);
    }
    export class $LevelLightEngine implements $LightEventListener {
        runLightUpdates(): number;
        lightOnInSection(sectionPos: $SectionPos): boolean;
        checkBlock(pos: $BlockPos_): void;
        propagateLightSources(chunkPos: $ChunkPos): void;
        getDebugSectionType(lightLayer: $LightLayer_, sectionPos: $SectionPos): $LayerLightSectionStorage$SectionType;
        getLightSectionCount(): number;
        updateSectionStatus(pos: $SectionPos, isEmpty: boolean): void;
        hasLightWork(): boolean;
        getMinLightSection(): number;
        getMaxLightSection(): number;
        getDebugData(lightLayer: $LightLayer_, sectionPos: $SectionPos): string;
        queueSectionData(lightLayer: $LightLayer_, sectionPos: $SectionPos, dataLayer: $DataLayer | null): void;
        retainData(pos: $ChunkPos, retain: boolean): void;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        getLayerListener(type: $LightLayer_): $LayerLightEventListener;
        setLightEnabled(pos: $ChunkPos, retain: boolean): void;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEngine: $LightEngine<never, never>;
        constructor(lightChunkGetter: $LightChunkGetter, blockLight: boolean, skyLight: boolean);
        get lightSectionCount(): number;
        get minLightSection(): number;
        get maxLightSection(): number;
    }
    export class $SpatialLongSet$InternalMap extends $Long2LongLinkedOpenHashMap {
    }
    export class $LayerLightSectionStorage$SectionType extends $Enum<$LayerLightSectionStorage$SectionType> {
        static values(): $LayerLightSectionStorage$SectionType[];
        static valueOf(arg0: string): $LayerLightSectionStorage$SectionType;
        display(): string;
        static LIGHT_ONLY: $LayerLightSectionStorage$SectionType;
        static LIGHT_AND_DATA: $LayerLightSectionStorage$SectionType;
        static EMPTY: $LayerLightSectionStorage$SectionType;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightSectionStorage$SectionType}.
     */
    export type $LayerLightSectionStorage$SectionType_ = "empty" | "light_only" | "light_and_data";
    export class $SpatialLongSet extends $LongLinkedOpenHashSet {
        constructor(expectedSize: number, loadFactor: number);
    }
    export class $SkyLightEngine extends $LightEngine<$SkyLightSectionStorage$SkyDataLayerStorageMap, $SkyLightSectionStorage> {
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $SkyLightSectionStorage;
        constructor(chunkSource: $LightChunkGetter);
        constructor(chunkSource: $LightChunkGetter, sectionStorage: $SkyLightSectionStorage);
    }
    export class $LayerLightSectionStorage$SectionState {
    }
    export class $LightEngine<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> implements $LayerLightEventListener, $LightEngineAccessor<any, any> {
        getState(pos: $BlockPos_): $BlockState;
        runLightUpdates(): number;
        static getLightBlockInto(level: $BlockGetter, state1: $BlockState_, pos1: $BlockPos_, state2: $BlockState_, pos2: $BlockPos_, direction: $Direction_, defaultReturnValue: number): number;
        checkBlock(pos: $BlockPos_): void;
        getDebugSectionType(sectionPos: number): $LayerLightSectionStorage$SectionType;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        hasLightWork(): boolean;
        static isEmptyShape(state: $BlockState_): boolean;
        propagateDecrease(packedPos1: number, arg1: number): void;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        propagateIncrease(packedPos: number, arg1: number, queueEntry: number): void;
        enqueueIncrease(packedPos1: number, arg1: number): void;
        shapeOccludes(packedPos1: number, arg1: $BlockState_, state1: number, packedPos2: $BlockState_, arg4: $Direction_): boolean;
        enqueueDecrease(packedPos1: number, arg1: number): void;
        getDebugData(sectionPos: number): string;
        queueSectionData(sectionPos: number, arg1: $DataLayer | null): void;
        getChunk(x: number, z: number): $LightChunk;
        static hasDifferentLightProperties(level: $BlockGetter, pos: $BlockPos_, state1: $BlockState_, state2: $BlockState_): boolean;
        retainData(chunkPos: $ChunkPos, retainData: boolean): void;
        getOpacity(state: $BlockState_, pos: $BlockPos_): number;
        checkNode(packedPos: number): void;
        static getOcclusionShape(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, direction: $Direction_): $VoxelShape;
        getOcclusionShape(state: $BlockState_, pos: number, arg2: $Direction_): $VoxelShape;
        getLightValue(levelPos: $BlockPos_): number;
        setLightEnabled(chunkPos: $ChunkPos, retainData: boolean): void;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        flywheel$storage(): $Object;
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $Object;
        constructor(chunkSource: $LightChunkGetter, storage: $Object);
    }
    export class $LeveledPriorityQueue {
        isEmpty(): boolean;
        enqueue(value: number, arg1: number): void;
        dequeue(value: number, arg1: number, levelIndex: number): void;
        removeFirstLong(): number;
        constructor(levelCount: number, expectedSize: number);
        get empty(): boolean;
    }
    export class $SkyLightSectionStorage extends $LayerLightSectionStorage<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyLightSectionStorageExtension {
        hasLightDataAtOrBelow(y: number): boolean;
        isAboveData(sectionPos: number): boolean;
        getBottomSectionY(): number;
        getTopSectionY(levelPos: number): number;
        getLightValue(packedPos: number, arg1: boolean): number;
        flywheel$skyDataLayer(sectionPos: number): $DataLayer;
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: $SkyLightSectionStorage$SkyDataLayerStorageMap;
        chunkSource: $LightChunkGetter;
        updatingSectionData: $SkyLightSectionStorage$SkyDataLayerStorageMap;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(chunkSource: $LightChunkGetter);
        get bottomSectionY(): number;
    }
    export class $LayerLightEventListener$DummyLightLayerEventListener extends $Enum<$LayerLightEventListener$DummyLightLayerEventListener> implements $LayerLightEventListener {
        static values(): $LayerLightEventListener$DummyLightLayerEventListener[];
        static valueOf(arg0: string): $LayerLightEventListener$DummyLightLayerEventListener;
        runLightUpdates(): number;
        checkBlock(pos: $BlockPos_): void;
        propagateLightSources(chunkPos: $ChunkPos): void;
        updateSectionStatus(pos: $SectionPos, isEmpty: boolean): void;
        hasLightWork(): boolean;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        getLightValue(levelPos: $BlockPos_): number;
        setLightEnabled(chunkPos: $ChunkPos, lightEnabled: boolean): void;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        static INSTANCE: $LayerLightEventListener$DummyLightLayerEventListener;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightEventListener$DummyLightLayerEventListener}.
     */
    export type $LayerLightEventListener$DummyLightLayerEventListener_ = "instance";
    export class $LightEventListener {
    }
    export interface $LightEventListener {
        runLightUpdates(): number;
        checkBlock(pos: $BlockPos_): void;
        propagateLightSources(chunkPos: $ChunkPos): void;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        hasLightWork(): boolean;
        setLightEnabled(chunkPos: $ChunkPos, lightEnabled: boolean): void;
    }
    export class $LayerLightSectionStorage<M extends $DataLayerStorageMap<M>> implements $LayerLightSectionStorageAccessor {
        lightOnInSection(sectionPos: number): boolean;
        storingLightForSection(sectionPos: number): boolean;
        getDebugSectionType(sectionPos: number): $LayerLightSectionStorage$SectionType;
        getDataLayerToWrite(sectionPos: number): $DataLayer;
        markNewInconsistencies(lightEngine: $LightEngine<M, never>): void;
        updateSectionStatus(sectionColumnPos: number, arg1: boolean): void;
        swapSectionMap(): void;
        getDataLayerData(sectionPos: number): $DataLayer;
        setStoredLevel(levelPos: number, arg1: number): void;
        getStoredLevel(levelPos: number): number;
        hasInconsistencies(): boolean;
        queueSectionData(sectionPos: number, arg1: $DataLayer | null): void;
        retainData(sectionColumnPos: number, arg1: boolean): void;
        getLightValue(levelPos: number): number;
        setLightEnabled(sectionColumnPos: number, arg1: boolean): void;
        putSectionState(sectionPos: number, arg1: number): void;
        onNodeAdded(sectionPos: number): void;
        getDataLayer(sectionPos: number, arg1: boolean): $DataLayer;
        getDataLayer(map: M, sectionPos: number): $DataLayer;
        createDataLayer(sectionPos: number): $DataLayer;
        onNodeRemoved(sectionPos: number): void;
        markSectionAndNeighborsAsAffected(sectionPos: number): void;
        flywheel$callGetDataLayer(sectionPos: number, arg1: boolean): $DataLayer;
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: M;
        chunkSource: $LightChunkGetter;
        updatingSectionData: M;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(layer: $LightLayer_, chunkSource: $LightChunkGetter, updatingSectionData: M);
    }
    export class $ChunkSkyLightSources {
        update(level: $BlockGetter, x: number, y: number, z: number): boolean;
        fillFrom(chunk: $ChunkAccess): void;
        getHighestLowestSourceY(): number;
        getLowestSourceY(x: number, z: number): number;
        static NEGATIVE_INFINITY: number;
        constructor(level: $LevelHeightAccessor);
        get highestLowestSourceY(): number;
    }
    export class $BlockLightSectionStorage$BlockDataLayerStorageMap extends $DataLayerStorageMap<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
        map: $Long2ObjectOpenHashMap<$DataLayer>;
    }
    export class $SkyLightSectionStorage$SkyDataLayerStorageMap extends $DataLayerStorageMap<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyDataLayerStorageMapAccessor {
        map: $Long2ObjectOpenHashMap<$DataLayer>;
    }
    export class $BlockLightEngine extends $LightEngine<$BlockLightSectionStorage$BlockDataLayerStorageMap, $BlockLightSectionStorage> {
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $BlockLightSectionStorage;
        constructor(chunkSource: $LightChunkGetter);
        constructor(chunkSource: $LightChunkGetter, storage: $BlockLightSectionStorage);
    }
    export class $BlockLightSectionStorage extends $LayerLightSectionStorage<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: $BlockLightSectionStorage$BlockDataLayerStorageMap;
        chunkSource: $LightChunkGetter;
        updatingSectionData: $BlockLightSectionStorage$BlockDataLayerStorageMap;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(chunkSource: $LightChunkGetter);
    }
}
