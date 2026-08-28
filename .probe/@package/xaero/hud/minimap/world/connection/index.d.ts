import { $PrintWriter } from "@package/java/io";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $XaeroPath } from "@package/xaero/hud/path";

declare module "@package/xaero/hud/minimap/world/connection" {
    export class $MinimapWorldConnectionManager {
        isEmpty(): boolean;
        save(arg0: $PrintWriter): void;
        isConnected(arg0: $MinimapWorld, arg1: $MinimapWorld): boolean;
        addConnection(arg0: $MinimapWorld, arg1: $MinimapWorld): void;
        addConnection(arg0: $XaeroPath, arg1: $XaeroPath): void;
        removeConnection(arg0: $MinimapWorld, arg1: $MinimapWorld): void;
        swapConnections(arg0: $MinimapWorld, arg1: $MinimapWorld): void;
        renameDimension(arg0: string, arg1: string): void;
        get empty(): boolean;
    }
}
