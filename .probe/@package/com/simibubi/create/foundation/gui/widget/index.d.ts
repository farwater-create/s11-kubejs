import { $TickableGuiEventListener } from "@package/net/createmod/catnip/gui";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $WidgetTooltipHolder, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $List_ } from "@package/java/util";
import { $Consumer_, $Function_, $Function } from "@package/java/util/function";
import { $AbstractSimiWidget } from "@package/net/createmod/catnip/gui/widget";
import { $ScrollValueBehaviour$StepContext } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $ScreenElement_ } from "@package/net/createmod/catnip/gui/element";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener, $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/com/simibubi/create/foundation/gui/widget" {
    export class $Label extends $AbstractSimiWidget {
        withSuffix(arg0: string): $Label;
        setTextAndTrim(arg0: $Component_, arg1: boolean, arg2: number): void;
        withShadow(): $Label;
        colored(arg0: number): $Label;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        tooltip: $WidgetTooltipHolder;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        suffix: string;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static COLOR_DISABLED: $Couple<$Color>;
        text: $Component;
        static COLOR_FAIL: $Couple<$Color>;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_);
    }
    export class $ScrollInput extends $AbstractSimiWidget {
        format(arg0: $Function_<number, $Component>): $ScrollInput;
        getState(): number;
        setState(arg0: number): $ScrollInput;
        inverted(): $ScrollInput;
        withShiftStep(arg0: number): $ScrollInput;
        onChanged(): void;
        calling(arg0: $Consumer_<number>): $ScrollInput;
        titled(arg0: $MutableComponent_): $ScrollInput;
        removeCallback(): $ScrollInput;
        withRange(arg0: number, arg1: number): $ScrollInput;
        addHint(arg0: $MutableComponent_): $ScrollInput;
        writingTo(arg0: $Label): $ScrollInput;
        withStepFunction(arg0: $Function_<$ScrollValueBehaviour$StepContext, number>): $ScrollInput;
        standardStep(): $Function<$ScrollValueBehaviour$StepContext, number>;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        tooltip: $WidgetTooltipHolder;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $CompositeWidget extends $AbstractContainerEventHandler implements $NarratableEntry, $Renderable, $TickableGuiEventListener {
        remove<T extends $GuiEventListener>(arg0: T): boolean;
        clear(): void;
        add<T extends $GuiEventListener>(arg0: T): T;
        addRenderableOnly<T extends $Renderable>(arg0: T): T;
        updateNarration(arg0: $NarrationElementOutput): void;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        tick(): void;
        removeRenderableOnly<T extends $Renderable>(arg0: T): boolean;
        isActive(): boolean;
        constructor();
        get active(): boolean;
    }
    export class $Indicator$State extends $Enum<$Indicator$State> {
        static values(): $Indicator$State[];
        static valueOf(arg0: string): $Indicator$State;
        static RED: $Indicator$State;
        static YELLOW: $Indicator$State;
        static GREEN: $Indicator$State;
        static OFF: $Indicator$State;
        static ON: $Indicator$State;
    }
    /**
     * Values that may be interpreted as {@link $Indicator$State}.
     */
    export type $Indicator$State_ = "off" | "on" | "red" | "yellow" | "green";
    export class $ScreenOverlay extends $CompositeWidget {
        zOffset: number;
        constructor(arg0: number);
    }
    export class $Indicator extends $AbstractSimiWidget {
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        tooltip: $WidgetTooltipHolder;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static COLOR_DISABLED: $Couple<$Color>;
        state: $Indicator$State;
        static COLOR_FAIL: $Couple<$Color>;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_);
    }
    export class $TooltipArea extends $AbstractSimiWidget {
        withTooltip(arg0: $List_<$Component_>): $TooltipArea;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        tooltip: $WidgetTooltipHolder;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $SelectionScrollInput extends $ScrollInput {
        forOptions(arg0: $List_<$Component_>): $ScrollInput;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        tooltip: $WidgetTooltipHolder;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $IconButton extends $AbstractSimiWidget {
        doRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        setToolTip(arg0: $Component_): void;
        setIcon(arg0: $ScreenElement_): void;
        static COLOR_SUCCESS: $Couple<$Color>;
        green: boolean;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        tooltip: $WidgetTooltipHolder;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $ScreenElement_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ScreenElement_);
        set toolTip(value: $Component_);
        set icon(value: $ScreenElement_);
    }
}
