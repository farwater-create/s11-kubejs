import { $AzAnimationPoint } from "@package/mod/azure/azurelib/common/animation/controller/keyframe";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Double2DoubleFunction } from "@package/it/unimi/dsi/fastutil/doubles";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mod/azure/azurelib/common/animation/easing" {
    export class $AzEasingType {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $AzEasingType>;
    }
    export interface $AzEasingType {
        name(): string;
        apply(arg0: $AzAnimationPoint): number;
        apply(arg0: $AzAnimationPoint, arg1: number, arg2: number): number;
        buildTransformer(arg0: number): $Double2DoubleFunction;
        usesKeyframeData(): boolean;
    }
}
