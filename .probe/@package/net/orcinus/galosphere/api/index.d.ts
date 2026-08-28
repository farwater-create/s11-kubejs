import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/net/orcinus/galosphere/api" {
    export class $HaliteCurse {
    }
    export interface $HaliteCurse {
        setHaliteCurse(arg0: boolean): void;
        isHaliteCursed(): boolean;
        set haliteCurse(value: boolean);
        get haliteCursed(): boolean;
    }
    export class $Sifting {
    }
    export interface $Sifting {
        getItemStack(): $ItemStack;
        setItemStack(arg0: $ItemStack_): void;
        setSiftingApplied(): void;
    }
}
