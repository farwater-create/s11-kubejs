import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Event } from "@package/net/neoforged/bus/api";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Enum } from "@package/java/lang";

declare module "@package/com/github/L_Ender/lionfishapi/client/event" {
    export class $EventGetFluidRenderType$Result extends $Enum<$EventGetFluidRenderType$Result> {
        static values(): $EventGetFluidRenderType$Result[];
        static valueOf(arg0: string): $EventGetFluidRenderType$Result;
        static DENY: $EventGetFluidRenderType$Result;
        static ALLOW: $EventGetFluidRenderType$Result;
        static DEFAULT: $EventGetFluidRenderType$Result;
    }
    /**
     * Values that may be interpreted as {@link $EventGetFluidRenderType$Result}.
     */
    export type $EventGetFluidRenderType$Result_ = "allow" | "default" | "deny";
    export class $EventGetFluidRenderType extends $Event {
        getResult(): $EventGetFluidRenderType$Result;
        setResult(arg0: $EventGetFluidRenderType$Result_): void;
        getRenderType(): $RenderType;
        getFluidState(): $FluidState;
        setRenderType(arg0: $RenderType): void;
        constructor(arg0: $FluidState, arg1: $RenderType);
        get fluidState(): $FluidState;
    }
}
