import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $EntityDimensions, $Entity$RemovalReason, $Pose, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Clearable, $InteractionResult, $InteractionHand_, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Item, $Item$Properties, $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DirectBeltInputBehaviour } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Random, $Map, $UUID, $List, $List_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $BlockEntityBehaviour, $BehaviourType, $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$LeftClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntity, $ShaftVisual, $HorizontalKineticBlock, $ShaftRenderer } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $BlockGetter, $Level } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $FluidState, $Fluid } from "@package/net/minecraft/world/level/material";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as storage from "@package/com/simibubi/create/content/logistics/depot/storage";

declare module "@package/com/simibubi/create/content/logistics/depot" {
    export class $DepotBlock extends $Block implements $IBE<$DepotBlockEntity>, $IWrenchable, $ProperWaterloggedBlock {
        getBlockEntityClass(): $Class<$DepotBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$DepotBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $DepotBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($DepotBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DepotBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DepotBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$DepotBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        fluidState(arg0: $BlockState_): $FluidState;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
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
        get blockEntityClass(): $Class<$DepotBlockEntity>;
        get blockEntityType(): $BlockEntityType<$DepotBlockEntity>;
    }
    export class $EntityLauncher {
        clamp(arg0: number): void;
        x(arg0: number): number;
        set(arg0: number, arg1: number): void;
        y(arg0: number): number;
        dx(arg0: number): number;
        dy(arg0: number): number;
        getGlobalVelocity(arg0: number, arg1: $Direction_, arg2: $BlockPos_): $Vec3;
        getHorizontalDistance(): number;
        getGlobalPos(arg0: number, arg1: $Direction_, arg2: $BlockPos_): $Vec3;
        getTotalFlyingTicks(): number;
        getVerticalDistance(): number;
        applyMotion(arg0: $Entity, arg1: $Direction_): void;
        constructor(arg0: number, arg1: number);
        get horizontalDistance(): number;
        get totalFlyingTicks(): number;
        get verticalDistance(): number;
    }
    export class $EjectorBlockEntity$State extends $Enum<$EjectorBlockEntity$State> {
        static values(): $EjectorBlockEntity$State[];
        static valueOf(arg0: string): $EjectorBlockEntity$State;
        static LAUNCHING: $EjectorBlockEntity$State;
        static CHARGED: $EjectorBlockEntity$State;
        static RETRACTING: $EjectorBlockEntity$State;
    }
    /**
     * Values that may be interpreted as {@link $EjectorBlockEntity$State}.
     */
    export type $EjectorBlockEntity$State_ = "charged" | "launching" | "retracting";
    export class $EjectorBlockEntity$EjectorSlot extends $ValueBoxTransform$Sided {
    }
    export class $EjectorBlockEntity extends $KineticBlockEntity {
        getState(): $EjectorBlockEntity$State;
        setTarget(arg0: number, arg1: number): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        activate(): void;
        getTargetPosition(): $BlockPos;
        updateSignal(): void;
        getLaunchedItemLocation(arg0: number): $Vec3;
        getLaunchedItemMotion(arg0: number): $Vec3;
        handler$hja00b$sable$tick(arg0: $CallbackInfo): void;
        wrapOperation$hja000$sable$setPos(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>): void;
        handler$hja000$sable$launchSubLevels(arg0: $CallbackInfo): void;
        deployElytra(arg0: $Player): void;
        getLidProgress(arg0: number): number;
        getWindUpSpeed(): number;
        activateDeferred(): void;
        getTargetOpenInv(): $DirectBeltInputBehaviour;
        dropFlyingItems(): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $EjectorBlockEntity$State;
        get targetPosition(): $BlockPos;
        get windUpSpeed(): number;
        get targetOpenInv(): $DirectBeltInputBehaviour;
    }
    export class $EjectorBlock extends $HorizontalKineticBlock implements $IBE<$EjectorBlockEntity>, $ProperWaterloggedBlock {
        redirect$hjb000$sable$setPos$mixinextras$bridge$23(arg0: $Vec3_, arg1: $Vec3_, arg2: $LocalRef<any>): $Vec3;
        getBlockEntityClass(): $Class<$EjectorBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$EjectorBlockEntity>;
        redirect$hjb000$sable$distanceTo(arg0: $Vec3_, arg1: $Vec3_, arg2: $Entity): number;
        redirect$hjb000$sable$setPos(arg0: $Vec3_, arg1: $Vec3_, arg2: $Entity): $Vec3;
        redirect$hjb000$sable$distanceTo$mixinextras$bridge$22(arg0: $Vec3_, arg1: $Vec3_, arg2: $LocalRef<any>): number;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $EjectorBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($EjectorBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$EjectorBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$EjectorBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$EjectorBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        fluidState(arg0: $BlockState_): $FluidState;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
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
        get blockEntityClass(): $Class<$EjectorBlockEntity>;
        get blockEntityType(): $BlockEntityType<$EjectorBlockEntity>;
    }
    export class $EjectorTriggerPacket extends $BlockEntityConfigurationPacket<$EjectorBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorTriggerPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $DepotBehaviour extends $BlockEntityBehaviour implements $Clearable {
        insert(arg0: $TransportedItemStack, arg1: boolean): $ItemStack;
        isEmpty(): boolean;
        getRemainingSpace(): number;
        clearContent(): void;
        setCenteredHeldItem(arg0: $TransportedItemStack): void;
        withCallback(arg0: $Consumer_<$ItemStack>): $DepotBehaviour;
        setHeldItem(arg0: $TransportedItemStack): void;
        canMergeItems(): boolean;
        isItemValid(arg0: $ItemStack_): boolean;
        getHeldItemStack(): $ItemStack;
        removeHeldItem(): void;
        getPresentStackSize(): number;
        enableMerging(): void;
        addSubBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        onlyAccepts(arg0: $Predicate_<$ItemStack>): $DepotBehaviour;
        isOutputEmpty(): boolean;
        createLazyTick$getCurrentDelayTick(): number;
        handler$caj006$createlazytick$tick(arg0: $CallbackInfo): void;
        createLazyTick$getDepotDelayTick(): number;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$DepotBehaviour>;
        itemHandler: $DepotItemHandler;
        constructor(arg0: $SmartBlockEntity);
        get empty(): boolean;
        get remainingSpace(): number;
        set centeredHeldItem(value: $TransportedItemStack);
        set heldItem(value: $TransportedItemStack);
        get heldItemStack(): $ItemStack;
        get presentStackSize(): number;
        get outputEmpty(): boolean;
    }
    export class $EjectorRenderer extends $ShaftRenderer<$EjectorBlockEntity> {
        shouldRenderOffScreen(arg0: $EjectorBlockEntity): boolean;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $EjectorAwardPacket extends $BlockEntityConfigurationPacket<$EjectorBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorAwardPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $SharedDepotBlockMethods {
        static onUse(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        static getComparatorInputOverride(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_): number;
        static onLanded(arg0: $BlockGetter, arg1: $Entity): void;
        constructor();
    }
    export class $EjectorElytraPacket extends $Record implements $ServerboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorElytraPacket>;
        constructor(pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $EjectorElytraPacket}.
     */
    export type $EjectorElytraPacket_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $DepotRenderer extends $SafeBlockEntityRenderer<$DepotBlockEntity> {
        static renderItem(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: $ItemStack_, arg5: number, arg6: $Random, arg7: $Vec3_, arg8: boolean): void;
        static renderItemsOf(arg0: $SmartBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $DepotBehaviour): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $EjectorBlockEntity$EntityHack extends $Entity {
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
    }
    export class $EjectorPlacementPacket$ClientBoundRequest extends $Record implements $ClientboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorPlacementPacket$ClientBoundRequest>;
        constructor(pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $EjectorPlacementPacket$ClientBoundRequest}.
     */
    export type $EjectorPlacementPacket$ClientBoundRequest_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $EjectorVisual extends $ShaftVisual<$EjectorBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $EjectorBlockEntity, arg2: number);
    }
    export class $MountedDepotInteractionBehaviour extends $MovingInteractionBehaviour {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $DepotBlockEntity extends $SmartBlockEntity implements $Clearable, $IHaveGoggleInformation {
        clearContent(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getHeldItem(): $ItemStack;
        setHeldItem(arg0: $ItemStack_): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $DepotItemHandler implements $IItemHandler {
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
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
        constructor(arg0: $DepotBehaviour);
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $EjectorPlacementPacket extends $Record implements $ServerboundPacketPayload {
        h(): number;
        v(): number;
        pos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        facing(): $Direction;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorPlacementPacket>;
        constructor(h: number, v: number, pos: $BlockPos_, facing: $Direction_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $EjectorPlacementPacket}.
     */
    export type $EjectorPlacementPacket_ = { v?: number, h?: number, facing?: $Direction_, pos?: $BlockPos_,  } | [v?: number, h?: number, facing?: $Direction_, pos?: $BlockPos_, ];
    export class $EjectorTargetHandler {
        static tick(): void;
        static drawOutline(arg0: $BlockPos_): void;
        static getValidTargetDirection(arg0: $BlockPos_): $Direction;
        static leftClickingBlocksDeselectsThem(arg0: $PlayerInteractEvent$LeftClickBlock): void;
        static rightClickingBlocksSelectsThem(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static flushSettings(arg0: $BlockPos_): void;
        constructor();
    }
    export class $EjectorItem extends $BlockItem {
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
}
