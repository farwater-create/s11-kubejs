import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $SpectatorMenuItem, $SpectatorMenu, $SpectatorMenuCategory } from "@package/net/minecraft/client/gui/spectator";
import { $Component } from "@package/net/minecraft/network/chat";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List_, $Collection_, $List } from "@package/java/util";

declare module "@package/net/minecraft/client/gui/spectator/categories" {
    export class $SpectatorPage {
        getItem(index: number): $SpectatorMenuItem;
        getSelectedSlot(): number;
        static NO_SELECTION: number;
        constructor(items: $List_<$SpectatorMenuItem>, selection: number);
        get selectedSlot(): number;
    }
    export class $TeleportToPlayerMenuCategory implements $SpectatorMenuCategory, $SpectatorMenuItem {
        getPrompt(): $Component;
        getName(): $Component;
        isEnabled(): boolean;
        renderIcon(guiGraphics: $GuiGraphics, shadeColor: number, alpha: number): void;
        getItems(): $List<$SpectatorMenuItem>;
        selectItem(menu: $SpectatorMenu): void;
        constructor();
        constructor(players: $Collection_<$PlayerInfo>);
        get prompt(): $Component;
        get name(): $Component;
        get enabled(): boolean;
        get items(): $List<$SpectatorMenuItem>;
    }
    export class $TeleportToTeamMenuCategory$TeamSelectionItem implements $SpectatorMenuItem {
    }
    export class $TeleportToTeamMenuCategory implements $SpectatorMenuCategory, $SpectatorMenuItem {
        getPrompt(): $Component;
        getName(): $Component;
        isEnabled(): boolean;
        renderIcon(guiGraphics: $GuiGraphics, shadeColor: number, alpha: number): void;
        getItems(): $List<$SpectatorMenuItem>;
        selectItem(menu: $SpectatorMenu): void;
        constructor();
        get prompt(): $Component;
        get name(): $Component;
        get enabled(): boolean;
        get items(): $List<$SpectatorMenuItem>;
    }
}
