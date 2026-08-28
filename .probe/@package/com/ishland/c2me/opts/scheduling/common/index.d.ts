import { $LightLayer_ } from "@package/net/minecraft/world/level";
export * as idle_tasks from "@package/com/ishland/c2me/opts/scheduling/common/idle_tasks";

declare module "@package/com/ishland/c2me/opts/scheduling/common" {
    export class $ITryFlushable {
    }
    export interface $ITryFlushable {
        c2me$tryFlush(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ITryFlushable}.
     */
    export type $ITryFlushable_ = (() => boolean);
    export class $DuckChunkHolder {
    }
    export interface $DuckChunkHolder {
        c2me$undirtyLight(): boolean;
        c2me$shouldScheduleUndirty(): boolean;
        c2me$queueLightSectionDirty(arg0: $LightLayer_, arg1: number): void;
    }
}
