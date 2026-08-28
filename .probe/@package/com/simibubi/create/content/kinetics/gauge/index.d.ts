import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $DirectionalAxisBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $DirectionalAxisKineticBlock, $KineticBlockEntity, $ShaftVisual, $ShaftRenderer } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item } from "@package/net/minecraft/world/item";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $TransformedInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $VoxelShaper } from "@package/net/createmod/catnip/math";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/kinetics/gauge" {
    export class $GaugeRenderer extends $ShaftRenderer<$GaugeBlockEntity> {
        static speed(arg0: $BlockEntityRendererProvider$Context): $GaugeRenderer;
        static stress(arg0: $BlockEntityRendererProvider$Context): $GaugeRenderer;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
    }
    export class $GaugeShaper extends $VoxelShaper {
        get(arg0: $Direction_, arg1: boolean): $VoxelShape;
        constructor();
    }
    export class $GaugeBlock$Type extends $Enum<$GaugeBlock$Type> implements $StringRepresentable {
        static values(): $GaugeBlock$Type[];
        static valueOf(arg0: string): $GaugeBlock$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SPEED: $GaugeBlock$Type;
        static STRESS: $GaugeBlock$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GaugeBlock$Type}.
     */
    export type $GaugeBlock$Type_ = "speed" | "stress";
    export class $GaugeObservedPacket extends $BlockEntityConfigurationPacket<$StressGaugeBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $GaugeObservedPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $StressGaugeBlockEntity extends $GaugeBlockEntity {
        getNetworkStress(): number;
        getNetworkCapacity(): number;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        onObserved(): void;
        color: number;
        level: $Level;
        dialState: number;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        prevDialState: number;
        updateSpeed: boolean;
        dialTarget: number;
        hasComparators: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get networkStress(): number;
        get networkCapacity(): number;
    }
    export class $SpeedGaugeBlockEntity extends $GaugeBlockEntity {
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        static getDialTarget(arg0: number): number;
        color: number;
        level: $Level;
        dialState: number;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        prevDialState: number;
        updateSpeed: boolean;
        dialTarget: number;
        hasComparators: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $GaugeVisual extends $ShaftVisual<$GaugeBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
    }
    export class $GaugeVisual$Speed extends $GaugeVisual {
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $GaugeBlockEntity, arg2: number);
    }
    export class $GaugeGenerator extends $DirectionalAxisBlockStateGen {
        constructor();
    }
    export class $GaugeVisual$DialFace extends $Couple<$TransformedInstance> {
    }
    export class $GaugeBlock extends $DirectionalAxisKineticBlock implements $IBE<$GaugeBlockEntity> {
        getBlockEntityClass(): $Class<$GaugeBlockEntity>;
        static speed(arg0: $BlockBehaviour$Properties): $GaugeBlock;
        static stress(arg0: $BlockBehaviour$Properties): $GaugeBlock;
        shouldRenderHeadOnFace(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        getBlockEntityType(): $BlockEntityType<$GaugeBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $GaugeBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($GaugeBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$GaugeBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$GaugeBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$GaugeBlockEntity>): void;
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
        static GAUGE: $GaugeShaper;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static AXIS_ALONG_FIRST_COORDINATE: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        get blockEntityClass(): $Class<$GaugeBlockEntity>;
        get blockEntityType(): $BlockEntityType<$GaugeBlockEntity>;
    }
    export class $GaugeVisual$Stress extends $GaugeVisual {
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $GaugeBlockEntity, arg2: number);
    }
    export class $GaugeBlockEntity extends $KineticBlockEntity implements $IHaveGoggleInformation {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        color: number;
        level: $Level;
        dialState: number;
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
        prevDialState: number;
        updateSpeed: boolean;
        dialTarget: number;
        hasComparators: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
