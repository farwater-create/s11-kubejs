import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Event } from "@package/net/neoforged/bus/api";
import { $IPlayerPermissionSystemRegisterAPI_, $IPlayerPermissionSystemRegisterAPI } from "@package/xaero/pac/common/server/player/permission/api";
import { $IPlayerPartySystemRegisterAPI, $IPlayerPartySystemRegisterAPI_ } from "@package/xaero/pac/common/server/parties/system/api";
import { $IClaimsManagerTrackerRegisterAPI, $IClaimsManagerTrackerRegisterAPI_ } from "@package/xaero/pac/common/claims/tracker/api";
export * as v2 from "@package/xaero/pac/common/event/api/v2";

declare module "@package/xaero/pac/common/event/api" {
    /**
     * @deprecated
     */
    export class $OPACServerAddonRegisterEvent extends $Event {
        getPermissionSystemManager(): $IPlayerPermissionSystemRegisterAPI;
        getPartySystemManagerAPI(): $IPlayerPartySystemRegisterAPI;
        getClaimsManagerTrackerAPI(): $IClaimsManagerTrackerRegisterAPI;
        getServer(): $MinecraftServer;
        constructor(arg0: $MinecraftServer, arg1: $IPlayerPermissionSystemRegisterAPI_, arg2: $IPlayerPartySystemRegisterAPI_, arg3: $IClaimsManagerTrackerRegisterAPI_);
        get permissionSystemManager(): $IPlayerPermissionSystemRegisterAPI;
        get partySystemManagerAPI(): $IPlayerPartySystemRegisterAPI;
        get claimsManagerTrackerAPI(): $IClaimsManagerTrackerRegisterAPI;
        get server(): $MinecraftServer;
    }
}
