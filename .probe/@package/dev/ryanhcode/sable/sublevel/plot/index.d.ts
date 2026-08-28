import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $UUID_, $Map$Entry, $Set, $List, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ServerLevelPlotAccessor, $LevelPlotAccessor } from "@package/dev/kyanbirb/touys/mixin/sub_level_template";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $DifficultyInstance, $Difficulty } from "@package/net/minecraft/world";
import { $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $ObjectCollection } from "@package/it/unimi/dsi/fastutil/objects";
import { $SoundEvent, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $ChunkHolder, $ChunkResult, $ChunkHolder$PlayerProvider_, $ChunkHolder$LevelChangeListener_, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Registry, $Holder$Reference, $Holder_, $Holder, $Direction_, $HolderLookup } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $BlockEntitySubLevelActor, $BlockSubLevelLiftProvider$LiftProviderContext, $BlockEntitySubLevelReactionWheel } from "@package/dev/ryanhcode/sable/api/block";
import { $Iterable, $Class, $Object } from "@package/java/lang";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $ServerLevelAccessor, $LightLayer_, $ChunkPos, $BlockGetter, $EntityGetter, $ClipContext, $ClipBlockStateContext, $CommonLevelAccessor, $LevelHeightAccessor, $Level, $ColorResolver_ } from "@package/net/minecraft/world/level";
import { $TickPriority_, $LevelTickAccess } from "@package/net/minecraft/world/ticks";
import { $BoundingBox3ic } from "@package/dev/ryanhcode/sable/companion/math";
import { $FluidState, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $LevelChunk, $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelData } from "@package/net/minecraft/world/level/storage";
import { $ServerSubLevel, $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReferenceArray, $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BlockEntity, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $SubLevelContainer, $KinematicContraption } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $Vector3dc } from "@package/org/joml";
export * as heat from "@package/dev/ryanhcode/sable/sublevel/plot/heat";

