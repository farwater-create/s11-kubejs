import { $UISyncManager } from "@package/com/lowdragmc/lowdraglib2/gui/sync";
import { $IModularUIHolderMenu } from "@package/com/lowdragmc/lowdraglib2/gui/holder";
import { $CraftingResultSlotAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $SmithingRecipe, $Recipe, $RecipeHolder, $CraftingInput, $AbstractCookingRecipe, $CraftingInput$Positioned, $RecipeHolder_, $CraftingRecipe, $RecipeType, $SingleRecipeInput, $StonecutterRecipe, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EquipmentSlot_, $EquipmentSlot, $LivingEntity, $SlotAccess } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $RecipeBookCategories } from "@package/net/minecraft/client";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Set_, $Map, $Set, $OptionalInt, $List, $List_ } from "@package/java/util";
import { $AccessorCraftingMenu, $AccessorCrafterMenu, $AccessorInventoryMenu } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $BiFunction, $Predicate_, $Predicate, $BiConsumer_, $BiFunction_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Registry, $Holder_, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $IMenuTypeExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Record, $Runnable_, $Object, $Runnable } from "@package/java/lang";
import { $AccessorMixinShulkerBoxMenu } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $MerchantOffer, $MerchantOffers, $Merchant } from "@package/net/minecraft/world/item/trading";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Level } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey } from "@package/net/minecraft/tags";
import { $SlotAccessor } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player, $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $CraftingContainerAccess, $ContainerAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $ItemSlot } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MenuTypeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $BlockEntity, $EnderChestBlockEntity, $BannerPattern } from "@package/net/minecraft/world/level/block/entity";
export * as tooltip from "@package/net/minecraft/world/inventory/tooltip";

