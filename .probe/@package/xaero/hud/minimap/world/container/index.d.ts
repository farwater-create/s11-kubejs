import { $Level } from "@package/net/minecraft/world/level";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $List, $Map$Entry } from "@package/java/util";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ServerWaypointManager } from "@package/xaero/hud/minimap/waypoint/server";
import { $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort, $WaypointWorldContainer } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $ThirdPartyWaypointManager } from "@package/xaero/hud/minimap/waypoint/thirdparty";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as config from "@package/xaero/hud/minimap/world/container/config";

declare module "@package/xaero/hud/minimap/world/container" {
    export class $MinimapWorldContainer {
        getName(arg0: string): string;
        isEmpty(): boolean;
        setName(arg0: string, arg1: string): void;
        getRoot(): $MinimapWorldRootContainer;
        getPath(): $XaeroPath;
        setPath(arg0: $XaeroPath): void;
        getSubName(): string;
        getLastNode(): string;
        getWorlds(): $Iterable<$MinimapWorld>;
        getSession(): $MinimapSession;
        getThirdPartyWaypointManager(): $ThirdPartyWaypointManager;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        removeName(arg0: string): void;
        containsSubContainer(arg0: $XaeroPath): boolean;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        /**
         * @deprecated
         */
        getServerWaypointManager(): $ServerWaypointManager;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        getEquivalentDimKey(): $ResourceKey<$Level>;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        addWorld(arg0: string): $MinimapWorld;
        addWorld(arg0: $MinimapWorld): void;
        getFullWorldName(arg0: string, arg1: string): string;
        getEquivalentDimId(): $ResourceLocation;
        removeWorld(arg0: string): void;
        getDirectoryPath(): $Path;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        getWorldsCopy(): $List<$MinimapWorld>;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        static UNKNOWN_DIM_ID: $ResourceLocation;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get subName(): string;
        get lastNode(): string;
        get worlds(): $Iterable<$MinimapWorld>;
        get session(): $MinimapSession;
        get thirdPartyWaypointManager(): $ThirdPartyWaypointManager;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get serverWaypointManager(): $ServerWaypointManager;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
        get equivalentDimKey(): $ResourceKey<$Level>;
        get equivalentDimId(): $ResourceLocation;
        get directoryPath(): $Path;
        get worldsCopy(): $List<$MinimapWorld>;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        getConfig(): $RootConfig;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        isConfigLoaded(): boolean;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
        /**
         * @deprecated
         */
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandFormat(): string;
        /**
         * @deprecated
         */
        setServerTeleportCommandFormat(arg0: string): void;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        updateDimensionType(arg0: $ClientLevel): void;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        updateConnectionsField(arg0: $WaypointSession): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        renameOldContainer(arg0: $XaeroPath): void;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        static UNKNOWN_DIM_ID: $ResourceLocation;
        get config(): $RootConfig;
        get configLoaded(): boolean;
        get subWorldConnections(): $MinimapWorldConnectionManager;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
    }
}
