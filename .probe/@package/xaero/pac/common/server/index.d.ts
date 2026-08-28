import { $IChunkProtectionAPI } from "@package/xaero/pac/common/server/claims/protection/api";
import { $IPlayerConfigManagerAPI as $IPlayerConfigManagerAPI$1 } from "@package/xaero/pac/common/server/player/config/api";
import { $IAdaptiveLocalizerAPI } from "@package/xaero/pac/common/server/player/localization/api";
import { $OpenPACServerAPI } from "@package/xaero/pac/common/server/api";
import { $IServerClaimsManagerAPI } from "@package/xaero/pac/common/server/claims/api";
import { $IPlayerConfigManagerAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $IPartyManagerAPI } from "@package/xaero/pac/common/server/parties/party/api";
export * as core from "@package/xaero/pac/common/server/core";
export * as player from "@package/xaero/pac/common/server/player";
export * as claims from "@package/xaero/pac/common/server/claims";
export * as parties from "@package/xaero/pac/common/server/parties";
export * as api from "@package/xaero/pac/common/server/api";

declare module "@package/xaero/pac/common/server" {
    export class $IOpenPACMinecraftServer {
    }
    export interface $IOpenPACMinecraftServer {
        getXaero_OPAC_ServerData(): $IServerDataAPI;
        setXaero_OPAC_ServerData(arg0: $IServerDataAPI): void;
    }
    export class $IServerDataAPI {
    }
    export interface $IServerDataAPI {
        /**
         * @deprecated
         */
        getPlayerConfigs(): $IPlayerConfigManagerAPI$1;
        getPartyManager(): $IPartyManagerAPI;
        getServerClaimsManager(): $IServerClaimsManagerAPI;
        getAPI(): $OpenPACServerAPI;
        getPlayerConfigManager(): $IPlayerConfigManagerAPI;
        getAdaptiveLocalizer(): $IAdaptiveLocalizerAPI;
        getChunkProtection(): $IChunkProtectionAPI;
        get playerConfigs(): $IPlayerConfigManagerAPI$1;
        get partyManager(): $IPartyManagerAPI;
        get serverClaimsManager(): $IServerClaimsManagerAPI;
        get API(): $OpenPACServerAPI;
        get playerConfigManager(): $IPlayerConfigManagerAPI;
        get adaptiveLocalizer(): $IAdaptiveLocalizerAPI;
        get chunkProtection(): $IChunkProtectionAPI;
    }
}
