import { $UUID_, $Set, $UUID } from "@package/java/util";

declare module "@package/de/theidler/create_mobile_packages" {
    export class $IExtendedLogisticsNetwork {
    }
    export interface $IExtendedLogisticsNetwork {
        create_mobile_packages$getPlayers(): $Set<$UUID>;
        create_mobile_packages$setName(arg0: string): void;
        create_mobile_packages$getName(): string;
        create_mobile_packages$addPlayer(arg0: $UUID_): void;
        create_mobile_packages$removePlayer(arg0: $UUID_): void;
        create_mobile_packages$isOwnerMember(): boolean;
        create_mobile_packages$isPlayerMember(arg0: $UUID_): boolean;
        create_mobile_packages$setOwnerMember(arg0: boolean): void;
    }
}
