import { $Level } from "@package/net/minecraft/world/level";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $Item } from "@package/net/minecraft/world/item";
import { $ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$1 } from "@package/xaero/hud/minimap/player/tracker/synced";
import { $ClientSyncedTrackedPlayerManager } from "@package/xaero/common/minimap/radar/tracker/synced";
import { $HudMod, $IXaeroMinimap } from "@package/xaero/common";
import { $CustomVertexConsumers } from "@package/xaero/common/graphics";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MinimapWriter } from "@package/xaero/common/minimap/write";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapElementOverMapRendererHandler } from "@package/xaero/common/minimap/element/render/over";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Minimap } from "@package/xaero/hud/minimap";
import { $MinimapRadar } from "@package/xaero/common/minimap/radar";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as radar from "@package/xaero/common/minimap/radar";
export * as region from "@package/xaero/common/minimap/region";
export * as waypoints from "@package/xaero/common/minimap/waypoints";
export * as render from "@package/xaero/common/minimap/render";
export * as highlight from "@package/xaero/common/minimap/highlight";
export * as write from "@package/xaero/common/minimap/write";
export * as mcworld from "@package/xaero/common/minimap/mcworld";
export * as element from "@package/xaero/common/minimap/element";

declare module "@package/xaero/common/minimap" {
    export class $MinimapProcessor {
        /**
         * @deprecated
         */
        getClientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        cleanup(): void;
        onClientTick(): void;
        getForcedFairPlay(): boolean;
        onPlayerTick(): void;
        getMinimapInterface(): $MinimapInterface;
        setConsideringNetherFairPlayMessage(arg0: boolean): void;
        isToResetImage(): boolean;
        isManualCaveMode(): boolean;
        getMinimapZoom(): number;
        setToResetImage(arg0: boolean): void;
        toggleManualCaveMode(): void;
        serverHasMod(): boolean;
        getRadarSession(): $RadarSession;
        getMinimapWriter(): $MinimapWriter;
        isEnlargedMap(): boolean;
        updateMinimapItem(): void;
        onRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CustomVertexConsumers): void;
        getSession(): $MinimapSession;
        static hasMinimapItem(arg0: $Player): boolean;
        getServerModNetworkVersion(): number;
        setLastMapDimensionScale(arg0: number): void;
        setLastMapDimension(arg0: $ResourceKey_<$Level>): void;
        isCaveModeDisplayed(): boolean;
        getMinimapBufferSize(arg0: number): number;
        /**
         * @deprecated
         */
        setLastPlayerDimDiv(arg0: number): void;
        /**
         * @deprecated
         */
        getLastPlayerDimDiv(): number;
        getFBOBufferSize(): number;
        getMinimapItem(): $Item;
        setFairPlayOnlyMessageReceived(arg0: boolean): void;
        setNoMinimapMessageReceived(arg0: boolean): void;
        setServerModNetworkVersion(arg0: number): void;
        updateZoom(): void;
        getNoMinimapMessageReceived(): boolean;
        getSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        setEnlargedMap(arg0: boolean): void;
        instantZoom(): void;
        getMinimapSize(): number;
        canUseFrameBuffer(): boolean;
        checkFBO(): void;
        getLastMapDimensionScale(): number;
        getLastMapDimension(): $ResourceKey<$Level>;
        getTargetZoom(): number;
        /**
         * @deprecated
         */
        getEntityRadar(): $MinimapRadar;
        isConsideringNetherFairPlayMessage(): boolean;
        static DEBUG: boolean;
        static FRAME: number;
        constructor(arg0: $IXaeroMinimap, arg1: $MinimapSession, arg2: $MinimapWriter, arg3: $RadarSession, arg4: $ClientSyncedTrackedPlayerManager$1);
        get clientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        get forcedFairPlay(): boolean;
        get minimapInterface(): $MinimapInterface;
        get manualCaveMode(): boolean;
        get minimapZoom(): number;
        get radarSession(): $RadarSession;
        get minimapWriter(): $MinimapWriter;
        get session(): $MinimapSession;
        get caveModeDisplayed(): boolean;
        get FBOBufferSize(): number;
        get minimapItem(): $Item;
        set fairPlayOnlyMessageReceived(value: boolean);
        get syncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        get minimapSize(): number;
        get targetZoom(): number;
        get entityRadar(): $MinimapRadar;
    }
    /**
     * @deprecated
     */
    export class $MinimapInterface extends $Minimap {
        /**
         * @deprecated
         */
        getOverMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        constructor(arg0: $HudMod);
        get overMapRendererHandler(): $MinimapElementOverMapRendererHandler;
    }
}
