import { $ChunkPos, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $MassTracker } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $SubLevelPhysicsSystem, $SubLevelTrackingSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $BoundingBox3dc, $BoundingBox3i, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $LevelPlot, $PlotChunkHolder } from "@package/dev/ryanhcode/sable/sublevel/plot";
import { $SubLevelRemovalReason_ } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ServerSubLevel, $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $UUID, $List, $Map, $BitSet, $UUID_, $Collection } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_ } from "@package/java/util/function";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ClientSableInterpolationState } from "@package/dev/ryanhcode/sable/network/client";
import { $FloatingClusterContainer } from "@package/dev/ryanhcode/sable/physics/floating_block";
import { $SubLevelLoadingTicketType_, $SubLevelTicketInfo } from "@package/dev/ryanhcode/sable/api/sublevel/ticket";
import { $Iterable } from "@package/java/lang";
import { $BlockSubLevelLiftProvider$LiftProviderContext } from "@package/dev/ryanhcode/sable/api/block";
import { $Vector2i, $Vector3dc, $Quaterniond } from "@package/org/joml";
export * as ticket from "@package/dev/ryanhcode/sable/api/sublevel/ticket";

declare module "@package/dev/ryanhcode/sable/api/sublevel" {
    export class $ClientSubLevelContainer extends $SubLevelContainer {
        getLevel(): $ClientLevel;
        getInterpolation(): $ClientSableInterpolationState;
        getLightingSceneId(arg0: $ClientSubLevel): number;
        freeLightingScene(arg0: number): void;
        addDebugInfo(arg0: $Consumer_<string>): void;
        static DEFAULT_LOG_SIZE_LENGTH: number;
        static DEFAULT_ORIGIN: number;
        static DEFAULT_LOG_PLOT_SIZE: number;
        constructor(arg0: $Level, arg1: number, arg2: number, arg3: number, arg4: number);
        get level(): $ClientLevel;
        get interpolation(): $ClientSableInterpolationState;
    }
    export class $SubLevelObserver {
    }
    export interface $SubLevelObserver {
        onSubLevelAdded(arg0: $SubLevel): void;
        onSubLevelRemoved(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        tick(arg0: $SubLevelContainer): void;
    }
    export class $SubLevelTrackingPlugin {
    }
    export interface $SubLevelTrackingPlugin {
        neededPlayers(): $Iterable<$UUID>;
        sendTrackingData(arg0: number): void;
    }
    export class $KinematicContraption {
    }
    export interface $KinematicContraption {
        sable$getFloatingClusterContainer(): $FloatingClusterContainer;
        sable$getPosition(arg0: number): $Vector3dc;
        sable$getPosition(): $Vector3dc;
        sable$blockGetter(): $BlockGetter;
        sable$getLocalPose(arg0: $Pose3d, arg1: number): $Pose3d;
        sable$isValid(): boolean;
        sable$getLocalBounds(arg0: $BoundingBox3i): void;
        sable$getMassTracker(): $MassTracker;
        sable$getOrientation(arg0: number): $Quaterniond;
        sable$getOrientation(): $Quaterniond;
        sable$liftProviders(): $Map<$BlockPos, $BlockSubLevelLiftProvider$LiftProviderContext>;
        sable$shouldCollide(): boolean;
    }
    export class $ServerSubLevelContainer extends $SubLevelContainer {
        initialize(): void;
        close(): void;
        getLevel(): $ServerLevel;
        physicsSystem(): $SubLevelPhysicsSystem;
        getHoldingChunkMap(): $SubLevelHoldingChunkMap;
        collectForceLoadedSubLevels(): $Collection<$ServerSubLevel>;
        takePhysicsSystem(arg0: $SubLevelPhysicsSystem): void;
        takeTrackingSystem(arg0: $SubLevelTrackingSystem): void;
        trackingSystem(): $SubLevelTrackingSystem;
        getAllTickets(): $Map<$UUID, $SubLevelTicketInfo>;
        addForceLoadTicket<T>(arg0: $ServerSubLevel, arg1: $SubLevelLoadingTicketType_<T>, arg2: T): boolean;
        loadTickets(arg0: $Object2ObjectMap<$UUID_, $SubLevelTicketInfo>): void;
        removeForceLoadTicket<T>(arg0: $ServerSubLevel, arg1: $SubLevelLoadingTicketType_<T>, arg2: T): boolean;
        static DEFAULT_LOG_SIZE_LENGTH: number;
        static DEFAULT_ORIGIN: number;
        static DEFAULT_LOG_PLOT_SIZE: number;
        constructor(arg0: $Level, arg1: number, arg2: number, arg3: number, arg4: number);
        get level(): $ServerLevel;
        get holdingChunkMap(): $SubLevelHoldingChunkMap;
        get allTickets(): $Map<$UUID, $SubLevelTicketInfo>;
    }
    export class $SubLevelContainer {
        getIndex(arg0: number, arg1: number): number;
        getLevel(): $Level;
        getLogPlotSize(): number;
        getLoadedCount(): number;
        removeSubLevel(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        removeSubLevel(arg0: number, arg1: number, arg2: $SubLevelRemovalReason_): void;
        addObserver(arg0: $SubLevelObserver): void;
        getPlayersTracking(arg0: $ChunkPos): $List<$ServerPlayer>;
        queryIntersecting(arg0: $BoundingBox3dc): $Iterable<$SubLevel>;
        newPopulatedChunk(arg0: $ChunkPos, arg1: $LevelChunk): void;
        allocateSubLevel(arg0: $UUID_, arg1: number, arg2: number, arg3: $Pose3d): $SubLevel;
        getLogSideLength(): number;
        getOrigin(): $Vector2i;
        inBounds(arg0: number, arg1: number): boolean;
        inBounds(arg0: $Vector3dc): boolean;
        inBounds(arg0: $BlockPos_): boolean;
        inBounds(arg0: $ChunkPos): boolean;
        static getContainer(arg0: $ClientLevel): $ClientSubLevelContainer;
        static getContainer(arg0: $Level): $SubLevelContainer;
        static getContainer(arg0: $ServerLevel): $ServerSubLevelContainer;
        processSubLevelRemovals(): void;
        allocateNewSubLevel(arg0: $Pose3d): $SubLevel;
        tick(): void;
        getOccupancy(): $BitSet;
        getChunkHolder(arg0: $ChunkPos): $PlotChunkHolder;
        getAllSubLevels(): $List<$SubLevel>;
        getChunk(arg0: $ChunkPos): $LevelChunk;
        getPlot(arg0: number, arg1: number): $LevelPlot;
        getPlot(arg0: $ChunkPos): $LevelPlot;
        getSubLevel(arg0: $UUID_): $SubLevel;
        getSubLevel(arg0: number, arg1: number): $SubLevel;
        static DEFAULT_LOG_SIZE_LENGTH: number;
        static DEFAULT_ORIGIN: number;
        static DEFAULT_LOG_PLOT_SIZE: number;
        constructor(arg0: $Level, arg1: number, arg2: number, arg3: number, arg4: number);
        get level(): $Level;
        get logPlotSize(): number;
        get loadedCount(): number;
        get logSideLength(): number;
        get origin(): $Vector2i;
        get occupancy(): $BitSet;
        get allSubLevels(): $List<$SubLevel>;
    }
}
