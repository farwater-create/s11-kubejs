import { $StaminaType_, $IParCoolStaminaHandler } from "@package/com/alrex/parcool/common/stamina";
import { $LocalPlayer } from "@package/net/minecraft/client/player";

declare module "@package/com/alrex/parcool/common/attachment/client" {
    export class $LocalStamina {
        static get(arg0: $LocalPlayer): $LocalStamina;
        isInfinite(arg0: $LocalPlayer): boolean;
        getValue(arg0: $LocalPlayer): number;
        sync(arg0: $LocalPlayer): void;
        getHandler(): $IParCoolStaminaHandler;
        consume(arg0: $LocalPlayer, arg1: number): void;
        isAvailable(): boolean;
        getMax(arg0: $LocalPlayer): number;
        changeType(arg0: $LocalPlayer, arg1: $StaminaType_): void;
        recover(arg0: $LocalPlayer, arg1: number): void;
        shouldShowHUD(arg0: $LocalPlayer): boolean;
        isExhausted(arg0: $LocalPlayer): boolean;
        onTick(arg0: $LocalPlayer): void;
        imposeExhaustionPenalty(arg0: $LocalPlayer): boolean;
        isUsingExternalStamina(): boolean;
        constructor();
        get handler(): $IParCoolStaminaHandler;
        get available(): boolean;
        get usingExternalStamina(): boolean;
    }
}
