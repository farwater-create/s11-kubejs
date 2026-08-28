import { $LerpedFloat } from "@package/net/createmod/catnip/animation";

declare module "@package/com/copycatsplus/copycats/mixin/copycat/sliding_door" {
    export class $SlidingDoorBlockEntityAccessor {
    }
    export interface $SlidingDoorBlockEntityAccessor {
        getAnimation(): $LerpedFloat;
        get animation(): $LerpedFloat;
    }
    /**
     * Values that may be interpreted as {@link $SlidingDoorBlockEntityAccessor}.
     */
    export type $SlidingDoorBlockEntityAccessor_ = (() => $LerpedFloat);
}
