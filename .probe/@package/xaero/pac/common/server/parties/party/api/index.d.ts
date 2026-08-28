import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $IPartyAllyAPI } from "@package/xaero/pac/common/parties/party/ally/api";
import { $Stream } from "@package/java/util/stream";
import { $IPartyPlayerInfoAPI, $IPartyAPI } from "@package/xaero/pac/common/parties/party/api";
import { $PartyMemberRank_ } from "@package/xaero/pac/common/parties/party/member";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IPartyMemberAPI } from "@package/xaero/pac/common/parties/party/member/api";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/server/parties/party/api" {
    export class $IPartyManagerAPI {
    }
    export interface $IPartyManagerAPI {
        getPartyByMember(arg0: $UUID_): $IServerPartyAPI;
        getPartyByOwner(arg0: $UUID_): $IServerPartyAPI;
        getAllStream(): $Stream<$IServerPartyAPI>;
        removePartyById(arg0: $UUID_): void;
        getPartiesThatAlly(arg0: $UUID_): $Stream<$IServerPartyAPI>;
        removePartyByOwner(arg0: $UUID_): void;
        removeParty(arg0: $IServerPartyAPI): void;
        getPartyById(arg0: $UUID_): $IServerPartyAPI;
        partyExistsForOwner(arg0: $UUID_): boolean;
        createPartyForOwner(arg0: $Player): $IServerPartyAPI;
        get allStream(): $Stream<$IServerPartyAPI>;
    }
    export class $IServerPartyAPI {
    }
    export interface $IServerPartyAPI extends $IPartyAPI {
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        removeMember(arg0: $UUID_): $IPartyMemberAPI;
        getDefaultName(): string;
        addMember(arg0: $UUID_, arg1: $PartyMemberRank_ | null, arg2: string): $IPartyMemberAPI;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        addAllyParty(arg0: $UUID_): void;
        getMemberInfo(arg0: string): $IPartyMemberAPI;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        uninvitePlayer(arg0: $UUID_): $IPartyPlayerInfoAPI;
        getMemberCount(): number;
        getAllyCount(): number;
        getInviteCount(): number;
        removeAllyParty(arg0: $UUID_): void;
        invitePlayer(arg0: $UUID_, arg1: string): $IPartyPlayerInfoAPI;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        isInvited(arg0: $UUID_): boolean;
        isAlly(arg0: $UUID_): boolean;
        getOnlineMemberStream(): $Stream<$ServerPlayer>;
        get id(): $UUID;
        get owner(): $IPartyMemberAPI;
        get defaultName(): string;
        get staffInfoStream(): $Stream<$IPartyMemberAPI>;
        get memberCount(): number;
        get allyCount(): number;
        get inviteCount(): number;
        get invitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        get allyPartiesStream(): $Stream<$IPartyAllyAPI>;
        get nonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        get memberInfoStream(): $Stream<$IPartyMemberAPI>;
        get onlineMemberStream(): $Stream<$ServerPlayer>;
    }
}
