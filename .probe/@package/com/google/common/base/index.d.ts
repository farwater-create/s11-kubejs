import { $Duration } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $Predicate as $Predicate$1, $Predicate_, $Supplier as $Supplier$1, $Function as $Function$1 } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $TimeUnit_ } from "@package/java/util/concurrent";
import { $Pattern } from "@package/java/util/regex";
import { $CharSequence, $Iterable_, $Object, $Iterable } from "@package/java/lang";
import { $List, $Map, $Set } from "@package/java/util";

declare module "@package/com/google/common/base" {
    export class $Optional<T> implements $Serializable {
        get(): T;
        static of<T>(reference: T): $Optional<T>;
        transform<V>(arg0: $Function<T, V>): $Optional<V>;
        isPresent(): boolean;
        or(defaultValue: T): T;
        or(secondChoice: $Optional<T>): $Optional<T>;
        or(supplier: $Supplier_<T>): T;
        asSet(): $Set<T>;
        toJavaUtil(): (T) | undefined;
        static toJavaUtil<T>(googleOptional: $Optional<T>): (T) | undefined;
        orNull(): T;
        static absent<T>(): $Optional<T>;
        static fromJavaUtil<T>(javaUtilOptional: (T) | undefined): $Optional<T>;
        static presentInstances<T>(optionals: $Iterable_<$Optional<T>>): $Iterable<T>;
        static fromNullable<T>(nullableReference: T): $Optional<T>;
        get present(): boolean;
    }
    export class $Supplier<T> {
    }
    export interface $Supplier<T> extends $Supplier$1<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $Supplier}.
     */
    export type $Supplier_<T> = (() => T);
    export class $Splitter$MapSplitter {
        split(sequence: $CharSequence): $Map<string, string>;
    }
    export class $Predicate<T> {
    }
    export interface $Predicate<T> extends $Predicate$1<T> {
        equals(object: $Object): boolean;
        test(input: T): boolean;
        apply(input: T): boolean;
    }
    export class $Splitter {
        split(sequence: $CharSequence): $Iterable<string>;
        limit(maxItems: number): $Splitter;
        static on(separatorPattern: $Pattern): $Splitter;
        static on(separator: string): $Splitter;
        static on(separator: string): $Splitter;
        static on(separatorMatcher: $CharMatcher): $Splitter;
        withKeyValueSeparator(separator: string): $Splitter$MapSplitter;
        withKeyValueSeparator(keyValueSplitter: $Splitter): $Splitter$MapSplitter;
        withKeyValueSeparator(separator: string): $Splitter$MapSplitter;
        splitToStream(sequence: $CharSequence): $Stream<string>;
        static fixedLength(length: number): $Splitter;
        trimResults(trimmer: $CharMatcher): $Splitter;
        trimResults(): $Splitter;
        omitEmptyStrings(): $Splitter;
        splitToList(sequence: $CharSequence): $List<string>;
        static onPattern(separatorPattern: string): $Splitter;
    }
    export class $Ticker {
        read(): number;
        static systemTicker(): $Ticker;
    }
    export class $Function<F, T> {
    }
    export interface $Function<F, T> extends $Function$1<F, T> {
        equals(object: $Object): boolean;
        apply(input: F): F;
    }
    export class $Stopwatch {
        reset(): $Stopwatch;
        start(): $Stopwatch;
        stop(): $Stopwatch;
        elapsed(desiredUnit: $TimeUnit_): number;
        elapsed(): $Duration;
        static createUnstarted(ticker: $Ticker): $Stopwatch;
        static createUnstarted(): $Stopwatch;
        isRunning(): boolean;
        static createStarted(ticker: $Ticker): $Stopwatch;
        static createStarted(): $Stopwatch;
        get running(): boolean;
    }
    export class $CharMatcher implements $Predicate<string> {
        static noneOf(sequence: $CharSequence): $CharMatcher;
        matches(c: string): boolean;
        /**
         * @deprecated
         */
        apply(character: string): boolean;
        static ascii(): $CharMatcher;
        static is(match: string): $CharMatcher;
        /**
         * @deprecated
         */
        static digit(): $CharMatcher;
        static none(): $CharMatcher;
        or(other: $CharMatcher): $CharMatcher;
        negate(): $CharMatcher;
        and(other: $CharMatcher): $CharMatcher;
        static any(): $CharMatcher;
        static inRange(startInclusive: string, endInclusive: string): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLowerCase(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaUpperCase(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaDigit(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLetter(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLetterOrDigit(): $CharMatcher;
        trimAndCollapseFrom(sequence: $CharSequence, replacement: string): string;
        removeFrom(sequence: $CharSequence): string;
        retainFrom(sequence: $CharSequence): string;
        static whitespace(): $CharMatcher;
        matchesNoneOf(sequence: $CharSequence): boolean;
        trimLeadingFrom(sequence: $CharSequence): string;
        matchesAllOf(sequence: $CharSequence): boolean;
        /**
         * @deprecated
         */
        static singleWidth(): $CharMatcher;
        matchesAnyOf(sequence: $CharSequence): boolean;
        replaceFrom(sequence: $CharSequence, replacement: $CharSequence): string;
        replaceFrom(sequence: $CharSequence, replacement: string): string;
        precomputed(): $CharMatcher;
        trimTrailingFrom(sequence: $CharSequence): string;
        static breakingWhitespace(): $CharMatcher;
        collapseFrom(sequence: $CharSequence, replacement: string): string;
        static forPredicate(predicate: $Predicate<string>): $CharMatcher;
        lastIndexIn(sequence: $CharSequence): number;
        static javaIsoControl(): $CharMatcher;
        static anyOf(sequence: $CharSequence): $CharMatcher;
        trimFrom(sequence: $CharSequence): string;
        static isNot(match: string): $CharMatcher;
        indexIn(sequence: $CharSequence): number;
        indexIn(sequence: $CharSequence, start: number): number;
        /**
         * @deprecated
         */
        static invisible(): $CharMatcher;
        countIn(sequence: $CharSequence): number;
        test(input: string): boolean;
        or(arg0: $Predicate_<string>): $Predicate$1<string>;
        and(arg0: $Predicate_<string>): $Predicate$1<string>;
    }
}
