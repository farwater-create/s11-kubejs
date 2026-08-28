import { $IClaimingModeAPI } from "@package/xaero/pac/common/claims/player/mode/api";
import { $ServerPlayer } from "@package/net/minecraft/server/level";

declare module "@package/xaero/pac/common/server/player/data/api" {
    export class $ServerPlayerDataAPI {
        static from(arg0: $ServerPlayer): $ServerPlayerDataAPI;
        /**
         * @deprecated
         */
        isClaimsServerMode(): boolean;
        isClaimsAdminMode(): boolean;
        isPartiesAdminMode(): boolean;
        getClaimingMode(): $IClaimingModeAPI;
        getRawClaimingMode(): $IClaimingModeAPI;
        isClaimsNonallyMode(): boolean;
        constructor();
        get claimsServerMode(): boolean;
        get claimsAdminMode(): boolean;
        get partiesAdminMode(): boolean;
        get claimingMode(): $IClaimingModeAPI;
        get rawClaimingMode(): $IClaimingModeAPI;
        get claimsNonallyMode(): boolean;
    }
}
