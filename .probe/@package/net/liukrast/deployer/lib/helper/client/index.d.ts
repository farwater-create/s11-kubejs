import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $List_ } from "@package/java/util";

declare module "@package/net/liukrast/deployer/lib/helper/client" {
    export class $DeployerGoggleInformation {
    }
    export interface $DeployerGoggleInformation extends $IHaveGoggleInformation {
        addToGoogleTooltip(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_, arg3: $List_<$Component_>, arg4: boolean): boolean;
    }
}
