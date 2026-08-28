import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/yungnickyoung/minecraft/betterdeserttemples/entity" {
    export class $IPharaohData {
    }
    export interface $IPharaohData {
        getOriginalSpawnPos(): $Vec3;
        setOriginalSpawnPos(arg0: $Vec3_): void;
    }
}
