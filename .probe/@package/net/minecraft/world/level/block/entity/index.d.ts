import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Services_ } from "@package/net/minecraft/server";
import { $DispenserBlockEntityAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder, $AbstractCookingRecipe, $RecipeHolder_, $RecipeType, $RecipeManager$CachedCheck, $CampfireCookingRecipe, $CraftingInput, $CraftingInput$Positioned, $SingleRecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $Entity, $EntityType, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Mesh } from "@package/dev/tr7zw/skinlayers/api";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $AccessorAbstractFurnaceBlockEntity } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $FormattedCharSequence, $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $AccessorBaseContainerBlockEntity, $AccessorBannerBlockEntity } from "@package/net/darkhax/bookshelf/common/mixin/access/block";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $RandomizableContainer, $MenuProvider, $Nameable, $Container, $Clearable, $LockCode_, $WorldlyContainer, $LockCode } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IBlockEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $HangingSignTileExtension } from "@package/net/mehvahdjukaar/amendments/common/tile";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $Connection } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $BeaconLightBehavior_, $BeaconLightBehavior } from "@package/dev/lambdaurora/lambdynlights/api/behavior";
import { $CraftingContainer, $AbstractContainerMenu, $ContainerData, $StackedContentsCompatible, $RecipeCraftingHolder } from "@package/net/minecraft/world/inventory";
import { $DataComponentType, $DataComponentMap$Builder, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $TransactionContext } from "@package/net/fabricmc/fabric/api/transfer/v1/transaction";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $UpdateReceiver, $LithiumStackList } from "@package/net/caffeinemc/mods/lithium/common/hopper";
import { $InventoryChangeTracker, $InventoryChangeListener, $InventoryChangeEmitter } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking";
import { $Item, $JukeboxSongPlayer, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SkullSettings } from "@package/dev/tr7zw/skinlayers/accessor";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $FilteredText_ } from "@package/net/minecraft/server/network";
import { $Inventory, $Player, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $SpecialLogicInventory } from "@package/net/fabricmc/fabric/impl/transfer/item";
import { $BETypeAccess, $FurnaceTEAccess, $BaseContainerBEAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ComparatorTracker } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_comparator_tracking";
import { $ExtendedBlockEntityType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem, $VibrationSystem$Listener } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $LithiumTransferConditionInventory, $LithiumInventory } from "@package/net/caffeinemc/mods/lithium/api/inventory";
import { $BlockEntityTypeAccessor } from "@package/net/neoforged/neoforge/mixins";
import { $ExtendedHangingSign, $SwingAnimation, $IBellConnection$Type, $IBellConnection, $IBetterJukebox, $IBellConnection$Type_ } from "@package/net/mehvahdjukaar/amendments/common";
import { $Mirror_, $Mirror, $Block, $Rotation_, $SculkSpreader, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityAccessor } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $RenderDataBlockEntity } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $FabricBlockEntityType, $FabricBlockEntityType$Builder } from "@package/net/fabricmc/fabric/api/object/builder/v1/block/entity";
import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $BlockEntityTypeMethods } from "@package/forge/me/thosea/badoptimizations/interfaces";
import { $BeaconBlockEntityLightSource } from "@package/dev/lambdaurora/lambdynlights/echo";
import { $GameEventListener, $GameEvent, $GameEventListener$Provider, $PositionSource, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $BlockEntityRenderPredicate, $BlockEntityRenderPredicate_ } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $UUID_, $Set_, $Map, $List, $Map_, $List_, $Set, $UUID } from "@package/java/util";
import { $WrappedBlockEntityTickInvokerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping";
import { $BlockEntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $Supplier_, $ObjIntConsumer_, $UnaryOperator_, $BooleanSupplier_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ReferenceArraySet } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Vec3i, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $Direction, $Registry, $HolderGetter, $Holder_ } from "@package/net/minecraft/core";
import { $RenderAttachmentBlockEntity } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $BlockEntityRenderer_, $BlockEntityRenderer } from "@package/net/minecraft/client/renderer/blockentity";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $SetChangedHandlingBlockEntity, $SleepingBlockEntity } from "@package/net/caffeinemc/mods/lithium/common/block/entity";
import { $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $AccessorMixinBaseContainerBlockEntity, $AccessorMixinBrushableBlockEntity } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $SectionedEntityMovementListener } from "@package/net/caffeinemc/mods/lithium/common/tracking/entity";
import { $IBlockEntity } from "@package/com/ishland/c2me/base/mixin/access";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ContainerSingleItem$BlockContainerSingleItem } from "@package/net/minecraft/world/ticks";
import { $ItemLike_, $Spawner, $BlockGetter, $BaseCommandBlock, $BaseSpawner, $Level } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $TrialSpawner$StateAccessor, $TrialSpawner, $TrialSpawnerState_, $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $Logger } from "@package/org/slf4j";
import { $BlockEntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $AzAnimatorAccessor, $AzAnimator } from "@package/mod/azure/azurelib/common/animation";
import { $CustomData, $ResolvableProfile_, $ResolvableProfile } from "@package/net/minecraft/world/item/component";
import { $ClientboundBlockEntityDataPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $SupportCache } from "@package/net/caffeinemc/mods/lithium/common/world/blockentity";
import { $PreservedShulkerBox } from "@package/net/orcinus/galosphere/util";
import { $Sifting } from "@package/net/orcinus/galosphere/api";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AbstractFurnaceBlockEntityAccess } from "@package/snownee/jade/mixin";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as trialspawner from "@package/net/minecraft/world/level/block/entity/trialspawner";
export * as vault from "@package/net/minecraft/world/level/block/entity/vault";

