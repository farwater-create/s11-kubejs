import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $IFireItemBehavior_, $IFireItemBehaviorRegistry } from "@package/net/mehvahdjukaar/supplementaries/common/block/fire_behaviors";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/net/mehvahdjukaar/supplementaries/api/platform" {
    export class $RegisterFireBehaviorsEvent extends $Event implements $IFireItemBehaviorRegistry {
        getRegistryAccess(): $RegistryAccess;
        registerPresentBehavior(arg0: $ItemLike_, arg1: $IFireItemBehavior_): void;
        registerCannonBehavior(arg0: $ItemLike_, arg1: $IFireItemBehavior_): void;
        constructor(arg0: $RegistryAccess, arg1: $IFireItemBehaviorRegistry);
        get registryAccess(): $RegistryAccess;
    }
}
