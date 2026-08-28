import { $AugerDistributor_, $AugerDistributor } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft/auger_groups";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
export * as auger_groups from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft/auger_groups";

declare module "@package/dev/simulated_team/simulated/content/blocks/auger_shaft" {
    export class $ItemReciever {
    }
    export interface $ItemReciever {
        removed(): boolean;
        isActive(): boolean;
        onRecieveItem(arg0: $ItemStack_, arg1: $BlockPos_): $ItemStack;
        get active(): boolean;
    }
    export class $BlockHarvester {
    }
    export interface $BlockHarvester {
        depositItemStack(arg0: $BlockPos_, arg1: $ItemStack_): $ItemStack;
        simulated$getAssociatedDistributor(): $AugerDistributor;
        simulated$setDistributor(arg0: $AugerDistributor_): void;
    }
}
