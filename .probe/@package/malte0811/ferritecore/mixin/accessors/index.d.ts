import { $Direction$Axis } from "@package/net/minecraft/core";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $VoxelShape, $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BitSet } from "@package/java/util";

declare module "@package/malte0811/ferritecore/mixin/accessors" {
    export class $BitSetDVSAccess {
    }
    export interface $BitSetDVSAccess extends $DiscreteVSAccess {
        getZMin(): number;
        getXMax(): number;
        getXMin(): number;
        getStorage(): $BitSet;
        getYMax(): number;
        getZMax(): number;
        getYMin(): number;
        get ZMin(): number;
        get XMax(): number;
        get XMin(): number;
        get storage(): $BitSet;
        get YMax(): number;
        get ZMax(): number;
        get YMin(): number;
    }
    export class $SliceShapeAccess {
    }
    export interface $SliceShapeAccess extends $VoxelShapeAccess {
        getDelegate(): $VoxelShape;
        getAxis(): $Direction$Axis;
        get delegate(): $VoxelShape;
        get axis(): $Direction$Axis;
    }
    export class $DiscreteVSAccess {
    }
    export interface $DiscreteVSAccess {
        getYSize(): number;
        getZSize(): number;
        getXSize(): number;
        get YSize(): number;
        get ZSize(): number;
        get XSize(): number;
    }
    export class $ArrayVSAccess {
    }
    export interface $ArrayVSAccess extends $VoxelShapeAccess {
        setZPoints(arg0: $DoubleList): void;
        getYPoints(): $DoubleList;
        setYPoints(arg0: $DoubleList): void;
        getZPoints(): $DoubleList;
        setXPoints(arg0: $DoubleList): void;
        getXPoints(): $DoubleList;
    }
    export class $BakedQuadAccess {
    }
    export interface $BakedQuadAccess {
        setVertices(arg0: number[]): void;
        set vertices(value: number[]);
    }
    /**
     * Values that may be interpreted as {@link $BakedQuadAccess}.
     */
    export type $BakedQuadAccess_ = ((arg0: number[]) => void);
    export class $SubShapeAccess {
    }
    export interface $SubShapeAccess extends $DiscreteVSAccess {
        getParent(): $DiscreteVoxelShape;
        getStartZ(): number;
        getEndZ(): number;
        getStartX(): number;
        getStartY(): number;
        getEndX(): number;
        getEndY(): number;
        get parent(): $DiscreteVoxelShape;
        get startZ(): number;
        get endZ(): number;
        get startX(): number;
        get startY(): number;
        get endX(): number;
        get endY(): number;
    }
    export class $VoxelShapeAccess {
    }
    export interface $VoxelShapeAccess {
        getShape(): $DiscreteVoxelShape;
        getFaces(): $VoxelShape[];
        setFaces(arg0: $VoxelShape[]): void;
        setShape(arg0: $DiscreteVoxelShape): void;
    }
}
