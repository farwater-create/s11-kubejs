import { $IChunkProtectionAPI } from "@package/xaero/pac/common/server/claims/protection/api";
import { $IPlayerConfigManagerAPI as $IPlayerConfigManagerAPI$1 } from "@package/xaero/pac/common/server/player/config/api";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $IAdaptiveLocalizerAPI } from "@package/xaero/pac/common/server/player/localization/api";
import { $IServerClaimsManagerAPI } from "@package/xaero/pac/common/server/claims/api";
import { $IPlayerConfigManagerAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $IServerDataAPI } from "@package/xaero/pac/common/server";
import { $IPartyManagerAPI } from "@package/xaero/pac/common/server/parties/party/api";

declare module "@package/xaero/pac/common/server/api" {
    export class $OpenPACServerAPI {
        static get(arg0: $MinecraftServer): $OpenPACServerAPI;
        /**
         * @deprecated
         */
        getPlayerConfigs(): $IPlayerConfigManagerAPI$1;
        getPartyManager(): $IPartyManagerAPI;
        getServerClaimsManager(): $IServerClaimsManagerAPI;
        getPlayerConfigManager(): $IPlayerConfigManagerAPI;
        getChunkProtection(): $IChunkProtectionAPI;
        getAdaptiveTextLocalizer(): $IAdaptiveLocalizerAPI;
        constructor(arg0: $IServerDataAPI);
        get playerConfigs(): $IPlayerConfigManagerAPI$1;
        get partyManager(): $IPartyManagerAPI;
        get serverClaimsManager(): $IServerClaimsManagerAPI;
        get playerConfigManager(): $IPlayerConfigManagerAPI;
        get chunkProtection(): $IChunkProtectionAPI;
        get adaptiveTextLocalizer(): $IAdaptiveLocalizerAPI;
    }
}
