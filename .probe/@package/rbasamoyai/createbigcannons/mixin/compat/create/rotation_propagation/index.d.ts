import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/rbasamoyai/createbigcannons/mixin/compat/create/rotation_propagation" {
    export class $KineticBlockAccessor {
    }
    export interface $KineticBlockAccessor {
        callAreStatesKineticallyEquivalent(arg0: $BlockState_, arg1: $BlockState_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $KineticBlockAccessor}.
     */
    export type $KineticBlockAccessor_ = ((arg0: $BlockState, arg1: $BlockState) => boolean);
}
