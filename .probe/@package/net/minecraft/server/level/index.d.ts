import { $Long2ObjectLinkedOpenHashMap, $Long2ObjectOpenHashMap, $Long2IntLinkedOpenHashMap, $LongSet, $Long2ByteMap, $Long2ObjectMap, $Long2LongMap, $Long2IntMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ServerScoreboard, $PlayerAdvancements, $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $ServerLevelExt, $ServerPlayerExt, $ThreadedLevelLightEngineExt } from "@package/com/moulberry/axiom/hooks";
import { $ISyncLoadManager, $IVanillaChunkManager, $SchedulingManager } from "@package/com/ishland/c2me/base/common/scheduler";
import { $EntityDimensions, $WalkAnimationState, $HumanoidArm_, $PortalProcessor, $Entity, $Entity$RemovalReason_, $HumanoidArm, $Entity$RemovalReason, $LivingEntity, $Mob, $Pose, $ReputationEventHandler_ } from "@package/net/minecraft/world/entity";
import { $ILevelEventRedirect } from "@package/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $IPlayerWorldTp } from "@package/net/spudacious5705/abovethecloudstweaks/WorldTeleport";
import { $PlayerFreezeExtension } from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $IServerChunkCacheExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ServerLevelSceneExtension } from "@package/dev/ryanhcode/sable/mixinterface/physics";
import { $BoundingBox, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $OutgoingChatMessage, $RemoteChatSession, $RemoteChatSession_, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $ServerPlayerRespawnExtension } from "@package/dev/ryanhcode/sable/mixinterface/respawn_point";
import { $ChunkLevelManagerExtension } from "@package/com/ishland/c2me/notickvd/common";
import { $LevelChunk, $ImposterProtoChunk, $ChunkGeneratorStructureState, $LightChunkGetter, $ChunkSource, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $SlotReference, $IQuiverPlayer } from "@package/net/mehvahdjukaar/supplementaries/common/utils";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $DimensionDataStorage, $LevelStorageSource$LevelStorageAccess, $LevelData, $WritableLevelData, $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $BlockDestructionProgressExtension } from "@package/com/simibubi/create/foundation/block/render";
import { $Duration_ } from "@package/java/time";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $BlockableEventLoop, $ProcessorHandle, $ProcessorMailbox } from "@package/net/minecraft/util/thread";
import { $WorldStructureBlockCacheAccessor, $StructureBlockCache } from "@package/com/convallyria/hugestructureblocks/cache";
import { $LevelStem_, $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $ServerStatsCounter, $ServerRecipeBook } from "@package/net/minecraft/stats";
import { $ICapabilityInvalidationListener_ } from "@package/net/neoforged/neoforge/capabilities";
import { $IWorldMapServerLevel } from "@package/xaero/map/core";
import { $PacketAndPayloadAcceptor } from "@package/net/neoforged/neoforge/network/bundle";
import { $ServerStatus_ } from "@package/net/minecraft/network/protocol/status";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $IOpenPACServerPlayer } from "@package/xaero/pac/common/server/player/data";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $ServerLevelAccessor as $ServerLevelAccessor$3 } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Set_, $ArrayList, $Stack, $List, $List_, $Collection, $Queue, $Comparator, $Set, $UUID } from "@package/java/util";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Holder, $Direction_, $HolderLookup, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $ServerPlayerDataAPI } from "@package/xaero/pac/common/server/player/data/api";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $BlockApiCacheImpl, $ServerWorldCache } from "@package/net/fabricmc/fabric/impl/lookup/block";
import { $Throwable, $IllegalStateException, $Runnable, $Enum, $Comparable, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $AccessorMixinChunkMap } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $TicketDistanceLevelPropagatorExtension, $IChunkSystemAccess } from "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks";
import { $Writer } from "@package/java/io";
import { $CustomSpawner_, $Explosion, $LightLayer_, $ChunkPos, $BlockGetter, $Level$ExplosionInteraction_, $ColorResolver_, $ExplosionDamageCalculator, $GameType, $GameType_, $EntityGetter, $ClipContext, $ClipBlockStateContext, $WorldGenLevel, $NaturalSpawner$SpawnState, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $FluidState, $Fluid } from "@package/net/minecraft/world/level/material";
import { $ServerWorldExtended } from "@package/net/caffeinemc/mods/lithium/common/world";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $SynchedEntityData, $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $TempleStateCache, $ITempleStateCacheProvider } from "@package/com/yungnickyoung/minecraft/betterdeserttemples/world/state";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ServerWorldPropertiesRegistry } from "@package/com/moulberry/axiom/world_properties/server";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $DimensionTransition$PostDimensionTransition_, $PortalForcer, $DimensionTransition, $DimensionTransition_ } from "@package/net/minecraft/world/level/portal";
import { $DamageSource, $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $Codec } from "@package/com/mojang/serialization";
import { $IMutableMainThread } from "@package/me/srrapero720/dimthread/thread";
import { $Either, $Pair as $Pair$1 } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ServerPlayerData as $ServerPlayerData$1, $IServerPlayer as $IServerPlayer$2 } from "@package/xaero/common/server/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ServerChunkCacheAccessor } from "@package/dev/ryanhcode/sable/mixin/level_accelerator";
import { $RandomSource, $ProgressListener, $StaticCache2D, $Unit, $SortedArraySet } from "@package/net/minecraft/util";
import { $IServerPlayer, $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $BossEvent$BossBarColor, $BossEvent$BossBarOverlay_, $InteractionResult, $BossEvent$BossBarOverlay, $InteractionHand_, $Container, $BossEvent, $RandomSequences, $DifficultyInstance, $BossEvent$BossBarColor_, $InteractionHand, $Difficulty } from "@package/net/minecraft/world";
import { $ReportedException } from "@package/net/minecraft";
import { $SoundSource_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $AbstractContainerMenu, $InventoryMenu, $PlayerEnderChestContainer } from "@package/net/minecraft/world/inventory";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $DuckChunkHolder } from "@package/com/ishland/c2me/opts/scheduling/common";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $PersistentEntitySectionManager, $EntityInLevelCallback, $EntityTypeTest, $LevelCallback, $EntityTickList, $ChunkStatusUpdateListener_ } from "@package/net/minecraft/world/level/entity";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $Biome, $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $TextFilter, $ServerPlayerConnection, $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Inventory, $ChatVisiblity, $Abilities, $Player, $ChatVisiblity_ } from "@package/net/minecraft/world/entity/player";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ChunkScanAccess, $ChunkStorage, $IOWorker } from "@package/net/minecraft/world/level/chunk/storage";
import { $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $AtomicReferenceArray, $AtomicReference, $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $InventoryKJS, $ServerLevelKJS, $ServerPlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ExtraChunkViewData, $IChunkViewWithZones } from "@package/net/mehvahdjukaar/vista/common/chunk_tracking";
import { $ServerChunkLoadingManagerAccessor, $EntityTrackerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/accessor";
import { $EndDragonFight } from "@package/net/minecraft/world/level/dimension/end";
import { $DynamicGraphMinFixedPoint, $LightEngine, $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $Function, $IntConsumer_, $BooleanSupplier_, $Supplier, $Consumer_, $Predicate_, $IntSupplier_, $IntConsumer, $IntSupplier, $Function_ } from "@package/java/util/function";
import { $ServerWorldCapabilities } from "@package/xaero/map/capabilities";
import { $PathTypeCache } from "@package/net/minecraft/world/level/pathfinder";
import { $Object2DoubleMap, $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Path_ } from "@package/java/nio/file";
import { $TheChunkSystem } from "@package/com/ishland/c2me/rewrites/chunksystem/common";
import { $ChunkStep_, $ChunkStatus, $WorldGenContext } from "@package/net/minecraft/world/level/chunk/status";
import { $IMixinServerPlayer_neoforge } from "@package/com/seibel/distanthorizons/common/wrappers/misc";
import { $IChunkTicket, $ISimulationDistanceLevelPropagator, $IChunkLevelManagerDistanceFromNearestPlayerTracker, $IServerChunkManager, $IChunkLevelManager, $IChunkLevelManagerNearbyChunkTicketUpdater, $IChunkHolder, $ISyncedClientOptions, $IThreadedAnvilChunkStorageLevelManager, $IServerLightingProvider, $IThreadedAnvilChunkStorage } from "@package/com/ishland/c2me/base/mixin/access";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelTickAccess, $LevelTicks, $TickPriority_ } from "@package/net/minecraft/world/ticks";
import { $ChunkLevelTypeEventTracker } from "@package/net/fabricmc/fabric/impl/event/lifecycle";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Logger } from "@package/org/slf4j";
import { $IThreadedAnvilChunkStorage as $IThreadedAnvilChunkStorage$1 } from "@package/com/ishland/c2me/opts/scheduling/common/idle_tasks";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $ServerboundPlayerActionPacket$Action_, $CommonPlayerSpawnInfo, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Raid, $Raids } from "@package/net/minecraft/world/entity/raid";
import { $ServerPlayerData as $ServerPlayerData$2, $IServerPlayer as $IServerPlayer$1 } from "@package/xaero/map/server/player";
import { $ServerLevelAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/spawning";
import { $Stream } from "@package/java/util/stream";
import { $ServerLevelAccessor as $ServerLevelAccessor$2 } from "@package/net/caffeinemc/mods/lithium/mixin/util/entity_movement_tracking";
import { $ServerLevelAccessor as $ServerLevelAccessor$1 } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $BlockEntity, $TickingBlockEntity, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
export * as progress from "@package/net/minecraft/server/level/progress";

declare module "@package/net/minecraft/server/level" {
    export class $ChunkTrackingView$Positioned extends $Record implements $ChunkTrackingView, $IChunkViewWithZones {
        contains(x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        forEach(action: $Consumer_<$ChunkPos>): void;
        minX(): number;
        minZ(): number;
        maxZ(): number;
        center(): $ChunkPos;
        viewDistance(): number;
        maxX(): number;
        /**
         * Determines if another `ChunkTrackingView`'s bounds intersects with its own
         */
        squareIntersects(other: $ChunkTrackingView$Positioned_): boolean;
        vista$setExtraZones(arg0: $ExtraChunkViewData): void;
        vista$getExtraZones(): $ExtraChunkViewData;
        contains(x: number, z: number): boolean;
        contains(chunkPos: $ChunkPos): boolean;
        isInViewDistance(x: number, z: number): boolean;
        constructor(arg0: $ChunkPos, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkTrackingView$Positioned}.
     */
    export type $ChunkTrackingView$Positioned_ = { center?: $ChunkPos, viewDistance?: number,  } | [center?: $ChunkPos, viewDistance?: number, ];
    export class $PlayerRespawnLogic {
        static getOverworldRespawnPos(level: $ServerLevel, x: number, z: number): $BlockPos;
        static getSpawnPosInChunk(level: $ServerLevel, chunkPos: $ChunkPos): $BlockPos;
        constructor();
    }
    export class $Ticket<T> implements $Comparable<$Ticket<never>>, $IChunkTicket {
        compareTo(other: $Ticket<never>): number;
        getType(): $TicketType<$Ticket<never>>;
        timedOut(currentTime: number): boolean;
        getTicketLevel(): number;
        setCreatedTick(timestamp: number): void;
        isForceTicks(): boolean;
        createdTick: number;
        constructor(type: $TicketType<$Ticket<never>>, ticketLevel: number, key: $Ticket<never>);
        constructor(arg0: $TicketType<$Ticket<never>>, arg1: number, arg2: $Ticket<never>, arg3: boolean);
        get type(): $TicketType<$Ticket<never>>;
        get ticketLevel(): number;
        get forceTicks(): boolean;
    }
    export class $TicketType<T> {
        static create<T>(name: string, comparator: $Comparator<T>): $TicketType<T>;
        static create<T>(name: string, comparator: $Comparator<T>, lifespan: number): $TicketType<T>;
        timeout(): number;
        getComparator(): $Comparator<T>;
        static PLAYER: $TicketType<$ChunkPos>;
        static POST_TELEPORT: $TicketType<number>;
        static DRAGON: $TicketType<$Unit>;
        static START: $TicketType<$Unit>;
        static FORCED: $TicketType<$ChunkPos>;
        static UNKNOWN: $TicketType<$ChunkPos>;
        static PORTAL: $TicketType<$BlockPos>;
        constructor(name: string, comparator: $Comparator<T>, timeout: number);
        get comparator(): $Comparator<T>;
    }
    export class $ChunkHolder$PlayerProvider {
    }
    export interface $ChunkHolder$PlayerProvider {
        /**
         * Returns the players tracking the given chunk.
         */
        getPlayers(pos: $ChunkPos, boundaryOnly: boolean): $List<$ServerPlayer>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$PlayerProvider}.
     */
    export type $ChunkHolder$PlayerProvider_ = ((arg0: $ChunkPos, arg1: boolean) => $List_<$ServerPlayer>);
    export class $ServerBossEvent extends $BossEvent {
        setVisible(visible: boolean): void;
        isVisible(): boolean;
        /**
         * Makes the boss visible to the given player.
         */
        removePlayer(player: $ServerPlayer): void;
        removeAllPlayers(): void;
        /**
         * The returned collection is unmodifiable
         */
        getPlayers(): $Collection<$ServerPlayer>;
        /**
         * Makes the boss visible to the given player.
         */
        addPlayer(player: $ServerPlayer): void;
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        constructor(name: $Component_, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_);
        get players(): $Collection<$ServerPlayer>;
    }
    export class $ChunkHolder$LevelChangeListener {
    }
    export interface $ChunkHolder$LevelChangeListener {
        onLevelChange(chunkPos: $ChunkPos, queueLevelGetter: $IntSupplier_, ticketLevel: number, queueLevelSetter: $IntConsumer_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$LevelChangeListener}.
     */
    export type $ChunkHolder$LevelChangeListener_ = ((arg0: $ChunkPos, arg1: $IntSupplier, arg2: number, arg3: $IntConsumer) => void);
    export class $ChunkHolder extends $GenerationChunkHolder implements $ChunkLevelTypeEventTracker, $IChunkHolder, $DuckChunkHolder {
        setTicketLevel(queueLevel: number): void;
        blockChanged(pos: $BlockPos_): void;
        updateFutures(chunkMap: $ChunkMap, executor: $Executor_): void;
        getTickingChunk(): $LevelChunk;
        addSaveDependency(dependency: $CompletableFuture<never>): void;
        broadcastChanges(chunk: $LevelChunk): void;
        c2me$undirtyLight(): boolean;
        setQueueLevel(queueLevel: number): void;
        isReadyForSaving(): boolean;
        getSaveSyncFuture(): $CompletableFuture<never>;
        getChunkToSend(): $LevelChunk;
        getFullChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getSendSyncFuture(): $CompletableFuture<never>;
        addSendDependency(dependency: $CompletableFuture<never>): void;
        refreshAccessibility(): void;
        wasAccessibleSinceLastSave(): boolean;
        getTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getEntityTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        c2me$shouldScheduleUndirty(): boolean;
        sectionLightChanged(type: $LightLayer_, sectionY: number): void;
        c2me$queueLightSectionDirty(type: $LightLayer_, sectionY: number): void;
        fabric_setCurrentEventLevelType(arg0: $FullChunkStatus_): void;
        fabric_getCurrentEventLevelType(): $FullChunkStatus;
        invokeCombineSavingFuture(dependency: $CompletableFuture<never>): void;
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
        constructor(pos: $ChunkPos, ticketLevel: number, levelHeightAccessor: $LevelHeightAccessor, lightEngine: $LevelLightEngine, onLevelChange: $ChunkHolder$LevelChangeListener_, playerProvider: $ChunkHolder$PlayerProvider_);
        set ticketLevel(value: number);
        get tickingChunk(): $LevelChunk;
        set queueLevel(value: number);
        get readyForSaving(): boolean;
        get saveSyncFuture(): $CompletableFuture<never>;
        get chunkToSend(): $LevelChunk;
        get sendSyncFuture(): $CompletableFuture<never>;
    }
    export class $WorldGenRegion implements $WorldGenLevel {
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        getHeight(): number;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        /**
         * @deprecated
         */
        getLevel(): $ServerLevel;
        /**
         * Gets all entities within the specified AABB excluding the one passed into it.
         */
        getEntities(entity: $Entity | null, boundingBox: $AABB_, predicate: $Predicate_<$Entity> | null): $List<$Entity>;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>): $List<T>;
        getFluidState(pos: $BlockPos_): $FluidState;
        ensureCanWrite(pos: $BlockPos_): boolean;
        isClientSide(): boolean;
        addParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): void;
        getMinBuildHeight(): number;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $LevelData;
        getWorldBorder(): $WorldBorder;
        enabledFeatures(): $FeatureFlagSet;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ChunkSource;
        levelEvent(player: $Player | null, type: number, pos: $BlockPos_, data: number): void;
        getCenter(): $ChunkPos;
        getChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus, requireChunk: boolean): $ChunkAccess;
        getCurrentDifficultyAt(pos: $BlockPos_): $DifficultyInstance;
        getUncachedNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        /**
         * Plays a sound. On the server, the sound is broadcast to all nearby *except* the given player. On the client, the sound only plays if the given player is the client player. Thus, this method is intended to be called from code running on both sides. The client plays it locally and the server plays it for everyone else.
         */
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent, category: $SoundSource_, volume: number, pitch: number): void;
        getServer(): $MinecraftServer;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $Vec3_, context: $GameEvent$Context_): void;
        getRandom(): $RandomSource;
        setBlock(pos: $BlockPos_, state: $BlockState_, flags: number, recursionLeft: number): boolean;
        getBlockState(pos: $BlockPos_): $BlockState;
        addFreshEntity(entity: $Entity): boolean;
        hasChunk(chunkX: number, chunkZ: number): boolean;
        getShade(direction: $Direction_, shade: boolean): number;
        getSeaLevel(): number;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null, recursionLeft: number): boolean;
        dimensionType(): $DimensionType;
        removeBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        getLightEngine(): $LevelLightEngine;
        isStateAtPosition(pos: $BlockPos_, predicate: $Predicate_<$BlockState>): boolean;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: $Predicate_<$Entity>): $Player;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        isFluidAtPosition(pos: $BlockPos_, predicate: $Predicate_<$FluidState>): boolean;
        /**
         * Gets the random world seed.
         */
        nextSubTickCount(): number;
        getSkyDarken(): number;
        getBiomeManager(): $BiomeManager;
        isOldChunkAround(pos: $ChunkPos, radius: number): boolean;
        addFreshEntityWithPassengers(entity: $Entity): void;
        getDifficulty(): $Difficulty;
        levelEvent(type: number, pos: $BlockPos_, data: number): void;
        neighborShapeChanged(direction: $Direction_, queried: $BlockState_, pos: $BlockPos_, offsetPos: $BlockPos_, flags: number, recursionLevel: number): void;
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent, source: $SoundSource_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $Vec3_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        gameEvent(gameEvent: $ResourceKey_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        /**
         * Gets the random world seed.
         */
        dayTime(): number;
        blockUpdated(pos: $BlockPos_, block: $Block): void;
        scheduleTick(pos: $BlockPos_, block: $Block, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, block: $Block, delay: number): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid, delay: number): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid, delay: number, priority: $TickPriority_): void;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType<T>): (T) | undefined;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntityCollisions(entity: $Entity | null, area: $AABB_): $List<$VoxelShape>;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        getTimeOfDay(partialTick: number): number;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntities(entity: $Entity | null, area: $AABB_): $List<$Entity>;
        getEntitiesOfClass<T extends $Entity>(entityClass: $Class<T>, area: $AABB_): $List<T>;
        getEntitiesOfClass<T extends $Entity>(clazz: $Class<T>, area: $AABB_, filter: $Predicate_<T>): $List<T>;
        hasNearbyAlivePlayer(x: number, arg1: number, y: number, arg3: number): boolean;
        localvar$zdk000$openpartiesandclaims$onGetEntityCollisions(arg0: $List_<any>, arg1: $Entity, arg2: $AABB_): $List<any>;
        handler$zdk000$openpartiesandclaims$onGetEntitiesOfClass(arg0: $Class<any>, arg1: $AABB_, arg2: $Predicate_<any>, arg3: $CallbackInfoReturnable<any>): void;
        getNearestEntity<T extends $LivingEntity>(entities: $List_<T>, predicate: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number): T;
        getNearestEntity<T extends $LivingEntity>(entityClazz: $Class<T>, conditions: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number, arg6: $AABB_): T;
        getNearestPlayer(entity: $Entity, distance: number): $Player;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: boolean): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity, x: number, arg3: number, y: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, x: number, arg2: number, y: number): $Player;
        getPlayerByUUID(uniqueId: $UUID_): $Player;
        getNearbyPlayers(predicate: $TargetingConditions, target: $LivingEntity, area: $AABB_): $List<$Player>;
        getNearbyEntities<T extends $LivingEntity>(entityClazz: $Class<T>, entityPredicate: $TargetingConditions, entity: $LivingEntity, area: $AABB_): $List<T>;
        getPathfindingCostFromLightLevels(pos: $BlockPos_): number;
        containsAnyLiquid(collisionBox: $AABB_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(from: $BlockPos_, to: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromZ: number, toX: number, toZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): boolean;
        getChunk(chunkX: number, chunkZ: number, chunkStatus: $ChunkStatus): $ChunkAccess;
        getChunk(pos: $BlockPos_): $ChunkAccess;
        getBlockStatesIfLoaded(aabb: $AABB_): $Stream<$BlockState>;
        canSeeSkyFromBelowWater(pos: $BlockPos_): boolean;
        lithium$getLoadedChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        getMaxLocalRawBrightness(pos: $BlockPos_): number;
        getMaxLocalRawBrightness(pos: $BlockPos_, amount: number): number;
        /**
         * @deprecated
         */
        hasChunkAt(pos: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(chunkX: number, chunkZ: number): boolean;
        isWaterAt(pos: $BlockPos_): boolean;
        getBiome(pos: $BlockPos_): $Holder<$Biome>;
        holderLookup<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        isEmptyBlock(pos: $BlockPos_): boolean;
        getBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(pos: $BlockPos_): number;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        self(): $EntityGetter;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        canSeeSky(pos: $BlockPos_): boolean;
        getRawBrightness(pos: $BlockPos_, amount: number): number;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        collidesWithSuffocatingBlock(entity: $Entity | null, boundingBox: $AABB_): boolean;
        noCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        noCollision(collisionBox: $AABB_): boolean;
        noCollision(entity: $Entity): boolean;
        noBlockCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        getBlockCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(entity: $Entity | null, shape: $VoxelShape, pos: $Vec3_, x: number, arg4: number, y: number): ($Vec3) | undefined;
        findSupportingBlock(entity: $Entity, box: $AABB_): ($BlockPos) | undefined;
        isUnobstructed(state: $BlockState_, pos: $BlockPos_, context: $CollisionContext): boolean;
        isUnobstructed(entity: $Entity): boolean;
        getCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        /**
         * Returns the control signal emitted from the given position in the given direction.
         * If `diodesOnly` is `true`, this method returns the direct signal emitted if
         * and only if this position is occupied by a diode (i.e. a repeater or comparator).
         * Otherwise, if this position is occupied by a
         * redstone block,
         * this method will return the redstone signal emitted by it. If not, this method will
         * return the direct signal emitted from this position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getControlInputSignal(pos: $BlockPos_, direction: $Direction_, diodesOnly: boolean): number;
        getBestNeighborSignal(pos: $BlockPos_): number;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getSignal(pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Returns whether a redstone signal is emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        hasSignal(pos: $BlockPos_, direction: $Direction_): boolean;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(pos: $BlockPos_, direction: $Direction_): number;
        hasNeighborSignal(pos: $BlockPos_): boolean;
        getDirectSignalTo(pos: $BlockPos_): number;
        /**
         * Shortcut method to get an optional holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holder<T>(key: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        isAreaLoaded(center: $BlockPos_, range: number): boolean;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        /**
         * Sets a block state into this world.Flags are as follows:
         * 1 will cause a block update.
         * 2 will send the change to clients.
         * 4 will prevent the block from being re-rendered.
         * 8 will force any re-renders to run on the main thread instead
         * 16 will prevent neighbor reactions (e.g. fences connecting, observers pulsing).
         * 32 will prevent neighbor reactions from spawning drops.
         * 64 will signify the block is being moved.
         * Flags can be OR-ed
         */
        setBlock(pos: $BlockPos_, newState: $BlockState_, flags: number): boolean;
        destroyBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null): boolean;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getEntities(): $EntityArrayList;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        /**
         * Checks if there's block between `from` and `to` of context.
         * This uses the collision shape of provided block.
         */
        clip(context: $ClipContext): $BlockHitResult;
        getBlockFloorHeight(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getLightEmission(pos: $BlockPos_): number;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        getBlockStates(aabb: $AABB_): $Stream<$BlockState>;
        getMaxLightLevel(): number;
        /**
         * Computes the shade for a given normal.
         * Alternate version of the vanilla method taking in a `Direction`.
         */
        getShade(normalX: number, normalY: number, normalZ: number, shade: boolean): number;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        isOutsideBuildHeight(y: number): boolean;
        getMaxBuildHeight(): number;
        getMaxSection(): number;
        getMinSection(): number;
        getSectionIndex(sectionIndex: number): number;
        getSectionsCount(): number;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        /**
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        /**
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(pos: $BlockPos_): $Holder<$Biome>;
        constructor(level: $ServerLevel, cache: $StaticCache2D<$GenerationChunkHolder>, generatingStep: $ChunkStep_, center: $ChunkAccess);
        get seed(): number;
        get level(): $ServerLevel;
        get clientSide(): boolean;
        get minBuildHeight(): number;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get chunkSource(): $ChunkSource;
        get center(): $ChunkPos;
        set currentlyGenerating(value: $Supplier_<string> | null);
        get server(): $MinecraftServer;
        get random(): $RandomSource;
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get blockTicks(): $LevelTickAccess<$Block>;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get skyDarken(): number;
        get biomeManager(): $BiomeManager;
        get difficulty(): $Difficulty;
        get moonBrightness(): number;
        get moonPhase(): number;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get maxSection(): number;
        get minSection(): number;
        get sectionsCount(): number;
    }
    export class $ChunkTrackingView {
        static of(center: $ChunkPos, viewDistance: number): $ChunkTrackingView;
        /**
         * Calculates the chunks that the player needs to drop in the `oldChunkTrackingView` and the chunks that need to be sent for the `newChunkTrackingView`. The chunks that overlap in both views can be kept.
         */
        static difference(oldChunkTrackingView: $ChunkTrackingView, newChunkTrackingView: $ChunkTrackingView, chunkMarker: $Consumer_<$ChunkPos>, chunkDropper: $Consumer_<$ChunkPos>): void;
        /**
         * Check if a chunk `(x,z)` is within a `viewDistance` which is centered on `(centerX, centerZ)`
         */
        static isWithinDistance(centerX: number, centerZ: number, viewDistance: number, x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        static isInViewDistance(centerX: number, centerZ: number, viewDistance: number, x: number, z: number): boolean;
        static EMPTY: $ChunkTrackingView;
    }
    export interface $ChunkTrackingView {
        contains(x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        contains(x: number, z: number): boolean;
        contains(chunkPos: $ChunkPos): boolean;
        forEach(action: $Consumer_<$ChunkPos>): void;
        isInViewDistance(x: number, z: number): boolean;
    }
    export class $GenerationChunkHolder {
        getPersistedStatus(): $ChunkStatus;
        getChunkIfPresent(status: $ChunkStatus): $ChunkAccess;
        rescheduleChunkTask(chunkMap: $ChunkMap, targetStatus: $ChunkStatus | null): void;
        removeTask(task: $ChunkGenerationTask): void;
        getPos(): $ChunkPos;
        getFullStatus(): $FullChunkStatus;
        acquireStatusBump(status: $ChunkStatus): boolean;
        isStatusDisallowed(status: $ChunkStatus): boolean;
        completeFuture(targetStatus: $ChunkStatus, chunkAccess: $ChunkAccess): void;
        getOrCreateFuture(targetStatus: $ChunkStatus): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        replaceProtoChunk(chunk: $ImposterProtoChunk): void;
        getLatestChunk(): $ChunkAccess;
        getTicketLevel(): number;
        getLatestStatus(): $ChunkStatus;
        getQueueLevel(): number;
        getAllFutures(): $List<$Pair$1<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        increaseGenerationRefCount(): void;
        getChunkIfPresentUnchecked(status: $ChunkStatus): $ChunkAccess;
        getGenerationRefCount(): number;
        decreaseGenerationRefCount(): void;
        applyStep(step: $ChunkStep_, chunkMap: $GeneratingChunkMap, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        scheduleChunkGenerationTask(targetStatus: $ChunkStatus, chunkMap: $ChunkMap): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        failAndClearPendingFuture(status: number, future: $CompletableFuture<$ChunkResult<$ChunkAccess>>): void;
        updateHighestAllowedStatus(chunkMap: $ChunkMap): void;
        failAndClearPendingFuturesBetween(highestAllowableStatus: $ChunkStatus | null, currentStatus: $ChunkStatus): void;
        findHighestStatusWithPendingFuture(generationStatus: $ChunkStatus | null): $ChunkStatus;
        currentlyLoading: $LevelChunk;
        pos: $ChunkPos;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        startedWork: $AtomicReference<$ChunkStatus>;
        futures: $AtomicReferenceArray<$CompletableFuture<$ChunkResult<$ChunkAccess>>>;
        constructor(pos: $ChunkPos);
        get persistedStatus(): $ChunkStatus;
        get fullStatus(): $FullChunkStatus;
        get latestChunk(): $ChunkAccess;
        get ticketLevel(): number;
        get latestStatus(): $ChunkStatus;
        get queueLevel(): number;
        get allFutures(): $List<$Pair$1<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        get generationRefCount(): number;
    }
    export class $ChunkResult<T> {
        static of<T>(value: T): $ChunkResult<T>;
        static orElse<R>(chunkResult: $ChunkResult<R>, orElse: R | null): R;
        static error<T>(error: string): $ChunkResult<T>;
        static error<T>(errorSupplier: $Supplier_<string>): $ChunkResult<T>;
    }
    export interface $ChunkResult<T> {
        map<R>(mappingFunction: $Function_<T, R>): $ChunkResult<R>;
        orElse(value: T | null): T;
        orElseThrow<E extends $Throwable>(exceptionSupplier: $Supplier_<E>): T;
        isSuccess(): boolean;
        ifSuccess(action: $Consumer_<T>): $ChunkResult<T>;
        getError(): string;
        get success(): boolean;
    }
    export class $ServerChunkCache$ChunkAndHolder extends $Record {
        holder(): $ChunkHolder;
        chunk(): $LevelChunk;
        constructor(chunk: $LevelChunk, holder: $ChunkHolder);
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkCache$ChunkAndHolder}.
     */
    export type $ServerChunkCache$ChunkAndHolder_ = { holder?: $ChunkHolder, chunk?: $LevelChunk,  } | [holder?: $ChunkHolder, chunk?: $LevelChunk, ];
    export class $ServerChunkCache extends $ChunkSource implements $IServerChunkCacheExtension, $ServerChunkCacheAccessor, $IMutableMainThread, $IServerChunkManager, $ISyncLoadManager {
        save(flush: boolean): void;
        move(player: $ServerPlayer): void;
        getLevel(): $Level;
        broadcast(entity: $Entity, packet: $Packet<never>): void;
        getPendingTasksCount(): number;
        pollTask(): boolean;
        getTickingGenerated(): number;
        removeTicketsOnClosing(): void;
        getGenerator(): $ChunkGenerator;
        getGeneratorState(): $ChunkGeneratorStructureState;
        getPoiManager(): $PoiManager;
        blockChanged(pos: $BlockPos_): void;
        chunkScanner(): $ChunkScanAccess;
        getDataStorage(): $DimensionDataStorage;
        randomState(): $RandomState;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        removeRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        getLastSpawnState(): $NaturalSpawner$SpawnState;
        isPositionTicking(chunkPos: number): boolean;
        broadcastAndSend(entity: $Entity, packet: $Packet<never>): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        addRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        dimThreads$getMainThread(): $Thread;
        dimThreads$setMainThread(arg0: $Thread): void;
        setViewDistance(simulationDistance: number): void;
        getLightEngine(): $ThreadedLevelLightEngine;
        removeEntity(entity: $Entity): void;
        addEntity(entity: $Entity): void;
        setSimulationDistance(simulationDistance: number): void;
        getCurrentSyncLoad(): $ChunkPos;
        getChunkDebugData(chunkPos: $ChunkPos): string;
        getChunkFuture(x: number, z: number, chunkStatus: $ChunkStatus, requireChunk: boolean): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        wrapOperation$gab000$dimthread$currentThread(arg0: $Operation_<any>): $Thread;
        handler$hcl000$sable$init(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $StructureTemplateManager, arg4: $Executor_, arg5: $ChunkGenerator, arg6: number, arg7: number, arg8: boolean, arg9: $ChunkProgressListener, arg10: $ChunkStatusUpdateListener_, arg11: $Supplier_<any>, arg12: $CallbackInfo): void;
        getChunkFutureMainThread(x: number, z: number, chunkStatus: $ChunkStatus, requireChunk: boolean): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        runDistanceManagerUpdates(): boolean;
        self(): $ServerChunkCache;
        /**
         * Sends a payload to all players watching the given entity.
         * 
         * If the entity is a player, the payload will not be sent to that player.
         */
        broadcast(entity: $Entity, payload: $CustomPacketPayload_): void;
        /**
         * Sends a payload to all players watching the given entity.
         * 
         * If the entity is a player, the payload will not be sent to that player.
         */
        broadcastAndSend(entity: $Entity, payload: $CustomPacketPayload_): void;
        getTicketManager(): $DistanceManager;
        invokeUpdateChunks(): boolean;
        getMainThreadExecutor(): $ServerChunkCache$MainThreadExecutor;
        invokeGetVisibleChunkIfPresent(chunkPos: number): $ChunkHolder;
        mainThread: $Thread;
        distanceManager: $DistanceManager;
        level: $ServerLevel;
        lightEngine: $ThreadedLevelLightEngine;
        chunkMap: $ChunkMap;
        constructor(level: $ServerLevel, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, structureManager: $StructureTemplateManager, dispatcher: $Executor_, generator: $ChunkGenerator, viewDistance: number, simulationDistance: number, sync: boolean, progressListener: $ChunkProgressListener, chunkStatusListener: $ChunkStatusUpdateListener_, overworldDataStorage: $Supplier_<$DimensionDataStorage>);
        get pendingTasksCount(): number;
        get tickingGenerated(): number;
        get generator(): $ChunkGenerator;
        get generatorState(): $ChunkGeneratorStructureState;
        get poiManager(): $PoiManager;
        get dataStorage(): $DimensionDataStorage;
        get lastSpawnState(): $NaturalSpawner$SpawnState;
        set viewDistance(value: number);
        set simulationDistance(value: number);
        get currentSyncLoad(): $ChunkPos;
        get ticketManager(): $DistanceManager;
        get mainThreadExecutor(): $ServerChunkCache$MainThreadExecutor;
    }
    export class $ChunkResult$Success<T> extends $Record implements $ChunkResult<T> {
        value(): T;
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T | null): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        getError(): string;
        constructor(arg0: T);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Success}.
     */
    export type $ChunkResult$Success_<T> = { value?: any,  } | [value?: any, ];
    export class $PlayerMap {
        ignored(player: $ServerPlayer): boolean;
        removePlayer(player: $ServerPlayer): void;
        addPlayer(player: $ServerPlayer, skipPlayer: boolean): void;
        getAllPlayers(): $Set<$ServerPlayer>;
        ignoredOrUnknown(player: $ServerPlayer): boolean;
        ignorePlayer(player: $ServerPlayer): void;
        unIgnorePlayer(player: $ServerPlayer): void;
        constructor();
        get allPlayers(): $Set<$ServerPlayer>;
    }
    export class $ChunkLevel {
        static isLoaded(level: number): boolean;
        static fullStatus(level: number): $FullChunkStatus;
        static byStatus(status: $FullChunkStatus_): number;
        static byStatus(status: $ChunkStatus): number;
        static generationStatus(level: number): $ChunkStatus;
        static isEntityTicking(level: number): boolean;
        static isBlockTicking(level: number): boolean;
        static getStatusAroundFullChunk(level: number): $ChunkStatus;
        static getStatusAroundFullChunk(distance: number, chunkStatus: $ChunkStatus | null): $ChunkStatus;
        static RADIUS_AROUND_FULL_CHUNK: number;
        static ENTITY_TICKING_LEVEL: number;
        static MAX_LEVEL: number;
        static BLOCK_TICKING_LEVEL: number;
        constructor();
    }
    export class $ServerEntity {
        getLastSentMovement(): $Vec3;
        getLastSentXRot(): number;
        getLastSentYRot(): number;
        getPositionBase(): $Vec3;
        sendPairingData(arg0: $ServerPlayer, arg1: $PacketAndPayloadAcceptor<$ClientGamePacketListener>): void;
        sendChanges(): void;
        removePairing(player: $ServerPlayer): void;
        getLastSentYHeadRot(): number;
        addPairing(player: $ServerPlayer): void;
        static FORCED_POS_UPDATE_PERIOD: number;
        constructor(level: $ServerLevel, entity: $Entity, updateInterval: number, trackDelta: boolean, broadcast: $Consumer_<$Packet<never>>);
        get lastSentMovement(): $Vec3;
        get lastSentXRot(): number;
        get lastSentYRot(): number;
        get positionBase(): $Vec3;
        get lastSentYHeadRot(): number;
    }
    export class $GeneratingChunkMap {
    }
    export interface $GeneratingChunkMap {
        releaseGeneration(chunk: $GenerationChunkHolder): void;
        runGenerationTasks(): void;
        acquireGeneration(chunkPos: number): $GenerationChunkHolder;
        scheduleGenerationTask(targetStatus: $ChunkStatus, pos: $ChunkPos): $ChunkGenerationTask;
        applyStep(chunk: $GenerationChunkHolder, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
    }
    export class $ColumnPos extends $Record {
        x(): number;
        z(): number;
        toLong(): number;
        static getX(pos: number): number;
        static asLong(x: number, z: number): number;
        toChunkPos(): $ChunkPos;
        static getZ(pos: number): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ColumnPos}.
     */
    export type $ColumnPos_ = { x?: number, z?: number,  } | [x?: number, z?: number, ];
    export class $ChunkTaskPriorityQueue<T> {
        release(chunkPos: number, arg1: boolean): void;
        pop(): $Stream<$Either<T, $Runnable>>;
        submit(task: (T) | undefined, chunkPos: number, arg2: number): void;
        hasWork(): boolean;
        resortChunkTasks(queueLevel: number, chunkPos: $ChunkPos, ticketLevel: number): void;
        getAcquired(): $LongSet;
        static PRIORITY_LEVEL_COUNT: number;
        constructor(name: string, maxTasks: number);
        get acquired(): $LongSet;
    }
    export class $ChunkGenerationTask {
        static create(chunkMap: $GeneratingChunkMap, targetStatus: $ChunkStatus, pos: $ChunkPos): $ChunkGenerationTask;
        getCenter(): $GenerationChunkHolder;
        runUntilWait(): $CompletableFuture<never>;
        markForCancellation(): void;
        targetStatus: $ChunkStatus;
        get center(): $GenerationChunkHolder;
    }
    export class $ServerChunkCache$MainThreadExecutor extends $BlockableEventLoop<$Runnable> {
        this$0: $ServerChunkCache;
        constructor(level: $ServerChunkCache, arg1: $Level);
    }
    export class $BlockDestructionProgress implements $Comparable<$BlockDestructionProgress>, $BlockDestructionProgressExtension {
        compareTo(other: $BlockDestructionProgress): number;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getId(): number;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getUpdatedRenderTick(): number;
        create$getExtraPositions(): $Set<any>;
        create$setExtraPositions(arg0: $Set_<any>): void;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getProgress(): number;
        getPos(): $BlockPos;
        /**
         * Inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it, otherwise ranges from 1 to 10.
         */
        setProgress(damage: number): void;
        /**
         * Inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it, otherwise ranges from 1 to 10.
         */
        updateTick(damage: number): void;
        constructor(id: number, pos: $BlockPos_);
        get id(): number;
        get updatedRenderTick(): number;
        get pos(): $BlockPos;
    }
    export class $TickingTracker extends $ChunkTracker implements $ISimulationDistanceLevelPropagator {
        getLevel(chunkPos: $ChunkPos): number;
        runAllUpdates(): void;
        removeTicket(chunkPos: number, arg1: $Ticket<never>): void;
        removeTicket<T>(type: $TicketType<T>, chunkPos: $ChunkPos, ticketLevel: number, key: T): void;
        addTicket(chunkPos: number, arg1: $Ticket<never>): void;
        addTicket<T>(type: $TicketType<T>, chunkPos: $ChunkPos, ticketLevel: number, key: T): void;
        getTicketDebugString(chunkPos: number): string;
        replacePlayerTicketsLevel(ticketLevel: number): void;
        getLevels(): $Long2ByteMap;
        levelCount: number;
        chunks: $Long2ByteMap;
        static SOURCE: number;
        static MAX_LEVEL: number;
        constructor();
        get levels(): $Long2ByteMap;
    }
    export class $ThreadedLevelLightEngine extends $LevelLightEngine implements $AutoCloseable, $ThreadedLevelLightEngineExt, $IServerLightingProvider {
        close(): void;
        runUpdate(): void;
        updateChunkStatus(chunkPos: $ChunkPos): void;
        tryScheduleUpdate(): void;
        axiom$checkSectionBlocks(cx: number, cy: number, cz: number, array: number[]): void;
        axiom$waitForPendingTasks(x: number, z: number): $CompletableFuture<any>;
        lightChunk(chunk: $ChunkAccess, lightEnabled: boolean): $CompletableFuture<$ChunkAccess>;
        initializeLight(chunk: $ChunkAccess, lightEnabled: boolean): $CompletableFuture<$ChunkAccess>;
        waitForPendingTasks(x: number, z: number): $CompletableFuture<never>;
        invokeEnqueue(chunkX: number, chunkZ: number, queueLevelSupplier: $IntSupplier_, type: $ThreadedLevelLightEngine$TaskType_, task: $Runnable_): void;
        invokeUpdateChunkStatus(chunkPos: $ChunkPos): void;
        static DEFAULT_BATCH_SIZE: number;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEngine: $LightEngine<never, never>;
        constructor(lightChunk: $LightChunkGetter, chunkMap: $ChunkMap, skyLight: boolean, taskMailbox: $ProcessorMailbox<$Runnable_>, sorterMailbox: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    export class $ThreadedLevelLightEngine$TaskType extends $Enum<$ThreadedLevelLightEngine$TaskType> {
        static values(): $ThreadedLevelLightEngine$TaskType[];
        static valueOf(arg0: string): $ThreadedLevelLightEngine$TaskType;
        static PRE_UPDATE: $ThreadedLevelLightEngine$TaskType;
        static POST_UPDATE: $ThreadedLevelLightEngine$TaskType;
    }
    /**
     * Values that may be interpreted as {@link $ThreadedLevelLightEngine$TaskType}.
     */
    export type $ThreadedLevelLightEngine$TaskType_ = "pre_update" | "post_update";
    export class $ChunkTaskPriorityQueueSorter$Release {
        task: $Runnable;
        pos: number;
        clearQueue: boolean;
        constructor(task: $Runnable_, pos: number, arg2: boolean);
    }
    export class $DistanceManager$FixedPlayerDistanceChunkTracker extends $ChunkTracker implements $IChunkLevelManagerDistanceFromNearestPlayerTracker {
        runAllUpdates(): void;
        /**
         * Called after `PlayerChunkTracker#setLevel(long, int)` puts/removes chunk into/from `#chunksInRange`.
         */
        onLevelChange(chunkPos: number, arg1: number, oldLevel: number): void;
        getMaxDistance(): number;
        levelCount: number;
        chunks: $Long2ByteMap;
        this$0: $DistanceManager;
        static SOURCE: number;
        maxDistance: number;
        constructor(maxDistance: $DistanceManager, arg1: number);
    }
    export class $DistanceManager$PlayerTicketTracker extends $DistanceManager$FixedPlayerDistanceChunkTracker implements $IChunkLevelManagerNearbyChunkTicketUpdater {
        updateViewDistance(viewDistance: number): void;
        getDistances(): $Long2IntMap;
        levelCount: number;
        chunks: $Long2ByteMap;
        this$0: $DistanceManager;
        static SOURCE: number;
        maxDistance: number;
        constructor(maxDistance: $DistanceManager, arg1: number);
        get distances(): $Long2IntMap;
    }
    export class $DemoMode extends $ServerPlayerGameMode {
        static DEMO_DAYS: number;
        static TOTAL_PLAY_TICKS: number;
        isDestroyingBlock: boolean;
        level: $ServerLevel;
        player: $ServerPlayer;
        constructor(player: $ServerPlayer);
    }
    export class $ChunkTracker extends $DynamicGraphMinFixedPoint {
        update(pos: number, arg1: number, level: boolean): void;
        getLevelFromSource(pos: number): number;
        levelCount: number;
        static SOURCE: number;
        constructor(firstQueuedLevel: number, width: number, height: number);
    }
    export class $ChunkResult$Fail<T> extends $Record implements $ChunkResult<T> {
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T | null): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        error(): $Supplier<string>;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        getError(): string;
        constructor(arg0: $Supplier_<string>);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Fail}.
     */
    export type $ChunkResult$Fail_<T> = { error?: $Supplier_<string>,  } | [error?: $Supplier_<string>, ];
    export class $ChunkTaskPriorityQueueSorter$Message<T> {
        task: $Function<$ProcessorHandle<$Unit>, T>;
        pos: number;
        level: $IntSupplier;
        constructor(task: $Function_<$ProcessorHandle<$Unit>, T>, pos: number, arg2: $IntSupplier_);
    }
    export class $FullChunkStatus extends $Enum<$FullChunkStatus> {
        static values(): $FullChunkStatus[];
        static valueOf(arg0: string): $FullChunkStatus;
        isOrAfter(status: $FullChunkStatus_): boolean;
        static ENTITY_TICKING: $FullChunkStatus;
        static INACCESSIBLE: $FullChunkStatus;
        static FULL: $FullChunkStatus;
        static BLOCK_TICKING: $FullChunkStatus;
    }
    /**
     * Values that may be interpreted as {@link $FullChunkStatus}.
     */
    export type $FullChunkStatus_ = "inaccessible" | "full" | "block_ticking" | "entity_ticking";
    export class $ServerLevel$EntityCallbacks implements $LevelCallback<$Entity> {
        onCreated(arg0: $Entity): void;
        onDestroyed(arg0: $Entity): void;
        onTrackingStart(arg0: $Entity): void;
        onTickingStart(arg0: $Entity): void;
        onTrackingEnd(arg0: $Entity): void;
        onTickingEnd(arg0: $Entity): void;
        onSectionChange(arg0: $Entity): void;
        this$0: $ServerLevel;
        constructor(arg0: $ServerLevel);
    }
    export class $ClientInformation extends $Record implements $ISyncedClientOptions {
        write(buffer: $FriendlyByteBuf): void;
        language(): string;
        textFilteringEnabled(): boolean;
        static createDefault(): $ClientInformation;
        allowsListing(): boolean;
        viewDistance(): number;
        modelCustomisation(): number;
        chatVisibility(): $ChatVisiblity;
        mainHand(): $HumanoidArm;
        chatColors(): boolean;
        setViewDistance(arg0: number): void;
        static MAX_LANGUAGE_LENGTH: number;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: string, arg1: number, arg2: $ChatVisiblity_, arg3: boolean, arg4: number, arg5: $HumanoidArm_, arg6: boolean, arg7: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ClientInformation}.
     */
    export type $ClientInformation_ = { chatColors?: boolean, chatVisibility?: $ChatVisiblity_, allowsListing?: boolean, language?: string, viewDistance?: number, modelCustomisation?: number, textFilteringEnabled?: boolean, mainHand?: $HumanoidArm_,  } | [chatColors?: boolean, chatVisibility?: $ChatVisiblity_, allowsListing?: boolean, language?: string, viewDistance?: number, modelCustomisation?: number, textFilteringEnabled?: boolean, mainHand?: $HumanoidArm_, ];
    export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider, $GeneratingChunkMap, $AccessorMixinChunkMap, $ServerChunkLoadingManagerAccessor, $IThreadedAnvilChunkStorage, $IVanillaChunkManager, $IChunkSystemAccess, $IThreadedAnvilChunkStorage$1 {
        size(): number;
        generator(): $ChunkGenerator;
        move(player: $ServerPlayer): void;
        broadcast(entity: $Entity, packet: $Packet<never>): void;
        /**
         * Gets an unmodifiable iterable of all loaded chunks in the chunk manager
         */
        getChunks(): $Iterable<$ChunkHolder>;
        getTickingGenerated(): number;
        c2me$getTheChunkSystem(): $TheChunkSystem;
        c2me$runOneChunkAutoSave(): boolean;
        tick(hasMoreTime: $BooleanSupplier_): void;
        tick(): void;
        getPlayersWatching(arg0: $Entity): $List<$ServerPlayer>;
        getStorageName(): string;
        saveAllChunks(flush: boolean): void;
        hasWork(): boolean;
        getPoiManager(): $PoiManager;
        getDistanceManager(): $DistanceManager;
        randomState(): $RandomState;
        broadcastAndSend(entity: $Entity, packet: $Packet<never>): void;
        debugFuturesAndCreateReportedException(exception: $IllegalStateException, details: string): $ReportedException;
        onFullChunkStatusChange(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
        getLightEngine(): $ThreadedLevelLightEngine;
        removeEntity(entity: $Entity): void;
        addEntity(entity: $Entity): void;
        /**
         * Returns the players tracking the given chunk.
         */
        getPlayers(pos: $ChunkPos, boundaryOnly: boolean): $List<$ServerPlayer>;
        dumpChunks(writer: $Writer): void;
        generatorState(): $ChunkGeneratorStructureState;
        updatePlayerStatus(player: $ServerPlayer, track: boolean): void;
        getChunkQueueLevel(chunkPos: number): $IntSupplier;
        /**
         * Checks if a chunk is on the edge of the player's view distance.
         */
        isChunkTracked(player: $ServerPlayer, x: number, z: number): boolean;
        releaseGeneration(chunk: $GenerationChunkHolder): void;
        scheduleUnload(chunkPos: number, arg1: $ChunkHolder): void;
        getChunkDebugData(pos: $ChunkPos): string;
        promoteChunkMap(): boolean;
        runGenerationTasks(): void;
        saveChunkIfNeeded(holder: $ChunkHolder): boolean;
        acquireGeneration(chunkPos: number): $GenerationChunkHolder;
        getChunkToSend(chunkPos: number): $LevelChunk;
        c2me$getSchedulingManager(): $SchedulingManager;
        setServerViewDistance(viewDistance: number): void;
        getUpdatingChunkIfPresent(chunkPos: number): $ChunkHolder;
        prepareEntityTickingChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getVisibleChunkIfPresent(chunkPos: number): $ChunkHolder;
        scheduleGenerationTask(targetStatus: $ChunkStatus, pos: $ChunkPos): $ChunkGenerationTask;
        prepareTickingChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        waitForLightBeforeSending(chunkPos: $ChunkPos, range: number): void;
        getPlayersCloseForSpawning(chunkPos: $ChunkPos): $List<$ServerPlayer>;
        prepareAccessibleChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getPlayerViewDistance(player: $ServerPlayer): number;
        markChunkPendingToSend(player: $ServerPlayer, chunkPos: $ChunkPos): void;
        /**
         * Sets level and loads/unloads chunk.
         */
        updateChunkScheduling(chunkPos: number, level: number, newLevel: $ChunkHolder, holder: number): $ChunkHolder;
        resendBiomesForChunks(chunks: $List_<$ChunkAccess>): void;
        applyStep(chunk: $GenerationChunkHolder, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        scheduleOnMainThreadMailbox(arg0: $ChunkTaskPriorityQueueSorter$Message<$Runnable_>): void;
        anyPlayerCloseEnoughForSpawning(chunkPos: $ChunkPos): boolean;
        readChunk(pos: $ChunkPos): $CompletableFuture<any>;
        getWorld(): $ServerLevel;
        getEntityMap(): $Int2ObjectMap<$EntityTrackerAccessor>;
        /**
         * Gets an unmodifiable iterable of all loaded chunks in the chunk manager
         */
        lootr$getChunks(): $Iterable<$ChunkHolder>;
        getWorldGenerationProgressListener(): $ChunkProgressListener;
        invokeUpdateHolderMap(): boolean;
        getChunkToNextSaveTimeMs(): $Long2LongMap;
        invokeGetUpdatedChunkNbt(pos: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        invokeSendToPlayers(chunk: $LevelChunk): void;
        getGenerationContext(): $WorldGenContext;
        getTotalChunksLoadedCount(): $AtomicInteger;
        getLightingProvider(): $ThreadedLevelLightEngine;
        invokeOnChunkStatusChange(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
        getMainThreadExecutor(): $BlockableEventLoop<$Runnable>;
        setChunkHolderListDirty(flush: boolean): void;
        getCurrentChunkHolders(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        getPointOfInterestStorage(): $PoiManager;
        invokeGetChunkHolder(chunkPos: number): $ChunkHolder;
        invokeSave(chunk: $ChunkAccess): boolean;
        fixerUpper: $DataFixer;
        entityMap: $Int2ObjectMap<$ChunkMap$TrackedEntity>;
        toDrop: $LongSet;
        level: $ServerLevel;
        updatingChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        static $assertionsDisabled: boolean;
        static MAX_VIEW_DISTANCE: number;
        mainThreadExecutor: $BlockableEventLoop<$Runnable>;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        pendingUnloads: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        unloadQueue: $Queue<$Runnable>;
        static MIN_VIEW_DISTANCE: number;
        visibleChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        modified: boolean;
        static FORCED_TICKET_LEVEL: number;
        worker: $IOWorker;
        chunkSaveCooldowns: $Long2LongMap;
        constructor(level: $ServerLevel, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, structureManager: $StructureTemplateManager, dispatcher: $Executor_, mainThreadExecutor: $BlockableEventLoop<$Runnable_>, lightChunk: $LightChunkGetter, generator: $ChunkGenerator, progressListener: $ChunkProgressListener, chunkStatusListener: $ChunkStatusUpdateListener_, overworldDataStorage: $Supplier_<$DimensionDataStorage>, viewDistance: number, sync: boolean);
        get chunks(): $Iterable<$ChunkHolder>;
        get tickingGenerated(): number;
        get storageName(): string;
        get poiManager(): $PoiManager;
        get distanceManager(): $DistanceManager;
        get lightEngine(): $ThreadedLevelLightEngine;
        set serverViewDistance(value: number);
        get world(): $ServerLevel;
        get worldGenerationProgressListener(): $ChunkProgressListener;
        get chunkToNextSaveTimeMs(): $Long2LongMap;
        get generationContext(): $WorldGenContext;
        get totalChunksLoadedCount(): $AtomicInteger;
        get lightingProvider(): $ThreadedLevelLightEngine;
        set chunkHolderListDirty(value: boolean);
        get currentChunkHolders(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        get pointOfInterestStorage(): $PoiManager;
    }
    export class $ServerPlayerGameMode {
        /**
         * Sets the world instance.
         */
        setLevel(serverLevel: $ServerLevel): void;
        changeGameModeForPlayer(gameModeForPlayer: $GameType_): boolean;
        getGameModeForPlayer(): $GameType;
        setGameModeForPlayer(gameModeForPlayer: $GameType_, previousGameModeForPlayer: $GameType_ | null): void;
        tick(): void;
        getPreviousGameModeForPlayer(): $GameType;
        handleBlockBreakAction(pos: $BlockPos_, action: $ServerboundPlayerActionPacket$Action_, face: $Direction_, maxBuildHeight: number, sequence: number): void;
        useItem(player: $ServerPlayer, level: $Level, stack: $ItemStack_, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $ServerPlayer, level: $Level, stack: $ItemStack_, hand: $InteractionHand_, hitResult: $BlockHitResult): $InteractionResult;
        /**
         * Get if we are in creative game mode.
         */
        isCreative(): boolean;
        /**
         * Attempts to harvest a block
         */
        destroyBlock(pos: $BlockPos_): boolean;
        /**
         * Get if we are in creative game mode.
         */
        isSurvival(): boolean;
        destroyAndAck(pos: $BlockPos_, sequence: number, message: string): void;
        isDestroyingBlock: boolean;
        level: $ServerLevel;
        player: $ServerPlayer;
        constructor(player: $ServerPlayer);
        get previousGameModeForPlayer(): $GameType;
        get creative(): boolean;
        get survival(): boolean;
    }
    export class $ChunkMap$DistanceManager extends $DistanceManager implements $IThreadedAnvilChunkStorageLevelManager {
        c2me$getSuperClass(): $ChunkMap;
        ticketThrottlerInput: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        ticketsToRelease: $LongSet;
        chunksToUpdateFutures: $Set<$ChunkHolder>;
        tickets: $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        ticketThrottler: $ChunkTaskPriorityQueueSorter;
        this$0: $ChunkMap;
        playersPerChunk: $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        static LOGGER: $Logger;
        mainThreadExecutor: $Executor;
        ticketThrottlerReleaser: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        static PLAYER_TICKET_LEVEL: number;
        tickingTicketsTracker: $TickingTracker;
        constructor(dispatcher: $ChunkMap, mainThreadExecutor: $Executor_, arg2: $Executor_);
    }
    export class $ServerPlayer$RespawnPosAngle extends $Record {
        position(): $Vec3;
        static of(position: $Vec3_, towardsPos: $BlockPos_): $ServerPlayer$RespawnPosAngle;
        yaw(): number;
        constructor(position: $Vec3_, yaw: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayer$RespawnPosAngle}.
     */
    export type $ServerPlayer$RespawnPosAngle_ = { yaw?: number, position?: $Vec3_,  } | [yaw?: number, position?: $Vec3_, ];
    export class $DistanceManager implements $IChunkLevelManager, $ChunkLevelManagerExtension {
        removeTicketsOnClosing(): void;
        c2me$getPendingLoadsCount(): number;
        runAllUpdates(chunkMap: $ChunkMap): boolean;
        c2me$closeNoTickVD(): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        removeRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        getDebugStatus(): string;
        updateChunkForced(pos: $ChunkPos, add: boolean): void;
        removeTicket(chunkPos: number, arg1: $Ticket<never>): void;
        removeTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        addRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        getChunk(chunkPos: number): $ChunkHolder;
        /**
         * Returns the number of chunks taken into account when calculating the mob cap
         */
        getNaturalSpawnChunkCount(): number;
        inBlockTickingRange(chunkPos: number): boolean;
        inEntityTickingRange(chunkPos: number): boolean;
        removePlayer(sectionPos: $SectionPos, player: $ServerPlayer): void;
        addPlayer(sectionPos: $SectionPos, player: $ServerPlayer): void;
        addTicket(chunkPos: number, arg1: $Ticket<never>): void;
        addTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        hasTickets(): boolean;
        handler$ebn000$c2me_notickvd$mapSimulationDistance(simulationDistance: number, ci: $CallbackInfo): void;
        purgeStaleTickets(): void;
        shouldForceTicks(chunkPos: number): boolean;
        hasPlayersNearby(chunkPos: number): boolean;
        tickingTracker(): $TickingTracker;
        getTicketDebugString(chunkPos: number): string;
        updatePlayerTickets(viewDistance: number): void;
        updateChunkScheduling(chunkPos: number, arg1: number, newLevel: $ChunkHolder | null, holder: number): $ChunkHolder;
        updateSimulationDistance(viewDistance: number): void;
        isChunkToRemove(chunkPos: number): boolean;
        invokeSetWatchDistance(viewDistance: number): void;
        getPlayersByChunkPos(): $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        getSimulationDistanceLevelPropagator(): $TickingTracker;
        ticketThrottlerInput: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        ticketsToRelease: $LongSet;
        chunksToUpdateFutures: $Set<$ChunkHolder>;
        tickets: $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        ticketThrottler: $ChunkTaskPriorityQueueSorter;
        playersPerChunk: $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        static LOGGER: $Logger;
        mainThreadExecutor: $Executor;
        ticketThrottlerReleaser: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        static PLAYER_TICKET_LEVEL: number;
        tickingTicketsTracker: $TickingTracker;
        constructor(dispatcher: $Executor_, mainThreadExecutor: $Executor_);
        get debugStatus(): string;
        get naturalSpawnChunkCount(): number;
        get playersByChunkPos(): $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        get simulationDistanceLevelPropagator(): $TickingTracker;
    }
    export class $ServerPlayer extends $Player implements $IPlayerWorldTp, $VeilPacketManager$PacketSink, $IQuiverPlayer, $IServerPlayer$2, $IServerPlayer$1, $ServerPlayerKJS, $IServerPlayer, $PlayerFreezeExtension, $ServerPlayerRespawnExtension, $IMixinServerPlayer_neoforge, $ServerPlayerExt, $IOpenPACServerPlayer {
        /**
         * Gets the player's IP address. Used in /banip.
         */
        getLanguage(): string;
        drop(bypassHiddenChat: boolean): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        disconnect(): void;
        /**
         * Add experience levels to this player.
         */
        setExperienceLevels(levels: number): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        trackStartFallingPosition(): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        nextContainerCounter(): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        requestedViewDistance(): number;
        getRespawnDimension(): $ResourceKey<$Level>;
        handler$gpk00a$sable$tick(arg0: $CallbackInfo): void;
        /**
         * Add experience levels to this player.
         */
        setExperiencePoints(levels: number): void;
        createCommonSpawnInfo(level: $ServerLevel): $CommonPlayerSpawnInfo;
        checkRidingStatistics(dx: number, arg1: number, dy: number): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        resetLastActionTime(): void;
        checkMovementStatistics(dx: number, arg1: number, dy: number): void;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListDisplayName(): $Component;
        /**
         * Returns if other players can attack this player
         */
        isChangingDimension(): boolean;
        shouldFilterMessageTo(player: $ServerPlayer): boolean;
        setXaeroMinimapPlayerData(arg0: $ServerPlayerData$1): void;
        setXaeroWorldMapPlayerData(arg0: $ServerPlayerData$2): void;
        axiom$setNoPhysicalTrigger(spawnExtraParticlesOnFall: boolean): void;
        setXaero_OPAC_PlayerData(arg0: $ServerPlayerDataAPI): void;
        setChunkTrackingView(chunkTrackingView: $ChunkTrackingView): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        hasChangedDimension(): void;
        getChunkTrackingView(): $ChunkTrackingView;
        sable$getQueuedFreeze(): $Pair<any, any>;
        setTabListHeaderFooter(arg0: $Component_, arg1: $Component_): void;
        sable$getRespawnPoint(): $UUID;
        copyRespawnPosition(player: $ServerPlayer): void;
        sable$takeQueuedFreezeFrom(player: $ServerPlayer): void;
        setRaidOmenPosition(raidOmenPosition: $BlockPos_): void;
        /**
         * Returns if other players can attack this player
         */
        axiom$isNoPhysicalTrigger(): boolean;
        getRaidOmenPosition(): $BlockPos;
        getXaeroWorldMapPlayerData(): $ServerPlayerData$2;
        getXaero_OPAC_PlayerData(): $ServerPlayerDataAPI;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        clearRaidOmenPosition(): void;
        getXaeroMinimapPlayerData(): $ServerPlayerData$1;
        getStatsCounter(): $ServerStatsCounter;
        /**
         * Returns if other players can attack this player
         */
        allowsListing(): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        initInventoryMenu(): void;
        /**
         * Returns if other players can attack this player
         */
        isRespawnForced(): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        showEndCredits(): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getRespawnAngle(): number;
        doCheckFallDamage(movementX: number, arg1: number, movementY: number, arg3: boolean): void;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListHeader(): $Component;
        /**
         * Returns if other players can attack this player
         */
        hasDisconnected(): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        resetSentInfo(): void;
        loadGameTypes(compound: $CompoundTag_ | null): void;
        setServerLevel(level: $ServerLevel): void;
        getLastActionTime(): number;
        getLastSectionPos(): $SectionPos;
        setLastSectionPos(sectionPos: $SectionPos): void;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListFooter(): $Component;
        /**
         * Changes the player's gamemode.
         * 
         * @param gameMode One of: `'survival'`, `'creative'`, `'adventure'`, `'spectator'`.
         */
        setGameMode(gameMode: $GameType_): boolean;
        getRecipeBook(): $ServerRecipeBook;
        setRespawnPosition(dimension: $ResourceKey_<$Level>, position: $BlockPos_ | null, angle: number, forced: boolean, sendMessage: boolean): void;
        /**
         * Gets the player's IP address. Used in /banip.
         */
        getIpAddress(): string;
        setTabListFooter(component: $Component_): void;
        setPlayerInput(strafe: number, forward: number, jumping: boolean, sneaking: boolean): void;
        setTabListHeader(component: $Component_): void;
        clientInformation(): $ClientInformation;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        refreshTabListName(): void;
        getTextFilter(): $TextFilter;
        /**
         * Returns if other players can attack this player
         */
        canChatInColor(): boolean;
        sendServerStatus(serverStatus: $ServerStatus_): void;
        setChatSession(chatSession: $RemoteChatSession_): void;
        getChatSession(): $RemoteChatSession;
        setKnownMovement(knownMovement: $Vec3_): void;
        getChatVisibility(): $ChatVisiblity;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        updateWorldTpConf(): void;
        xaerolib_getData(): $ServerPlayerData;
        xaerolib_setData(arg0: $ServerPlayerData): void;
        serverLevel(): $ServerLevel;
        sendSystemMessage(chatComponent: $Component_, actionBar: boolean): void;
        restoreFrom(that: $ServerPlayer, keepEverything: boolean): void;
        updateOptions(clientInformation: $ClientInformation_): void;
        getAdvancements(): $PlayerAdvancements;
        teleportTo(newLevel: $ServerLevel, x: number, arg2: number, y: number, arg4: number, z: number): void;
        sendPacket(arg0: $Packet<any>): void;
        initMenu(menu: $AbstractContainerMenu): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        doTick(): void;
        getCamera(): $Entity;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        setCamera(targetEntity: $Entity | null): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        trackEnteredOrExitedLavaOnVehicle(): void;
        setSpawnExtraParticlesOnFall(spawnExtraParticlesOnFall: boolean): void;
        supplementaries$getQuiverSlot(): $SlotReference;
        wrapMethod$hbl000$sable$teleportTo(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        wrapMethod$hbl000$sable$teleportTo(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: $Set_<any>, arg5: number, arg6: number, arg7: $Operation_<any>): boolean;
        supplementaries$setQuiverSlot(arg0: $SlotReference): void;
        static findRespawnAndUseSpawnBlock(level: $ServerLevel, pos: $BlockPos_, angle: number, forced: boolean, keepInventory: boolean): ($ServerPlayer$RespawnPosAngle) | undefined;
        sendChatMessage(message: $OutgoingChatMessage, filtered: boolean, boundType: $ChatType$Bound_): void;
        handler$zcp000$openpartiesandclaims$onAttackPre(arg0: $Entity, arg1: $CallbackInfo): void;
        handler$zcp000$openpartiesandclaims$onAttack(arg0: $Entity, arg1: $CallbackInfo): void;
        handler$iei000$distanthorizons$changeDimension(dimensionTransition: $DimensionTransition_, cir: $CallbackInfoReturnable<any>): void;
        handler$flm000$collective$ServerPlayer_restoreFrom(arg0: $ServerPlayer, arg1: boolean, arg2: $CallbackInfo): void;
        handler$iei000$distanthorizons$setServerLevel(level: $ServerLevel, ci: $CallbackInfo): void;
        distantHorizons$getDimensionChangeDestination(): $ServerLevel;
        findRespawnPositionAndUseSpawnBlock(keepInventory: boolean, postDimensionTransition: $DimensionTransition$PostDimensionTransition_): $DimensionTransition;
        handler$jie000$axiom$isInvulnerableTo(cir: $CallbackInfoReturnable<any>): void;
        lookAt(fromAnchor: $EntityAnchorArgument$Anchor_, entity: $Entity, toAnchor: $EntityAnchorArgument$Anchor_): void;
        getRespawnPosition(): $BlockPos;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        setSpawnLocation(c: $LevelBlock): void;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(spawnExtraParticlesOnFall: boolean): void;
        revokeAdvancement(statKey: $ResourceLocation_): void;
        captureInventory(autoRestore: boolean): $Container;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        unlockAdvancement(statKey: $ResourceLocation_): void;
        getSpawnLocation(): $LevelBlock;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         * Sets the current crafting inventory back to the 2x2 square.
         */
        heal(): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(component: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         * Sets the current crafting inventory back to the 2x2 square.
         */
        kick(): void;
        /**
         * Checks, whether the player is a server operator.
         * Returns if other players can attack this player
         */
        isOp(): boolean;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        lerpYRot: number;
        xRot: number;
        static USE_ITEM_INTERVAL: number;
        lerpYHeadRot: number;
        useItem: $ItemStack;
        jumpTriggerTime: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        simulated$currentTypeWriter: $BlockPos;
        removalReason: $Entity$RemovalReason;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        boardingCooldown: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        noCulling: boolean;
        gameMode: $ServerPlayerGameMode;
        appliedScale: number;
        object: $Object;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        swimAmount: number;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        noActionTime: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        yCloak: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        enchantmentSeed: number;
        static FLAG_FALL_FLYING: number;
        xOld: number;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        invulnerableTime: number;
        wasUnderwater: boolean;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventory: $Inventory;
        random: $RandomSource;
        lerpSteps: number;
        yOld: number;
        static HAND_SLOTS: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        levelCallback: $EntityInLevelCallback;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        animStep: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        oBob: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        static FLAG_ONFIRE: number;
        zza: number;
        rotOffs: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        static WAKE_UP_DURATION: number;
        xRotO: number;
        simulated$launchedPlunger: $LaunchedPlungerEntity;
        zo: number;
        wonGame: boolean;
        lastHurt: number;
        walkAnimation: $WalkAnimationState;
        lastDamageSource: $DamageSource;
        static STANDING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MODE_CUSTOMISATION: $EntityDataAccessor<number>;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        containerCounter: number;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static SWIMMING_BB_HEIGHT: number;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        xxa: number;
        zCloak: number;
        lerpHeadSteps: number;
        static $assertionsDisabled: boolean;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        xCloakO: number;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        rotA: number;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        firstTick: boolean;
        static HELD_ITEM_SLOT: number;
        uuid: $UUID;
        abilities: $Abilities;
        lastHurtByPlayer: $Player;
        static SWING_DURATION: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        enderChestInventory: $PlayerEnderChestContainer;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        oRun: number;
        bob: number;
        experienceProgress: number;
        create_diesel_generators$turretPos: $BlockPos;
        totalExperience: number;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        foodData: $FoodData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MAIN_HAND: $EntityDataAccessor<number>;
        static EQUIPMENT_SLOT_OFFSET: number;
        defaultFlySpeed: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        static DATA_SHOULDER_LEFT: $EntityDataAccessor<$CompoundTag>;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        swimAmountO: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        lastDamageStamp: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        fishing: $FishingHook;
        static SWIMMING_BB_WIDTH: number;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        static TOTAL_AIR_SUPPLY: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static DATA_SHOULDER_RIGHT: $EntityDataAccessor<$CompoundTag>;
        currentExplosionCause: $Entity;
        constructor(server: $MinecraftServer, level: $ServerLevel, gameProfile: $GameProfile, clientInformation: $ClientInformation_);
        get language(): string;
        set experienceLevels(value: number);
        get respawnDimension(): $ResourceKey<$Level>;
        set experiencePoints(value: number);
        get tabListDisplayName(): $Component;
        get changingDimension(): boolean;
        get statsCounter(): $ServerStatsCounter;
        get respawnForced(): boolean;
        get respawnAngle(): number;
        get lastActionTime(): number;
        get recipeBook(): $ServerRecipeBook;
        get ipAddress(): string;
        get textFilter(): $TextFilter;
        set knownMovement(value: $Vec3_);
        get chatVisibility(): $ChatVisiblity;
        get advancements(): $PlayerAdvancements;
        set spawnExtraParticlesOnFall(value: boolean);
        set creativeMode(value: boolean);
        get op(): boolean;
    }
    export class $ChunkTaskPriorityQueueSorter implements $ChunkHolder$LevelChangeListener, $AutoCloseable {
        static message<T>(chunk: $GenerationChunkHolder, task: $Function_<$ProcessorHandle<$Unit>, T>): $ChunkTaskPriorityQueueSorter$Message<T>;
        static message(chunk: $GenerationChunkHolder, task: $Runnable_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message(task: $Runnable_, pos: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message<T>(task: $Function_<$ProcessorHandle<$Unit>, T>, pos: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<T>;
        close(): void;
        static release(task: $Runnable_, pos: number, arg2: boolean): $ChunkTaskPriorityQueueSorter$Release;
        getProcessor<T>(processor: $ProcessorHandle<T>, flush: boolean): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<T>>;
        getReleaseProcessor(processor: $ProcessorHandle<$Runnable_>): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        hasWork(): boolean;
        getDebugStatus(): string;
        onLevelChange(chunkPos: $ChunkPos, queueLevelGetter: $IntSupplier_, ticketLevel: number, queueLevelSetter: $IntConsumer_): void;
        constructor(queues: $List_<$ProcessorHandle<never>>, task: $Executor_, maxTasks: number);
        get debugStatus(): string;
    }
    export class $ServerLevel extends $Level implements $WorldGenLevel, $VeilPacketManager$PacketSink, $ILevelEventRedirect, $WorldStructureBlockCacheAccessor, $ServerWorldExtended, $ServerLevelAccessor, $ServerLevelAccessor$1, $ServerLevelAccessor$2, $IWorldMapServerLevel, $ServerWorldCache, $ServerLevelKJS, $ServerLevelAccessor$3, $ServerLevelSceneExtension, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $ITempleStateCacheProvider, $ServerLevelExt {
        save(progress: $ProgressListener | null, flush: boolean, skipSave: boolean): void;
        unload(chunk: $LevelChunk): void;
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        getLevel(): $ServerLevel;
        isFlat(): boolean;
        handler$zco000$openpartiesandclaims$onIsPositionEntityTicking(arg0: $BlockPos_, arg1: $CallbackInfoReturnable<any>): void;
        sable$getPlotContainer(): $SubLevelContainer;
        removePlayerImmediately(player: $ServerPlayer, reason: $Entity$RemovalReason_): void;
        canSleepThroughNights(): boolean;
        getTempleStateCache(): $TempleStateCache;
        /**
         * Resets the updateEntityTick field to 0
         */
        axiom$processTasks(): void;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>, output: $List_<T>, maxResults: number): void;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>, output: $List_<T>): void;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>): $List<T>;
        handler$jid001$axiom$afterInit(ci: $CallbackInfo): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        cleanCapabilityListenerReferences(): void;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        tryAddFreshEntityWithPassengers(entity: $Entity): boolean;
        handler$hcm000$sable$saveSubLevels(arg0: $ProgressListener, arg1: boolean, arg2: boolean, arg3: $CallbackInfo): void;
        handler$gpp000$sable$kickEntity(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        wrapMethod$hbp000$sable$preExplode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Level$ExplosionInteraction_, arg9: $ParticleOptions_, arg10: $ParticleOptions_, arg11: $Holder_<any>, arg12: $Operation_<any>): $Explosion;
        lithium$setNavigationInactive(arg0: $Mob): void;
        axiom$relightChunkStarlight(cx: number, cz: number): void;
        axiom$getPendingLightUpdates(cx: number, cy: number, cz: number): number[];
        lithium$setNavigationActive(arg0: $Mob): void;
        areEntityNavigationsConsistent(): boolean;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        structureManager(): $StructureManager;
        tickCustomSpawners(spawnEnemies: boolean, spawnFriendlies: boolean): void;
        addRespawnedPlayer(player: $ServerPlayer): void;
        getPoiManager(): $PoiManager;
        getLogicalHeight(): number;
        /**
         * Resets the updateEntityTick field to 0
         */
        resetWeatherCycle(): void;
        /**
         * @deprecated
         */
        setDragonFight(dragonFight: $EndDragonFight | null): void;
        getDataStorage(): $DimensionDataStorage;
        tickPrecipitation(blockPos: $BlockPos_): void;
        tickNonPassenger(entity: $Entity): void;
        getRandomPlayer(): $ServerPlayer;
        isHandlingTick(): boolean;
        addNewPlayer(player: $ServerPlayer): void;
        setDefaultSpawnPos(pos: $BlockPos_, angle: number): void;
        onReputationEvent(type: $ReputationEventType, target: $Entity, host: $ReputationEventHandler_): void;
        getDragonFight(): $EndDragonFight;
        startTickingChunk(chunk: $LevelChunk): void;
        getForcedChunks(): $LongSet;
        /**
         * Returns the name of the current chunk provider, by calling chunkprovider.makeString()
         */
        getWatchdogStats(): string;
        isCloseToVillage(pos: $BlockPos_, sections: number): boolean;
        saveDebugReport(path: $Path_): void;
        clearBlockEvents(boundingBox: $BoundingBox): void;
        sectionsToVillage(pos: $SectionPos): number;
        getPortalForcer(): $PortalForcer;
        supp$setRedirected(arg0: boolean, arg1: $Vec3_): void;
        getRandomSequence(location: $ResourceLocation_): $RandomSource;
        /**
         * @deprecated
         * Returns the Entity with the given ID, or null if it doesn't exist in this World.
         */
        getEntityOrPart(id: number): $Entity;
        setChunkForced(chunkX: number, chunkZ: number, add: boolean): boolean;
        findClosestBiome3d(biomePredicate: $Predicate_<$Holder<$Biome>>, pos: $BlockPos_, radius: number, horizontalStep: number, verticalStep: number): $Pair$1<$BlockPos, $Holder<$Biome>>;
        /**
         * Gets an unmodifiable iterator of all loaded entities in the world.
         */
        getAllEntities(): $Iterable<$Entity>;
        areEntitiesLoaded(chunkPos: number): boolean;
        getRandomSequences(): $RandomSequences;
        getPathTypeCache(): $PathTypeCache;
        sable$getSceneID(): number;
        sable$setSceneID(timeFlash: number): void;
        sendParticles(player: $ServerPlayer, longDistance: boolean, posX: number, arg3: number, posY: number, arg5: $Packet<never>): boolean;
        sendParticles<T extends $ParticleOptions>(type: T, posX: number, arg2: number, posY: number, arg4: number, posZ: number, arg6: number, particleCount: number, xOffset: number): number;
        sendParticles<T extends $ParticleOptions>(player: $ServerPlayer, type: T, longDistance: boolean, posX: number, arg4: number, posY: number, arg6: number, posZ: number, arg8: number, particleCount: number, xOffset: number): boolean;
        getScoreboard(): $ServerScoreboard;
        addDuringTeleport(entity: $Entity): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        resetEmptyTime(): void;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ServerChunkCache;
        getPersistentData(): $CompoundTag;
        /**
         * Resets the updateEntityTick field to 0
         */
        updateSleepingPlayerList(): void;
        sendPacket(packet: $Packet<any>): void;
        handler$dle000$immersiveengineering$wireBlockCallback(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_, arg3: number, arg4: $CallbackInfo): void;
        findLightningTargetAround(pos: $BlockPos_): $BlockPos;
        setWeatherParameters(clearTime: number, weatherTime: number, isRaining: boolean, isThundering: boolean): void;
        findNearestMapStructure(structureTag: $TagKey_<$Structure>, pos: $BlockPos_, radius: number, skipExistingChunks: boolean): $BlockPos;
        getStructureManager(): $StructureTemplateManager;
        onStructureStartsAvailable(chunk: $ChunkAccess): void;
        fabric_invalidateCache(blockPos: $BlockPos_): void;
        getXaero_wm_capabilities(): $ServerWorldCapabilities;
        setXaero_wm_capabilities(arg0: $ServerWorldCapabilities): void;
        axiom$markChunkDirty(cx: number, cz: number): void;
        registerCapabilityListener(arg0: $BlockPos_, arg1: $ICapabilityInvalidationListener_): void;
        fabric_registerCache(arg0: $BlockPos_, arg1: $BlockApiCacheImpl<any, any>): void;
        axiom$getWorldProperties(): $ServerWorldPropertiesRegistry;
        addLegacyChunkEntities(entities: $Stream<$Entity>): void;
        addWorldGenChunkEntities(entities: $Stream<$Entity>): void;
        isPositionEntityTicking(pos: $BlockPos_): boolean;
        isNaturalSpawningAllowed(pos: $BlockPos_): boolean;
        isNaturalSpawningAllowed(chunkPos: $ChunkPos): boolean;
        huge_structure_blocks$getStructureBlockCache(): $StructureBlockCache;
        handler$ile000$magnumtorch$onBlockStateChange(pos: $BlockPos_, oldState: $BlockState_, newState: $BlockState_, callback: $CallbackInfo): void;
        handler$zco000$openpartiesandclaims$preTick(arg0: $BooleanSupplier_, arg1: $CallbackInfo): void;
        handler$fll000$collective$serverLevel_close(arg0: $CallbackInfo): void;
        handler$jid000$axiom$onPlayerJoinedWorld(serverPlayer: $ServerPlayer, ci: $CallbackInfo): void;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        addWithUUID(entity: $Entity): boolean;
        getBlockTicks(): $LevelTicks<$Block>;
        getFluidTicks(): $LevelTicks<$Fluid>;
        /**
         * Resets the updateEntityTick field to 0
         */
        tickTime(): void;
        tickChunk(chunk: $LevelChunk, randomTickSpeed: number): void;
        setDayTime(time: number): void;
        getPlayers(predicate: $Predicate_<$ServerPlayer>): $List<$ServerPlayer>;
        getPlayers(predicate: $Predicate_<$ServerPlayer>, maxResults: number): $List<$ServerPlayer>;
        getDragons(): $List<$EnderDragon>;
        isRaided(pos: $BlockPos_): boolean;
        getRaidAt(pos: $BlockPos_): $Raid;
        isVillage(pos: $BlockPos_): boolean;
        isVillage(pos: $SectionPos): boolean;
        getRaids(): $Raids;
        ensureCanWrite(pos: $BlockPos_): boolean;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        self(): $ServerLevel;
        addFreshEntityWithPassengers(entity: $Entity): void;
        getEntityManager(): $PersistentEntitySectionManager<$Entity>;
        create$getEntityTickList(): $EntityTickList;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static RAIN_DELAY: $IntProvider;
        xaero_wm_capabilities: $ServerWorldCapabilities;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        navigatingMobs: $Set<$Mob>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        entityTickList: $EntityTickList;
        raids: $Raids;
        rainLevel: number;
        dragonParts: $Int2ObjectMap<$PartEntity<never>>;
        oThunderLevel: number;
        static THUNDER_DURATION: $IntProvider;
        serverLevelData: $ServerLevelData;
        static RAIN_DURATION: $IntProvider;
        players: $List<$ServerPlayer>;
        static $assertionsDisabled: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        isUpdatingNavigations: boolean;
        thread: $Thread;
        addend: number;
        entityManager: $PersistentEntitySectionManager<$Entity>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static END_SPAWN_POINT: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(server: $MinecraftServer, dispatcher: $Executor_, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, serverLevelData: $ServerLevelData, dimension: $ResourceKey_<$Level>, levelStem: $LevelStem_, progressListener: $ChunkProgressListener, isDebug: boolean, biomeZoomSeed: number, arg9: $List_<$CustomSpawner_>, customSpawners: boolean, tickTime: $RandomSequences | null);
        get seed(): number;
        get level(): $ServerLevel;
        get flat(): boolean;
        get templeStateCache(): $TempleStateCache;
        get poiManager(): $PoiManager;
        get logicalHeight(): number;
        get dataStorage(): $DimensionDataStorage;
        get randomPlayer(): $ServerPlayer;
        get handlingTick(): boolean;
        get forcedChunks(): $LongSet;
        get watchdogStats(): string;
        get portalForcer(): $PortalForcer;
        get allEntities(): $Iterable<$Entity>;
        get randomSequences(): $RandomSequences;
        get pathTypeCache(): $PathTypeCache;
        get scoreboard(): $ServerScoreboard;
        get chunkSource(): $ServerChunkCache;
        get persistentData(): $CompoundTag;
        get blockTicks(): $LevelTicks<$Block>;
        get fluidTicks(): $LevelTicks<$Fluid>;
        get dragons(): $List<$EnderDragon>;
        set currentlyGenerating(value: $Supplier_<string> | null);
    }
    export class $SectionTracker extends $DynamicGraphMinFixedPoint {
        update(pos: number, arg1: number, level: boolean): void;
        getLevelFromSource(pos: number): number;
        levelCount: number;
        static SOURCE: number;
        constructor(firstQueuedLevel: number, width: number, height: number);
    }
    export class $ChunkMap$TrackedEntity implements $EntityTrackerAccessor {
        broadcast(packet: $Packet<never>): void;
        broadcastAndSend(packet: $Packet<never>): void;
        removePlayer(player: $ServerPlayer): void;
        updatePlayers(playersList: $List_<$ServerPlayer>): void;
        broadcastRemoved(): void;
        updatePlayer(player: $ServerPlayer): void;
        getPlayersTracking(): $Set<$ServerPlayerConnection>;
        serverEntity: $ServerEntity;
        lastSectionPos: $SectionPos;
        this$0: $ChunkMap;
        entity: $Entity;
        seenBy: $Set<$ServerPlayerConnection>;
        constructor(entity: $ChunkMap, range: $Entity, updateInterval: number, trackDelta: number, arg4: boolean);
        get playersTracking(): $Set<$ServerPlayerConnection>;
    }
    export class $DistanceManager$ChunkTicketTracker extends $ChunkTracker implements $TicketDistanceLevelPropagatorExtension {
        c2me$getTicketLevelUpdates(): $Long2IntLinkedOpenHashMap;
        runDistanceUpdates(toUpdateCount: number): number;
        levelCount: number;
        this$0: $DistanceManager;
        static SOURCE: number;
        constructor(arg0: $DistanceManager);
    }
}
