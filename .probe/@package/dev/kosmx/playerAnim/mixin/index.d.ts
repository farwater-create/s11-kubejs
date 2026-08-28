import { $ModelPart } from "@package/net/minecraft/client/model/geom";
export * as firstPerson from "@package/dev/kosmx/playerAnim/mixin/firstPerson";

declare module "@package/dev/kosmx/playerAnim/mixin" {
    export class $PlayerModelAccessor {
    }
    export interface $PlayerModelAccessor {
        getCloak(): $ModelPart;
        get cloak(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $PlayerModelAccessor}.
     */
    export type $PlayerModelAccessor_ = (() => $ModelPart);
}
