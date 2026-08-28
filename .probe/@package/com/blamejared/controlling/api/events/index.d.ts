import { $IKeyEntry } from "@package/com/blamejared/controlling/api/entries";
import { $Event } from "@package/net/neoforged/bus/api";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/blamejared/controlling/api/events" {
    export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent {
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        getMouseY(): number;
        getMouseX(): number;
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get entry(): $IKeyEntry;
        get mouseY(): number;
        get mouseX(): number;
        get buttonId(): number;
    }
    export class $KeyEntryRenderEvent extends $Event implements $IKeyEntryRenderEvent {
        getEntry(): $IKeyEntry;
        getX(): number;
        getRowWidth(): number;
        getRowLeft(): number;
        isHovered(): boolean;
        getGuiGraphics(): $GuiGraphics;
        getY(): number;
        getSlotIndex(): number;
        getPartialTicks(): number;
        getMouseY(): number;
        getMouseX(): number;
        constructor(arg0: $IKeyEntry, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number);
        get entry(): $IKeyEntry;
        get x(): number;
        get rowWidth(): number;
        get rowLeft(): number;
        get hovered(): boolean;
        get guiGraphics(): $GuiGraphics;
        get y(): number;
        get slotIndex(): number;
        get partialTicks(): number;
        get mouseY(): number;
        get mouseX(): number;
    }
    export class $KeyEntryMouseClickedEvent extends $Event implements $IKeyEntryMouseClickedEvent {
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        getMouseY(): number;
        getMouseX(): number;
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get entry(): $IKeyEntry;
        get mouseY(): number;
        get mouseX(): number;
        get buttonId(): number;
    }
    export class $IKeyEntryListenersEvent {
    }
    export interface $IKeyEntryListenersEvent {
        getEntry(): $IKeyEntry;
        getListeners(): $List<$GuiEventListener>;
        get entry(): $IKeyEntry;
        get listeners(): $List<$GuiEventListener>;
    }
    export class $KeyEntryListenersEvent extends $Event implements $IKeyEntryListenersEvent {
        getEntry(): $IKeyEntry;
        getListeners(): $List<$GuiEventListener>;
        constructor(arg0: $IKeyEntry);
        get entry(): $IKeyEntry;
        get listeners(): $List<$GuiEventListener>;
    }
    export class $IKeyEntryRenderEvent {
    }
    export interface $IKeyEntryRenderEvent {
        getEntry(): $IKeyEntry;
        getX(): number;
        getRowWidth(): number;
        getRowLeft(): number;
        isHovered(): boolean;
        getGuiGraphics(): $GuiGraphics;
        getY(): number;
        getSlotIndex(): number;
        getPartialTicks(): number;
        getMouseY(): number;
        getMouseX(): number;
        get entry(): $IKeyEntry;
        get x(): number;
        get rowWidth(): number;
        get rowLeft(): number;
        get hovered(): boolean;
        get guiGraphics(): $GuiGraphics;
        get y(): number;
        get slotIndex(): number;
        get partialTicks(): number;
        get mouseY(): number;
        get mouseX(): number;
    }
    export class $IKeyEntryMouseReleasedEvent {
    }
    export interface $IKeyEntryMouseReleasedEvent {
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        getMouseY(): number;
        getMouseX(): number;
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        get entry(): $IKeyEntry;
        get mouseY(): number;
        get mouseX(): number;
        get buttonId(): number;
    }
    export class $IKeyEntryMouseClickedEvent {
    }
    export interface $IKeyEntryMouseClickedEvent {
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        getMouseY(): number;
        getMouseX(): number;
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        get entry(): $IKeyEntry;
        get mouseY(): number;
        get mouseX(): number;
        get buttonId(): number;
    }
}