declare module "@package/net/minecraft/world/inventory" {
    export class $FurnaceFuelSlot extends $Slot {
        static isBucket(stack: $ItemStack_): boolean;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(furnaceMenu: $AbstractFurnaceMenu, furnaceContainer: $Container, slot: number, xPosition: number, yPosition: number);
    }
    export class $InventoryMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> implements $AccessorInventoryMenu {
        static isHotbarSlot(index: number): boolean;
        getOwner(): $Player;
        getResultSlots(): $ResultContainer;
        getCraftSlots(): $CraftingContainer;
        quickcraftSlots: $Set<$Slot>;
        static CRAFT_SLOT_END: number;
        static BLOCK_ATLAS: $ResourceLocation;
        static EMPTY_ARMOR_SLOT_BOOTS: $ResourceLocation;
        static TEXTURE_EMPTY_SLOTS: $Map<$EquipmentSlot, $ResourceLocation>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static USE_ROW_SLOT_START: number;
        static EMPTY_ARMOR_SLOT_CHESTPLATE: $ResourceLocation;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static CRAFT_SLOT_COUNT: number;
        static SHIELD_SLOT: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static ARMOR_SLOT_START: number;
        static ARMOR_SLOT_COUNT: number;
        static INV_SLOT_START: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static CRAFT_SLOT_START: number;
        owner: $Player;
        static EMPTY_ARMOR_SLOT_HELMET: $ResourceLocation;
        static SLOT_IDS: $EquipmentSlot[];
        stateId: number;
        active: boolean;
        lastSlots: $NonNullList<$ItemStack>;
        static ARMOR_SLOT_END: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static USE_ROW_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_SHIELD: $ResourceLocation;
        static SLOT_CLICKED_OUTSIDE: number;
        static INV_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_LEGGINGS: $ResourceLocation;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static CONTAINER_ID: number;
        constructor(playerInventory: $Inventory, active: boolean, owner: $Player);
        get resultSlots(): $ResultContainer;
        get craftSlots(): $CraftingContainer;
    }
    export class $BeaconMenu$PaymentSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $MerchantResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(player: $Player, merchant: $Merchant, slots: $MerchantContainer, slot: number, xPosition: number, yPosition: number);
    }
    export class $SlotRanges {
        static allNames(): $Stream<string>;
        static nameToIds(name: string): $SlotRange;
        static singleSlotNames(): $Stream<string>;
        static CODEC: $Codec<$SlotRange>;
        constructor();
    }
    export class $ArmorSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(container: $Container, owner: $LivingEntity, slot: $EquipmentSlot_, slotIndex: number, x: number, y: number, emptyIcon: $ResourceLocation_ | null);
    }
    export class $ResultSlot extends $Slot implements $CraftingResultSlotAccessor {
        getInput(): $CraftingContainer;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(player: $Player, craftSlots: $CraftingContainer, container: $Container, slot: number, xPosition: number, yPosition: number);
        get input(): $CraftingContainer;
    }
    export class $HorseInventoryMenu extends $AbstractContainerMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, inventory: $Inventory, horseContainer: $Container, horse: $AbstractHorse, columns: number);
    }
    export class $BrewingStandMenu$IngredientsSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $SmithingMenu extends $ItemCombinerMenu {
        quickcraftSlots: $Set<$Slot>;
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        remoteCarried: $ItemStack;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static ADDITIONAL_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        selectedRecipe: $RecipeHolder<$SmithingRecipe>;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static SLOT_Y_PLACEMENT: number;
        static TEMPLATE_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        static TEMPLATE_SLOT: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        inputSlots: $Container;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static BASE_SLOT_X_PLACEMENT: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        static BASE_SLOT: number;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement, $IMenuTypeExtension<T>, $MenuTypeKJS {
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
        create(containerId: number, playerInventory: $Inventory): T;
        requiredFeatures(): $FeatureFlagSet;
        kjs$getId(): string;
        kjs$getKey(): $ResourceKey<any>;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        asHolder(): $Holder<T>;
        static ENCHANTMENT: $MenuType<$EnchantmentMenu>;
        static LOOM: $MenuType<$LoomMenu>;
        static BLAST_FURNACE: $MenuType<$BlastFurnaceMenu>;
        static CARTOGRAPHY_TABLE: $MenuType<$CartographyTableMenu>;
        static BEACON: $MenuType<$BeaconMenu>;
        static MERCHANT: $MenuType<$MerchantMenu>;
        static CRAFTER_3x3: $MenuType<$CrafterMenu>;
        static FURNACE: $MenuType<$FurnaceMenu>;
        static ANVIL: $MenuType<$AnvilMenu>;
        static STONECUTTER: $MenuType<$StonecutterMenu>;
        static GENERIC_3x3: $MenuType<$DispenserMenu>;
        static CRAFTING: $MenuType<$CraftingMenu>;
        static GENERIC_9x1: $MenuType<$ChestMenu>;
        static GENERIC_9x2: $MenuType<$ChestMenu>;
        static GENERIC_9x3: $MenuType<$ChestMenu>;
        static GENERIC_9x4: $MenuType<$ChestMenu>;
        static GENERIC_9x5: $MenuType<$ChestMenu>;
        static GENERIC_9x6: $MenuType<$ChestMenu>;
        static BREWING_STAND: $MenuType<$BrewingStandMenu>;
        static SMOKER: $MenuType<$SmokerMenu>;
        static SMITHING: $MenuType<$SmithingMenu>;
        static HOPPER: $MenuType<$HopperMenu>;
        static LECTERN: $MenuType<$LecternMenu>;
        static GRINDSTONE: $MenuType<$GrindstoneMenu>;
        static SHULKER_BOX: $MenuType<$ShulkerBoxMenu>;
        constructor(_constructor: $MenuType$MenuSupplier_<T>, requiredFeatures: $FeatureFlagSet);
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<T>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $MerchantContainer implements $Container {
        isEmpty(): boolean;
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
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getFutureXp(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        updateSellItem(): void;
        setSelectionHint(currentRecipeIndex: number): void;
        getActiveOffer(): $MerchantOffer;
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
        constructor(merchant: $Merchant);
        get futureXp(): number;
        set selectionHint(value: number);
        get activeOffer(): $MerchantOffer;
        get containerSize(): number;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $BeaconMenu extends $AbstractContainerMenu {
        hasPayment(): boolean;
        getLevels(): number;
        getPrimaryEffect(): $Holder<$MobEffect>;
        static decodeEffect(effectId: number): $Holder<$MobEffect>;
        getSecondaryEffect(): $Holder<$MobEffect>;
        static encodeEffect(effect: $Holder_<$MobEffect> | null): number;
        updateEffects(primaryEffect: ($Holder_<$MobEffect>) | undefined, secondaryEffect: ($Holder_<$MobEffect>) | undefined): void;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, container: $Container);
        constructor(containerId: number, container: $Container, beaconData: $ContainerData, access: $ContainerLevelAccess_);
        get levels(): number;
        get primaryEffect(): $Holder<$MobEffect>;
        get secondaryEffect(): $Holder<$MobEffect>;
    }
    export class $CraftingMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> implements $AccessorCraftingMenu {
        handler$foe002$furniture$stillValid(player: $Player, cir: $CallbackInfoReturnable<any>): void;
        static slotChangedCraftingGrid(menu: $AbstractContainerMenu, level: $Level, player: $Player, craftSlots: $CraftingContainer, resultSlots: $ResultContainer, recipe: $RecipeHolder_<$CraftingRecipe> | null): void;
        getPlayer(): $Player;
        getResultSlots(): $ResultContainer;
        getCraftSlots(): $CraftingContainer;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get resultSlots(): $ResultContainer;
        get craftSlots(): $CraftingContainer;
    }
    export class $CrafterSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(container: $Container, slot: number, x: number, y: number, menu: $CrafterMenu);
    }
    export class $ChestMenu extends $AbstractContainerMenu {
        static threeRows(containerId: number, playerInventory: $Inventory, container: $Container): $ChestMenu;
        static threeRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        /**
         * Gets the inventory associated with this chest container.
         * 
         * @see #field_75155_e
         */
        getContainer(): $Container;
        static fiveRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static twoRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static fourRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static oneRow(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static sixRows(containerId: number, playerInventory: $Inventory): $ChestMenu;
        static sixRows(containerId: number, playerInventory: $Inventory, container: $Container): $ChestMenu;
        getRowCount(): number;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(type: $MenuType<never>, containerId: number, playerInventory: $Inventory, container: $Container, rows: number);
        get container(): $Container;
        get rowCount(): number;
    }
    export class $SmokerMenu extends $AbstractFurnaceMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        level: $Level;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static FUEL_SLOT: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, smokerContainer: $Container, smokerData: $ContainerData);
    }
    export class $ClickAction extends $Enum<$ClickAction> {
        static values(): $ClickAction[];
        static valueOf(arg0: string): $ClickAction;
        static SECONDARY: $ClickAction;
        static PRIMARY: $ClickAction;
    }
    /**
     * Values that may be interpreted as {@link $ClickAction}.
     */
    export type $ClickAction_ = "primary" | "secondary";
    export class $BrewingStandMenu extends $AbstractContainerMenu {
        getFuel(): number;
        getBrewingTicks(): number;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, brewingStandContainer: $Container, brewingStandData: $ContainerData);
        get fuel(): number;
        get brewingTicks(): number;
    }
    export class $BrewingStandMenu$PotionSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
    }
    export interface $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
        create(containerId: number, playerInventory: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuType$MenuSupplier}.
     */
    export type $MenuType$MenuSupplier_<T> = ((arg0: number, arg1: $Inventory) => T);
    export class $LecternMenu extends $AbstractContainerMenu {
        getPage(): number;
        getBook(): $ItemStack;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static BUTTON_PREV_PAGE: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static BUTTON_PAGE_JUMP_RANGE_START: number;
        static BUTTON_NEXT_PAGE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static BUTTON_TAKE_BOOK: number;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number);
        constructor(containerId: number, lectern: $Container, lecternData: $ContainerData);
        get page(): number;
        get book(): $ItemStack;
    }
    export class $CraftingContainer {
    }
    export interface $CraftingContainer extends $Container, $StackedContentsCompatible {
        getWidth(): number;
        getHeight(): number;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        asCraftInput(): $CraftingInput;
        getItems(): $List<$ItemStack>;
        get width(): number;
        get height(): number;
        get items(): $List<$ItemStack>;
    }
    export class $LoomMenu extends $AbstractContainerMenu {
        getDyeSlot(): $Slot;
        handler$fog003$furniture$stillValid(player: $Player, cir: $CallbackInfoReturnable<any>): void;
        getSelectedBannerPatternIndex(): number;
        getSelectablePatterns(): $List<$Holder<$BannerPattern>>;
        registerUpdateListener(listener: $Runnable_): void;
        wrapOperation$bhg000$supplementaries$supp$flagStuff(arg0: $ItemStack_, arg1: $Operation_<any>): $Item;
        getResultSlot(): $Slot;
        getPatternSlot(): $Slot;
        getBannerSlot(): $Slot;
        quickcraftSlots: $Set<$Slot>;
        slotUpdateListener: $Runnable;
        lastSoundTime: number;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        bannerSlot: $Slot;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        dyeSlot: $Slot;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        selectedBannerPatternIndex: $DataSlot;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get selectablePatterns(): $List<$Holder<$BannerPattern>>;
        get resultSlot(): $Slot;
        get patternSlot(): $Slot;
    }
    export class $DispenserMenu extends $AbstractContainerMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $StackedContentsCompatible {
    }
    export interface $StackedContentsCompatible {
        fillStackedContents(contents: $StackedContents): void;
    }
    /**
     * Values that may be interpreted as {@link $StackedContentsCompatible}.
     */
    export type $StackedContentsCompatible_ = ((arg0: $StackedContents) => void);
    export class $ShulkerBoxSlot extends $Slot {
        handler$bid000$supplementaries$supp$preventInsertion(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(container: $Container, slot: number, x: number, y: number);
    }
    export class $PlayerEnderChestContainer extends $SimpleContainer {
        isActiveChest(enderChest: $EnderChestBlockEntity): boolean;
        setActiveChest(enderChestBlockEntity: $EnderChestBlockEntity): void;
        size: number;
        items: $NonNullList<$ItemStack>;
        constructor();
    }
    export class $ItemCombinerMenuSlotDefinition {
        getSlot(slot: number): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        static create(): $ItemCombinerMenuSlotDefinition$Builder;
        getSlots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        hasSlot(slot: number): boolean;
        getInputSlotIndexes(): $List<number>;
        getResultSlotIndex(): number;
        getNumOfInputSlots(): number;
        getResultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        constructor(slots: $List_<$ItemCombinerMenuSlotDefinition$SlotDefinition_>, resultSlot: $ItemCombinerMenuSlotDefinition$SlotDefinition_);
        get slots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        get inputSlotIndexes(): $List<number>;
        get resultSlotIndex(): number;
        get numOfInputSlots(): number;
        get resultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
    }
    export class $SlotRange {
        static of(name: string, values: $IntList): $SlotRange;
    }
    export interface $SlotRange extends $StringRepresentable {
        size(): number;
        slots(): $IntList;
    }
    export class $MenuConstructor {
    }
    export interface $MenuConstructor {
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $MenuConstructor}.
     */
    export type $MenuConstructor_ = ((arg0: number, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu);
    export class $ContainerData {
    }
    export interface $ContainerData {
        get(index: number): number;
        set(index: number, value: number): void;
        getCount(): number;
        get count(): number;
    }
    export class $EnchantmentMenu extends $AbstractContainerMenu {
        getGoldCount(): number;
        getEnchantmentSeed(): number;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        enchantClue: number[];
        containerId: number;
        levelClue: number[];
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        costs: number[];
        stateId: number;
        static EMPTY_SLOT_LAPIS_LAZULI: $ResourceLocation;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get goldCount(): number;
        get enchantmentSeed(): number;
    }
    export class $ContainerLevelAccess {
        static create(level: $Level, pos: $BlockPos_): $ContainerLevelAccess;
        static NULL: $ContainerLevelAccess;
    }
    export interface $ContainerLevelAccess {
        execute(levelPosConsumer: $BiConsumer_<$Level, $BlockPos>): void;
        evaluate<T>(levelPosConsumer: $BiFunction_<$Level, $BlockPos, T>): (T) | undefined;
        evaluate<T>(levelPosConsumer: $BiFunction_<$Level, $BlockPos, T>, defaultValue: T): T;
    }
    /**
     * Values that may be interpreted as {@link $ContainerLevelAccess}.
     */
    export type $ContainerLevelAccess_ = ((arg0: $BiFunction<$Level, $BlockPos, any>) => (T) | undefined);
    export class $CartographyTableMenu extends $AbstractContainerMenu {
        handler$fod001$furniture$stillValid(player: $Player, cir: $CallbackInfoReturnable<any>): void;
        handler$bgb000$supplementaries$supp$getItem(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $Level, arg4: $BlockPos_, arg5: $CallbackInfo, arg6: $MapItemSavedData): void;
        handler$bgb000$supplementaries$supp$getItem(arg0: $Player, arg1: number, arg2: $CallbackInfoReturnable<any>, arg3: $ItemStack_, arg4: $Slot, arg5: $ItemStack_): void;
        container: $Container;
        quickcraftSlots: $Set<$Slot>;
        static ADDITIONAL_SLOT: number;
        lastSoundTime: number;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static MAP_SLOT: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $ItemCombinerMenu extends $AbstractContainerMenu {
        getSlotToQuickMoveTo(stack: $ItemStack_): number;
        canMoveIntoInputSlots(stack: $ItemStack_): boolean;
        createInputSlotDefinitions(): $ItemCombinerMenuSlotDefinition;
        mayPickup(player: $Player, hasStack: boolean): boolean;
        onTake(player: $Player, stack: $ItemStack_): void;
        /**
         * Called when the Anvil Input Slot changes, calculates the new result and puts it in the output slot.
         */
        createResult(): void;
        createResultSlot(slotDefinition: $ItemCombinerMenuSlotDefinition): void;
        isValidBlock(state: $BlockState_): boolean;
        getResultSlot(): number;
        createContainer(size: number): $SimpleContainer;
        createInputSlots(slotDefinition: $ItemCombinerMenuSlotDefinition): void;
        quickcraftSlots: $Set<$Slot>;
        access: $ContainerLevelAccess;
        remoteCarried: $ItemStack;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        inputSlots: $Container;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(type: $MenuType<never> | null, containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get resultSlot(): number;
    }
    export class $ResultContainer implements $Container, $RecipeCraftingHolder {
        isEmpty(): boolean;
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
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        getRecipeUsed(): $RecipeHolder<never>;
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
        setRecipeUsed(level: $Level, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
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
        constructor();
        get containerSize(): number;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $FurnaceMenu extends $AbstractFurnaceMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        level: $Level;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static FUEL_SLOT: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, furnaceContainer: $Container, furnaceData: $ContainerData);
    }
    export class $AbstractFurnaceMenu extends $RecipeBookMenu<$SingleRecipeInput, $AbstractCookingRecipe> {
        canSmelt(stack: $ItemStack_): boolean;
        isFuel(stack: $ItemStack_): boolean;
        getBurnProgress(): number;
        getLitProgress(): number;
        isLit(): boolean;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        level: $Level;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static FUEL_SLOT: number;
        constructor(menuType: $MenuType<never>, recipeType: $RecipeType<$AbstractCookingRecipe>, recipeBookType: $RecipeBookType_, containerId: number, playerInventory: $Inventory);
        constructor(menuType: $MenuType<never>, recipeType: $RecipeType<$AbstractCookingRecipe>, recipeBookType: $RecipeBookType_, containerId: number, playerInventory: $Inventory, container: $Container, data: $ContainerData);
        get burnProgress(): number;
        get litProgress(): number;
        get lit(): boolean;
    }
    export class $HopperMenu extends $AbstractContainerMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        static CONTAINER_SIZE: number;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $SimpleContainerData implements $ContainerData {
        get(index: number): number;
        set(index: number, value: number): void;
        getCount(): number;
        constructor(size: number);
        get count(): number;
    }
    export class $StonecutterMenu extends $AbstractContainerMenu {
        getRecipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        /**
         * Returns the index of the selected recipe.
         */
        getSelectedRecipeIndex(): number;
        registerUpdateListener(listener: $Runnable_): void;
        /**
         * Reset the drag fields
         */
        setupResultSlot(): void;
        /**
         * Returns the index of the selected recipe.
         */
        getNumRecipes(): number;
        hasInputItem(): boolean;
        container: $Container;
        quickcraftSlots: $Set<$Slot>;
        lastSoundTime: number;
        slotUpdateListener: $Runnable;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        resultSlot: $Slot;
        ldlib2$itemSlotMap: $Map<any, any>;
        inputSlot: $Slot;
        resultContainer: $ResultContainer;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static INPUT_SLOT: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get recipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        get selectedRecipeIndex(): number;
        get numRecipes(): number;
    }
    export class $ShulkerBoxMenu extends $AbstractContainerMenu implements $AccessorMixinShulkerBoxMenu {
        lootr$getShulkerMenuContainer(): $Container;
        container: $Container;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $Container);
    }
    export class $AbstractContainerMenu implements $IModularUIHolderMenu, $ContainerAccess {
        getSlot(slotId: number): $Slot;
        getType(): $MenuType<never>;
        /**
         * Called when the container is closed.
         */
        removed(player: $Player): void;
        setData(id: number, data: number): void;
        setSynchronizer(synchronizer: $ContainerSynchronizer): void;
        addSlotListener(listener: $ContainerListener): void;
        transferState(menu: $AbstractContainerMenu): void;
        setRemoteSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Like the version that takes an inventory. If the given BlockEntity is not an Inventory, 0 is returned instead.
         */
        static getRedstoneSignalFromBlockEntity(blockEntity: $BlockEntity | null): number;
        static getRedstoneSignalFromContainer(container: $Container | null): number;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        suppressRemoteUpdates(): void;
        static getQuickCraftPlaceCount(slots: $Set_<$Slot>, type: number, stack: $ItemStack_): number;
        /**
         * Called to determine if the current slot is valid for the stack merging (double-click) code. The stack passed in is null for the initial slot that was double-clicked.
         */
        canTakeItemForPickAll(stack: $ItemStack_, slot: $Slot): boolean;
        static isValidQuickcraftType(dragMode: number, player: $Player): boolean;
        createCarriedSlotAccess(): $SlotAccess;
        static checkContainerDataCount(intArray: $ContainerData, minSize: number): void;
        /**
         * Args : clickedButton, Returns (0 : start drag, 1 : add slot, 2 : end drag)
         */
        static getQuickcraftHeader(clickedButton: number): number;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        sendAllDataToRemote(): void;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        resumeRemoteUpdates(): void;
        /**
         * Checks if it's possible to add the given itemstack to the given slot.
         */
        static canItemQuickReplace(slot: $Slot | null, stack: $ItemStack_, stackSizeMatters: boolean): boolean;
        ldlib2$getModularUI(): $ModularUI;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        synchronizeCarriedToRemote(): void;
        setRemoteSlotNoCopy(slot: number, stack: $ItemStack_): void;
        ldlib2$setModularUI(arg0: $ModularUI): void;
        /**
         * Determines whether supplied player can use this container
         */
        stillValid(player: $Player): boolean;
        static stillValid(access: $ContainerLevelAccess_, player: $Player, targetBlock: $Block): boolean;
        getCarried(): $ItemStack;
        setCarried(stack: $ItemStack_): void;
        /**
         * Adds an item slot to this container
         */
        addSlot(slot: $Slot): $Slot;
        /**
         * Returns `true` if the player can "drag-spilt" items into this slot. Returns `true` by default. Called to check if the slot can be added to a list of Slots to split the held ItemStack across.
         */
        canDragTo(slot: $Slot): boolean;
        clicked(slotId: number, button: number, clickType: $ClickType_, player: $Player): void;
        doClick(slotId: number, button: number, clickType: $ClickType_, player: $Player): void;
        getStateId(): number;
        wrapOperation$ifb000$azurelib$detectSlotChangeWithAzureID(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        wrapOperation$ifb000$azurelib$syncAzureIDWithRemote(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        wrapOperation$ifb000$azurelib$syncAzureIDWithRemote(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        wrapOperation$ehi000$geckolib$removeGeckolibIdOnCopy(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        wrapOperation$ehi000$geckolib$forceGeckolibSlotChange(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        addDataSlot(intValue: $DataSlot): $DataSlot;
        isValidSlotIndex(slotIndex: number): boolean;
        removeSlotListener(listener: $ContainerListener): void;
        /**
         * Handles the given Button-click on the server, currently only used by enchanting. Name is for legacy.
         */
        clickMenuButton(player: $Player, id: number): boolean;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        resetQuickCraft(): void;
        static checkContainerSize(container: $Container, minSize: number): void;
        addDataSlots(array: $ContainerData): void;
        /**
         * Args : clickedButton, Returns (0 : start drag, 1 : add slot, 2 : end drag)
         */
        static getQuickcraftType(clickedButton: number): number;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        broadcastFullState(): void;
        setRemoteCarried(stack: $ItemStack_): void;
        /**
         * Handle when the stack in slot `index` is shift-clicked. Normally this moves the stack between the player inventory and the other inventory(s).
         */
        quickMoveStack(player: $Player, index: number): $ItemStack;
        incrementStateId(): number;
        initializeContents(stateId: number, items: $List_<$ItemStack_>, carried: $ItemStack_): void;
        /**
         * Merges provided ItemStack with the first available one in the container/player inventor between minIndex (included) and maxIndex (excluded). Args : stack, minIndex, maxIndex, negativDirection. [!] the Container implementation do not check if the item is valid for the slot
         */
        moveItemStackTo(stack: $ItemStack_, startIndex: number, endIndex: number, reverseDirection: boolean): boolean;
        /**
         * Callback for when the crafting matrix is changed.
         */
        slotsChanged(container: $Container): void;
        clearContainer(player: $Player, container: $Container): void;
        ldlib2$addSlot(arg0: $ItemSlot): void;
        static getQuickcraftMask(quickCraftingHeader: number, quickCraftingType: number): number;
        ldlib2$getItemSlot(arg0: $Slot): $ItemSlot;
        /**
         * Returns a list if `ItemStacks`, for each slot.
         */
        getItems(): $NonNullList<$ItemStack>;
        wrapOperation$ehi000$geckolib$forceGeckolibIdSync(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        /**
         * Looks for changes made in the container, sends them to every listener.
         */
        broadcastChanges(): void;
        findSlot(container: $Container, slotIndex: number): $OptionalInt;
        /**
         * Puts an ItemStack in a slot.
         */
        setItem(slotId: number, stateId: number, stack: $ItemStack_): void;
        addSlot(arg0: $ItemSlot): void;
        setModularUI(arg0: $ModularUI): void;
        getModularUI(): $ModularUI;
        getItemSlot(arg0: $Slot): $ItemSlot;
        getSyncManager(): $UISyncManager;
        hasModularUI(): boolean;
        self(): $AbstractContainerMenu;
        /**
         * Returns `true` if the player can "drag-spilt" items into this slot. Returns `true` by default. Called to check if the slot can be added to a list of Slots to split the held ItemStack across.
         */
        isItemSlot(slot: $Slot): boolean;
        writeInitialData(arg0: $RegistryFriendlyByteBuf): void;
        readInitialData(arg0: $RegistryFriendlyByteBuf): void;
        /**
         * Returns a list if `ItemStacks`, for each slot.
         */
        getRemoteSlots(): $NonNullList<$ItemStack>;
        /**
         * Returns a list if `ItemStacks`, for each slot.
         */
        getLastSlots(): $NonNullList<$ItemStack>;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(menuType: $MenuType<never> | null, containerId: number);
        get type(): $MenuType<never>;
        get items(): $NonNullList<$ItemStack>;
        get syncManager(): $UISyncManager;
    }
    export class $Slot implements $SlotAccessor {
        /**
         * Decrease the size of the stack in slot (first int arg) by the amount of the second int arg. Returns the new stack.
         */
        remove(amount: number): $ItemStack;
        set(stack: $ItemStack_): void;
        /**
         * Returns if this slot contains a stack.
         */
        isActive(): boolean;
        /**
         * Helper function to get the stack in the slot.
         */
        getItem(): $ItemStack;
        /**
         * Returns if this slot contains a stack.
         */
        hasItem(): boolean;
        /**
         * Returns if this slot contains a stack.
         */
        isFake(): boolean;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getMaxStackSize(): number;
        /**
         * Called when the stack in a Slot changes
         */
        setChanged(): void;
        /**
         * Check if the stack is allowed to be placed in this slot, used for armor slots as well as furnace fuel.
         */
        mayPlace(stack: $ItemStack_): boolean;
        mayPickup(player: $Player): boolean;
        safeInsert(stack: $ItemStack_, increment: number): $ItemStack;
        safeInsert(stack: $ItemStack_): $ItemStack;
        tryRemove(count: number, decrement: number, player: $Player): ($ItemStack) | undefined;
        onTake(stack: $Player, arg1: $ItemStack_): void;
        safeTake(count: number, decrement: number, player: $Player): $ItemStack;
        checkTakeAchievements(stack: $ItemStack_): void;
        /**
         * Returns if this slot contains a stack.
         */
        isHighlightable(): boolean;
        isSameInventory(arg0: $Slot): boolean;
        getNoItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        setBackground(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $Slot;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getSlotIndex(): number;
        /**
         * if par2 has more items than par1, onCrafting(item,countIncrease) is called
         */
        setByPlayer(oldStack: $ItemStack_, newStack: $ItemStack_): void;
        setByPlayer(stack: $ItemStack_): void;
        /**
         * if par2 has more items than par1, onCrafting(item,countIncrease) is called
         */
        onQuickCraft(oldStack: $ItemStack_, newStack: $ItemStack_): void;
        /**
         * Typically increases an internal count, then calls `onCrafting(item)`.
         */
        onQuickCraft(stack: $ItemStack_, amount: number): void;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getContainerSlot(): number;
        onSwapCraft(numItemsCrafted: number): void;
        allowModification(player: $Player): boolean;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getX(): number;
        /**
         * Returns the maximum stack size for a given slot (usually the same as getInventoryStackLimit(), but 1 in the case of armor slots)
         */
        getY(): number;
        setY(numItemsCrafted: number): void;
        setX(numItemsCrafted: number): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(container: $Container, slot: number, x: number, y: number);
        get active(): boolean;
        get item(): $ItemStack;
        get fake(): boolean;
        get highlightable(): boolean;
        get noItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        get slotIndex(): number;
        get containerSlot(): number;
    }
    export class $DataSlot {
        get(): number;
        set(value: number): void;
        static shared(data: number[], idx: number): $DataSlot;
        static standalone(): $DataSlot;
        checkAndClearUpdateFlag(): boolean;
        static forContainer(data: $ContainerData, idx: number): $DataSlot;
        constructor();
    }
    export class $BrewingStandMenu$FuelSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $RecipeBookType extends $Enum<$RecipeBookType> implements $IExtensibleEnum {
        static values(): $RecipeBookType[];
        static valueOf(arg0: string): $RecipeBookType;
        static getExtensionInfo(): $ExtensionInfo;
        static FURNACE: $RecipeBookType;
        static BLAST_FURNACE: $RecipeBookType;
        static BREWINANDCHEWIN_FERMENTING: $RecipeBookType;
        static SMOKER: $RecipeBookType;
        static FARMERSDELIGHT_COOKING: $RecipeBookType;
        static CRAFTING: $RecipeBookType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookType}.
     */
    export type $RecipeBookType_ = "crafting" | "furnace" | "blast_furnace" | "smoker" | "brewinandchewin_fermenting" | "farmersdelight_cooking";
    export class $ItemCombinerMenuSlotDefinition$SlotDefinition extends $Record {
        x(): number;
        y(): number;
        slotIndex(): number;
        mayPlace(): $Predicate<$ItemStack>;
        static EMPTY: $ItemCombinerMenuSlotDefinition$SlotDefinition;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $ItemCombinerMenuSlotDefinition$SlotDefinition}.
     */
    export type $ItemCombinerMenuSlotDefinition$SlotDefinition_ = { x?: number, y?: number, mayPlace?: $Predicate_<$ItemStack>, slotIndex?: number,  } | [x?: number, y?: number, mayPlace?: $Predicate_<$ItemStack>, slotIndex?: number, ];
    export class $ClickType extends $Enum<$ClickType> {
        static values(): $ClickType[];
        static valueOf(arg0: string): $ClickType;
        static QUICK_MOVE: $ClickType;
        static SWAP: $ClickType;
        static PICKUP_ALL: $ClickType;
        static THROW: $ClickType;
        static QUICK_CRAFT: $ClickType;
        static PICKUP: $ClickType;
        static CLONE: $ClickType;
    }
    /**
     * Values that may be interpreted as {@link $ClickType}.
     */
    export type $ClickType_ = "pickup" | "quick_move" | "swap" | "clone" | "throw" | "quick_craft" | "pickup_all";
    export class $TransientCraftingContainer implements $CraftingContainer, $CraftingContainerAccess {
        isEmpty(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        fillStackedContents(contents: $StackedContents): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        getItems(): $List<$ItemStack>;
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
        asPositionedCraftInput(): $CraftingInput$Positioned;
        asCraftInput(): $CraftingInput;
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
        setItems(arg0: $NonNullList<$ItemStack_>): void;
        menu: $AbstractContainerMenu;
        constructor(menu: $AbstractContainerMenu, width: number, height: number);
        constructor(menu: $AbstractContainerMenu, width: number, height: number, items: $NonNullList<$ItemStack_>);
        get containerSize(): number;
        set transferCooldown(value: number);
        get slots(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $ContainerSynchronizer {
    }
    export interface $ContainerSynchronizer {
        sendSlotChange(container: $AbstractContainerMenu, slot: number, itemStack: $ItemStack_): void;
        sendDataChange(container: $AbstractContainerMenu, id: number, value: number): void;
        sendCarriedChange(containerMenu: $AbstractContainerMenu, stack: $ItemStack_): void;
        sendInitialData(container: $AbstractContainerMenu, items: $NonNullList<$ItemStack_>, carriedItem: $ItemStack_, initialData: number[]): void;
    }
    export class $MerchantMenu extends $AbstractContainerMenu {
        canRestock(): boolean;
        setXp(level: number): void;
        showProgressBar(): boolean;
        setShowProgressBar(canRestock: boolean): void;
        setMerchantLevel(level: number): void;
        setCanRestock(canRestock: boolean): void;
        getFutureTraderXp(): number;
        getTraderLevel(): number;
        getTraderXp(): number;
        setSelectionHint(level: number): void;
        getOffers(): $MerchantOffers;
        /**
         * `ClientPacketListener` uses this to set offers for the client side MerchantContainer.
         */
        setOffers(offers: $MerchantOffers): void;
        tryMoveItems(level: number): void;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static PAYMENT1_SLOT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static PAYMENT2_SLOT: number;
        stateId: number;
        trader: $Merchant;
        lastSlots: $NonNullList<$ItemStack>;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, trader: $Merchant);
        set xp(value: number);
        set merchantLevel(value: number);
        get futureTraderXp(): number;
        get traderLevel(): number;
        get traderXp(): number;
        set selectionHint(value: number);
    }
    export class $GrindstoneMenu extends $AbstractContainerMenu {
        computeResult(inputItem: $ItemStack_, additionalItem: $ItemStack_): $ItemStack;
        quickcraftSlots: $Set<$Slot>;
        static ADDITIONAL_SLOT: number;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static INPUT_SLOT: number;
        repairSlots: $Container;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
    }
    export class $RecipeCraftingHolder {
    }
    export interface $RecipeCraftingHolder {
        setRecipeUsed(level: $Level, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        getRecipeUsed(): $RecipeHolder<never>;
    }
    export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<I>> extends $AbstractContainerMenu {
        getSize(): number;
        getRecipeBookCategories(): $List<$RecipeBookCategories>;
        shouldMoveToInventory(slotIndex: number): boolean;
        finishPlacingRecipe(recipe: $RecipeHolder_<R>): void;
        /**
         * Reset the drag fields
         */
        clearCraftingContent(): void;
        fillCraftSlotsStackedContents(itemHelper: $StackedContents): void;
        getGridWidth(): number;
        getResultSlotIndex(): number;
        handlePlacement(placeAll: boolean, recipe: $RecipeHolder_<never>, player: $ServerPlayer): void;
        getRecipeBookType(): $RecipeBookType;
        recipeMatches(recipe: $RecipeHolder_<R>): boolean;
        /**
         * Reset the drag fields
         */
        beginPlacingRecipe(): void;
        getGridHeight(): number;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(menuType: $MenuType<never>, containerId: number);
        get size(): number;
        get recipeBookCategories(): $List<$RecipeBookCategories>;
        get gridWidth(): number;
        get resultSlotIndex(): number;
        get recipeBookType(): $RecipeBookType;
        get gridHeight(): number;
    }
    export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener, $AccessorCrafterMenu {
        isPowered(): boolean;
        getContainer(): $Container;
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, dataSlotIndex: number, stack: $ItemStack_): void;
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
        isSlotDisabled(slot: number): boolean;
        setSlotState(slot: number, enabled: boolean): void;
        /**
         * Reset the drag fields
         */
        callRefreshRecipeResult(): void;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, container: $CraftingContainer, containerData: $ContainerData);
        get powered(): boolean;
        get container(): $Container;
    }
    export class $NonInteractiveResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $FurnaceResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(player: $Player, container: $Container, slot: number, xPosition: number, yPosition: number);
    }
    export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        level: $Level;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        static FUEL_SLOT: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, blastFurnaceContainer: $Container, blastFurnaceData: $ContainerData);
    }
    export class $AnvilMenu extends $ItemCombinerMenu {
        modifyExpressionValue$imm000$ae2$setAnnihilationPlaneThreadLocal(arg0: boolean): boolean;
        static calculateIncreasedRepairCost(oldRepairCost: number): number;
        /**
         * Gets the maximum xp cost
         */
        getCost(): number;
        setItemName(itemName: string): boolean;
        setMaximumCost(arg0: number): void;
        quickcraftSlots: $Set<$Slot>;
        repairItemCountCost: number;
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        remoteCarried: $ItemStack;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        itemName: string;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        static INPUT_SLOT: number;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        inputSlots: $Container;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(containerId: number, playerInventory: $Inventory);
        constructor(containerId: number, playerInventory: $Inventory, access: $ContainerLevelAccess_);
        get cost(): number;
        set maximumCost(value: number);
    }
    export class $ContainerListener {
    }
    export interface $ContainerListener {
        /**
         * Sends the contents of an inventory slot to the client-side Container. This doesn't have to match the actual contents of that slot.
         */
        slotChanged(containerToSend: $AbstractContainerMenu, dataSlotIndex: number, stack: $ItemStack_): void;
        dataChanged(containerMenu: $AbstractContainerMenu, dataSlotIndex: number, value: number): void;
    }
    export class $ItemCombinerMenuSlotDefinition$Builder {
        build(): $ItemCombinerMenuSlotDefinition;
        withSlot(slotIndex: number, x: number, y: number, mayPlace: $Predicate_<$ItemStack>): $ItemCombinerMenuSlotDefinition$Builder;
        withResultSlot(slotIndex: number, x: number, y: number): $ItemCombinerMenuSlotDefinition$Builder;
        constructor();
    }
}
