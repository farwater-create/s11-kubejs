import { $Enum } from "@package/java/lang";

declare module "@package/dev/kosmx/playerAnim/api/firstPerson" {
    export class $FirstPersonConfiguration {
        isShowLeftItem(): boolean;
        isShowRightItem(): boolean;
        isShowRightArm(): boolean;
        isShowLeftArm(): boolean;
        setShowRightItem(showRightItem: boolean): $FirstPersonConfiguration;
        setShowRightArm(showRightArm: boolean): $FirstPersonConfiguration;
        setShowLeftItem(showLeftItem: boolean): $FirstPersonConfiguration;
        setShowLeftArm(showLeftArm: boolean): $FirstPersonConfiguration;
        constructor(showRightArm: boolean, showLeftArm: boolean, showRightItem: boolean, showLeftItem: boolean);
        constructor();
    }
    export class $FirstPersonMode extends $Enum<$FirstPersonMode> {
        static values(): $FirstPersonMode[];
        static valueOf(name: string): $FirstPersonMode;
        isEnabled(): boolean;
        static setFirstPersonPass(newValue: boolean): void;
        static isFirstPersonPass(): boolean;
        static DISABLED: $FirstPersonMode;
        static THIRD_PERSON_MODEL: $FirstPersonMode;
        static VANILLA: $FirstPersonMode;
        static NONE: $FirstPersonMode;
        get enabled(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FirstPersonMode}.
     */
    export type $FirstPersonMode_ = "none" | "vanilla" | "third_person_model" | "disabled";
}
