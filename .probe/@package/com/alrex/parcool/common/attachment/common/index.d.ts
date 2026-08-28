import { $Action, $AdditionalProperties, $BehaviorEnforcer } from "@package/com/alrex/parcool/common/action";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ActionInfo, $ServerLimitation, $ClientSetting } from "@package/com/alrex/parcool/common/info";
import { $ParCoolConfig$Server$Integers_, $ParCoolConfig$Client$Doubles_, $ParCoolConfig$Client$Integers_, $ParCoolConfig$Client$Booleans_, $ParCoolConfig$Server$Doubles_, $ParCoolConfig$Server$Booleans_ } from "@package/com/alrex/parcool/config";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Class } from "@package/java/lang";
import { $List } from "@package/java/util";

declare module "@package/com/alrex/parcool/common/attachment/common" {
    export class $Parkourability {
        get<T extends $Action>(arg0: $Class<T>): T;
        static get(arg0: $Player): $Parkourability;
        getList(): $List<$Action>;
        incrementSynchronizeTrialCount(): void;
        isDoingAny(...arg0: $Class<$Action>[]): boolean;
        getServerLimitation(): $ServerLimitation;
        getLimitedValue(arg0: $ParCoolConfig$Client$Integers_, arg1: $ParCoolConfig$Server$Integers_): number;
        getLimitedValue(arg0: $ParCoolConfig$Client$Booleans_, arg1: $ParCoolConfig$Server$Booleans_): boolean;
        getLimitedValue(arg0: $ParCoolConfig$Client$Doubles_, arg1: $ParCoolConfig$Server$Doubles_): number;
        getActionInfo(): $ActionInfo;
        getAdditionalProperties(): $AdditionalProperties;
        isDoingNothing(): boolean;
        getClientInfo(): $ClientSetting;
        getSynchronizeTrialCount(): number;
        limitationIsNotSynced(): boolean;
        getBehaviorEnforcer(): $BehaviorEnforcer;
        CopyFrom(arg0: $Parkourability): void;
        trySyncLimitation(arg0: $LocalPlayer, arg1: $Parkourability): void;
        getActionID(arg0: $Action): number;
        getActionFromID(arg0: number): $Action;
        constructor();
        get list(): $List<$Action>;
        get serverLimitation(): $ServerLimitation;
        get actionInfo(): $ActionInfo;
        get additionalProperties(): $AdditionalProperties;
        get doingNothing(): boolean;
        get clientInfo(): $ClientSetting;
        get synchronizeTrialCount(): number;
        get behaviorEnforcer(): $BehaviorEnforcer;
    }
}
