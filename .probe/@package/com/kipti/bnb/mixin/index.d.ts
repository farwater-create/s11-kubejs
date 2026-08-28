import { $BlockPos } from "@package/net/minecraft/core";
import { $Set, $UUID } from "@package/java/util";

declare module "@package/com/kipti/bnb/mixin" {
    export class $PlayerSkyhookRendererAccessor {
        static bits_n_bobs$getHangingPlayers(): $Set<$UUID>;
    }
    export interface $PlayerSkyhookRendererAccessor {
    }
    export class $ChainConveyorRidingHandlerAccessor {
        static bits_n_bobs$getRidingChainConveyor(): $BlockPos;
        static bits_n_bobs$invokeStopRiding(): void;
    }
    export interface $ChainConveyorRidingHandlerAccessor {
    }
    export class $ServerGamePacketListenerImplAccessor {
    }
    export interface $ServerGamePacketListenerImplAccessor {
        bits_n_bobs$setAboveGroundVehicleTickCount(arg0: number): void;
        bits_n_bobs$setAboveGroundTickCount(arg0: number): void;
    }
}
