import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SettingsFrom_ } from "@package/appeng/util";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_ } from "@package/java/util/function";
import { $Clearable, $InteractionHand_ } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentMap_, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $Enum, $Class } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $ItemLike, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IGridNode } from "@package/appeng/api/networking";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AECableType_, $AEColor, $AECableType, $DimensionalBlockPos } from "@package/appeng/api/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ICapabilityProvider_, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/appeng/api/parts" {
    export class $IPartCollisionHelper {
    }
    export interface $IPartCollisionHelper {
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getWorldX(): $Direction;
        getWorldY(): $Direction;
        getWorldZ(): $Direction;
        isBBCollision(): boolean;
        get worldX(): $Direction;
        get worldY(): $Direction;
        get worldZ(): $Direction;
        get BBCollision(): boolean;
    }
    export class $IPartItem<P extends $IPart> {
        static getId(arg0: $IPartItem<never>): $ResourceLocation;
        static getNetworkId(arg0: $IPartItem<never>): number;
        static byId(arg0: $ResourceLocation_): $IPartItem<never>;
        static byNetworkId(arg0: number): $IPartItem<never>;
    }
    export interface $IPartItem<P extends $IPart> extends $ItemLike {
        createPart(): P;
        getPartClass(): $Class<P>;
        get partClass(): $Class<P>;
    }
    export class $IPart {
    }
    export interface $IPart extends $ICustomCableConnection, $Clearable {
        writeVisualStateToNBT(arg0: $CompoundTag_): void;
        isProvidingWeakPower(): number;
        getDesiredConnectionType(): $AECableType;
        getCableConnectionLength(arg0: $AECableType_): number;
        readVisualStateFromNBT(arg0: $CompoundTag_): void;
        isProvidingStrongPower(): number;
        getExternalFacingNode(): $IGridNode;
        requireDynamicRender(): boolean;
        getBoxes(arg0: $IPartCollisionHelper): void;
        clearContent(): void;
        onEntityCollision(arg0: $Entity): void;
        animateTick(arg0: $Level, arg1: $BlockPos_, arg2: $RandomSource): void;
        canBePlacedOn(arg0: $BusSupport_): boolean;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getLightLevel(): number;
        isLadder(arg0: $LivingEntity): boolean;
        isSolid(): boolean;
        addEntityCrashInfo(arg0: $CrashReportCategory): void;
        getGridNode(): $IGridNode;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        addToWorld(): void;
        onClicked(arg0: $Player, arg1: $Vec3_): boolean;
        writeToStream(arg0: $RegistryFriendlyByteBuf): void;
        getModelData(): $ModelData;
        canConnectRedstone(): boolean;
        onNeighborChanged(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockPos_): void;
        getExternalCableConnectionType(): $AECableType;
        getPartItem(): $IPartItem<never>;
        renderDynamic(arg0: number, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number): void;
        setPartHostInfo(arg0: $Direction_, arg1: $IPartHost, arg2: $BlockEntity): void;
        onShiftClicked(arg0: $Player, arg1: $Vec3_): boolean;
        onUseItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        removeFromWorld(): void;
        onPlacement(arg0: $Player): void;
        onUseWithoutItem(arg0: $Player, arg1: $Vec3_): boolean;
        onUpdateShape(arg0: $Direction_): void;
        addPartDrop(arg0: $List_<$ItemStack_>, arg1: boolean): void;
        getStaticModels(): $IPartModel;
        addAdditionalDrops(arg0: $List_<$ItemStack_>, arg1: boolean): void;
        exportSettings(arg0: $SettingsFrom_, arg1: $DataComponentMap$Builder): void;
        readFromStream(arg0: $RegistryFriendlyByteBuf): boolean;
        importSettings(arg0: $SettingsFrom_, arg1: $DataComponentMap_, arg2: $Player): void;
        get providingWeakPower(): number;
        get desiredConnectionType(): $AECableType;
        get providingStrongPower(): number;
        get externalFacingNode(): $IGridNode;
        get lightLevel(): number;
        get solid(): boolean;
        get gridNode(): $IGridNode;
        get modelData(): $ModelData;
        get externalCableConnectionType(): $AECableType;
        get partItem(): $IPartItem<never>;
        get staticModels(): $IPartModel;
    }
    export class $SelectedPart {
        side: $Direction;
        part: $IPart;
        facade: $IFacadePart;
        constructor();
        constructor(arg0: $IPart, arg1: $Direction_);
        constructor(arg0: $IFacadePart, arg1: $Direction_);
    }
    export class $ICustomCableConnection {
    }
    export interface $ICustomCableConnection {
        getCableConnectionLength(arg0: $AECableType_): number;
    }
    /**
     * Values that may be interpreted as {@link $ICustomCableConnection}.
     */
    export type $ICustomCableConnection_ = ((arg0: $AECableType) => number);
    export class $IFacadeContainer {
    }
    export interface $IFacadeContainer {
        isEmpty(): boolean;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        removeFacade(arg0: $IPartHost, arg1: $Direction_): void;
        addFacade(arg0: $IFacadePart): boolean;
        getFacade(arg0: $Direction_): $IFacadePart;
        writeToStream(arg0: $RegistryFriendlyByteBuf): void;
        canAddFacade(arg0: $IFacadePart): boolean;
        readFromStream(arg0: $RegistryFriendlyByteBuf): boolean;
        get empty(): boolean;
    }
    export class $IPartHost {
    }
    export interface $IPartHost extends $ICustomCableConnection {
        isEmpty(): boolean;
        getLocation(): $DimensionalBlockPos;
        cleanup(): void;
        isInWorld(): boolean;
        getCollisionShape(arg0: $CollisionContext): $VoxelShape;
        getBlockEntity(): $BlockEntity;
        getColor(): $AEColor;
        notifyNeighbors(): void;
        clearContainer(): void;
        isBlocked(arg0: $Direction_): boolean;
        markForUpdate(): void;
        getPart(arg0: $Direction_): $IPart;
        removePart(arg0: $IPart): boolean;
        canAddPart(arg0: $ItemStack_, arg1: $Direction_): boolean;
        replacePart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $Direction_, arg2: $Player, arg3: $InteractionHand_): T;
        markForSave(): void;
        selectPartLocal(arg0: $Vec3_): $SelectedPart;
        getFacadeContainer(): $IFacadeContainer;
        partChanged(): void;
        removePartFromSide(arg0: $Direction_): void;
        notifyNeighborNow(arg0: $Direction_): void;
        hasRedstone(): boolean;
        selectPartWorld(arg0: $Vec3_): $SelectedPart;
        addPart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $Direction_, arg2: $Player): T;
        get empty(): boolean;
        get location(): $DimensionalBlockPos;
        get inWorld(): boolean;
        get blockEntity(): $BlockEntity;
        get color(): $AEColor;
        get facadeContainer(): $IFacadeContainer;
    }
    export class $BusSupport extends $Enum<$BusSupport> {
        static values(): $BusSupport[];
        static valueOf(arg0: string): $BusSupport;
        static DENSE_CABLE: $BusSupport;
        static CABLE: $BusSupport;
    }
    /**
     * Values that may be interpreted as {@link $BusSupport}.
     */
    export type $BusSupport_ = "cable" | "dense_cable";
    export class $IPartModel {
    }
    export interface $IPartModel {
        requireCableConnection(): boolean;
        getModels(): $List<$ResourceLocation>;
        get models(): $List<$ResourceLocation>;
    }
    export class $IFacadePart {
    }
    export interface $IFacadePart {
        getItem(): $Item;
        getBoxes(arg0: $IPartCollisionHelper, arg1: boolean): void;
        getSide(): $Direction;
        getItemStack(): $ItemStack;
        getBlockState(): $BlockState;
        onClicked(arg0: $Player, arg1: $Vec3_): boolean;
        onUseItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        getTextureItem(): $ItemStack;
        get item(): $Item;
        get side(): $Direction;
        get itemStack(): $ItemStack;
        get blockState(): $BlockState;
        get textureItem(): $ItemStack;
    }
    export class $RegisterPartCapabilitiesEvent extends $Event implements $IModBusEvent {
        register<T, C, P extends $IPart>(arg0: $BlockCapability<T, C>, arg1: $ICapabilityProvider_<P, C, T>, arg2: $Class<P>): void;
        registerContext<T, C>(arg0: $BlockCapability<T, C>, arg1: $Function_<C, $Direction>): void;
        addHostType<T extends $BlockEntity>(arg0: $BlockEntityType<T>): void;
        constructor();
    }
}
