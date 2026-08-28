import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $UUID_, $UUID, $List } from "@package/java/util";
import { $LazyTickTier } from "@package/net/pinkcats/createlazytick/helper/tooltip";

declare module "@package/net/pinkcats/createlazytick/bridge/Create" {
    export class $ISmartBlockEntityControl {
    }
    export interface $ISmartBlockEntityControl {
        lazytick$getSyncedTier(): $LazyTickTier;
        lazytick$isDefaultState(): boolean;
        lazytick$setExtraData(arg0: number): void;
        lazytick$getExtraData(): number;
        lazytick$setSyncedTier(arg0: number, arg1: number): void;
        CLT$onClientRequest(arg0: number): void;
        createLazyTick$setCurrentSuperTick(arg0: number): void;
        createLazyTick$setOwnerUUID(arg0: $UUID_): void;
        createLazyTick$getCustomTooltipInfo(): $List<$Component>;
        CLT$getPos(): $BlockPos;
        createLazyTick$shouldRenderMode(): boolean;
        createLazyTick$setForcedValue(arg0: number): void;
        createLazyTick$shouldRenderTier(): boolean;
        createLazyTick$isDelayForced(): boolean;
        createLazyTick$getDynamicValue(): number;
        createLazyTick$setDynamicValue(arg0: number): void;
        createLazyTick$setDelayForced(arg0: boolean): void;
        createLazyTick$getForcedValue(): number;
        createLazyTick$getCurrentSuperTick(): number;
        createLazyTick$getOwnerName(): string;
        createLazyTick$setOwnerName(arg0: string): void;
        createLazyTick$getOwnerUUID(): $UUID;
        createLazyTick$sendBlockUpdated(): void;
        CLT$IsController(): boolean;
        CLT$getDimension(): $ResourceKey<$Level>;
    }
}
