import { $Direction$Axis_ } from "@package/net/minecraft/core";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
export * as sliding_door from "@package/com/copycatsplus/copycats/mixin/copycat/sliding_door";

declare module "@package/com/copycatsplus/copycats/mixin/copycat" {
    export class $VoxelShapeAccessor {
    }
    export interface $VoxelShapeAccessor {
        copycats$setShape(arg0: $DiscreteVoxelShape): void;
        copycats$getShape(): $DiscreteVoxelShape;
        copycats$callGetCoords(arg0: $Direction$Axis_): $DoubleList;
    }
}
