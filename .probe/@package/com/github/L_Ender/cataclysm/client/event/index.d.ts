import { $HumanoidModel } from "@package/net/minecraft/client/model";
import { $Event } from "@package/net/neoforged/bus/api";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";

declare module "@package/com/github/L_Ender/cataclysm/client/event" {
    export class $EventPosePlayerHand$Result extends $Enum<$EventPosePlayerHand$Result> {
        static values(): $EventPosePlayerHand$Result[];
        static valueOf(arg0: string): $EventPosePlayerHand$Result;
        static DENY: $EventPosePlayerHand$Result;
        static ALLOW: $EventPosePlayerHand$Result;
        static DEFAULT: $EventPosePlayerHand$Result;
    }
    /**
     * Values that may be interpreted as {@link $EventPosePlayerHand$Result}.
     */
    export type $EventPosePlayerHand$Result_ = "allow" | "default" | "deny";
    export class $EventPosePlayerHand extends $Event {
        getResult(): $EventPosePlayerHand$Result;
        setResult(arg0: $EventPosePlayerHand$Result_): void;
        getEntityIn(): $Entity;
        getModel(): $HumanoidModel<any>;
        isLeftHand(): boolean;
        constructor(arg0: $LivingEntity, arg1: $HumanoidModel<any>, arg2: boolean);
        get entityIn(): $Entity;
        get model(): $HumanoidModel<any>;
        get leftHand(): boolean;
    }
}
