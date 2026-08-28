import { $IntIterable } from "@package/it/unimi/dsi/fastutil/ints";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $ThirdPartyWaypointManager } from "@package/xaero/hud/minimap/waypoint/thirdparty";

declare module "@package/xaero/hud/minimap/waypoint/server" {
    /**
     * @deprecated
     */
    export class $ServerWaypointManager {
        remove(arg0: number): void;
        size(): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: number, arg1: $Waypoint): void;
        getById(arg0: number): $Waypoint;
        getIds(): $IntIterable;
        getWaypoints(): $Iterable<$Waypoint>;
        addDisabled(arg0: number): void;
        getBySlot(arg0: number): $Waypoint;
        static ORIGIN_ID: $ResourceLocation;
        constructor(arg0: $ThirdPartyWaypointManager);
        get empty(): boolean;
        get ids(): $IntIterable;
        get waypoints(): $Iterable<$Waypoint>;
    }
}
