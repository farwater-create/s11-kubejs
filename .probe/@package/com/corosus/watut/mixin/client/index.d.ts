
declare module "@package/com/corosus/watut/mixin/client" {
    export class $NativeImageAccessor {
    }
    export interface $NativeImageAccessor {
        pixels(): number;
    }
    /**
     * Values that may be interpreted as {@link $NativeImageAccessor}.
     */
    export type $NativeImageAccessor_ = (() => number);
}
