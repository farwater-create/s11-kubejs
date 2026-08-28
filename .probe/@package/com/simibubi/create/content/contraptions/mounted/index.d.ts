import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $List_, $Map } from "@package/java/util";
import { $CenteredSideValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$EntityInteract } from "@package/net/neoforged/neoforge/event/entity/player";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $AssemblyException, $OrientedContraptionEntity, $IDisplayAssemblyExceptions, $AbstractContraptionEntity, $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $RailShape, $Property, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $BaseRailBlock, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $AbstractMinecart$Type_, $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/contraptions/mounted" {
    export class $MinecartContraptionItem extends $Item {
        static create(arg0: $AbstractMinecart$Type_, arg1: $OrientedContraptionEntity): $ItemStack;
        static rideable(arg0: $Item$Properties): $MinecartContraptionItem;
        static chest(arg0: $Item$Properties): $MinecartContraptionItem;
        static furnace(arg0: $Item$Properties): $MinecartContraptionItem;
        handler$zef000$openpartiesandclaims$onUseOnPost(arg0: $UseOnContext, arg1: $CallbackInfoReturnable<any>): void;
        handler$zef000$openpartiesandclaims$onUseOnPre(arg0: $UseOnContext, arg1: $CallbackInfoReturnable<any>): void;
        static wrenchCanBeUsedToPickUpMinecartContraptions(arg0: $PlayerInteractEvent$EntityInteract): void;
        static addContraptionToMinecart(arg0: $Level, arg1: $ItemStack_, arg2: $AbstractMinecart, arg3: $Direction_): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
    }
    export class $CartAssembleRailType extends $Enum<$CartAssembleRailType> implements $StringRepresentable {
        static values(): $CartAssembleRailType[];
        static valueOf(arg0: string): $CartAssembleRailType;
        matches(arg0: $BlockState_): boolean;
        getBlock(): $Block;
        getItem(): $Item;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static DETECTOR_RAIL: $CartAssembleRailType;
        static REGULAR: $CartAssembleRailType;
        static CONTROLLER_RAIL: $CartAssembleRailType;
        static ACTIVATOR_RAIL: $CartAssembleRailType;
        static POWERED_RAIL: $CartAssembleRailType;
        get block(): $Block;
        get item(): $Item;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CartAssembleRailType}.
     */
    export type $CartAssembleRailType_ = "regular" | "powered_rail" | "detector_rail" | "activator_rail" | "controller_rail";
    export class $CartAssemblerBlock$CartAssemblerAction extends $Enum<$CartAssemblerBlock$CartAssemblerAction> {
        static values(): $CartAssemblerBlock$CartAssemblerAction[];
        static valueOf(arg0: string): $CartAssemblerBlock$CartAssemblerAction;
        shouldAssemble(): boolean;
        shouldDisassemble(): boolean;
        static ASSEMBLE_ACCELERATE_DIRECTIONAL: $CartAssemblerBlock$CartAssemblerAction;
        static DISASSEMBLE: $CartAssemblerBlock$CartAssemblerAction;
        static PASS: $CartAssemblerBlock$CartAssemblerAction;
        static ASSEMBLE: $CartAssemblerBlock$CartAssemblerAction;
        static DISASSEMBLE_BRAKE: $CartAssemblerBlock$CartAssemblerAction;
        static ASSEMBLE_ACCELERATE: $CartAssemblerBlock$CartAssemblerAction;
    }
    /**
     * Values that may be interpreted as {@link $CartAssemblerBlock$CartAssemblerAction}.
     */
    export type $CartAssemblerBlock$CartAssemblerAction_ = "assemble" | "disassemble" | "assemble_accelerate" | "disassemble_brake" | "assemble_accelerate_directional" | "pass";
    export class $CartAssemblerBlock extends $BaseRailBlock implements $IBE<$CartAssemblerBlockEntity>, $IWrenchable, $SpecialBlockItemRequirement {
        getBlockEntityClass(): $Class<$CartAssemblerBlockEntity>;
        static getActionForCart(arg0: $BlockState_, arg1: $AbstractMinecart): $CartAssemblerBlock$CartAssemblerAction;
        static canAssembleTo(arg0: $AbstractMinecart): boolean;
        static createAnchor(arg0: $BlockState_): $BlockState;
        getDropsNoRail(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockEntity, arg4: $Entity, arg5: $ItemStack_): $List<$ItemStack>;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        static getRailBlock(arg0: $BlockState_): $BlockState;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityType(): $BlockEntityType<$CartAssemblerBlockEntity>;
        static getHorizontalDirection(arg0: $BlockState_): $Direction;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $CartAssemblerBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($CartAssemblerBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CartAssemblerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CartAssemblerBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$CartAssemblerBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static HALF_BLOCK_AABB: $VoxelShape;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static RAIL_SHAPE: $Property<$RailShape>;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static FLAT_AABB: $VoxelShape;
        static WATERLOGGED: $BooleanProperty;
        static RAIL_TYPE: $Property<$CartAssembleRailType>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$CartAssemblerBlock>;
        static BACKWARDS: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$CartAssemblerBlockEntity>;
        get blockEntityType(): $BlockEntityType<$CartAssemblerBlockEntity>;
    }
    export class $CartAssemblerBlockEntity extends $SmartBlockEntity implements $IDisplayAssemblyExceptions {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getLastAssemblyException(): $AssemblyException;
        assembleNextTick(arg0: $AbstractMinecart): void;
        tryAssemble(arg0: $AbstractMinecart): void;
        isMinecartUpdateValid(): boolean;
        resetTicksSinceMinecartUpdate(): void;
        addExceptionToTooltip(arg0: $List_<$Component_>): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get lastAssemblyException(): $AssemblyException;
        get minecartUpdateValid(): boolean;
    }
    export class $CartAssemblerBlockItem extends $BlockItem {
        tryPlaceAssembler(arg0: $UseOnContext): boolean;
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
    export class $MountedContraption extends $Contraption {
        addExtraInventories(arg0: $Entity): void;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        rotationMode: $CartAssemblerBlockEntity$CartMovementMode;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        connectedCart: $AbstractMinecart;
        entity: $AbstractContraptionEntity;
        constructor();
        constructor(arg0: $CartAssemblerBlockEntity$CartMovementMode_);
    }
    export class $CartAssemblerBlockEntity$CartAssemblerValueBoxTransform extends $CenteredSideValueBoxTransform {
    }
    export class $CartAssemblerBlock$MinecartAnchorBlock extends $Block {
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
    }
    export class $CartAssemblerBlockEntity$CartMovementMode extends $Enum<$CartAssemblerBlockEntity$CartMovementMode> implements $INamedIconOptions {
        static values(): $CartAssemblerBlockEntity$CartMovementMode[];
        static valueOf(arg0: string): $CartAssemblerBlockEntity$CartMovementMode;
        getIcon(): $AllIcons;
        getTranslationKey(): string;
        static ROTATE: $CartAssemblerBlockEntity$CartMovementMode;
        static ROTATION_LOCKED: $CartAssemblerBlockEntity$CartMovementMode;
        static ROTATE_PAUSED: $CartAssemblerBlockEntity$CartMovementMode;
        get icon(): $AllIcons;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $CartAssemblerBlockEntity$CartMovementMode}.
     */
    export type $CartAssemblerBlockEntity$CartMovementMode_ = "rotate" | "rotate_paused" | "rotation_locked";
}
