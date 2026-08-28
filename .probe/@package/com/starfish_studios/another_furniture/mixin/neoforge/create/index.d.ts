import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/starfish_studios/another_furniture/mixin/neoforge/create" {
    export class $ContraptionMixin {
    }
    export interface $ContraptionMixin {
        getInitialPassengers(): $Map<$BlockPos, $Entity>;
        setInitialPassengers(arg0: $Map_<$BlockPos_, $Entity>): void;
    }
}
