import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Instance, $InstancerProvider_ } from "@package/dev/engine_room/flywheel/api/instance";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ItemHandlerWrapper } from "@package/com/simibubi/create/foundation/item";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $TickableVisual$Context, $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/contraptions/actors/psi" {
    export class $PortableStorageInterfaceBlockEntity extends $SmartBlockEntity {
        isPowered(): boolean;
        canTransfer(): boolean;
        startTransferringTo(arg0: $Contraption, arg1: number): void;
        isTransferring(): boolean;
        startConnecting(): void;
        neighbourChanged(): void;
        onContentTransferred(): void;
        worldPosition: $BlockPos;
        keepAlive: number;
        level: $Level;
        static ANIMATION: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get powered(): boolean;
        get transferring(): boolean;
    }
    export class $PSIVisual extends $AbstractBlockEntityVisual<$PortableStorageInterfaceBlockEntity> implements $SimpleDynamicVisual, $SimpleTickableVisual {
        tick(arg0: $TickableVisual$Context): void;
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        planTick(): $Plan<$TickableVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $PortableStorageInterfaceBlockEntity, arg2: number);
    }
    export class $PortableStorageInterfaceBlock extends $WrenchableDirectionalBlock implements $IBE<$PortableStorageInterfaceBlockEntity> {
        getBlockEntityClass(): $Class<$PortableStorageInterfaceBlockEntity>;
        static forItems(arg0: $BlockBehaviour$Properties): $PortableStorageInterfaceBlock;
        getBlockEntityType(): $BlockEntityType<$PortableStorageInterfaceBlockEntity>;
        static forFluids(arg0: $BlockBehaviour$Properties): $PortableStorageInterfaceBlock;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $PortableStorageInterfaceBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($PortableStorageInterfaceBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PortableStorageInterfaceBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PortableStorageInterfaceBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$PortableStorageInterfaceBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
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
        get blockEntityClass(): $Class<$PortableStorageInterfaceBlockEntity>;
        get blockEntityType(): $BlockEntityType<$PortableStorageInterfaceBlockEntity>;
    }
    export class $PIInstance {
        remove(): void;
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
        tick(arg0: boolean): void;
        beginFrame(arg0: number): void;
        constructor(arg0: $InstancerProvider_, arg1: $BlockState_, arg2: $BlockPos_, arg3: boolean);
    }
    export class $PortableFluidInterfaceBlockEntity$InterfaceFluidHandler implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        keepAlive(): void;
        getTankCapacity(arg0: number): number;
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        constructor(arg0: $PortableFluidInterfaceBlockEntity, arg1: $IFluidHandler);
        get tanks(): number;
    }
    export class $PSIActorVisual extends $ActorVisual {
        constructor(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext);
    }
    export class $PortableStorageInterfaceRenderer extends $SafeBlockEntityRenderer<$PortableStorageInterfaceBlockEntity> {
        static renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $PortableItemInterfaceBlockEntity$InterfaceItemHandler extends $ItemHandlerWrapper {
    }
    export class $PortableStorageInterfaceMovement implements $MovementBehaviour {
        reset(arg0: $MovementContext): void;
        stopMoving(arg0: $MovementContext): void;
        disableBlockEntityRendering(): boolean;
        tick(arg0: $MovementContext): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        cancelStall(arg0: $MovementContext): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        static getAnimation(arg0: $MovementContext): $LerpedFloat;
        isActive(arg0: $MovementContext): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        writeExtraData(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        startMoving(arg0: $MovementContext): void;
        constructor();
    }
    export class $PortableFluidInterfaceBlockEntity extends $PortableStorageInterfaceBlockEntity {
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        worldPosition: $BlockPos;
        keepAlive: number;
        level: $Level;
        static ANIMATION: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $PortableItemInterfaceBlockEntity extends $PortableStorageInterfaceBlockEntity {
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        worldPosition: $BlockPos;
        keepAlive: number;
        level: $Level;
        static ANIMATION: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
