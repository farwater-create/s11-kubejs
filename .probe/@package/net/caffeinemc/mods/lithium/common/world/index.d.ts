import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $LongOpenHashSet, $Long2ReferenceOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Mob } from "@package/net/minecraft/world/entity";
import { $GameEventListenerRegistry } from "@package/net/minecraft/world/level/gameevent";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ReferenceOpenHashSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Iterable, $Iterable_, $Record } from "@package/java/lang";
import { $SectionedEntityMovementTracker } from "@package/net/caffeinemc/mods/lithium/common/tracking/entity";
import { $ChunkSectionChangeCallback, $SectionedBlockChangeTracker } from "@package/net/caffeinemc/mods/lithium/common/tracking/block";
import { $LithiumInterner } from "@package/net/caffeinemc/mods/lithium/common/util/deduplication";
import { $EntityAccess } from "@package/net/minecraft/world/level/entity";
export * as interests from "@package/net/caffeinemc/mods/lithium/common/world/interests";
export * as block_pattern_matching from "@package/net/caffeinemc/mods/lithium/common/world/block_pattern_matching";
export * as blockentity from "@package/net/caffeinemc/mods/lithium/common/world/blockentity";
export * as chunk from "@package/net/caffeinemc/mods/lithium/common/world/chunk";
export * as listeners from "@package/net/caffeinemc/mods/lithium/common/world/listeners";

declare module "@package/net/caffeinemc/mods/lithium/common/world" {
    export class $LithiumData$Data extends $Record {
        gameEventDispatchers(): $GameEventDispatcherStorage;
        ominousBanner(): $ItemStack;
        activeNavigations(): $ReferenceOpenHashSet<$PathNavigation>;
        chunkSectionChangeCallbacks(): $Long2ReferenceOpenHashMap<$ChunkSectionChangeCallback>;
        blockChangeTrackers(): $LithiumInterner<$SectionedBlockChangeTracker>;
        entityMovementTrackers(): $LithiumInterner<$SectionedEntityMovementTracker<never, never>>;
        constructor(arg0: $HolderLookup$Provider);
        constructor(gameEventDispatchers: $GameEventDispatcherStorage_, ominousBanner: $ItemStack_, activeNavigations: $ReferenceOpenHashSet<$PathNavigation>, blockChangeTrackers: $LithiumInterner<$SectionedBlockChangeTracker>, entityMovementTrackers: $LithiumInterner<$SectionedEntityMovementTracker<never, never>>, chunkSectionChangeCallbacks: $Long2ReferenceOpenHashMap<$ChunkSectionChangeCallback>);
    }
    /**
     * Values that may be interpreted as {@link $LithiumData$Data}.
     */
    export type $LithiumData$Data_ = { blockChangeTrackers?: $LithiumInterner<$SectionedBlockChangeTracker>, gameEventDispatchers?: $GameEventDispatcherStorage_, activeNavigations?: $ReferenceOpenHashSet<$PathNavigation>, entityMovementTrackers?: $LithiumInterner<$SectionedEntityMovementTracker<never, never>>, chunkSectionChangeCallbacks?: $Long2ReferenceOpenHashMap<$ChunkSectionChangeCallback>, ominousBanner?: $ItemStack_,  } | [blockChangeTrackers?: $LithiumInterner<$SectionedBlockChangeTracker>, gameEventDispatchers?: $GameEventDispatcherStorage_, activeNavigations?: $ReferenceOpenHashSet<$PathNavigation>, entityMovementTrackers?: $LithiumInterner<$SectionedEntityMovementTracker<never, never>>, chunkSectionChangeCallbacks?: $Long2ReferenceOpenHashMap<$ChunkSectionChangeCallback>, ominousBanner?: $ItemStack_, ];
    export class $ChunkAwareEntityIterable<T extends $EntityAccess> {
    }
    export interface $ChunkAwareEntityIterable<T extends $EntityAccess> {
        lithium$IterateEntitiesInTrackedSections(): $Iterable<T>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkAwareEntityIterable}.
     */
    export type $ChunkAwareEntityIterable_<T> = (() => $Iterable_<T>);
    export class $LithiumData {
    }
    export interface $LithiumData {
        lithium$getData(): $LithiumData$Data;
    }
    /**
     * Values that may be interpreted as {@link $LithiumData}.
     */
    export type $LithiumData_ = (() => $LithiumData$Data_);
    export class $ChunkView {
    }
    export interface $ChunkView {
        lithium$getLoadedChunk(arg0: number, arg1: number): $ChunkAccess;
    }
    /**
     * Values that may be interpreted as {@link $ChunkView}.
     */
    export type $ChunkView_ = ((arg0: number, arg1: number) => $ChunkAccess);
    export class $ServerWorldExtended {
    }
    export interface $ServerWorldExtended {
        lithium$setNavigationInactive(arg0: $Mob): void;
        lithium$setNavigationActive(arg0: $Mob): void;
    }
    export class $ChunkRandomSource {
    }
    export interface $ChunkRandomSource {
        lithium$getRandomPosInChunk(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $BlockPos$MutableBlockPos): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkRandomSource}.
     */
    export type $ChunkRandomSource_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: $BlockPos$MutableBlockPos) => void);
    export class $GameEventDispatcherStorage extends $Record {
        get(arg0: number): $Int2ObjectMap<$GameEventListenerRegistry>;
        replace(arg0: number, arg1: $Int2ObjectMap<$GameEventListenerRegistry>): void;
        addChunk(arg0: number, arg1: $Int2ObjectMap<$GameEventListenerRegistry>): void;
        storage(): $Long2ReferenceOpenHashMap<$Int2ObjectMap<$GameEventListenerRegistry>>;
        removeChunk(arg0: number): void;
        loadedChunks(): $LongOpenHashSet;
        constructor();
        constructor(storage: $Long2ReferenceOpenHashMap<$Int2ObjectMap<$GameEventListenerRegistry>>, loadedChunks: $LongOpenHashSet);
    }
    /**
     * Values that may be interpreted as {@link $GameEventDispatcherStorage}.
     */
    export type $GameEventDispatcherStorage_ = { storage?: $Long2ReferenceOpenHashMap<$Int2ObjectMap<$GameEventListenerRegistry>>, loadedChunks?: $LongOpenHashSet,  } | [storage?: $Long2ReferenceOpenHashMap<$Int2ObjectMap<$GameEventListenerRegistry>>, loadedChunks?: $LongOpenHashSet, ];
}
