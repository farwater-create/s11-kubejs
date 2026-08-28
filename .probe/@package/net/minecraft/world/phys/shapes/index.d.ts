import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $VoxelShapeAccessor as $VoxelShapeAccessor$1 } from "@package/com/copycatsplus/copycats/mixin/copycat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShapeAccessor } from "@package/team/creative/creativecore/mixin";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FastVoxelShapeIterable } from "@package/dev/ryanhcode/sable/mixinterface/voxel_shape_iteration";
import { $Iterator, $List, $BitSet } from "@package/java/util";
import { $Predicate_ } from "@package/java/util/function";
import { $BitSetDiscreteVoxelShapeAccessor as $BitSetDiscreteVoxelShapeAccessor$1, $ArrayVoxelShapeInvoker } from "@package/net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/collisions/empty_space";
import { $Direction$Axis_, $BlockPos_, $Direction_, $AxisCycle_, $Direction$Axis, $Direction } from "@package/net/minecraft/core";
import { $OffsetVoxelShapeCache } from "@package/net/caffeinemc/mods/lithium/common/shapes";
import { $SubShapeAccess, $DiscreteVSAccess, $VoxelShapeAccess, $BitSetDVSAccess, $ArrayVSAccess, $SliceShapeAccess } from "@package/malte0811/ferritecore/mixin/accessors";
import { $AbstractDoubleList, $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Iterable_ } from "@package/java/lang";
import { $DiscreteVoxelShapeAccessor, $BitSetDiscreteVoxelShapeAccessor } from "@package/dev/ryanhcode/sable/mixin/voxel_shape_iteration";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/phys/shapes" {
    export class $ArrayVoxelShape extends $VoxelShape implements $ArrayVoxelShapeInvoker, $VoxelShapeAccess, $ArrayVSAccess {
        static init$lithium_$md$707fe4$0(arg0: $DiscreteVoxelShape, arg1: $DoubleList, arg2: $DoubleList, arg3: $DoubleList): $ArrayVoxelShape;
        setZPoints(arg0: $DoubleList): void;
        getYPoints(): $DoubleList;
        setYPoints(arg0: $DoubleList): void;
        getZPoints(): $DoubleList;
        setXPoints(arg0: $DoubleList): void;
        getXPoints(): $DoubleList;
        shape: $DiscreteVoxelShape;
        constructor(shape: $DiscreteVoxelShape, xs: number[], ys: number[], zs: number[]);
        constructor(shape: $DiscreteVoxelShape, xs: $DoubleList, ys: $DoubleList, zs: $DoubleList);
    }
    export class $BitSetDiscreteVoxelShape extends $DiscreteVoxelShape implements $BitSetDiscreteVoxelShapeAccessor$1, $DiscreteVoxelShapeAccessor, $BitSetDiscreteVoxelShapeAccessor, $DiscreteVSAccess, $BitSetDVSAccess {
        static join(mainShape: $DiscreteVoxelShape, secondaryShape: $DiscreteVoxelShape, mergerX: $IndexMerger, mergerY: $IndexMerger, mergerZ: $IndexMerger, operator: $BooleanOp_): $BitSetDiscreteVoxelShape;
        getIndex(x: number, y: number, z: number): number;
        isInterior(x: number, y: number, z: number): boolean;
        static forAllBoxes(shape: $DiscreteVoxelShape, consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        static withFilledBounds(x: number, y: number, z: number, xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): $BitSetDiscreteVoxelShape;
        getZMin(): number;
        getXMax(): number;
        getXMin(): number;
        getStorage(): $BitSet;
        getYMax(): number;
        getZMax(): number;
        getYMin(): number;
        invokeIsZStripFull(zMin: number, zMax: number, x: number, y: number): boolean;
        invokeClearZStrip(zMin: number, zMax: number, x: number, y: number): void;
        invokeIsXZRectangleFull(xMin: number, xMax: number, zMin: number, zMax: number, y: number): boolean;
        zSize: number;
        ySize: number;
        xSize: number;
        constructor(xSize: number, ySize: number, zSize: number);
        constructor(shape: $DiscreteVoxelShape);
        get ZMin(): number;
        get XMax(): number;
        get XMin(): number;
        get storage(): $BitSet;
        get YMax(): number;
        get ZMax(): number;
        get YMin(): number;
    }
    export class $SubShape extends $DiscreteVoxelShape implements $DiscreteVSAccess, $SubShapeAccess {
        getParent(): $DiscreteVoxelShape;
        getStartZ(): number;
        getEndZ(): number;
        getStartX(): number;
        getStartY(): number;
        getEndX(): number;
        getEndY(): number;
        zSize: number;
        ySize: number;
        xSize: number;
        constructor(parent: $DiscreteVoxelShape, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number);
        get parent(): $DiscreteVoxelShape;
        get startZ(): number;
        get endZ(): number;
        get startX(): number;
        get startY(): number;
        get endX(): number;
        get endY(): number;
    }
    export class $EntityCollisionContext implements $CollisionContext {
        getEntity(): $Entity;
        isDescending(): boolean;
        getHeldItem(): $ItemStack;
        canStandOnFluid(fluid1: $FluidState, fluid2: $FluidState): boolean;
        handler$cnj000$lithium$canWalkOnFluid(arg0: $FluidState, arg1: $FluidState, arg2: $CallbackInfoReturnable<any>): void;
        isAbove(shape: $VoxelShape, pos: $BlockPos_, canAscend: boolean): boolean;
        isHoldingItem(item: $Item): boolean;
        handler$cnj000$lithium$isHolding(arg0: $Item, arg1: $CallbackInfoReturnable<any>): void;
        static EMPTY: $CollisionContext;
        constructor(descending: boolean, entityBottom: number, arg2: $ItemStack_, heldItem: $Predicate_<$FluidState>, canStandOnFluid: $Entity | null);
        /**
         * @deprecated
         */
        constructor(entity: $Entity);
        get entity(): $Entity;
        get descending(): boolean;
        get heldItem(): $ItemStack;
    }
    export class $Shapes {
        static join(shape1: $VoxelShape, shape2: $VoxelShape, _function: $BooleanOp_): $VoxelShape;
        static empty(): $VoxelShape;
        static create(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): $VoxelShape;
        static create(aabb: $AABB_): $VoxelShape;
        static box(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): $VoxelShape;
        static collide(movementAxis: $Direction$Axis_, collisionBox: $AABB_, possibleHits: $Iterable_<$VoxelShape>, desiredOffset: number): number;
        static block(): $VoxelShape;
        static or(shape1: $VoxelShape, ...others: $VoxelShape[]): $VoxelShape;
        static or(shape1: $VoxelShape, shape2: $VoxelShape): $VoxelShape;
        static faceShapeOccludes(voxelShape1: $VoxelShape, voxelShape2: $VoxelShape): boolean;
        static createIndexMerger(size: number, list1: $DoubleList, list2: $DoubleList, excludeUpper: boolean, excludeLower: boolean): $IndexMerger;
        static blockOccudes(shape: $VoxelShape, adjacentShape: $VoxelShape, side: $Direction_): boolean;
        static mergedFaceOccludes(shape: $VoxelShape, adjacentShape: $VoxelShape, side: $Direction_): boolean;
        static joinIsNotEmpty(shape1: $VoxelShape, shape2: $VoxelShape, resultOperator: $BooleanOp_): boolean;
        static joinUnoptimized(shape1: $VoxelShape, shape2: $VoxelShape, _function: $BooleanOp_): $VoxelShape;
        static getFaceShape(voxelShape: $VoxelShape, direction: $Direction_): $VoxelShape;
        static findBits(minBits: number, arg1: number): number;
        static lcm(aa: number, bb: number): number;
        static INFINITY: $VoxelShape;
        static BIG_EPSILON: number;
        static EPSILON: number;
        constructor();
    }
    export class $CollisionContext {
        static of(entity: $Entity): $CollisionContext;
        static empty(): $CollisionContext;
    }
    export interface $CollisionContext {
        isDescending(): boolean;
        canStandOnFluid(fluid1: $FluidState, fluid2: $FluidState): boolean;
        isAbove(shape: $VoxelShape, pos: $BlockPos_, canAscend: boolean): boolean;
        isHoldingItem(item: $Item): boolean;
        get descending(): boolean;
    }
    export class $VoxelShape implements $OffsetVoxelShapeCache, $VoxelShapeAccessor$1, $FastVoxelShapeIterable, $VoxelShapeAccessor, $VoxelShapeAccess {
        get(axis: $Direction$Axis_, index: number): number;
        min(axis: $Direction$Axis_): number;
        min(axis: $Direction$Axis_, primaryPosition: number, arg2: number): number;
        max(axis: $Direction$Axis_): number;
        max(axis: $Direction$Axis_, primaryPosition: number, arg2: number): number;
        isEmpty(): boolean;
        bounds(): $AABB;
        optimize(): $VoxelShape;
        collide(movementAxis: $Direction$Axis_, collisionBox: $AABB_, desiredOffset: number): number;
        move(xOffset: number, arg1: number, yOffset: number): $VoxelShape;
        singleEncompassing(): $VoxelShape;
        forAllBoxes(action: $Shapes$DoubleLineConsumer_): void;
        forAllEdges(action: $Shapes$DoubleLineConsumer_): void;
        lithium$setShape(arg0: number, arg1: $Direction_, arg2: $VoxelShape): void;
        sable$allBoxes(): $Iterator<any>;
        lithium$getOffsetSimplifiedShape(arg0: number, arg1: $Direction_): $VoxelShape;
        clip(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_): $BlockHitResult;
        getCoords(axis: $Direction$Axis_): $DoubleList;
        toAabbs(): $List<$AABB>;
        getFaceShape(side: $Direction_): $VoxelShape;
        closestPointTo(point: $Vec3_): ($Vec3) | undefined;
        findIndex(axis: $Direction$Axis_, position: number): number;
        collideX(movementAxis: $AxisCycle_, collisionBox: $AABB_, desiredOffset: number): number;
        getShape(): $DiscreteVoxelShape;
        copycats$setShape(shape: $DiscreteVoxelShape): void;
        copycats$getShape(): $DiscreteVoxelShape;
        copycats$callGetCoords(axis: $Direction$Axis_): $DoubleList;
        getFaces(): $VoxelShape[];
        setFaces(arg0: $VoxelShape[]): void;
        setShape(shape: $DiscreteVoxelShape): void;
        shape: $DiscreteVoxelShape;
        constructor(shape: $DiscreteVoxelShape);
        get empty(): boolean;
    }
    export class $CubePointRange extends $AbstractDoubleList {
        handler$cnl000$lithium$initScale(arg0: number, arg1: $CallbackInfo): void;
        constructor(parts: number);
    }
    export class $DiscreteVoxelShape$IntLineConsumer {
    }
    export interface $DiscreteVoxelShape$IntLineConsumer {
        consume(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntLineConsumer}.
     */
    export type $DiscreteVoxelShape$IntLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
    export class $BooleanOp {
        static SAME: $BooleanOp;
        static OR: $BooleanOp;
        static TRUE: $BooleanOp;
        static NOT_AND: $BooleanOp;
        static ONLY_SECOND: $BooleanOp;
        static FIRST: $BooleanOp;
        static CAUSED_BY: $BooleanOp;
        static NOT_SAME: $BooleanOp;
        static NOT_OR: $BooleanOp;
        static AND: $BooleanOp;
        static FALSE: $BooleanOp;
        static SECOND: $BooleanOp;
        static CAUSES: $BooleanOp;
        static ONLY_FIRST: $BooleanOp;
        static NOT_FIRST: $BooleanOp;
        static NOT_SECOND: $BooleanOp;
    }
    export interface $BooleanOp {
        apply(primaryBool: boolean, secondaryBool: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BooleanOp}.
     */
    export type $BooleanOp_ = ((arg0: boolean, arg1: boolean) => boolean);
    export class $IndirectMerger implements $IndexMerger {
        size(): number;
        getList(): $DoubleList;
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        constructor(lower: $DoubleList, upper: $DoubleList, excludeUpper: boolean, excludeLower: boolean);
        get list(): $DoubleList;
    }
    export class $DiscreteVoxelShape$IntFaceConsumer {
    }
    export interface $DiscreteVoxelShape$IntFaceConsumer {
        consume(direction: $Direction_, x: number, y: number, z: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntFaceConsumer}.
     */
    export type $DiscreteVoxelShape$IntFaceConsumer_ = ((arg0: $Direction, arg1: number, arg2: number, arg3: number) => void);
    export class $CubeVoxelShape extends $VoxelShape {
        shape: $DiscreteVoxelShape;
        constructor(shape: $DiscreteVoxelShape);
    }
    export class $NonOverlappingMerger extends $AbstractDoubleList implements $IndexMerger {
        getList(): $DoubleList;
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        constructor(lower: $DoubleList, upper: $DoubleList, swap: boolean);
        get list(): $DoubleList;
    }
    export class $DiscreteVoxelShape implements $DiscreteVoxelShapeAccessor, $DiscreteVSAccess {
        getSize(axis: $Direction$Axis_): number;
        isEmpty(): boolean;
        fill(xSize: number, ySize: number, zSize: number): void;
        isFull(x: number, y: number, z: number): boolean;
        isFull(rotation: $AxisCycle_, x: number, y: number, z: number): boolean;
        forAllFaces(faceConsumer: $DiscreteVoxelShape$IntFaceConsumer_): void;
        forAllBoxes(consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        forAllEdges(consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        isFullWide(rotation: $AxisCycle_, x: number, y: number, z: number): boolean;
        isFullWide(x: number, y: number, z: number): boolean;
        lastFull(axis: $Direction$Axis_): number;
        lastFull(axis: $Direction$Axis_, y: number, z: number): number;
        firstFull(axis: $Direction$Axis_): number;
        firstFull(axis: $Direction$Axis_, y: number, z: number): number;
        getYSize(): number;
        getZSize(): number;
        getXSize(): number;
        zSize: number;
        ySize: number;
        xSize: number;
        constructor(xSize: number, ySize: number, zSize: number);
        get empty(): boolean;
        get YSize(): number;
        get ZSize(): number;
        get XSize(): number;
    }
    export class $OffsetDoubleList extends $AbstractDoubleList {
        constructor(delegate: $DoubleList, offset: number);
    }
    export class $IndexMerger$IndexConsumer {
    }
    export interface $IndexMerger$IndexConsumer {
        merge(firstValue: number, secondValue: number, thirdValue: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IndexMerger$IndexConsumer}.
     */
    export type $IndexMerger$IndexConsumer_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $IdenticalMerger implements $IndexMerger {
        size(): number;
        getList(): $DoubleList;
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        constructor(coords: $DoubleList);
        get list(): $DoubleList;
    }
    export class $DiscreteCubeMerger implements $IndexMerger {
        size(): number;
        getList(): $DoubleList;
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        constructor(aa: number, bb: number);
        get list(): $DoubleList;
    }
    export class $IndexMerger {
    }
    export interface $IndexMerger {
        size(): number;
        getList(): $DoubleList;
        forMergedIndexes(consumer: $IndexMerger$IndexConsumer_): boolean;
        get list(): $DoubleList;
    }
    export class $SliceShape extends $VoxelShape implements $SliceShapeAccess, $VoxelShapeAccess {
        getDelegate(): $VoxelShape;
        getAxis(): $Direction$Axis;
        shape: $DiscreteVoxelShape;
        constructor(delegate: $VoxelShape, axis: $Direction$Axis_, index: number);
        get delegate(): $VoxelShape;
        get axis(): $Direction$Axis;
    }
    export class $Shapes$DoubleLineConsumer {
    }
    export interface $Shapes$DoubleLineConsumer {
        consume(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Shapes$DoubleLineConsumer}.
     */
    export type $Shapes$DoubleLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
}
