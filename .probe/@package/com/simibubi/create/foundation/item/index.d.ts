import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $MultiBufferSource, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SyncedBlockEntity, $ItemHandlerContainer } from "@package/com/simibubi/create/foundation/blockEntity";
import { $FontHelper$Palette_ } from "@package/net/createmod/catnip/lang";
import { $EquipmentSlot_, $Entity, $EquipmentSlot, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $HumanoidArmorLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $ItemTooltipEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $HumanoidModel$ArmPose, $HumanoidModel$ArmPose_, $HumanoidModel } from "@package/net/minecraft/client/model";
import { $InteractionHand, $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $Predicate, $IntFunction_, $Supplier_, $Function_, $Consumer_, $Predicate_, $BiPredicate_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $TriState, $Pair, $IntAttached } from "@package/net/createmod/catnip/data";
import { $ItemLike_, $ItemLike, $Level } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $ItemContainerContents } from "@package/net/minecraft/world/item/component";
import { $MutableComponent, $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $IItemHandlerModifiable, $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as render from "@package/com/simibubi/create/foundation/item/render";

declare module "@package/com/simibubi/create/foundation/item" {
    export class $TooltipHelper {
        static holdShift(arg0: $FontHelper$Palette_, arg1: boolean): $MutableComponent;
        static cutTextComponent(arg0: $Component_, arg1: $FontHelper$Palette_): $List<$Component>;
        static cutTextComponent(arg0: $Component_, arg1: $Style, arg2: $Style, arg3: number): $List<$Component>;
        static cutTextComponent(arg0: $Component_, arg1: $Style, arg2: $Style): $List<$Component>;
        static styleFromColor(arg0: number): $Style;
        static styleFromColor(arg0: $ChatFormatting_): $Style;
        static makeProgressBar(arg0: number, arg1: number): string;
        static cutStringTextComponent(arg0: string, arg1: $FontHelper$Palette_): $List<$Component>;
        static cutStringTextComponent(arg0: string, arg1: $Style, arg2: $Style, arg3: number): $List<$Component>;
        static cutStringTextComponent(arg0: string, arg1: $Style, arg2: $Style): $List<$Component>;
        static addHint(arg0: $List_<$Component_>, arg1: string, ...arg2: $Object[]): void;
        static MAX_WIDTH_PER_LINE: number;
        constructor();
    }
    export class $TagDependentIngredientItem extends $Item {
        shouldHide(): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $TagKey_<$Item>);
    }
    export class $KineticStats implements $TooltipModifier {
        static create(arg0: $Item): $KineticStats;
        modify(arg0: $ItemTooltipEvent): void;
        static getKineticStats(arg0: $Block, arg1: $Player): $List<$Component>;
        andThen(arg0: $TooltipModifier_): $TooltipModifier;
        constructor(arg0: $Block);
    }
    export class $SmartInventory$SyncedStackHandler extends $ItemStackHandler {
    }
    export class $SmartInventory extends $ItemHandlerContainer implements $IItemHandlerModifiable, $INBTSerializable<$CompoundTag> {
        getSlots(): number;
        getStackLimit(arg0: number, arg1: $ItemStack_): number;
        whenContentsChanged(arg0: $Consumer_<number>): $SmartInventory;
        forbidExtraction(): $SmartInventory;
        getStackInSlot(arg0: number): $ItemStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        forbidInsertion(): $SmartInventory;
        withMaxStackSize(arg0: number): $SmartInventory;
        allowInsertion(): $SmartInventory;
        allowExtraction(): $SmartInventory;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        constructor(arg0: $IItemHandlerModifiable, arg1: number, arg2: boolean);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: number, arg3: boolean, arg4: $BiPredicate_<number, $ItemStack>);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: number, arg3: boolean);
        constructor(arg0: number, arg1: $SyncedBlockEntity, arg2: $BiPredicate_<number, $ItemStack>);
        constructor(arg0: number, arg1: $SyncedBlockEntity);
        get slots(): number;
    }
    export class $ItemHelper$ExtractionCountMode extends $Enum<$ItemHelper$ExtractionCountMode> {
        static values(): $ItemHelper$ExtractionCountMode[];
        static valueOf(arg0: string): $ItemHelper$ExtractionCountMode;
        static EXACTLY: $ItemHelper$ExtractionCountMode;
        static UPTO: $ItemHelper$ExtractionCountMode;
    }
    /**
     * Values that may be interpreted as {@link $ItemHelper$ExtractionCountMode}.
     */
    export type $ItemHelper$ExtractionCountMode_ = "exactly" | "upto";
    export class $ItemSlots$SlotConsumer {
    }
    export interface $ItemSlots$SlotConsumer {
        accept(arg0: number, arg1: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $ItemSlots$SlotConsumer}.
     */
    export type $ItemSlots$SlotConsumer_ = ((arg0: number, arg1: $ItemStack) => void);
    export class $TooltipModifier {
        static mapNull(arg0: $TooltipModifier_): $TooltipModifier;
        static EMPTY: $TooltipModifier;
        static REGISTRY: $SimpleRegistry<$Item, $TooltipModifier>;
    }
    export interface $TooltipModifier {
        andThen(arg0: $TooltipModifier_): $TooltipModifier;
        modify(arg0: $ItemTooltipEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $TooltipModifier}.
     */
    export type $TooltipModifier_ = ((arg0: $ItemTooltipEvent) => void);
    export class $LayeredArmorItem {
    }
    export interface $LayeredArmorItem extends $CustomRenderedArmorItem {
        getArmorTextureLocation(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_, arg3: number): string;
        renderArmorPiece(arg0: $HumanoidArmorLayer<never, never, never>, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $LivingEntity, arg4: $EquipmentSlot_, arg5: number, arg6: $HumanoidModel<never>, arg7: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $LayeredArmorItem}.
     */
    export type $LayeredArmorItem_ = ((arg0: $LivingEntity, arg1: $EquipmentSlot, arg2: $ItemStack, arg3: number) => string);
    export class $ItemSlots {
        getSize(): number;
        set(arg0: number, arg1: $ItemStack_): void;
        forEach(arg0: $ItemSlots$SlotConsumer_): void;
        setSize(arg0: number): void;
        toHandler<T extends $IItemHandlerModifiable>(arg0: $IntFunction_<T>): T;
        static fromHandler(arg0: $IItemHandler): $ItemSlots;
        toBoxedMap(): $Map<number, $ItemStack>;
        static maxSizeCodec(arg0: number): $Codec<$ItemSlots>;
        static fromBoxedMap(arg0: $Map_<number, $ItemStack_>): $ItemSlots;
        static CODEC: $Codec<$ItemSlots>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemSlots>;
        constructor();
    }
    export class $UncontainableBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block, arg1: $Item$Properties);
    }
    export class $CountedItemStackList$ItemStackEntry extends $IntAttached<$ItemStack> {
        stack(): $ItemStack;
        matches(arg0: $ItemStack_): boolean;
        count(): number;
        grow(arg0: number): void;
        constructor(arg0: $ItemStack_);
        constructor(arg0: $ItemStack_, arg1: number);
    }
    export class $CountedItemStackList {
        add(arg0: $ItemStack_, arg1: number): void;
        add(arg0: $ItemStack_): void;
        getTopNames(arg0: number): $Stream<$IntAttached<$MutableComponent>>;
        constructor(arg0: $IItemHandler, arg1: $FilteringBehaviour);
    }
    export class $CustomRenderedArmorItem {
    }
    export interface $CustomRenderedArmorItem {
        renderArmorPiece(arg0: $HumanoidArmorLayer<never, never, never>, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $LivingEntity, arg4: $EquipmentSlot_, arg5: number, arg6: $HumanoidModel<never>, arg7: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomRenderedArmorItem}.
     */
    export type $CustomRenderedArmorItem_ = ((arg0: $HumanoidArmorLayer<never, never, never>, arg1: $PoseStack, arg2: $MultiBufferSource, arg3: $LivingEntity, arg4: $EquipmentSlot, arg5: number, arg6: $HumanoidModel<never>, arg7: $ItemStack) => void);
    export class $ItemDescription$Builder {
        build(): $ItemDescription;
        addBehaviour(arg0: string, arg1: string): $ItemDescription$Builder;
        addSummary(arg0: string): $ItemDescription$Builder;
        addAction(arg0: string, arg1: string): $ItemDescription$Builder;
        constructor(arg0: $FontHelper$Palette_);
    }
    export class $ItemHelper {
        static extract(arg0: $IItemHandler, arg1: $Predicate_<$ItemStack>, arg2: boolean): $ItemStack;
        static extract(arg0: $IItemHandler, arg1: $Predicate_<$ItemStack>, arg2: number, arg3: boolean): $ItemStack;
        static extract(arg0: $IItemHandler, arg1: $Predicate_<$ItemStack>, arg2: $ItemHelper$ExtractionCountMode_, arg3: number, arg4: boolean): $ItemStack;
        static extract(arg0: $IItemHandler, arg1: $Predicate_<$ItemStack>, arg2: $Function_<$ItemStack, number>, arg3: boolean): $ItemStack;
        static getNonEmptyStacks(arg0: $ItemStackHandler): $List<$ItemStack>;
        static containerContentsFromHandler(arg0: $ItemStackHandler): $ItemContainerContents;
        static sameItem(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static limitCountToMaxStackSize(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        static dropContents(arg0: $Level, arg1: $BlockPos_, arg2: $IItemHandler): void;
        static addToList(arg0: $ItemStack_, arg1: $List_<$ItemStack_>): void;
        static condenseIngredients(arg0: $NonNullList<$Ingredient_>): $List<$Pair<$Ingredient, $MutableInt>>;
        static fromItemEntity(arg0: $Entity): $ItemStack;
        static isSameInventory(arg0: $IItemHandler, arg1: $IItemHandler): boolean;
        static calcRedstoneFromBlockEntity<T extends $IBE<$BlockEntity>>(arg0: T, arg1: $Level, arg2: $BlockPos_): number;
        static calcRedstoneFromInventory(arg0: $IItemHandler): number;
        static copyContents(arg0: $IItemHandler, arg1: $IItemHandlerModifiable): void;
        static fillItemStackHandler(arg0: $ItemContainerContents, arg1: $ItemStackHandler): void;
        static matchAllIngredients(arg0: $NonNullList<$Ingredient_>): boolean;
        static canItemStackAmountsStack(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static findFirstMatchingSlotIndex(arg0: $IItemHandler, arg1: $Predicate_<$ItemStack>): number;
        static findFirstMatch(arg0: $IItemHandler, arg1: $Predicate_<$ItemStack>): $ItemStack;
        static sameItemPredicate(arg0: $ItemStack_): $Predicate<$ItemStack>;
        static matchIngredients(arg0: $Ingredient_, arg1: $Ingredient_): boolean;
        static multipliedOutput(arg0: $ItemStack_, arg1: $ItemStack_): $List<$ItemStack>;
        constructor();
    }
    export class $ItemDescription$Modifier implements $TooltipModifier {
        modify(arg0: $ItemTooltipEvent): void;
        andThen(arg0: $TooltipModifier_): $TooltipModifier;
        constructor(arg0: $Item, arg1: $FontHelper$Palette_);
    }
    export class $CustomUseEffectsItem {
    }
    export interface $CustomUseEffectsItem {
        triggerUseEffects(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number, arg3: $RandomSource): boolean;
        shouldTriggerUseEffects(arg0: $ItemStack_, arg1: $LivingEntity): $TriState;
    }
    /**
     * Values that may be interpreted as {@link $CustomUseEffectsItem}.
     */
    export type $CustomUseEffectsItem_ = ((arg0: $ItemStack, arg1: $LivingEntity, arg2: number, arg3: $RandomSource) => boolean);
    export class $ItemDescription extends $Record {
        lines(): $ImmutableList<$Component>;
        static create(arg0: string, arg1: $FontHelper$Palette_): $ItemDescription;
        static create(arg0: $Item, arg1: $FontHelper$Palette_): $ItemDescription;
        static useKey(arg0: $ItemLike_, arg1: string): void;
        static useKey(arg0: $Item, arg1: $Supplier_<string>): void;
        static referKey(arg0: $ItemLike_, arg1: $Supplier_<$ItemLike>): void;
        getCurrentLines(): $ImmutableList<$Component>;
        linesOnShift(): $ImmutableList<$Component>;
        static canFillBuilder(arg0: string): boolean;
        static fillBuilder(arg0: $ItemDescription$Builder, arg1: string): void;
        linesOnCtrl(): $ImmutableList<$Component>;
        static getTooltipTranslationKey(arg0: $Item): string;
        constructor(lines: $ImmutableList<$Component_>, linesOnShift: $ImmutableList<$Component_>, linesOnCtrl: $ImmutableList<$Component_>);
        get currentLines(): $ImmutableList<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $ItemDescription}.
     */
    export type $ItemDescription_ = { lines?: $ImmutableList<$Component_>, linesOnShift?: $ImmutableList<$Component_>, linesOnCtrl?: $ImmutableList<$Component_>,  } | [lines?: $ImmutableList<$Component_>, linesOnShift?: $ImmutableList<$Component_>, linesOnCtrl?: $ImmutableList<$Component_>, ];
    export class $CustomArmPoseItem {
    }
    export interface $CustomArmPoseItem {
        getArmPose(arg0: $ItemStack_, arg1: $AbstractClientPlayer, arg2: $InteractionHand_): $HumanoidModel$ArmPose;
    }
    /**
     * Values that may be interpreted as {@link $CustomArmPoseItem}.
     */
    export type $CustomArmPoseItem_ = ((arg0: $ItemStack, arg1: $AbstractClientPlayer, arg2: $InteractionHand) => $HumanoidModel$ArmPose_);
    export class $ItemHandlerWrapper implements $IItemHandlerModifiable {
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        kjs$getBlock(level: $Level): $LevelBlock;
        kjs$self(): $IItemHandler;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getWidth(): number;
        setChanged(): void;
        getHeight(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        asContainer(): $Container;
        getAllItems(): $List<$ItemStack>;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getStackInSlot(slot: number): $ItemStack;
        constructor(arg0: $IItemHandlerModifiable);
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
}
