import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/com/yungnickyoung/minecraft/betteroceanmonuments/mixin/accessor" {
    export class $ProjectileAccessor {
    }
    export interface $ProjectileAccessor {
        getOwnerUUID(): $UUID;
        get ownerUUID(): $UUID;
    }
    /**
     * Values that may be interpreted as {@link $ProjectileAccessor}.
     */
    export type $ProjectileAccessor_ = (() => $UUID_);
}
