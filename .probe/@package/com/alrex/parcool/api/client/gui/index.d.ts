import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $DeltaTracker } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/alrex/parcool/api/client/gui" {
    export class $ParCoolHUDEvent$RenderEvent extends $ParCoolHUDEvent implements $ICancellableEvent {
        getDeltaTracker(): $DeltaTracker;
        getGuiGraphics(): $GuiGraphics;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $GuiGraphics, arg1: $DeltaTracker);
        get deltaTracker(): $DeltaTracker;
        get guiGraphics(): $GuiGraphics;
    }
    export class $ParCoolHUDEvent extends $Event {
        constructor();
    }
}