declare module "@package/net/minecraft/world/level/block/entity" {
    export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
        static values(): $BeehiveBlockEntity$BeeReleaseStatus[];
        static valueOf(arg0: string): $BeehiveBlockEntity$BeeReleaseStatus;
        static BEE_RELEASED: $BeehiveBlockEntity$BeeReleaseStatus;
        static EMERGENCY: $BeehiveBlockEntity$BeeReleaseStatus;
        static HONEY_DELIVERED: $BeehiveBlockEntity$BeeReleaseStatus;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$BeeReleaseStatus}.
     */
    export type $BeehiveBlockEntity$BeeReleaseStatus_ = "honey_delivered" | "bee_released" | "emergency";
    export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$SculkCatalystBlockEntity$CatalystListener> {
        getListener(): $SculkCatalystBlockEntity$CatalystListener;
        static serverTick(level: $Level, pos: $BlockPos_, state: $BlockState_, sculkCatalyst: $SculkCatalystBlockEntity): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $SculkCatalystBlockEntity$CatalystListener;
    }
    export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper, $LithiumInventory, $InventoryChangeListener, $UpdateReceiver, $SectionedEntityMovementListener, $InventoryChangeTracker, $SleepingBlockEntity {
        static addItem(container: $Container, item: $ItemEntity): boolean;
        /**
         * Attempts to place the passed stack in the container, using as many slots as required.
         * @return any leftover stack
         */
        static addItem(source: $Container | null, destination: $Container, stack: $ItemStack_, direction: $Direction_ | null): $ItemStack;
        lithium$handleEntityMovement(arg0: $Class<any>): void;
        getInsertBlockInventory(arg0: $Level): $Container;
        getExtractBlockInventory(level: $Level, pos: $BlockPos_, state: $BlockState_): $Container;
        static entityInside(level: $Level, pos: $BlockPos_, state: $BlockState_, entity: $Entity, blockEntity: $HopperBlockEntity): void;
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        lithium$startSleeping(): boolean;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$handleInventoryRemoved(arg0: $Container): void;
        lithium$handleComparatorAdded(arg0: $Container): boolean;
        static pushItemsTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $HopperBlockEntity): void;
        static getContainerAt(level: $Level, pos: $BlockPos_): $Container;
        handler$coj003$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        lithium$invalidateCacheOnUndirectedNeighborUpdate(): void;
        lithium$handleInventoryContentModified(arg0: $Container): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: $Direction_): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: boolean): void;
        isOnCustomCooldown(): boolean;
        setCooldown(cooldownTime: number): void;
        static suckInItems(level: $Level, hopper: $Hopper): boolean;
        getInsertInventory(arg0: $Level): $Container;
        getLastUpdateTime(): number;
        static getItemsAtAndAbove(level: $Level, hopper: $Hopper): $List<$ItemEntity>;
        isGridAligned(): boolean;
        getSuckAabb(): $AABB;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        sleepOnlyCurrentTick(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        wakeUpNow(): void;
        isSleeping(): boolean;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        level: $Level;
        static $assertionsDisabled: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static HOPPER_CONTAINER_SIZE: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static MOVE_ITEM_SPEED: number;
        name: $Component;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get onCustomCooldown(): boolean;
        set cooldown(value: number);
        get lastUpdateTime(): number;
        get gridAligned(): boolean;
        get suckAabb(): $AABB;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $BlockEntityTicker<T extends $BlockEntity> {
    }
    export interface $BlockEntityTicker<T extends $BlockEntity> {
        tick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: T): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTicker}.
     */
    export type $BlockEntityTicker_<T> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: T) => void);
    export class $SkullBlockEntity extends $BlockEntity implements $SkullSettings {
        static clear(): void;
        static setup(services: $Services_, mainThreadExecutor: $Executor_): void;
        initialized(): boolean;
        setOwner(owner: $ResolvableProfile_ | null): void;
        getNoteBlockSound(): $ResourceLocation;
        setInitialized(initialized: boolean): void;
        static animation(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $SkullBlockEntity): void;
        static fetchProfileById(id: $UUID_, services: $Services_, cacheUninitialized: $BooleanSupplier_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(profileUuid: $UUID_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(profileName: string): $CompletableFuture<($GameProfile) | undefined>;
        getOwnerProfile(): $ResolvableProfile;
        static fetchProfileByName(name: string, services: $Services_): $CompletableFuture<($GameProfile) | undefined>;
        setLastTexture(texture: $ResourceLocation_): void;
        getLastTexture(): $ResourceLocation;
        setupHeadLayers(box: $Mesh): void;
        getHeadLayers(): $Mesh;
        getAnimation(partialTick: number): number;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getMesh(): $Mesh;
        worldPosition: $BlockPos;
        static CHECKED_MAIN_THREAD_EXECUTOR: $Executor;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        set owner(value: $ResolvableProfile_ | null);
        get noteBlockSound(): $ResourceLocation;
        get ownerProfile(): $ResolvableProfile;
        set upHeadLayers(value: $Mesh);
        get headLayers(): $Mesh;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get mesh(): $Mesh;
    }
    export class $LidBlockEntity {
    }
    export interface $LidBlockEntity {
        getOpenNess(partialTicks: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LidBlockEntity}.
     */
    export type $LidBlockEntity_ = ((arg0: number) => number);
    export class $ComparatorBlockEntity extends $BlockEntity {
        getOutputSignal(): number;
        setOutputSignal(output: number): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $DecoratedPotPattern extends $Record {
        assetId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotPattern}.
     */
    export type $DecoratedPotPattern_ = { assetId?: $ResourceLocation_,  } | [assetId?: $ResourceLocation_, ];
    export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
        static values(): $JigsawBlockEntity$JointType[];
        static valueOf(arg0: string): $JigsawBlockEntity$JointType;
        getTranslatedName(): $Component;
        static byName(name: string): ($JigsawBlockEntity$JointType) | undefined;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ROLLABLE: $JigsawBlockEntity$JointType;
        static ALIGNED: $JigsawBlockEntity$JointType;
        get translatedName(): $Component;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $JigsawBlockEntity$JointType}.
     */
    export type $JigsawBlockEntity$JointType_ = "rollable" | "aligned";
    export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
        static values(): $CommandBlockEntity$Mode[];
        static valueOf(arg0: string): $CommandBlockEntity$Mode;
        static AUTO: $CommandBlockEntity$Mode;
        static REDSTONE: $CommandBlockEntity$Mode;
        static SEQUENCE: $CommandBlockEntity$Mode;
    }
    /**
     * Values that may be interpreted as {@link $CommandBlockEntity$Mode}.
     */
    export type $CommandBlockEntity$Mode_ = "sequence" | "auto" | "redstone";
    export class $ChestLidController {
        tickLid(): void;
        shouldBeOpen(shouldBeOpen: boolean): void;
        getOpenness(partialTicks: number): number;
        constructor();
    }
    export class $BlockEntity$DataComponentInput {
    }
    export interface $BlockEntity$DataComponentInput {
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        get<T>(component: $DataComponentType<T>): T;
        getOrDefault<T>(component: $DataComponentType<T>, defaultValue: T): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
    }
    export class $BeehiveBlockEntity$BeeData {
    }
    export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable, $BeaconBlockEntityLightSource {
        getName(): $Component;
        getDisplayName(): $Component;
        static tick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $BeaconBlockEntity): void;
        lambdynlights$getDynamicLightBeam(): $BeaconLightBehavior;
        lambdynlights$setDynamicLightBeam(beam: $BeaconLightBehavior_): void;
        lambdynlights$getLevels(): number;
        getCustomName(): $Component;
        /**
         * Sets the custom name for this beacon.
         */
        setCustomName(name: $Component_ | null): void;
        static playSound(level: $Level, pos: $BlockPos_, sound: $SoundEvent): void;
        getBeamSections(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        static filterEffect(effect: $Holder_<$MobEffect> | null): $Holder<$MobEffect>;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        primaryPower: $Holder<$MobEffect>;
        static BEACON_EFFECTS: $List<$List<$Holder<$MobEffect>>>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        beamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        worldPosition: $BlockPos;
        secondaryPower: $Holder<$MobEffect>;
        static DATA_SECONDARY: number;
        name: $Component;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        static DATA_LEVELS: number;
        levels: number;
        static DATA_PRIMARY: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get displayName(): $Component;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $SculkShriekerBlockEntity$VibrationUser implements $VibrationSystem$User {
        calculateTravelTimeInTicks(arg0: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        onDataChanged(): void;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        requiresAdjacentChunksToBeTicking(): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $SignText {
        getMessage(index: number, isFiltered: boolean): $Component;
        setColor(color: $DyeColor_): $SignText;
        hasMessage(player: $Player): boolean;
        setMessage(index: number, text: $Component_, filteredText: $Component_): $SignText;
        setMessage(index: number, text: $Component_): $SignText;
        getMessages(isFiltered: boolean): $Component[];
        hasAnyClickCommands(player: $Player): boolean;
        getColor(): $DyeColor;
        setHasGlowingText(hasGlowingText: boolean): $SignText;
        hasGlowingText(): boolean;
        getRenderMessages(renderMessagesFiltered: boolean, formatter: $Function_<$Component, $FormattedCharSequence>): $FormattedCharSequence[];
        static DIRECT_CODEC: $Codec<$SignText>;
        static LINES: number;
        constructor();
        constructor(messages: $Component_[], filteredMessages: $Component_[], color: $DyeColor_, hasGlowingText: boolean);
    }
    export class $BedBlockEntity extends $BlockEntity {
        setColor(color: $DyeColor_): void;
        getColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, color: $DyeColor_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $TrappedChestBlockEntity extends $ChestBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeAccessor, $ExtendedBlockEntityType<any>, $BETypeAccess, $BlockEntityTypeExtension<any>, $FabricBlockEntityType, $BlockEntityTypeMethods {
        static getKey(blockEntityType: $BlockEntityType<never>): $ResourceLocation;
        create(pos: $BlockPos_, state: $BlockState_): $Object;
        isValid(state: $BlockState_): boolean;
        flywheel$getVisualizer(): $BlockEntityVisualizer<any>;
        flywheel$setVisualizer(visualizer: $BlockEntityVisualizer<any>): void;
        bo$setRenderer(renderer: $BlockEntityRenderer_<any>): void;
        bo$getRenderer(): $BlockEntityRenderer<any>;
        getBlockEntity(level: $BlockGetter, pos: $BlockPos_): $Object;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<any>[];
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): void;
        builtInRegistryHolder(): $Holder$Reference<$BlockEntityType<never>>;
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): boolean;
        addSupportedBlock(arg0: $Block): void;
        getValidBlocks(): $Set<$Block>;
        neoforge$setValidBlocks(validBlocks: $Set_<$Block>): void;
        static BLAST_FURNACE: $BlockEntityType<$BlastFurnaceBlockEntity>;
        static HANGING_SIGN: $BlockEntityType<$HangingSignBlockEntity>;
        static COMPARATOR: $BlockEntityType<$ComparatorBlockEntity>;
        static VAULT: $BlockEntityType<$VaultBlockEntity>;
        static SKULL: $BlockEntityType<$SkullBlockEntity>;
        static CHISELED_BOOKSHELF: $BlockEntityType<$ChiseledBookShelfBlockEntity>;
        static JIGSAW: $BlockEntityType<$JigsawBlockEntity>;
        static DECORATED_POT: $BlockEntityType<$DecoratedPotBlockEntity>;
        static BEACON: $BlockEntityType<$BeaconBlockEntity>;
        static CRAFTER: $BlockEntityType<$CrafterBlockEntity>;
        validBlocks: $Set<$Block>;
        static FURNACE: $BlockEntityType<$FurnaceBlockEntity>;
        static BEEHIVE: $BlockEntityType<$BeehiveBlockEntity>;
        static PISTON: $BlockEntityType<$PistonMovingBlockEntity>;
        static TRAPPED_CHEST: $BlockEntityType<$TrappedChestBlockEntity>;
        static END_PORTAL: $BlockEntityType<$TheEndPortalBlockEntity>;
        static ENDER_CHEST: $BlockEntityType<$EnderChestBlockEntity>;
        static COMMAND_BLOCK: $BlockEntityType<$CommandBlockEntity>;
        static SIGN: $BlockEntityType<$SignBlockEntity>;
        static STRUCTURE_BLOCK: $BlockEntityType<$StructureBlockEntity>;
        static BELL: $BlockEntityType<$BellBlockEntity>;
        static ENCHANTING_TABLE: $BlockEntityType<$EnchantingTableBlockEntity>;
        static BREWING_STAND: $BlockEntityType<$BrewingStandBlockEntity>;
        static BED: $BlockEntityType<$BedBlockEntity>;
        static MOB_SPAWNER: $BlockEntityType<$SpawnerBlockEntity>;
        static CALIBRATED_SCULK_SENSOR: $BlockEntityType<$CalibratedSculkSensorBlockEntity>;
        static SCULK_CATALYST: $BlockEntityType<$SculkCatalystBlockEntity>;
        static CONDUIT: $BlockEntityType<$ConduitBlockEntity>;
        static CAMPFIRE: $BlockEntityType<$CampfireBlockEntity>;
        static END_GATEWAY: $BlockEntityType<$TheEndGatewayBlockEntity>;
        static SMOKER: $BlockEntityType<$SmokerBlockEntity>;
        static DISPENSER: $BlockEntityType<$DispenserBlockEntity>;
        static SCULK_SHRIEKER: $BlockEntityType<$SculkShriekerBlockEntity>;
        static HOPPER: $BlockEntityType<$HopperBlockEntity>;
        static CHEST: $BlockEntityType<$ChestBlockEntity>;
        static DAYLIGHT_DETECTOR: $BlockEntityType<$DaylightDetectorBlockEntity>;
        static BANNER: $BlockEntityType<$BannerBlockEntity>;
        static SCULK_SENSOR: $BlockEntityType<$SculkSensorBlockEntity>;
        static TRIAL_SPAWNER: $BlockEntityType<$TrialSpawnerBlockEntity>;
        static LECTERN: $BlockEntityType<$LecternBlockEntity>;
        static SHULKER_BOX: $BlockEntityType<$ShulkerBoxBlockEntity>;
        static BRUSHABLE_BLOCK: $BlockEntityType<$BrushableBlockEntity>;
        static JUKEBOX: $BlockEntityType<$JukeboxBlockEntity>;
        static BARREL: $BlockEntityType<$BarrelBlockEntity>;
        static DROPPER: $BlockEntityType<$DropperBlockEntity>;
        constructor(factory: $BlockEntityType$BlockEntitySupplier_<$Object>, validBlocks: $Set_<$Block>, dataType: $Type<never>);
    }
    export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
        dataAccess: $ContainerData;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        lockKey: $LockCode;
        hasComparators: number;
        litTime: number;
        static SLOT_FUEL: number;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        static DATA_LIT_DURATION: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        litDuration: number;
        worldPosition: $BlockPos;
        name: $Component;
        static SLOT_RESULT: number;
        static NUM_DATA_VALUES: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $CampfireBlockEntity extends $BlockEntity implements $Clearable, $SleepingBlockEntity {
        clearContent(): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        dowse(): void;
        static cooldownTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        getCookableRecipe(stack: $ItemStack_): ($RecipeHolder<$CampfireCookingRecipe>) | undefined;
        static particleTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        /**
         * @return the items currently held in this campfire
         */
        getItems(): $NonNullList<$ItemStack>;
        placeFood(entity: $LivingEntity | null, food: $ItemStack_, cookTime: number): boolean;
        static cookTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        sleepOnlyCurrentTick(): void;
        lithium$startSleeping(): boolean;
        setTicker(arg0: $TickingBlockEntity): void;
        wakeUpNow(): void;
        isSleeping(): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        cookingTime: number[];
        remove: boolean;
        cookingProgress: number[];
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity implements $LithiumInventory, $InventoryChangeTracker {
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        playSound(state: $BlockState_, sound: $SoundEvent): void;
        updateBlockState(state: $BlockState_, open: boolean): void;
        handler$cof000$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lootTableSeed: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeaconBlockEntity$BeaconBeamSection {
        getHeight(): number;
        getColor(): number;
        increaseHeight(): void;
        color: number;
        constructor(color: number);
        get height(): number;
    }
    export class $SculkSensorBlockEntity$VibrationUser implements $VibrationSystem$User {
        calculateTravelTimeInTicks(distance: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        onDataChanged(): void;
        isValidVibration(gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_): boolean;
        requiresAdjacentChunksToBeTicking(): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $PotDecorations extends $Record {
        static load(tag: $CompoundTag_ | null): $PotDecorations;
        save(tag: $CompoundTag_): $CompoundTag;
        left(): ($Item) | undefined;
        right(): ($Item) | undefined;
        front(): ($Item) | undefined;
        back(): ($Item) | undefined;
        ordered(): $List<$Item>;
        static CODEC: $Codec<$PotDecorations>;
        static EMPTY: $PotDecorations;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotDecorations>;
        constructor(arg0: ($Item) | undefined, arg1: ($Item) | undefined, arg2: ($Item) | undefined, arg3: ($Item) | undefined);
        constructor(back: $Item, left: $Item, right: $Item, front: $Item);
    }
    /**
     * Values that may be interpreted as {@link $PotDecorations}.
     */
    export type $PotDecorations_ = { left?: ($Item) | undefined, back?: ($Item) | undefined, front?: ($Item) | undefined, right?: ($Item) | undefined,  } | [left?: ($Item) | undefined, back?: ($Item) | undefined, front?: ($Item) | undefined, right?: ($Item) | undefined, ];
    export class $BannerPatternLayers extends $Record {
        layers(): $List<$BannerPatternLayers$Layer>;
        removeLast(): $BannerPatternLayers;
        static CODEC: $Codec<$BannerPatternLayers>;
        static LOGGER: $Logger;
        static EMPTY: $BannerPatternLayers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers>;
        constructor(arg0: $List_<$BannerPatternLayers$Layer_>);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers}.
     */
    export type $BannerPatternLayers_ = { layers?: $List_<$BannerPatternLayers$Layer_>,  } | [layers?: $List_<$BannerPatternLayers$Layer_>, ];
    export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity, $InventoryChangeEmitter, $LithiumInventory, $InventoryChangeTracker {
        static lidAnimateTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $ChestBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        static playSound(level: $Level, pos: $BlockPos_, state: $BlockState_, sound: $SoundEvent): void;
        handler$coh001$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        static getOpenCount(level: $BlockGetter, pos: $BlockPos_): number;
        signalOpenCount(level: $Level, pos: $BlockPos_, state: $BlockState_, eventId: number, eventParam: number): void;
        static swapContents(chest: $ChestBlockEntity, otherChest: $ChestBlockEntity): void;
        getOpenNess(partialTicks: number): number;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lootTableSeed: number;
        remove: boolean;
        constructor(type: $BlockEntityType<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeehiveBlockEntity$Occupant extends $Record {
        static of(entity: $Entity): $BeehiveBlockEntity$Occupant;
        static create(ticksInHive: number): $BeehiveBlockEntity$Occupant;
        createEntity(level: $Level, pos: $BlockPos_): $Entity;
        ticksInHive(): number;
        minTicksInHive(): number;
        entityData(): $CustomData;
        static CODEC: $Codec<$BeehiveBlockEntity$Occupant>;
        static LIST_CODEC: $Codec<$List<$BeehiveBlockEntity$Occupant>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BeehiveBlockEntity$Occupant>;
        constructor(arg0: $CustomData, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$Occupant}.
     */
    export type $BeehiveBlockEntity$Occupant_ = { minTicksInHive?: number, ticksInHive?: number, entityData?: $CustomData,  } | [minTicksInHive?: number, ticksInHive?: number, entityData?: $CustomData, ];
    export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BlockEntity extends $AttachmentHolder implements $IBlockEntityExtension, $RenderDataBlockEntity, $RenderAttachmentBlockEntity, $SupportCache, $ComparatorTracker, $SetChangedHandlingBlockEntity, $Cullable, $BlockEntityAccessor, $AzAnimatorAccessor<any, any>, $IBlockEntity {
        getType(): $BlockEntityType<never>;
        getLevel(): $Level;
        setLevel(level: $Level): void;
        saveCustomAndMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * @deprecated
         */
        removeComponentsFromTag(tag: $CompoundTag_): void;
        getBlockPos(): $BlockPos;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setTimeout(): void;
        components(): $DataComponentMap;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isForcedVisible(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isOutOfCamera(): boolean;
        setOutOfCamera(value: boolean): void;
        getAnimatorOrNull(): $AzAnimator<any, any>;
        setAnimator(arg0: $AzAnimator<any, any>): void;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getPersistentData(): $CompoundTag;
        /**
         * @return whether this BlockEntity's level has been set
         */
        onlyOpCanSetNbt(): boolean;
        applyComponents(components: $DataComponentMap_, patch: $DataComponentPatch_): void;
        collectComponents(): $DataComponentMap;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setRemoved(): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isCulled(): boolean;
        setCulled(value: boolean): void;
        static setChanged(level: $Level, pos: $BlockPos_, state: $BlockState_): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setChanged(): void;
        fillCrashReportCategory(reportCategory: $CrashReportCategory): void;
        getRenderAttachmentData(): $Object;
        saveWithFullMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        saveWithoutMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        collectImplicitComponents(components: $DataComponentMap$Builder): void;
        static parseCustomNameSafe(customName: string, registries: $HolderLookup$Provider): $Component;
        applyImplicitComponents(componentInput: $BlockEntity$DataComponentInput): void;
        lithium$onComparatorAdded(arg0: $Direction_, arg1: number): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$isSupported(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isRemoved(): boolean;
        getBlockState(): $BlockState;
        handler$edg000$yumi_mc_core$yumi$onPopulateCrashDetails(crashReportCategory: $CrashReportCategory, ci: $CallbackInfo): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        hasLevel(): boolean;
        saveWithId(registries: $HolderLookup$Provider): $CompoundTag;
        saveToItem(stack: $ItemStack_, registries: $HolderLookup$Provider): void;
        static loadStatic(pos: $BlockPos_, state: $BlockState_, tag: $CompoundTag_, registries: $HolderLookup$Provider): $BlockEntity;
        handler$flh001$collective$setRemoved(arg0: $CallbackInfo): void;
        loadWithComponents(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        static addEntityType(tag: $CompoundTag_, entityType: $BlockEntityType<never>): void;
        /**
         * @deprecated
         */
        setBlockState(blockState: $BlockState_): void;
        triggerEvent(id: number, type: number): boolean;
        loadAdditional(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        getUpdatePacket(): $Packet<$ClientGamePacketListener>;
        setComponents(components: $DataComponentMap_): void;
        getUpdateTag(registries: $HolderLookup$Provider): $CompoundTag;
        saveAdditional(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        loadCustomOnly(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        saveCustomOnly(registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        clearRemoved(): void;
        getRenderData(): $Object;
        isValidBlockState(arg0: $BlockState_): boolean;
        static getPosFromTag(tag: $CompoundTag_): $BlockPos;
        handler$flh000$collective$setLevel(arg0: $Level, arg1: $CallbackInfo): void;
        applyComponentsFromItemStack(stack: $ItemStack_): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$hasAnyComparatorNearby(): boolean;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onLoad(): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        requestModelDataUpdate(): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        invalidateCapabilities(): void;
        /**
         * Returns whether this `BlockEntity` has custom outline rendering behavior.
         */
        hasCustomOutlineRendering(player: $Player): boolean;
        /**
         * Called when you receive a TileEntityData packet for the location this
         * TileEntity is currently in. On the client, the NetworkManager will always
         * be the remote server. On the server, it will be whomever is responsible for
         * sending the packet.
         */
        onDataPacket(net: $Connection, pkt: $ClientboundBlockEntityDataPacket, lookupProvider: $HolderLookup$Provider): void;
        handleUpdateTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onChunkUnloaded(): void;
        /**
         * Allows you to return additional model data.
         * This data can be used to provide additional functionality in your `BakedModel`.
         * You need to schedule a refresh of you model data via `#requestModelDataUpdate()` if the result of this function changes.
         * 
         * This method is always called on the main client thread.
         */
        getModelData(): $ModelData;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        lithium$handleSetChanged(): void;
        getAnimator(): ($AzAnimator<$Object, $Object>) | undefined;
        callSaveMetadata(tag: $CompoundTag_): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(type: $BlockEntityType<never>, pos: $BlockPos_, blockState: $BlockState_);
        get blockPos(): $BlockPos;
        get forcedVisible(): boolean;
        get animatorOrNull(): $AzAnimator<any, any>;
        get persistentData(): $CompoundTag;
        get renderAttachmentData(): $Object;
        get updatePacket(): $Packet<$ClientGamePacketListener>;
        get renderData(): $Object;
        get modelData(): $ModelData;
    }
    export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
        static values(): $ShulkerBoxBlockEntity$AnimationStatus[];
        static valueOf(arg0: string): $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSED: $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENED: $ShulkerBoxBlockEntity$AnimationStatus;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerBoxBlockEntity$AnimationStatus}.
     */
    export type $ShulkerBoxBlockEntity$AnimationStatus_ = "closed" | "opening" | "opened" | "closing";
    export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $PreservedShulkerBox {
        isPreserved(): boolean;
        isClosed(): boolean;
        static tick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $ShulkerBoxBlockEntity): void;
        getBoundingBox(state: $BlockState_): $AABB;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        getColor(): $DyeColor;
        getAnimationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        getProgress(partialTicks: number): number;
        getSlotsForFace(side: $Direction_): number[];
        handler$bic000$supplementaries$supp$preventInsertion(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $CallbackInfoReturnable<any>): void;
        handler$cok004$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        loadFromTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        setPreserved(arg0: boolean): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        sleepOnlyCurrentTick(): void;
        lithium$startSleeping(): boolean;
        setTicker(arg0: $TickingBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        wakeUpNow(): void;
        isSleeping(): boolean;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static EVENT_SET_OPEN_COUNT: number;
        static CONTAINER_SIZE: number;
        name: $Component;
        static COLUMNS: number;
        static OPENING_TICK_LENGTH: number;
        lockKey: $LockCode;
        hasComparators: number;
        static MAX_LID_HEIGHT: number;
        static MAX_LID_ROTATION: number;
        lootTableSeed: number;
        static ROWS: number;
        constructor(color: $DyeColor_ | null, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get closed(): boolean;
        get color(): $DyeColor;
        get animationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $DecoratedPotBlockEntity$WobbleStyle extends $Enum<$DecoratedPotBlockEntity$WobbleStyle> {
        static values(): $DecoratedPotBlockEntity$WobbleStyle[];
        static valueOf(arg0: string): $DecoratedPotBlockEntity$WobbleStyle;
        duration: number;
        static POSITIVE: $DecoratedPotBlockEntity$WobbleStyle;
        static NEGATIVE: $DecoratedPotBlockEntity$WobbleStyle;
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotBlockEntity$WobbleStyle}.
     */
    export type $DecoratedPotBlockEntity$WobbleStyle_ = "positive" | "negative";
    export class $BlockEntity$ComponentHelper {
        static COMPONENTS_CODEC: $Codec<$DataComponentMap>;
    }
    export class $BrushableBlockEntity extends $BlockEntity implements $AccessorMixinBrushableBlockEntity, $Sifting {
        getItem(): $ItemStack;
        brush(startTick: number, arg1: $Player, player: $Direction_): boolean;
        getItemStack(): $ItemStack;
        checkReset(): void;
        unpackLootTable(player: $Player): void;
        setItemStack(stack: $ItemStack_): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        getHitDirection(): $Direction;
        setSiftingApplied(): void;
        wrapOperation$eep000$lootr$tryLoadLootTable(arg0: $CompoundTag_, arg1: string, arg2: number, arg3: $Operation_<any>): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        lootr$getLootTableSeed(): number;
        lootr$getLootTable(): $ResourceKey<$LootTable>;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        brushCount: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        brushCountResetsAtTick: number;
        coolDownEndsAtTick: number;
        hitDirection: $Direction;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get item(): $ItemStack;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity {
        static lidAnimateTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $EnderChestBlockEntity): void;
        recheckOpen(): void;
        stopOpen(player: $Player): void;
        startOpen(player: $Player): void;
        stillValid(player: $Player): boolean;
        getOpenNess(partialTicks: number): number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable, $InventoryChangeEmitter, $BaseContainerBEAccess, $AccessorMixinBaseContainerBlockEntity, $AccessorBaseContainerBlockEntity, $SpecialLogicInventory {
        getName(): $Component;
        isEmpty(): boolean;
        getDisplayName(): $Component;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        clearContent(): void;
        setItems(items: $NonNullList<$ItemStack_>): void;
        static canUnlock(player: $Player, code: $LockCode_, displayName: $Component_): boolean;
        getCustomName(): $Component;
        lithium$forwardContentChangeOnce(arg0: $InventoryChangeListener, arg1: $LithiumStackList): void;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        stillValid(player: $Player): boolean;
        lithium$emitRemoved(): void;
        lithium$emitStackListReplaced(): void;
        lithium$emitContentModified(): void;
        wrapOperation$gco000$fabric_transfer_api_v1$fabric_redirectMarkDirty(arg0: $BaseContainerBlockEntity, arg1: $Operation_<any>): void;
        fabric_setSuppress(arg0: boolean): void;
        getDefaultName(): $Component;
        getItems(): $NonNullList<$ItemStack>;
        canOpen(player: $Player): boolean;
        handler$cog000$lithium$readNbtStackListReplacement(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfo): void;
        lithium$stopForwardingMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$forwardMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        lithium$emitFirstComparatorAdded(): void;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        createMenu(containerId: number, inventory: $Inventory): $AbstractContainerMenu;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        stopOpen(player: $Player): void;
        startOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item>): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        emitCallbackReplaced(): void;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        getBlock(level: $Level): $LevelBlock;
        clear(): void;
        self(): $Container;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        setChanged(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        isMutable(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        setName(arg0: $Component_): void;
        getLockKey(): $LockCode;
        setLockKey(arg0: $LockCode_): void;
        bookshelf$name(arg0: $Component_): void;
        invokeGetItems(): $NonNullList<$ItemStack>;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        level: $Level;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(type: $BlockEntityType<never>, pos: $BlockPos_, blockState: $BlockState_);
        get displayName(): $Component;
        get customName(): $Component;
        get defaultName(): $Component;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$Builder<T extends $BlockEntity> implements $FabricBlockEntityType$Builder<any> {
        static of<T extends $BlockEntity>(factory: $BlockEntityType$BlockEntitySupplier_<T>, ...validBlocks: $Block[]): $BlockEntityType$Builder<T>;
        build(): $BlockEntityType<any>;
        build(dataType: $Type<never>): $BlockEntityType<$Object>;
        validBlocks: $Set<$Block>;
    }
    export class $CommandBlockEntity extends $BlockEntity {
        isAutomatic(): boolean;
        getMode(): $CommandBlockEntity$Mode;
        isPowered(): boolean;
        setPowered(auto: boolean): void;
        getCommandBlock(): $BaseCommandBlock;
        setAutomatic(auto: boolean): void;
        isConditional(): boolean;
        wasConditionMet(): boolean;
        markConditionMet(): boolean;
        onModeSwitch(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get mode(): $CommandBlockEntity$Mode;
        get commandBlock(): $BaseCommandBlock;
        get conditional(): boolean;
    }
    export class $DecoratedPotPatterns {
        static bootstrap(registry: $Registry<$DecoratedPotPattern_>): $DecoratedPotPattern;
        static getPatternFromItem(item: $Item): $ResourceKey<$DecoratedPotPattern>;
        static GUSTER: $ResourceKey<$DecoratedPotPattern>;
        static MINER: $ResourceKey<$DecoratedPotPattern>;
        static SNORT: $ResourceKey<$DecoratedPotPattern>;
        static DANGER: $ResourceKey<$DecoratedPotPattern>;
        static ARMS_UP: $ResourceKey<$DecoratedPotPattern>;
        static FRIEND: $ResourceKey<$DecoratedPotPattern>;
        static SHEAF: $ResourceKey<$DecoratedPotPattern>;
        static ANGLER: $ResourceKey<$DecoratedPotPattern>;
        static SKULL: $ResourceKey<$DecoratedPotPattern>;
        static BREWER: $ResourceKey<$DecoratedPotPattern>;
        static SCRAPE: $ResourceKey<$DecoratedPotPattern>;
        static ARCHER: $ResourceKey<$DecoratedPotPattern>;
        static FLOW: $ResourceKey<$DecoratedPotPattern>;
        static BURN: $ResourceKey<$DecoratedPotPattern>;
        static HEART: $ResourceKey<$DecoratedPotPattern>;
        static BLANK: $ResourceKey<$DecoratedPotPattern>;
        static EXPLORER: $ResourceKey<$DecoratedPotPattern>;
        static SHELTER: $ResourceKey<$DecoratedPotPattern>;
        static PLENTY: $ResourceKey<$DecoratedPotPattern>;
        static BLADE: $ResourceKey<$DecoratedPotPattern>;
        static HEARTBREAK: $ResourceKey<$DecoratedPotPattern>;
        static HOWL: $ResourceKey<$DecoratedPotPattern>;
        static MOURNER: $ResourceKey<$DecoratedPotPattern>;
        static PRIZE: $ResourceKey<$DecoratedPotPattern>;
        constructor();
    }
    export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
        static values(): $StructureBlockEntity$UpdateType[];
        static valueOf(arg0: string): $StructureBlockEntity$UpdateType;
        static UPDATE_DATA: $StructureBlockEntity$UpdateType;
        static SAVE_AREA: $StructureBlockEntity$UpdateType;
        static LOAD_AREA: $StructureBlockEntity$UpdateType;
        static SCAN_AREA: $StructureBlockEntity$UpdateType;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockEntity$UpdateType}.
     */
    export type $StructureBlockEntity$UpdateType_ = "update_data" | "save_area" | "load_area" | "scan_area";
    export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
        /**
         * Gets the position of the listener itself.
         */
        getListenerSource(): $PositionSource;
        /**
         * Gets the listening radius of the listener. Events within this radius will notify the listener when broadcasted.
         */
        getListenerRadius(): number;
        handleGameEvent(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): boolean;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        getSculkSpreader(): $SculkSpreader;
        static PULSE_TICKS: number;
        sculkSpreader: $SculkSpreader;
        constructor(blockState: $BlockState_, positionSource: $PositionSource);
        get listenerSource(): $PositionSource;
        get listenerRadius(): number;
        get deliveryMode(): $GameEventListener$DeliveryMode;
    }
    export class $DaylightDetectorBlockEntity extends $BlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $CrafterBlockEntity extends $RandomizableContainerBlockEntity implements $CraftingContainer, $SleepingBlockEntity, $SetChangedHandlingBlockEntity {
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        fillStackedContents(contents: $StackedContents): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        /**
         * Returns the number of slots in the inventory.
         */
        getRedstoneSignal(): number;
        setTriggered(triggered: boolean): void;
        isSlotDisabled(slot: number): boolean;
        setSlotState(slot: number, state: boolean): void;
        isTriggered(): boolean;
        static serverTick(level: $Level, pos: $BlockPos_, state: $BlockState_, crafter: $CrafterBlockEntity): void;
        setCraftingTicksRemaining(craftingTicksRemaining: number): void;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        asCraftInput(): $CraftingInput;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        sleepOnlyCurrentTick(): void;
        lithium$startSleeping(): boolean;
        setTicker(arg0: $TickingBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        wakeUpNow(): void;
        isSleeping(): boolean;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        static CONTAINER_WIDTH: number;
        level: $Level;
        static SLOT_ENABLED: number;
        static SLOT_DISABLED: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static NUM_DATA: number;
        remove: boolean;
        static CONTAINER_HEIGHT: number;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static DATA_TRIGGERED: number;
        static CONTAINER_SIZE: number;
        name: $Component;
        lockKey: $LockCode;
        hasComparators: number;
        containerData: $ContainerData;
        lootTableSeed: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get width(): number;
        get height(): number;
        get redstoneSignal(): number;
        set craftingTicksRemaining(value: number);
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $HangingSignBlockEntity extends $SignBlockEntity implements $ExtendedHangingSign {
        getRenderBoundingBox(): $AABB;
        amendments$getExtension(): $HangingSignTileExtension;
        amendments$getAnimation(): $SwingAnimation;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get renderBoundingBox(): $AABB;
    }
    export class $BellBlockEntity$ResonationEndAction {
    }
    export interface $BellBlockEntity$ResonationEndAction {
    }
    /**
     * Values that may be interpreted as {@link $BellBlockEntity$ResonationEndAction}.
     */
    export type $BellBlockEntity$ResonationEndAction_ = (() => void);
    export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $SetChangedHandlingBlockEntity {
        handler$gfg000$amendments$refreshModel(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfo): void;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        getSlotsForFace(side: $Direction_): number[];
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $BrewingStandBlockEntity): void;
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        sleepOnlyCurrentTick(): void;
        lithium$startSleeping(): boolean;
        setTicker(arg0: $TickingBlockEntity): void;
        wakeUpNow(): void;
        isSleeping(): boolean;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        static DATA_BREW_TIME: number;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_FUEL_USES: number;
        level: $Level;
        fuel: number;
        brewTime: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static FUEL_USES: number;
        remove: boolean;
        worldPosition: $BlockPos;
        name: $Component;
        lockKey: $LockCode;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $StructureBlockEntity extends $BlockEntity {
        setSeed(seed: number): void;
        getSeed(): number;
        getMirror(): $Mirror;
        setMirror(mirror: $Mirror_): void;
        setShowAir(ignoreEntities: boolean): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        detectSize(): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowAir(): boolean;
        setMode(mode: $StructureMode_): void;
        getMode(): $StructureMode;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isPowered(): boolean;
        setPowered(ignoreEntities: boolean): void;
        getRotation(): $Rotation;
        placeStructureIfSameSize(level: $ServerLevel): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isStructureLoadable(): boolean;
        unloadStructure(): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(): boolean;
        /**
         * Saves the template, either updating the local version or writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(writeToDisk: boolean): boolean;
        placeStructure(level: $ServerLevel): void;
        usedBy(player: $Player): boolean;
        createdBy(author: $LivingEntity): void;
        constant$ccp000$hugestructureblocks$detectSize(value: number): number;
        constant$ccp000$hugestructureblocks$readNbtUpper(value: number): number;
        constant$ccp000$hugestructureblocks$readNbtLower(value: number): number;
        getStructureName(): string;
        setStructureName(metaData: string | null): void;
        setStructureName(structureName: $ResourceLocation_ | null): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        hasStructureName(): boolean;
        getStructurePos(): $BlockPos;
        setStructurePos(structurePos: $BlockPos_): void;
        setIntegrity(integrity: number): void;
        getIntegrity(): number;
        setIgnoreEntities(ignoreEntities: boolean): void;
        setShowBoundingBox(ignoreEntities: boolean): void;
        setStructureSize(structureSize: $Vec3i): void;
        setMetaData(metaData: string): void;
        setRotation(rotation: $Rotation_): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isIgnoreEntities(): boolean;
        getStructureSize(): $Vec3i;
        getMetaData(): string;
        static createRandom(seed: number): $RandomSource;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowBoundingBox(): boolean;
        loadStructureInfo(level: $ServerLevel): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static AUTHOR_TAG: string;
        static MAX_OFFSET_PER_AXIS: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        static MAX_SIZE_PER_AXIS: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get structureLoadable(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeCraftingHolder, $StackedContentsCompatible, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $SetChangedHandlingBlockEntity, $FurnaceTEAccess, $AccessorAbstractFurnaceBlockEntity, $SpecialLogicInventory, $Clearable, $AbstractFurnaceBlockEntityAccess {
        static add(map: $Map_<$Item, number>, itemTag: $TagKey_<$Item>, burnTime: number): void;
        static add(map: $Map_<$Item, number>, item: $ItemLike_, burnTime: number): void;
        handler$gck000$fabric_transfer_api_v1$setStackSuppressUpdate(arg0: number, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        static invalidateCache(): void;
        getRecipesToAwardAndPopExperience(level: $ServerLevel, popVec: $Vec3_): $List<$RecipeHolder<never>>;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        fillStackedContents(helper: $StackedContents): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        static isFuel(stack: $ItemStack_): boolean;
        static buildFuels(arg0: $ObjIntConsumer_<$Either<$Item, $TagKey<$Item>>>): void;
        /**
         * @deprecated
         */
        static getFuel(): $Map<$Item, number>;
        awardUsedRecipesAndPopExperience(player: $ServerPlayer): void;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        getSlotsForFace(side: $Direction_): number[];
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        getRecipeUsed(): $RecipeHolder<never>;
        getBurnDuration(fuel: $ItemStack_): number;
        static serverTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $AbstractFurnaceBlockEntity): void;
        setRecipeUsed(level: $Level, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        sleepOnlyCurrentTick(): void;
        lithium$startSleeping(): boolean;
        setTicker(arg0: $TickingBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        wakeUpNow(): void;
        isSleeping(): boolean;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        /**
         * Returns the number of slots in the inventory.
         */
        getCookingTotalTime(): number;
        getQuickCheck(): $RecipeManager$CachedCheck<$SingleRecipeInput, $AbstractCookingRecipe>;
        getDataAccess(): $ContainerData;
        /**
         * Returns the number of slots in the inventory.
         */
        getCookingProgress(): number;
        dataAccess: $ContainerData;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        lockKey: $LockCode;
        hasComparators: number;
        litTime: number;
        static SLOT_FUEL: number;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        static DATA_LIT_DURATION: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        litDuration: number;
        worldPosition: $BlockPos;
        name: $Component;
        static SLOT_RESULT: number;
        static NUM_DATA_VALUES: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        constructor(type: $BlockEntityType<never>, pos: $BlockPos_, blockState: $BlockState_, recipeType: $RecipeType<$AbstractCookingRecipe>);
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
        get quickCheck(): $RecipeManager$CachedCheck<$SingleRecipeInput, $AbstractCookingRecipe>;
    }
    export class $EnchantingTableBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        getCustomName(): $Component;
        setCustomName(customName: $Component_ | null): void;
        static bookAnimationTick(level: $Level, pos: $BlockPos_, state: $BlockState_, enchantingTable: $EnchantingTableBlockEntity): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        oFlip: number;
        flipA: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        worldPosition: $BlockPos;
        rot: number;
        tRot: number;
        flipT: number;
        oOpen: number;
        time: number;
        oRot: number;
        hasComparators: number;
        flip: number;
        open: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $BeehiveBlockEntity extends $BlockEntity {
        isEmpty(): boolean;
        isSedated(): boolean;
        storeBee(occupant: $BeehiveBlockEntity$Occupant_): void;
        isFull(): boolean;
        getOccupantCount(): number;
        isFireNearby(): boolean;
        addOccupant(occupant: $Entity): void;
        static getHoneyLevel(state: $BlockState_): number;
        static serverTick(level: $Level, pos: $BlockPos_, state: $BlockState_, beehive: $BeehiveBlockEntity): void;
        emptyAllLivingFromHive(player: $Player | null, state: $BlockState_, releaseStatus: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        static IGNORED_BEE_TAGS: $List<string>;
        worldPosition: $BlockPos;
        level: $Level;
        static MIN_OCCUPATION_TICKS_NECTARLESS: number;
        static MAX_OCCUPANTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get empty(): boolean;
        get sedated(): boolean;
        get full(): boolean;
        get occupantCount(): number;
        get fireNearby(): boolean;
    }
    export class $TickingBlockEntity {
    }
    export interface $TickingBlockEntity {
        getType(): string;
        tick(): void;
        isRemoved(): boolean;
        getPos(): $BlockPos;
        get type(): string;
        get removed(): boolean;
        get pos(): $BlockPos;
    }
    export class $SpawnerBlockEntity extends $BlockEntity implements $Spawner {
        getSpawner(): $BaseSpawner;
        setEntityId(type: $EntityType<never>, random: $RandomSource): void;
        static clientTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get spawner(): $BaseSpawner;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $BellBlockEntity extends $BlockEntity implements $IBellConnection {
        getRenderBoundingBox(): $AABB;
        amendments$getConnection(): $IBellConnection$Type;
        onHit(direction: $Direction_): void;
        static clientTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        amendments$setConnected(arg0: $IBellConnection$Type_): void;
        worldPosition: $BlockPos;
        ticks: number;
        level: $Level;
        clickDirection: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        shaking: boolean;
        amendments$connection: $IBellConnection$Type;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get renderBoundingBox(): $AABB;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $DropperBlockEntity extends $DispenserBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static CONTAINER_SIZE: number;
        name: $Component;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $SignBlockEntity extends $BlockEntity {
        setText(text: $SignText, isFrontText: boolean): boolean;
        isWaxed(): boolean;
        isFacingFrontText(player: $Player): boolean;
        getText(isFrontText: boolean): $SignText;
        static tick(level: $Level, pos: $BlockPos_, state: $BlockState_, sign: $SignBlockEntity): void;
        executeClickCommandsIfPresent(player: $Player, level: $Level, pos: $BlockPos_, frontText: boolean): boolean;
        getSignInteractionFailedSoundEvent(): $SoundEvent;
        getMaxTextLineWidth(): number;
        createDefaultSignText(): $SignText;
        playerIsTooFarAwayToEdit(uuid: $UUID_): boolean;
        static createCommandSourceStack(player: $Player | null, level: $Level, pos: $BlockPos_): $CommandSourceStack;
        updateText(updater: $UnaryOperator_<$SignText>, isFrontText: boolean): boolean;
        setWaxed(isWaxed: boolean): boolean;
        getBackText(): $SignText;
        getTextLineHeight(): number;
        updateSignText(player: $Player, isFrontText: boolean, filteredText: $List_<$FilteredText_>): void;
        getFrontText(): $SignText;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getPlayerWhoMayEdit(): $UUID;
        canExecuteClickCommands(isFrontText: boolean, player: $Player): boolean;
        setAllowedPlayerEditor(playWhoMayEdit: $UUID_ | null): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(type: $BlockEntityType<any>, pos: $BlockPos_, blockState: $BlockState_);
        get signInteractionFailedSoundEvent(): $SoundEvent;
        get maxTextLineWidth(): number;
        get backText(): $SignText;
        get textLineHeight(): number;
        get frontText(): $SignText;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get playerWhoMayEdit(): $UUID;
        set allowedPlayerEditor(value: $UUID_ | null);
    }
    export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem$BlockContainerSingleItem, $SpecialLogicInventory, $IBetterJukebox {
        handler$zno000$yungsapi$checkIfLevelNull(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        handler$zhj000$etched$getComparatorOutput(arg0: $CallbackInfoReturnable<any>): void;
        popOutTheItem(): void;
        getSongPlayer(): $JukeboxSongPlayer;
        static tick(level: $Level, pos: $BlockPos_, state: $BlockState_, jukebox: $JukeboxBlockEntity): void;
        handler$zhj000$etched$canPlaceItem(arg0: number, arg1: $ItemStack_, arg2: $CallbackInfoReturnable<any>): void;
        amendments$tickAnimation(): void;
        amendments$getRotation(arg0: number): number;
        handler$zhj000$etched$stop(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        getContainerBlockEntity(): $BlockEntity;
        setSongItemWithoutPlaying(stack: $ItemStack_): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        fabric_setSuppress(hasRecord: boolean): void;
        setTheItem(stack: $ItemStack_): void;
        getTheItem(): $ItemStack;
        handler$gfn000$amendments$notifySongChanged(arg0: $CallbackInfo): void;
        splitTheItem(amount: number): $ItemStack;
        onSongChanged(): void;
        tryForcePlaySong(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getComparatorOutput(): number;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        isEmpty(): boolean;
        getItem(amount: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        removeTheItem(): $ItemStack;
        removeItemNoUpdate(amount: number): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getContainerSize(): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        stopOpen(player: $Player): void;
        startOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item>): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item): number;
        getMaxStackSize(stack: $ItemStack_): number;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        getBlock(level: $Level): $LevelBlock;
        clear(): void;
        self(): $Container;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        setChanged(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        isMutable(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getStackInSlot(amount: number): $ItemStack;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        worldPosition: $BlockPos;
        static SONG_ITEM_TAG_ID: string;
        level: $Level;
        jukeboxSongPlayer: $JukeboxSongPlayer;
        static TICKS_SINCE_SONG_STARTED_TAG_ID: string;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get songPlayer(): $JukeboxSongPlayer;
        get containerBlockEntity(): $BlockEntity;
        set songItemWithoutPlaying(value: $ItemStack_);
        get comparatorOutput(): number;
        get containerSize(): number;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
    }
    export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
        create(pos: $BlockPos_, state: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType$BlockEntitySupplier}.
     */
    export type $BlockEntityType$BlockEntitySupplier_<T> = ((arg0: $BlockPos, arg1: $BlockState) => T);
    export class $TheEndPortalBlockEntity extends $BlockEntity {
        shouldRenderFace(face: $Direction_): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(type: $BlockEntityType<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatternLayers$Builder {
        add(layer: $BannerPatternLayers$Layer_): $BannerPatternLayers$Builder;
        add(pattern: $Holder_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        addAll(layers: $BannerPatternLayers_): $BannerPatternLayers$Builder;
        build(): $BannerPatternLayers;
        /**
         * @deprecated
         */
        addIfRegistered(patterns: $HolderGetter<$BannerPattern_>, patternKey: $ResourceKey_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        constructor();
    }
    export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getListener(): $VibrationSystem$Listener;
        setLastVibrationFrequency(lastVibrationFrequency: number): void;
        createVibrationUser(): $VibrationSystem$User;
        getVibrationUser(): $VibrationSystem$User;
        getVibrationData(): $VibrationSystem$Data;
        getLastVibrationFrequency(): number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(type: $BlockEntityType<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $VibrationSystem$Listener;
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
    }
    export class $TrialSpawnerBlockEntity extends $BlockEntity implements $Spawner, $TrialSpawner$StateAccessor {
        getState(): $TrialSpawnerState;
        setState(level: $Level, state: $TrialSpawnerState_): void;
        markUpdated(): void;
        getTrialSpawner(): $TrialSpawner;
        setEntityId(entityType: $EntityType<never>, random: $RandomSource): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get trialSpawner(): $TrialSpawner;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $LithiumInventory, $InventoryChangeTracker, $DispenserBlockEntityAccessor {
        getRandomSlot(random: $RandomSource): number;
        insertItem(stack: $ItemStack_): $ItemStack;
        handler$coi002$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static CONTAINER_SIZE: number;
        name: $Component;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        constructor(type: $BlockEntityType<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
        isSpawning(): boolean;
        getCooldownPercent(partialTicks: number): number;
        getPortalPosition(level: $ServerLevel, pos: $BlockPos_): $Vec3;
        static beamAnimationTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getParticleAmount(): number;
        static triggerCooldown(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        isCoolingDown(): boolean;
        static portalTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        setExitPosition(exitPortal: $BlockPos_, exactTeleport: boolean): void;
        getSpawnPercent(partialTicks: number): number;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get spawning(): boolean;
        get particleAmount(): number;
        get coolingDown(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        dataAccess: $ContainerData;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        lockKey: $LockCode;
        hasComparators: number;
        litTime: number;
        static SLOT_FUEL: number;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        static DATA_LIT_DURATION: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        litDuration: number;
        worldPosition: $BlockPos;
        name: $Component;
        static SLOT_RESULT: number;
        static NUM_DATA_VALUES: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatterns {
        static register(context: $BootstrapContext<$BannerPattern_>, resourceKey: $ResourceKey_<$BannerPattern>): void;
        static bootstrap(context: $BootstrapContext<$BannerPattern_>): void;
        static GUSTER: $ResourceKey<$BannerPattern>;
        static STRIPE_BOTTOM: $ResourceKey<$BannerPattern>;
        static GLOBE: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_MIDDLE: $ResourceKey<$BannerPattern>;
        static TRIANGLE_TOP: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_CENTER: $ResourceKey<$BannerPattern>;
        static STRAIGHT_CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_LEFT: $ResourceKey<$BannerPattern>;
        static SKULL: $ResourceKey<$BannerPattern>;
        static RHOMBUS_MIDDLE: $ResourceKey<$BannerPattern>;
        static CIRCLE_MIDDLE: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL: $ResourceKey<$BannerPattern>;
        static GRADIENT: $ResourceKey<$BannerPattern>;
        static FLOW: $ResourceKey<$BannerPattern>;
        static BASE: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_RIGHT: $ResourceKey<$BannerPattern>;
        static CREEPER: $ResourceKey<$BannerPattern>;
        static STRIPE_LEFT: $ResourceKey<$BannerPattern>;
        static BRICKS: $ResourceKey<$BannerPattern>;
        static TRIANGLES_BOTTOM: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_LEFT: $ResourceKey<$BannerPattern>;
        static FLOWER: $ResourceKey<$BannerPattern>;
        static STRIPE_SMALL: $ResourceKey<$BannerPattern>;
        static TRIANGLE_BOTTOM: $ResourceKey<$BannerPattern>;
        static CURLY_BORDER: $ResourceKey<$BannerPattern>;
        static TRIANGLES_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNLEFT: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNRIGHT: $ResourceKey<$BannerPattern>;
        static PIGLIN: $ResourceKey<$BannerPattern>;
        static GRADIENT_UP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT: $ResourceKey<$BannerPattern>;
        static BORDER: $ResourceKey<$BannerPattern>;
        static MOJANG: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL: $ResourceKey<$BannerPattern>;
        static CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_RIGHT: $ResourceKey<$BannerPattern>;
        constructor();
    }
    export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $RandomizableContainer {
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(seed: number): void;
        unpackLootTable(player: $Player | null): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        wrapOperation$efb000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        wrapOperation$efb000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        handler$efb000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        name: $Component;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lootTableSeed: number;
        remove: boolean;
        constructor(type: $BlockEntityType<never>, pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        dataAccess: $ContainerData;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        lockKey: $LockCode;
        hasComparators: number;
        litTime: number;
        static SLOT_FUEL: number;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        static DATA_LIT_DURATION: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        litDuration: number;
        worldPosition: $BlockPos;
        name: $Component;
        static SLOT_RESULT: number;
        static NUM_DATA_VALUES: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPattern extends $Record {
        translationKey(): string;
        assetId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$BannerPattern>>;
        static DIRECT_CODEC: $Codec<$BannerPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$BannerPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $BannerPattern}.
     */
    export type $BannerPattern_ = { assetId?: $ResourceLocation_, translationKey?: string,  } | [assetId?: $ResourceLocation_, translationKey?: string, ];
    export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider, $Container {
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        isEmpty(): boolean;
        getDisplayName(): $Component;
        /**
         * Removes a stack from the given slot and returns it.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getPage(): number;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        hasBook(): boolean;
        setPage(page: number): void;
        handler$gga000$amendments$createEditMenu(arg0: number, arg1: $Inventory, arg2: $Player, arg3: $CallbackInfoReturnable<any>): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        clearContent(): void;
        handler$gga000$amendments$setPage(arg0: number, arg1: $CallbackInfo): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getRedstoneSignal(): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        getBook(): $ItemStack;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_, player: $Player | null): void;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_): void;
        onBookItemRemove(): void;
        /**
         * Removes a stack from the given slot and returns it.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getContainerSize(): number;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        stopOpen(player: $Player): void;
        startOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item>): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        shouldCloseCurrentScreen(): boolean;
        setTransferCooldown(arg0: number): void;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        canReceiveTransferCooldown(): boolean;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        getBlock(level: $Level): $LevelBlock;
        clear(): void;
        self(): $Container;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        setChanged(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        isMutable(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Removes a stack from the given slot and returns it.
         */
        getStackInSlot(slot: number): $ItemStack;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        worldPosition: $BlockPos;
        static NUM_SLOTS: number;
        static DATA_PAGE: number;
        level: $Level;
        book: $ItemStack;
        static ATTACHMENTS_NBT_KEY: string;
        page: number;
        hasComparators: number;
        static SLOT_BOOK: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static NUM_DATA: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get displayName(): $Component;
        get redstoneSignal(): number;
        get containerSize(): number;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $BannerBlockEntity extends $BlockEntity implements $Nameable, $AccessorBannerBlockEntity {
        getName(): $Component;
        getItem(): $ItemStack;
        getCustomName(): $Component;
        fromItem(stack: $ItemStack_, color: $DyeColor_): void;
        getPatterns(): $BannerPatternLayers;
        getBaseColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        setName(arg0: $Component_): void;
        static MAX_PATTERNS: number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_, baseColor: $DyeColor_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get item(): $ItemStack;
        get customName(): $Component;
        get patterns(): $BannerPatternLayers;
        get baseColor(): $DyeColor;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get displayName(): $Component;
    }
    export class $Hopper {
        static SUCK_AABB: $AABB;
    }
    export interface $Hopper extends $Container {
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        getSuckAabb(): $AABB;
        isGridAligned(): boolean;
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get suckAabb(): $AABB;
        get gridAligned(): boolean;
    }
    export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container, $LithiumTransferConditionInventory {
        isEmpty(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        clearContent(): void;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getLastInteractedSlot(): number;
        stopOpen(player: $Player): void;
        startOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item>): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item): number;
        getMaxStackSize(stack: $ItemStack_): number;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        getBlock(level: $Level): $LevelBlock;
        clear(): void;
        self(): $Container;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        setChanged(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        isMutable(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        worldPosition: $BlockPos;
        static MAX_BOOKS_IN_STORAGE: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get containerSize(): number;
        get lastInteractedSlot(): number;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $ConduitBlockEntity extends $BlockEntity {
        isActive(): boolean;
        isHunting(): boolean;
        static clientTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        getActiveRotation(partialTick: number): number;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static serverTick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        worldPosition: $BlockPos;
        tickCount: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get active(): boolean;
        get hunting(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $ContainerOpenersCounter {
        onClose(level: $Level, pos: $BlockPos_, state: $BlockState_): void;
        onOpen(level: $Level, pos: $BlockPos_, state: $BlockState_): void;
        openerCountChanged(level: $Level, pos: $BlockPos_, state: $BlockState_, count: number, openCount: number): void;
        isOwnContainer(player: $Player): boolean;
        incrementOpeners(player: $Player, level: $Level, pos: $BlockPos_, state: $BlockState_): void;
        decrementOpeners(player: $Player, level: $Level, pos: $BlockPos_, state: $BlockState_): void;
        recheckOpeners(level: $Level, pos: $BlockPos_, state: $BlockState_): void;
        getOpenerCount(): number;
        constructor();
        get openerCount(): number;
    }
    export class $JigsawBlockEntity extends $BlockEntity {
        getName(): $ResourceLocation;
        setName(name: $ResourceLocation_): void;
        getPool(): $ResourceKey<$StructureTemplatePool>;
        getTarget(): $ResourceLocation;
        setTarget(name: $ResourceLocation_): void;
        generate(level: $ServerLevel, maxDepth: number, keepJigsaws: boolean): void;
        setPool(pool: $ResourceKey_<$StructureTemplatePool>): void;
        getJoint(): $JigsawBlockEntity$JointType;
        setJoint(joint: $JigsawBlockEntity$JointType_): void;
        getSelectionPriority(): number;
        setSelectionPriority(placementPriority: number): void;
        getPlacementPriority(): number;
        setPlacementPriority(placementPriority: number): void;
        getFinalState(): string;
        setFinalState(finalState: string): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static TARGET: string;
        level: $Level;
        static FINAL_STATE: string;
        static SELECTION_PRIORITY: string;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        static NAME: string;
        worldPosition: $BlockPos;
        static POOL: string;
        static PLACEMENT_PRIORITY: string;
        hasComparators: number;
        static JOINT: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $CalibratedSculkSensorBlockEntity$VibrationUser extends $SculkSensorBlockEntity$VibrationUser {
    }
    export class $BannerPatternLayers$Layer extends $Record {
        pattern(): $Holder<$BannerPattern>;
        color(): $DyeColor;
        description(): $MutableComponent;
        static CODEC: $Codec<$BannerPatternLayers$Layer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers$Layer>;
        constructor(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers$Layer}.
     */
    export type $BannerPatternLayers$Layer_ = { color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>,  } | [color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>, ];
    export class $DecoratedPotBlockEntity extends $BlockEntity implements $RandomizableContainer, $ContainerSingleItem$BlockContainerSingleItem {
        getDecorations(): $PotDecorations;
        getContainerBlockEntity(): $BlockEntity;
        static createDecoratedPotItem(decorations: $PotDecorations_): $ItemStack;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        getDirection(): $Direction;
        getPotAsItem(): $ItemStack;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(seed: number): void;
        setTheItem(item: $ItemStack_): void;
        getTheItem(): $ItemStack;
        wobble(style: $DecoratedPotBlockEntity$WobbleStyle_): void;
        splitTheItem(amount: number): $ItemStack;
        setFromItem(item: $ItemStack_): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        unpackLootTable(player: $Player | null): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        wrapOperation$efb000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        wrapOperation$efb000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        handler$efb000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        stopOpen(player: $Player): void;
        startOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item>): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        clearContent(): void;
        removeTheItem(): $ItemStack;
        setTransferCooldown(seed: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        getBlock(level: $Level): $LevelBlock;
        clear(): void;
        self(): $Container;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        setChanged(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        isMutable(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getStackInSlot(amount: number): $ItemStack;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        static TAG_SHERDS: string;
        lastWobbleStyle: $DecoratedPotBlockEntity$WobbleStyle;
        static TAG_ITEM: string;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static EVENT_POT_WOBBLES: number;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        wobbleStartedAtTick: number;
        hasComparators: number;
        lootTableSeed: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get decorations(): $PotDecorations;
        get containerBlockEntity(): $BlockEntity;
        get direction(): $Direction;
        get potAsItem(): $ItemStack;
        set fromItem(value: $ItemStack_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getListener(): $VibrationSystem$Listener;
        getVibrationUser(): $VibrationSystem$User;
        static tryGetPlayer(entity: $Entity | null): $ServerPlayer;
        getVibrationData(): $VibrationSystem$Data;
        tryRespond(level: $ServerLevel): void;
        tryShriek(level: $ServerLevel, player: $ServerPlayer | null): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $VibrationSystem$Listener;
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
    }
}
