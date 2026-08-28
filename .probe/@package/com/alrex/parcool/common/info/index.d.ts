import { $LocalStamina } from "@package/com/alrex/parcool/common/attachment/client";
import { $StaminaType } from "@package/com/alrex/parcool/common/stamina";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Action } from "@package/com/alrex/parcool/common/action";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ParCoolConfig$Server$Integers_, $ParCoolConfig$Client$Doubles_, $ParCoolConfig$Client$Integers_, $ParCoolConfig$Client$Booleans_, $ParCoolConfig$Server$Doubles_, $ParCoolConfig$Server$Booleans_ } from "@package/com/alrex/parcool/config";
import { $Class } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/alrex/parcool/common/info" {
    export class $ServerLimitation {
        get(arg0: $ParCoolConfig$Server$Doubles_): number;
        static get(arg0: $ServerPlayer): $ServerLimitation;
        get(arg0: $ParCoolConfig$Server$Booleans_): boolean;
        get(arg0: $ParCoolConfig$Server$Integers_): number;
        writeTo(arg0: $ByteBuf): void;
        static readFrom(arg0: $ByteBuf): $ServerLimitation;
        getStaminaConsumptionOf(arg0: $Class<$Action>): number;
        isSynced(): boolean;
        isPermitted(arg0: $Class<$Action>): boolean;
        getForcedStamina(): $StaminaType;
        static UNSYNCED_INSTANCE: $ServerLimitation;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLimitation>;
        constructor();
        get synced(): boolean;
        get forcedStamina(): $StaminaType;
    }
    export class $ActionInfo {
        getMaxStaminaLimit(): number;
        setClientSetting(arg0: $ClientSetting): void;
        getStaminaConsumptionOf(arg0: $Class<$Action>): number;
        getServerLimitation(): $ServerLimitation;
        getClientSetting(): $ClientSetting;
        can(arg0: $Class<$Action>): boolean;
        setServerLimitation(arg0: $ServerLimitation): void;
        isStaminaInfinite(arg0: $LocalStamina, arg1: $LocalPlayer): boolean;
        getStaminaRecoveryLimit(): number;
        updateStaminaType(arg0: $LocalStamina, arg1: $LocalPlayer): void;
        getStaminaType(): $StaminaType;
        isInfiniteStaminaPermitted(): boolean;
        constructor();
        get maxStaminaLimit(): number;
        get staminaRecoveryLimit(): number;
        get staminaType(): $StaminaType;
        get infiniteStaminaPermitted(): boolean;
    }
    export class $ClientSetting {
        get(arg0: $ParCoolConfig$Client$Integers_): number;
        get(arg0: $ParCoolConfig$Client$Booleans_): boolean;
        get(arg0: $ParCoolConfig$Client$Doubles_): number;
        writeTo(arg0: $ByteBuf): void;
        static readFrom(arg0: $ByteBuf): $ClientSetting;
        getStaminaConsumptionOf(arg0: $Class<$Action>): number;
        getPossibilityOf(arg0: $Class<$Action>): boolean;
        getRequestedStamina(): $StaminaType;
        static readFromLocalConfig(): $ClientSetting;
        static UNSYNCED_INSTANCE: $ClientSetting;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientSetting>;
        constructor();
        get requestedStamina(): $StaminaType;
    }
}
