import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $Predicate_, $Supplier_, $Function_, $BiFunction_, $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $ListTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Iterable, $Enum } from "@package/java/lang";
import { $Spliterator, $Comparator, $Iterator } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/createmod/catnip/data" {
    export class $Pair<F, S> {
        static of<F, S>(arg0: F, arg1: S): $Pair<F, S>;
        copy(): $Pair<F, S>;
        getFirst(): F;
        swap(): $Pair<S, F>;
        getSecond(): S;
        setFirst(arg0: F): void;
        setSecond(arg0: S): void;
        static codec<F, S>(arg0: $Codec<F>, arg1: $Codec<S>): $Codec<$Pair<F, S>>;
        static streamCodec<B, F, S>(arg0: $StreamCodec<B, F>, arg1: $StreamCodec<B, S>): $StreamCodec<B, $Pair<F, S>>;
    }
    export class $TriState extends $Enum<$TriState> {
        isDefault(): boolean;
        static values(): $TriState[];
        static valueOf(arg0: string): $TriState;
        getValue(): boolean;
        isTrue(): boolean;
        isFalse(): boolean;
        static TRUE: $TriState;
        static FALSE: $TriState;
        static DEFAULT: $TriState;
        get default(): boolean;
        get value(): boolean;
        get true(): boolean;
        get false(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TriState}.
     */
    export type $TriState_ = "true" | "default" | "false";
    export class $Couple<T> extends $Pair<T, T> implements $Iterable<T> {
        get(arg0: boolean): T;
        replace(arg0: $Function_<T, T>): void;
        iterator(): $Iterator<T>;
        map<S>(arg0: $Function_<T, S>): $Couple<S>;
        stream(): $Stream<T>;
        set(arg0: boolean, arg1: T): void;
        forEach(arg0: $Consumer_<T>): void;
        copy(): $Couple<T>;
        static create<T>(arg0: T, arg1: T): $Couple<T>;
        static create<T>(arg0: $Supplier_<T>): $Couple<T>;
        swap(): $Couple<T>;
        static createWithContext<T>(arg0: $Function_<boolean, T>): $Couple<T>;
        either(arg0: $Predicate_<T>): boolean;
        static codec<T>(arg0: $Codec<T>): $Codec<$Couple<T>>;
        mapNotNullWithParam<S, R>(arg0: $BiFunction_<T, R, S>, arg1: R): $Couple<S>;
        both(arg0: $Predicate_<T>): boolean;
        mapNotNull<S>(arg0: $Function_<T, S>): $Couple<S>;
        mapWithContext<S>(arg0: $BiFunction_<T, boolean, S>): $Couple<S>;
        replaceWithContext(arg0: $BiFunction_<T, boolean, T>): void;
        replaceWithParams<S>(arg0: $BiFunction_<T, S, T>, arg1: $Couple<S>): void;
        forEachWithParams<S>(arg0: $BiConsumer_<T, S>, arg1: $Couple<S>): void;
        mapWithParams<S, R>(arg0: $BiFunction_<T, R, S>, arg1: $Couple<R>): $Couple<S>;
        forEachWithContext(arg0: $BiConsumer_<T, boolean>): void;
        serializeEach(arg0: $Function_<T, $CompoundTag>): $ListTag;
        static deserializeEach<S>(arg0: $ListTag_, arg1: $Function_<$CompoundTag, S>): $Couple<S>;
        static streamCodec<B, T>(arg0: $StreamCodec<B, T>): $StreamCodec<B, $Couple<T>>;
        spliterator(): $Spliterator<T>;
        [Symbol.iterator](): Iterator<T>
    }
    export class $IntAttached<V> extends $Pair<number, V> {
        getValue(): V;
        increment(): void;
        static read<T>(arg0: $CompoundTag_, arg1: $Function_<$CompoundTag, T>): $IntAttached<T>;
        static "with"<V>(arg0: number, arg1: V): $IntAttached<V>;
        static comparator(): $Comparator<$IntAttached<never>>;
        decrement(): void;
        isZero(): boolean;
        static codec<T>(arg0: $Codec<T>): $Codec<$IntAttached<T>>;
        exceeds(arg0: number): boolean;
        serializeNBT(arg0: $Function_<V, $CompoundTag>): $CompoundTag;
        isOrBelowZero(): boolean;
        static streamCodec<B extends $ByteBuf, T>(arg0: $StreamCodec<B, T>): $StreamCodec<B, $IntAttached<T>>;
        static withZero<V>(arg0: V): $IntAttached<V>;
        get value(): V;
        get zero(): boolean;
        get orBelowZero(): boolean;
    }
    export class $WorldAttached<T> {
        get(arg0: $LevelAccessor): T;
        put(arg0: $LevelAccessor, arg1: T): void;
        replace(arg0: $LevelAccessor, arg1: $Consumer_<T>): T;
        replace(arg0: $LevelAccessor): T;
        empty(arg0: $BiConsumer_<$LevelAccessor, T>): void;
        empty(arg0: $Consumer_<T>): void;
        static invalidateWorld(arg0: $LevelAccessor): void;
        constructor(arg0: $Function_<$LevelAccessor, T>);
    }
}
