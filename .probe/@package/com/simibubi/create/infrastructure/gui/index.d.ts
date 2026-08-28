import { $PanoramaRenderer, $CubeMap } from "@package/net/minecraft/client/renderer";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Button$CreateNarration, $WidgetTooltipHolder, $WidgetSprites, $Button, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $ScreenEvent$Init$Post } from "@package/net/neoforged/neoforge/client/event";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/com/simibubi/create/infrastructure/gui" {
    export class $OpenCreateMenuButton$MenuRows {
        static MAIN_MENU: $OpenCreateMenuButton$MenuRows;
        static INGAME_MENU: $OpenCreateMenuButton$MenuRows;
        constructor(arg0: $List_<$OpenCreateMenuButton$SingleMenuRow_>);
    }
    export class $OpenCreateMenuButton$OpenConfigButtonHandler {
        static onGuiInit(arg0: $ScreenEvent$Init$Post): void;
        constructor();
    }
    export class $CreateMainMenuScreen$PlatformIconButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
    }
    export class $OpenCreateMenuButton$SingleMenuRow extends $Record {
        rightTextKey(): string;
        leftTextKey(): string;
        constructor(arg0: string);
        constructor(leftTextKey: string, rightTextKey: string);
    }
    /**
     * Values that may be interpreted as {@link $OpenCreateMenuButton$SingleMenuRow}.
     */
    export type $OpenCreateMenuButton$SingleMenuRow_ = { leftTextKey?: string, rightTextKey?: string,  } | [leftTextKey?: string, rightTextKey?: string, ];
    export class $CreateMainMenuScreen extends $AbstractSimiScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static ISSUE_TRACKER_LINK: string;
        static SUPPORT_LINK: string;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static PANORAMA_OVERLAY_TEXTURES: $ResourceLocation;
        static PANORAMA_RESOURCES: $CubeMap;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static CURSEFORGE_LINK: string;
        static MODRINTH_LINK: string;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen);
    }
    export class $OpenCreateMenuButton extends $Button {
        static click(arg0: $Button): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number);
    }
}
