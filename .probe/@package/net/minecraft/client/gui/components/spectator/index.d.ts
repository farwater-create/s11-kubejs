import { $SpectatorMenu, $SpectatorMenuListener } from "@package/net/minecraft/client/gui/spectator";
import { $Minecraft } from "@package/net/minecraft/client";
import { $SpectatorPage } from "@package/net/minecraft/client/gui/spectator/categories";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/spectator" {
    export class $SpectatorGui implements $SpectatorMenuListener {
        isMenuActive(): boolean;
        onMouseScrolled(slot: number): void;
        onMouseMiddleClick(): void;
        renderPage(guiGraphics: $GuiGraphics, alpha: number, x: number, y: number, spectatorPage: $SpectatorPage): void;
        renderTooltip(guiGraphics: $GuiGraphics): void;
        onHotbarSelected(slot: number): void;
        renderHotbar(guiGraphics: $GuiGraphics): void;
        onSpectatorMenuClosed(menu: $SpectatorMenu): void;
        constructor(minecraft: $Minecraft);
        get menuActive(): boolean;
    }
}
