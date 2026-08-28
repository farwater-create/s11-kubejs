import { $Codec } from "@package/com/mojang/serialization";
import { $ListTag, $CompoundTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $UUID, $List, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $BiConsumer_, $Predicate_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $CompoundContainerAccessor, $ContainerMixin } from "@package/net/caffeinemc/mods/lithium/mixin/block/hopper";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IMenuProviderExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StackedContentsCompatible, $MenuConstructor, $AbstractContainerMenu, $MenuConstructor_ } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $TransactionContext } from "@package/net/fabricmc/fabric/api/transfer/v1/transaction";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $RandomSupport$Seed128bit, $XoroshiroRandomSource } from "@package/net/minecraft/world/level/levelgen";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FabricScreenHandlerFactory } from "@package/net/fabricmc/fabric/api/screenhandler/v1";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player, $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $SpecialLogicInventory } from "@package/net/fabricmc/fabric/impl/transfer/item";
import { $LithiumTransferConditionInventory, $LithiumCooldownReceivingInventory } from "@package/net/caffeinemc/mods/lithium/api/inventory";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DoubleInventoryAccessor } from "@package/net/fabricmc/fabric/mixin/transfer";
import { $ContainerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as item from "@package/net/minecraft/world/item";
export * as level from "@package/net/minecraft/world/level";
export * as inventory from "@package/net/minecraft/world/inventory";
export * as entity from "@package/net/minecraft/world/entity";
export * as effect from "@package/net/minecraft/world/effect";
export * as damagesource from "@package/net/minecraft/world/damagesource";
export * as phys from "@package/net/minecraft/world/phys";
export * as ticks from "@package/net/minecraft/world/ticks";
export * as scores from "@package/net/minecraft/world/scores";
export * as food from "@package/net/minecraft/world/food";
export * as flag from "@package/net/minecraft/world/flag";

declare module "@package/net/minecraft/world" {
    export class $RandomSequences extends $SavedData {
        reset(sequence: $ResourceLocation_, seed: number, includeWorldSeed: boolean, includeSequenceId: boolean): void;
        reset(sequence: $ResourceLocation_): void;
        get(location: $ResourceLocation_): $RandomSource;
        static load(seed: number, arg1: $CompoundTag_): $RandomSequences;
        clear(): number;
        static factory(seed: number): $SavedData$Factory<$RandomSequences>;
        setSeedDefaults(salt: number, includeWorldSeed: boolean, includeSequenceId: boolean): void;
        forAllSequences(action: $BiConsumer_<$ResourceLocation, $RandomSequence>): void;
        constructor(seed: number);
    }
    export class $BossEvent$BossBarColor extends $Enum<$BossEvent$BossBarColor> {
        getName(): string;
        static values(): $BossEvent$BossBarColor[];
        static valueOf(name: string): $BossEvent$BossBarColor;
        static byName(name: string): $BossEvent$BossBarColor;
        getFormatting(): $ChatFormatting;
        static RED: $BossEvent$BossBarColor;
        static WHITE: $BossEvent$BossBarColor;
        static PINK: $BossEvent$BossBarColor;
        static BLUE: $BossEvent$BossBarColor;
        static YELLOW: $BossEvent$BossBarColor;
        static PURPLE: $BossEvent$BossBarColor;
        static GREEN: $BossEvent$BossBarColor;
        get formatting(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $BossEvent$BossBarColor}.
     */
    export type $BossEvent$BossBarColor_ = "pink" | "blue" | "red" | "green" | "yellow" | "purple" | "white";
    export class $DifficultyInstance {
        getDifficulty(): $Difficulty;
        getSpecialMultiplier(): number;
        getEffectiveDifficulty(): number;
        isHarderThan(difficulty: number): boolean;
        isHard(): boolean;
        constructor(base: $Difficulty_, levelTime: number, arg2: number, chunkInhabitedTime: number);
        get difficulty(): $Difficulty;
        get specialMultiplier(): number;
        get effectiveDifficulty(): number;
        get hard(): boolean;
    }
    export class $BossEvent$BossBarOverlay extends $Enum<$BossEvent$BossBarOverlay> {
        getName(): string;
        static values(): $BossEvent$BossBarOverlay[];
        static valueOf(name: string): $BossEvent$BossBarOverlay;
        static byName(name: string): $BossEvent$BossBarOverlay;
        static NOTCHED_6: $BossEvent$BossBarOverlay;
        static NOTCHED_12: $BossEvent$BossBarOverlay;
        static PROGRESS: $BossEvent$BossBarOverlay;
        static NOTCHED_20: $BossEvent$BossBarOverlay;
        static NOTCHED_10: $BossEvent$BossBarOverlay;
    }
    /**
     * Values that may be interpreted as {@link $BossEvent$BossBarOverlay}.
     */
    export type $BossEvent$BossBarOverlay_ = "progress" | "notched_6" | "notched_10" | "notched_12" | "notched_20";
    export class $InteractionResultHolder<T> {
        static fail<T>(type: T): $InteractionResultHolder<T>;
        getObject(): T;
        static consume<T>(type: T): $InteractionResultHolder<T>;
        static success<T>(type: T): $InteractionResultHolder<T>;
        getResult(): $InteractionResult;
        static pass<T>(type: T): $InteractionResultHolder<T>;
        static sidedSuccess<T>(object: T, isClientSide: boolean): $InteractionResultHolder<T>;
        constructor(result: $InteractionResult_, object: T);
        get object(): T;
        get result(): $InteractionResult;
    }
    export class $Nameable {
    }
    export interface $Nameable {
        getName(): $Component;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        getCustomName(): $Component;
        get name(): $Component;
        get displayName(): $Component;
        get customName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Nameable}.
     */
    export type $Nameable_ = (() => $Component_);
    export class $CompoundContainer implements $Container, $CompoundContainerAccessor, $DoubleInventoryAccessor {
        isEmpty(): boolean;
        /**
         * Return whether the given inventory is part of this large chest.
         */
        contains(inventory: $Container): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        stopOpen(player: $Player): void;
        startOpen(player: $Player): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(index: number, stack: $ItemStack_): boolean;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
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
        getMaxStackSize(stack: $ItemStack_): number;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        getBlock(level: $Level): $LevelBlock;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
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
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
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
        isItemValid(index: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
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
        getFirst(): $Container;
        getSecond(): $Container;
        fabric_getFirst(): $Container;
        fabric_getSecond(): $Container;
        constructor(container1: $Container, container2: $Container);
        get containerSize(): number;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
        get first(): $Container;
        get second(): $Container;
    }
    export class $RandomSequences$DirtyMarkingRandomSource implements $RandomSource {
        nextInt(min: number, max: number): number;
        nextIntBetweenInclusive(min: number, max: number): number;
        triangle(min: number, arg1: number): number;
        consumeCount(count: number): void;
    }
    export class $LockCode extends $Record {
        key(): string;
        addToTag(nbt: $CompoundTag_): void;
        static fromTag(nbt: $CompoundTag_): $LockCode;
        unlocksWith(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$LockCode>;
        static NO_LOCK: $LockCode;
        static TAG_LOCK: string;
        constructor(key: string);
    }
    /**
     * Values that may be interpreted as {@link $LockCode}.
     */
    export type $LockCode_ = { key?: string,  } | [key?: string, ];
    export class $SimpleContainer implements $Container, $StackedContentsCompatible, $SpecialLogicInventory {
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        canAddItem(stack: $ItemStack_): boolean;
        removeAllItems(): $List<$ItemStack>;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        redirect$gcp000$fabric_transfer_api_v1$fabric_redirectMarkDirty(arg0: $SimpleContainer): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        /**
         * Add a listener that will be notified when any item in this inventory is modified.
         */
        removeListener(listener: $ContainerListener_): void;
        addItem(stack: $ItemStack_): $ItemStack;
        /**
         * Add a listener that will be notified when any item in this inventory is modified.
         */
        addListener(listener: $ContainerListener_): void;
        createTag(levelRegistry: $HolderLookup$Provider): $ListTag;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        fillStackedContents(helper: $StackedContents): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        fromTag(tag: $ListTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        fabric_setSuppress(arg0: boolean): void;
        getItems(): $NonNullList<$ItemStack>;
        removeItemType(item: $Item, amount: number): $ItemStack;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
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
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        getBlock(level: $Level): $LevelBlock;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
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
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
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
        setStackInSlot(index: number, stack: $ItemStack_): void;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
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
        size: number;
        items: $NonNullList<$ItemStack>;
        constructor(size: number);
        constructor(...items: $ItemStack_[]);
        get containerSize(): number;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $Clearable {
        static tryClear(object: $Object | null): void;
    }
    export interface $Clearable {
        clearContent(): void;
    }
    /**
     * Values that may be interpreted as {@link $Clearable}.
     */
    export type $Clearable_ = (() => void);
    export class $TickRateManager {
        isFrozen(): boolean;
        tickrate(): number;
        millisecondsPerTick(): number;
        setFrozen(frozen: boolean): void;
        tick(): void;
        setFrozenTicksToRun(frozenTicksToRun: number): void;
        nanosecondsPerTick(): number;
        isEntityFrozen(entity: $Entity): boolean;
        runsNormally(): boolean;
        setTickRate(tickRate: number): void;
        isSteppingForward(): boolean;
        frozenTicksToRun(): number;
        static MIN_TICKRATE: number;
        runGameElements: boolean;
        constructor();
        set tickRate(value: number);
        get steppingForward(): boolean;
    }
    export class $ContainerHelper {
        static removeItem(stacks: $List_<$ItemStack_>, index: number, amount: number): $ItemStack;
        static takeItem(stacks: $List_<$ItemStack_>, index: number): $ItemStack;
        /**
         * Clears items from the inventory matching a predicate.
         * @return The amount of items cleared
         */
        static clearOrCountMatchingItems(container: $Container, itemPredicate: $Predicate_<$ItemStack>, maxItems: number, simulate: boolean): number;
        static clearOrCountMatchingItems(stack: $ItemStack_, itemPredicate: $Predicate_<$ItemStack>, maxItems: number, simulate: boolean): number;
        static saveAllItems(tag: $CompoundTag_, items: $NonNullList<$ItemStack_>, levelRegistry: $HolderLookup$Provider): $CompoundTag;
        static saveAllItems(tag: $CompoundTag_, items: $NonNullList<$ItemStack_>, alwaysPutTag: boolean, levelRegistry: $HolderLookup$Provider): $CompoundTag;
        static loadAllItems(tag: $CompoundTag_, items: $NonNullList<$ItemStack_>, levelRegistry: $HolderLookup$Provider): void;
        static TAG_ITEMS: string;
        constructor();
    }
    export class $Container {
        static stillValidBlockEntity(blockEntity: $BlockEntity, player: $Player): boolean;
        static stillValidBlockEntity(blockEntity: $BlockEntity, player: $Player, distance: number): boolean;
        static DEFAULT_DISTANCE_BUFFER: number;
    }
    export interface $Container extends $Clearable, $LithiumCooldownReceivingInventory, $ContainerMixin, $LithiumTransferConditionInventory, $ContainerKJS {
        isEmpty(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
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
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
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
        get empty(): boolean;
        get containerSize(): number;
    }
    export class $MenuProvider {
    }
    export interface $MenuProvider extends $MenuConstructor, $IMenuProviderExtension, $FabricScreenHandlerFactory {
        getDisplayName(): $Component;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        get displayName(): $Component;
    }
    export class $BossEvent {
        getName(): $Component;
        setName(name: $Component_): void;
        getId(): $UUID;
        setColor(color: $BossEvent$BossBarColor_): void;
        shouldCreateWorldFog(): boolean;
        getColor(): $BossEvent$BossBarColor;
        setPlayBossMusic(createFog: boolean): $BossEvent;
        setCreateWorldFog(createFog: boolean): $BossEvent;
        setOverlay(overlay: $BossEvent$BossBarOverlay_): void;
        getProgress(): number;
        getOverlay(): $BossEvent$BossBarOverlay;
        setDarkenScreen(createFog: boolean): $BossEvent;
        setProgress(progress: number): void;
        shouldDarkenScreen(): boolean;
        shouldPlayBossMusic(): boolean;
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        constructor(id: $UUID_, name: $Component_, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_);
        get id(): $UUID;
    }
    export class $WorldlyContainer {
    }
    export interface $WorldlyContainer extends $Container {
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        getSlotsForFace(side: $Direction_): number[];
    }
    export class $ContainerListener {
    }
    export interface $ContainerListener {
        /**
         * Called by `InventoryBasic.onInventoryChanged()` on an array that is never filled.
         */
        containerChanged(container: $Container): void;
    }
    /**
     * Values that may be interpreted as {@link $ContainerListener}.
     */
    export type $ContainerListener_ = ((arg0: $Container) => void);
    export class $InteractionResult extends $Enum<$InteractionResult> {
        static values(): $InteractionResult[];
        static valueOf(arg0: string): $InteractionResult;
        static sidedSuccess(isClientSide: boolean): $InteractionResult;
        consumesAction(): boolean;
        shouldSwing(): boolean;
        indicateItemUse(): boolean;
        static SUCCESS: $InteractionResult;
        static PASS: $InteractionResult;
        static CONSUME_PARTIAL: $InteractionResult;
        static SUCCESS_NO_ITEM_USED: $InteractionResult;
        static CONSUME: $InteractionResult;
        static FAIL: $InteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $InteractionResult}.
     */
    export type $InteractionResult_ = "success" | "success_no_item_used" | "consume" | "consume_partial" | "pass" | "fail";
    export class $RandomSequence {
        random(): $RandomSource;
        static seedForKey(key: $ResourceLocation_): $RandomSupport$Seed128bit;
        static CODEC: $Codec<$RandomSequence>;
        constructor(seed: number, arg1: ($ResourceLocation_) | undefined);
        constructor(seed: number, arg1: $ResourceLocation_);
        constructor(source: $XoroshiroRandomSource);
    }
    export class $WorldlyContainerHolder {
    }
    export interface $WorldlyContainerHolder {
        getContainer(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_): $WorldlyContainer;
    }
    /**
     * Values that may be interpreted as {@link $WorldlyContainerHolder}.
     */
    export type $WorldlyContainerHolder_ = ((arg0: $BlockState, arg1: $LevelAccessor, arg2: $BlockPos) => $WorldlyContainer);
    export class $InteractionHand extends $Enum<$InteractionHand> {
        static values(): $InteractionHand[];
        static valueOf(arg0: string): $InteractionHand;
        static MAIN_HAND: $InteractionHand;
        static OFF_HAND: $InteractionHand;
    }
    /**
     * Values that may be interpreted as {@link $InteractionHand}.
     */
    export type $InteractionHand_ = "main_hand" | "off_hand";
    export class $Containers {
        static dropItemStack(level: $Level, x: number, arg2: number, y: number, arg4: $ItemStack_): void;
        static dropContents(level: $Level, pos: $BlockPos_, inventory: $Container): void;
        static dropContents(level: $Level, pos: $BlockPos_, stackList: $NonNullList<$ItemStack_>): void;
        static dropContents(level: $Level, entityAt: $Entity, inventory: $Container): void;
        static dropContentsOnDestroy(state: $BlockState_, newState: $BlockState_, level: $Level, pos: $BlockPos_): void;
        constructor();
    }
    export class $RandomizableContainer {
        static setBlockEntityLootTable(level: $BlockGetter, random: $RandomSource, ps: $BlockPos_, lootTable: $ResourceKey_<$LootTable>): void;
        static LOOT_TABLE_SEED_TAG: string;
        static LOOT_TABLE_TAG: string;
    }
    export interface $RandomizableContainer extends $Container {
        getLevel(): $Level;
        getBlockPos(): $BlockPos;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        unpackLootTable(player: $Player | null): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setLootTableSeed(seed: number): void;
        wrapOperation$efb000$lootr$tryLoadLootTable(arg0: $RandomizableContainer, arg1: number, arg2: $Operation_<any>): void;
        wrapOperation$efb000$lootr$setLootTable(arg0: $RandomizableContainer, arg1: $ResourceKey_<any>, arg2: $Operation_<any>): void;
        handler$efb000$lootr$unpackLootTable(arg0: $Player, arg1: $CallbackInfo): void;
        get level(): $Level;
        get blockPos(): $BlockPos;
    }
    export class $SimpleMenuProvider implements $MenuProvider {
        getDisplayName(): $Component;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * @return `true` if the existing container should be closed on the client side when opening a new one, `false` otherwise
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * @return `true` if the existing container should be closed on the client side when opening a new one, `false` otherwise
         */
        shouldCloseCurrentScreen(): boolean;
        menuConstructor: $MenuConstructor;
        constructor(menuConstructor: $MenuConstructor_, title: $Component_);
        get displayName(): $Component;
    }
    export class $ItemInteractionResult extends $Enum<$ItemInteractionResult> {
        static values(): $ItemInteractionResult[];
        static valueOf(arg0: string): $ItemInteractionResult;
        result(): $InteractionResult;
        static sidedSuccess(clientSide: boolean): $ItemInteractionResult;
        consumesAction(): boolean;
        static SUCCESS: $ItemInteractionResult;
        static SKIP_DEFAULT_BLOCK_INTERACTION: $ItemInteractionResult;
        static CONSUME_PARTIAL: $ItemInteractionResult;
        static CONSUME: $ItemInteractionResult;
        static PASS_TO_DEFAULT_BLOCK_INTERACTION: $ItemInteractionResult;
        static FAIL: $ItemInteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $ItemInteractionResult}.
     */
    export type $ItemInteractionResult_ = "success" | "consume" | "consume_partial" | "pass_to_default_block_interaction" | "skip_default_block_interaction" | "fail";
    export class $Difficulty extends $Enum<$Difficulty> implements $StringRepresentable {
        static values(): $Difficulty[];
        static valueOf(name: string): $Difficulty;
        getKey(): string;
        getId(): number;
        getDisplayName(): $Component;
        getInfo(): $Component;
        static byName(name: string): $Difficulty;
        getSerializedName(): string;
        static byId(id: number): $Difficulty;
        getRemappedEnumConstantName(): string;
        static EASY: $Difficulty;
        static CODEC: $StringRepresentable$EnumCodec<$Difficulty>;
        static PEACEFUL: $Difficulty;
        static HARD: $Difficulty;
        static NORMAL: $Difficulty;
        get key(): string;
        get id(): number;
        get displayName(): $Component;
        get info(): $Component;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Difficulty}.
     */
    export type $Difficulty_ = "peaceful" | "easy" | "normal" | "hard";
}
