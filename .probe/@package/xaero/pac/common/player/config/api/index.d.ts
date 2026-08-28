
declare module "@package/xaero/pac/common/player/config/api" {
    export class $IPlayerConfigPermissionAPI {
    }
    export interface $IPlayerConfigPermissionAPI {
        canEdit(): boolean;
        canIncludeGroupsInGroups(): boolean;
        canIncludePlayersInGroups(): boolean;
        canCreateGroups(): boolean;
        canView(): boolean;
        canClaimAs(): boolean;
    }
}
