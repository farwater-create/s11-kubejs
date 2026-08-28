import { $ReadonlyStamina_, $ReadonlyStamina } from "@package/com/alrex/parcool/common/attachment/common";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/alrex/parcool/common/stamina" {
    export class $IParCoolStaminaHandler {
    }
    export interface $IParCoolStaminaHandler {
        consume(arg0: $LocalPlayer, arg1: $ReadonlyStamina_, arg2: number): $ReadonlyStamina;
        recover(arg0: $LocalPlayer, arg1: $ReadonlyStamina_, arg2: number): $ReadonlyStamina;
        shouldShowHUD(arg0: $LocalPlayer): boolean;
        onTick(arg0: $LocalPlayer, arg1: $ReadonlyStamina_): $ReadonlyStamina;
        shouldImposeExhaustionPenalty(arg0: $LocalPlayer, arg1: $ReadonlyStamina_): boolean;
        initializeStamina(arg0: $LocalPlayer, arg1: $ReadonlyStamina_): $ReadonlyStamina;
        processOnServer(arg0: $Player, arg1: number): void;
        isExternalStamina(): boolean;
        get externalStamina(): boolean;
    }
    export class $StaminaType extends $Enum<$StaminaType> {
        static values(): $StaminaType[];
        static valueOf(arg0: string): $StaminaType;
        newHandler(arg0: $Player): $IParCoolStaminaHandler;
        static EPIC_FIGHT: $StaminaType;
        static PARCOOL: $StaminaType;
        static NONE: $StaminaType;
        static HUNGER: $StaminaType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $StaminaType>;
        static PARAGLIDER: $StaminaType;
    }
    /**
     * Values that may be interpreted as {@link $StaminaType}.
     */
    export type $StaminaType_ = "none" | "parcool" | "hunger" | "paraglider" | "epic_fight";
}
