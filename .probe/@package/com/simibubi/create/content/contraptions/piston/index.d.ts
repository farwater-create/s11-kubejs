import { $MapCodec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List_, $Map, $Set } from "@package/java/util";
import { $IControlContraptionExtension } from "@package/dev/simulated_team/simulated/mixin_interface/create_assembly";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $IControlContraption, $TranslatingContraption, $AssemblyException, $ControlledContraptionEntity, $IDisplayAssemblyExceptions, $AbstractContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $DirectionalAxisKineticBlock, $KineticBlockEntityRenderer, $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $CanLoadBigCannon } from "@package/rbasamoyai/createbigcannons/cannon_loading";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $HasFragileContraption } from "@package/rbasamoyai/createbigcannons/remix";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EncasableBlock } from "@package/com/simibubi/create/content/decoration/encasing";
import { $DirectionProperty, $EnumProperty, $PistonType_, $PistonType, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoleHelper } from "@package/com/simibubi/create/foundation/placement";
import { $SoundType, $SimpleWaterloggedBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/contraptions/piston" {
    export class $MechanicalPistonHeadBlock extends $WrenchableDirectionalBlock implements $SimpleWaterloggedBlock {
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
        static TYPE: $EnumProperty<$PistonType>;
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
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $LinearActuatorBlockEntity extends $KineticBlockEntity implements $IControlContraption, $IDisplayAssemblyExceptions, $IControlContraptionExtension {
        attach(arg0: $ControlledContraptionEntity): void;
        isValid(): boolean;
        getBlockPosition(): $BlockPos;
        getLastAssemblyException(): $AssemblyException;
        sable$disassemble(): void;
        isAttachedTo(arg0: $AbstractContraptionEntity): boolean;
        disassemble(): void;
        onLengthBroken(): void;
        getMotionVector(): $Vec3;
        onStall(): void;
        getInterpolatedOffset(arg0: number): number;
        getMovementSpeed(): number;
        addExceptionToTooltip(arg0: $List_<$Component_>): boolean;
        offset: number;
        level: $Level;
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
        get valid(): boolean;
        get blockPosition(): $BlockPos;
        get lastAssemblyException(): $AssemblyException;
        get motionVector(): $Vec3;
        get movementSpeed(): number;
    }
    export class $MechanicalPistonBlockEntity extends $LinearActuatorBlockEntity {
        assemble(): void;
        offset: number;
        level: $Level;
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
    }
    export class $MechanicalPistonRenderer extends $KineticBlockEntityRenderer<$MechanicalPistonBlockEntity> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $PistonContraption extends $TranslatingContraption implements $CanLoadBigCannon, $HasFragileContraption {
        toLocalPos(arg0: $BlockPos_): $BlockPos;
        createbigcannons$getAssemblyMovementDirection(arg0: $Level): $Direction;
        createbigcannons$getOriginalForcedDirection(arg0: $Level): $Direction;
        createbigcannons$getCannonLoadingColliders(): $Set<any>;
        addBlock(arg0: $Level, arg1: $BlockPos_, arg2: $Pair<$StructureTemplate$StructureBlockInfo_, $BlockEntity>): void;
        createbigcannons$getEncounteredBlocks(): $Map<any, any>;
        createbigcannons$fragileDisassemble(): void;
        createbigcannons$setBrokenDisassembly(arg0: boolean): void;
        createbigcannons$isBrokenDisassembly(): boolean;
        createbigcannons$toLocalPos(arg0: $BlockPos_): $BlockPos;
        createbigcannons$getFragileBlockPositions(): $Set<any>;
        createbigcannons$blockBreaksDisassembly(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        createbigcannons$shouldCheckFragility(): boolean;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor(arg0: $Direction_, arg1: boolean);
        constructor();
    }
    export class $PistonExtensionPoleBlock extends $WrenchableDirectionalBlock implements $IWrenchable, $SimpleWaterloggedBlock, $EncasableBlock {
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        playEncaseSound(arg0: $Level, arg1: $BlockPos_): void;
        tryEncase(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
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
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $PistonExtensionPoleBlock$PlacementHelper extends $PoleHelper<$Direction> {
        static get(): $PistonExtensionPoleBlock$PlacementHelper;
    }
    export class $MechanicalPistonGenerator extends $SpecialBlockStateGen {
        constructor(arg0: $PistonType_);
    }
    export class $MechanicalPistonBlock$PistonState extends $Enum<$MechanicalPistonBlock$PistonState> implements $StringRepresentable {
        static values(): $MechanicalPistonBlock$PistonState[];
        static valueOf(arg0: string): $MechanicalPistonBlock$PistonState;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static EXTENDED: $MechanicalPistonBlock$PistonState;
        static MOVING: $MechanicalPistonBlock$PistonState;
        static RETRACTED: $MechanicalPistonBlock$PistonState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MechanicalPistonBlock$PistonState}.
     */
    export type $MechanicalPistonBlock$PistonState_ = "retracted" | "moving" | "extended";
    export class $MechanicalPistonBlock extends $DirectionalAxisKineticBlock implements $IBE<$MechanicalPistonBlockEntity> {
        static sticky(arg0: $BlockBehaviour$Properties): $MechanicalPistonBlock;
        static normal(arg0: $BlockBehaviour$Properties): $MechanicalPistonBlock;
        static isExtensionPole(arg0: $BlockState_): boolean;
        static isPistonHead(arg0: $BlockState_): boolean;
        getBlockEntityClass(): $Class<$MechanicalPistonBlockEntity>;
        static isPiston(arg0: $BlockState_): boolean;
        static maxAllowedPistonPoles(): number;
        getBlockEntityType(): $BlockEntityType<$MechanicalPistonBlockEntity>;
        static isStickyPiston(arg0: $BlockState_): boolean;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $MechanicalPistonBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($MechanicalPistonBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalPistonBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalPistonBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$MechanicalPistonBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static STATE: $EnumProperty<$MechanicalPistonBlock$PistonState>;
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
        static AXIS_ALONG_FIRST_COORDINATE: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        get blockEntityClass(): $Class<$MechanicalPistonBlockEntity>;
        get blockEntityType(): $BlockEntityType<$MechanicalPistonBlockEntity>;
    }
}
