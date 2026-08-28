import { $BlockAndTintGetter, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $SectionPos } from "@package/net/minecraft/core";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";
import { $Box, $Box$CoordinateConsumer_, $MutableBox } from "@package/com/simibubi/create/foundation/utility/flywheel/box";

declare module "@package/com/simibubi/create/foundation/utility/flywheel/light" {
    export class $LightVolume implements $Box {
        initialize(): void;
        "delete"(): void;
        isInvalid(): boolean;
        move(arg0: $Box): void;
        getMinX(): number;
        getMinY(): number;
        onLightUpdate(arg0: $LightLayer_, arg1: $SectionPos): void;
        getMaxZ(): number;
        getMaxX(): number;
        getMinZ(): number;
        getPackedLight(arg0: number, arg1: number, arg2: number): number;
        getMaxY(): number;
        getVolume(): $Box;
        copyLight(arg0: $Box): void;
        copyBlock(arg0: $Box): void;
        copySky(arg0: $Box): void;
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
        constructor(arg0: $BlockAndTintGetter, arg1: $Box);
        get invalid(): boolean;
        get minX(): number;
        get minY(): number;
        get maxZ(): number;
        get maxX(): number;
        get minZ(): number;
        get maxY(): number;
        get empty(): boolean;
    }
}
