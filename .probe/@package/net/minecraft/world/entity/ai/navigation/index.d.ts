import { $Level } from "@package/net/minecraft/world/level";
import { $Path, $PathType_, $NodeEvaluator, $PathFinder } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set_ } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/navigation" {
    export class $GroundPathNavigation extends $PathNavigation {
        setCanWalkOverFences(avoidSun: boolean): void;
        /**
         * Gets the safe pathing Y position for the entity depending on if it can path swim or not
         */
        getSurfaceY(): number;
        hasValidPathType(pathType: $PathType_): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        setAvoidSun(avoidSun: boolean): void;
        setCanOpenDoors(avoidSun: boolean): void;
        setCanPassDoors(avoidSun: boolean): void;
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level);
        set canWalkOverFences(value: boolean);
        get surfaceY(): number;
        set avoidSun(value: boolean);
    }
    export class $AmphibiousPathNavigation extends $PathNavigation {
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(arg0: $Mob, arg1: $Level);
    }
    export class $PathNavigation {
        /**
         * Sets the active `Path` to `null`.
         */
        stop(): void;
        /**
         * If on ground or swimming and can swim
         */
        isDone(): boolean;
        /**
         * Gets the actively used `Path`.
         */
        getPath(): $Path;
        /**
         * Sets the active `Path` to `null`.
         */
        tick(): void;
        moveTo(x: number, arg1: number, y: number, arg3: number, z: number): boolean;
        /**
         * Try to find and set a path to EntityLiving. Returns `true` if successful.
         */
        moveTo(entity: $Entity, speed: number): boolean;
        /**
         * Try to find and set a path to XYZ. Returns `true` if successful.
         */
        moveTo(x: number, arg1: number, y: number, arg3: number): boolean;
        /**
         * Sets a new path. If it's different from the old path. Checks to adjust path for sun avoiding, and stores start coords.
         */
        moveTo(pathentity: $Path | null, speed: number): boolean;
        static isClearForMovementBetween(mob: $Mob, pos1: $Vec3_, pos2: $Vec3_, allowSwimming: boolean): boolean;
        isStableDestination(pos: $BlockPos_): boolean;
        getMaxDistanceToWaypoint(): number;
        getTargetPos(): $BlockPos;
        /**
         * If on ground or swimming and can swim
         */
        isInProgress(): boolean;
        /**
         * Sets the speed
         */
        setSpeedModifier(speed: number): void;
        /**
         * Checks if the specified entity can safely walk to the specified location.
         */
        canMoveDirectly(posVec31: $Vec3_, posVec32: $Vec3_): boolean;
        getNodeEvaluator(): $NodeEvaluator;
        /**
         * Sets the active `Path` to `null`.
         */
        followThePath(): void;
        /**
         * If on ground or swimming and can swim
         */
        canUpdatePath(): boolean;
        /**
         * Checks if entity haven't been moved when last checked and if so, stops the current navigation.
         */
        doStuckDetection(positionVec3: $Vec3_): void;
        canCutCorner(pathType: $PathType_): boolean;
        getTempMobPos(): $Vec3;
        createPathFinder(maxVisitedNodes: number): $PathFinder;
        /**
         * Sets the active `Path` to `null`.
         */
        recomputePath(): void;
        createPath(positions: $Set_<$BlockPos_>, distance: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(pos: $BlockPos_, accuracy: number): $Path;
        /**
         * Returns a path to one of the elements of the stream or null
         */
        createPath(targets: $Stream<$BlockPos_>, accuracy: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(x: number, arg1: number, y: number, arg3: number): $Path;
        createPath(targets: $Set_<$BlockPos_>, regionOffset: number, offsetUpward: boolean, accuracy: number, followRange: number): $Path;
        /**
         * Returns a path to one of the given targets or null
         */
        createPath(targets: $Set_<$BlockPos_>, regionOffset: number, offsetUpward: boolean, accuracy: number): $Path;
        /**
         * Returns a path to the given entity or null
         */
        createPath(entity: $Entity, accuracy: number): $Path;
        createPath(pos: $BlockPos_, regionOffset: number, accuracy: number): $Path;
        /**
         * Sets the active `Path` to `null`.
         */
        trimPath(): void;
        /**
         * If on ground or swimming and can swim
         */
        isStuck(): boolean;
        getGroundY(vec: $Vec3_): number;
        /**
         * Sets the active `Path` to `null`.
         */
        resetMaxVisitedNodesMultiplier(): void;
        setMaxVisitedNodesMultiplier(multiplier: number): void;
        shouldTargetNextNodeInDirection(vec: $Vec3_): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canFloat(): boolean;
        shouldRecomputePath(pos: $BlockPos_): boolean;
        setCanFloat(canSwim: boolean): void;
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level);
        get done(): boolean;
        get targetPos(): $BlockPos;
        get inProgress(): boolean;
        get tempMobPos(): $Vec3;
        get stuck(): boolean;
        set maxVisitedNodesMultiplier(value: number);
    }
    export class $WaterBoundPathNavigation extends $PathNavigation {
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        allowBreaching: boolean;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level);
    }
    export class $WallClimberNavigation extends $GroundPathNavigation {
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level);
    }
    export class $FlyingPathNavigation extends $PathNavigation {
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        setCanOpenDoors(canOpenDoors: boolean): void;
        setCanPassDoors(canOpenDoors: boolean): void;
        mob: $Mob;
        lastStuckCheck: number;
        level: $Level;
        lastTimeoutCheck: number;
        timeoutLimit: number;
        lastStuckCheckPos: $Vec3;
        maxDistanceToWaypoint: number;
        nodeEvaluator: $NodeEvaluator;
        timeoutTimer: number;
        hasDelayedRecomputation: boolean;
        speedModifier: number;
        path: $Path;
        timeoutCachedNode: $Vec3i;
        timeLastRecompute: number;
        constructor(mob: $Mob, level: $Level);
    }
}
