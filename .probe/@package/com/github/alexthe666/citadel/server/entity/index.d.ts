import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/com/github/alexthe666/citadel/server/entity" {
    export class $ICitadelDataEntity {
    }
    export interface $ICitadelDataEntity {
        setCitadelEntityData(arg0: $CompoundTag_): void;
        getCitadelEntityData(): $CompoundTag;
    }
}
