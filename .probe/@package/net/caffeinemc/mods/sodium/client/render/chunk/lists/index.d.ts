import { $SectionPos } from "@package/net/minecraft/core";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ByteIterator, $ReversibleObjectArrayIterator } from "@package/net/caffeinemc/mods/sodium/client/util/iterator";
import { $SortedRenderListsAccessor } from "@package/foundry/veil/forge/mixin/compat/sodium";
import { $Iterator } from "@package/java/util";
import { $RenderRegion } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists" {
    export class $ChunkRenderListIterable {
    }
    export interface $ChunkRenderListIterable {
        iterator(arg0: boolean): $Iterator<$ChunkRenderList>;
        iterator(): $Iterator<$ChunkRenderList>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderListIterable}.
     */
    export type $ChunkRenderListIterable_ = ((arg0: boolean) => $Iterator<$ChunkRenderList>);
    export class $SortedRenderLists implements $ChunkRenderListIterable, $SortedRenderListsAccessor {
        iterator(arg0: boolean): $ReversibleObjectArrayIterator<$ChunkRenderList>;
        static empty(): $SortedRenderLists;
        static init$veil_$md$707fe4$0(arg0: $ObjectArrayList<any>): $SortedRenderLists;
        iterator(): $Iterator<$ChunkRenderList>;
    }
    export class $ChunkRenderList {
        size(): number;
        reset(arg0: number, arg1: boolean): void;
        add(arg0: number, arg1: number): void;
        getRegion(): $RenderRegion;
        prepareForRender(arg0: $SectionPos, arg1: $SortItemsProvider): void;
        sectionsWithEntitiesIterator(): $ByteIterator;
        sectionsWithGeometryIterator(arg0: boolean): $ByteIterator;
        sectionsWithSpritesIterator(): $ByteIterator;
        getSectionsWithGeometryCount(): number;
        getSectionsWithSpritesCount(): number;
        getSectionsWithEntitiesCount(): number;
        getLastVisibleFrame(): number;
        constructor(arg0: $RenderRegion);
        get region(): $RenderRegion;
        get sectionsWithGeometryCount(): number;
        get sectionsWithSpritesCount(): number;
        get sectionsWithEntitiesCount(): number;
        get lastVisibleFrame(): number;
    }
    export class $SortItemsProvider {
    }
    export interface $SortItemsProvider {
        getCachedSortItems(): number[];
        setCachedSortItems(arg0: number[]): void;
        ensureSortItemsOfLength(arg0: number): number[];
    }
}
