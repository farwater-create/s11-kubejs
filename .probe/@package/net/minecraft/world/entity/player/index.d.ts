import { $EntityDynamicLightSource } from "@package/dev/lambdaurora/lambdynlights/engine/source";
import { $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $Ingredient, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ListTag_, $ListTag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $HumanoidArm, $Pose_, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState, $HumanoidArm_, $Pose, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Mesh } from "@package/dev/tr7zw/skinlayers/api";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AnimationStack, $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";
import { $RandomSource, $SignatureValidator_, $Unit, $SignatureValidator, $OptionEnum } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand, $InteractionHand_, $Nameable, $Container } from "@package/net/minecraft/world";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $PlayerFreezeExtension } from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";
import { $SoundEvent, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $IPlayerExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $NotificationToastData_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PlayerEnderChestContainer, $AbstractContainerMenu, $ClickAction_, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $MerchantOffers } from "@package/net/minecraft/world/item/trading";
import { $Item, $ItemCooldowns, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $PlayerSettings } from "@package/dev/tr7zw/skinlayers/accessor";
import { $MutableComponent, $Component_, $ThrowingComponent, $Component } from "@package/net/minecraft/network/chat";
import { $IQuiverEntity } from "@package/net/mehvahdjukaar/supplementaries/common/entities";
import { $AnimationApplier } from "@package/dev/kosmx/playerAnim/impl/animation";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $Instant, $Duration_, $Duration } from "@package/java/time";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $IAnimatedPlayer } from "@package/dev/kosmx/playerAnim/impl";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $PlayerTypewriterExtension, $PlayerLaunchedPlungerExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $InventoryKJS, $PlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Stat_ } from "@package/net/minecraft/stats";
import { $Vector3dc } from "@package/org/joml";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $Set_, $Stack, $Map, $OptionalInt, $UUID, $List, $Map_, $Collection_, $List_, $Collection, $BitSet } from "@package/java/util";
import { $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $WardenSpawnTracker } from "@package/net/minecraft/world/entity/monster/warden";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $GlobalPos, $BlockPos_, $GlobalPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $Enum, $Record } from "@package/java/lang";
import { $IPlayerEntity } from "@package/com/ishland/c2me/base/mixin/access";
import { $IntList, $Int2IntMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $GameType_, $BaseCommandBlock, $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $PrivateKey, $PublicKey } from "@package/java/security";
import { $PlayerAccessor } from "@package/net/mehvahdjukaar/supplementaries/mixins";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $ISettingsStorage } from "@package/com/possible_triangle/flightlib/logic";
import { $StackedContentsRecipePickerAccessor } from "@package/umpaz/brewinandchewin/common/mixin";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $SignBlockEntity, $StructureBlockEntity, $JigsawBlockEntity, $CommandBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource, $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/player" {
    export class $ProfileKeyPair extends $Record {
        publicKey(): $ProfilePublicKey;
        privateKey(): $PrivateKey;
        refreshedAfter(): $Instant;
        dueRefresh(): boolean;
        static CODEC: $Codec<$ProfileKeyPair>;
        constructor(arg0: $PrivateKey, arg1: $ProfilePublicKey_, arg2: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $ProfileKeyPair}.
     */
    export type $ProfileKeyPair_ = { privateKey?: $PrivateKey, refreshedAfter?: $Instant, publicKey?: $ProfilePublicKey_,  } | [privateKey?: $PrivateKey, refreshedAfter?: $Instant, publicKey?: $ProfilePublicKey_, ];
    export class $ProfilePublicKey$Data extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        key(): $PublicKey;
        hasExpired(gracePeriod: $Duration_): boolean;
        hasExpired(): boolean;
        expiresAt(): $Instant;
        keySignature(): number[];
        validateSignature(signatureValidator: $SignatureValidator_, profileId: $UUID_): boolean;
        static CODEC: $Codec<$ProfilePublicKey$Data>;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $Instant, arg1: $PublicKey, arg2: number[]);
    }
    /**
     * Values that may be interpreted as {@link $ProfilePublicKey$Data}.
     */
    export type $ProfilePublicKey$Data_ = { expiresAt?: $Instant, key?: $PublicKey, keySignature?: number[],  } | [expiresAt?: $Instant, key?: $PublicKey, keySignature?: number[], ];
    export class $Abilities {
        getFlyingSpeed(): number;
        setWalkingSpeed(flyingSpeed: number): void;
        setFlyingSpeed(flyingSpeed: number): void;
        addSaveData(compound: $CompoundTag_): void;
        loadSaveData(compound: $CompoundTag_): void;
        getWalkingSpeed(): number;
        invulnerable: boolean;
        /**
         * @deprecated
         */
        mayfly: boolean;
        instabuild: boolean;
        mayBuild: boolean;
        flying: boolean;
        constructor();
    }
    export class $Inventory implements $Container, $Nameable {
        getName(): $Component;
        /**
         * Reads from the given tag list and fills the slots in the inventory with the correct items.
         */
        load(listTag: $ListTag_): void;
        isEmpty(): boolean;
        /**
         * Adds the stack to the first empty slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        add(stack: $ItemStack_): boolean;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        add(slot: number, stack: $ItemStack_): boolean;
        contains(predicate: $Predicate_<$ItemStack>): boolean;
        contains(tag: $TagKey_<$Item>): boolean;
        /**
         * Adds the stack to the first empty slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        contains(stack: $ItemStack_): boolean;
        /**
         * Writes the inventory out as a list of compound tags. This is where the slot indices are used (+100 for armor, +80 for crafting).
         */
        save(listTag: $ListTag_): $ListTag;
        /**
         * Copy the ItemStack contents from another InventoryPlayer instance
         */
        replaceWith(playerInventory: $Inventory): void;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getItem(slot: number): $ItemStack;
        handler$ekp000$soulbound$restoreItems(arg0: $CallbackInfo): void;
        handler$ihi000$moonlight$ml$fireDropEvent(arg0: $CallbackInfo, arg1: $List_<any>, arg2: number): void;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        getArmor(slot: number): $ItemStack;
        removeItem(stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        findSlotMatchingItem(stack: $ItemStack_): number;
        /**
         * Drop all armor and main inventory items.
         */
        clearContent(): void;
        /**
         * Returns the item stack currently held by the player.
         */
        getSelected(): $ItemStack;
        handler$ekp000$soulbound$reserveItems(arg0: $CallbackInfo): void;
        wrapOperation$jip000$axiom$setPickedItem(instance: $Inventory, itemStack: $ItemStack_, original: $Operation_<any>): number;
        /**
         * Change the selected item in the hotbar after a mouse scroll. Select the slot to the left if `direction` is positive, or to the right if negative.
         */
        swapPaint(direction: number): void;
        pickSlot(index: number): void;
        /**
         * Drop all armor and main inventory items.
         */
        tick(): void;
        addResource(slot: number, stack: $ItemStack_): number;
        removeFromSelected(removeStack: boolean): $ItemStack;
        setPickedItem(stack: $ItemStack_): void;
        static isHotbarSlot(index: number): boolean;
        placeItemBackInInventory(stack: $ItemStack_, sendPacket: boolean): void;
        placeItemBackInInventory(stack: $ItemStack_): void;
        fillStackedContents(stackedContent: $StackedContents): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Drop all armor and main inventory items.
         */
        dropAll(): void;
        /**
         * Drop all armor and main inventory items.
         */
        setChanged(): void;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        findSlotMatchingUnusedItem(stack: $ItemStack_): number;
        clearOrCountMatchingItems(stackPredicate: $Predicate_<$ItemStack>, maxCount: number, inventory: $Container): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSuitableHotbarSlot(): number;
        hasRemainingSpaceForItem(destination: $ItemStack_, origin: $ItemStack_): boolean;
        /**
         * Adds the stack to the first empty slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        soulbound$shouldReserve(stack: $ItemStack_): boolean;
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        getSlotWithRemainingSpace(stack: $ItemStack_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getTimesChanged(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getFreeSlot(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        static getSelectionSize(): number;
        handler$jip000$axiom$swapPaintHead(d: number, ci: $CallbackInfo): void;
        hasAnyMatching(predicate: $Predicate_<any>): boolean;
        handler$ihi000$moonlight$ml$restoreNotDropped(arg0: $CallbackInfo, arg1: $List_<any>, arg2: number): void;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        getDestroySpeed(state: $BlockState_): number;
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
        /**
         * This function stores as many items of an ItemStack as possible in a matching slot and returns the quantity of left over items.
         */
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        getCustomName(): $Component;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        getBlock(level: $Level): $LevelBlock;
        /**
         * Drop all armor and main inventory items.
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
         * Drop all armor and main inventory items.
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
         * Adds the stack to the specified slot in the player's inventory. Returns `false` if it's not possible to place the entire stack in the inventory.
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        /**
         * @return a player armor item (as an `ItemStack`) contained in specified armor slot
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
        static NOT_FOUND_INDEX: number;
        armor: $NonNullList<$ItemStack>;
        static INVENTORY_SIZE: number;
        static POP_TIME_DURATION: number;
        static SLOT_OFFHAND: number;
        static ALL_ARMOR_SLOTS: number[];
        items: $NonNullList<$ItemStack>;
        compartments: $List<$NonNullList<$ItemStack>>;
        offhand: $NonNullList<$ItemStack>;
        selected: number;
        static HELMET_SLOT_ONLY: number[];
        player: $Player;
        constructor(player: $Player);
        get name(): $Component;
        set pickedItem(value: $ItemStack_);
        get suitableHotbarSlot(): number;
        get timesChanged(): number;
        get freeSlot(): number;
        static get selectionSize(): number;
        get containerSize(): number;
        get displayName(): $Component;
        get customName(): $Component;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $PlayerModelPart extends $Enum<$PlayerModelPart> {
        getName(): $Component;
        static values(): $PlayerModelPart[];
        static valueOf(arg0: string): $PlayerModelPart;
        getId(): string;
        getMask(): number;
        getBit(): number;
        static RIGHT_PANTS_LEG: $PlayerModelPart;
        static LEFT_PANTS_LEG: $PlayerModelPart;
        static JACKET: $PlayerModelPart;
        static RIGHT_SLEEVE: $PlayerModelPart;
        static HAT: $PlayerModelPart;
        static LEFT_SLEEVE: $PlayerModelPart;
        static CAPE: $PlayerModelPart;
        get id(): string;
        get mask(): number;
        get bit(): number;
    }
    /**
     * Values that may be interpreted as {@link $PlayerModelPart}.
     */
    export type $PlayerModelPart_ = "cape" | "jacket" | "left_sleeve" | "right_sleeve" | "left_pants_leg" | "right_pants_leg" | "hat";
    export class $StackedContents$RecipePicker implements $StackedContentsRecipePickerAccessor {
        tryPick(amount: number, stackingIndexList: $IntList | null): boolean;
        tryPickAll(amount: number, stackingIndexList: $IntList | null): number;
        brewinandchewin$invokeGetUniqueAvailableIngredientItems(): number[];
        brewinandchewin$getIngredientCount(): number;
        brewinandchewin$getIngredients(): $List<$Ingredient>;
        brewinandchewin$setItemCount(stackingIndex: number): void;
        brewinandchewin$getItemCount(): number;
        brewinandchewin$setIngredientCount(stackingIndex: number): void;
        brewinandchewin$invokeGetIndex(isIngredientPath: boolean, stackingIndex: number, pathIndex: number): number;
        brewinandchewin$getData(): $BitSet;
        brewinandchewin$setData(arg0: $BitSet): void;
        brewinandchewin$getItems(): number[];
        brewinandchewin$setItems(arg0: number[]): void;
        this$0: $StackedContents;
    }
    export class $ProfilePublicKey extends $Record {
        data(): $ProfilePublicKey$Data;
        createSignatureValidator(): $SignatureValidator;
        static createValidated(signatureValidator: $SignatureValidator_, profileId: $UUID_, data: $ProfilePublicKey$Data_): $ProfilePublicKey;
        static EXPIRED_PROFILE_PUBLIC_KEY: $Component;
        static EXPIRY_GRACE_PERIOD: $Duration;
        static TRUSTED_CODEC: $Codec<$ProfilePublicKey>;
        constructor(arg0: $ProfilePublicKey$Data_);
    }
    /**
     * Values that may be interpreted as {@link $ProfilePublicKey}.
     */
    export type $ProfilePublicKey_ = { data?: $ProfilePublicKey$Data_,  } | [data?: $ProfilePublicKey$Data_, ];
    export class $Player$BedSleepingProblem extends $Enum<$Player$BedSleepingProblem> {
        static values(): $Player$BedSleepingProblem[];
        static valueOf(arg0: string): $Player$BedSleepingProblem;
        getMessage(): $Component;
        static OBSTRUCTED: $Player$BedSleepingProblem;
        static NOT_POSSIBLE_HERE: $Player$BedSleepingProblem;
        static NOT_POSSIBLE_NOW: $Player$BedSleepingProblem;
        static NOT_SAFE: $Player$BedSleepingProblem;
        static OTHER_PROBLEM: $Player$BedSleepingProblem;
        static TOO_FAR_AWAY: $Player$BedSleepingProblem;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Player$BedSleepingProblem}.
     */
    export type $Player$BedSleepingProblem_ = "not_possible_here" | "not_possible_now" | "too_far_away" | "obstructed" | "other_problem" | "not_safe";
    export class $ChatVisiblity extends $Enum<$ChatVisiblity> implements $OptionEnum {
        static values(): $ChatVisiblity[];
        static valueOf(arg0: string): $ChatVisiblity;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ChatVisiblity;
        getCaption(): $Component;
        static SYSTEM: $ChatVisiblity;
        static HIDDEN: $ChatVisiblity;
        static FULL: $ChatVisiblity;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatVisiblity}.
     */
    export type $ChatVisiblity_ = "full" | "system" | "hidden";
    export class $StackedContents {
        put(stackingIndex: number, increment: number): void;
        clear(): void;
        has(stackingIndex: number): boolean;
        take(stackingIndex: number, amount: number): number;
        canCraft(recipe: $Recipe<never>, stackingIndexList: $IntList | null, amount: number): boolean;
        canCraft(recipe: $Recipe<never>, stackingIndexList: $IntList | null): boolean;
        static getStackingIndex(stack: $ItemStack_): number;
        getBiggestCraftableStack(recipe: $RecipeHolder_<never>, amount: number, stackingIndexList: $IntList | null): number;
        getBiggestCraftableStack(recipe: $RecipeHolder_<never>, stackingIndexList: $IntList | null): number;
        accountStack(stack: $ItemStack_): void;
        accountStack(stack: $ItemStack_, amount: number): void;
        accountSimpleStack(stack: $ItemStack_): void;
        static fromStackingIndex(stackingIndex: number): $ItemStack;
        contents: $Int2IntMap;
        constructor();
    }
    export class $ProfilePublicKey$ValidationException extends $ThrowingComponent {
        constructor(arg0: $Component_);
    }
    export class $Player extends $LivingEntity implements $IPlayerExtension, $IAnimatedPlayer, $PlayerAccessor, $IQuiverEntity, $ISettingsStorage, $PlayerTypewriterExtension, $PlayerLaunchedPlungerExtension, $EntityDynamicLightSource, $PlayerFreezeExtension, $PlayerSettings, $PlayerKJS, $IPlayerEntity {
        /**
         * Drops an item into the world.
         */
        drop(itemStack: $ItemStack_, includeThrowerName: boolean): $ItemEntity;
        /**
         * Creates and drops the provided item. Depending on the dropAround, it will drop the item around the player, instead of dropping the item from where the player is pointing at. Likewise, if includeThrowerName is true, the dropped item entity will have the thrower set as the player.
         */
        drop(droppedItem: $ItemStack_, dropAround: boolean, includeThrowerName: boolean): $ItemEntity;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetAttackStrengthTicker(): void;
        displayClientMessage(chatComponent: $Component_, actionBar: boolean): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isTextFilteringEnabled(): boolean;
        addItem(stack: $ItemStack_): boolean;
        getPrefixes(): $Collection<$MutableComponent>;
        sable$freezeTo(arg0: $UUID_, arg1: $Vector3dc): void;
        getScoreboard(): $Scoreboard;
        getCooldowns(): $ItemCooldowns;
        getInventory(): $Inventory;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isLocalPlayer(): boolean;
        getAbilities(): $Abilities;
        /**
         * Returns the GameProfile for this player
         */
        getGameProfile(): $GameProfile;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isReducedDebugInfo(): boolean;
        /**
         * Add a stat once
         */
        resetStat(stat: $Stat_<never>): void;
        /**
         * Add experience levels to this player.
         */
        setScore(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getScore(): number;
        freeAt(pos: $BlockPos_): boolean;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        crit(target: $Entity): void;
        interactOn(entityToInteractOn: $Entity, hand: $InteractionHand_): $InteractionResult;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        magicCrit(target: $Entity): void;
        openMenu(menu: $MenuProvider | null): $OptionalInt;
        canEat(canAlwaysEat: boolean): boolean;
        setMainArm(hand: $HumanoidArm_): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        mayBuild(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isScoping(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isHurt(): boolean;
        setShoulderEntityLeft(compound: $CompoundTag_): void;
        setShoulderEntityRight(compound: $CompoundTag_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        resetCurrentImpulseContext(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeEntitiesOnShoulder(): void;
        openMinecartCommandBlock(commandEntity: $BaseCommandBlock): void;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getShoulderEntityRight(): $CompoundTag;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isStayingOnGroundSurface(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isSecondaryUseActive(): boolean;
        startAutoSpinAttack(ticks: number, damage: number, itemStack: $ItemStack_): void;
        hasCorrectToolForDrops(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasCorrectToolForDrops(state: $BlockState_): boolean;
        getLastDeathLocation(): ($GlobalPos) | undefined;
        /**
         * Returns the percentage of attack power available based on the cooldown (zero to one).
         */
        getAttackStrengthScale(adjustTicks: number): number;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isSleepingLongEnough(): boolean;
        triggerRecipeCrafted(recipe: $RecipeHolder_<never>, items: $List_<$ItemStack_>): void;
        entityInteractionRange(): number;
        blockActionRestricted(level: $Level, pos: $BlockPos_, gameMode: $GameType_): boolean;
        setLastDeathLocation(lastDeathLocation: ($GlobalPos_) | undefined): void;
        createItemCooldowns(): $ItemCooldowns;
        causeFoodExhaustion(yaw: number): void;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getShoulderEntityLeft(): $CompoundTag;
        supplementaries$setQuiver(stack: $ItemStack_): void;
        supplementaries$getQuiver(): $ItemStack;
        /**
         * Returns the InventoryEnderChest of this player.
         */
        getEnderChestInventory(): $PlayerEnderChestContainer;
        setReducedDebugInfo(ignoreFallDamageFromCurrentImpulse: boolean): void;
        canInteractWithBlock(pos: $BlockPos_, distance: number): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        tryToStartFallFlying(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$tickStopFreezing(): void;
        getWardenSpawnTracker(): ($WardenSpawnTracker) | undefined;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        canUseGameMasterBlocks(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXpNeededForNextLevel(): number;
        onEnchantmentPerformed(enchantedItem: $ItemStack_, levelCost: number): void;
        setEntityOnShoulder(entityCompound: $CompoundTag_): boolean;
        blockInteractionRange(): number;
        /**
         * Add experience levels to this player.
         */
        giveExperiencePoints(levels: number): void;
        getCraftingGrid(): $InventoryKJS;
        canInteractWithEntity(entity: $Entity, distance: number): boolean;
        canInteractWithEntity(boundingBox: $AABB_, distance: number): boolean;
        sable$getFrozenToSubLevel(): $UUID;
        /**
         * Add experience levels to this player.
         */
        giveExperienceLevels(levels: number): void;
        /**
         * Adds a value to a statistic field.
         */
        awardStat(stat: $Stat_<never>, increment: number): void;
        awardStat(statKey: $ResourceLocation_): void;
        /**
         * Add a stat once
         */
        awardStat(stat: $Stat_<never>): void;
        awardStat(stat: $ResourceLocation_, increment: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getLuck(): number;
        wrapOperation$jjk000$axiom$tick_isSpectator(instance: $Player, original: $Operation_<any>): boolean;
        wrapWithCondition$jcg000$parcool$wrapSetSprinting(arg0: $Player, arg1: boolean): boolean;
        handler$jcg000$parcool$onIsStayingOnGroundSurface(arg0: $CallbackInfoReturnable<any>): void;
        handler$jcg000$parcool$onTryToStartFallFlying(arg0: $CallbackInfoReturnable<any>): void;
        handler$zci000$openpartiesandclaims$onMayUseItemAt(arg0: $BlockPos_, arg1: $Direction_, arg2: $ItemStack_, arg3: $CallbackInfoReturnable<any>): void;
        modifyReturnValue$bmj000$vista$modifyIsScoping(canAlwaysEat: boolean): boolean;
        handler$bej000$paraglider$applyParaglidingSpeedModifier(arg0: $CallbackInfoReturnable<any>): void;
        handler$ccb000$fabric_entity_events_v1$injectElytraCheck(arg0: $CallbackInfoReturnable<any>): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        respawn(): void;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        attack(target: $Entity): void;
        /**
         * Checks, whether the player is in Creative mode.
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isCreative(): boolean;
        canPlayerFitWithinBlocksAndEntitiesWhen(pose: $Pose_): boolean;
        handler$jjk000$axiom$updatePlayerPose(ci: $CallbackInfo): void;
        redirect$hak000$sable$fixRidingBoundingBox(arg0: $AABB_, arg1: $AABB_): $AABB;
        handler$jcg000$parcool$onJumpFromGround(arg0: $CallbackInfo): void;
        handler$jjk000$axiom$getFlyingSpeed(cir: $CallbackInfoReturnable<any>): void;
        setIgnoreFallDamageFromCurrentImpulse(ignoreFallDamageFromCurrentImpulse: boolean): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isIgnoringFallDamageFromCurrentImpulse(): boolean;
        stopSleepInBed(wakeImmediately: boolean, updateLevelForSleepingPlayers: boolean): void;
        static createAttributes(): $AttributeSupplier$Builder;
        openItemGui(stack: $ItemStack_, hand: $InteractionHand_): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        wantsToStopRiding(): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        updateIsUnderwater(): boolean;
        openCommandBlock(commandBlockEntity: $CommandBlockEntity): void;
        openHorseInventory(horse: $AbstractHorse, inventory: $Container): void;
        getEnchantedDamage(entity: $Entity, damage: number, damageSource: $DamageSource_): number;
        /**
         * @deprecated
         */
        getDestroySpeed(state: $BlockState_): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        doCloseContainer(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        closeMenu(): void;
        /**
         * Add experience levels to this player.
         */
        increaseScore(levels: number): void;
        getDigSpeed(arg0: $BlockState_, arg1: $BlockPos_ | null): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        disableShield(): void;
        openTextEdit(signEntity: $SignBlockEntity, isFrontText: boolean): void;
        canHarmPlayer(other: $Player): boolean;
        openStructureBlock(structureEntity: $StructureBlockEntity): void;
        openJigsawBlock(jigsawBlockEntity: $JigsawBlockEntity): void;
        sendMerchantOffers(containerId: number, offers: $MerchantOffers, villagerLevel: number, villagerXp: number, showProgress: boolean, canRestock: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updatePlayerPose(): void;
        playNotifySound(sound: $SoundEvent, source: $SoundSource_, volume: number, pitch: number): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        startFallFlying(): void;
        /**
         * Returns the player's FoodStats object.
         */
        getFoodData(): $FoodData;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopFallFlying(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        refreshDisplayName(): void;
        awardRecipes(recipes: $Collection_<$RecipeHolder_<never>>): number;
        /**
         * Returns whether this player can modify the block at a certain location with the given stack.
         * 
         * The position being queried is `pos.offset(facing.getOpposite())`.
         * 
         * @return Whether this player may modify the queried location in the current world
         * @see ItemStack#canPlaceOn(Block)
         * @see ItemStack#canEditBlocks()
         * @see PlayerCapabilities#allowEdit
         */
        mayUseItemAt(pos: $BlockPos_, facing: $Direction_, stack: $ItemStack_): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getEnchantmentSeed(): number;
        getSuffixes(): $Collection<$MutableComponent>;
        setForcedPose(pose: $Pose_ | null): void;
        startSleepInBed(bedPos: $BlockPos_): $Either<$Player$BedSleepingProblem, $Unit>;
        getForcedPose(): $Pose;
        getAnimationStack(): $AnimationStack;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onUpdateAbilities(): void;
        awardRecipesByKey(recipes: $List_<$ResourceLocation_>): void;
        isModelPartShown(part: $PlayerModelPart_): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getSleepTimer(): number;
        resetRecipes(recipes: $Collection_<$RecipeHolder_<never>>): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sweepAttack(): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        hasContainerOpen(): boolean;
        getRightLegMesh(): $Mesh;
        flightlib$set(equipments: $Map_<any, any>): void;
        getData(): $AttachedData<any>;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        hasThinArms(): boolean;
        getHeadMesh(): $Mesh;
        flightlib$get(): $Map<any, any>;
        setTorsoMesh(torsoMesh: $Mesh): void;
        getRightArmMesh(): $Mesh;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$teleport(): void;
        getInventory(): $InventoryKJS;
        getTorsoMesh(): $Mesh;
        setRightLegMesh(rightLegMesh: $Mesh): void;
        setThinArms(ignoreFallDamageFromCurrentImpulse: boolean): void;
        getLeftArmMesh(): $Mesh;
        getStages(): $Stages;
        setLeftArmMesh(leftArmMesh: $Mesh): void;
        setRightArmMesh(rightArmMesh: $Mesh): void;
        setCurrentSkin(statKey: $ResourceLocation_): void;
        getLeftLegMesh(): $Mesh;
        setLeftLegMesh(leftLegMesh: $Mesh): void;
        setHeadMesh(headMesh: $Mesh): void;
        getCurrentSkin(): $ResourceLocation;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        destroyVanishingCursedItems(): void;
        playerAnimator_getAnimation(): $AnimationApplier;
        playerAnimator_getAnimation(id: $ResourceLocation_): $IAnimation;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        tryResetCurrentImpulseContext(): void;
        simulated$setLaunchedPlunger(arg0: $LaunchedPlungerEntity): void;
        simulated$setCurrentTypewriter(pos: $BlockPos_): void;
        simulated$getLaunchedPlunger(): $LaunchedPlungerEntity;
        sable$getFrozenToSubLevelAnchor(): $Vector3dc;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        handler$jjk000$axiom$travel(movementInput: $Vec3_, ci: $CallbackInfo): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getCurrentItemAttackStrengthDelay(): number;
        playerAnimator_setAnimation(id: $ResourceLocation_, animation: $IAnimation): $IAnimation;
        simulated$getCurrentTypewriter(): $BlockPos;
        updateTutorialInventoryAction(carried: $ItemStack_, clicked: $ItemStack_, action: $ClickAction_): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        mayFly(): boolean;
        /**
         * Request to open a GUI on the client, from the server
         * 
         * Refer to `MenuType#create(IContainerFactory)` for creating a `MenuType` that can consume the
         * extra data sent to the client by this method.
         * 
         * The maximum size for #extraDataWriter is 32600 bytes.
         */
        openMenu(menuProvider: $MenuProvider, extraDataWriter: $Consumer_<$RegistryFriendlyByteBuf>): $OptionalInt;
        /**
         * Request to open a GUI on the client, from the server
         * 
         * Refer to `MenuType#create(IContainerFactory)` for creating a `MenuType` that can consume the
         * extra data sent to the client by this method.
         * 
         * Use `FriendlyByteBuf#readBlockPos()` to read the position you pass to this method.
         */
        openMenu(menuProvider: $MenuProvider, pos: $BlockPos_): $OptionalInt;
        isCloseEnough(entity: $Entity, distance: number): boolean;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isFakePlayer(): boolean;
        /**
         * @deprecated
         */
        getAnimation(): $AnimationApplier;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        supplementaries$hasQuiver(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clearMeshes(): void;
        give(stack: $ItemStack_): void;
        /**
         * Add experience levels to this player.
         */
        setXp(levels: number): void;
        notify(title: $Component_, text: $Component_): void;
        notify(builder: $NotificationToastData_): void;
        /**
         * Checks if the player is fake.
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isFake(): this is $FakePlayer;
        /**
         * Add experience levels to this player.
         */
        addXP(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXp(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getSelectedSlot(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendInventoryUpdate(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        boostElytraFlight(): void;
        /**
         * Add experience levels to this player.
         */
        setSelectedSlot(levels: number): void;
        getOpenInventory(): $AbstractContainerMenu;
        addItemCooldown(item: $Item, ticks: number): void;
        getStats(): $PlayerStatsJS;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSaturation(): number;
        setMouseItem(stack: $ItemStack_): void;
        /**
         * Only use is to identify if class is an instance of player for experience dropping
         */
        isMiningBlock(): boolean;
        setSaturation(yaw: number): void;
        giveInHand(stack: $ItemStack_): void;
        /**
         * Add experience levels to this player.
         */
        addXPLevels(levels: number): void;
        /**
         * Add experience levels to this player.
         */
        setFoodLevel(levels: number): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getXpLevel(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getFoodLevel(): number;
        getMouseItem(): $ItemStack;
        addFood(hunger: number, saturation: number): void;
        addExhaustion(yaw: number): void;
        /**
         * Add experience levels to this player.
         */
        setXpLevel(levels: number): void;
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
        invokeSetShoulderEntityRight(compound: $CompoundTag_): void;
        invokeSetShoulderEntityLeft(compound: $CompoundTag_): void;
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
        appliedScale: number;
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
        static FLAG_ONFIRE: number;
        zza: number;
        rotOffs: number;
        static WAKE_UP_DURATION: number;
        xRotO: number;
        simulated$launchedPlunger: $LaunchedPlungerEntity;
        zo: number;
        lastHurt: number;
        walkAnimation: $WalkAnimationState;
        lastDamageSource: $DamageSource;
        static STANDING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MODE_CUSTOMISATION: $EntityDataAccessor<number>;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
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
        constructor(level: $Level, pos: $BlockPos_, yRot: number, gameProfile: $GameProfile);
        get textFilteringEnabled(): boolean;
        get prefixes(): $Collection<$MutableComponent>;
        get scoreboard(): $Scoreboard;
        get cooldowns(): $ItemCooldowns;
        get localPlayer(): boolean;
        get gameProfile(): $GameProfile;
        set mainArm(value: $HumanoidArm_);
        get scoping(): boolean;
        get hurt(): boolean;
        get stayingOnGroundSurface(): boolean;
        get secondaryUseActive(): boolean;
        get sleepingLongEnough(): boolean;
        get wardenSpawnTracker(): ($WardenSpawnTracker) | undefined;
        get xpNeededForNextLevel(): number;
        set entityOnShoulder(value: $CompoundTag_);
        get craftingGrid(): $InventoryKJS;
        get luck(): number;
        get creative(): boolean;
        set ignoreFallDamageFromCurrentImpulse(value: boolean);
        get ignoringFallDamageFromCurrentImpulse(): boolean;
        get suffixes(): $Collection<$MutableComponent>;
        get animationStack(): $AnimationStack;
        get sleepTimer(): number;
        get data(): $AttachedData<any>;
        set thinArms(value: boolean);
        get stages(): $Stages;
        get inventoryChangeListener(): $KubeJSInventoryListener;
        get currentItemAttackStrengthDelay(): number;
        get fakePlayer(): boolean;
        get animation(): $AnimationApplier;
        get fake(): boolean;
        get openInventory(): $AbstractContainerMenu;
        get stats(): $PlayerStatsJS;
        get miningBlock(): boolean;
    }
}
