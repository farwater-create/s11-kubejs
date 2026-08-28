import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $Difficulty_, $TickRateManager } from "@package/net/minecraft/world";
import { $SystemReport, $CrashReport } from "@package/net/minecraft";
import { $MinecraftServerData as $MinecraftServerData$1, $IMinecraftServer } from "@package/xaero/map/server";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy, $URI } from "@package/java/net";
import { $GameProfileRepository_, $GameProfileRepository, $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftServerData, $IMinecraftServer as $IMinecraftServer$1 } from "@package/xaero/common/server";
import { $MinecraftServerAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ChatDecorator, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $TextFilter, $ServerConnectionListener } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $MinecraftServerExtension } from "@package/foundry/veil/ext";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $CommandStorage, $PlayerDataStorage, $LevelResource } from "@package/net/minecraft/world/level/storage";
import { $CommandSource, $Commands, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ChunkIOErrorReporter, $RegionStorageInfo_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $RemoteDebugSampleType_, $SampleLogger } from "@package/net/minecraft/util/debugchart";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $PlayerSelector_, $ReloadableServerResourcesKJS, $MinecraftServerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $JsonElement_ } from "@package/com/google/gson";
import { $ServerStatus } from "@package/net/minecraft/network/protocol/status";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $IServerDataAPI, $IOpenPACMinecraftServer } from "@package/xaero/pac/common/server";
import { $UUID_, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $ChunkProgressListenerFactory_, $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $HolderGetter$Provider, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $Exception, $Throwable, $Runnable, $Enum, $RuntimeException, $Iterable, $Thread, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $AccessorMixinMinecraftServer } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $OutputStream, $PrintStream, $File_, $IOException } from "@package/java/io";
import { $GameRules, $ChunkPos, $WorldDataConfiguration_, $GameType, $WorldDataConfiguration, $GameType_, $LevelSettings, $Level } from "@package/net/minecraft/world/level";
import { $TagManager } from "@package/net/minecraft/tags";
import { $ProfilerFiller, $ProfileResults } from "@package/net/minecraft/util/profiling";
import { $PlayerList, $GameProfileCache } from "@package/net/minecraft/server/players";
import { $KeyPair } from "@package/java/security";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $CustomBossEvents } from "@package/net/minecraft/server/bossevents";
import { $ServicesKeySet, $ServicesKeySet_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $ITimeTrackingServer, $IProfilingServerFunctionManager } from "@package/org/embeddedt/modernfix/duck";
import { $Stream } from "@package/java/util/stream";
import { $DedicatedServerProperties } from "@package/net/minecraft/server/dedicated";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $RegistryOps, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TickTaskSchedulerImpl } from "@package/foundry/veil/impl";
import { $FabricOriginalKnownPacksGetter } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $Scoreboard, $Objective, $ScoreboardSaveData } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as players from "@package/net/minecraft/server/players";
export * as packs from "@package/net/minecraft/server/packs";
export * as level from "@package/net/minecraft/server/level";
export * as commands from "@package/net/minecraft/server/commands";
export * as network from "@package/net/minecraft/server/network";
export * as advancements from "@package/net/minecraft/server/advancements";
export * as rcon from "@package/net/minecraft/server/rcon";
export * as chase from "@package/net/minecraft/server/chase";
export * as bossevents from "@package/net/minecraft/server/bossevents";
export * as dedicated from "@package/net/minecraft/server/dedicated";
export * as gui from "@package/net/minecraft/server/gui";

