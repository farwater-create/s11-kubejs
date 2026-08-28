import { $Codec } from "@package/com/mojang/serialization";
import { $OptionInstance$ValueSet } from "@package/net/minecraft/client";

declare module "@package/com/ishland/c2me/client/uncapvd/mixin" {
    export class $ISimpleOption<T> {
    }
    export interface $ISimpleOption<T> {
        setCodec(arg0: $Codec<T>): void;
        setCallbacks(arg0: $OptionInstance$ValueSet<T>): void;
        set codec(value: $Codec<T>);
        set callbacks(value: $OptionInstance$ValueSet<T>);
    }
}
