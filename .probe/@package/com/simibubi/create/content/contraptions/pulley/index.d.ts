import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map, $Set } from "@package/java/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SuperByteBufferCache$Compartment, $SuperByteBuffer, $SpriteShiftEntry } from "@package/net/createmod/catnip/render";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $TranslatingContraption, $AbstractContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $HorizontalAxisKineticBlock, $KineticBlockEntityRenderer, $KineticBlockEntity, $ShaftVisual } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $CanLoadBigCannon } from "@package/rbasamoyai/createbigcannons/cannon_loading";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $HasFragileContraption } from "@package/rbasamoyai/createbigcannons/remix";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ThresholdSwitchObservable } from "@package/com/simibubi/create/content/redstone/thresholdSwitch";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $HosePulleyBlockEntity } from "@package/com/simibubi/create/content/fluids/hosePulley";
import { $LinearActuatorBlockEntity } from "@package/com/simibubi/create/content/contraptions/piston";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SimpleWaterloggedBlock, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/contraptions/pulley" {
    export class $AbstractPulleyVisual<T extends $KineticBlockEntity> extends $ShaftVisual<T> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number);
    }
    export class $PulleyContraption extends $TranslatingContraption implements $CanLoadBigCannon, $HasFragileContraption {
        createbigcannons$getAssemblyMovementDirection(arg0: $Level): $Direction;
        createbigcannons$getOriginalForcedDirection(arg0: $Level): $Direction;
        createbigcannons$getCannonLoadingColliders(): $Set<any>;
        createbigcannons$getEncounteredBlocks(): $Map<any, any>;
        createbigcannons$fragileDisassemble(): void;
        createbigcannons$setBrokenDisassembly(arg0: boolean): void;
        createbigcannons$isBrokenDisassembly(): boolean;
        createbigcannons$toLocalPos(arg0: $BlockPos_): $BlockPos;
        createbigcannons$getFragileBlockPositions(): $Set<any>;
        createbigcannons$blockBreaksDisassembly(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        createbigcannons$shouldCheckFragility(): boolean;
        getInitialOffset(): number;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor(arg0: number);
        constructor();
        get initialOffset(): number;
    }
    export class $HosePulleyVisual extends $AbstractPulleyVisual<$HosePulleyBlockEntity> {
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $HosePulleyBlockEntity, arg2: number);
    }
    export class $AbstractPulleyRenderer<T extends $KineticBlockEntity> extends $KineticBlockEntityRenderer<T> {
        shouldRenderOffScreen(arg0: T): boolean;
        static renderAt(arg0: $LevelAccessor, arg1: $SuperByteBuffer, arg2: number, arg3: $BlockPos_, arg4: $PoseStack, arg5: $VertexConsumer): void;
        static scrollCoil(arg0: $SuperByteBuffer, arg1: $SpriteShiftEntry, arg2: number, arg3: number): $SuperByteBuffer;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context, arg1: $PartialModel, arg2: $PartialModel);
    }
    export class $PulleyBlock$RopeBlockBase extends $Block implements $SimpleWaterloggedBlock {
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
    }
    export class $PulleyBlock$MagnetBlock extends $PulleyBlock$RopeBlockBase {
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
    }
    export class $PulleyBlock extends $HorizontalAxisKineticBlock implements $IBE<$PulleyBlockEntity> {
        getBlockEntityClass(): $Class<$PulleyBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$PulleyBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $PulleyBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($PulleyBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PulleyBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PulleyBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$PulleyBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static HORIZONTAL_AXIS: $Property<$Direction$Axis>;
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
        get blockEntityClass(): $Class<$PulleyBlockEntity>;
        get blockEntityType(): $BlockEntityType<$PulleyBlockEntity>;
    }
    export class $PulleyRenderer extends $AbstractPulleyRenderer<$PulleyBlockEntity> {
        static isPulleyRunning(arg0: $PulleyBlockEntity): boolean;
        static getBlockEntityOffset(arg0: number, arg1: $PulleyBlockEntity): number;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $PulleyBlockEntity extends $LinearActuatorBlockEntity implements $ThresholdSwitchObservable {
        format(arg0: number): $MutableComponent;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getMinValue(): number;
        getMaxValue(): number;
        getCurrentValue(): number;
        animateOffset(arg0: number): void;
        getMirrorParent(): $BlockPos;
        notifyMirrorsOfDisassembly(): void;
        getAttachedContraption(): $AbstractContraptionEntity;
        startMirroringOther(arg0: $BlockPos_): void;
        offset: number;
        level: $Level;
        sharedMirrorContraption: $WeakReference<$AbstractContraptionEntity>;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        needsContraption: boolean;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        movedContraption: $AbstractContraptionEntity;
        network: number;
        running: boolean;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        assembleNextTick: boolean;
        updateSpeed: boolean;
        hasComparators: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get minValue(): number;
        get maxValue(): number;
        get currentValue(): number;
        get mirrorParent(): $BlockPos;
        get attachedContraption(): $AbstractContraptionEntity;
    }
    export class $AbstractPulleyVisual$LightCache {
    }
    export class $RopePulleyVisual extends $AbstractPulleyVisual<$PulleyBlockEntity> {
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $PulleyBlockEntity, arg2: number);
    }
    export class $PulleyBlock$RopeBlock extends $PulleyBlock$RopeBlockBase {
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
    }
}
