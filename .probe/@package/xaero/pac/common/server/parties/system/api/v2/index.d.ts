import { $Component } from "@package/net/minecraft/network/chat";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/server/parties/system/api/v2" {
    export class $IPlayerPartySystemAPI<P> {
    }
    export interface $IPlayerPartySystemAPI<P> {
        getName(arg0: P): $Component;
        getOwner(arg0: P): $UUID;
        getColor(arg0: P): number;
        isPermittedToPartyClaim(arg0: $UUID_): boolean;
        isPlayerAllying(arg0: $UUID_, arg1: $UUID_): boolean;
        canCreatePartyConfigGroups(arg0: $UUID_): boolean;
        getMemberCount(arg0: P): number;
        canEditPartyConfig(arg0: $UUID_): boolean;
        getPartyByMember(arg0: $UUID_): P;
        getPartyByOwner(arg0: $UUID_): P;
        canIncludeGroupsInPartyConfigGroups(arg0: $UUID_): boolean;
        canIncludePlayersInPartyConfigGroups(arg0: $UUID_): boolean;
    }
    export class $IPlayerPartySystemRegisterAPI {
    }
    export interface $IPlayerPartySystemRegisterAPI {
        register(arg0: string, arg1: $IPlayerPartySystemAPI<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerPartySystemRegisterAPI}.
     */
    export type $IPlayerPartySystemRegisterAPI_ = ((arg0: string, arg1: $IPlayerPartySystemAPI<never>) => void);
}