declare module "@package/dev/ryanhcode/sable/sublevel/plot" {
    export class $ClientLevelPlot extends $LevelPlot {
        getSubLevel(): $ClientSubLevel;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $ClientSubLevel);
        get subLevel(): $ClientSubLevel;
    }
    export class $LevelPlot implements $LevelPlotAccessor {
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $Vec3_): boolean;
        contains(arg0: $Vector3dc): boolean;
        contains(arg0: $ChunkPos): boolean;
        addChunkHolder(arg0: $ChunkPos, arg1: $PlotChunkHolder, arg2: boolean): void;
        updateBoundingBox(): void;
        getEmbeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        getCenterBlock(): $BlockPos;
        toGlobal(arg0: $ChunkPos): $ChunkPos;
        tick(): void;
        getBlockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        onRemove(): void;
        onBlockChange(arg0: $BlockPos_, arg1: $BlockState_): void;
        getChunkHolder(arg0: $ChunkPos): $PlotChunkHolder;
        getBoundingBox(): $BoundingBox3ic;
        setBoundingBox(arg0: $BoundingBox3ic): void;
        getChunk(arg0: $ChunkPos): $LevelChunk;
        toLocal(arg0: $ChunkPos): $ChunkPos;
        getLoadedChunks(): $Collection<$PlotChunkHolder>;
        getSubLevel(): $SubLevel;
        getLightEngine(): $LevelLightEngine;
        getChunkMax(): $ChunkPos;
        expandIfNecessary(arg0: $BlockPos_): void;
        getCenterChunk(): $ChunkPos;
        newEmptyChunk(arg0: $ChunkPos): void;
        getChunkMin(): $ChunkPos;
        getBlockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        getBlockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
        touys$getExpandPlotIfNecessary(): boolean;
        touys$setExpandPlotIfNecessary(arg0: boolean): void;
        touys$getContainer(): $SubLevelContainer;
        touys$getLogSize(): number;
        touys$getBiome(): $ResourceKey<$Biome>;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $SubLevel);
        get embeddedLevelAccessor(): $EmbeddedPlotLevelAccessor;
        get centerBlock(): $BlockPos;
        get blockEntityActors(): $Iterable<$BlockEntitySubLevelActor>;
        get loadedChunks(): $Collection<$PlotChunkHolder>;
        get subLevel(): $SubLevel;
        get lightEngine(): $LevelLightEngine;
        get chunkMax(): $ChunkPos;
        get centerChunk(): $ChunkPos;
        get chunkMin(): $ChunkPos;
        get blockEntityReactionWheelMap(): $Set<$Map$Entry<$BlockPos, $BlockEntitySubLevelReactionWheel>>;
        get blockEntityReactionWheels(): $Collection<$BlockEntitySubLevelReactionWheel>;
    }
    export class $PlotChunkHolder extends $ChunkHolder {
        static create(arg0: $Level, arg1: $ChunkPos, arg2: $LevelLightEngine, arg3: $LevelChunk): $PlotChunkHolder;
        handleBlockChange(arg0: number, arg1: number, arg2: number, arg3: $BlockState_, arg4: $BlockState_): void;
        getBoundingBox(): $BoundingBox3ic;
        getChunk(): $LevelChunk;
        getHeatSection(arg0: number): $HeatDataChunkSection;
        setHeatSection(arg0: number, arg1: $HeatDataChunkSection): void;
        static UNLOADED_LEVEL_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        currentlyLoading: $LevelChunk;
        pos: $ChunkPos;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        entityTickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_LEVEL_CHUNK: $ChunkResult<$LevelChunk>;
        tickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        startedWork: $AtomicReference<$ChunkStatus>;
        futures: $AtomicReferenceArray<$CompletableFuture<$ChunkResult<$ChunkAccess>>>;
        fullChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        constructor(arg0: $LevelChunk, arg1: $ChunkPos, arg2: $LevelHeightAccessor, arg3: $LevelLightEngine, arg4: $ChunkHolder$LevelChangeListener_, arg5: $ChunkHolder$PlayerProvider_);
        get boundingBox(): $BoundingBox3ic;
        get chunk(): $LevelChunk;
    }
    export class $HeatDataChunkSection {
        get(arg0: number, arg1: number, arg2: number): number;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static getIndex(arg0: number, arg1: number, arg2: number): number;
        static SIZE: number;
        constructor();
    }
    export class $EmbeddedPlotLevelAccessor implements $CommonLevelAccessor, $ServerLevelAccessor {
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        getLevel(): $ServerLevel;
        getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<$Entity>): $List<$Entity>;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getFluidState(arg0: $BlockPos_): $FluidState;
        isClientSide(): boolean;
        addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getLevelData(): $LevelData;
        getWorldBorder(): $WorldBorder;
        enabledFeatures(): $FeatureFlagSet;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        getChunkSource(): $ChunkSource;
        levelEvent(arg0: $Player, arg1: number, arg2: $BlockPos_, arg3: number): void;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus, arg3: boolean): $ChunkAccess;
        getCurrentDifficultyAt(arg0: $BlockPos_): $DifficultyInstance;
        getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent, arg3: $SoundSource_, arg4: number, arg5: number): void;
        getServer(): $MinecraftServer;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Vec3_, arg2: $GameEvent$Context_): void;
        getRandom(): $RandomSource;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        getBlockState(arg0: $BlockPos_): $BlockState;
        hasChunk(arg0: number, arg1: number): boolean;
        getShade(arg0: $Direction_, arg1: boolean): number;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        dimensionType(): $DimensionType;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        getLightEngine(): $LevelLightEngine;
        isStateAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>): boolean;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        isFluidAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$FluidState>): boolean;
        nextSubTickCount(): number;
        getSkyDarken(): number;
        getBiomeManager(): $BiomeManager;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType<T>): (T) | undefined;
        getEntityCollisions(arg0: $Entity | null, arg1: $AABB_): $List<$VoxelShape>;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        isUnobstructed(arg0: $Entity | null, arg1: $VoxelShape): boolean;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        getEntities(arg0: $Entity | null, arg1: $AABB_): $List<$Entity>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        localvar$zdk000$openpartiesandclaims$onGetEntityCollisions(arg0: $List_<any>, arg1: $Entity, arg2: $AABB_): $List<any>;
        handler$zdk000$openpartiesandclaims$onGetEntitiesOfClass(arg0: $Class<any>, arg1: $AABB_, arg2: $Predicate_<any>, arg3: $CallbackInfoReturnable<any>): void;
        getNearestEntity<T extends $LivingEntity>(arg0: $List_<T>, arg1: $TargetingConditions, arg2: $LivingEntity | null, arg3: number, arg4: number, arg5: number): T;
        getNearestEntity<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity | null, arg3: number, arg4: number, arg5: number, arg6: $AABB_): T;
        getNearestPlayer(arg0: $Entity, arg1: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity> | null): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: number, arg2: number, arg3: number): $Player;
        getPlayerByUUID(arg0: $UUID_): $Player;
        getNearbyPlayers(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: $AABB_): $List<$Player>;
        getNearbyEntities<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: $AABB_): $List<T>;
        getHeight(): number;
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
        getMinBuildHeight(): number;
        containsAnyLiquid(arg0: $AABB_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus): $ChunkAccess;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        getBlockStatesIfLoaded(arg0: $AABB_): $Stream<$BlockState>;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        lithium$getLoadedChunk(arg0: number, arg1: number): $ChunkAccess;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: number, arg1: number): boolean;
        isWaterAt(arg0: $BlockPos_): boolean;
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        holderLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        isEmptyBlock(arg0: $BlockPos_): boolean;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        getDifficulty(): $Difficulty;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        playSound(arg0: $Player | null, arg1: $BlockPos_, arg2: $SoundEvent, arg3: $SoundSource_): void;
        gameEvent(arg0: $Entity | null, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        gameEvent(arg0: $Entity | null, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        dayTime(): number;
        blockUpdated(arg0: $BlockPos_, arg1: $Block): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid, arg2: number, arg3: $TickPriority_): void;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        self(): $EntityGetter;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        canSeeSky(arg0: $BlockPos_): boolean;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        collidesWithSuffocatingBlock(arg0: $Entity | null, arg1: $AABB_): boolean;
        noCollision(arg0: $Entity | null, arg1: $AABB_): boolean;
        noCollision(arg0: $AABB_): boolean;
        noCollision(arg0: $Entity): boolean;
        noBlockCollision(arg0: $Entity | null, arg1: $AABB_): boolean;
        getBlockCollisions(arg0: $Entity | null, arg1: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(arg0: $Entity | null, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): ($Vec3) | undefined;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        isUnobstructed(arg0: $Entity): boolean;
        getCollisions(arg0: $Entity | null, arg1: $AABB_): $Iterable<$VoxelShape>;
        getControlInputSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: boolean): number;
        getBestNeighborSignal(arg0: $BlockPos_): number;
        getSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        hasSignal(arg0: $BlockPos_, arg1: $Direction_): boolean;
        getDirectSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        hasNeighborSignal(arg0: $BlockPos_): boolean;
        getDirectSignalTo(arg0: $BlockPos_): number;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        isAreaLoaded(arg0: $BlockPos_, arg1: number): boolean;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        addFreshEntity(arg0: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity | null): boolean;
        getTimeOfDay(arg0: number): number;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getEntities(): $EntityArrayList;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        clip(arg0: $ClipContext): $BlockHitResult;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getLightEmission(arg0: $BlockPos_): number;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getMaxBuildHeight(): number;
        getMaxSection(): number;
        getMinSection(): number;
        getSectionIndex(arg0: number): number;
        getSectionsCount(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        constructor(arg0: $LevelPlot);
        get level(): $ServerLevel;
        get clientSide(): boolean;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get server(): $MinecraftServer;
        get random(): $RandomSource;
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get blockTicks(): $LevelTickAccess<$Block>;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get skyDarken(): number;
        get biomeManager(): $BiomeManager;
        get minBuildHeight(): number;
        get difficulty(): $Difficulty;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get moonBrightness(): number;
        get moonPhase(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get maxSection(): number;
        get minSection(): number;
        get sectionsCount(): number;
    }
    export class $ServerLevelPlot extends $LevelPlot implements $ServerLevelPlotAccessor {
        load(arg0: $CompoundTag_): void;
        save(): $CompoundTag;
        destroyAllBlocks(): void;
        setBiome(arg0: $ResourceKey_<$Biome>): void;
        addContraption(arg0: $KinematicContraption): void;
        removeContraption(arg0: $KinematicContraption): void;
        getContraptions(): $Collection<$KinematicContraption>;
        getSubLevel(): $ServerSubLevel;
        static invokeLogLoadingErrors$touys_$md$707fe4$0(arg0: $ChunkPos, arg1: number, arg2: string): void;
        getLiftProviders(): $ObjectCollection<$BlockSubLevelLiftProvider$LiftProviderContext>;
        kickAllEntities(): void;
        touys$getLightEngine(): $LevelLightEngine;
        touys$invokeNewNonLitChunk(arg0: $ChunkPos): void;
        touys$invokeLightChunk(arg0: $LevelChunk): void;
        plotPos: $ChunkPos;
        constructor(arg0: $SubLevelContainer, arg1: number, arg2: number, arg3: number, arg4: $ServerSubLevel);
        set biome(value: $ResourceKey_<$Biome>);
        get contraptions(): $Collection<$KinematicContraption>;
        get subLevel(): $ServerSubLevel;
        get liftProviders(): $ObjectCollection<$BlockSubLevelLiftProvider$LiftProviderContext>;
    }
}
