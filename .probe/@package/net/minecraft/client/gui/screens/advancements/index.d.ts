import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $AdvancementHolder_, $DisplayInfo, $AdvancementProgress, $AdvancementType_, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $ClientAdvancements, $ClientAdvancements$Listener } from "@package/net/minecraft/client/multiplayer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/screens/advancements" {
    export class $AdvancementTabType extends $Enum<$AdvancementTabType> {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType}.
     */
    export type $AdvancementTabType_ = "above" | "below" | "left" | "right";
    export class $AdvancementTabType$Sprites extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType$Sprites}.
     */
    export type $AdvancementTabType$Sprites_ = { last?: $ResourceLocation_, first?: $ResourceLocation_, middle?: $ResourceLocation_,  } | [last?: $ResourceLocation_, first?: $ResourceLocation_, middle?: $ResourceLocation_, ];
    export class $AdvancementsScreen extends $Screen implements $ClientAdvancements$Listener {
        renderWindow(guiGraphics: $GuiGraphics, offsetX: number, offsetY: number): void;
        onUpdateAdvancementProgress(advancement: $AdvancementNode, advancementProgress: $AdvancementProgress): void;
        onSelectedTabChanged(advancement: $AdvancementHolder_ | null): void;
        onAdvancementsCleared(): void;
        onRemoveAdvancementTask(advancement: $AdvancementNode): void;
        onAddAdvancementTask(advancement: $AdvancementNode): void;
        onRemoveAdvancementRoot(advancement: $AdvancementNode): void;
        onAddAdvancementRoot(advancement: $AdvancementNode): void;
        getAdvancementWidget(advancement: $AdvancementNode): $AdvancementWidget;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static WINDOW_INSIDE_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static WINDOW_INSIDE_WIDTH: number;
        static BACKGROUND_TILE_WIDTH: number;
        static PANORAMA: $PanoramaRenderer;
        static BACKGROUND_TILE_HEIGHT: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static WINDOW_HEIGHT: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static WINDOW_WIDTH: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        static BACKGROUND_TILE_COUNT_X: number;
        static BACKGROUND_TILE_COUNT_Y: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        font: $Font;
        constructor(advancements: $ClientAdvancements);
        constructor(advancements: $ClientAdvancements, lastScreen: $Screen | null);
    }
    export class $AdvancementWidgetType extends $Enum<$AdvancementWidgetType> {
        static values(): $AdvancementWidgetType[];
        static valueOf(arg0: string): $AdvancementWidgetType;
        boxSprite(): $ResourceLocation;
        frameSprite(type: $AdvancementType_): $ResourceLocation;
        static OBTAINED: $AdvancementWidgetType;
        static UNOBTAINED: $AdvancementWidgetType;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementWidgetType}.
     */
    export type $AdvancementWidgetType_ = "obtained" | "unobtained";
    export class $AdvancementTab {
        getType(): $AdvancementTabType;
        static create(minecraft: $Minecraft, screen: $AdvancementsScreen, index: number, rootNode: $AdvancementNode): $AdvancementTab;
        getIndex(): number;
        isMouseOver(offsetX: number, offsetY: number, mouseX: number, arg3: number): boolean;
        drawTooltips(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, width: number, height: number): void;
        addAdvancement(node: $AdvancementNode): void;
        drawContents(guiGraphics: $GuiGraphics, x: number, y: number): void;
        getPage(): number;
        getWidget(advancement: $AdvancementHolder_): $AdvancementWidget;
        getScreen(): $AdvancementsScreen;
        drawTab(guiGraphics: $GuiGraphics, offsetX: number, offsetY: number, isSelected: boolean): void;
        drawIcon(guiGraphics: $GuiGraphics, x: number, y: number): void;
        getRootNode(): $AdvancementNode;
        scroll(dragX: number, arg1: number): void;
        getTitle(): $Component;
        getDisplay(): $DisplayInfo;
        constructor(minecraft: $Minecraft, screen: $AdvancementsScreen, type: $AdvancementTabType_, index: number, rootNode: $AdvancementNode, display: $DisplayInfo);
        constructor(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: $AdvancementTabType_, arg3: number, arg4: number, arg5: $AdvancementNode, arg6: $DisplayInfo);
        get type(): $AdvancementTabType;
        get index(): number;
        get page(): number;
        get screen(): $AdvancementsScreen;
        get rootNode(): $AdvancementNode;
        get title(): $Component;
        get display(): $DisplayInfo;
    }
    export class $AdvancementWidget {
        getWidth(): number;
        getX(): number;
        isMouseOver(x: number, y: number, mouseX: number, mouseY: number): boolean;
        addChild(advancementWidget: $AdvancementWidget): void;
        getY(): number;
        draw(guiGraphics: $GuiGraphics, x: number, y: number): void;
        drawHover(guiGraphics: $GuiGraphics, x: number, y: number, fade: number, width: number, height: number): void;
        setProgress(progress: $AdvancementProgress): void;
        drawConnectivity(guiGraphics: $GuiGraphics, x: number, y: number, dropShadow: boolean): void;
        attachToParent(): void;
        constructor(tab: $AdvancementTab, minecraft: $Minecraft, advancementNode: $AdvancementNode, display: $DisplayInfo);
        get width(): number;
        get x(): number;
        get y(): number;
        set progress(value: $AdvancementProgress);
    }
}
