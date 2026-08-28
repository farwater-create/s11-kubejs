import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart" {
    export class $ILevelEventRedirect {
        static supp$tryRedirect(arg0: $ServerLevel, arg1: $Player, arg2: $Vec3_, arg3: number, arg4: $BlockPos_, arg5: number): boolean;
    }
    export interface $ILevelEventRedirect {
        supp$setRedirected(arg0: boolean, arg1: $Vec3_): void;
    }
    /**
     * Values that may be interpreted as {@link $ILevelEventRedirect}.
     */
    export type $ILevelEventRedirect_ = ((arg0: boolean, arg1: $Vec3) => void);
}
