import { $Level } from "@package/net/minecraft/world/level";
import { $DiscoveredPath } from "@package/com/simibubi/create/content/trains/graph";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ScheduleDataEntry, $ScheduleRuntime } from "@package/com/simibubi/create/content/trains/schedule";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/schedule/destination" {
    export class $ScheduleInstruction extends $ScheduleDataEntry {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        start(arg0: $ScheduleRuntime, arg1: $Level): $DiscoveredPath;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ScheduleInstruction;
        supportsConditions(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
    }
    export class $DestinationInstruction extends $TextScheduleInstruction {
        getFilter(): string;
        getFilterForRegex(): string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
        get filter(): string;
        get filterForRegex(): string;
    }
    export class $DeliverPackagesInstruction extends $ScheduleInstruction {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
    }
    export class $TextScheduleInstruction extends $ScheduleInstruction {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
    }
    export class $ChangeThrottleInstruction extends $ScheduleInstruction {
        getThrottle(): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
        get throttle(): number;
    }
    export class $FetchPackagesInstruction extends $TextScheduleInstruction {
        getFilter(): string;
        getFilterForRegex(): string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
        get filter(): string;
        get filterForRegex(): string;
    }
    export class $ChangeTitleInstruction extends $TextScheduleInstruction {
        getScheduleTitle(): string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
        get scheduleTitle(): string;
    }
}
