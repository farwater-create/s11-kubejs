
declare module "@package/net/caffeinemc/mods/lithium/common/util/deduplication" {
    export class $LithiumInterner<T> {
        getCanonical<S extends T>(arg0: S): S;
        deleteCanonical(arg0: T): void;
        constructor();
    }
}
