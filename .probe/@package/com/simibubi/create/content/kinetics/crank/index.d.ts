import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $BehaviourType, $ValueSettingsBehaviour$ValueSettings_, $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SuperByteBufferCache$Compartment, $SuperByteBuffer } from "@package/net/createmod/catnip/render";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntityRenderer, $DirectionalKineticBlock, $KineticBlockEntityVisual, $GeneratingKineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $ProperWaterloggedBlock, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $DyeColor_, $Item, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $ScrollValueBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/crank" {
    export class $HandCrankVisual extends $KineticBlockEntityVisual<$HandCrankBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $HandCrankBlockEntity, arg2: number);
    }
    export class $HandCrankRenderer extends $KineticBlockEntityRenderer<$HandCrankBlockEntity> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ValveHandleBlockEntity$ValveHandleValueBox extends $ValueBoxTransform$Sided {
        constructor();
    }
    export class $ValveHandleVisual extends $KineticBlockEntityVisual<$HandCrankBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $HandCrankBlockEntity, arg2: number);
    }
    export class $ValveHandleBlockEntity$ValveHandleScrollValueBehaviour extends $ScrollValueBehaviour {
        formatValue(arg0: $ValueSettingsBehaviour$ValueSettings_): $MutableComponent;
        blockEntity: $SmartBlockEntity;
        label: $Component;
        static TYPE: $BehaviourType<$ScrollValueBehaviour>;
        value: number;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $ValveHandleBlock extends $HandCrankBlock {
        clicked(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Player, arg4: $InteractionHand_): boolean;
        static copper(arg0: $BlockBehaviour$Properties): $ValveHandleBlock;
        static onBlockActivated(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static dyed(arg0: $BlockBehaviour$Properties, arg1: $DyeColor_): $ValveHandleBlock;
        explosionResistance: number;
        color: $DyeColor;
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
        static FACING: $DirectionProperty;
        hasCollision: boolean;
    }
    export class $HandCrankBlock extends $DirectionalKineticBlock implements $IBE<$HandCrankBlockEntity>, $ProperWaterloggedBlock {
        getBlockEntityClass(): $Class<$HandCrankBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$HandCrankBlockEntity>;
        getRotationSpeed(): number;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $HandCrankBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($HandCrankBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$HandCrankBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$HandCrankBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$HandCrankBlockEntity>): void;
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
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$HandCrankBlockEntity>;
        get blockEntityType(): $BlockEntityType<$HandCrankBlockEntity>;
        get rotationSpeed(): number;
    }
    export class $HandCrankBlockEntity extends $GeneratingKineticBlockEntity {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        turn(arg0: boolean): void;
        getIndependentAngle(arg0: number): number;
        shouldRenderShaft(): boolean;
        getRenderedHandle(): $SuperByteBuffer;
        level: $Level;
        reActivateSource: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        chasingAngularVelocity: number;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        backwards: boolean;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        independentAngle: number;
        inUse: number;
        updateSpeed: boolean;
        hasComparators: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get renderedHandle(): $SuperByteBuffer;
    }
    export class $ValveHandleBlockEntity extends $HandCrankBlockEntity {
        activate(arg0: boolean): boolean;
        showValue(): boolean;
        level: $Level;
        reActivateSource: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        chasingAngularVelocity: number;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        backwards: boolean;
        network: number;
        angleInput: $ScrollValueBehaviour;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        independentAngle: number;
        cooldown: number;
        inUse: number;
        updateSpeed: boolean;
        hasComparators: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
