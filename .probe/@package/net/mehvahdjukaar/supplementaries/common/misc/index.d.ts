import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockSource } from "@package/net/minecraft/core/dispenser";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Set_, $Set } from "@package/java/util";
import { $DispenserBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/mehvahdjukaar/supplementaries/common/misc" {
    export class $IMovingBlockSource {
        static create(arg0: $ServerLevel, arg1: $Entity, arg2: $DispenserBlockEntity): $BlockSource;
    }
    export interface $IMovingBlockSource {
        supp$setEntity(arg0: $Entity): void;
        supp$getEntity(): $Entity;
    }
    export class $CoopResolverState {
        set(arg0: $Set_<$BlockPos_>, arg1: number, arg2: $Direction_, arg3: boolean): void;
        cooperatingPistons: $Set<$BlockPos>;
        pistonDirection: $Direction;
        contributingCooperators: $Set<$BlockPos>;
        pushLimit: number;
        extending: boolean;
        constructor();
    }
}
