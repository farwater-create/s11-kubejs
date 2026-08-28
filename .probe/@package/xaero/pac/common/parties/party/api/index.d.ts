import { $IPartyAllyAPI } from "@package/xaero/pac/common/parties/party/ally/api";
import { $Stream } from "@package/java/util/stream";
import { $PartyMemberRank_ } from "@package/xaero/pac/common/parties/party/member";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IPartyMemberAPI } from "@package/xaero/pac/common/parties/party/member/api";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/parties/party/api" {
    export class $IPartyMemberDynamicInfoSyncableAPI {
    }
    export interface $IPartyMemberDynamicInfoSyncableAPI {
        getDimension(): $ResourceLocation;
        getX(): number;
        getY(): number;
        getPlayerId(): $UUID;
        getZ(): number;
        get dimension(): $ResourceLocation;
        get x(): number;
        get y(): number;
        get playerId(): $UUID;
        get z(): number;
    }
    export class $IPartyAPI {
    }
    export interface $IPartyAPI {
        getId(): $UUID;
        getOwner(): $IPartyMemberAPI;
        getDefaultName(): string;
        setRank(arg0: $IPartyMemberAPI, arg1: $PartyMemberRank_): boolean;
        getMemberInfo(arg0: $UUID_): $IPartyMemberAPI;
        getStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getMemberCount(): number;
        getAllyCount(): number;
        getInviteCount(): number;
        getInvitedPlayersStream(): $Stream<$IPartyPlayerInfoAPI>;
        getAllyPartiesStream(): $Stream<$IPartyAllyAPI>;
        getNonStaffInfoStream(): $Stream<$IPartyMemberAPI>;
        getMemberInfoStream(): $Stream<$IPartyMemberAPI>;
        isInvited(arg0: $UUID_): boolean;
        isAlly(arg0: $UUID_): boolean;
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
    }
    export class $IPartyPlayerInfoAPI {
    }
    export interface $IPartyPlayerInfoAPI {
        getUsername(): string;
        getUUID(): $UUID;
        get username(): string;
        get UUID(): $UUID;
    }
}
