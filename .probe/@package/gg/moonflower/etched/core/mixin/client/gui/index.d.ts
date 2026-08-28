import { $Component } from "@package/net/minecraft/network/chat";

declare module "@package/gg/moonflower/etched/core/mixin/client/gui" {
    export class $GuiAccessor {
    }
    export interface $GuiAccessor {
        getOverlayMessageString(): $Component;
        setOverlayMessageTime(arg0: number): void;
        get overlayMessageString(): $Component;
        set overlayMessageTime(value: number);
    }
}
