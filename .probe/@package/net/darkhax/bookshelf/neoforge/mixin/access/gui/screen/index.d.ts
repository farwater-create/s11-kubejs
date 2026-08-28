import { $Screen, $MenuScreens$ScreenConstructor_ } from "@package/net/minecraft/client/gui/screens";
import { $AbstractContainerMenu, $MenuType } from "@package/net/minecraft/world/inventory";

declare module "@package/net/darkhax/bookshelf/neoforge/mixin/access/gui/screen" {
    export class $AccessorMenuScreens {
        static register<M extends $AbstractContainerMenu, U extends $Screen>(arg0: $MenuType<M>, arg1: $MenuScreens$ScreenConstructor_<M, U>): void;
    }
    export interface $AccessorMenuScreens {
    }
}
