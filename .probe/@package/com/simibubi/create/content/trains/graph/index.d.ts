import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SignalBoundary, $EdgeGroupColor_, $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $TrackMaterial, $BezierTrackPointLocation_, $BezierConnection } from "@package/com/simibubi/create/content/trains/track";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID, $List, $Map_, $UUID_, $Set_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $GlobalStation } from "@package/com/simibubi/create/content/trains/station";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Vec3i, $Direction$AxisDirection_ } from "@package/net/minecraft/core";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Record, $Object } from "@package/java/lang";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $Level } from "@package/net/minecraft/world/level";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $TrackObserver } from "@package/com/simibubi/create/content/trains/observer";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/graph" {
    export class $TrackEdge {
        getLength(): number;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $TrackNode, arg1: $TrackNode, arg2: $CompoundTag_, arg3: $TrackGraph, arg4: $DimensionPalette): $TrackEdge;
        getPosition(arg0: $TrackGraph, arg1: number): $Vec3;
        getIntersection(arg0: $TrackNode, arg1: $TrackNode, arg2: $TrackEdge, arg3: $TrackNode, arg4: $TrackNode): $Collection<number[]>;
        isInterDimensional(): boolean;
        getTrackMaterial(): $TrackMaterial;
        getDirection(arg0: boolean): $Vec3;
        incrementT(arg0: number, arg1: number): number;
        getNormal(arg0: $TrackGraph, arg1: number): $Vec3;
        isTurn(): boolean;
        getTurn(): $BezierConnection;
        getEdgeData(): $EdgeData;
        canTravelTo(arg0: $TrackEdge): boolean;
        getDirectionAt(arg0: number): $Vec3;
        getNormalSmoothed(arg0: $TrackGraph, arg1: number): $Vec3;
        getPositionSmoothed(arg0: $TrackGraph, arg1: number): $Vec3;
        node2: $TrackNode;
        node1: $TrackNode;
        constructor(arg0: $TrackNode, arg1: $TrackNode, arg2: $BezierConnection, arg3: $TrackMaterial);
        get length(): number;
        get interDimensional(): boolean;
        get trackMaterial(): $TrackMaterial;
        get edgeData(): $EdgeData;
    }
    export class $TrackGraphVisualizer {
        static visualiseSignalEdgeGroups(arg0: $TrackGraph): void;
        static debugViewGraph(arg0: $TrackGraph, arg1: boolean): void;
        constructor();
    }
    export class $TrackGraph {
        isEmpty(): boolean;
        getBounds(arg0: $Level): $TrackGraphBounds;
        write(arg0: $HolderLookup$Provider, arg1: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $DimensionPalette): $TrackGraph;
        transfer(arg0: $LevelAccessor, arg1: $TrackNode, arg2: $TrackGraph): void;
        getNode(arg0: number): $TrackNode;
        removeNode(arg0: $LevelAccessor, arg1: $TrackNodeLocation): boolean;
        getConnection(arg0: $Couple<$TrackNode>): $TrackEdge;
        findDisconnectedGraphs(arg0: $LevelAccessor, arg1: $Map_<number, $Pair<number, $UUID_>>): $Set<$TrackGraph>;
        setId(arg0: $UUID_): void;
        addNode(arg0: $TrackNode): void;
        getChecksum(): number;
        getPoint<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: $UUID_): T;
        resolveIntersectingEdgeGroups(arg0: $Level): void;
        getNodes(): $Set<$TrackNodeLocation>;
        addPoint<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: T): void;
        putConnection(arg0: $TrackNode, arg1: $TrackNode, arg2: $TrackEdge): boolean;
        setNetId(arg0: number): void;
        tickPoints(arg0: boolean): void;
        locateNode(arg0: $Level, arg1: $Vec3_): $TrackNode;
        locateNode(arg0: $TrackNodeLocation): $TrackNode;
        markDirty(): void;
        getPoints<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>): $Collection<T>;
        getConnectionsFrom(arg0: $TrackNode): $Map<$TrackNode, $TrackEdge>;
        removePoint<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: $UUID_): T;
        loadNode(arg0: $TrackNodeLocation, arg1: number, arg2: $Vec3_): void;
        distanceToLocationSqr(arg0: $Level, arg1: $Vec3_): number;
        connectNodes(arg0: $LevelAccessor, arg1: $TrackNodeLocation$DiscoveredLocation, arg2: $TrackNodeLocation$DiscoveredLocation, arg3: $BezierConnection): void;
        transferAll(arg0: $TrackGraph): void;
        createNodeIfAbsent(arg0: $TrackNodeLocation$DiscoveredLocation): boolean;
        invalidateBounds(): void;
        addNodeIfAbsent(arg0: $TrackNode): boolean;
        static nextGraphId(): number;
        disconnectNodes(arg0: $TrackNode, arg1: $TrackNode): void;
        deferIntersectionUpdate(arg0: $TrackEdge): void;
        static nextNodeId(): number;
        static graphNetIdGenerator: $AtomicInteger;
        static nodeNetIdGenerator: $AtomicInteger;
        color: $Color;
        id: $UUID;
        constructor();
        constructor(arg0: $UUID_);
        get empty(): boolean;
        get checksum(): number;
        get nodes(): $Set<$TrackNodeLocation>;
        set netId(value: number);
    }
    export class $TrackEdgeIntersection {
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $DimensionPalette): $TrackEdgeIntersection;
        targets(arg0: $TrackNodeLocation, arg1: $TrackNodeLocation): boolean;
        isNear(arg0: number): boolean;
        groupId: $UUID;
        location: number;
        id: $UUID;
        targetLocation: number;
        target: $Couple<$TrackNodeLocation>;
        constructor();
    }
    export class $EdgePointType<T extends $TrackEdgePoint> {
        static register<T extends $TrackEdgePoint>(arg0: $ResourceLocation_, arg1: $Supplier_<T>): $EdgePointType<T>;
        static read(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): $TrackEdgePoint;
        getId(): $ResourceLocation;
        create(): T;
        static TYPES: $Map<$ResourceLocation, $EdgePointType<never>>;
        static SIGNAL: $EdgePointType<$SignalBoundary>;
        static STATION: $EdgePointType<$GlobalStation>;
        static OBSERVER: $EdgePointType<$TrackObserver>;
        constructor(arg0: $ResourceLocation_, arg1: $Supplier_<T>);
        get id(): $ResourceLocation;
    }
    export class $DiscoveredPath {
        path: $List<$Couple<$TrackNode>>;
        cost: number;
        distance: number;
        destination: $GlobalStation;
        constructor(arg0: number, arg1: number, arg2: $List_<$Couple<$TrackNode>>, arg3: $GlobalStation);
    }
    export class $TrackGraphBounds {
        beziers: $List<$BezierConnection>;
        box: $AABB;
        constructor(arg0: $TrackGraph, arg1: $ResourceKey_<$Level>);
    }
    export class $DimensionPalette {
        decode(arg0: number): $ResourceKey<$Level>;
        encode(arg0: $ResourceKey_<$Level>): number;
        write(arg0: $CompoundTag_): void;
        static read(arg0: $CompoundTag_): $DimensionPalette;
        static receive(arg0: $FriendlyByteBuf): $DimensionPalette;
        send(arg0: $FriendlyByteBuf): void;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DimensionPalette>;
        constructor();
        constructor(arg0: $List_<$ResourceKey_<$Level>>);
    }
    export class $TrackGraphSync {
        sendEdgeGroups(arg0: $List_<$UUID_>, arg1: $List_<$EdgeGroupColor_>, arg2: $ServerPlayer): void;
        pointRemoved(arg0: $TrackGraph, arg1: $TrackEdgePoint): void;
        nodeRemoved(arg0: $TrackGraph, arg1: $TrackNode): void;
        edgeGroupRemoved(arg0: $UUID_): void;
        graphRemoved(arg0: $TrackGraph): void;
        edgeDataChanged(arg0: $TrackGraph, arg1: $TrackNode, arg2: $TrackNode, arg3: $TrackEdge, arg4: $TrackEdge): void;
        edgeDataChanged(arg0: $TrackGraph, arg1: $TrackNode, arg2: $TrackNode, arg3: $TrackEdge): void;
        sendFullGraphTo(arg0: $TrackGraph, arg1: $ServerPlayer): void;
        edgeGroupCreated(arg0: $UUID_, arg1: $EdgeGroupColor_): void;
        graphSplit(arg0: $TrackGraph, arg1: $Set_<$TrackGraph>): void;
        edgeAdded(arg0: $TrackGraph, arg1: $TrackNode, arg2: $TrackNode, arg3: $TrackEdge): void;
        pointAdded(arg0: $TrackGraph, arg1: $TrackEdgePoint): void;
        serverTick(): void;
        nodeAdded(arg0: $TrackGraph, arg1: $TrackNode): void;
        constructor();
    }
    export class $TrackGraphPacket implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        packetDeletesGraph: boolean;
        netId: number;
        graphId: $UUID;
        constructor();
    }
    export class $TrackNode {
        getLocation(): $TrackNodeLocation;
        getNormal(): $Vec3;
        getNetId(): number;
        constructor(arg0: $TrackNodeLocation, arg1: number, arg2: $Vec3_);
        get location(): $TrackNodeLocation;
        get normal(): $Vec3;
        get netId(): number;
    }
    export class $TrackGraphLocation {
        edge: $Couple<$TrackNodeLocation>;
        position: number;
        graph: $TrackGraph;
        constructor();
    }
    export class $TrackGraphHelper {
        static getBezierGraphLocationAt(arg0: $Level, arg1: $BlockPos_, arg2: $Direction$AxisDirection_, arg3: $BezierTrackPointLocation_): $TrackGraphLocation;
        static getGraphLocationAt(arg0: $Level, arg1: $BlockPos_, arg2: $Direction$AxisDirection_, arg3: $Vec3_): $TrackGraphLocation;
        constructor();
    }
    export class $EdgeData {
        get<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: number): T;
        next<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: number): T;
        next(arg0: number): $TrackEdgePoint;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackEdge, arg2: $TrackGraph, arg3: $DimensionPalette): $EdgeData;
        addPoint<T extends $TrackEdgePoint>(arg0: $TrackGraph, arg1: $TrackEdgePoint): void;
        getPoints(): $List<$TrackEdgePoint>;
        removePoint(arg0: $TrackGraph, arg1: $TrackEdgePoint): void;
        setSingleSignalGroup(arg0: $TrackGraph, arg1: $UUID_): void;
        hasSignalBoundaries(): boolean;
        getSingleSignalGroup(): $UUID;
        getEffectiveEdgeGroupId(arg0: $TrackGraph): $UUID;
        addIntersection(arg0: $TrackGraph, arg1: $UUID_, arg2: number, arg3: $TrackNode, arg4: $TrackNode, arg5: number): void;
        getGroupAtPosition(arg0: $TrackGraph, arg1: number): $UUID;
        getIntersections(): $List<$TrackEdgeIntersection>;
        removeIntersection(arg0: $TrackGraph, arg1: $UUID_): void;
        hasIntersections(): boolean;
        refreshIntersectingSignalGroups(arg0: $TrackGraph): void;
        hasPoints(): boolean;
        static passiveGroup: $UUID;
        constructor(arg0: $TrackEdge);
        get points(): $List<$TrackEdgePoint>;
        get intersections(): $List<$TrackEdgeIntersection>;
    }
    export class $TrackGraphSyncPacket extends $TrackGraphPacket {
        write(arg0: $FriendlyByteBuf): void;
        syncEdgeData(arg0: $TrackNode, arg1: $TrackNode, arg2: $TrackEdge): void;
        packetDeletesGraph: boolean;
        netId: number;
        graphId: $UUID;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $TrackGraphSyncPacket>;
        constructor(arg0: $UUID_, arg1: number);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $TrackGraphRollCallPacket$Entry extends $Record {
        checksum(): number;
        netId(): number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrackGraphRollCallPacket$Entry>;
        constructor(netId: number, checksum: number);
    }
    /**
     * Values that may be interpreted as {@link $TrackGraphRollCallPacket$Entry}.
     */
    export type $TrackGraphRollCallPacket$Entry_ = { checksum?: number, netId?: number,  } | [checksum?: number, netId?: number, ];
    export class $TrackNodeLocation$DiscoveredLocation extends $TrackNodeLocation {
        getDirection(): $Vec3;
        materials(arg0: $TrackMaterial, arg1: $TrackMaterial): $TrackNodeLocation$DiscoveredLocation;
        materialB(arg0: $TrackMaterial): $TrackNodeLocation$DiscoveredLocation;
        forceNode(): $TrackNodeLocation$DiscoveredLocation;
        viaTurn(arg0: $BezierConnection): $TrackNodeLocation$DiscoveredLocation;
        materialA(arg0: $TrackMaterial): $TrackNodeLocation$DiscoveredLocation;
        withNormal(arg0: $Vec3_): $TrackNodeLocation$DiscoveredLocation;
        withDirection(arg0: $Vec3_): $TrackNodeLocation$DiscoveredLocation;
        getTurn(): $BezierConnection;
        withYOffset(arg0: number): $TrackNodeLocation$DiscoveredLocation;
        connectedViaTurn(): boolean;
        shouldForceNode(): boolean;
        notInLineWith(arg0: $Vec3_): boolean;
        differentMaterials(): boolean;
        static ZERO: $Vec3i;
        static CODEC: $Codec<$Vec3i>;
        yOffsetPixels: number;
        dimension: $ResourceKey<$Level>;
        constructor(arg0: $Level, arg1: $Vec3_);
        constructor(arg0: $ResourceKey_<$Level>, arg1: $Vec3_);
        constructor(arg0: $Level, arg1: number, arg2: number, arg3: number);
        get direction(): $Vec3;
        get turn(): $BezierConnection;
    }
    export class $EdgePointStorage {
        remove<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: $UUID_): T;
        get<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: $UUID_): T;
        put<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>, arg1: $TrackEdgePoint): void;
        values<T extends $TrackEdgePoint>(arg0: $EdgePointType<T>): $Collection<T>;
        write(arg0: $HolderLookup$Provider, arg1: $DimensionPalette): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $DimensionPalette): void;
        getMap(arg0: $EdgePointType<$TrackEdgePoint>): $Map<$UUID, $TrackEdgePoint>;
        tick(arg0: $TrackGraph, arg1: boolean): void;
        transferAll(arg0: $TrackGraph, arg1: $EdgePointStorage): void;
        constructor();
    }
    export class $TrackGraphRollCallPacket extends $Record implements $ClientboundPacketPayload {
        entries(): $List<$TrackGraphRollCallPacket$Entry>;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        static ofServer(): $TrackGraphRollCallPacket;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrackGraphRollCallPacket>;
        constructor(entries: $List_<$TrackGraphRollCallPacket$Entry_>);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $TrackGraphRollCallPacket}.
     */
    export type $TrackGraphRollCallPacket_ = { entries?: $List_<$TrackGraphRollCallPacket$Entry_>,  } | [entries?: $List_<$TrackGraphRollCallPacket$Entry_>, ];
    export class $TrackGraphRequestPacket extends $Record implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        netId(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrackGraphRequestPacket>;
        constructor(netId: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $TrackGraphRequestPacket}.
     */
    export type $TrackGraphRequestPacket_ = { netId?: number,  } | [netId?: number, ];
    export class $EdgePointManager {
        static onEdgePointAdded<T extends $TrackEdgePoint>(arg0: $TrackGraph, arg1: T, arg2: $EdgePointType<T>): void;
        static onEdgePointRemoved<T extends $TrackEdgePoint>(arg0: $TrackGraph, arg1: T, arg2: $EdgePointType<T>): void;
        constructor();
    }
    export class $TrackNodeLocation extends $Vec3i {
        getLocation(): $Vec3;
        write(arg0: $DimensionPalette): $CompoundTag;
        "in"(arg0: $Level): $TrackNodeLocation;
        "in"(arg0: $ResourceKey_<$Level>): $TrackNodeLocation;
        static read(arg0: $CompoundTag_, arg1: $DimensionPalette): $TrackNodeLocation;
        getDimension(): $ResourceKey<$Level>;
        static receive(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): $TrackNodeLocation;
        send(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): void;
        allAdjacent(): $Collection<$BlockPos>;
        equalsIgnoreDim(arg0: $Object): boolean;
        static ZERO: $Vec3i;
        static CODEC: $Codec<$Vec3i>;
        yOffsetPixels: number;
        dimension: $ResourceKey<$Level>;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $Vec3_);
        get location(): $Vec3;
    }
}
