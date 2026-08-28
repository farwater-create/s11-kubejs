import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_, $BlockEntityWithoutLevelRenderer } from "@package/net/minecraft/client/renderer";
import { $EquipmentSlot_, $EquipmentSlot, $LivingEntity, $HumanoidArm_, $Entity } from "@package/net/minecraft/world/entity";
import { $Minecraft, $DeltaTracker } from "@package/net/minecraft/client";
import { $IClientItemExtensions$FontContext_, $IClientItemExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $RenderPlayerEvent$Pre, $RenderArmEvent } from "@package/net/neoforged/neoforge/client/event";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $InteractionResult, $InteractionHand_, $Nameable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $RegistrateItemModelProvider, $DataGenContext } from "@package/com/tterrag/registrate/providers";
import { $VarHandle } from "@package/java/lang/invoke";
import { $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $Item, $ArmorItem, $ArmorItem$Type, $Item$Properties, $ArmorMaterial, $BlockItem, $ItemStack_, $ItemStack, $ArmorItem$Type_, $ArmorMaterial$Layer } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BacktankBlockEntityAccess } from "@package/snownee/jade/addon/mixin/create";
import { $EntityEvent$Size } from "@package/net/neoforged/neoforge/event/entity";
import { $SoundType, $Block, $SimpleWaterloggedBlock } from "@package/net/minecraft/world/level/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $RenderLayer, $HumanoidArmorLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $Map, $List } from "@package/java/util";
import { $HumanoidModel$ArmPose, $Model, $EntityModel, $HumanoidModel } from "@package/net/minecraft/client/model";
import { $Supplier_, $Consumer_, $Function_, $Supplier } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Holder_, $Holder, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntityRenderer, $KineticBlockEntity, $HorizontalKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class, $Object } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $BlockGetter, $Level } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $EntityRenderDispatcher, $RenderLayerParent, $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $DispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $FluidState, $Fluid } from "@package/net/minecraft/world/level/material";
import { $ItemAttributeModifiers } from "@package/net/minecraft/world/item/component";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $PlayerTabOverlay } from "@package/net/minecraft/client/gui/components";
import { $PlayerTickEvent$Post, $EntityTickEvent$Pre } from "@package/net/neoforged/neoforge/event/tick";
import { $LayeredArmorItem } from "@package/com/simibubi/create/foundation/item";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEvent$LivingVisibilityEvent, $LivingEquipmentChangeEvent, $LivingBreatheEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Gui, $Font, $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/equipment/armor" {
    export class $BacktankItem extends $BaseArmorItem {
        getBlock(): $Block;
        static getWornBy(arg0: $Entity): $BacktankItem;
        static getRemainingAir(arg0: $ItemStack_): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        material: $Holder<$ArmorMaterial>;
        static BAR_COLOR: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static SLOT: $EquipmentSlot;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        static TYPE: $ArmorItem$Type;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $Item$Properties, arg2: $ResourceLocation_, arg3: $Supplier_<$BacktankItem$BacktankBlockItem>);
        get block(): $Block;
    }
    export class $AllArmorMaterials {
        static register(arg0: $IEventBus): void;
        static CARDBOARD: $Holder<$ArmorMaterial>;
        static COPPER: $Holder<$ArmorMaterial>;
        constructor();
    }
    export class $TrimmableArmorModelGenerator {
        static generate<T extends $ArmorItem>(arg0: $DataGenContext<$Item, T>, arg1: $RegistrateItemModelProvider): void;
        static TEXTURES_HANDLE: $VarHandle;
        constructor();
    }
    export class $BacktankItem$BacktankBlockItem extends $BlockItem {
        getActualItem(): $Item;
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
        constructor(arg0: $Block, arg1: $Supplier_<$Item>, arg2: $Item$Properties);
        get actualItem(): $Item;
    }
    export class $CardboardArmorHandlerClient {
        static keepCacheAliveDesignDespiteNotRendering(arg0: $PlayerTickEvent$Post): void;
        static playerRendersAsBoxWhenSneaking(arg0: $RenderPlayerEvent$Pre): void;
        constructor();
    }
    export class $BacktankBlock extends $HorizontalKineticBlock implements $IBE<$BacktankBlockEntity>, $SimpleWaterloggedBlock, $SpecialBlockItemRequirement {
        getBlockEntityClass(): $Class<$BacktankBlockEntity>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityType(): $BlockEntityType<$BacktankBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $BacktankBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($BacktankBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BacktankBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BacktankBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$BacktankBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        static HORIZONTAL_FACING: $Property<$Direction>;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$BacktankBlockEntity>;
        get blockEntityType(): $BlockEntityType<$BacktankBlockEntity>;
    }
    export class $NetheriteDivingHandler {
        static setBit(arg0: $LivingEntity, arg1: $EquipmentSlot_): void;
        static clearBit(arg0: $LivingEntity, arg1: $EquipmentSlot_): void;
        static onLivingEquipmentChange(arg0: $LivingEquipmentChangeEvent): void;
        static isNetheriteBacktank(arg0: $ItemStack_): boolean;
        static isNetheriteDivingHelmet(arg0: $ItemStack_): boolean;
        static setFireImmune(arg0: $LivingEntity, arg1: boolean): void;
        static isNetheriteArmor(arg0: $ItemStack_): boolean;
        static NETHERITE_DIVING_BITS_KEY: string;
        static FIRE_IMMUNE_KEY: string;
        constructor();
    }
    export class $BaseArmorItem extends $ArmorItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        material: $Holder<$ArmorMaterial>;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        type: $ArmorItem$Type;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $ArmorItem$Type_, arg2: $Item$Properties, arg3: $ResourceLocation_);
    }
    export class $BacktankBlockEntity extends $KineticBlockEntity implements $Nameable, $BacktankBlockEntityAccess {
        getName(): $Component;
        setCustomName(arg0: $Component_): void;
        setCapacityEnchantLevel(arg0: number): void;
        getComponentPatch(): $DataComponentPatch;
        setComponentPatch(arg0: $DataComponentPatch_): void;
        getAirLevel(): number;
        setAirLevel(arg0: number): void;
        static getDefaultName(arg0: $BlockState_): $Component;
        getComparatorOutput(): number;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        getCustomName(): $Component;
        getCapacityEnchantLevel(): number;
        level: $Level;
        airLevelTimer: number;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        updateSpeed: boolean;
        hasComparators: number;
        airLevel: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get name(): $Component;
        get comparatorOutput(): number;
        get displayName(): $Component;
    }
    export class $BacktankArmorLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        static registerOn(arg0: $EntityRenderer<never>): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        static registerOnAll(arg0: $EntityRenderDispatcher): void;
        constructor(arg0: $RenderLayerParent<T, M>);
    }
    export class $BacktankRenderer extends $KineticBlockEntityRenderer<$BacktankBlockEntity> {
        static getShaftModel(arg0: $BlockState_): $PartialModel;
        static getCogsModel(arg0: $BlockState_): $PartialModel;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $CardboardArmorHandler {
        static mobsMayLoseTargetWhenItIsWearingCardboard(arg0: $EntityTickEvent$Pre): void;
        static isCardboardArmor(arg0: $ItemStack_): boolean;
        static playerChangesEquipment(arg0: $LivingEquipmentChangeEvent): void;
        static testForStealth(arg0: $Entity): boolean;
        static playersStealthWhenWearingCardboard(arg0: $LivingEvent$LivingVisibilityEvent): void;
        static playerHitboxChangesWhenHidingAsBox(arg0: $EntityEvent$Size): void;
        constructor();
    }
    export class $DivingHelmetItem extends $BaseArmorItem {
        static getWornItem(arg0: $Entity): $ItemStack;
        static isWornBy(arg0: $Entity): boolean;
        static breatheUnderwater(arg0: $LivingBreatheEvent): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static SLOT: $EquipmentSlot;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        static TYPE: $ArmorItem$Type;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $Item$Properties, arg2: $ResourceLocation_);
    }
    export class $NetheriteBacktankFirstPersonRenderer {
        static clientTick(): void;
        static onRenderPlayerHand(arg0: $RenderArmEvent): void;
        constructor();
    }
    export class $CardboardArmorStealthOverlay extends $Gui implements $IClientItemExtensions {
        renderHelmetOverlay(arg0: $ItemStack_, arg1: $Player, arg2: number, arg3: number, arg4: number): void;
        static clientTick(): void;
        getScopeOverlayTexture(arg0: $ItemStack_): $ResourceLocation;
        setupModelAnimations(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $Model, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getArmorLayerTintColor(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $ArmorMaterial$Layer, arg3: number, arg4: number): number;
        applyForgeHandTransform(arg0: $PoseStack, arg1: $LocalPlayer, arg2: $HumanoidArm_, arg3: $ItemStack_, arg4: number, arg5: number, arg6: number): boolean;
        getHumanoidArmorModel(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $HumanoidModel<never>): $HumanoidModel<never>;
        shouldSpreadAsEntity(arg0: $ItemStack_): boolean;
        getGenericArmorModel(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $HumanoidModel<never>): $Model;
        renderHelmetOverlay(arg0: $ItemStack_, arg1: $Player, arg2: $GuiGraphics, arg3: $DeltaTracker): void;
        shouldBobAsEntity(arg0: $ItemStack_): boolean;
        getDefaultDyeColor(arg0: $ItemStack_): number;
        getArmPose(arg0: $LivingEntity, arg1: $InteractionHand_, arg2: $ItemStack_): $HumanoidModel$ArmPose;
        getFont(arg0: $ItemStack_, arg1: $IClientItemExtensions$FontContext_): $Font;
        getCustomRenderer(): $BlockEntityWithoutLevelRenderer;
        minecraft: $Minecraft;
        tabList: $PlayerTabOverlay;
        static SPYGLASS_SCOPE_LOCATION: $ResourceLocation;
        vignetteBrightness: number;
        rightHeight: number;
        displayHealth: number;
        leftHeight: number;
        overlayMessageTime: number;
        constructor();
        get customRenderer(): $BlockEntityWithoutLevelRenderer;
    }
    export class $BacktankItem$Layered extends $BacktankItem implements $LayeredArmorItem {
        getArmorTextureLocation(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_, arg3: number): string;
        renderArmorPiece(arg0: $HumanoidArmorLayer<never, never, never>, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $LivingEntity, arg4: $EquipmentSlot_, arg5: number, arg6: $HumanoidModel<never>, arg7: $ItemStack_): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        material: $Holder<$ArmorMaterial>;
        static BAR_COLOR: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static SLOT: $EquipmentSlot;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        static TYPE: $ArmorItem$Type;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $Item$Properties, arg2: $ResourceLocation_, arg3: $Supplier_<$BacktankItem$BacktankBlockItem>);
    }
    export class $DivingBootsItem extends $BaseArmorItem {
        static accelerateDescentUnderwater(arg0: $EntityTickEvent$Pre): void;
        static getWornItem(arg0: $Entity): $ItemStack;
        static isWornBy(arg0: $Entity): boolean;
        static getMovementMultiplier(arg0: $LivingEntity): $Vec3;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static MAX_BAR_WIDTH: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $ArmorItem$Type;
        static DEFAULT_MAX_STACK_SIZE: number;
        material: $Holder<$ArmorMaterial>;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static SLOT: $EquipmentSlot;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        static TYPE: $ArmorItem$Type;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $Item$Properties, arg2: $ResourceLocation_);
    }
    export class $CardboardArmorItem extends $BaseArmorItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        material: $Holder<$ArmorMaterial>;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        canRepair: boolean;
        type: $ArmorItem$Type;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $ArmorItem$Type_, arg1: $Item$Properties);
    }
    export class $RemainingAirOverlay implements $LayeredDraw$Layer {
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static getDisplayedBacktank(arg0: $LocalPlayer): $ItemStack;
        static INSTANCE: $RemainingAirOverlay;
        constructor();
    }
    export class $BacktankUtil {
        static maxAir(arg0: $ItemStack_): number;
        static maxAir(arg0: number): number;
        static getBarColor(arg0: $ItemStack_, arg1: number): number;
        static isBarVisible(arg0: $ItemStack_, arg1: number): boolean;
        static getBarWidth(arg0: $ItemStack_, arg1: number): number;
        static maxAirWithoutEnchants(): number;
        static consumeAir(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): void;
        static getAir(arg0: $ItemStack_): number;
        static canAbsorbDamage(arg0: $LivingEntity, arg1: number): boolean;
        static getAllWithAir(arg0: $LivingEntity): $List<$ItemStack>;
        static addBacktankSupplier(arg0: $Function_<$LivingEntity, $List<$ItemStack>>): void;
        static hasAirRemaining(arg0: $ItemStack_): boolean;
        constructor();
    }
}
