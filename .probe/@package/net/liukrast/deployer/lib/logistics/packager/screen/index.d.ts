import { $StockInventoryType } from "@package/net/liukrast/deployer/lib/logistics/packager";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $PanoramaRenderer, $CubeMap } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $RedstoneRequesterMenu } from "@package/com/simibubi/create/content/logistics/redstoneRequester";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $GenericOrderContained, $GenericOrderContained_ } from "@package/net/liukrast/deployer/lib/logistics/stockTicker";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/liukrast/deployer/lib/logistics/packager/screen" {
    export class $RequesterTabScreen<V> extends $Screen implements $ProvidesOrder<V>, $TabData {
        getType(): $StockInventoryType<never, V, never>;
        getIcon(): $ItemStack;
        addToSendQueue(): $GenericOrderContained<V>;
        quickMoveItemEvent(arg0: $ItemStack_): void;
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
        constructor(arg0: $RedstoneRequesterMenu, arg1: $Component_, arg2: $Item, arg3: $StockInventoryType<never, V, never>, arg4: $GenericOrderContained_<V>);
        constructor(arg0: $RedstoneRequesterMenu, arg1: $Item, arg2: $StockInventoryType<never, V, never>, arg3: $GenericOrderContained_<V>);
        get type(): $StockInventoryType<never, V, never>;
        get icon(): $ItemStack;
    }
    export class $TabData {
    }
    export interface $TabData {
        getIcon(): $ItemStack;
        getTitle(): $Component;
        get icon(): $ItemStack;
        get title(): $Component;
    }
    export class $ProvidesOrder<V> {
    }
    export interface $ProvidesOrder<V> {
        getType(): $StockInventoryType<never, V, never>;
        addToSendQueue(): $GenericOrderContained<V>;
        get type(): $StockInventoryType<never, V, never>;
    }
}
