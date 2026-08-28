import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Record } from "@package/java/lang";
import { $OptionalInt } from "@package/java/util";
import { $Vector3d } from "@package/org/joml";

declare module "@package/dev/lambdaurora/lambdynlights/api/behavior" {
    export class $BeaconLightBehavior extends $Record implements $DynamicLightBehavior {
        x(): number;
        z(): number;
        y(): $OptionalInt;
        level(): $Level;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        luminance(): number;
        hasChanged(): boolean;
        lightAtPos(pos: $BlockPos_, falloffRatio: number): number;
        isRemoved(): boolean;
        constructor(x: number, z: number, luminance: number, level: $Level);
        constructor(x: number, y: $OptionalInt, z: number, luminance: number, level: $Level);
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BeaconLightBehavior}.
     */
    export type $BeaconLightBehavior_ = { level?: $Level, x?: number, y?: $OptionalInt, luminance?: number, z?: number,  } | [level?: $Level, x?: number, y?: $OptionalInt, luminance?: number, z?: number, ];
    export class $DynamicLightBehavior {
    }
    export interface $DynamicLightBehavior {
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        isRemoved(): boolean;
        hasChanged(): boolean;
        lightAtPos(arg0: $BlockPos_, arg1: number): number;
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    export class $LineLightBehavior implements $DynamicLightBehavior {
        setEndPoint(x: number, y: number, z: number): void;
        setEndPoint(endPoint: $Vector3d): void;
        setStartPoint(startPoint: $Vector3d): void;
        setStartPoint(x: number, y: number, z: number): void;
        getStartPoint(): $Vector3d;
        getEndPoint(): $Vector3d;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        getLuminance(): number;
        setLuminance(luminance: number): void;
        hasChanged(): boolean;
        lightAtPos(pos: $BlockPos_, falloffRatio: number): number;
        isRemoved(): boolean;
        constructor(startPoint: $Vector3d, endPoint: $Vector3d, luminance: number);
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    export class $DynamicLightBehavior$BoundingBox extends $Record {
        startX(): number;
        startY(): number;
        startZ(): number;
        endZ(): number;
        endY(): number;
        endX(): number;
        constructor(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number);
    }
    /**
     * Values that may be interpreted as {@link $DynamicLightBehavior$BoundingBox}.
     */
    export type $DynamicLightBehavior$BoundingBox_ = { startY?: number, startZ?: number, endX?: number, endY?: number, endZ?: number, startX?: number,  } | [startY?: number, startZ?: number, endX?: number, endY?: number, endZ?: number, startX?: number, ];
}
