import { $BlockPos, $BlockPos_, $Direction$Axis_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/createmod/catnip/math" {
    export class $Pointing extends $Enum<$Pointing> implements $StringRepresentable {
        static values(): $Pointing[];
        static valueOf(arg0: string): $Pointing;
        getCombinedDirection(arg0: $Direction_): $Direction;
        getSerializedName(): string;
        getXRotation(): number;
        getRemappedEnumConstantName(): string;
        static DOWN: $Pointing;
        static LEFT: $Pointing;
        static RIGHT: $Pointing;
        static UP: $Pointing;
        get serializedName(): string;
        get XRotation(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Pointing}.
     */
    export type $Pointing_ = "up" | "left" | "down" | "right";
    export class $VoxelShaper {
        get(arg0: $Direction$Axis_): $VoxelShape;
        get(arg0: $Direction_): $VoxelShape;
        withShape(arg0: $VoxelShape, arg1: $Direction_): $VoxelShaper;
        static forHorizontal(arg0: $VoxelShape, arg1: $Direction_): $VoxelShaper;
        withVerticalShapes(arg0: $VoxelShape): $VoxelShaper;
        static forHorizontalAxis(arg0: $VoxelShape, arg1: $Direction$Axis_): $VoxelShaper;
        static axisAsFace(arg0: $Direction$Axis_): $Direction;
        static forAxis(arg0: $VoxelShape, arg1: $Direction$Axis_): $VoxelShaper;
        static forDirectional(arg0: $VoxelShape, arg1: $Direction_): $VoxelShaper;
        constructor();
    }
    export class $BlockFace extends $Pair<$BlockPos, $Direction> {
        getConnectedPos(): $BlockPos;
        isEquivalent(arg0: $BlockFace): boolean;
        serializeNBT(): $CompoundTag;
        getOpposite(): $BlockFace;
        static fromNBT(arg0: $CompoundTag_): $BlockFace;
        getPos(): $BlockPos;
        getFace(): $Direction;
        getOppositeFace(): $Direction;
        static CODEC: $Codec<$BlockFace>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockFace>;
        constructor(arg0: $BlockPos_, arg1: $Direction_);
        get connectedPos(): $BlockPos;
        get opposite(): $BlockFace;
        get pos(): $BlockPos;
        get face(): $Direction;
        get oppositeFace(): $Direction;
    }
}
