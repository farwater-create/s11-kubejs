import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BoundedBitVolume3i } from "@package/dev/ryanhcode/sable/util";
import { $Set } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/ryanhcode/sable/sublevel/water_occlusion" {
    export class $WaterOcclusionContainer<T extends $WaterOcclusionRegion> {
        static getContainer(arg0: $Level): $WaterOcclusionContainer<never>;
        removeRegion(arg0: $WaterOcclusionRegion): void;
        isOccluded(arg0: $Vec3_): boolean;
        addRegion(arg0: $BoundedBitVolume3i): $WaterOcclusionRegion;
        markDirty(arg0: $BlockPos_): void;
        getOccludingRegion(arg0: $Vec3_): T;
        getRegions(): $Set<T>;
        constructor(arg0: $Level);
        get regions(): $Set<T>;
    }
    export class $WaterOcclusionRegion {
        isDirty(): boolean;
        getVolume(): $BoundedBitVolume3i;
        markDirty(): void;
        constructor(arg0: $BoundedBitVolume3i);
        get dirty(): boolean;
        get volume(): $BoundedBitVolume3i;
    }
}
