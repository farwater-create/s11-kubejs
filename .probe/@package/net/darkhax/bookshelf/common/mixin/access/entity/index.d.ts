import { $HoverEvent } from "@package/net/minecraft/network/chat";

declare module "@package/net/darkhax/bookshelf/common/mixin/access/entity" {
    export class $AccessorEntity {
    }
    export interface $AccessorEntity {
        bookshelf$createHoverEvent(): $HoverEvent;
    }
    /**
     * Values that may be interpreted as {@link $AccessorEntity}.
     */
    export type $AccessorEntity_ = (() => $HoverEvent);
}
