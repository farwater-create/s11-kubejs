import { $MapDimension } from "@package/xaero/map/world";
import { $MultiTextureRenderTypeRenderer } from "@package/xaero/map/graphics/renderer/multitexture";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $XaeroFullscreenMapAccessor } from "@package/com/simibubi/create/foundation/mixin/compat/xaeros";
import { $CycleButton, $Renderable, $Button } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus, $KeyMapping } from "@package/net/minecraft/client";
import { $RightClickOption } from "@package/xaero/map/gui/dropdown/rightclick";
import { $ArrayList, $List } from "@package/java/util";
import { $ScreenBase as $ScreenBase$1, $GuiSettings } from "@package/xaero/lib/client/gui";
import { $RNSMapOverlayRenderer$Context } from "@package/com/bmaster/createrns/compat/map";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $MapProcessor } from "@package/xaero/map";
import { $RNSXaeroFullscreenMapAccessor } from "@package/com/bmaster/createrns/mixin/xaero";
import { $ConfigOptionScreenEntry } from "@package/xaero/lib/client/config/option/ui";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BufferBuilder, $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $PNGExportResult } from "@package/xaero/map/file/export";
import { $Font } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $Matrix4f } from "@package/org/joml";
export * as message from "@package/xaero/map/gui/message";
export * as dropdown from "@package/xaero/map/gui/dropdown";

declare module "@package/xaero/map/gui" {
    /**
     * @deprecated
     */
    export class $ScreenBase extends $ScreenBase$1 {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
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
        escape: $Screen;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $MapTileSelection {
        setEnd(arg0: number, arg1: number): void;
        getStartZ(): number;
        getEndZ(): number;
        getRight(): number;
        getLeft(): number;
        getBottom(): number;
        getTop(): number;
        getStartX(): number;
        getEndX(): number;
        constructor(arg0: number, arg1: number);
        get startZ(): number;
        get endZ(): number;
        get right(): number;
        get left(): number;
        get bottom(): number;
        get top(): number;
        get startX(): number;
        get endX(): number;
    }
    export class $IRightClickableElement {
    }
    export interface $IRightClickableElement {
        isRightClickValid(): boolean;
        getRightClickOptions(): $ArrayList<$RightClickOption>;
        getRightClickTitleBackgroundColor(): number;
        get rightClickValid(): boolean;
        get rightClickOptions(): $ArrayList<$RightClickOption>;
        get rightClickTitleBackgroundColor(): number;
    }
    export class $GuiMap extends $ScreenBase implements $IRightClickableElement, $XaeroFullscreenMapAccessor, $RNSMapOverlayRenderer$Context, $RNSXaeroFullscreenMapAccessor {
        onClaimsButton(arg0: $Button): void;
        onRadarButton(arg0: $Button): void;
        getRadarButton(): $Button;
        isRightClickValid(): boolean;
        drawArrowOnMap(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawFarArrowOnMap(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawDotOnMap(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number): void;
        mapClicked(arg0: number, arg1: number, arg2: number): void;
        getTrackedPlayerKeyBinding(): $KeyMapping;
        getRightClickOptions(): $ArrayList<$RightClickOption>;
        static buildTexturedModalSubRectWithLighting(arg0: $Matrix4f, arg1: $BufferBuilder, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getMapProcessor(): $MapProcessor;
        enableCaveModeOptions(): void;
        getRightClickTitleBackgroundColor(): number;
        static buildTexturedModalRectWithLighting(arg0: $Matrix4f, arg1: $BufferBuilder, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getDimensionOnInit(): $MapDimension;
        closeRightClick(): void;
        getUserScale(): number;
        onCaveModeStartSet(): void;
        drawObjectOnMap(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        onRightClickClosed(): void;
        addButton<T extends $GuiEventListener>(arg0: T): T;
        static renderTexturedModalRect(arg0: $Matrix4f, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        onRenderWaypointsButton(arg0: $Button): void;
        static renderTexturedModalRectWithLighting3(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: $MultiTextureRenderTypeRenderer): void;
        static renderTexturedModalSubRectWithLighting(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean, arg11: $MultiTextureRenderTypeRenderer): void;
        create_rns$getMapProcessor(): $MapProcessor;
        create_rns$getCameraZ(): number;
        create_rns$getCameraX(): number;
        create_rns$getScreenScale(): number;
        create$getMapProcessor(): $MapProcessor;
        create_rns$getScale(): number;
        create$getCameraZ(): number;
        create$getScale(): number;
        create$getCameraX(): number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static hiddenUI: boolean;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        playersMenu: boolean;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static PANORAMA: $PanoramaRenderer;
        noUploadingLimits: boolean;
        escape: $Screen;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        shouldReinit: boolean;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        waypointMenu: boolean;
        narratorButton: $CycleButton<$NarratorStatus>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Screen, arg2: $MapProcessor, arg3: $Entity);
        get radarButton(): $Button;
        get rightClickValid(): boolean;
        get trackedPlayerKeyBinding(): $KeyMapping;
        get rightClickOptions(): $ArrayList<$RightClickOption>;
        get mapProcessor(): $MapProcessor;
        get rightClickTitleBackgroundColor(): number;
        get dimensionOnInit(): $MapDimension;
        get userScale(): number;
    }
    export class $ExportScreen extends $GuiSettings {
        getSelection(): $MapTileSelection;
        onExportDone(arg0: $PNGExportResult): void;
        primaryOptionEntry<T>(arg0: $ConfigOption<T>): $ConfigOptionScreenEntry<T>;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        fullExport: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        escape: $Screen;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Screen, arg2: $MapProcessor, arg3: $MapTileSelection);
        get selection(): $MapTileSelection;
    }
}