declare module "@package/net/minecraft/server" {
    export class $LoggedPrintStream extends $PrintStream {
        logLine(string: string | null): void;
        name: string;
        constructor(name: string, out: $OutputStream);
    }
    export class $PlayerAdvancements {
        load(manager: $ServerAdvancementManager): void;
        save(): void;
        reload(manager: $ServerAdvancementManager): void;
        setSelectedTab(advancement: $AdvancementHolder_ | null): void;
        getOrStartProgress(advancement: $AdvancementHolder_): $AdvancementProgress;
        setPlayer(serverPlayer: $ServerPlayer): void;
        flushDirty(serverPlayer: $ServerPlayer): void;
        award(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        stopListening(): void;
        handler$jgn000$fabric_events_interaction_v0$preventGrantCriterion(arg0: $AdvancementHolder_, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        handler$jgn000$fabric_events_interaction_v0$preventOwnerOverride(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        revoke(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        player: $ServerPlayer;
        constructor(dataFixer: $DataFixer, playerList: $PlayerList, manager: $ServerAdvancementManager, playerSavePath: $Path_, player: $ServerPlayer);
        set selectedTab(value: $AdvancementHolder_ | null);
    }
    export class $WorldLoader$DataLoadOutput<D> extends $Record {
        cookie(): D;
        finalDimensions(): $RegistryAccess$Frozen;
        constructor(cookie: D, finalDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadOutput}.
     */
    export type $WorldLoader$DataLoadOutput_<D> = { finalDimensions?: $RegistryAccess$Frozen, cookie?: any,  } | [finalDimensions?: $RegistryAccess$Frozen, cookie?: any, ];
    export class $ConsoleInput {
        msg: string;
        source: $CommandSourceStack;
        constructor(msg: string, source: $CommandSourceStack);
    }
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        close(): void;
        managers(): $ReloadableServerResources;
        resourceManager(): $CloseableResourceManager;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ReloadableResources}.
     */
    export type $MinecraftServer$ReloadableResources_ = { resourceManager?: $CloseableResourceManager, managers?: $ReloadableServerResources,  } | [resourceManager?: $CloseableResourceManager, managers?: $ReloadableServerResources, ];
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener implements $IdentifiableResourceReloadListener {
        get(location: $ResourceLocation_): $AdvancementHolder;
        apply(object: $Map_<$ResourceLocation_, $JsonElement_>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        tree(): $AdvancementTree;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        constructor(registries: $HolderLookup$Provider);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get allAdvancements(): $Collection<$AdvancementHolder>;
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getMotd(): string;
        getMaxPlayers(): number;
        getServerVersion(): string;
        getPlayerCount(): number;
        get motd(): string;
        get maxPlayers(): number;
        get serverVersion(): string;
        get playerCount(): number;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        create(uri: $URI): $ServerLinks$Entry;
        static SUPPORT: $ServerLinks$KnownLinkType;
        static FORUMS: $ServerLinks$KnownLinkType;
        static STATUS: $ServerLinks$KnownLinkType;
        static ANNOUNCEMENTS: $ServerLinks$KnownLinkType;
        static COMMUNITY: $ServerLinks$KnownLinkType;
        static BUG_REPORT: $ServerLinks$KnownLinkType;
        static NEWS: $ServerLinks$KnownLinkType;
        static COMMUNITY_GUIDELINES: $ServerLinks$KnownLinkType;
        static FEEDBACK: $ServerLinks$KnownLinkType;
        static WEBSITE: $ServerLinks$KnownLinkType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$KnownLinkType>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$KnownLinkType}.
     */
    export type $ServerLinks$KnownLinkType_ = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
    export class $ReloadableServerResources$MissingTagAccessPolicy extends $Enum<$ReloadableServerResources$MissingTagAccessPolicy> {
    }
    /**
     * Values that may be interpreted as {@link $ReloadableServerResources$MissingTagAccessPolicy}.
     */
    export type $ReloadableServerResources$MissingTagAccessPolicy_ = "create_new" | "fail";
    export class $ServerTickRateManager extends $TickRateManager {
        checkShouldSprintThisTick(): boolean;
        endTickWork(): void;
        isSprinting(): boolean;
        requestGameToSprint(sprintTime: number): boolean;
        updateJoiningPlayer(player: $ServerPlayer): void;
        stopStepping(): boolean;
        stepGameIfPaused(sprintTime: number): boolean;
        stopSprinting(): boolean;
        static MIN_TICKRATE: number;
        runGameElements: boolean;
        constructor(server: $MinecraftServer);
        get sprinting(): boolean;
    }
    export class $PlayerAdvancements$Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancements$Data}.
     */
    export type $PlayerAdvancements$Data_ = { map?: $Map_<$ResourceLocation_, $AdvancementProgress>,  } | [map?: $Map_<$ResourceLocation_, $AdvancementProgress>, ];
    export class $ServerLinks extends $Record {
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        findKnownType(type: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks}.
     */
    export type $ServerLinks_ = { entries?: $List_<$ServerLinks$Entry_>,  } | [entries?: $List_<$ServerLinks$Entry_>, ];
    export class $DebugLoggedPrintStream extends $LoggedPrintStream {
        name: string;
        constructor(name: string, out: $OutputStream);
    }
    export class $WorldLoader$PackConfig extends $Record {
        packRepository(): $PackRepository;
        safeMode(): boolean;
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        initMode(): boolean;
        initialDataConfig(): $WorldDataConfiguration;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$PackConfig}.
     */
    export type $WorldLoader$PackConfig_ = { safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration_, packRepository?: $PackRepository, initMode?: boolean,  } | [safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration_, packRepository?: $PackRepository, initMode?: boolean, ];
    export class $ChainedJsonException$Entry {
        getFilename(): string;
        addJsonKey(key: string): void;
        getJsonKeys(): string;
        filename: string;
        constructor();
        get jsonKeys(): string;
    }
    export class $RunningOnDifferentThreadException extends $RuntimeException {
        static RUNNING_ON_DIFFERENT_THREAD: $RunningOnDifferentThreadException;
    }
    export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
        static values(): $ServerScoreboard$Method[];
        static valueOf(arg0: string): $ServerScoreboard$Method;
        static REMOVE: $ServerScoreboard$Method;
        static CHANGE: $ServerScoreboard$Method;
    }
    /**
     * Values that may be interpreted as {@link $ServerScoreboard$Method}.
     */
    export type $ServerScoreboard$Method_ = "change" | "remove";
    export class $ReloadableServerRegistries {
        static reload(registries: $LayeredRegistryAccess<$RegistryLayer_>, resourceManager: $ResourceManager, backgroundExecutor: $Executor_): $CompletableFuture<$LayeredRegistryAccess<$RegistryLayer>>;
        constructor();
    }
    export class $ReloadableServerRegistries$EmptyTagLookupWrapper implements $HolderLookup$Provider {
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        constructor(registryAccess: $RegistryAccess);
    }
    export class $WorldLoader$WorldDataSupplier<D> {
    }
    export interface $WorldLoader$WorldDataSupplier<D> {
        get(context: $WorldLoader$DataLoadContext_): $WorldLoader$DataLoadOutput<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$WorldDataSupplier}.
     */
    export type $WorldLoader$WorldDataSupplier_<D> = ((arg0: $WorldLoader$DataLoadContext) => $WorldLoader$DataLoadOutput_<D>);
    export class $Bootstrap {
        /**
         * Registers blocks, items, stats, etc.
         */
        static validate(): void;
        /**
         * Registers blocks, items, stats, etc.
         */
        static bootStrap(): void;
        static checkBootstrapCalled(callSite: $Supplier_<string>): void;
        static getMissingTranslations(): $Set<string>;
        static realStdoutPrintln(message: string): void;
        static STDOUT: $PrintStream;
        static bootstrapDuration: $AtomicLong;
        constructor();
        static get missingTranslations(): $Set<string>;
    }
    export class $ChainedJsonException extends $IOException {
        setFilenameAndFlush(message: string): void;
        static forException(exception: $Exception): $ChainedJsonException;
        prependJsonKey(message: string): void;
        constructor(message: string);
        constructor(message: string, cause: $Throwable);
        set filenameAndFlush(value: string);
    }
    export class $WorldLoader$ResultFactory<D, R> {
    }
    export interface $WorldLoader$ResultFactory<D, R> {
        create(manager: $CloseableResourceManager, resources: $ReloadableServerResources, registryAccess: $LayeredRegistryAccess<$RegistryLayer_>, cookie: D): R;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$ResultFactory}.
     */
    export type $WorldLoader$ResultFactory_<D, R> = ((arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer>, arg3: D) => R);
    export class $MinecraftServer$TimeProfiler {
    }
    export class $RegistryLayer extends $Enum<$RegistryLayer> {
        static values(): $RegistryLayer[];
        static valueOf(arg0: string): $RegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$RegistryLayer>;
        static WORLDGEN: $RegistryLayer;
        static DIMENSIONS: $RegistryLayer;
        static RELOADABLE: $RegistryLayer;
        static STATIC: $RegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $RegistryLayer}.
     */
    export type $RegistryLayer_ = "static" | "worldgen" | "dimensions" | "reloadable";
    export class $ReloadableServerResources$ConfigurableRegistryLookup implements $HolderLookup$Provider {
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        missingTagAccessPolicy(missingTagAccessPolicy: $ReloadableServerResources$MissingTagAccessPolicy_): void;
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        registryAccess: $RegistryAccess;
        constructor(registryAccess: $RegistryAccess);
    }
    export class $Eula {
        hasAgreedToEULA(): boolean;
        constructor(file: $Path_);
    }
    export class $WorldLoader {
        static load<D, R>(initConfig: $WorldLoader$InitConfig_, worldDataSupplier: $WorldLoader$WorldDataSupplier_<D>, resultFactory: $WorldLoader$ResultFactory_<D, R>, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<R>;
        constructor();
    }
    export class $ReloadableServerRegistries$Holder {
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        getKeys(registryKey: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        getLootTable(lootTableKey: $ResourceKey_<$LootTable>): $LootTable;
        constructor(registries: $RegistryAccess$Frozen);
    }
    export class $WorldLoader$DataLoadContext extends $Record {
        resources(): $ResourceManager;
        dataConfiguration(): $WorldDataConfiguration;
        datapackDimensions(): $RegistryAccess$Frozen;
        datapackWorldgen(): $RegistryAccess$Frozen;
        constructor(resources: $ResourceManager, dataConfiguration: $WorldDataConfiguration_, datapackWorldgen: $RegistryAccess$Frozen, datapackDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadContext}.
     */
    export type $WorldLoader$DataLoadContext_ = { resources?: $ResourceManager, datapackDimensions?: $RegistryAccess$Frozen, datapackWorldgen?: $RegistryAccess$Frozen, dataConfiguration?: $WorldDataConfiguration_,  } | [resources?: $ResourceManager, datapackDimensions?: $RegistryAccess$Frozen, datapackWorldgen?: $RegistryAccess$Frozen, dataConfiguration?: $WorldDataConfiguration_, ];
    export class $ServerInterface {
    }
    export interface $ServerInterface extends $ServerInfo {
        getProperties(): $DedicatedServerProperties;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        /**
         * Handle a command received by an RCon instance
         */
        runCommand(command: string): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerIp(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerName(): string;
        /**
         * Never used, but "getServerPort" is already taken.
         */
        getServerPort(): number;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getPluginNames(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getLevelIdName(): string;
        get properties(): $DedicatedServerProperties;
        get playerNames(): string[];
        get serverIp(): string;
        get serverName(): string;
        get serverPort(): number;
        get pluginNames(): string;
        get levelIdName(): string;
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener, $IdentifiableResourceReloadListener {
        getFunction(location: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getTag(location: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getFabricId(): $ResourceLocation;
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getFabricDependencies(): $Collection<any>;
        getAvailableTags(): $Iterable<$ResourceLocation>;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(functionCompilationLevel: number, dispatcher: $CommandDispatcher<$CommandSourceStack>);
        get fabricId(): $ResourceLocation;
        get functions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        get fabricDependencies(): $Collection<any>;
        get availableTags(): $Iterable<$ResourceLocation>;
        get name(): string;
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $IOpenPACMinecraftServer, $ITimeTrackingServer, $VeilPacketManager$PacketSink, $MinecraftServerExtension, $MinecraftServerAccessor, $IMinecraftServer$1, $AccessorMixinMinecraftServer, $IMinecraftServer, $MinecraftServerKJS, $FabricOriginalKnownPacksGetter {
        getFile(path: string): $Path;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPort(): number;
        /**
         * Initialises the server and starts it.
         */
        isShutdown(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        halt(waitForServer: boolean): void;
        getConnection(): $ServerConnectionListener;
        /**
         * Gets the worldServer by the given dimension.
         */
        getLevel(dimension: $ResourceKey_<$Level>): $ServerLevel;
        serverLinks(): $ServerLinks;
        setDifficulty(difficulty: $Difficulty_, forced: boolean): void;
        handler$iml000$ae2$injectSpatialLevel(arg0: $ChunkProgressListener, arg1: $CallbackInfo): void;
        wrapOperation$fpp000$dimthread$tickWorlds(arg0: $MinecraftServer, arg1: $Operation_<any>): $ServerLevel[];
        handler$fpp000$dimthread$tickWorlds(arg0: $BooleanSupplier_, arg1: $CallbackInfo): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getOperatorUserPermissionLevel(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getFunctionCompilationLevel(): number;
        handler$bbl000$veil$stopServer(arg0: $CallbackInfo): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getRateLimitPacketsPerSecond(): number;
        fabric_getOriginalKnownPacks(): $List<any>;
        getStatus(): $ServerStatus;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getMotd(): string;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickServer(isDone: $BooleanSupplier_): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        cancelRecordingMetrics(): void;
        startRecordingMetrics(output: $Consumer_<$ProfileResults>, onMetricsRecordingFinished: $Consumer_<$Path>): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setUsesAuthentication(waitForServer: boolean): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        finishRecordingMetrics(): void;
        getScheduledEvents(): $ScheduledEvents;
        createGameModeForPlayer(player: $ServerPlayer): $ServerPlayerGameMode;
        getProfilePermissions(profile: $GameProfile): number;
        createTextFilterForPlayer(player: $ServerPlayer): $TextFilter;
        restoreInventories(): $Map<any, any>;
        getProfiler(): $ProfilerFiller;
        setPort(idleTimeout: number): void;
        setId(serverId: string): void;
        /**
         * Initialises the server and starts it.
         */
        isStopped(): boolean;
        static spin<S extends $MinecraftServer>(threadFunction: $Function_<$Thread, S>): S;
        /**
         * Gets KeyPair instanced in MinecraftServer.
         */
        getKeyPair(): $KeyPair;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stop(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        loadLevel(): void;
        /**
         * Initialises the server and starts it.
         */
        initServer(): boolean;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getLocalIp(): string;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        runServer(): void;
        setLocalIp(serverId: string): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDemo(waitForServer: boolean): void;
        /**
         * Initialises the server and starts it.
         */
        hasGui(): boolean;
        setMotd(serverId: string): void;
        levelKeys(): $Set<$ResourceKey<$Level>>;
        /**
         * Initialises the server and starts it.
         */
        logIPs(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isRunning(): boolean;
        getCustomBossEvents(): $CustomBossEvents;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDifficultyLocked(waitForServer: boolean): void;
        getAverageTickTimeNanos(): number;
        /**
         * Initialises the server and starts it.
         */
        isTickTimeLoggingEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        static throwIfFatalException(): boolean;
        fillServerSystemReport(report: $SystemReport): $SystemReport;
        /**
         * Initialises the server and starts it.
         */
        enforceSecureProfile(): boolean;
        setSingleplayerProfile(singleplayerProfile: $GameProfile | null): void;
        /**
         * Initialises the server and starts it.
         */
        shouldRconBroadcast(): boolean;
        getSingleplayerProfile(): $GameProfile;
        getScaledTrackingDistance(trackingDistance: number): number;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        /**
         * Initialises the server and starts it.
         */
        isResourcePackRequired(): boolean;
        /**
         * Initialises the server and starts it.
         */
        getPreventProxyConnections(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPreventProxyConnections(waitForServer: boolean): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getSpawnProtectionRadius(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerIdleTimeout(): number;
        setPlayerIdleTimeout(idleTimeout: number): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        endMetricsRecordingTick(): void;
        kickUnlistedPlayers(commandSource: $CommandSourceStack): void;
        dumpServerProperties(path: $Path_): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getCompressionThreshold(): number;
        getCurrentSmoothedTickTime(): number;
        static configurePackRepository(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, initMode: boolean, safeMode: boolean): $WorldDataConfiguration;
        isSingleplayerOwner(profile: $GameProfile): boolean;
        getProfileRepository(): $GameProfileRepository;
        getXaero_OPAC_ServerData(): $IServerDataAPI;
        veil$getOrCreateScheduler(): $TickTaskSchedulerImpl;
        getXaeroWorldMapServerData(): $MinecraftServerData$1;
        subscribeToDebugSample(player: $ServerPlayer, sampleType: $RemoteDebugSampleType_): void;
        setXaeroWorldMapServerData(arg0: $MinecraftServerData$1): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setEnforceWhitelist(waitForServer: boolean): void;
        mfix$getLastTickStartTime(): number;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        /**
         * Initialises the server and starts it.
         */
        isTimeProfilerRunning(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stopRecordingMetrics(): void;
        getXaeroMinimapServerData(): $MinecraftServerData;
        setXaeroMinimapServerData(arg0: $MinecraftServerData): void;
        setXaero_OPAC_ServerData(arg0: $IServerDataAPI): void;
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxChainedNeighborUpdates(): number;
        /**
         * Initialises the server and starts it.
         */
        isDedicated(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isCommandBlockEnabled(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceDifficulty(): void;
        getModdedStatus(): $ModCheck;
        createLevels(listener: $ChunkProgressListener): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerModName(): string;
        saveEverything(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onTickRateChanged(): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxPlayers(): number;
        /**
         * Called on exit from the main run() loop.
         */
        onServerCrash(report: $CrashReport): void;
        getServerDirectory(): $Path;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        waitUntilNextTick(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onServerExit(): void;
        static setFatalException(fatalException: $RuntimeException): void;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickChildren(isDone: $BooleanSupplier_): void;
        /**
         * Initialises the server and starts it.
         */
        hidesOnlinePlayers(): boolean;
        addTickable(tickable: $Runnable_): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerVersion(): string;
        getTickTimeLogger(): $SampleLogger;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getStatusJson(): string;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerCount(): number;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        saveAllChunks(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        /**
         * Initialises the server and starts it.
         */
        repliesToStatus(): boolean;
        getPackRepository(): $PackRepository;
        getSessionService(): $MinecraftSessionService;
        /**
         * Replaces currently selected list of datapacks, reloads them, and sends new data to players.
         */
        reloadResources(selectedIds: $Collection_<string>): $CompletableFuture<void>;
        /**
         * Initialises the server and starts it.
         */
        isEpollEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isRecordingMetrics(): boolean;
        stopTimeProfiler(): $ProfileResults;
        /**
         * Initialises the server and starts it.
         */
        isFlightAllowed(): boolean;
        logChatMessage(content: $Component_, boundChatType: $ChatType$Bound_, header: string | null): void;
        publishServer(gameMode: $GameType_ | null, commands: boolean, port: number): boolean;
        /**
         * @deprecated
         * Directly calls System.exit(0), instantly killing the program.
         */
        markWorldsDirty(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        invalidateStatus(): void;
        /**
         * Initialises the server and starts it.
         */
        isCurrentlySaving(): boolean;
        getTickTimesNanos(): number[];
        /**
         * Initialises the server and starts it.
         */
        usesAuthentication(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPvpAllowed(waitForServer: boolean): void;
        getNextTickTime(): number;
        /**
         * Sets the game type for all worlds.
         */
        setDefaultGameType(gameMode: $GameType_): void;
        setPlayerList(list: $PlayerList): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setFlightAllowed(waitForServer: boolean): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        initializeKeyPair(): void;
        /**
         * Initialises the server and starts it.
         */
        isSpawningMonsters(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isEnforceWhitelist(): boolean;
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        getWorldPath(levelResource: $LevelResource): $Path;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTimeProfiler(): void;
        /**
         * Initialises the server and starts it.
         */
        acceptsTransfers(): boolean;
        veil$getScheduler(): $TickTaskSchedulerImpl;
        getOverworld(): $ServerLevel;
        /**
         * Initialises the server and starts it.
         */
        isPvpAllowed(): boolean;
        getSpawnRadius(level: $ServerLevel | null): number;
        getForcedGameType(): $GameType;
        getDefaultGameType(): $GameType;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        /**
         * Initialises the server and starts it.
         */
        isSpawningAnimals(): boolean;
        /**
         * Initialises the server and starts it.
         */
        areNpcsEnabled(): boolean;
        getScoreboard(): $ServerScoreboard;
        getGameRules(): $GameRules;
        sendSystemMessage(component: $Component_): void;
        getCommands(): $Commands;
        isLevelEnabled(level: $Level): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsFailure(): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldInformAdmins(): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsSuccess(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isPublished(): boolean;
        fillSystemReport(report: $SystemReport): $SystemReport;
        getWorldData(): $WorldData;
        tickRateManager(): $ServerTickRateManager;
        getAdvancements(): $ServerAdvancementManager;
        wrapRunnable(runnable: $Runnable_): $TickTask;
        registryAccess(): $RegistryAccess$Frozen;
        /**
         * Initialises the server and starts it.
         */
        isSingleplayer(): boolean;
        getResourceManager(): $ResourceManager;
        getFixerUpper(): $DataFixer;
        getRecipeManager(): $RecipeManager;
        getPersistentData(): $CompoundTag;
        createCommandSourceStack(): $CommandSourceStack;
        getWorldScreenshotFile(): ($Path) | undefined;
        sendPacket(arg0: $Packet<any>): void;
        getProxy(): $Proxy;
        handler$fpp000$dimthread$shutdownThreadpool(arg0: $CallbackInfo): void;
        /**
         * Initialises the server and starts it.
         */
        forceSynchronousWrites(): boolean;
        isUnderSpawnProtection(level: $ServerLevel, pos: $BlockPos_, player: $Player): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getAbsoluteMaxWorldSize(): number;
        getStructureManager(): $StructureTemplateManager;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceTimeSynchronization(): void;
        getCommandStorage(): $CommandStorage;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getTickCount(): number;
        getProfileCache(): $GameProfileCache;
        getChatDecorator(): $ChatDecorator;
        getAllLevels(): $Iterable<$ServerLevel>;
        getFunctions(): $ServerFunctionManager;
        getPlayerList(): $PlayerList;
        getServerResources(): $MinecraftServer$ReloadableResources;
        overworld(): $ServerLevel;
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        /**
         * Initialises the server and starts it.
         */
        isHardcore(): boolean;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        /**
         * Initialises the server and starts it.
         */
        isReady(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isPaused(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isDemo(): boolean;
        shouldRun(runnable: $TickTask): boolean;
        doRunTask(task: $TickTask): void;
        getData(): $AttachedData<any>;
        potionBrewing(): $PotionBrewing;
        reportMisplacedChunk(pos: $ChunkPos, expectedPos: $ChunkPos, regionStorageInfo: $RegionStorageInfo_): void;
        /**
         * Initialises the server and starts it.
         */
        alwaysAccepts(): boolean;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        setStatusMessage(component: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(serverId: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(serverId: string): void;
        getName(): $Component;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        self(): $MinecraftServer;
        tell(component: $Component_): void;
        sendData(channel: string, data: $CompoundTag_): void;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        sendData(serverId: string): void;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntities(): $EntityArrayList;
        getDisplayName(): $Component;
        catnip$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        Lootr$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        static VANILLA_BRAND: string;
        proxy: $Proxy;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        nextTickTimeNanos: number;
        resources: $MinecraftServer$ReloadableResources;
        worldData: $WorldData;
        services: $Services;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
        constructor(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, proxy: $Proxy, fixerUpper: $DataFixer, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        get shutdown(): boolean;
        get connection(): $ServerConnectionListener;
        get operatorUserPermissionLevel(): number;
        get functionCompilationLevel(): number;
        get rateLimitPacketsPerSecond(): number;
        get status(): $ServerStatus;
        get profileKeySignatureValidator(): $SignatureValidator;
        get scheduledEvents(): $ScheduledEvents;
        get profiler(): $ProfilerFiller;
        set id(value: string);
        get stopped(): boolean;
        get keyPair(): $KeyPair;
        get running(): boolean;
        get customBossEvents(): $CustomBossEvents;
        set difficultyLocked(value: boolean);
        get averageTickTimeNanos(): number;
        get tickTimeLoggingEnabled(): boolean;
        get serverResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        get resourcePackRequired(): boolean;
        get spawnProtectionRadius(): number;
        get compressionThreshold(): number;
        get currentSmoothedTickTime(): number;
        get profileRepository(): $GameProfileRepository;
        get timeProfilerRunning(): boolean;
        get maxChainedNeighborUpdates(): number;
        get dedicated(): boolean;
        get commandBlockEnabled(): boolean;
        get moddedStatus(): $ModCheck;
        get serverModName(): string;
        get maxPlayers(): number;
        get serverDirectory(): $Path;
        static set fatalException(value: $RuntimeException);
        get serverVersion(): string;
        get tickTimeLogger(): $SampleLogger;
        get statusJson(): string;
        get playerCount(): number;
        get playerNames(): string[];
        get packRepository(): $PackRepository;
        get sessionService(): $MinecraftSessionService;
        get epollEnabled(): boolean;
        get recordingMetrics(): boolean;
        get currentlySaving(): boolean;
        get tickTimesNanos(): number[];
        get nextTickTime(): number;
        get spawningMonsters(): boolean;
        get forcedGameType(): $GameType;
        get spawningAnimals(): boolean;
        get scoreboard(): $ServerScoreboard;
        get gameRules(): $GameRules;
        get commands(): $Commands;
        get published(): boolean;
        get advancements(): $ServerAdvancementManager;
        get singleplayer(): boolean;
        get resourceManager(): $ResourceManager;
        get fixerUpper(): $DataFixer;
        get recipeManager(): $RecipeManager;
        get persistentData(): $CompoundTag;
        get worldScreenshotFile(): ($Path) | undefined;
        get absoluteMaxWorldSize(): number;
        get structureManager(): $StructureTemplateManager;
        get commandStorage(): $CommandStorage;
        get tickCount(): number;
        get profileCache(): $GameProfileCache;
        get chatDecorator(): $ChatDecorator;
        get allLevels(): $Iterable<$ServerLevel>;
        get functions(): $ServerFunctionManager;
        get serverResources(): $MinecraftServer$ReloadableResources;
        get hardcore(): boolean;
        get ready(): boolean;
        get paused(): boolean;
        get data(): $AttachedData<any>;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get entities(): $EntityArrayList;
        get displayName(): $Component;
    }
    export class $WorldStem extends $Record implements $AutoCloseable {
        close(): void;
        dataPackResources(): $ReloadableServerResources;
        resourceManager(): $CloseableResourceManager;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        worldData(): $WorldData;
        constructor(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData);
    }
    /**
     * Values that may be interpreted as {@link $WorldStem}.
     */
    export type $WorldStem_ = { resourceManager?: $CloseableResourceManager, dataPackResources?: $ReloadableServerResources, registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData,  } | [resourceManager?: $CloseableResourceManager, dataPackResources?: $ReloadableServerResources, registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData, ];
    export class $ServerScoreboard extends $Scoreboard {
        stopTrackingObjective(objective: $Objective): void;
        getStartTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        startTrackingObjective(objective: $Objective): void;
        getStopTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        addDirtyListener(runnable: $Runnable_): void;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        getObjectiveDisplaySlotCount(objective: $Objective): number;
        setDirty(): void;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(server: $MinecraftServer);
    }
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        getRecipes(): $RecipeManager;
        listeners(): $List<$PreparableReloadListener>;
        getConditionContext(): $ICondition$IContext;
        getFunctionLibrary(): $ServerFunctionLibrary;
        updateRegistryTags(): void;
        static loadResources(resourceManager: $ResourceManager, registries: $LayeredRegistryAccess<$RegistryLayer_>, enabledFeatures: $FeatureFlagSet, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        getCommands(): $Commands;
        getAdvancements(): $ServerAdvancementManager;
        getRecipeManager(): $RecipeManager;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        getRegistryLookup(): $HolderLookup$Provider;
        kjs$getServerScriptManager(): $ServerScriptManager;
        handler$gnm000$sliceanddice$injectRecipes(arg0: $CallbackInfo): void;
        kjs$getTagManager(): $TagManager;
        get recipes(): $RecipeManager;
        get conditionContext(): $ICondition$IContext;
        get functionLibrary(): $ServerFunctionLibrary;
        get commands(): $Commands;
        get advancements(): $ServerAdvancementManager;
        get recipeManager(): $RecipeManager;
        get registryLookup(): $HolderLookup$Provider;
    }
    export class $WorldLoader$InitConfig extends $Record {
        commandSelection(): $Commands$CommandSelection;
        functionCompilationLevel(): number;
        packConfig(): $WorldLoader$PackConfig;
        constructor(packConfig: $WorldLoader$PackConfig_, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$InitConfig}.
     */
    export type $WorldLoader$InitConfig_ = { packConfig?: $WorldLoader$PackConfig_, commandSelection?: $Commands$CommandSelection_, functionCompilationLevel?: number,  } | [packConfig?: $WorldLoader$PackConfig_, commandSelection?: $Commands$CommandSelection_, functionCompilationLevel?: number, ];
    export class $TickTask implements $Runnable {
        run(): void;
        /**
         * Get the server time when this task was scheduled
         */
        getTick(): number;
        constructor(tick: number, runnable: $Runnable_);
        get tick(): number;
    }
    export class $ServerLinks$Entry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        displayName(): $Component;
        link(): $URI;
        static custom(type: $Component_, link: $URI): $ServerLinks$Entry;
        static knownType(type: $ServerLinks$KnownLinkType_, link: $URI): $ServerLinks$Entry;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$Entry}.
     */
    export type $ServerLinks$Entry_ = { type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: $URI,  } | [type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: $URI, ];
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        hash(): string;
        url(): string;
        id(): $UUID;
        isRequired(): boolean;
        prompt(): $Component;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_ | null);
        get required(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ServerResourcePackInfo}.
     */
    export type $MinecraftServer$ServerResourcePackInfo_ = { prompt?: $Component_, isRequired?: boolean, url?: string, hash?: string, id?: $UUID_,  } | [prompt?: $Component_, isRequired?: boolean, url?: string, hash?: string, id?: $UUID_, ];
    export class $Main {
        static main(args: string[]): void;
        constructor();
    }
    export class $ServerLinks$UntrustedEntry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        link(): string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$UntrustedEntry}.
     */
    export type $ServerLinks$UntrustedEntry_ = { type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: string,  } | [type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: string, ];
    export class $Services extends $Record {
        static create(authenticationService: $YggdrasilAuthenticationService, profileRepository: $File_): $Services;
        profileKeySignatureValidator(): $SignatureValidator;
        canValidateProfileKeys(): boolean;
        servicesKeySet(): $ServicesKeySet;
        profileRepository(): $GameProfileRepository;
        profileCache(): $GameProfileCache;
        sessionService(): $MinecraftSessionService;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    /**
     * Values that may be interpreted as {@link $Services}.
     */
    export type $Services_ = { sessionService?: $MinecraftSessionService, servicesKeySet?: $ServicesKeySet_, profileCache?: $GameProfileCache, profileRepository?: $GameProfileRepository_,  } | [sessionService?: $MinecraftSessionService, servicesKeySet?: $ServicesKeySet_, profileCache?: $GameProfileCache, profileRepository?: $GameProfileRepository_, ];
    export class $ServerFunctionManager implements $IProfilingServerFunctionManager {
        get(functionIdentifier: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(_function: $CommandFunction<$CommandSourceStack>, source: $CommandSourceStack): void;
        getTag(functionTagIdentifier: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        tick(): void;
        replaceLibrary(reloader: $ServerFunctionLibrary): void;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        mfix$getProfilingResults(): string;
        getFunctionNames(): $Iterable<$ResourceLocation>;
        getTagNames(): $Iterable<$ResourceLocation>;
        getGameLoopSender(): $CommandSourceStack;
        constructor(server: $MinecraftServer, library: $ServerFunctionLibrary);
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get functionNames(): $Iterable<$ResourceLocation>;
        get tagNames(): $Iterable<$ResourceLocation>;
        get gameLoopSender(): $CommandSourceStack;
    }
}
