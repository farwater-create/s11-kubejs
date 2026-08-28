import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List, $List_, $Collection, $Map } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $RandomSource, $FormattedCharSink } from "@package/net/minecraft/util";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntityRenderer, $KineticBlockEntity, $HorizontalKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class, $Comparable } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $DyeColor_, $Item, $ItemStack_, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $MutableComponent, $Component_, $MutableComponent_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ICogWheel } from "@package/com/simibubi/create/content/kinetics/simpleRelays";
import { $Property, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SoundType, $SimpleWaterloggedBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/trains/display" {
    export class $GlobalTrainDisplayData {
        static prepare(arg0: string, arg1: number): $List<$GlobalTrainDisplayData$TrainDeparturePrediction>;
        static refresh(): void;
        static statusByDestination: $Map<string, $Collection<$GlobalTrainDisplayData$TrainDeparturePrediction>>;
        static updateTick: boolean;
        constructor();
    }
    export class $FlapDisplaySection {
        getSize(): number;
        update(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $FlapDisplaySection;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        setText(arg0: $Component_): void;
        refresh(arg0: boolean): void;
        rightAligned(): $FlapDisplaySection;
        getText(): $Component;
        tick(arg0: boolean, arg1: $RandomSource): number;
        wideFlaps(): $FlapDisplaySection;
        renderCharsIndividually(): boolean;
        static getFlapCycle(arg0: string): string[];
        static WIDE_MONOSPACE: number;
        static MONOSPACE: number;
        constructor(arg0: number, arg1: string, arg2: boolean, arg3: boolean);
        get size(): number;
    }
    export class $GlobalTrainDisplayData$TrainDeparturePrediction implements $Comparable<$GlobalTrainDisplayData$TrainDeparturePrediction> {
        compareTo(arg0: $GlobalTrainDisplayData$TrainDeparturePrediction): number;
        scheduleTitle: $MutableComponent;
        ticks: number;
        destination: string;
        train: $Train;
        constructor(arg0: $Train, arg1: number, arg2: $MutableComponent_, arg3: string);
    }
    export class $FlapDisplayRenderer$FlapDisplayRenderOutput implements $FormattedCharSink {
    }
    export class $FlapDisplayBlock extends $HorizontalKineticBlock implements $IBE<$FlapDisplayBlockEntity>, $IWrenchable, $ICogWheel, $SimpleWaterloggedBlock {
        static getConnection(arg0: $BlockState_, arg1: $Direction_): boolean;
        getBlockEntityClass(): $Class<$FlapDisplayBlockEntity>;
        static setConnection(arg0: $BlockState_, arg1: $Direction_, arg2: boolean): $BlockState;
        getBlockEntityType(): $BlockEntityType<$FlapDisplayBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FlapDisplayBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FlapDisplayBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FlapDisplayBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FlapDisplayBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FlapDisplayBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        isDedicatedCogWheel(): boolean;
        isLargeCog(): boolean;
        isSmallCog(): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static DOWN: $BooleanProperty;
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
        static UP: $BooleanProperty;
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
        get blockEntityClass(): $Class<$FlapDisplayBlockEntity>;
        get blockEntityType(): $BlockEntityType<$FlapDisplayBlockEntity>;
        get dedicatedCogWheel(): boolean;
        get largeCog(): boolean;
        get smallCog(): boolean;
    }
    export class $FlapDisplayBlockEntity extends $KineticBlockEntity {
        getMaxCharCount(arg0: number): number;
        getMaxCharCount(): number;
        getLines(): $List<$FlapDisplayLayout>;
        updateControllerStatus(): void;
        initDefaultSections(): void;
        isLineGlowing(arg0: number): boolean;
        getLineIndexAt(arg0: number): number;
        getLineColor(arg0: number): number;
        getController(): $FlapDisplayBlockEntity;
        getDirection(): $Direction;
        setColour(arg0: number, arg1: $DyeColor_): void;
        setGlowing(arg0: number): void;
        applyTextManually(arg0: number, arg1: $Component_): void;
        glowingLines: boolean[];
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        ySize: number;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        isController: boolean;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        colour: $DyeColor[];
        manualLines: boolean[];
        isRunning: boolean;
        updateSpeed: boolean;
        xSize: number;
        hasComparators: number;
        lines: $List<$FlapDisplayLayout>;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get controller(): $FlapDisplayBlockEntity;
        get direction(): $Direction;
        set glowing(value: number);
    }
    export class $FlapDisplayBlock$PlacementHelper implements $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
    }
    export class $FlapDisplayLayout {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        configure(arg0: string, arg1: $List_<$FlapDisplaySection>): void;
        loadDefault(arg0: number): void;
        getSections(): $List<$FlapDisplaySection>;
        isLayout(arg0: string): boolean;
        constructor(arg0: number);
        get sections(): $List<$FlapDisplaySection>;
    }
    export class $FlapDisplayRenderer extends $KineticBlockEntityRenderer<$FlapDisplayBlockEntity> {
        shouldRenderOffScreen(arg0: $FlapDisplayBlockEntity): boolean;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
