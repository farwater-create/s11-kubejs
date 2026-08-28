import { $PanoramaRenderer, $CubeMap } from "@package/net/minecraft/client/renderer";
import { $Layout } from "@package/net/minecraft/client/gui/layouts";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $CycleButton, $WidgetTooltipHolder, $Renderable, $AbstractScrollWidget } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $Options, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $DoubleConsumer_ } from "@package/java/util/function";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/telemetry" {
    export class $TelemetryInfoScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $TelemetryEventWidget extends $AbstractScrollWidget {
        updateLayout(): void;
        setOnScrolledListener(onScrolledListener: $DoubleConsumer_ | null): void;
        onOptInChanged(optIn: boolean): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number, font: $Font);
        set onScrolledListener(value: $DoubleConsumer_ | null);
    }
    export class $TelemetryEventWidget$ContentBuilder {
    }
    export class $TelemetryEventWidget$Content extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $TelemetryEventWidget$Content}.
     */
    export type $TelemetryEventWidget$Content_ = { container?: $Layout, narration?: $Component_,  } | [container?: $Layout, narration?: $Component_, ];
}
