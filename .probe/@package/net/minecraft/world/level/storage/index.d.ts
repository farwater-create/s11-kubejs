import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $Dynamic, $Lifecycle } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData, $SavedData$Factory_ } from "@package/net/minecraft/world/level/saveddata";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $UUID_, $Map, $Set, $Spliterator, $Iterator, $UUID, $List, $List_ } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $DirectoryLock } from "@package/net/minecraft/util";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Registry, $HolderLookup$Provider, $RegistryAccess$Frozen } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Enum, $RuntimeException, $Comparable, $Iterable, $Record, $AutoCloseable } from "@package/java/lang";
import { $AccessorMixinDimensionDataStorage } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $File_, $File } from "@package/java/io";
import { $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $WorldDataConfiguration_, $LevelSettings, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataStorageAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $PrimaryLevelDataExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(id: $ResourceLocation_): $CompoundTag;
        set(id: $ResourceLocation_, nbt: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(storage: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        path(): $Path;
        directoryName(): string;
        oldDataFile(): $Path;
        dataFile(): $Path;
        iconFile(): $Path;
        resourcePath(resource: $LevelResource): $Path;
        lockFile(): $Path;
        corruptedDataFile(dateTime: $LocalDateTime): $Path;
        rawDataFile(dateTime: $LocalDateTime): $Path;
        constructor(path: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelDirectory}.
     */
    export type $LevelStorageSource$LevelDirectory_ = { path?: $Path_,  } | [path?: $Path_, ];
    export class $LevelDataAndDimensions extends $Record {
        dimensions(): $WorldDimensions$Complete;
        worldData(): $WorldData;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    /**
     * Values that may be interpreted as {@link $LevelDataAndDimensions}.
     */
    export type $LevelDataAndDimensions_ = { worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_,  } | [worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        getVersion(): number;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        setModdedInfo(name: string, isModded: boolean): void;
        setDifficulty(difficulty: $Difficulty_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        getRemovedFeatureFlags(): $Set<string>;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        getCustomBossEvents(): $CompoundTag;
        getStorageVersionName(storageVersionId: number): string;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDifficultyLocked(locked: boolean): void;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setGameType(type: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        get version(): number;
        get levelSettings(): $LevelSettings;
        get debugWorld(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get levelName(): string;
        get removedFeatureFlags(): $Set<string>;
        get knownServerBrands(): $Set<string>;
        get flatWorld(): boolean;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_, lastPlayed: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        isCompatible(dataVersion: $DataVersion): boolean;
        isSideSeries(): boolean;
        getSeries(): string;
        static MAIN_SERIES: string;
        constructor(version: number);
        constructor(version: number, series: string);
        get version(): number;
        get sideSeries(): boolean;
        get series(): string;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setGameType(type: $GameType_): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Get current world time
         */
        getDayTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getDayTimeFraction(): number;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get allowCommands(): boolean;
        get levelName(): string;
        get difficultyLocked(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(messageComponent: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(spawnPoint: $BlockPos_, spawnAngle: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Get current world time
         */
        getDayTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        get difficultyLocked(): boolean;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get gameTime(): number;
        get dayTime(): number;
        get hardcore(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
    }
    export class $DimensionDataStorage implements $DataStorageAccess, $AccessorMixinDimensionDataStorage {
        get<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        set(name: string, savedData: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        save(): void;
        readTagFromDisk(filename: string, dataFixType: $DataFixTypes_ | null, version: number): $CompoundTag;
        getCache(): $Map<string, $SavedData>;
        invokeGetDataFile(name: string): $File;
        dataFolder: $File;
        constructor(dataFolder: $File_, fixerUpper: $DataFixer, registries: $HolderLookup$Provider);
        get cache(): $Map<string, $SavedData>;
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        shouldBackup(): boolean;
        isSevere(): boolean;
        getTranslationKey(): string;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get severe(): boolean;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        hasWorldData(): boolean;
        deleteLevel(): void;
        getFileModificationTime(useFallback: boolean): $Instant;
        createPlayerStorage(): $PlayerDataStorage;
        getIconFile(): ($Path) | undefined;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        getLevelPath(folderName: $LevelResource): $Path;
        readAdditionalLevelSaveData(arg0: boolean): void;
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        handler$elk001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$eai000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        getLevelId(): string;
        restoreLevelDataFromOld(): boolean;
        renameAndDropPlayer(saveName: string): void;
        checkForLowDiskSpace(): boolean;
        getDataTag(): $Dynamic<never>;
        safeClose(): void;
        makeWorldBackup(): number;
        renameLevel(saveName: string): void;
        estimateDiskSpace(): number;
        getWorldDir(): $Path;
        getDataTagFallback(): $Dynamic<never>;
        levelDirectory: $LevelStorageSource$LevelDirectory;
        this$0: $LevelStorageSource;
        lock: $DirectoryLock;
        constructor(levelId: $LevelStorageSource, levelDir: string, arg2: $Path_);
        get iconFile(): ($Path) | undefined;
        get levelId(): string;
        get dataTag(): $Dynamic<never>;
        get worldDir(): $Path;
        get dataTagFallback(): $Dynamic<never>;
    }
    export class $PlayerDataStorage {
        load(player: $Player): ($CompoundTag) | undefined;
        save(player: $Player): void;
        getPlayerDir(): $File;
        fixerUpper: $DataFixer;
        constructor(levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        setGameType(type: $GameType_): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        getWorldBorder(): $WorldBorder$Settings;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        getDayTimeFraction(): number;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        get allowCommands(): boolean;
        get levelName(): string;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set thundering(value: boolean);
        set gameTime(value: number);
        set dayTime(value: number);
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        levelDataVersion(): number;
        lastPlayed(): number;
        minecraftVersion(): $DataVersion;
        minecraftVersionName(): string;
    }
    export class $LevelStorageSource {
        getName(): string;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        makeLevelSummary(dynamic: $Dynamic<never>, levelDirectory: $LevelStorageSource$LevelDirectory_, locked: boolean): $LevelSummary;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        levelExists(saveName: string): boolean;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        getWorldDirValidator(): $DirectoryValidator;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        static getFileModificationTime(dataFilePath: $Path_): $Instant;
        static readLevelDataTagFixed(levelPath: $Path_, dataFixer: $DataFixer): $Dynamic<never>;
        static readLevelDataTagRaw(levelPath: $Path_): $CompoundTag;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        isNewLevelIdAcceptable(saveName: string): boolean;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        getLevelPath(saveName: string): $Path;
        fixerUpper: $DataFixer;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        static FORMATTER: $DateTimeFormatter;
        static LOGGER: $Logger;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get name(): string;
        get backupPath(): $Path;
        get baseDir(): $Path;
        get worldDirValidator(): $DirectoryValidator;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension {
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        setModdedInfo(name: string, isModded: boolean): void;
        setDifficulty(difficulty: $Difficulty_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        setInitialized(locked: boolean): void;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        getRemovedFeatureFlags(): $Set<string>;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        getCustomBossEvents(): $CompoundTag;
        worldGenSettingsLifecycle(): $Lifecycle;
        setDifficultyLocked(locked: boolean): void;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setGameType(type: $GameType_): void;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        setThunderTime(time: number): void;
        setThundering(locked: boolean): void;
        setRainTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Get current world time
         */
        getDayTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        setClearWeatherTime(time: number): void;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getDayTimeFraction(): number;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setDayTimePerTick(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimeFraction(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        setRaining(locked: boolean): void;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        getPreset(): $ResourceLocation;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        setPreset(arg0: $ResourceLocation_): void;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        setEndDragonFight(endDragonFightData: $EndDragonFight$Data_): void;
        handler$flk000$collective$hasConfirmedExperimentalWarning(arg0: $CallbackInfoReturnable<any>): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnChance(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        getStorageVersionName(storageVersionId: number): string;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        static PLAYER: string;
        settings: $LevelSettings;
        static WORLD_GEN_SETTINGS: string;
        static LEVEL_NAME: string;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        get version(): number;
        get levelSettings(): $LevelSettings;
        get debugWorld(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get allowCommands(): boolean;
        get levelName(): string;
        get removedFeatureFlags(): $Set<string>;
        get knownServerBrands(): $Set<string>;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        set endDragonFight(value: $EndDragonFight$Data_);
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(other: $LevelSummary): number;
        isLocked(): boolean;
        getIcon(): $Path;
        levelVersion(): $LevelVersion;
        backupStatus(): $LevelSummary$BackupStatus;
        canRecreate(): boolean;
        shouldBackup(): boolean;
        isDowngrade(): boolean;
        hasCommands(): boolean;
        getLastPlayed(): number;
        getInfo(): $Component;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        canEdit(): boolean;
        canUpload(): boolean;
        isCompatible(): boolean;
        canDelete(): boolean;
        getSettings(): $LevelSettings;
        requiresManualConversion(): boolean;
        primaryActionActive(): boolean;
        primaryActionMessage(): $Component;
        getWorldVersionName(): $MutableComponent;
        isExperimental(): boolean;
        isHardcore(): boolean;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        isDisabled(): boolean;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get locked(): boolean;
        get icon(): $Path;
        get downgrade(): boolean;
        get lastPlayed(): number;
        get info(): $Component;
        get levelName(): string;
        get compatible(): boolean;
        get settings(): $LevelSettings;
        get worldVersionName(): $MutableComponent;
        get experimental(): boolean;
        get hardcore(): boolean;
        get levelId(): string;
        get disabled(): boolean;
        get gameMode(): $GameType;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource {
        getId(): string;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(id: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelCandidates}.
     */
    export type $LevelStorageSource$LevelCandidates_ = { levels?: $List_<$LevelStorageSource$LevelDirectory_>,  } | [levels?: $List_<$LevelStorageSource$LevelDirectory_>, ];
}
