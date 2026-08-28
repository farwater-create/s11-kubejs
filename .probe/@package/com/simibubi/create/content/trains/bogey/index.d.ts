import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CachedRenderBBBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $TrackMaterial$TrackType } from "@package/com/simibubi/create/content/trains/track";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List, $EnumSet, $Map_, $Map, $Set } from "@package/java/util";
import { $Carriage } from "@package/com/simibubi/create/content/trains/entity";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Supplier_, $Function_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $ProperWaterloggedBlock, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $Instance } from "@package/dev/engine_room/flywheel/api/instance";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnumProperty, $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/bogey" {
    export class $StandardBogeyVisual$Large extends $StandardBogeyVisual {
        constructor(arg0: $VisualizationContext, arg1: number, arg2: boolean);
    }
    export class $StandardBogeyRenderer$Large extends $StandardBogeyRenderer {
        static BELT_RADIUS_PX: number;
        static BELT_RADIUS_IN_UV_SPACE: number;
        constructor();
    }
    export class $BogeyVisual {
    }
    export interface $BogeyVisual {
        update(arg0: $CompoundTag_, arg1: number, arg2: $PoseStack): void;
        "delete"(): void;
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
        hide(): void;
        updateLight(arg0: number): void;
    }
    export class $BogeyBlockEntityRenderer<T extends $AbstractBogeyBlockEntity> extends $SafeBlockEntityRenderer<T> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $AbstractBogeyBlock<T extends $AbstractBogeyBlockEntity> extends $Block implements $IBE<T>, $ProperWaterloggedBlock, $SpecialBlockItemRequirement, $IWrenchable {
        getSize(): $BogeySizes$BogeySize;
        getVersion(arg0: $BlockState_, arg1: boolean): $BlockState;
        getStickySurfaces(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $EnumSet<$Direction>;
        getDefaultStyle(): $BogeyStyle;
        isTrackAxisAlongFirstCoordinate(arg0: $BlockState_): boolean;
        propertiesToCopy(): $List<$Property<never>>;
        getWheelRadius(): number;
        getNextStyle(arg0: $BogeyStyle): $BogeyStyle;
        getNextStyle(arg0: $Level, arg1: $BlockPos_): $BogeyStyle;
        getTrackType(arg0: $BogeyStyle): $TrackMaterial$TrackType;
        getMatchingBogey(arg0: $Direction_, arg1: boolean): $BlockState;
        getNextSize(arg0: $AbstractBogeyBlockEntity): $BlockState;
        getNextSize(arg0: $Level, arg1: $BlockPos_): $BlockState;
        getStateOfSize(arg0: $AbstractBogeyBlockEntity, arg1: $BogeySizes$BogeySize_): $BlockState;
        isUpsideDown(arg0: $BlockState_): boolean;
        canBeUpsideDown(): boolean;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        allowsSingleBogeyCarriage(): boolean;
        captureBlockEntityForTrain(): boolean;
        getConnectorAnchorOffset(arg0: boolean): $Vec3;
        getWheelPointSpacing(): number;
        getValidPathfindingTypes(arg0: $BogeyStyle): $Set<$TrackMaterial$TrackType>;
        isOnIncompatibleTrack(arg0: $Carriage, arg1: boolean): boolean;
        getBogeyUpDirection(): $Direction;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        static registerStandardBogey(arg0: $ResourceLocation_): void;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): T;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): (T) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<T, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<T, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<T>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        fluidState(arg0: $BlockState_): $FluidState;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
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
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractBogeyBlock<never>>;
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
        size: $BogeySizes$BogeySize;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $BogeySizes$BogeySize_);
        get defaultStyle(): $BogeyStyle;
        get wheelRadius(): number;
        get wheelPointSpacing(): number;
        get bogeyUpDirection(): $Direction;
    }
    export class $BogeyVisualizer {
    }
    export interface $BogeyVisualizer {
        createVisual(arg0: $VisualizationContext, arg1: number, arg2: boolean): $BogeyVisual;
    }
    /**
     * Values that may be interpreted as {@link $BogeyVisualizer}.
     */
    export type $BogeyVisualizer_ = ((arg0: $VisualizationContext, arg1: number, arg2: boolean) => $BogeyVisual);
    export class $BogeyStyle$SizeRenderer extends $Record {
        renderer(): $BogeyRenderer;
        visualizer(): $BogeyVisualizer;
        constructor(renderer: $BogeyRenderer_, visualizer: $BogeyVisualizer_);
    }
    /**
     * Values that may be interpreted as {@link $BogeyStyle$SizeRenderer}.
     */
    export type $BogeyStyle$SizeRenderer_ = { renderer?: $BogeyRenderer_, visualizer?: $BogeyVisualizer_,  } | [renderer?: $BogeyRenderer_, visualizer?: $BogeyVisualizer_, ];
    export class $StandardBogeyBlockEntity extends $AbstractBogeyBlockEntity {
        worldPosition: $BlockPos;
        static BOGEY_STYLE_KEY: string;
        static BOGEY_DATA_KEY: string;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $StandardBogeyRenderer$Small extends $StandardBogeyRenderer {
        constructor();
    }
    export class $StandardBogeyVisual$Small extends $StandardBogeyVisual {
        constructor(arg0: $VisualizationContext, arg1: number, arg2: boolean);
    }
    export class $AbstractBogeyBlockEntity extends $CachedRenderBBBlockEntity {
        getDefaultStyle(): $BogeyStyle;
        getBogeyData(): $CompoundTag;
        setBogeyData(arg0: $CompoundTag_): void;
        setBogeyStyle(arg0: $BogeyStyle): void;
        animate(arg0: number): void;
        getStyle(): $BogeyStyle;
        getVirtualAngle(arg0: number): number;
        worldPosition: $BlockPos;
        static BOGEY_STYLE_KEY: string;
        static BOGEY_DATA_KEY: string;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get defaultStyle(): $BogeyStyle;
        set bogeyStyle(value: $BogeyStyle);
        get style(): $BogeyStyle;
    }
    export class $StandardBogeyVisual implements $BogeyVisual {
        update(arg0: $CompoundTag_, arg1: number, arg2: $PoseStack): void;
        "delete"(): void;
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
        hide(): void;
        updateLight(arg0: number): void;
        constructor(arg0: $VisualizationContext, arg1: number, arg2: boolean);
    }
    export class $StandardBogeyRenderer implements $BogeyRenderer {
        render(arg0: $CompoundTag_, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: boolean): void;
        constructor();
    }
    export class $BogeyBlockEntityVisual extends $AbstractBlockEntityVisual<$AbstractBogeyBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $AbstractBogeyBlockEntity, arg2: number);
    }
    export class $BogeySizes$BogeySize extends $Record {
        id(): $ResourceLocation;
        nextBySize(): $BogeySizes$BogeySize;
        wheelRadius(): number;
        constructor(id: $ResourceLocation_, wheelRadius: number);
    }
    /**
     * Values that may be interpreted as {@link $BogeySizes$BogeySize}.
     */
    export type $BogeySizes$BogeySize_ = { id?: $ResourceLocation_, wheelRadius?: number,  } | [id?: $ResourceLocation_, wheelRadius?: number, ];
    export class $BogeyStyle$Builder {
        size(arg0: $BogeySizes$BogeySize_, arg1: $Supplier_<$AbstractBogeyBlock<never>>, arg2: $Supplier_<$Supplier<$BogeyStyle$SizeRenderer>>): $BogeyStyle$Builder;
        build(): $BogeyStyle;
        displayName(arg0: $Component_): $BogeyStyle$Builder;
        defaultData(arg0: $CompoundTag_): $BogeyStyle$Builder;
        soundEvent(arg0: $Supplier_<$SoundEvent>): $BogeyStyle$Builder;
        contactParticle(arg0: $ParticleOptions_): $BogeyStyle$Builder;
        smokeParticle(arg0: $ParticleOptions_): $BogeyStyle$Builder;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
    }
    export class $BogeyStyle {
        validSizes(): $Set<$BogeySizes$BogeySize>;
        render(arg0: $BogeySizes$BogeySize_, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: number, arg7: $CompoundTag_, arg8: boolean): void;
        getBlockForSize(arg0: $BogeySizes$BogeySize_): $AbstractBogeyBlock<never>;
        getCycleGroup(): $Map<$ResourceLocation, $BogeyStyle>;
        getNextBlock(arg0: $BogeySizes$BogeySize_): $AbstractBogeyBlock<never>;
        createVisual(arg0: $BogeySizes$BogeySize_, arg1: $VisualizationContext, arg2: number, arg3: boolean): $BogeyVisual;
        contactParticle: $ParticleOptions;
        soundEvent: $Supplier<$SoundEvent>;
        smokeParticle: $ParticleOptions;
        cycleGroup: $ResourceLocation;
        displayName: $Component;
        defaultData: $CompoundTag;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $Component_, arg3: $Supplier_<$SoundEvent>, arg4: $ParticleOptions_, arg5: $ParticleOptions_, arg6: $CompoundTag_, arg7: $Map_<$BogeySizes$BogeySize_, $Supplier_<$AbstractBogeyBlock<never>>>, arg8: $Map_<$BogeySizes$BogeySize_, $Supplier_<$Supplier<$BogeyStyle$SizeRenderer>>>);
    }
    export class $BogeySizes {
        static register(arg0: $BogeySizes$BogeySize_): void;
        static init(): void;
        static all(): $Map<$ResourceLocation, $BogeySizes$BogeySize>;
        static allSortedDecreasing(): $List<$BogeySizes$BogeySize>;
        static allSortedIncreasing(): $List<$BogeySizes$BogeySize>;
        static SMALL: $BogeySizes$BogeySize;
        static LARGE: $BogeySizes$BogeySize;
    }
    export class $BogeyRenderer {
    }
    export interface $BogeyRenderer {
        render(arg0: $CompoundTag_, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BogeyRenderer}.
     */
    export type $BogeyRenderer_ = ((arg0: $CompoundTag, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource, arg5: number, arg6: number, arg7: boolean) => void);
    export class $StandardBogeyBlock extends $AbstractBogeyBlock<$StandardBogeyBlockEntity> implements $IBE<$StandardBogeyBlockEntity>, $ProperWaterloggedBlock, $SpecialBlockItemRequirement {
        getConnectorAnchorOffset(): $Vec3;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractBogeyBlock<never>>;
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
        size: $BogeySizes$BogeySize;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $BogeySizes$BogeySize_);
        get connectorAnchorOffset(): $Vec3;
    }
}
