import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Comparable, $Object } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/block/state/predicate" {
    export class $BlockPredicate implements $Predicate<$BlockState> {
        test(state: $BlockState_ | null): boolean;
        static forBlock(block: $Block): $BlockPredicate;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(block: $Block);
    }
    export class $BlockStatePredicate implements $Predicate<$BlockState> {
        test(state: $BlockState_ | null): boolean;
        where<V extends $Comparable<V>>(property: $Property<V>, valuePredicate: $Predicate_<$Object>): $BlockStatePredicate;
        static forBlock(block: $Block): $BlockStatePredicate;
        applies<T extends $Comparable<T>>(state: $BlockState_, property: $Property<T>, valuePredicate: $Predicate_<$Object>): boolean;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        static ANY: $Predicate<$BlockState>;
    }
}
