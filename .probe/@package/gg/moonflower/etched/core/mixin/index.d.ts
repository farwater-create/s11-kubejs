import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
export * as client from "@package/gg/moonflower/etched/core/mixin/client";
export * as jukebox from "@package/gg/moonflower/etched/core/mixin/jukebox";

declare module "@package/gg/moonflower/etched/core/mixin" {
    export class $StructureTemplatePoolAccessor {
    }
    export interface $StructureTemplatePoolAccessor {
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        get templates(): $ObjectArrayList<$StructurePoolElement>;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePoolAccessor}.
     */
    export type $StructureTemplatePoolAccessor_ = (() => $ObjectArrayList<$StructurePoolElement>);
}
