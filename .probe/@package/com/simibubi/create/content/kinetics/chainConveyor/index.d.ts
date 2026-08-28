import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ChainConveyorOBBAccessor } from "@package/dev/lopyluna/gnkinetics/mixins";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $RenderHighlightEvent$Block } from "@package/net/neoforged/neoforge/client/event";
import { $WeakReference } from "@package/java/lang/ref";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $Clearable, $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $BlockSubLevelAssemblyListener } from "@package/dev/ryanhcode/sable/api/block";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $SimpleDynamicVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $FrogportBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort/frogport";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $Map, $Map$Entry, $Set, $UUID, $List, $Collection_, $Collection } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Position, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SingleAxisRotatingVisual, $KineticBlockEntityRenderer, $KineticBlockEntity, $KineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IHaveBigOutline, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Record, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ChainConveyorRidingHandlerAccessor } from "@package/com/kipti/bnb/mixin";
import { $WorldAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $BlockGetter, $Level } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Cache } from "@package/com/google/common/cache";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $ChainConveyorShapeAccessor } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/frogports";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/kinetics/chainConveyor" {
    export class $ChainPackageInteractionPacket extends $BlockEntityConfigurationPacket<$ChainConveyorBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ChainPackageInteractionPacket>;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: number, arg3: boolean);
    }
    export class $ChainPackageInteractionHandler {
        static onUse(): boolean;
        constructor();
    }
    export class $ChainConveyorShape implements $ChainConveyorShapeAccessor {
        intersect(arg0: $Vec3_, arg1: $Vec3_): $Vec3;
        getVec(arg0: $BlockPos_, arg1: number): $Vec3;
        getChainPosition(arg0: $Vec3_): number;
        invokeDrawOutline(arg0: $BlockPos_, arg1: $PoseStack, arg2: $VertexConsumer): void;
        constructor();
    }
    export class $ChainConveyorBlock extends $KineticBlock implements $IBE<$ChainConveyorBlockEntity>, $IHaveBigOutline, $BlockSubLevelAssemblyListener {
        getBlockEntityClass(): $Class<$ChainConveyorBlockEntity>;
        afterMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        beforeMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        getBlockEntityType(): $BlockEntityType<$ChainConveyorBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ChainConveyorBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ChainConveyorBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ChainConveyorBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ChainConveyorBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ChainConveyorBlockEntity>): void;
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
        get blockEntityClass(): $Class<$ChainConveyorBlockEntity>;
        get blockEntityType(): $BlockEntityType<$ChainConveyorBlockEntity>;
    }
    export class $ChainConveyorPackage {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ChainConveyorPackage;
        writeToClient(arg0: $HolderLookup$Provider): $CompoundTag;
        physicsData(arg0: $LevelAccessor): $ChainConveyorPackage$ChainConveyorPackagePhysicsData;
        worldPosition: $Vec3;
        item: $ItemStack;
        justFlipped: boolean;
        netId: number;
        static physicsDataCache: $WorldAttached<$Cache<number, $ChainConveyorPackage$ChainConveyorPackagePhysicsData>>;
        chainPosition: number;
        static netIdGenerator: $AtomicInteger;
        yaw: number;
        constructor(arg0: number, arg1: $ItemStack_);
        constructor(arg0: number, arg1: $ItemStack_, arg2: number);
    }
    export class $ChainConveyorVisual extends $SingleAxisRotatingVisual<$ChainConveyorBlockEntity> implements $SimpleDynamicVisual, $SimpleTickableVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $ChainConveyorBlockEntity, arg2: number);
    }
    export class $ChainConveyorConnectionPacket extends $BlockEntityConfigurationPacket<$ChainConveyorBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChainConveyorConnectionPacket>;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $ItemStack_, arg3: boolean);
    }
    export class $ServerChainConveyorHandler {
        static sync(): void;
        static tick(): void;
        static handleStopRidingPacket(arg0: $Player): void;
        static handleTTLPacket(arg0: $Player): void;
        static ticks: number;
        static hangingPlayers: $Object2IntMap<$UUID>;
        constructor();
    }
    export class $ChainConveyorRenderer extends $KineticBlockEntityRenderer<$ChainConveyorBlockEntity> {
        shouldRenderOffScreen(arg0: $ChainConveyorBlockEntity): boolean;
        redirect$hno000$sable$fixMipDistance(arg0: $Vec3_, arg1: $Position, arg2: number): boolean;
        static renderChain(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        static CHAIN_LOCATION: $ResourceLocation;
        static MIP_DISTANCE: number;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ServerboundChainConveyorRidingPacket extends $BlockEntityConfigurationPacket<$ChainConveyorBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundChainConveyorRidingPacket>;
        constructor(arg0: $BlockPos_, arg1: boolean);
    }
    export class $ChainConveyorRidingHandler implements $ChainConveyorRidingHandlerAccessor {
        static clientTick(): void;
        static embark(arg0: $BlockPos_, arg1: number, arg2: $BlockPos_): void;
        static invokeStopRiding$bits_n_bobs_$md$707fe4$1(): void;
        static getRidingChainConveyor$bits_n_bobs_$md$707fe4$0(): $BlockPos;
        static ridingConnection: $BlockPos;
        static flipped: boolean;
        static ridingChainConveyor: $BlockPos;
        static chainPosition: number;
        static catchingUp: number;
        constructor();
        static get ridingChainConveyor$bits_n_bobs_$md$707fe4$0(): $BlockPos;
    }
    export class $ChainConveyorPackage$ChainConveyorPackagePhysicsData {
        shouldTick(): boolean;
        setBE(arg0: $ChainConveyorBlockEntity): void;
        targetPos: $Vec3;
        lastTick: number;
        flipped: boolean;
        motion: $Vec3;
        prevYaw: number;
        pos: $Vec3;
        prevTargetPos: $Vec3;
        prevPos: $Vec3;
        beReference: $WeakReference<$ChainConveyorBlockEntity>;
        yaw: number;
        modelKey: $ResourceLocation;
        constructor(arg0: $ChainConveyorPackage, arg1: $Vec3_);
        set BE(value: $ChainConveyorBlockEntity);
    }
    export class $ChainConveyorInteractionHandler {
        static onUse(): boolean;
        static hideVanillaBlockSelection(arg0: $RenderHighlightEvent$Block): void;
        static clientTick(): void;
        static drawCustomBlockSelection(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Vec3_): void;
        static selectedChainPosition: number;
        static selectedShape: $ChainConveyorShape;
        static selectedBakedPosition: $Vec3;
        static selectedConnection: $BlockPos;
        static loadedChains: $WorldAttached<$Cache<$BlockPos, $List<$ChainConveyorShape>>>;
        static selectedLift: $BlockPos;
        constructor();
    }
    export class $ChainConveyorBlockEntity$ConnectedPort extends $Record {
        filter(): string;
        connection(): $BlockPos;
        chainPosition(): number;
        constructor(chainPosition: number, connection: $BlockPos_, filter: string);
    }
    /**
     * Values that may be interpreted as {@link $ChainConveyorBlockEntity$ConnectedPort}.
     */
    export type $ChainConveyorBlockEntity$ConnectedPort_ = { filter?: string, chainPosition?: number, connection?: $BlockPos_,  } | [filter?: string, chainPosition?: number, connection?: $BlockPos_, ];
    export class $ChainConveyorRoutingTable {
        createSummary(): $Collection<$Component>;
        tick(): void;
        shouldAdvertise(): boolean;
        advertiseTo(arg0: $BlockPos_, arg1: $ChainConveyorRoutingTable): void;
        receivePortInfo(arg0: string, arg1: $BlockPos_): void;
        getExitFor(arg0: $ItemStack_): $BlockPos;
        static ENTRY_TIMEOUT: number;
        lastUpdate: number;
        static PORT_ENTRY_TIMEOUT: number;
        entriesByDistance: $List<$ChainConveyorRoutingTable$RoutingTableEntry>;
        changed: boolean;
        constructor();
    }
    export class $ChainConveyorRoutingTable$RoutingTableEntry extends $Record {
        port(): string;
        timeout(): $MutableInt;
        distance(): number;
        invalid(): boolean;
        tick(): void;
        nextConnection(): $BlockPos;
        endOfRoute(): boolean;
        copyForNeighbour(arg0: $BlockPos_): $ChainConveyorRoutingTable$RoutingTableEntry;
        constructor(port: string, distance: number, nextConnection: $BlockPos_, timeout: $MutableInt, endOfRoute: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ChainConveyorRoutingTable$RoutingTableEntry}.
     */
    export type $ChainConveyorRoutingTable$RoutingTableEntry_ = { timeout?: $MutableInt, nextConnection?: $BlockPos_, endOfRoute?: boolean, port?: string, distance?: number,  } | [timeout?: $MutableInt, nextConnection?: $BlockPos_, endOfRoute?: boolean, port?: string, distance?: number, ];
    export class $ChainConveyorShape$ChainConveyorOBB extends $ChainConveyorShape implements $ChainConveyorOBBAccessor {
        drawOutline(arg0: $BlockPos_, arg1: $PoseStack, arg2: $VertexConsumer): void;
        connection(): $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Vec3_);
    }
    export class $ChainConveyorBlockEntity$ConnectionStats extends $Record {
        end(): $Vec3;
        start(): $Vec3;
        tangentAngle(): number;
        chainLength(): number;
        constructor(tangentAngle: number, chainLength: number, start: $Vec3_, end: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $ChainConveyorBlockEntity$ConnectionStats}.
     */
    export type $ChainConveyorBlockEntity$ConnectionStats_ = { tangentAngle?: number, chainLength?: number, start?: $Vec3_, end?: $Vec3_,  } | [tangentAngle?: number, chainLength?: number, start?: $Vec3_, end?: $Vec3_, ];
    export class $ChainConveyorBlockEntity extends $KineticBlockEntity implements $TransformableBlockEntity, $Clearable {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        clearContent(): void;
        canAcceptPackagesFor(arg0: $BlockPos_): boolean;
        chainDestroyed(arg0: $BlockPos_, arg1: boolean, arg2: boolean): void;
        addLoopingPackage(arg0: $ChainConveyorPackage): boolean;
        tickBoxVisuals(): void;
        addConnectionTo(arg0: $BlockPos_): boolean;
        getPackagePosition(arg0: number, arg1: $BlockPos_): $Vec3;
        removeConnectionTo(arg0: $BlockPos_): boolean;
        prepareStats(): void;
        notifyConnectedToValidate(): void;
        loopThresholdCrossed(arg0: number, arg1: number, arg2: number): boolean;
        getTravellingPackages(): $Map<$BlockPos, $List<$ChainConveyorPackage>>;
        addTravellingPackage(arg0: $ChainConveyorPackage, arg1: $BlockPos_): boolean;
        forPointsAlongChains(arg0: $BlockPos_, arg1: number, arg2: $Consumer_<$Vec3>): boolean;
        removeInvalidConnections(): void;
        canAcceptMorePackages(): boolean;
        updateBoxWorldPositions(): void;
        static getChainCost(arg0: $BlockPos_): number;
        wrapOperation$hjl000$sable$testSublevelDistance(arg0: $FrogportBlockEntity, arg1: $Operation_<any>, arg2: $ChainConveyorPackage): boolean;
        wrapOperation$hjl000$sable$testSublevelDistance1(arg0: $ChainConveyorBlockEntity, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $Map$Entry<any, any>, arg4: $ChainConveyorPackage): void;
        getLoopingPackages(): $List<$ChainConveyorPackage>;
        static getChainsFromInventory(arg0: $Player, arg1: $ItemStack_, arg2: number, arg3: boolean): boolean;
        wrapAngle(arg0: number): number;
        canAcceptMorePackagesFromOtherConveyor(): boolean;
        handler$hij000$sable$dropInvalidPackages(arg0: $CallbackInfo, arg1: $BlockPos_): void;
        wrapOperation$hjl000$sable$testSublevelDistance1$mixinextras$bridge$61(arg0: $ChainConveyorBlockEntity, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $LocalRef<any>, arg4: $LocalRef<any>): void;
        wrapOperation$hjl000$sable$testSublevelDistance$mixinextras$bridge$60(arg0: $FrogportBlockEntity, arg1: $Operation_<any>, arg2: $LocalRef<any>): boolean;
        loopPorts: $Map<$BlockPos, $ChainConveyorBlockEntity$ConnectedPort>;
        level: $Level;
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
        travelPorts: $Map<$BlockPos, $ChainConveyorBlockEntity$ConnectedPort>;
        connectionStats: $Map<$BlockPos, $ChainConveyorBlockEntity$ConnectionStats>;
        updateSpeed: boolean;
        routingTable: $ChainConveyorRoutingTable;
        hasComparators: number;
        checkInvalid: boolean;
        preventSpeedUpdate: number;
        connections: $Set<$BlockPos>;
        reversed: boolean;
        cancelDrops: boolean;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get travellingPackages(): $Map<$BlockPos, $List<$ChainConveyorPackage>>;
        get loopingPackages(): $List<$ChainConveyorPackage>;
    }
    export class $ClientboundChainConveyorRidingPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        uuids(): $Collection<$UUID>;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundChainConveyorRidingPacket>;
        constructor(uuids: $Collection_<$UUID_>);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundChainConveyorRidingPacket}.
     */
    export type $ClientboundChainConveyorRidingPacket_ = { uuids?: $Collection_<$UUID_>,  } | [uuids?: $Collection_<$UUID_>, ];
    export class $ChainConveyorConnectionHandler {
        static onRightClick(): boolean;
        static clientTick(): void;
        static validateAndConnect(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Player, arg3: $ItemStack_, arg4: boolean): boolean;
        static onItemUsedOnBlock(arg0: $PlayerInteractEvent$RightClickBlock): void;
        constructor();
    }
    export class $ChainConveyorShape$ChainConveyorBB extends $ChainConveyorShape {
        drawOutline(arg0: $BlockPos_, arg1: $PoseStack, arg2: $VertexConsumer): void;
        constructor(arg0: $Vec3_);
    }
}
