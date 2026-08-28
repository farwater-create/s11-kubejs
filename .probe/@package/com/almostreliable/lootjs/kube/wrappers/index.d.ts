import { $NumberProvider_, $NumberProvider } from "@package/net/minecraft/world/level/storage/loot/providers/number";

declare module "@package/com/almostreliable/lootjs/kube/wrappers" {
    export class $NumberProviderWrapper {
        static constant(arg0: number): $NumberProvider;
        static binomial(arg0: $NumberProvider_, arg1: $NumberProvider_): $NumberProvider;
        static uniform(arg0: $NumberProvider_, arg1: $NumberProvider_): $NumberProvider;
        constructor();
    }
}
