import { $MapCodec } from "@package/com/mojang/serialization";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map } from "@package/java/util";
import { $BehaviourType } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntityRenderer, $KineticBlockEntity, $DirectionalKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $WorldAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ICogWheel } from "@package/com/simibubi/create/content/kinetics/simpleRelays";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SoundType, $SimpleWaterloggedBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PipeConnection, $FluidTransportBehaviour$UpdatePhase, $FluidTransportBehaviour } from "@package/com/simibubi/create/content/fluids";

declare module "@package/com/simibubi/create/content/fluids/pump" {
    export class $PumpBlock extends $DirectionalKineticBlock implements $SimpleWaterloggedBlock, $ICogWheel, $IBE<$PumpBlockEntity> {
        getBlockEntityClass(): $Class<$PumpBlockEntity>;
        static isOpenAt(arg0: $BlockState_, arg1: $Direction_): boolean;
        getBlockEntityType(): $BlockEntityType<$PumpBlockEntity>;
        static isPump(arg0: $BlockState_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        isDedicatedCogWheel(): boolean;
        isLargeCog(): boolean;
        isSmallCog(): boolean;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $PumpBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($PumpBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PumpBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PumpBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$PumpBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
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
        get blockEntityClass(): $Class<$PumpBlockEntity>;
        get blockEntityType(): $BlockEntityType<$PumpBlockEntity>;
        get dedicatedCogWheel(): boolean;
        get largeCog(): boolean;
        get smallCog(): boolean;
    }
    export class $PumpBlockEntity$PumpFluidTransferBehaviour extends $FluidTransportBehaviour {
        phase: $FluidTransportBehaviour$UpdatePhase;
        interfaces: $Map<$Direction, $PipeConnection>;
        blockEntity: $SmartBlockEntity;
        static interfaceTransfer: $WorldAttached<$Map<$BlockPos, $Map<$Direction, $PipeConnection>>>;
        static TYPE: $BehaviourType<$FluidTransportBehaviour>;
    }
    export class $PumpBlockEntity extends $KineticBlockEntity {
        isPullingOnSide(arg0: boolean): boolean;
        updatePipesOnSide(arg0: $Direction_): void;
        isSideAccessible(arg0: $Direction_): boolean;
        updatePressureChange(): void;
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
    }
    export class $PumpRenderer extends $KineticBlockEntityRenderer<$PumpBlockEntity> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
