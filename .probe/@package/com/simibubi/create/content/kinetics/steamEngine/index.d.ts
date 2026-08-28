import { $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ParticleProvider, $SimpleAnimatedParticle, $SpriteSet, $Particle, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbstractShaftBlock } from "@package/com/simibubi/create/content/kinetics/simpleRelays";
import { $DirectionProperty, $AttachFace, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $SimpleWaterloggedBlock, $FaceAttachedHorizontalDirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $FluidTankBlockEntity } from "@package/com/simibubi/create/content/fluids/tank";
import { $List_ } from "@package/java/util";
import { $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $GeneratingKineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ICustomParticleDataWithSprite } from "@package/com/simibubi/create/foundation/particle";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/kinetics/steamEngine" {
    export class $PoweredShaftBlockEntity extends $GeneratingKineticBlockEntity {
        remove(arg0: $BlockPos_): void;
        update(arg0: $BlockPos_, arg1: number, arg2: number): void;
        isPoweredBy(arg0: $BlockPos_): boolean;
        addToEngineTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        canBePoweredBy(arg0: $BlockPos_): boolean;
        movementDirection: number;
        initialTicks: number;
        level: $Level;
        reActivateSource: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        engineEfficiency: number;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        updateSpeed: boolean;
        hasComparators: number;
        capacityKey: $Block;
        preventSpeedUpdate: number;
        enginePos: $BlockPos;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $SteamJetParticleData implements $ParticleOptions, $ICustomParticleDataWithSprite<$SteamJetParticleData> {
        getType(): $ParticleType<never>;
        getCodec(arg0: $ParticleType<$SteamJetParticleData>): $MapCodec<$SteamJetParticleData>;
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<$SteamJetParticleData>;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SteamJetParticleData>;
        getFactory(): $ParticleProvider<$SteamJetParticleData>;
        register(arg0: $ParticleType<$SteamJetParticleData>, arg1: $RegisterParticleProvidersEvent): void;
        createType(): $ParticleType<$SteamJetParticleData>;
        static CODEC: $MapCodec<$SteamJetParticleData>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SteamJetParticleData>;
        constructor(arg0: number);
        constructor();
        get type(): $ParticleType<never>;
        get metaFactory(): $ParticleEngine$SpriteParticleRegistration<$SteamJetParticleData>;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SteamJetParticleData>;
        get factory(): $ParticleProvider<$SteamJetParticleData>;
    }
    export class $SteamJetParticle extends $SimpleAnimatedParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SteamJetParticle$Factory implements $ParticleProvider<$SteamJetParticleData> {
        createParticle(arg0: $SteamJetParticleData, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SteamEngineBlock$PlacementHelper implements $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
    }
    export class $SteamEngineBlock extends $FaceAttachedHorizontalDirectionalBlock implements $SimpleWaterloggedBlock, $IWrenchable, $IBE<$SteamEngineBlockEntity> {
        getBlockEntityClass(): $Class<$SteamEngineBlockEntity>;
        static getFacing(arg0: $BlockState_): $Direction;
        static isShaftValid(arg0: $BlockState_, arg1: $BlockState_): boolean;
        static getShaftPos(arg0: $BlockState_, arg1: $BlockPos_): $BlockPos;
        getBlockEntityType(): $BlockEntityType<$SteamEngineBlockEntity>;
        static getSpeedRange(): $Couple<number>;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SteamEngineBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SteamEngineBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SteamEngineBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SteamEngineBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SteamEngineBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
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
        static CODEC: $MapCodec<$SteamEngineBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static FACE: $EnumProperty<$AttachFace>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$SteamEngineBlockEntity>;
        get blockEntityType(): $BlockEntityType<$SteamEngineBlockEntity>;
        static get speedRange(): $Couple<number>;
    }
    export class $SteamEngineBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {
        isValid(): boolean;
        getTank(): $FluidTankBlockEntity;
        getShaft(): $PoweredShaftBlockEntity;
        getTargetAngle(): number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $WeakReference<$FluidTankBlockEntity>;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        target: $WeakReference<$PoweredShaftBlockEntity>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get valid(): boolean;
        get tank(): $FluidTankBlockEntity;
        get shaft(): $PoweredShaftBlockEntity;
        get targetAngle(): number;
    }
    export class $SteamEngineVisual extends $AbstractBlockEntityVisual<$SteamEngineBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $SteamEngineBlockEntity, arg2: number);
    }
    export class $SteamEngineValueBox extends $ValueBoxTransform$Sided {
        constructor();
    }
    export class $SteamEngineRenderer extends $SafeBlockEntityRenderer<$SteamEngineBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $PoweredShaftBlock extends $AbstractShaftBlock {
        static stillValid(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        static getEquivalent(arg0: $BlockState_): $BlockState;
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
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
}
