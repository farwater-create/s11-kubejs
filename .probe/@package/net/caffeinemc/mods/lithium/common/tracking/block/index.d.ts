import { $Level } from "@package/net/minecraft/world/level";
import { $SectionPos } from "@package/net/minecraft/core";
import { $ListeningBlockStatePredicate, $BlockListeningSection } from "@package/net/caffeinemc/mods/lithium/common/block";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $WorldSectionBox_, $WorldSectionBox } from "@package/net/caffeinemc/mods/lithium/common/util/tuples";

declare module "@package/net/caffeinemc/mods/lithium/common/tracking/block" {
    export class $ChunkSectionChangeCallback {
        static init(): void;
        static create(arg0: number, arg1: $Level): $ChunkSectionChangeCallback;
        onBlockChange(arg0: number, arg1: $BlockListeningSection): number;
        removeTracker(arg0: $SectionedBlockChangeTracker, arg1: $ListeningBlockStatePredicate): number;
        addTracker(arg0: $SectionedBlockChangeTracker, arg1: $ListeningBlockStatePredicate): number;
        onChunkSectionInvalidated(arg0: $SectionPos): void;
        constructor();
    }
    export class $SectionedBlockChangeTracker {
        register(): void;
        unregister(): void;
        static registerAt(arg0: $Level, arg1: $AABB_, arg2: $ListeningBlockStatePredicate): $SectionedBlockChangeTracker;
        setChanged(arg0: $BlockListeningSection): void;
        setChanged(arg0: number): void;
        isUnchangedSince(arg0: number): boolean;
        onChunkSectionInvalidated(arg0: $SectionPos): void;
        matchesMovedBox(arg0: $AABB_): boolean;
        listenToAllSections(): void;
        trackedWorldSections: $WorldSectionBox;
        blockGroup: $ListeningBlockStatePredicate;
        constructor(arg0: $WorldSectionBox_, arg1: $ListeningBlockStatePredicate);
    }
}
