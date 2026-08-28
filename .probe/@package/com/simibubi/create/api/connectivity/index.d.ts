import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/api/connectivity" {
    export class $ConnectivityHandler {
        static isConnected<T extends $BlockEntity>(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        static formMulti<T extends $BlockEntity>(arg0: T): void;
        static splitMulti<T extends $BlockEntity>(arg0: T): void;
        static partAt<T extends $BlockEntity>(arg0: $BlockEntityType<never>, arg1: $BlockGetter, arg2: $BlockPos_): T;
        constructor();
    }
    export class $ConnectivityHandler$SearchCache<T extends $BlockEntity> {
    }
}
