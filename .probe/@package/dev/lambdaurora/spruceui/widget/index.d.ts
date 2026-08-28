import { $SprucePositioned, $Position } from "@package/dev/lambdaurora/spruceui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/dev/lambdaurora/spruceui/widget" {
    export class $SpruceWidget {
    }
    export interface $SpruceWidget extends $SprucePositioned, $SpruceElement, $NarratableEntry, $Renderable {
        isActive(): boolean;
        getWidth(): number;
        getHeight(): number;
        getPosition(): $Position;
        getX(): number;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        setDragging(arg0: boolean): void;
        setFocused(arg0: boolean): void;
        isDragging(): boolean;
        isFocused(): boolean;
        setActive(arg0: boolean): void;
        getY(): number;
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        isMouseHovered(): boolean;
        isFocusedOrHovered(): boolean;
        getEndX(): number;
        getEndY(): number;
        get width(): number;
        get height(): number;
        get position(): $Position;
        get x(): number;
        get y(): number;
        get mouseHovered(): boolean;
        get focusedOrHovered(): boolean;
        get endX(): number;
        get endY(): number;
    }
}
