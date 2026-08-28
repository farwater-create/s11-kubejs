import { $Function_ } from "@package/java/util/function";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $AzAnimationProperties } from "@package/mod/azure/azurelib/common/animation/property";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec, $StreamCodec$CodecOperation_ } from "@package/net/minecraft/network/codec";

declare module "@package/mod/azure/azurelib/common/animation/property/codec" {
    export class $AzAnimationPropertiesCodec implements $StreamCodec<$FriendlyByteBuf, $AzAnimationProperties> {
        decode(arg0: $FriendlyByteBuf): $AzAnimationProperties;
        encode(arg0: $FriendlyByteBuf, arg1: $AzAnimationProperties): void;
        dispatch<U>(arg0: $Function_<U, $AzAnimationProperties>, arg1: $Function_<$AzAnimationProperties, $StreamCodec<$FriendlyByteBuf, U>>): $StreamCodec<$FriendlyByteBuf, U>;
        cast<S extends B>(): $StreamCodec<S, $AzAnimationProperties>;
        apply<O>(arg0: $StreamCodec$CodecOperation_<$FriendlyByteBuf, $AzAnimationProperties, O>): $StreamCodec<$FriendlyByteBuf, O>;
        map<O>(arg0: $Function_<$AzAnimationProperties, O>, arg1: $Function_<O, $AzAnimationProperties>): $StreamCodec<$FriendlyByteBuf, O>;
        mapStream<O extends $ByteBuf>(arg0: $Function_<O, $FriendlyByteBuf>): $StreamCodec<O, $AzAnimationProperties>;
        constructor();
    }
}
