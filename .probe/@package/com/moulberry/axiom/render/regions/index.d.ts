import { $FabricBlockView } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $AxiomWorldRenderContext_ } from "@package/com/moulberry/axiom/render";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ListTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Camera } from "@package/net/minecraft/client";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $UUID_, $List_ } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $Position2ObjectMap, $PositionConsumer_ } from "@package/com/moulberry/axiom/collections";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $DifficultyInstance, $Difficulty } from "@package/net/minecraft/world";
import { $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $SoundEvent, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $Direction$Axis_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Registry, $Holder$Reference, $HolderLookup } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Class, $Object, $Iterable } from "@package/java/lang";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $TickPriority_, $LevelTickAccess } from "@package/net/minecraft/world/ticks";
import { $BlockAndTintGetter, $ClipContext, $LevelAccessor, $ClipBlockStateContext, $LightLayer_, $ChunkPos, $Level, $BlockGetter, $EntityGetter, $ColorResolver_ } from "@package/net/minecraft/world/level";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelData } from "@package/net/minecraft/world/level/storage";
import { $BlockRegion } from "@package/com/moulberry/axiomclientapi/regions";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f, $Quaternionf } from "@package/org/joml";

declare module "@package/com/moulberry/axiom/render/regions" {
    export class $ChunkedBlockRegion implements $FabricBlockView, $BlockAndTintGetter, $LevelAccessor, $BlockRegion, $RenderAttachedBlockView {
        min(): $BlockPos;
        max(): $BlockPos;
        clear(): void;
        isEmpty(): boolean;
        count(): number;
        save(list: $ListTag_): void;
        flip(axis: $Direction$Axis_): $ChunkedBlockRegion;
        forEachEntry(consumer: $PositionConsumer_<$BlockState>): void;
        rotate(axis: $Direction$Axis_, count: number): $ChunkedBlockRegion;
        getHeight(types: $Heightmap$Types_, i: number, j: number): number;
        getHeight(): number;
        /**
         * @deprecated
         */
        unsafeRemoveBlockWithoutDirty(x: number, y: number, z: number): void;
        getEntities(entity: $Entity, aABB: $AABB_, predicate: $Predicate_<$Entity>): $List<$Entity>;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, aABB: $AABB_, predicate: $Predicate_<T>): $List<T>;
        render(rc: $AxiomWorldRenderContext_, translation: $Vec3_, blockOpacity: number, outlineOpacity: number): void;
        render(camera: $Camera, translation: $Vec3_, matrix: $PoseStack, projection: $Matrix4f, blockOpacity: number, outlineOpacity: number): void;
        render(rc: $AxiomWorldRenderContext_, translation: $Vec3_, rotation: $Quaternionf, blockOpacity: number, outlineOpacity: number, polygonOffset: boolean): void;
        render(rc: $AxiomWorldRenderContext_, translation: $Vec3_, rotation: $Quaternionf, blockOpacity: number, outlineOpacity: number): void;
        render(rc: $AxiomWorldRenderContext_, translation: $Vec3_, rotation: $Quaternionf, blockOpacity: number, outlineOpacity: number, polygonOffset: boolean, renderTarget: $RenderTarget): void;
        forEachEntryLowestFirst(consumer: $PositionConsumer_<$BlockState>): void;
        getBlockStateOrDelegate(blockPos: $BlockPos_, level: $Level): $BlockState;
        addBlockWithoutDirty(x: number, y: number, z: number, block: $BlockState_): void;
        getBlockStateOrNull(x: number, y: number, z: number): $BlockState;
        addBlockIfNotPresent(x: number, y: number, z: number, block: $BlockState_): void;
        forEachChunk(consumer: $PositionConsumer_<$BlockState[]>): void;
        chunkKeySet(): $LongSet;
        getBlockStateOrAir(x: number, y: number, z: number): $BlockState;
        copyBlockData(): $Position2ObjectMap<$BlockState>;
        getFluidState(pos: $BlockPos_): $FluidState;
        isClientSide(): boolean;
        addParticle(particleOptions: $ParticleOptions_, d: number, e: number, f: number, g: number, h: number, i: number): void;
        getMinBuildHeight(): number;
        getLevelData(): $LevelData;
        getWorldBorder(): $WorldBorder;
        enabledFeatures(): $FeatureFlagSet;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        getChunkSource(): $ChunkSource;
        levelEvent(player: $Player, i: number, blockPos: $BlockPos_, j: number): void;
        getCenter(): $BlockPos;
        getChunk(i: number, j: number, chunkStatus: $ChunkStatus, bl: boolean): $ChunkAccess;
        getChunk(cx: number, cy: number, cz: number): $BlockState[];
        getCurrentDifficultyAt(blockPos: $BlockPos_): $DifficultyInstance;
        getUncachedNoiseBiome(i: number, j: number, k: number): $Holder<$Biome>;
        dirtyAll(): void;
        addBlock(x: number, y: number, z: number, block: $BlockState_): void;
        addBlock(pos: $BlockPos_, block: $BlockState_): void;
        playSound(player: $Player, blockPos: $BlockPos_, soundEvent: $SoundEvent, soundSource: $SoundSource_, f: number, g: number): void;
        getServer(): $MinecraftServer;
        gameEvent(holder: $Holder_<$GameEvent>, vec3: $Vec3_, context: $GameEvent$Context_): void;
        getRandom(): $RandomSource;
        setBlock(blockPos: $BlockPos_, blockState: $BlockState_, i: number, j: number): boolean;
        getBlockState(pos: $BlockPos_): $BlockState;
        canSeeSky(pos: $BlockPos_): boolean;
        getShade(direction: $Direction_, shaded: boolean): number;
        getSeaLevel(): number;
        destroyBlock(blockPos: $BlockPos_, bl: boolean, entity: $Entity, i: number): boolean;
        dimensionType(): $DimensionType;
        removeBlock(blockPos: $BlockPos_, bl: boolean): boolean;
        getLightEngine(): $LevelLightEngine;
        isStateAtPosition(blockPos: $BlockPos_, predicate: $Predicate_<$BlockState>): boolean;
        scheduleTick(blockPos: $BlockPos_, fluid: $Fluid, i: number, tickPriority: $TickPriority_): void;
        scheduleTick(blockPos: $BlockPos_, block: $Block, i: number): void;
        scheduleTick(blockPos: $BlockPos_, block: $Block, i: number, tickPriority: $TickPriority_): void;
        scheduleTick(blockPos: $BlockPos_, fluid: $Fluid, i: number): void;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        isFluidAtPosition(blockPos: $BlockPos_, predicate: $Predicate_<$FluidState>): boolean;
        nextSubTickCount(): number;
        getSkyDarken(): number;
        getBiomeManager(): $BiomeManager;
        getRawBrightness(pos: $BlockPos_, ambientDarkness: number): number;
        getBrightness(type: $LightLayer_, pos: $BlockPos_): number;
        getBlockTint(pos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getDifficulty(): $Difficulty;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        playSound(arg0: $Player | null, arg1: $BlockPos_, arg2: $SoundEvent, arg3: $SoundSource_): void;
        gameEvent(arg0: $Entity | null, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        gameEvent(arg0: $Entity | null, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        hasChunk(arg0: number, arg1: number): boolean;
        dayTime(): number;
        blockUpdated(arg0: $BlockPos_, arg1: $Block): void;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getLightEmission(arg0: $BlockPos_): number;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getEntityCollisions(arg0: $Entity | null, arg1: $AABB_): $List<$VoxelShape>;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        isUnobstructed(arg0: $Entity | null, arg1: $VoxelShape): boolean;
        getTimeOfDay(arg0: number): number;
        getMoonBrightness(): number;
        getMoonPhase(): number;
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
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
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
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        self(): $EntityGetter;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
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
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        addFreshEntity(arg0: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity | null): boolean;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getEntities(): $EntityArrayList;
        static SOLID_RENDER_LIMIT: number;
        static TRANSLUCENT_RENDER_LIMIT: number;
        static staticPackReloadIndex: number;
        uniqueBlockState: $BlockState;
        constructor();
        constructor(drawOutlineForNonBlockingMotion: boolean);
        get empty(): boolean;
        get clientSide(): boolean;
        get minBuildHeight(): number;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get center(): $BlockPos;
        get server(): $MinecraftServer;
        get random(): $RandomSource;
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get blockTicks(): $LevelTickAccess<$Block>;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get skyDarken(): number;
        get biomeManager(): $BiomeManager;
        get difficulty(): $Difficulty;
        get maxLightLevel(): number;
        get moonBrightness(): number;
        get moonPhase(): number;
        get maxBuildHeight(): number;
        get maxSection(): number;
        get minSection(): number;
        get sectionsCount(): number;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
    }
}
