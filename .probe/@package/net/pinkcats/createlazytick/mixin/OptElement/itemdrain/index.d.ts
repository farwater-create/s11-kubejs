import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";

declare module "@package/net/pinkcats/createlazytick/mixin/OptElement/itemdrain" {
    export class $ItemDrainAccessor {
    }
    export interface $ItemDrainAccessor {
        getHeldItem(): $TransportedItemStack;
        getProcessingTicks(): number;
        setProcessingTicks(arg0: number): void;
        setHeldItem(arg0: $TransportedItemStack): void;
        invokeContinueProcessing(): boolean;
    }
}
