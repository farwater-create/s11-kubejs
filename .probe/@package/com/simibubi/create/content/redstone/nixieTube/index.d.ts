import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SignalBlockEntity$SignalState } from "@package/com/simibubi/create/content/trains/signal";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $BiConsumer_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $DyeColor_, $Item, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DirectionProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $HorizontalDirectionalBlock, $SimpleWaterloggedBlock, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/redstone/nixieTube" {
    export class $NixieTubeGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $NixieTubeBlockEntity extends $SmartBlockEntity {
        updateDisplayedStrings(): void;
        getFullText(): $MutableComponent;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        clearCustomText(): void;
        displayEmptyText(arg0: number): void;
        displayCustomText(arg0: string, arg1: number): void;
        reactsToRedstone(): boolean;
        getRedstoneStrength(): number;
        updateRedstoneStrength(arg0: number): void;
        getDisplayedStrings(): $Couple<string>;
        worldPosition: $BlockPos;
        computerSignal: $NixieTubeBlockEntity$ComputerSignal;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        computerBehaviour: $AbstractComputerBehaviour;
        signalState: $SignalBlockEntity$SignalState;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get fullText(): $MutableComponent;
        get redstoneStrength(): number;
        get displayedStrings(): $Couple<string>;
    }
    export class $NixieTubeBlockEntity$ComputerSignal$TubeDisplay {
        decode(arg0: number[], arg1: number): void;
        encode(arg0: number[], arg1: number): void;
        blinkOffTime: number;
        r: number;
        b: number;
        blinkPeriod: number;
        glowHeight: number;
        g: number;
        static ENCODED_SIZE: number;
        glowWidth: number;
        constructor();
    }
    export class $NixieTubeBlock extends $DoubleFaceAttachedBlock implements $IBE<$NixieTubeBlockEntity>, $IWrenchable, $SimpleWaterloggedBlock, $SpecialBlockItemRequirement {
        static colorOf(arg0: $BlockState_): $DyeColor;
        static updateDisplayedRedstoneValue(arg0: $NixieTubeBlockEntity, arg1: $BlockState_, arg2: boolean): void;
        getBlockEntityClass(): $Class<$NixieTubeBlockEntity>;
        static getFacing(arg0: $BlockState_): $Direction;
        getColor(): $DyeColor;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityType(): $BlockEntityType<$NixieTubeBlockEntity>;
        static withColor(arg0: $BlockState_, arg1: $DyeColor_): $BlockState;
        static walkNixies(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: boolean, arg3: $BiConsumer_<$BlockPos, number>): boolean;
        static areNixieBlocksEqual(arg0: $BlockState_, arg1: $BlockState_): boolean;
        static isInComputerControlledRow(arg0: $LevelAccessor, arg1: $BlockPos_): boolean;
        static getLeftNixieDirection(arg0: $BlockState_): $Direction;
        static getRightNixieDirection(arg0: $BlockState_): $Direction;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $NixieTubeBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($NixieTubeBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$NixieTubeBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$NixieTubeBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$NixieTubeBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
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
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$DoubleFaceAttachedBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static FACE: $EnumProperty<$DoubleFaceAttachedBlock$DoubleAttachFace>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $DyeColor_);
        get blockEntityClass(): $Class<$NixieTubeBlockEntity>;
        get color(): $DyeColor;
        get blockEntityType(): $BlockEntityType<$NixieTubeBlockEntity>;
    }
    export class $NixieTubeRenderer extends $SafeBlockEntityRenderer<$NixieTubeBlockEntity> {
        static drawTube(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: string, arg3: number, arg4: $DyeColor_, arg5: $RandomSource): void;
        static drawInWorldString(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: string, arg3: number): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $DoubleFaceAttachedBlock$DoubleAttachFace extends $Enum<$DoubleFaceAttachedBlock$DoubleAttachFace> implements $StringRepresentable {
        static values(): $DoubleFaceAttachedBlock$DoubleAttachFace[];
        static valueOf(arg0: string): $DoubleFaceAttachedBlock$DoubleAttachFace;
        getSerializedName(): string;
        xRot(): number;
        getRemappedEnumConstantName(): string;
        static FLOOR: $DoubleFaceAttachedBlock$DoubleAttachFace;
        static WALL: $DoubleFaceAttachedBlock$DoubleAttachFace;
        static CEILING: $DoubleFaceAttachedBlock$DoubleAttachFace;
        static WALL_REVERSED: $DoubleFaceAttachedBlock$DoubleAttachFace;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DoubleFaceAttachedBlock$DoubleAttachFace}.
     */
    export type $DoubleFaceAttachedBlock$DoubleAttachFace_ = "floor" | "wall" | "wall_reversed" | "ceiling";
    export class $DoubleFaceAttachedBlock extends $HorizontalDirectionalBlock {
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
        static CODEC: $MapCodec<$DoubleFaceAttachedBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static FACE: $EnumProperty<$DoubleFaceAttachedBlock$DoubleAttachFace>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $NixieTubeBlockEntity$ComputerSignal {
        decode(arg0: number[]): void;
        encode(): number[];
        first: $NixieTubeBlockEntity$ComputerSignal$TubeDisplay;
        second: $NixieTubeBlockEntity$ComputerSignal$TubeDisplay;
        constructor();
    }
}
