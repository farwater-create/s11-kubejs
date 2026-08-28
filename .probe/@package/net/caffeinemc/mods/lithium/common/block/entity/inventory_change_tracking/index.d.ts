import { $Container } from "@package/net/minecraft/world";
import { $LithiumStackList } from "@package/net/caffeinemc/mods/lithium/common/hopper";

declare module "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking" {
    export class $InventoryChangeEmitter {
    }
    export interface $InventoryChangeEmitter {
        lithium$forwardContentChangeOnce(arg0: $InventoryChangeListener, arg1: $LithiumStackList): void;
        emitCallbackReplaced(): void;
        lithium$emitRemoved(): void;
        lithium$emitStackListReplaced(): void;
        lithium$emitContentModified(): void;
        lithium$stopForwardingMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$forwardMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$emitFirstComparatorAdded(): void;
    }
    export class $InventoryChangeTracker {
    }
    export interface $InventoryChangeTracker extends $InventoryChangeEmitter {
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
    }
    export class $InventoryChangeListener {
    }
    export interface $InventoryChangeListener {
        lithium$handleInventoryRemoved(arg0: $Container): void;
        lithium$handleComparatorAdded(arg0: $Container): boolean;
        lithium$handleInventoryContentModified(arg0: $Container): void;
    }
}
