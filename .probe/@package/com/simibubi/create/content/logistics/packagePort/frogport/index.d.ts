import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $PackagePortTarget, $PackagePortBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List_ } from "@package/java/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/packagePort/frogport" {
    export class $FrogportVisual extends $AbstractBlockEntityVisual<$FrogportBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        wrapOperation$hnh002$sable$getExactTargetLocation(arg0: $PackagePortTarget, arg1: $PackagePortBlockEntity, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $Operation_<any>): $Vec3;
        updateGoggles(): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $FrogportBlockEntity, arg2: number);
    }
    export class $FrogportBlockEntity extends $PackagePortBlockEntity implements $IHaveHoveringInformation {
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        isAnimationInProgress(): boolean;
        getYaw(): number;
        tryPullingFromOwnAndAdjacentInventories(): void;
        anticipate(): void;
        wrapOperation$hjo000$sable$getExactTargetLocation(arg0: $PackagePortTarget, arg1: $PackagePortBlockEntity, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $Operation_<any>): $Vec3;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        tryPullingFrom(arg0: $IItemHandler): boolean;
        startAnimation(arg0: $ItemStack_, arg1: boolean): void;
        sendAnticipate(): void;
        acceptsPackages: boolean;
        anticipationProgress: $LerpedFloat;
        level: $Level;
        animationProgress: $LerpedFloat;
        static ATTACHMENTS_NBT_KEY: string;
        computerBehaviour: $AbstractComputerBehaviour;
        inventory: $SmartInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        manualOpenAnimationProgress: $LerpedFloat;
        currentlyDepositing: boolean;
        target: $PackagePortTarget;
        animatedPackage: $ItemStack;
        worldPosition: $BlockPos;
        goggles: boolean;
        passiveYaw: number;
        addressFilter: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get animationInProgress(): boolean;
        get yaw(): number;
    }
    export class $FrogportBlock extends $Block implements $IBE<$FrogportBlockEntity>, $IWrenchable {
        getBlockEntityClass(): $Class<$FrogportBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$FrogportBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FrogportBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FrogportBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FrogportBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FrogportBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FrogportBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
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
        get blockEntityClass(): $Class<$FrogportBlockEntity>;
        get blockEntityType(): $BlockEntityType<$FrogportBlockEntity>;
    }
    export class $FrogportSounds {
        close(arg0: $Level, arg1: $BlockPos_): void;
        open(arg0: $Level, arg1: $BlockPos_): void;
        catchPackage(arg0: $Level, arg1: $BlockPos_): void;
        depositPackage(arg0: $Level, arg1: $BlockPos_): void;
        constructor();
    }
    export class $FrogportRenderer extends $SmartBlockEntityRenderer<$FrogportBlockEntity> {
        wrapOperation$hng001$sable$getExactTargetLocation(arg0: $PackagePortTarget, arg1: $PackagePortBlockEntity, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $Operation_<any>): $Vec3;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
