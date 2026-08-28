import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $MassData } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $BoundingBox3d, $Pose3dc, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $PhysicsPipelineBody } from "@package/dev/ryanhcode/sable/api/physics";
import { $Vector3dc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/object/box" {
    export class $BoxHandle {
    }
    export interface $BoxHandle {
        remove(): void;
        wakeUp(): void;
        readPose(arg0: $Pose3d): void;
        getRuntimeId(): number;
        get runtimeId(): number;
    }
    export class $BoxPhysicsObject implements $ArbitraryPhysicsObject, $PhysicsPipelineBody {
        isActive(): boolean;
        getMassTracker(): $MassData;
        onUnloaded(arg0: $SubLevelHoldingChunkMap, arg1: $ChunkPos): void;
        onRemoved(): void;
        wakeUp(): void;
        getBoundingBox(arg0: $BoundingBox3d): void;
        getPose(): $Pose3dc;
        isRemoved(): boolean;
        getMass(): number;
        updatePose(): void;
        onAddition(arg0: $SubLevelPhysicsSystem): void;
        getRuntimeId(): number;
        getHalfExtents(): $Vector3dc;
        constructor(arg0: $Pose3dc, arg1: $Vector3dc, arg2: number);
        get active(): boolean;
        get massTracker(): $MassData;
        get pose(): $Pose3dc;
        get removed(): boolean;
        get mass(): number;
        get runtimeId(): number;
        get halfExtents(): $Vector3dc;
    }
}
