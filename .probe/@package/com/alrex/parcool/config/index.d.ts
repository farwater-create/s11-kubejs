import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ModConfigSpec$BooleanValue, $ModConfigSpec$DoubleValue, $ModConfigSpec$Builder, $ModConfigSpec$IntValue, $ModConfigSpec$ConfigValue } from "@package/net/neoforged/neoforge/common";

declare module "@package/com/alrex/parcool/config" {
    export class $ParCoolConfig$Client$Integers extends $Enum<$ParCoolConfig$Client$Integers> implements $ParCoolConfig$Item<number> {
        get(): number;
        static values(): $ParCoolConfig$Client$Integers[];
        static valueOf(arg0: string): $ParCoolConfig$Client$Integers;
        register(arg0: $ModConfigSpec$Builder): void;
        set(arg0: number): void;
        getPath(): string;
        readFromBuffer(arg0: $ByteBuf): number;
        writeToBuffer(arg0: $ByteBuf): void;
        getInternalInstance(): $ModConfigSpec$IntValue;
        Path: string;
        Group: $ParCoolConfig$ConfigGroup;
        Comment: string;
        static WallRunContinuableTick: $ParCoolConfig$Client$Integers;
        Translation: string;
        static AcceptableAngleOfWallJump: $ParCoolConfig$Client$Integers;
        Max: number;
        static HorizontalOffsetOfLightStaminaHUD: $ParCoolConfig$Client$Integers;
        static MaxSuccessiveDodgeCount: $ParCoolConfig$Client$Integers;
        static SuccessiveDodgeCoolTime: $ParCoolConfig$Client$Integers;
        static JustTimeBreakfallTick: $ParCoolConfig$Client$Integers;
        static CoyoteTime: $ParCoolConfig$Client$Integers;
        static DodgeCoolTime: $ParCoolConfig$Client$Integers;
        DefaultValue: number;
        static HorizontalOffsetOfStaminaHUD: $ParCoolConfig$Client$Integers;
        Min: number;
        static SlidingContinuableTick: $ParCoolConfig$Client$Integers;
        static VerticalOffsetOfLightStaminaHUD: $ParCoolConfig$Client$Integers;
        static VerticalOffsetOfStaminaHUD: $ParCoolConfig$Client$Integers;
        get path(): string;
        get internalInstance(): $ModConfigSpec$IntValue;
    }
    /**
     * Values that may be interpreted as {@link $ParCoolConfig$Client$Integers}.
     */
    export type $ParCoolConfig$Client$Integers_ = "acceptableangleofwalljump" | "horizontaloffsetofstaminahud" | "verticaloffsetofstaminahud" | "horizontaloffsetoflightstaminahud" | "verticaloffsetoflightstaminahud" | "wallruncontinuabletick" | "slidingcontinuabletick" | "successivedodgecooltime" | "dodgecooltime" | "maxsuccessivedodgecount" | "justtimebreakfalltick" | "coyotetime";
    export class $ParCoolConfig$Client$Doubles extends $Enum<$ParCoolConfig$Client$Doubles> implements $ParCoolConfig$Item<number> {
        get(): number;
        static values(): $ParCoolConfig$Client$Doubles[];
        static valueOf(arg0: string): $ParCoolConfig$Client$Doubles;
        register(arg0: $ModConfigSpec$Builder): void;
        set(arg0: number): void;
        getPath(): string;
        readFromBuffer(arg0: $ByteBuf): number;
        writeToBuffer(arg0: $ByteBuf): void;
        getInternalInstance(): $ModConfigSpec$DoubleValue;
        Path: string;
        Group: $ParCoolConfig$ConfigGroup;
        Comment: string;
        Translation: string;
        static FastRunSpeedModifier: $ParCoolConfig$Client$Doubles;
        Max: number;
        static DodgeSpeedModifier: $ParCoolConfig$Client$Doubles;
        static SkyDiveSpeedDecreaseRate: $ParCoolConfig$Client$Doubles;
        DefaultValue: number;
        Min: number;
        static DamageCompleteRemovableHeightBreakfall: $ParCoolConfig$Client$Doubles;
        static LowestFallDistanceForBreakfall: $ParCoolConfig$Client$Doubles;
        static DamageReductionRateBreakfall: $ParCoolConfig$Client$Doubles;
        static FastSwimSpeedModifier: $ParCoolConfig$Client$Doubles;
        get path(): string;
        get internalInstance(): $ModConfigSpec$DoubleValue;
    }
    /**
     * Values that may be interpreted as {@link $ParCoolConfig$Client$Doubles}.
     */
    export type $ParCoolConfig$Client$Doubles_ = "fastrunspeedmodifier" | "fastswimspeedmodifier" | "dodgespeedmodifier" | "skydivespeeddecreaserate" | "lowestfalldistanceforbreakfall" | "damagecompleteremovableheightbreakfall" | "damagereductionratebreakfall";
    export class $ParCoolConfig$Server$Booleans extends $Enum<$ParCoolConfig$Server$Booleans> implements $ParCoolConfig$Item<boolean> {
        get(): boolean;
        static values(): $ParCoolConfig$Server$Booleans[];
        static valueOf(arg0: string): $ParCoolConfig$Server$Booleans;
        register(arg0: $ModConfigSpec$Builder): void;
        set(arg0: boolean): void;
        getPath(): string;
        readFromBuffer(arg0: $ByteBuf): boolean;
        writeToBuffer(arg0: $ByteBuf): void;
        getInternalInstance(): $ModConfigSpec$BooleanValue;
        Path: string;
        Group: $ParCoolConfig$ConfigGroup;
        Comment: string;
        DefaultValue: boolean;
        static DodgeProvideInvulnerableFrame: $ParCoolConfig$Server$Booleans;
        static AllowInfiniteStamina: $ParCoolConfig$Server$Booleans;
        AdvantageousValue: boolean;
        static AllowDisableWallJumpCooldown: $ParCoolConfig$Server$Booleans;
        get path(): string;
        get internalInstance(): $ModConfigSpec$BooleanValue;
    }
    /**
     * Values that may be interpreted as {@link $ParCoolConfig$Server$Booleans}.
     */
    export type $ParCoolConfig$Server$Booleans_ = "allowinfinitestamina" | "allowdisablewalljumpcooldown" | "dodgeprovideinvulnerableframe";
    export class $ParCoolConfig$Server$Doubles extends $Enum<$ParCoolConfig$Server$Doubles> implements $ParCoolConfig$Item<number> {
        get(): number;
        static values(): $ParCoolConfig$Server$Doubles[];
        static valueOf(arg0: string): $ParCoolConfig$Server$Doubles;
        register(arg0: $ModConfigSpec$Builder): void;
        set(arg0: number): void;
        getPath(): string;
        readFromBuffer(arg0: $ByteBuf): number;
        writeToBuffer(arg0: $ByteBuf): void;
        getInternalInstance(): $ModConfigSpec$DoubleValue;
        Path: string;
        Group: $ParCoolConfig$ConfigGroup;
        Comment: string;
        static MaxDodgeSpeedModifier: $ParCoolConfig$Server$Doubles;
        static MinSkyDiveSpeedDecreaseRate: $ParCoolConfig$Server$Doubles;
        Max: number;
        static MaxFastRunSpeedModifier: $ParCoolConfig$Server$Doubles;
        static MaxDamageCompleteRemovableHeightBreakfall: $ParCoolConfig$Server$Doubles;
        static MaxDamageReductionRateBreakfall: $ParCoolConfig$Server$Doubles;
        Advantageous: $ParCoolConfig$AdvantageousDirection;
        static MaxFastSwimSpeedModifier: $ParCoolConfig$Server$Doubles;
        DefaultValue: number;
        Min: number;
        static MinLowestFallDistanceForBreakfall: $ParCoolConfig$Server$Doubles;
        get path(): string;
        get internalInstance(): $ModConfigSpec$DoubleValue;
    }
    /**
     * Values that may be interpreted as {@link $ParCoolConfig$Server$Doubles}.
     */
    export type $ParCoolConfig$Server$Doubles_ = "maxfastrunspeedmodifier" | "maxfastswimspeedmodifier" | "maxdodgespeedmodifier" | "minskydivespeeddecreaserate" | "minlowestfalldistanceforbreakfall" | "maxdamagecompleteremovableheightbreakfall" | "maxdamagereductionratebreakfall";
    export class $ParCoolConfig$AdvantageousDirection extends $Enum<$ParCoolConfig$AdvantageousDirection> {
        static values(): $ParCoolConfig$AdvantageousDirection[];
        static valueOf(arg0: string): $ParCoolConfig$AdvantageousDirection;
        static Lower: $ParCoolConfig$AdvantageousDirection;
        static Higher: $ParCoolConfig$AdvantageousDirection;
    }
    /**
     * Values that may be interpreted as {@link $ParCoolConfig$AdvantageousDirection}.
     */
    export type $ParCoolConfig$AdvantageousDirection_ = "lower" | "higher";
    export class $ParCoolConfig$ConfigGroup extends $Enum<$ParCoolConfig$ConfigGroup> {
        static values(): $ParCoolConfig$ConfigGroup[];
        static valueOf(arg0: string): $ParCoolConfig$ConfigGroup;
        static CameraAnimation: $ParCoolConfig$ConfigGroup;
        static Control: $ParCoolConfig$ConfigGroup;
        static HUD: $ParCoolConfig$ConfigGroup;
        static Animation: $ParCoolConfig$ConfigGroup;
        static Modifier: $ParCoolConfig$ConfigGroup;
        static Stamina: $ParCoolConfig$ConfigGroup;
        static Other: $ParCoolConfig$ConfigGroup;
    }
    /**
     * Values that may be interpreted as {@link $ParCoolConfig$ConfigGroup}.
     */
    export type $ParCoolConfig$ConfigGroup_ = "animation" | "cameraanimation" | "hud" | "modifier" | "control" | "stamina" | "other";
    export class $ParCoolConfig$Item<T> {
    }
    export interface $ParCoolConfig$Item<T> {
        get(): T;
        register(arg0: $ModConfigSpec$Builder): void;
        set(arg0: T): void;
        getPath(): string;
        readFromBuffer(arg0: $ByteBuf): T;
        writeToBuffer(arg0: $ByteBuf): void;
        getInternalInstance(): $ModConfigSpec$ConfigValue<T>;
        get path(): string;
        get internalInstance(): $ModConfigSpec$ConfigValue<T>;
    }
    export class $ParCoolConfig$Client$Booleans extends $Enum<$ParCoolConfig$Client$Booleans> implements $ParCoolConfig$Item<boolean> {
        get(): boolean;
        static values(): $ParCoolConfig$Client$Booleans[];
        static valueOf(arg0: string): $ParCoolConfig$Client$Booleans;
        register(arg0: $ModConfigSpec$Builder): void;
        set(arg0: boolean): void;
        getPath(): string;
        readFromBuffer(arg0: $ByteBuf): boolean;
        writeToBuffer(arg0: $ByteBuf): void;
        getInternalInstance(): $ModConfigSpec$BooleanValue;
        static EnableActionParticles: $ParCoolConfig$Client$Booleans;
        Group: $ParCoolConfig$ConfigGroup;
        static EnableCrawlInAir: $ParCoolConfig$Client$Booleans;
        static SubstituteSprintForFastRun: $ParCoolConfig$Client$Booleans;
        static EnableCameraAnimationOfVault: $ParCoolConfig$Client$Booleans;
        static EnableJustTimeEffectOfBreakfall: $ParCoolConfig$Client$Booleans;
        static EnableAnimation: $ParCoolConfig$Client$Booleans;
        static Enable3DRenderingForZipline: $ParCoolConfig$Client$Booleans;
        static EnableFallingAnimation: $ParCoolConfig$Client$Booleans;
        static EnableCameraAnimationOfRolling: $ParCoolConfig$Client$Booleans;
        static EnableCameraAnimationOfBackWallJump: $ParCoolConfig$Client$Booleans;
        static EnableFPVAnimation: $ParCoolConfig$Client$Booleans;
        static VaultKeyPressedNeeded: $ParCoolConfig$Client$Booleans;
        DefaultValue: boolean;
        static ParCoolIsActive: $ParCoolConfig$Client$Booleans;
        static EnableVaultInAir: $ParCoolConfig$Client$Booleans;
        static ShowLightStaminaHUDAlways: $ParCoolConfig$Client$Booleans;
        static EnableCameraAnimationOfHangDown: $ParCoolConfig$Client$Booleans;
        static HideInBlockSneakNeeded: $ParCoolConfig$Client$Booleans;
        Path: string;
        Comment: string;
        static EnableActionSounds: $ParCoolConfig$Client$Booleans;
        Translation: string;
        static EnableActionParticlesOfJustTimeBreakfall: $ParCoolConfig$Client$Booleans;
        static EnableCameraAnimationOfDodge: $ParCoolConfig$Client$Booleans;
        static EnableStaminaExhaustionPenalty: $ParCoolConfig$Client$Booleans;
        static EnableCameraAnimationOfHWallRun: $ParCoolConfig$Client$Booleans;
        static EnableDoubleTappingForDodge: $ParCoolConfig$Client$Booleans;
        static CanGetOffStepsWhileDodge: $ParCoolConfig$Client$Booleans;
        static EnableLeanAnimationOfFastRun: $ParCoolConfig$Client$Booleans;
        static EnableRollWhenCreative: $ParCoolConfig$Client$Booleans;
        static HideStaminaHUDWhenStaminaIsInfinite: $ParCoolConfig$Client$Booleans;
        static EnableWallJumpCooldown: $ParCoolConfig$Client$Booleans;
        static ShowAutoResynchronizationNotification: $ParCoolConfig$Client$Booleans;
        static EnableCameraAnimationOfFlipping: $ParCoolConfig$Client$Booleans;
        static ShowActionStatusBar: $ParCoolConfig$Client$Booleans;
        get path(): string;
        get internalInstance(): $ModConfigSpec$BooleanValue;
    }
    /**
     * Values that may be interpreted as {@link $ParCoolConfig$Client$Booleans}.
     */
    export type $ParCoolConfig$Client$Booleans_ = "enableanimation" | "enablefallinganimation" | "enableleananimationoffastrun" | "enablefpvanimation" | "enablecameraanimationofdodge" | "enablecameraanimationofbackwalljump" | "enablecameraanimationofrolling" | "enablecameraanimationofflipping" | "enablecameraanimationofvault" | "enablecameraanimationofhwallrun" | "enablecameraanimationofhangdown" | "hidestaminahudwhenstaminaisinfinite" | "showactionstatusbar" | "showlightstaminahudalways" | "enablestaminaexhaustionpenalty" | "enabledoubletappingfordodge" | "enablewalljumpcooldown" | "enablecrawlinair" | "enablevaultinair" | "cangetoffstepswhiledodge" | "enablerollwhencreative" | "enablejusttimeeffectofbreakfall" | "enableactionsounds" | "enableactionparticles" | "enableactionparticlesofjusttimebreakfall" | "enable3drenderingforzipline" | "vaultkeypressedneeded" | "hideinblocksneakneeded" | "substitutesprintforfastrun" | "showautoresynchronizationnotification" | "parcoolisactive";
    export class $ParCoolConfig$Server$Integers extends $Enum<$ParCoolConfig$Server$Integers> implements $ParCoolConfig$Item<number> {
        get(): number;
        static values(): $ParCoolConfig$Server$Integers[];
        static valueOf(arg0: string): $ParCoolConfig$Server$Integers;
        register(arg0: $ModConfigSpec$Builder): void;
        set(arg0: number): void;
        getPath(): string;
        readFromBuffer(arg0: $ByteBuf): number;
        writeToBuffer(arg0: $ByteBuf): void;
        getInternalInstance(): $ModConfigSpec$IntValue;
        Path: string;
        Group: $ParCoolConfig$ConfigGroup;
        Comment: string;
        static MaxStaminaLimit: $ParCoolConfig$Server$Integers;
        Max: number;
        static MaxSuccessiveDodgeCount: $ParCoolConfig$Server$Integers;
        static SuccessiveDodgeCoolTime: $ParCoolConfig$Server$Integers;
        static MaxStaminaRecovery: $ParCoolConfig$Server$Integers;
        static MaxWallRunContinuableTick: $ParCoolConfig$Server$Integers;
        Advantageous: $ParCoolConfig$AdvantageousDirection;
        static DodgeCoolTime: $ParCoolConfig$Server$Integers;
        DefaultValue: number;
        Min: number;
        static MaxCoyoteTime: $ParCoolConfig$Server$Integers;
        static MaxSlidingContinuableTick: $ParCoolConfig$Server$Integers;
        static MaxJustTimeBreakfallTick: $ParCoolConfig$Server$Integers;
        get path(): string;
        get internalInstance(): $ModConfigSpec$IntValue;
    }
    /**
     * Values that may be interpreted as {@link $ParCoolConfig$Server$Integers}.
     */
    export type $ParCoolConfig$Server$Integers_ = "maxstaminalimit" | "maxstaminarecovery" | "successivedodgecooltime" | "dodgecooltime" | "maxsuccessivedodgecount" | "maxwallruncontinuabletick" | "maxslidingcontinuabletick" | "maxjusttimebreakfalltick" | "maxcoyotetime";
}
