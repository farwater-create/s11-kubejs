import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IMultiBlockEntityContainer$Fluid, $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List_, $Map } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Direction$Axis, $Vec3i, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $HorizontalCTBehaviour, $CTSpriteShiftEntry, $CTModel } from "@package/com/simibubi/create/foundation/block/connected";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as storage from "@package/com/simibubi/create/content/fluids/tank/storage";

declare module "@package/com/simibubi/create/content/fluids/tank" {
    export class $CreativeFluidTankBlockEntity extends $FluidTankBlockEntity {
        worldPosition: $BlockPos;
        boiler: $BoilerData;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $FluidTankMovementBehavior implements $MovementBehaviour {
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
    export class $FluidTankModel$CullData {
    }
    export class $BoilerData$BoilerFluidHandler implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getTankCapacity(arg0: number): number;
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        constructor(arg0: $BoilerData);
        get tanks(): number;
    }
    export class $FluidTankModel extends $CTModel {
        static standard(arg0: $BakedModel): $FluidTankModel;
        static creative(arg0: $BakedModel): $FluidTankModel;
    }
    export class $BoilerData {
        clear(): void;
        write(): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: number): void;
        isActive(): boolean;
        evaluate(arg0: $FluidTankBlockEntity): boolean;
        createHandler(): $BoilerData$BoilerFluidHandler;
        getEngineEfficiency(arg0: number): number;
        getTheoreticalHeatLevel(): number;
        handler$hjj000$sable$forceUpdateHeatIfDisconnected(arg0: $FluidTankBlockEntity, arg1: $CallbackInfo): void;
        tick(arg0: $FluidTankBlockEntity): void;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: number): boolean;
        getSizeComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        getWaterComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        getHeatComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        calcMinMaxForSize(arg0: number): void;
        updateTemperature(arg0: $FluidTankBlockEntity): boolean;
        isPassive(arg0: number): boolean;
        isPassive(): boolean;
        getHeatLevelTextComponent(): $MutableComponent;
        getMaxHeatLevelForWaterSupply(): number;
        getMaxHeatLevelForBoilerSize(arg0: number): number;
        queueSoundOnSide(arg0: $BlockPos_, arg1: $Direction_): void;
        checkPipeOrganAdvancement(arg0: $FluidTankBlockEntity): void;
        updateOcclusion(arg0: $FluidTankBlockEntity): void;
        wrapOperation$hjj000$sable$subLevelHeating(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Operation_<any>): number;
        attachedEngines: number;
        gauge: $LerpedFloat;
        needsHeatLevelUpdate: boolean;
        passiveHeat: boolean;
        activeHeat: number;
        attachedWhistles: number;
        occludedDirections: boolean[];
        waterSupply: number;
        constructor();
        get active(): boolean;
        get theoreticalHeatLevel(): number;
        get heatLevelTextComponent(): $MutableComponent;
        get maxHeatLevelForWaterSupply(): number;
    }
    export class $FluidTankBlock$Shape extends $Enum<$FluidTankBlock$Shape> implements $StringRepresentable {
        static values(): $FluidTankBlock$Shape[];
        static valueOf(arg0: string): $FluidTankBlock$Shape;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PLAIN: $FluidTankBlock$Shape;
        static WINDOW_NW: $FluidTankBlock$Shape;
        static WINDOW_SE: $FluidTankBlock$Shape;
        static WINDOW_SW: $FluidTankBlock$Shape;
        static WINDOW: $FluidTankBlock$Shape;
        static WINDOW_NE: $FluidTankBlock$Shape;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FluidTankBlock$Shape}.
     */
    export type $FluidTankBlock$Shape_ = "plain" | "window" | "window_nw" | "window_sw" | "window_ne" | "window_se";
    export class $FluidTankCTBehaviour extends $HorizontalCTBehaviour {
        constructor(arg0: $CTSpriteShiftEntry, arg1: $CTSpriteShiftEntry, arg2: $CTSpriteShiftEntry);
    }
    export class $BoilerHeaters {
        static blazeBurner(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): number;
        static registerDefaults(): void;
        static passive(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): number;
        constructor();
    }
    export class $FluidTankGenerator extends $SpecialBlockStateGen {
        constructor();
        constructor(arg0: string);
    }
    export class $FluidTankRenderer extends $SafeBlockEntityRenderer<$FluidTankBlockEntity> {
        shouldRenderOffScreen(arg0: $FluidTankBlockEntity): boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $CreativeFluidTankBlockEntity$CreativeSmartFluidTank extends $SmartFluidTank {
        setContainedFluid(arg0: $FluidStack_): void;
        static CODEC: $Codec<$CreativeFluidTankBlockEntity$CreativeSmartFluidTank>;
        constructor(arg0: number, arg1: $Consumer_<$FluidStack>);
        set containedFluid(value: $FluidStack_);
    }
    export class $FluidTankBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IMultiBlockEntityContainer$Fluid {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getWidth(): number;
        getHeight(): number;
        getOtherFluidTankBlockEntity(arg0: $Direction_): $FluidTankBlockEntity;
        static getCapacityMultiplier(): number;
        getMainConnectionAxis(): $Direction$Axis;
        preventConnectivityUpdate(): void;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        getFluid(arg0: number): $FluidStack;
        getExtraData(): $Object;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        sendDataImmediately(): void;
        static getMaxSize(): number;
        isController(): boolean;
        getController(): $BlockPos;
        updateBoilerTemperature(): void;
        getMaxWidth(): number;
        static getMaxHeight(): number;
        getControllerBE(): $FluidTankBlockEntity;
        toggleWindows(): void;
        getTankSize(arg0: number): number;
        modifyExtraData(arg0: $Object): $Object;
        setExtraData(arg0: $Object): void;
        notifyMultiUpdated(): void;
        setController(arg0: $BlockPos_): void;
        setTankSize(arg0: number, arg1: number): void;
        removeController(arg0: boolean): void;
        getLastKnownPos(): $BlockPos;
        applyFluidTankSize(arg0: number): void;
        getTotalTankSize(): number;
        getFillState(): number;
        getFluidLevel(): $LerpedFloat;
        setFluidLevel(arg0: $LerpedFloat): void;
        getTankInventory(): $FluidTank;
        getTank(arg0: number): $IFluidTank;
        hasTank(): boolean;
        setWindows(arg0: boolean): void;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        updateBoilerState(): void;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        worldPosition: $BlockPos;
        boiler: $BoilerData;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        static get capacityMultiplier(): number;
        get mainConnectionAxis(): $Direction$Axis;
        static get maxSize(): number;
        get maxWidth(): number;
        static get maxHeight(): number;
        get controllerBE(): $FluidTankBlockEntity;
        get lastKnownPos(): $BlockPos;
        get totalTankSize(): number;
        get fillState(): number;
        get tankInventory(): $FluidTank;
        set windows(value: boolean);
    }
    export class $SoundPool$Sound {
    }
    export interface $SoundPool$Sound {
        playAt(arg0: $Level, arg1: $Vec3i): void;
    }
    /**
     * Values that may be interpreted as {@link $SoundPool$Sound}.
     */
    export type $SoundPool$Sound_ = ((arg0: $Level, arg1: $Vec3i) => void);
    export class $FluidTankItem extends $BlockItem {
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
    export class $SoundPool {
        play(arg0: $Level): void;
        queueAt(arg0: number): void;
        queueAt(arg0: $BlockPos_): void;
        constructor(arg0: number, arg1: number, arg2: $SoundPool$Sound_);
    }
    export class $FluidTankBlock extends $Block implements $IWrenchable, $IBE<$FluidTankBlockEntity> {
        static regular(arg0: $BlockBehaviour$Properties): $FluidTankBlock;
        getBlockEntityClass(): $Class<$FluidTankBlockEntity>;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityType(): $BlockEntityType<$FluidTankBlockEntity>;
        static isTank(arg0: $BlockState_): boolean;
        static creative(arg0: $BlockBehaviour$Properties): $FluidTankBlock;
        static updateBoilerState(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_): void;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FluidTankBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FluidTankBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FluidTankBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FluidTankBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FluidTankBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static SILENCED_METAL: $SoundType;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static BOTTOM: $BooleanProperty;
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
        static SHAPE: $EnumProperty<$FluidTankBlock$Shape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static TOP: $BooleanProperty;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        get blockEntityClass(): $Class<$FluidTankBlockEntity>;
        get blockEntityType(): $BlockEntityType<$FluidTankBlockEntity>;
    }
}
