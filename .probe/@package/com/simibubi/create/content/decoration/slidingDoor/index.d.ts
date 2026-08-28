import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SlidingDoorBlockEntityAccessor } from "@package/com/copycatsplus/copycats/mixin/copycat/sliding_door";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IHaveBigOutline, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $ScrollInput, $Label } from "@package/com/simibubi/create/foundation/gui/widget";
import { $DirectionProperty, $BlockSetType, $BlockSetType_, $DoorHingeSide_, $DoorHingeSide, $EnumProperty, $BooleanProperty, $DoubleBlockHalf } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $DoorBlock, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/decoration/slidingDoor" {
    export class $SlidingDoorRenderer extends $SafeBlockEntityRenderer<$SlidingDoorBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $SlidingDoorMovementBehaviour implements $MovementBehaviour {
        tick(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        isActive(arg0: $MovementContext): boolean;
        stopMoving(arg0: $MovementContext): void;
        disableBlockEntityRendering(): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        onDisabledByControls(arg0: $MovementContext): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        writeExtraData(arg0: $MovementContext): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        cancelStall(arg0: $MovementContext): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        startMoving(arg0: $MovementContext): void;
        constructor();
    }
    export class $SlidingDoorShapes {
        static get(arg0: $Direction_, arg1: boolean, arg2: boolean): $VoxelShape;
        constructor();
    }
    export class $DoorControlBehaviour extends $BlockEntityBehaviour {
        set(arg0: $DoorControl_): void;
        mode: $DoorControl;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$DoorControlBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $SlidingDoorBlockEntity extends $SmartBlockEntity implements $SlidingDoorBlockEntityAccessor {
        static isOpen(arg0: $BlockState_): boolean;
        getAnimation(): $LerpedFloat;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get animation(): $LerpedFloat;
    }
    export class $DoorControl extends $Enum<$DoorControl> {
        static values(): $DoorControl[];
        static valueOf(arg0: string): $DoorControl;
        matches(arg0: $Direction_): boolean;
        static createWidget(arg0: number, arg1: number, arg2: $Consumer_<$DoorControl>, arg3: $DoorControl_): $Pair<$ScrollInput, $Label>;
        static ALL: $DoorControl;
        static NORTH: $DoorControl;
        static WEST: $DoorControl;
        static SOUTH: $DoorControl;
        static NONE: $DoorControl;
        static EAST: $DoorControl;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DoorControl>;
    }
    /**
     * Values that may be interpreted as {@link $DoorControl}.
     */
    export type $DoorControl_ = "all" | "north" | "east" | "south" | "west" | "none";
    export class $SlidingDoorBlock extends $DoorBlock implements $IWrenchable, $IBE<$SlidingDoorBlockEntity>, $IHaveBigOutline {
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        deferUpdate(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        static isDoubleDoor(arg0: $BlockState_, arg1: $DoorHingeSide_, arg2: $Direction_, arg3: $BlockState_): boolean;
        static isDoorPowered(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        isFoldingDoor(): boolean;
        getBlockEntityClass(): $Class<$SlidingDoorBlockEntity>;
        static stone(arg0: $BlockBehaviour$Properties, arg1: boolean): $SlidingDoorBlock;
        static glass(arg0: $BlockBehaviour$Properties, arg1: boolean): $SlidingDoorBlock;
        getBlockEntityType(): $BlockEntityType<$SlidingDoorBlockEntity>;
        static metal(arg0: $BlockBehaviour$Properties, arg1: boolean): $SlidingDoorBlock;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SlidingDoorBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SlidingDoorBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SlidingDoorBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SlidingDoorBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SlidingDoorBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static SOUTH_AABB: $VoxelShape;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static VISIBLE: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static TRAIN_SET_TYPE: $Supplier<$BlockSetType>;
        static EAST_AABB: $VoxelShape;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$DoubleBlockHalf>;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static HINGE: $EnumProperty<$DoorHingeSide>;
        static AABB_DOOR_THICKNESS: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        static NORTH_AABB: $VoxelShape;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$DoorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static STONE_SET_TYPE: $Supplier<$BlockSetType>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static WEST_AABB: $VoxelShape;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static GLASS_SET_TYPE: $Supplier<$BlockSetType>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $BlockSetType_, arg2: boolean);
        get foldingDoor(): boolean;
        get blockEntityClass(): $Class<$SlidingDoorBlockEntity>;
        get blockEntityType(): $BlockEntityType<$SlidingDoorBlockEntity>;
    }
}
