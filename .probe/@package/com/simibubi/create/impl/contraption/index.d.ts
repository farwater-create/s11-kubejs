import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockMovementChecks$NotSupportiveCheck_, $BlockMovementChecks$MovementAllowedCheck_, $BlockMovementChecks$MovementNecessaryCheck_, $BlockMovementChecks$AttachedCheck_, $BlockMovementChecks$BrittleCheck_ } from "@package/com/simibubi/create/api/contraption";
export * as dispenser from "@package/com/simibubi/create/impl/contraption/dispenser";
export * as storage from "@package/com/simibubi/create/impl/contraption/storage";

declare module "@package/com/simibubi/create/impl/contraption" {
    export class $BlockMovementChecksImpl {
        static registerMovementNecessaryCheck(arg0: $BlockMovementChecks$MovementNecessaryCheck_): void;
        static registerMovementAllowedCheck(arg0: $BlockMovementChecks$MovementAllowedCheck_): void;
        static isMovementAllowed(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_): boolean;
        static registerAttachedCheck(arg0: $BlockMovementChecks$AttachedCheck_): void;
        static isBlockAttachedTowards(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $Direction_): boolean;
        static isMovementNecessary(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_): boolean;
        static isNotSupportive(arg0: $BlockState_, arg1: $Direction_): boolean;
        static isBrittle(arg0: $BlockState_): boolean;
        static registerBrittleCheck(arg0: $BlockMovementChecks$BrittleCheck_): void;
        static registerNotSupportiveCheck(arg0: $BlockMovementChecks$NotSupportiveCheck_): void;
        constructor();
    }
}
