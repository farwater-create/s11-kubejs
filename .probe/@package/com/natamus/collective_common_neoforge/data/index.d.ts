import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/com/natamus/collective_common_neoforge/data" {
    export class $IEntityDataHolder {
    }
    export interface $IEntityDataHolder {
        collective_getStored(): $CompoundTag;
        collective_setStored(arg0: $CompoundTag_): void;
    }
}
