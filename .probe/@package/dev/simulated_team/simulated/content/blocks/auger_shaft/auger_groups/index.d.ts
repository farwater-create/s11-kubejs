import { $Level } from "@package/net/minecraft/world/level";
import { $ItemReciever, $BlockHarvester } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $LevelAccelerator } from "@package/dev/ryanhcode/sable/util";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/dev/simulated_team/simulated/content/blocks/auger_shaft/auger_groups" {
    export class $AugerDistributor extends $Record {
        index(): $MutableInt;
        addReceiver(arg0: $ItemReciever): void;
        removeReceiver(arg0: $ItemReciever): void;
        distributeItem(arg0: $ItemStack_, arg1: $BlockPos_): $ItemStack;
        gatherAndAssociateHarvesters(arg0: $Direction_[], arg1: $BlockPos_, arg2: $Level, arg3: $LevelAccelerator): void;
        receivers(): $List<$ItemReciever>;
        harvesters(): $List<$BlockHarvester>;
        constructor();
        constructor(receivers: $List_<$ItemReciever>, harvesters: $List_<$BlockHarvester>, index: $MutableInt);
    }
    /**
     * Values that may be interpreted as {@link $AugerDistributor}.
     */
    export type $AugerDistributor_ = { receivers?: $List_<$ItemReciever>, index?: $MutableInt, harvesters?: $List_<$BlockHarvester>,  } | [receivers?: $List_<$ItemReciever>, index?: $MutableInt, harvesters?: $List_<$BlockHarvester>, ];
}
