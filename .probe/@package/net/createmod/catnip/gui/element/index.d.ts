import { $ILightingSettings_ } from "@package/net/createmod/catnip/gui";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/createmod/catnip/gui/element" {
    export class $FadableScreenElement {
    }
    export interface $FadableScreenElement extends $ScreenElement {
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $FadableScreenElement}.
     */
    export type $FadableScreenElement_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $DelegatedStencilElement extends $AbstractRenderElement implements $StencilElement {
        withStencilRenderer<T extends $DelegatedStencilElement>(arg0: $FadableScreenElement_): T;
        renderElement(arg0: $GuiGraphics): void;
        withElementRenderer<T extends $DelegatedStencilElement>(arg0: $FadableScreenElement_): T;
        renderStencil(arg0: $GuiGraphics): void;
        transform(arg0: $GuiGraphics): void;
        cleanUp(arg0: $GuiGraphics): void;
        prepareElement(arg0: $GuiGraphics): void;
        prepareStencil(arg0: $GuiGraphics): void;
        static EMPTY: $RenderElement;
        constructor();
        constructor(arg0: $FadableScreenElement_, arg1: $FadableScreenElement_);
    }
    export class $StencilElement {
    }
    export interface $StencilElement extends $RenderElement {
        transform(arg0: $GuiGraphics): void;
        cleanUp(arg0: $GuiGraphics): void;
        render(arg0: $GuiGraphics): void;
        renderElement(arg0: $GuiGraphics): void;
        prepareElement(arg0: $GuiGraphics): void;
        prepareStencil(arg0: $GuiGraphics): void;
        renderStencil(arg0: $GuiGraphics): void;
    }
    export class $ScreenElement {
    }
    export interface $ScreenElement {
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ScreenElement}.
     */
    export type $ScreenElement_ = ((arg0: $GuiGraphics, arg1: number, arg2: number) => void);
    export class $GuiGameElement$GuiRenderBuilder extends $AbstractRenderElement {
        scale(arg0: number): $GuiGameElement$GuiRenderBuilder;
        color(arg0: number): $GuiGameElement$GuiRenderBuilder;
        rotate(arg0: number, arg1: number, arg2: number): $GuiGameElement$GuiRenderBuilder;
        atLocal(arg0: number, arg1: number, arg2: number): $GuiGameElement$GuiRenderBuilder;
        rotateBlock(arg0: number, arg1: number, arg2: number): $GuiGameElement$GuiRenderBuilder;
        lighting(arg0: $ILightingSettings_): $GuiGameElement$GuiRenderBuilder;
        withRotationOffset(arg0: $Vec3_): $GuiGameElement$GuiRenderBuilder;
        static EMPTY: $RenderElement;
        constructor();
    }
    export class $AbstractRenderElement implements $RenderElement {
        at<T extends $RenderElement>(arg0: number, arg1: number, arg2: number): T;
        at<T extends $RenderElement>(arg0: number, arg1: number): T;
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        getY(): number;
        withBounds<T extends $RenderElement>(arg0: number, arg1: number): T;
        getZ(): number;
        withAlpha<T extends $RenderElement>(arg0: number): T;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        static EMPTY: $RenderElement;
        constructor();
        get width(): number;
        get height(): number;
        get x(): number;
        get y(): number;
        get z(): number;
    }
    export class $RenderElement {
        static of(arg0: $ScreenElement_): $RenderElement;
    }
    export interface $RenderElement extends $FadableScreenElement {
        at<T extends $RenderElement>(arg0: number, arg1: number, arg2: number): T;
        at<T extends $RenderElement>(arg0: number, arg1: number): T;
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        render(arg0: $GuiGraphics): void;
        getY(): number;
        withBounds<T extends $RenderElement>(arg0: number, arg1: number): T;
        getZ(): number;
        withAlpha<T extends $RenderElement>(arg0: number): T;
        get width(): number;
        get height(): number;
        get x(): number;
        get y(): number;
        get z(): number;
    }
}
