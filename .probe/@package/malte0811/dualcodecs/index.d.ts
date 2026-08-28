import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Function_ } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $Set } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/malte0811/dualcodecs" {
    export class $DualMapCodec<S extends $ByteBuf, T> extends $Record {
        map<T1>(arg0: $Function_<T, T1>, arg1: $Function_<T1, T>): $DualMapCodec<S, T1>;
        static unit<S extends $ByteBuf, T>(arg0: T): $DualMapCodec<S, T>;
        codec(): $DualCodec<S, T>;
        mapCodec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<S, T>;
        constructor(mapCodec: $MapCodec<T>, streamCodec: $StreamCodec<S, T>);
    }
    /**
     * Values that may be interpreted as {@link $DualMapCodec}.
     */
    export type $DualMapCodec_<S, T> = { mapCodec?: $MapCodec<any>, streamCodec?: $StreamCodec<$ByteBuf, any>,  } | [mapCodec?: $MapCodec<any>, streamCodec?: $StreamCodec<$ByteBuf, any>, ];
    export class $DualCodec<S extends $ByteBuf, T> extends $Record {
        dispatch<V>(arg0: $Function_<V, T>, arg1: $Function_<T, $DualMapCodec<S, V>>): $DualCodec<S, V>;
        map<T1>(arg0: $Function_<T, T1>, arg1: $Function_<T1, T>): $DualCodec<S, T1>;
        listOf(): $DualCodec<S, $List<T>>;
        fieldOf(arg0: string): $DualMapCodec<S, T>;
        codec(): $Codec<T>;
        optionalFieldOf(arg0: string, arg1: T): $DualMapCodec<S, T>;
        optionalFieldOf(arg0: string): $DualMapCodec<S, (T) | undefined>;
        fromNBT(arg0: $Tag_): T;
        setOf(): $DualCodec<S, $Set<T>>;
        toJSON(arg0: T): $JsonElement;
        toNBT(arg0: T): $Tag;
        streamCodec(): $StreamCodec<S, T>;
        castStream<S1 extends S>(): $DualCodec<S1, T>;
        fromJSON(arg0: $JsonElement_): T;
        constructor(codec: $Codec<T>, streamCodec: $StreamCodec<S, T>);
    }
    /**
     * Values that may be interpreted as {@link $DualCodec}.
     */
    export type $DualCodec_<S, T> = { streamCodec?: $StreamCodec<$ByteBuf, any>, codec?: $Codec<any>,  } | [streamCodec?: $StreamCodec<$ByteBuf, any>, codec?: $Codec<any>, ];
}
