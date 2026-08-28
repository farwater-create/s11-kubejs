import { $MinimapProcessor } from "@package/xaero/common/minimap";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapDimensionHelper, $MinimapWorldManager } from "@package/xaero/hud/minimap/world";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapWorldManagerIO } from "@package/xaero/hud/minimap/world/io";
import { $HudMod } from "@package/xaero/common";
import { $ModuleSession, $HudModule } from "@package/xaero/hud/module";
import { $Minecraft } from "@package/net/minecraft/client";
import { $MultiTextureRenderTypeRendererProvider } from "@package/xaero/common/graphics/renderer/multitexture";
import { $MinimapWorldState, $MinimapWorldStateUpdater } from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/module" {
    export class $MinimapSession extends $ModuleSession<$MinimapSession> {
        getProcessor(): $MinimapProcessor;
        getWaypointSession(): $WaypointSession;
        getWorldManager(): $MinimapWorldManager;
        getWorldStateUpdater(): $MinimapWorldStateUpdater;
        getRadarSession(): $RadarSession;
        getHideMinimapUnderScreen(): boolean;
        getHideMinimapUnderF3(): boolean;
        getMultiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        getWorldManagerIO(): $MinimapWorldManagerIO;
        getWorldState(): $MinimapWorldState;
        getDimensionHelper(): $MinimapDimensionHelper;
        getConfiguredWidth(): number;
        getMc(): $Minecraft;
        constructor(arg0: $HudMod, arg1: $HudModule<$MinimapSession>, arg2: $ClientPacketListener);
        get processor(): $MinimapProcessor;
        get waypointSession(): $WaypointSession;
        get worldManager(): $MinimapWorldManager;
        get worldStateUpdater(): $MinimapWorldStateUpdater;
        get radarSession(): $RadarSession;
        get hideMinimapUnderScreen(): boolean;
        get hideMinimapUnderF3(): boolean;
        get multiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        get worldManagerIO(): $MinimapWorldManagerIO;
        get worldState(): $MinimapWorldState;
        get dimensionHelper(): $MinimapDimensionHelper;
        get configuredWidth(): number;
        get mc(): $Minecraft;
    }
}
