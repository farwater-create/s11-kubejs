import { $DynamicOps, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $IClientFluidTypeExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $Unit_ } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Lazy } from "@package/net/neoforged/neoforge/common/util";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { RegistryTypes, DataComponentTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $DataComponentType, $PatchedDataComponentMap, $DataComponentHolder_, $DataComponentHolder, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $SoundAction, $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $Item, $Rarity, $Rarity_, $Item$TooltipContext, $TooltipFlag, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $LiquidBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $FluidStackKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $JsonElement } from "@package/com/google/gson";
import { $FluidInteractionRegistryAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Map, $Set, $List, $Map_, $List_ } from "@package/java/util";
import { $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $IFluidHandler$FluidAction_, $IFluidHandler, $IFluidHandlerItem } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_, $Consumer_, $Predicate_, $Function_, $UnaryOperator_, $BiFunction_ } from "@package/java/util/function";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $Record, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockAndTintGetter, $LevelReader, $BlockGetter, $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Event } from "@package/net/neoforged/bus/api";
import { $FluidState, $Fluid_, $FlowingFluid, $Fluid } from "@package/net/minecraft/world/level/material";
import { $DefaultDispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Stream } from "@package/java/util/stream";
import { $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ComponentFunctions, $MutableDataComponentHolderFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as capability from "@package/net/neoforged/neoforge/fluids/capability";
export * as crafting from "@package/net/neoforged/neoforge/fluids/crafting";

declare module "@package/net/neoforged/neoforge/fluids" {
    /**
     * Event to register `CauldronFluidContent` for modded cauldrons.
     * 
     * Registering cauldrons is done by calling `CauldronFluidContent#register`
     * and allows all cauldrons registered in this way to interoperate with each other
     * when accessed via the `FluidHandler#BLOCK` capability.
     */
    export class $RegisterCauldronFluidContentEvent extends $Event implements $IModBusEvent {
        /**
         * Register a new cauldron, allowing it to be filled and emptied through the standard capability.
         * In both cases, return the content of the cauldron, either the existing one, or the newly registered one.
         * 
         * If the block is not a subclass of `AbstractCauldronBlock`,
         * `BlockBehaviour#onPlace(BlockState, Level, BlockPos, BlockState, boolean)`
         * and `BlockBehaviour#onRemove(BlockState, Level, BlockPos, BlockState, boolean)`
         * must be overridden to invalidate capabilities when the block changes!
         * See how NeoForge patches `AbstractCauldronBlock` for reference.
         */
        register(block: $Block, fluid: $Fluid, totalAmount: number, levelProperty: $IntegerProperty): void;
    }
    export class $FluidInteractionRegistry$InteractionInformation extends $Record {
        predicate(): $FluidInteractionRegistry$HasFluidInteraction;
        interaction(): $FluidInteractionRegistry$FluidInteraction;
        constructor(predicate: $FluidInteractionRegistry$HasFluidInteraction_, interaction: $FluidInteractionRegistry$FluidInteraction_);
        constructor(arg0: $FluidInteractionRegistry$HasFluidInteraction_, arg1: $Function_<$FluidState, $BlockState>);
        constructor(arg0: $FluidType, arg1: $Function_<$FluidState, $BlockState>);
        constructor(arg0: $FluidInteractionRegistry$HasFluidInteraction_, arg1: $BlockState_);
        constructor(arg0: $FluidType, arg1: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $FluidInteractionRegistry$InteractionInformation}.
     */
    export type $FluidInteractionRegistry$InteractionInformation_ = { predicate?: $FluidInteractionRegistry$HasFluidInteraction_, interaction?: $FluidInteractionRegistry$FluidInteraction_,  } | [predicate?: $FluidInteractionRegistry$HasFluidInteraction_, interaction?: $FluidInteractionRegistry$FluidInteraction_, ];
    /**
     * Stock data component class to hold a `FluidStack`.
     * 
     * A corresponding `DataComponentType` must be registered to use this class.
     */
    export class $SimpleFluidContent implements $DataComponentHolder {
        static copyOf(fluidStack: $FluidStack_): $SimpleFluidContent;
        isEmpty(): boolean;
        matches(other: $FluidStack_): boolean;
        copy(): $FluidStack;
        is(fluidType: $FluidType): boolean;
        is(holders: $HolderSet_<$Fluid>): boolean;
        is(tag: $TagKey_<$Fluid>): boolean;
        is(fluid: $Fluid): boolean;
        is(predicate: $Predicate_<$Holder<$Fluid>>): boolean;
        is(holder: $Holder_<$Fluid>): boolean;
        getFluid(): $Fluid;
        getFluidHolder(): $Holder<$Fluid>;
        getFluidType(): $FluidType;
        getAmount(): number;
        isSameFluid(other: $FluidStack_): boolean;
        isSameFluidSameComponents(content: $SimpleFluidContent): boolean;
        isSameFluidSameComponents(other: $FluidStack_): boolean;
        getComponents(): $DataComponentMap;
        get<T>(component: $DataComponentType<T>): T;
        getOrDefault<T>(component: $DataComponentType<T>, defaultValue: T): T;
        has(component: $DataComponentType<never>): boolean;
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
        has(type: $Supplier_<$DataComponentType<never>>): boolean;
        addToTooltip<T extends $TooltipProvider>(type: $DataComponentType<T>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        addToTooltip<T extends $TooltipProvider>(type: $Supplier_<$DataComponentType<T>>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        static CODEC: $Codec<$SimpleFluidContent>;
        static EMPTY: $SimpleFluidContent;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SimpleFluidContent>;
        get empty(): boolean;
        get fluid(): $Fluid;
        get fluidHolder(): $Holder<$Fluid>;
        get fluidType(): $FluidType;
        get amount(): number;
        get components(): $DataComponentMap;
    }
    /**
     * An interface which performs an interaction for a source.
     */
    export class $FluidInteractionRegistry$FluidInteraction {
    }
    export interface $FluidInteractionRegistry$FluidInteraction {
        /**
         * Performs the interaction between the source and the surrounding data.
         */
        interact(level: $Level, currentPos: $BlockPos_, relativePos: $BlockPos_, currentState: $FluidState): void;
    }
    /**
     * Values that may be interpreted as {@link $FluidInteractionRegistry$FluidInteraction}.
     */
    export type $FluidInteractionRegistry$FluidInteraction_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockPos, arg3: $FluidState) => void);
    export class $FluidUtil {
        /**
         * ItemStack version of `#tryPlaceFluid(Player, Level, InteractionHand, BlockPos, IFluidHandler, FluidStack)`.
         * Use the returned `FluidActionResult` to update the container ItemStack.
         */
        static tryPlaceFluid(player: $Player, level: $Level, hand: $InteractionHand_, pos: $BlockPos_, container: $ItemStack_, resource: $FluidStack_): $FluidActionResult;
        /**
         * Tries to place a fluid resource into the level as a block and drains the fluidSource.
         * Makes a fluid emptying or vaporization sound when successful.
         * Honors the amount of fluid contained by the used container.
         * Checks if water-like fluids should vaporize like in the nether.
         * 
         * Modeled after `BucketItem#emptyContents(Player, Level, BlockPos, BlockHitResult)`
         */
        static tryPlaceFluid(player: $Player, level: $Level, hand: $InteractionHand_, pos: $BlockPos_, fluidSource: $IFluidHandler, resource: $FluidStack_): boolean;
        /**
         * Fill a destination fluid handler from a source fluid handler with a max amount.
         * To specify a fluid to transfer instead of max amount, use `#tryFluidTransfer(IFluidHandler, IFluidHandler, FluidStack, boolean)`
         * To transfer as much as possible, use `Integer#MAX_VALUE` for maxAmount.
         */
        static tryFluidTransfer(fluidDestination: $IFluidHandler, fluidSource: $IFluidHandler, maxAmount: number, doTransfer: boolean): $FluidStack;
        /**
         * Fill a destination fluid handler from a source fluid handler using a specific fluid.
         * To specify a max amount to transfer instead of specific fluid, use `#tryFluidTransfer(IFluidHandler, IFluidHandler, int, boolean)`
         * To transfer as much as possible, use `Integer#MAX_VALUE` for resource.amount.
         */
        static tryFluidTransfer(fluidDestination: $IFluidHandler, fluidSource: $IFluidHandler, resource: $FluidStack_, doTransfer: boolean): $FluidStack;
        static getFilledBucket(fluidStack: $FluidStack_): $ItemStack;
        /**
         * Fill a container from the given fluidSource.
         */
        static tryEmptyContainer(container: $ItemStack_, fluidSource: $IFluidHandler, maxAmount: number, player: $Player, doFill: boolean): $FluidActionResult;
        /**
         * Fill a container from the given fluidSource.
         */
        static tryFillContainer(container: $ItemStack_, fluidSource: $IFluidHandler, maxAmount: number, player: $Player, doFill: boolean): $FluidActionResult;
        /**
         * Helper method to get an `IFluidHandlerItem` for an itemStack.
         * 
         * The itemStack passed in here WILL be modified, the `IFluidHandlerItem` acts on it directly.
         * Some `IFluidHandlerItem` will change the item entirely, always use `IFluidHandlerItem#getContainer()`
         * after using the fluid handler to get the resulting item back.
         * 
         * Note that the itemStack MUST have a stackSize of 1 if you want to fill or drain it.
         * You can't fill or drain multiple items at once, if you do then liquid is multiplied or destroyed.
         * 
         * Vanilla buckets will be converted to universal buckets if they are enabled.
         */
        static getFluidHandler(itemStack: $ItemStack_): ($IFluidHandlerItem) | undefined;
        /**
         * Helper method to get an IFluidHandler for at a block position.
         */
        static getFluidHandler(level: $Level, blockPos: $BlockPos_, side: $Direction_): ($IFluidHandler) | undefined;
        /**
         * Takes an Fluid Container Item and tries to fill it from the given tank.
         * If the player is in creative mode, the container will not be modified on success, and no additional items created.
         * If the input itemstack has a stacksize > 1 it will stow the filled container in the given inventory.
         * If the inventory does not accept it, it will be given to the player or dropped at the players feet.
         * If player is null in this case, the action will be aborted.
         */
        static tryEmptyContainerAndStow(container: $ItemStack_, fluidSource: $IFluidHandler, inventory: $IItemHandler, maxAmount: number, player: $Player, doFill: boolean): $FluidActionResult;
        /**
         * Takes an Fluid Container Item and tries to fill it from the given tank.
         * If the player is in creative mode, the container will not be modified on success, and no additional items created.
         * If the input itemstack has a stacksize > 1 it will stow the filled container in the given inventory.
         * If the inventory does not accept it, it will be given to the player or dropped at the players feet.
         * If player is null in this case, the action will be aborted.
         */
        static tryFillContainerAndStow(container: $ItemStack_, fluidSource: $IFluidHandler, inventory: $IItemHandler, maxAmount: number, player: $Player, doFill: boolean): $FluidActionResult;
        /**
         * Helper method to get an `IFluidHandlerItem` for an itemStack.
         * 
         * The itemStack passed in here WILL be modified, the `IFluidHandlerItem` acts on it directly.
         * Some `IFluidHandlerItem` will change the item entirely, always use `IFluidHandlerItem#getContainer()`
         * after using the fluid handler to get the resulting item back.
         * 
         * Note that the itemStack MUST have a stackSize of 1 if you want to fill or drain it.
         * You can't fill or drain multiple items at once, if you do then liquid is multiplied or destroyed.
         * 
         * Vanilla buckets will be converted to universal buckets if they are enabled.
         */
        static getFluidContained(itemStack: $ItemStack_): ($FluidStack) | undefined;
        /**
         * Used to handle the common case of a player holding a fluid item and right-clicking on a fluid handler.
         * First it tries to fill the item from the handler,
         * if that action fails then it tries to drain the item into the handler.
         * Automatically updates the item in the player's hand and stashes any extra items created.
         */
        static interactWithFluidHandler(player: $Player, hand: $InteractionHand_, handler: $IFluidHandler): boolean;
        /**
         * Used to handle the common case of a player holding a fluid item and right-clicking on a fluid handler block.
         * First it tries to fill the item from the block,
         * if that action fails then it tries to drain the item into the block.
         * Automatically updates the item in the player's hand and stashes any extra items created.
         */
        static interactWithFluidHandler(player: $Player, hand: $InteractionHand_, level: $Level, pos: $BlockPos_, side: $Direction_): boolean;
        /**
         * Destroys a block when a fluid is placed in the same position.
         * Modeled after `BucketItem#emptyContents(Player, Level, BlockPos, BlockHitResult)`
         */
        static destroyBlockOnFluidPlacement(level: $Level, pos: $BlockPos_): void;
        /**
         * Attempts to pick up a fluid in the level and put it in an empty container item.
         */
        static tryPickUpFluid(emptyContainer: $ItemStack_, playerIn: $Player, level: $Level, pos: $BlockPos_, side: $Direction_): $FluidActionResult;
    }
    /**
     * An interface which tests whether a source fluid can interact with its
     * surroundings.
     */
    export class $FluidInteractionRegistry$HasFluidInteraction {
    }
    export interface $FluidInteractionRegistry$HasFluidInteraction {
        /**
         * Returns whether the interaction can occur.
         */
        test(level: $Level, currentPos: $BlockPos_, relativePos: $BlockPos_, currentState: $FluidState): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FluidInteractionRegistry$HasFluidInteraction}.
     */
    export type $FluidInteractionRegistry$HasFluidInteraction_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockPos, arg3: $FluidState) => boolean);
    export class $FluidType$DripstoneDripInfo extends $Record {
        filledCauldron(): $Block;
        dripParticle(): $ParticleOptions;
        chance(): number;
        constructor(chance: number, dripParticle: $ParticleOptions_, filledCauldron: $Block);
    }
    /**
     * Values that may be interpreted as {@link $FluidType$DripstoneDripInfo}.
     */
    export type $FluidType$DripstoneDripInfo_ = { filledCauldron?: $Block, dripParticle?: $ParticleOptions_, chance?: number,  } | [filledCauldron?: $Block, dripParticle?: $ParticleOptions_, chance?: number, ];
    /**
     * `ItemStack` equivalent for fluids.
     * The main difference is that a fluid stack is always required to have an amount, while an item stack defaults to 1.
     * Another difference is that the component prototype of a fluid stack is currently always empty, while an item stack gets its component prototype from the item.
     * 
     * Most methods in this class are adapted from `ItemStack`.
     */
    export class $FluidStack implements $MutableDataComponentHolder, $FluidStackKJS {
        isEmpty(): boolean;
        /**
         * Checks if the two fluid stacks are equal. This checks the fluid, amount, and components.
         */
        static matches(first: $FluidStack_, second: $FluidStack_): boolean;
        /**
         * Splits off a stack of the given amount of this stack and reduces this stack by the amount.
         */
        split(amount: number): $FluidStack;
        /**
         * Saves this stack to a tag, directly writing the keys into the passed tag.
         */
        save(lookupProvider: $HolderLookup$Provider, prefix: $Tag_): $Tag;
        /**
         * Saves this stack to a new tag.
         */
        save(lookupProvider: $HolderLookup$Provider): $Tag;
        /**
         * Tries to parse a fluid stack. Empty stacks cannot be parsed with this method.
         */
        static parse(lookupProvider: $HolderLookup$Provider, tag: $Tag_): ($FluidStack) | undefined;
        /**
         * Creates a copy of this stack with `0` amount.
         */
        copy(): $FluidStack;
        is(tag: $TagKey_<$Fluid>): boolean;
        is(fluid: $Fluid): boolean;
        is(holderPredicate: $Predicate_<$Holder<$Fluid>>): boolean;
        is(holder: $Holder_<$Fluid>): boolean;
        is(holderSet: $HolderSet_<$Fluid>): boolean;
        /**
         * Check if the fluid type of this stack is equal to the given fluid type.
         */
        is(fluidType: $FluidType): boolean;
        /**
         * Sets the amount of this stack.
         */
        grow(amount: number): void;
        /**
         * @deprecated
         * Returns the hover name of this stack.
         */
        getDisplayName(): $Component;
        /**
         * Returns the fluid in this stack, or `Fluids#EMPTY` if this stack is empty.
         */
        getFluid(): $Fluid;
        /**
         * Creates a copy of this stack with `0` amount.
         */
        copyAndClear(): $FluidStack;
        /**
         * Sets the amount of this stack.
         */
        setAmount(amount: number): void;
        /**
         * @deprecated
         * Determines if the fluid and the components are equal. This does not check amounts.
         */
        containsFluid(other: $FluidStack_): boolean;
        /**
         * @deprecated
         * Determines if the FluidIDs and components are equal compared to a container item stack. This does not check amounts.
         */
        isFluidEqual(other: $ItemStack_): boolean;
        /**
         * @deprecated
         * Determines if the fluid and the components are equal. This does not check amounts.
         */
        isFluidEqual(other: $FluidStack_): boolean;
        getFluidHolder(): $Holder<$Fluid>;
        /**
         * A standard codec for fluid stacks that always deserializes with a fixed amount,
         * and does not accept empty stacks.
         * 
         * Fluid equivalent of `ItemStack#SINGLE_ITEM_CODEC`.
         */
        static fixedAmountCodec(amount: number): $Codec<$FluidStack>;
        /**
         * Sets the amount of this stack.
         */
        limitSize(amount: number): void;
        /**
         * Sets the amount of this stack.
         */
        shrink(amount: number): void;
        isComponentsPatchEmpty(): boolean;
        /**
         * Returns the fluid type of this stack.
         */
        getFluidType(): $FluidType;
        /**
         * Returns the hover name of this stack.
         */
        getHoverName(): $Component;
        /**
         * Returns the description id of this stack.
         */
        getDescriptionId(): string;
        getTags(): $Stream<$TagKey<$Fluid>>;
        /**
         * Returns the amount of this stack.
         */
        getAmount(): number;
        /**
         * Checks if the two fluid stacks are equal. This checks the fluid, amount, and components.
         */
        static isSameFluid(first: $FluidStack_, second: $FluidStack_): boolean;
        /**
         * Splits off a stack of the given amount of this stack and reduces this stack by the amount.
         */
        copyWithAmount(amount: number): $FluidStack;
        static lenientOtionalFieldOf(fieldName: string): $MapCodec<$FluidStack>;
        /**
         * Hashes the fluid and components of this stack, ignoring the amount.
         */
        static hashFluidAndComponents(stack: $FluidStack_): number;
        /**
         * @deprecated
         * Checks if the two fluid stacks are equal. This checks the fluid, amount, and components.
         */
        static areFluidStackTagsEqual(first: $FluidStack_, second: $FluidStack_): boolean;
        /**
         * @deprecated
         * Determines if the fluid and the components are equal. This does not check amounts.
         */
        isFluidStackIdentical(other: $FluidStack_): boolean;
        /**
         * Checks if the two fluid stacks are equal. This checks the fluid, amount, and components.
         */
        static isSameFluidSameComponents(first: $FluidStack_, second: $FluidStack_): boolean;
        getComponents(): $PatchedDataComponentMap;
        /**
         * Saves this stack to a new tag.
         */
        saveOptional(lookupProvider: $HolderLookup$Provider): $Tag;
        /**
         * @deprecated
         * Returns the description id of this stack.
         */
        getTranslationKey(): string;
        /**
         * Tries to parse a fluid stack, defaulting to `#EMPTY` on parsing failure.
         */
        static parseOptional(lookupProvider: $HolderLookup$Provider, tag: $CompoundTag_): $FluidStack;
        getComponentsPatch(): $DataComponentPatch;
        update<T>(arg0: $DataComponentType<T>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T, U>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        update<T, U>(arg0: $DataComponentType<T>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $Supplier_<$DataComponentType<never>>[]): void;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $DataComponentType<never>[]): void;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        kjs$isEmpty(): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getCodec(): $Codec<never>;
        /**
         * Determines if the fluid and the components are equal. This does not check amounts.
         */
        kjs$equalsIgnoringCount(other: $FluidStack_): boolean;
        /**
         * Returns the description id of this stack.
         */
        kjs$getId(): string;
        kjs$copy(amount: number): $FluidLike;
        /**
         * Returns the fluid in this stack, or `Fluids#EMPTY` if this stack is empty.
         */
        kjs$getFluid(): $Fluid;
        /**
         * Returns the amount of this stack.
         */
        kjs$getAmount(): number;
        /**
         * Returns the description id of this stack.
         */
        kjs$getMod(): string;
        kjs$getKey(): $ResourceKey<$Fluid>;
        /**
         * Creates a copy of this stack with `0` amount.
         */
        kjs$self(): $FluidStack;
        kjs$getIdLocation(): $ResourceLocation;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        kjs$getRegistry(): $Registry<$Fluid>;
        kjs$asHolder(): $Holder<$Fluid>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        has(component: $DataComponentType<never>): boolean;
        getComponentHolder(): $MutableDataComponentHolder;
        getComponentMap(): $DataComponentMap;
        patch(components: $DataComponentPatch_): $MutableDataComponentHolderFunctions;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        hasTag(tag: $ResourceLocation_): boolean;
        getTagKeys(): $List<$TagKey<$Fluid>>;
        getTags(): $List<$ResourceLocation>;
        has(type: $Supplier_<$DataComponentType<never>>): boolean;
        addToTooltip<T extends $TooltipProvider>(type: $DataComponentType<T>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        addToTooltip<T extends $TooltipProvider>(type: $Supplier_<$DataComponentType<T>>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        getComponentString(): string;
        setTooltipHidden(): void;
        setGlintOverride(override: boolean): void;
        resetComponents(): $ComponentFunctions;
        /**
         * Sets the amount of this stack.
         */
        setCustomModelData(amount: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setPotionContents(contents: $PotionContents_): void;
        setAdditionalTooltipHidden(): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        remove(type: $DataComponentType<never>): $ComponentFunctions;
        setCustomName(name: $Component_): void;
        /**
         * Returns the hover name of this stack.
         */
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>): void;
        setBaseColor(color: $DyeColor_): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        setLockCode(lock: string): void;
        getCustomData(): $CompoundTag;
        setUnit(component: $DataComponentType<$Unit_>): $ComponentFunctions;
        setProfile(profile: $GameProfile): void;
        setProfile(name: string, uuid: $UUID_): void;
        setDyedColor(color: $KubeColor_): void;
        setCustomData(tag: $CompoundTag_): void;
        setRarity(rarity: $Rarity_): void;
        setEntityData(tag: $CompoundTag_): void;
        static CODEC: $Codec<$FluidStack>;
        static FLUID_NON_EMPTY_CODEC: $Codec<$Holder<$Fluid>>;
        static OPTIONAL_CODEC: $Codec<$FluidStack>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidStack>;
        static EMPTY: $FluidStack;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidStack>;
        constructor(fluid: $Holder_<$Fluid>, amount: number);
        constructor(fluid: $Fluid, amount: number);
        constructor(fluid: $Holder_<$Fluid>, amount: number, patch: $DataComponentPatch_);
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get empty(): boolean;
        get displayName(): $Component;
        get fluid(): $Fluid;
        get fluidHolder(): $Holder<$Fluid>;
        get componentsPatchEmpty(): boolean;
        get fluidType(): $FluidType;
        get hoverName(): $Component;
        get descriptionId(): string;
        get components(): $PatchedDataComponentMap;
        get translationKey(): string;
        get componentsPatch(): $DataComponentPatch;
        get codec(): $Codec<never>;
        get componentHolder(): $MutableDataComponentHolder;
        get componentMap(): $DataComponentMap;
        get tagKeys(): $List<$TagKey<$Fluid>>;
        get componentString(): string;
        set glintOverride(value: boolean);
        set customModelData(value: number);
        set potionContents(value: $PotionContents_);
        set dyedColorWithTooltip(value: $KubeColor_);
        set blockStateProperties(value: $Map_<string, string>);
        set baseColor(value: $DyeColor_);
        set potionId(value: $Holder_<$Potion>);
        set lockCode(value: string);
        set unit(value: $DataComponentType<$Unit_>);
        set dyedColor(value: $KubeColor_);
        set rarity(value: $Rarity_);
        set entityData(value: $CompoundTag_);
    }
    /**
     * Values that may be interpreted as {@link $FluidStack}.
     */
    export type $FluidStack_ = $Fluid_ | "-" | { fluid: RegistryTypes.Fluid, amount?: number,  };
    /**
     * Base implementation of a `FlowingFluid` for mods to use.
     */
    export class $BaseFlowingFluid extends $FlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
    }
    /**
     * This interface represents a Fluid Tank. IT IS NOT REQUIRED but is provided for convenience.
     * You are free to handle Fluids in any way that you wish - this is simply an easy default way.
     * DO NOT ASSUME that these objects are used internally in all cases.
     */
    export class $IFluidTank {
    }
    export interface $IFluidTank {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getCapacity(): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getFluid(): $FluidStack;
        isFluidValid(stack: $FluidStack_): boolean;
        getFluidAmount(): number;
        get capacity(): number;
        get fluid(): $FluidStack;
        get fluidAmount(): number;
    }
    /**
     * A definition of common attributes, properties, and methods that is applied
     * to a `Fluid`. This is used to link a flowing and source fluid together
     * without relying on tags. Most accessors do not correlate to in-game features;
     * they are provided for mods to take advantage of.
     * 
     * Accessors are typically implemented in a method call chain. As such, it
     * can provide a general implementation while more specific implementations
     * can be implemented by overriding methods further in the call chain (on fluids,
     * entities, etc.).
     */
    export class $FluidType {
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(state: $FluidState, entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns the component representing the name of the fluid type.
         */
        getDescription(stack: $FluidStack_): $Component;
        /**
         * Returns the component representing the name of the fluid type.
         */
        getDescription(): $Component;
        /**
         * Returns the rarity of the fluid.
         * 
         * Note: If not specified, the rarity of the fluid is `Rarity#COMMON`.
         */
        getRarity(stack: $FluidStack_): $Rarity;
        /**
         * Returns the rarity of the fluid.
         * 
         * Note: If not specified, the rarity of the fluid is `Rarity#COMMON`.
         */
        getRarity(): $Rarity;
        /**
         * Performs an action when a fluid can be vaporized when placed into a level.
         * 
         * Note: The fluid will already have been drained from the stack.
         */
        onVaporize(player: $Player, level: $Level, pos: $BlockPos_, stack: $FluidStack_): void;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getDensity(stack: $FluidStack_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getDensity(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         * 
         * Implementation: This is used by the bucket model to determine whether the fluid
         * should render full-bright when `applyFluidLuminosity` is `true`.
         */
        getDensity(): number;
        /**
         * Returns the bucket containing the fluid.
         */
        getBucket(stack: $FluidStack_): $ItemStack;
        /**
         * Returns whether the fluid can push an entity.
         */
        canExtinguish(entity: $Entity): boolean;
        /**
         * Returns whether the block can be extinguished by this fluid.
         */
        canExtinguish(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns how much the velocity of the fluid should be scaled by
         * when applied to an entity.
         */
        motionScale(entity: $Entity): number;
        /**
         * Returns whether the fluid can push an entity.
         */
        canPushEntity(entity: $Entity): boolean;
        /**
         * Returns the identifier representing the name of the fluid.
         * If no identifier was specified, then the identifier will be defaulted
         * to `fluid_type..`.
         */
        getDescriptionId(stack: $FluidStack_): string;
        /**
         * Returns the identifier representing the name of the fluid type.
         * If no identifier was specified, then the identifier will be defaulted
         * to `fluid_type..`.
         */
        getDescriptionId(): string;
        /**
         * Returns a sound to play when a certain action is performed at a
         * position. If no sound is present, then the sound will be `null`.
         */
        getSound(player: $Player, getter: $BlockGetter, pos: $BlockPos_, action: $SoundAction): $SoundEvent;
        /**
         * Returns a sound to play when a certain action is performed. If no
         * sound is present, then the sound will be `null`.
         */
        getSound(action: $SoundAction): $SoundEvent;
        /**
         * Returns a sound to play when a certain action is performed by the
         * entity in the fluid. If no sound is present, then the sound will be
         * `null`.
         */
        getSound(entity: $Entity, action: $SoundAction): $SoundEvent;
        /**
         * Returns a sound to play when a certain action is performed. If no
         * sound is present, then the sound will be `null`.
         */
        getSound(stack: $FluidStack_, action: $SoundAction): $SoundEvent;
        /**
         * Returns whether the fluid can push an entity.
         */
        canSwim(entity: $Entity): boolean;
        /**
         * Returns whether the entity can drown in the fluid.
         */
        canDrownIn(entity: $LivingEntity): boolean;
        /**
         * Returns whether the fluid can create a source.
         */
        canHydrate(stack: $FluidStack_): boolean;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canHydrate(entity: $Entity): boolean;
        /**
         * Returns whether the fluid type represents air.
         */
        isVanilla(): boolean;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Returns the associated `BlockState` for a `FluidState`.
         */
        getBlockForFluidState(getter: $BlockAndTintGetter, pos: $BlockPos_, state: $FluidState): $BlockState;
        /**
         * Returns the `FluidState` when a `FluidStack` is trying to
         * place it.
         */
        getStateForPlacement(getter: $BlockAndTintGetter, pos: $BlockPos_, stack: $FluidStack_): $FluidState;
        /**
         * Determines if this fluid should be vaporized when placed into a level.
         * 
         * Note: Fluids that can turn lava into obsidian should vaporize within
         * the nether to preserve the intentions of vanilla.
         */
        isVaporizedOnPlacement(level: $Level, pos: $BlockPos_, stack: $FluidStack_): boolean;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(state: $FluidState, reader: $LevelReader, pos: $BlockPos_): boolean;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(stack: $FluidStack_): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(state: $FluidState, boat: $Boat): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(boat: $Boat): boolean;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         * 
         * Implementation: This is used by the bucket model to determine whether the fluid
         * should render full-bright when `applyFluidLuminosity` is `true`.
         */
        getViscosity(): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getViscosity(stack: $FluidStack_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getViscosity(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        getDripInfo(): $FluidType$DripstoneDripInfo;
        /**
         * Performs what to do when an item is in a fluid.
         */
        setItemMovement(entity: $ItemEntity): void;
        /**
         * Returns whether the fluid type represents air.
         */
        isLighterThanAir(): boolean;
        /**
         * Returns whether a fluid above a pointed dripstone block can successfully fill a cauldron below.
         * 
         * If this will return `true`, this method will also do 3 things:
         * 
         * - Set the cauldron below to the proper filled state as defined by the FluidType's `DripstoneDripInfo`
         * - Send the BLOCK_CHANGE `GameEvent`
         * - Play a sound as defined by the FluidType's `DripstoneDripInfo`
         */
        handleCauldronDrip(fluid: $Fluid, level: $Level, cauldronPos: $BlockPos_): boolean;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getTemperature(stack: $FluidStack_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getTemperature(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         * 
         * Implementation: This is used by the bucket model to determine whether the fluid
         * should render full-bright when `applyFluidLuminosity` is `true`.
         */
        getTemperature(): number;
        /**
         * Returns whether the fluid can be placed in the level.
         */
        canBePlacedInLevel(getter: $BlockAndTintGetter, pos: $BlockPos_, state: $FluidState): boolean;
        /**
         * Returns whether the fluid can be placed in the level.
         */
        canBePlacedInLevel(getter: $BlockAndTintGetter, pos: $BlockPos_, stack: $FluidStack_): boolean;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         * 
         * Implementation: This is used by the bucket model to determine whether the fluid
         * should render full-bright when `applyFluidLuminosity` is `true`.
         */
        getLightLevel(): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getLightLevel(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getLightLevel(stack: $FluidStack_): number;
        /**
         * @deprecated
         */
        initializeClient(consumer: $Consumer_<$IClientFluidTypeExtensions>): void;
        /**
         * Returns how much the fluid should scale the damage done to a falling
         * entity when hitting the ground per tick.
         * 
         * Implementation: If the entity is in many fluids, the smallest modifier
         * is applied.
         */
        getFallDistanceModifier(entity: $Entity): number;
        /**
         * Returns whether the entity can ride in this vehicle under the fluid.
         */
        canRideVehicleUnder(vehicle: $Entity, rider: $Entity): boolean;
        /**
         * Returns whether the fluid type represents air.
         */
        isAir(): boolean;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        static SIZE: $Lazy<number>;
        static BUCKET_VOLUME: number;
        constructor(arg0: $FluidType$Properties);
        get vanilla(): boolean;
        get dripInfo(): $FluidType$DripstoneDripInfo;
        set itemMovement(value: $ItemEntity);
        get lighterThanAir(): boolean;
        get air(): boolean;
    }
    export class $BaseFlowingFluid$Source extends $BaseFlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor(arg0: $BaseFlowingFluid$Properties);
    }
    /**
     * Fluid content information for cauldrons.
     * 
     * Empty, water and lava cauldrons are registered by default,
     * and additional cauldrons must be registered with `RegisterCauldronFluidContentEvent`.
     * Contents can be queried with `#getForBlock` and `#getForFluid`.
     * 
     * The `CauldronFluidContent` itself defines:
     * 
     * - The block of the cauldron.
     * - The fluid that can be accepted by the cauldron. NBT is discarded when entering the cauldron.
     * - Which fluid amounts can be stored in the cauldron, and how they map to the level property of the cauldron.
     * If `#levelProperty` is `null`, then `maxLevel = 1`, and there is only one level.
     * Otherwise, the levels are all the integer values between `1` and `#maxLevel` (included).
     * - `#totalAmount` defines how much fluid (in millibuckets) there is in one level of the cauldron.
     */
    export class $CauldronFluidContent {
        static init(): void;
        static registerCapabilities(event: $RegisterCapabilitiesEvent): void;
        /**
         * Return the current level of the cauldron given its block state, or 0 if it's an empty cauldron.
         */
        currentLevel(state: $BlockState_): number;
        /**
         * Get the cauldron fluid content for a fluid, or `null` if no cauldron was registered for that fluid (yet).
         */
        static getForFluid(fluid: $Fluid): $CauldronFluidContent;
        /**
         * Get the cauldron fluid content for a cauldron block, or `null` if none was registered (yet).
         */
        static getForBlock(block: $Block): $CauldronFluidContent;
        maxLevel: number;
        totalAmount: number;
        levelProperty: $IntegerProperty;
        block: $Block;
        fluid: $Fluid;
    }
    /**
     * Utility class for creating linked set for `FluidStack`
     * with specific hash strategy as `FluidStack` does not override `#hashCode()` and `#equals(Object)`.
     */
    export class $FluidStackLinkedSet {
        static createTypeAndComponentsSet(): $Set<$FluidStack>;
        static TYPE_AND_COMPONENTS: $Hash$Strategy<$FluidStack>;
        constructor();
    }
    /**
     * A registry which defines the interactions a source fluid can have with its
     * surroundings. Each possible flow direction is checked for all interactions with
     * the source.
     * 
     * Fluid interactions mimic the behavior of `LiquidBlock#shouldSpreadLiquid`.
     * As such, all directions, besides `Direction#DOWN` is tested and then replaced.
     * Any fluids which cause a change in the down interaction must be handled in
     * `FlowingFluid#spreadTo` and not by this interaction manager.
     */
    export class $FluidInteractionRegistry implements $FluidInteractionRegistryAccessor {
        /**
         * Performs all potential fluid interactions at a given position.
         * 
         * Note: Only the first interaction check that succeeds will occur.
         */
        static canInteract(level: $Level, pos: $BlockPos_): boolean;
        static addInteraction(arg0: $FluidType, arg1: $FluidInteractionRegistry$InteractionInformation_): void;
        static getInteractions$create_$md$707fe4$0(): $Map<any, any>;
        constructor();
        static get interactions$create_$md$707fe4$0(): $Map<any, any>;
    }
    export class $BaseFlowingFluid$Flowing extends $BaseFlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor(arg0: $BaseFlowingFluid$Properties);
    }
    /**
     * Fills or drains a fluid container item using a Dispenser.
     */
    export class $DispenseFluidContainer extends $DefaultDispenseItemBehavior {
        static getInstance(): $DispenseFluidContainer;
        static get instance(): $DispenseFluidContainer;
    }
    /**
     * The properties of the fluid. The simple forms of each property can
     * be specified while more complex logic can be overridden in the `FluidType`.
     */
    export class $FluidType$Properties {
        static create(): $FluidType$Properties;
        rarity(arg0: $Rarity_): $FluidType$Properties;
        viscosity(arg0: number): $FluidType$Properties;
        canDrown(arg0: boolean): $FluidType$Properties;
        pathType(arg0: $PathType_): $FluidType$Properties;
        lightLevel(arg0: number): $FluidType$Properties;
        addDripstoneDripping(arg0: number, arg1: $ParticleOptions_, arg2: $Block, arg3: $SoundEvent): $FluidType$Properties;
        canExtinguish(arg0: boolean): $FluidType$Properties;
        motionScale(arg0: number): $FluidType$Properties;
        canPushEntity(arg0: boolean): $FluidType$Properties;
        canSwim(arg0: boolean): $FluidType$Properties;
        canHydrate(arg0: boolean): $FluidType$Properties;
        fallDistanceModifier(arg0: number): $FluidType$Properties;
        canConvertToSource(arg0: boolean): $FluidType$Properties;
        supportsBoating(arg0: boolean): $FluidType$Properties;
        density(arg0: number): $FluidType$Properties;
        adjacentPathType(arg0: $PathType_): $FluidType$Properties;
        descriptionId(arg0: string): $FluidType$Properties;
        temperature(arg0: number): $FluidType$Properties;
        sound(arg0: $SoundAction, arg1: $SoundEvent): $FluidType$Properties;
    }
    export class $BaseFlowingFluid$Properties {
        block(arg0: $Supplier_<$LiquidBlock>): $BaseFlowingFluid$Properties;
        bucket(arg0: $Supplier_<$Item>): $BaseFlowingFluid$Properties;
        levelDecreasePerBlock(arg0: number): $BaseFlowingFluid$Properties;
        explosionResistance(arg0: number): $BaseFlowingFluid$Properties;
        slopeFindDistance(arg0: number): $BaseFlowingFluid$Properties;
        tickRate(arg0: number): $BaseFlowingFluid$Properties;
        constructor(fluidType: $Supplier_<$FluidType>, still: $Supplier_<$Fluid>, flowing: $Supplier_<$Fluid>);
    }
    /**
     * Holds the result of a fluid action from `FluidUtil`.
     * 
     * Failed actions will always have `#isSuccess()` == false and an empty ItemStack result. See `#FAILURE`.
     * 
     * Successful actions will always have `#isSuccess()` == true.
     * Successful actions may have an empty ItemStack result in some cases,
     * for example the action succeeded and the resulting item was consumed.
     */
    export class $FluidActionResult {
        getResult(): $ItemStack;
        isSuccess(): boolean;
        result: $ItemStack;
        success: boolean;
        static FAILURE: $FluidActionResult;
        constructor(result: $ItemStack_);
    }
}
