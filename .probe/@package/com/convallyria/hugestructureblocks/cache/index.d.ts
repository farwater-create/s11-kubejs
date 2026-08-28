import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";

declare module "@package/com/convallyria/hugestructureblocks/cache" {
    export class $WorldStructureBlockCacheAccessor {
    }
    export interface $WorldStructureBlockCacheAccessor {
        huge_structure_blocks$getStructureBlockCache(): $StructureBlockCache;
    }
    /**
     * Values that may be interpreted as {@link $WorldStructureBlockCacheAccessor}.
     */
    export type $WorldStructureBlockCacheAccessor_ = (() => $StructureBlockCache);
    export class $StructureBlockCache {
        remove(pos: $BlockPos_): void;
        add(pos: $BlockPos_): void;
        getAll(): $Stream<$BlockPos>;
        constructor();
        get all(): $Stream<$BlockPos>;
    }
}
