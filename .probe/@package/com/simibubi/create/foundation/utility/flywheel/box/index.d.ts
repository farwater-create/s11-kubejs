import { $BlockPos_, $Vec3i, $Direction$Axis_, $SectionPos } from "@package/net/minecraft/core";
import { $Collection_ } from "@package/java/util";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/utility/flywheel/box" {
    export class $Box$CoordinateConsumer {
    }
    export interface $Box$CoordinateConsumer {
        accept(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Box$CoordinateConsumer}.
     */
    export type $Box$CoordinateConsumer_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $MutableBox implements $Box {
        static from(arg0: $AABB_): $MutableBox;
        static from(arg0: $Vec3i): $MutableBox;
        static from(arg0: $Vec3i, arg1: $Vec3i): $MutableBox;
        static from(arg0: $SectionPos): $MutableBox;
        grow(arg0: number, arg1: number, arg2: number): void;
        grow(arg0: number): void;
        getMinX(): number;
        getMinY(): number;
        getMaxZ(): number;
        getMaxX(): number;
        getMinZ(): number;
        getMaxY(): number;
        assign(arg0: $Box): void;
        assign(arg0: $Vec3i, arg1: $Vec3i): void;
        assign(arg0: $AABB_): void;
        setMinX(arg0: number): void;
        setMaxZ(arg0: number): void;
        setMaxX(arg0: number): void;
        setMinZ(arg0: number): $MutableBox;
        setMaxY(arg0: number): void;
        setMinY(arg0: number): void;
        translate(arg0: $Vec3i): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        setMax(arg0: number, arg1: number, arg2: number): void;
        setMax(arg0: $Vec3i): void;
        setMin(arg0: number, arg1: number, arg2: number): void;
        setMin(arg0: $Vec3i): void;
        mirrorAbout(arg0: $Direction$Axis_): void;
        unionAssign(arg0: $Box): void;
        unionAssign(arg0: $AABB_): void;
        intersectAssign(arg0: $Box): void;
        nextPowerOf2(): void;
        static containingAll(arg0: $Collection_<$BlockPos_>): $Box;
        nextPowerOf2Centered(): void;
        fixMinMax(): void;
        static ofRadius(arg0: number): $MutableBox;
        isEmpty(): boolean;
        contains(arg0: number, arg1: number, arg2: number): boolean;
        contains(arg0: $Box): boolean;
        copy(): $MutableBox;
        union(arg0: $Box): $MutableBox;
        intersect(arg0: $Box): $MutableBox;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        intersects(arg0: $Box): boolean;
        sizeY(): number;
        sizeZ(): number;
        sizeX(): number;
        sameAs(arg0: $Box, arg1: number): boolean;
        sameAs(arg0: $AABB_): boolean;
        sameAs(arg0: $Box): boolean;
        toAABB(): $AABB;
        volume(): number;
        forEachContained(arg0: $Box$CoordinateConsumer_): void;
        hasPowerOf2Sides(): boolean;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get empty(): boolean;
    }
    export class $Box {
    }
    export interface $Box {
        isEmpty(): boolean;
        contains(arg0: number, arg1: number, arg2: number): boolean;
        contains(arg0: $Box): boolean;
        copy(): $MutableBox;
        union(arg0: $Box): $MutableBox;
        getMinX(): number;
        getMinY(): number;
        intersect(arg0: $Box): $MutableBox;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        intersects(arg0: $Box): boolean;
        sizeY(): number;
        sizeZ(): number;
        sizeX(): number;
        getMaxZ(): number;
        getMaxX(): number;
        getMinZ(): number;
        getMaxY(): number;
        sameAs(arg0: $Box, arg1: number): boolean;
        sameAs(arg0: $AABB_): boolean;
        sameAs(arg0: $Box): boolean;
        toAABB(): $AABB;
        volume(): number;
        forEachContained(arg0: $Box$CoordinateConsumer_): void;
        hasPowerOf2Sides(): boolean;
        get empty(): boolean;
        get minX(): number;
        get minY(): number;
        get maxZ(): number;
        get maxX(): number;
        get minZ(): number;
        get maxY(): number;
    }
}
