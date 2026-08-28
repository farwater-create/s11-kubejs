import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $TypeInfo_ } from "@package/dev/latvian/mods/rhino/type";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $Holder, $Registry, $Holder$Reference } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $Pattern } from "@package/java/util/regex";
import { $Object, $Record } from "@package/java/lang";

declare module "@package/dev/latvian/mods/kubejs/util/registrypredicate" {
    export class $RegistryRegExpPredicate<T> extends $Record implements $RegistryPredicate<T> {
        test(holder: $Holder_<T>): boolean;
        pattern(): $Pattern;
        getValues(registry: $Registry<T>): $List<T>;
        getHolders(registry: $Registry<T>): $List<$Holder$Reference<T>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(pattern: $Pattern);
    }
    /**
     * Values that may be interpreted as {@link $RegistryRegExpPredicate}.
     */
    export type $RegistryRegExpPredicate_<T> = { pattern?: $Pattern,  } | [pattern?: $Pattern, ];
    export class $RegistryTagIDPredicate<T> extends $Record implements $RegistryPredicate<T> {
        test(holder: $Holder_<T>): boolean;
        predicate(): $RegistryTagIDPredicate$TagKeyPredicate;
        getValues(registry: $Registry<T>): $List<T>;
        getHolders(registry: $Registry<T>): $List<$Holder$Reference<T>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(tag: $ResourceLocation_);
        constructor(predicate: $RegistryTagIDPredicate$TagKeyPredicate_);
    }
    /**
     * Values that may be interpreted as {@link $RegistryTagIDPredicate}.
     */
    export type $RegistryTagIDPredicate_<T> = { predicate?: $RegistryTagIDPredicate$TagKeyPredicate_,  } | [predicate?: $RegistryTagIDPredicate$TagKeyPredicate_, ];
    export class $RegistryPredicate<T> {
        static of(from: $Object, target: $TypeInfo_): $RegistryPredicate<never>;
    }
    export interface $RegistryPredicate<T> extends $Predicate<$Holder<T>> {
        getValues(registry: $Registry<$Holder_<T>>): $List<$Holder<T>>;
        getHolders(registry: $Registry<$Holder_<T>>): $List<$Holder$Reference<$Holder<T>>>;
    }
    /**
     * Values that may be interpreted as {@link $RegistryPredicate}.
     */
    export type $RegistryPredicate_<T> = (() => void);
    export class $RegistryTagIDPredicate$TagKeyPredicate extends $Record implements $Predicate<$TagKey<never>> {
        or(arg0: $Predicate_<$TagKey<never>>): $Predicate<$TagKey<never>>;
        negate(): $Predicate<$TagKey<never>>;
        and(arg0: $Predicate_<$TagKey<never>>): $Predicate<$TagKey<never>>;
    }
    /**
     * Values that may be interpreted as {@link $RegistryTagIDPredicate$TagKeyPredicate}.
     */
    export type $RegistryTagIDPredicate$TagKeyPredicate_ = { tag?: $ResourceLocation_,  } | [tag?: $ResourceLocation_, ];
    export class $RegistryTagKeyPredicate<T> extends $Record implements $RegistryPredicate<T> {
        test(holder: $Holder_<T>): boolean;
        key(): $TagKey<T>;
        getValues(registry: $Registry<T>): $List<T>;
        getHolders(registry: $Registry<T>): $List<$Holder$Reference<T>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(key: $TagKey_<T>);
    }
    /**
     * Values that may be interpreted as {@link $RegistryTagKeyPredicate}.
     */
    export type $RegistryTagKeyPredicate_<T> = { key?: $TagKey_<any>,  } | [key?: $TagKey_<any>, ];
    export class $EntireRegistryPredicate extends $Record implements $RegistryPredicate<$Object> {
        test(holder: $Holder_<$Object>): boolean;
        match(): boolean;
        getValues(registry: $Registry<$Object>): $List<$Object>;
        getHolders(registry: $Registry<$Object>): $List<$Holder$Reference<$Object>>;
        or(arg0: $Predicate_<$Object>): $Predicate<$Object>;
        negate(): $Predicate<$Object>;
        and(arg0: $Predicate_<$Object>): $Predicate<$Object>;
        static TRUE: $EntireRegistryPredicate;
        static FALSE: $EntireRegistryPredicate;
        constructor(match: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EntireRegistryPredicate}.
     */
    export type $EntireRegistryPredicate_ = { match?: boolean,  } | [match?: boolean, ];
    export class $RegistryHolderPredicate<T> extends $Record implements $RegistryPredicate<T> {
        value(): $Holder<T>;
        test(holder: $Holder_<T>): boolean;
        getValues(registry: $Registry<T>): $List<T>;
        getHolders(registry: $Registry<T>): $List<$Holder$Reference<T>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(value: $Holder_<T>);
    }
    /**
     * Values that may be interpreted as {@link $RegistryHolderPredicate}.
     */
    export type $RegistryHolderPredicate_<T> = { value?: $Holder_<any>,  } | [value?: $Holder_<any>, ];
    export class $RegistryNamespacePredicate<T> extends $Record implements $RegistryPredicate<T> {
        test(holder: $Holder_<T>): boolean;
        namespace(): string;
        getValues(registry: $Registry<T>): $List<T>;
        getHolders(registry: $Registry<T>): $List<$Holder$Reference<T>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(namespace: string);
    }
    /**
     * Values that may be interpreted as {@link $RegistryNamespacePredicate}.
     */
    export type $RegistryNamespacePredicate_<T> = { namespace?: string,  } | [namespace?: string, ];
    export class $RegistryIDPredicate<T> extends $Record implements $RegistryPredicate<T> {
        test(holder: $Holder_<T>): boolean;
        id(): $ResourceLocation;
        getValues(registry: $Registry<T>): $List<T>;
        getHolders(registry: $Registry<T>): $List<$Holder$Reference<T>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(id: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $RegistryIDPredicate}.
     */
    export type $RegistryIDPredicate_<T> = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
}
