import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $SignalEdgeGroup } from "@package/com/simibubi/create/content/trains/signal";
import { $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID, $List, $Map, $UUID_ } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $RandomSource } from "@package/net/minecraft/util";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $TrackNodeLocation, $TrackGraph, $TrackGraphSync } from "@package/com/simibubi/create/content/trains/graph";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ICustomParticleData } from "@package/com/simibubi/create/foundation/particle";
import { $Level, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ParticleProvider, $Particle } from "@package/net/minecraft/client/particle";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LayeredDraw$Layer } from "@package/net/minecraft/client/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as observer from "@package/com/simibubi/create/content/trains/observer";
export * as display from "@package/com/simibubi/create/content/trains/display";
export * as bogey from "@package/com/simibubi/create/content/trains/bogey";
export * as track from "@package/com/simibubi/create/content/trains/track";
export * as schedule from "@package/com/simibubi/create/content/trains/schedule";
export * as graph from "@package/com/simibubi/create/content/trains/graph";
export * as signal from "@package/com/simibubi/create/content/trains/signal";
export * as station from "@package/com/simibubi/create/content/trains/station";
export * as entity from "@package/com/simibubi/create/content/trains/entity";

declare module "@package/com/simibubi/create/content/trains" {
    export class $TrainHUDUpdatePacket$Serverbound extends $TrainHUDUpdatePacket implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainHUDUpdatePacket$Serverbound>;
        constructor(arg0: $Train, arg1: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    export class $CameraDistanceModifier {
        static reset(): void;
        static getMultiplier(arg0: number): number;
        static getMultiplier(): number;
        static tick(): void;
        static zoomOut(arg0: number): void;
        static zoomOut(): void;
        constructor();
    }
    export class $CubeParticle$Factory implements $ParticleProvider<$CubeParticleData> {
        createParticle(arg0: $CubeParticleData, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $HonkPacket$Clientbound extends $HonkPacket implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $HonkPacket$Clientbound>;
        constructor(arg0: $Train, arg1: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    export class $HonkPacket$Serverbound extends $HonkPacket implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $HonkPacket$Serverbound>;
        constructor(arg0: $Train, arg1: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    export class $TrainHUDUpdatePacket implements $CustomPacketPayload {
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
    }
    export class $GlobalRailwayManager {
        cleanUp(): void;
        removeGraphAndGroup(arg0: $TrackGraph): void;
        putGraphWithDefaultGroup(arg0: $TrackGraph): void;
        tick(arg0: $Level): void;
        markTracksDirty(): void;
        getOrCreateGraph(arg0: $UUID_, arg1: number): $TrackGraph;
        levelLoaded(arg0: $LevelAccessor): void;
        playerLogout(arg0: $Player): void;
        tickSignalOverlay(): void;
        removeGraph(arg0: $TrackGraph): void;
        removeTrain(arg0: $UUID_): void;
        playerLogin(arg0: $Player): void;
        updateSplitGraph(arg0: $LevelAccessor, arg1: $TrackGraph): void;
        clientTick(): void;
        addTrain(arg0: $Train): void;
        getGraph(arg0: $LevelAccessor, arg1: $TrackNodeLocation): $TrackGraph;
        getGraphs(arg0: $LevelAccessor, arg1: $TrackNodeLocation): $List<$TrackGraph>;
        sided(arg0: $LevelAccessor): $GlobalRailwayManager;
        putGraph(arg0: $TrackGraph): void;
        trackNetworks: $Map<$UUID, $TrackGraph>;
        signalEdgeGroups: $Map<$UUID, $SignalEdgeGroup>;
        trains: $Map<$UUID, $Train>;
        sync: $TrackGraphSync;
        version: number;
        constructor();
    }
    export class $TrainHUDUpdatePacket$Clientbound extends $TrainHUDUpdatePacket implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainHUDUpdatePacket$Clientbound>;
        constructor(arg0: $Train);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    export class $RailwaySavedData extends $SavedData {
        static load(arg0: $MinecraftServer): $RailwaySavedData;
        static factory(): $SavedData$Factory<$RailwaySavedData>;
        getTrackNetworks(): $Map<$UUID, $TrackGraph>;
        getSignalBlocks(): $Map<$UUID, $SignalEdgeGroup>;
        getTrains(): $Map<$UUID, $Train>;
        get trackNetworks(): $Map<$UUID, $TrackGraph>;
        get signalBlocks(): $Map<$UUID, $SignalEdgeGroup>;
        get trains(): $Map<$UUID, $Train>;
    }
    export class $HonkPacket implements $CustomPacketPayload {
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
    }
    export class $CubeParticleData implements $ParticleOptions, $ICustomParticleData<$CubeParticleData> {
        getFactory(): $ParticleProvider<$CubeParticleData>;
        getType(): $ParticleType<never>;
        getCodec(arg0: $ParticleType<$CubeParticleData>): $MapCodec<$CubeParticleData>;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $CubeParticleData>;
        register(arg0: $ParticleType<$CubeParticleData>, arg1: $RegisterParticleProvidersEvent): void;
        createType(): $ParticleType<$CubeParticleData>;
        static CODEC: $MapCodec<$CubeParticleData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CubeParticleData>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean);
        constructor();
        get factory(): $ParticleProvider<$CubeParticleData>;
        get type(): $ParticleType<never>;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $CubeParticleData>;
    }
    export class $CubeParticle extends $Particle {
        setHot(arg0: boolean): void;
        averageAge(arg0: number): void;
        setScale(arg0: number): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        level: $ClientLevel;
        static CUBE: $Vec3[];
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
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        set hot(value: boolean);
    }
    export class $TrainHUD {
        static tick(): void;
        static onScroll(arg0: number): boolean;
        static currentPromptShadow: boolean;
        static currentPrompt: $Component;
        static promptKeepAlive: number;
        static OVERLAY: $LayeredDraw$Layer;
        constructor();
    }
}
