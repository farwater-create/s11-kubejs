import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        isLoaded(): boolean;
        setLoaded(arg0: boolean): void;
        isIgnoreHeightmaps(): boolean;
        isTeleportationEnabled(): boolean;
        setIgnoreHeightmaps(arg0: boolean): void;
        setUsingMultiworldDetection(arg0: boolean): void;
        isUsingDefaultTeleportCommand(): boolean;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        getServerTeleportCommandFormat(): string;
        setServerTeleportCommandFormat(arg0: string): void;
        getSortType(): $WaypointsSort;
        isSortReversed(): boolean;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        isUsingMultiworldDetection(): boolean;
        resetSubWorldConnections(arg0: boolean): void;
        getDefaultMultiworldId(): string;
        setIgnoreServerLevelId(arg0: boolean): void;
        setDefaultMultiworldId(arg0: string): void;
        isIgnoreServerLevelId(): boolean;
        setTeleportationEnabled(arg0: boolean): void;
        getServerTeleportCommandRotationFormat(): string;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        toggleSortType(): void;
        setSortType(arg0: $WaypointsSort_): void;
        setSortReversed(arg0: boolean): void;
        toggleSortReversed(): void;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
