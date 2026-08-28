import { $Supplier } from "@package/java/util/function";
import { $Number } from "@package/java/lang";

declare module "@package/dev/kosmx/playerAnim/core/util" {
    export class $Vector3<N extends $Number> {
        getX(): N;
        getY(): N;
        getZ(): N;
        constructor(x: N, y: N, z: N);
        get x(): N;
        get y(): N;
        get z(): N;
    }
    export class $SetableSupplier<T> implements $Supplier<T> {
        get(): T;
        set(object: T): void;
        constructor();
    }
    export class $Vec3d extends $Vector3<number> {
        scale(scalar: number): $Vec3d;
        add(other: $Vec3d): $Vec3d;
        subtract(rhs: $Vec3d): $Vec3d;
        dotProduct(other: $Vec3d): number;
        distanceTo(vec3d: $Vec3d): number;
        crossProduct(other: $Vec3d): $Vec3d;
        squaredDistanceTo(vec3d: $Vec3d): number;
        constructor(x: number, y: number, z: number);
    }
    export class $Vec3f extends $Vector3<number> {
        scale(scalar: number): $Vec3f;
        add(other: $Vec3f): $Vec3f;
        subtract(rhs: $Vec3f): $Vec3f;
        dotProduct(other: $Vec3f): number;
        distanceTo(vec3d: $Vec3d): number;
        crossProduct(other: $Vec3f): $Vec3f;
        squaredDistanceTo(vec3d: $Vec3d): number;
        static ZERO: $Vec3f;
        constructor(x: number, y: number, z: number);
    }
    export class $Pair<L, R> {
        getRight(): R;
        getLeft(): L;
        constructor(left: L, right: R);
        get right(): R;
        get left(): L;
    }
}
