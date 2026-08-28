import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $BezierConnection } from "@package/com/simibubi/create/content/trains/track";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map, $Set } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $TravellingPoint } from "@package/com/simibubi/create/content/trains/entity";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $TrackGraph, $TrackNode, $TrackEdge } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockBreakingMovementBehaviour } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $AttachedActorBlock } from "@package/com/simibubi/create/content/contraptions/actors";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $BlockItem, $Item, $ItemStack_, $Item$Properties } from "@package/net/minecraft/world/item";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoleHelper } from "@package/com/simibubi/create/foundation/placement";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $INamedIconOptions, $ScrollOptionBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $HarvesterActorVisual } from "@package/com/simibubi/create/content/contraptions/actors/harvester";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/contraptions/actors/roller" {
    export class $RollerBlockEntity extends $SmartBlockEntity {
        searchForSharedValues(): void;
        getAnimatedSpeed(): number;
        setAnimatedSpeed(arg0: number): void;
        shareValuesToAdjacent(): void;
        mode: $ScrollOptionBehaviour<$RollerBlockEntity$RollingMode>;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        filtering: $FilteringBehaviour;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $RollerBlockEntity$RollingMode extends $Enum<$RollerBlockEntity$RollingMode> implements $INamedIconOptions {
    }
    /**
     * Values that may be interpreted as {@link $RollerBlockEntity$RollingMode}.
     */
    export type $RollerBlockEntity$RollingMode_ = "tunnel_pave" | "straight_fill" | "wide_fill";
    export class $TrackPaverV2 {
        static pave(arg0: $PaveTask, arg1: $TrackGraph, arg2: $TrackEdge, arg3: number, arg4: number): void;
        static paveCurve(arg0: $PaveTask, arg1: $BezierConnection, arg2: number, arg3: number): void;
        static paveStraight(arg0: $PaveTask, arg1: $BlockPos_, arg2: $Vec3_, arg3: number): void;
        static lineToPointDiff2d(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_): number;
        constructor();
    }
    export class $RollerBlock$PlacementHelper extends $PoleHelper<$Direction> {
    }
    export class $RollerMovementBehaviour$PaveResult extends $Enum<$RollerMovementBehaviour$PaveResult> {
    }
    /**
     * Values that may be interpreted as {@link $RollerMovementBehaviour$PaveResult}.
     */
    export type $RollerMovementBehaviour$PaveResult_ = "fail" | "pass" | "success";
    export class $RollerMovementBehaviour extends $BlockBreakingMovementBehaviour {
        static getStateToPaveWith(arg0: $ItemStack_): $BlockState;
        constructor();
    }
    export class $RollerBlock extends $AttachedActorBlock implements $IBE<$RollerBlockEntity> {
        getBlockEntityClass(): $Class<$RollerBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$RollerBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $RollerBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($RollerBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$RollerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$RollerBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$RollerBlockEntity>): void;
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
        static CODEC: $MapCodec<$RollerBlock>;
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
        get blockEntityClass(): $Class<$RollerBlockEntity>;
        get blockEntityType(): $BlockEntityType<$RollerBlockEntity>;
    }
    export class $RollerBlockItem extends $BlockItem {
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
    export class $RollerActorVisual extends $HarvesterActorVisual {
        constructor(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext);
    }
    export class $RollerMovementBehaviour$RollerTravellingPoint extends $TravellingPoint {
        node2: $TrackNode;
        edge: $TrackEdge;
        blocked: boolean;
        position: number;
        node1: $TrackNode;
        upsideDown: boolean;
    }
    export class $PaveTask {
        get(arg0: $Couple<number>): number;
        put(arg0: $BlockPos_): void;
        put(arg0: number, arg1: number, arg2: number): void;
        keys(): $Set<$Couple<number>>;
        getHorizontalInterval(): $Couple<number>;
        constructor(arg0: number, arg1: number);
        get horizontalInterval(): $Couple<number>;
    }
    export class $RollerBlockEntity$RollerValueBox extends $ValueBoxTransform {
    }
    export class $RollerRenderer extends $SmartBlockEntityRenderer<$RollerBlockEntity> {
        static renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
