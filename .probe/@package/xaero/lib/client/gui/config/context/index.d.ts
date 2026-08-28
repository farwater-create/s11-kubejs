import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Iterable } from "@package/java/lang";
import { $IConfigProfileInfo, $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/client/gui/config/context" {
    export class $IEditConfigScreenContext {
    }
    export interface $IEditConfigScreenContext {
        reset(arg0: $ConfigChannel): void;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        isClientSide(): boolean;
        hasPermission(arg0: $ConfigChannel): boolean;
        isAutoDefaultProfile(): boolean;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        getScreenTitleFormat(): string;
        getDropdownNarration(): $Component;
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        isAutoConfirm(): boolean;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        getSyncMessage(): $Component;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        get clientSide(): boolean;
        get autoDefaultProfile(): boolean;
        get screenTitleFormat(): string;
        get dropdownNarration(): $Component;
        get autoConfirm(): boolean;
        get syncMessage(): $Component;
    }
}
