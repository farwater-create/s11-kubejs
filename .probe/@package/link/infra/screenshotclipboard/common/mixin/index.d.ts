
declare module "@package/link/infra/screenshotclipboard/common/mixin" {
    export class $NativeImagePointerAccessor {
    }
    export interface $NativeImagePointerAccessor {
        getPointer(): number;
        get pointer(): number;
    }
    /**
     * Values that may be interpreted as {@link $NativeImagePointerAccessor}.
     */
    export type $NativeImagePointerAccessor_ = (() => number);
}
