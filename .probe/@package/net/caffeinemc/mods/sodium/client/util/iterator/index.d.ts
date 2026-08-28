import { $Consumer_ } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Iterator } from "@package/java/util";

declare module "@package/net/caffeinemc/mods/sodium/client/util/iterator" {
    export class $ReversibleObjectArrayIterator<T> implements $Iterator<T> {
        hasNext(): boolean;
        next(): T;
        remove(): void;
        forEachRemaining(arg0: $Consumer_<T>): void;
        constructor(arg0: $ObjectArrayList<T>, arg1: boolean);
        constructor(arg0: T[], arg1: number, arg2: number, arg3: boolean);
    }
    export class $ByteIterator {
    }
    export interface $ByteIterator {
        hasNext(): boolean;
        nextByteAsInt(): number;
    }
}
