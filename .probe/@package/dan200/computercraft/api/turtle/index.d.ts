import { $Level } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $UpgradeType, $UpgradeBase, $UpgradeData_, $UpgradeData } from "@package/dan200/computercraft/api/upgrades";
import { $BlockPos, $BlockPos_, $Direction_, $Registry, $Direction } from "@package/net/minecraft/core";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Enum, $Object } from "@package/java/lang";
import { $MethodResult } from "@package/dan200/computercraft/api/lua";
import { $IPeripheral } from "@package/dan200/computercraft/api/peripheral";

declare module "@package/dan200/computercraft/api/turtle" {
    export class $TurtleCommand {
    }
    export interface $TurtleCommand {
        execute(arg0: $ITurtleAccess): $TurtleCommandResult;
    }
    /**
     * Values that may be interpreted as {@link $TurtleCommand}.
     */
    export type $TurtleCommand_ = ((arg0: $ITurtleAccess) => $TurtleCommandResult);
    export class $TurtleVerb extends $Enum<$TurtleVerb> {
        static values(): $TurtleVerb[];
        static valueOf(arg0: string): $TurtleVerb;
        static DIG: $TurtleVerb;
        static ATTACK: $TurtleVerb;
    }
    /**
     * Values that may be interpreted as {@link $TurtleVerb}.
     */
    export type $TurtleVerb_ = "dig" | "attack";
    export class $ITurtleAccess {
    }
    export interface $ITurtleAccess {
        getPosition(): $BlockPos;
        getLevel(): $Level;
        getSelectedSlot(): number;
        setSelectedSlot(arg0: number): void;
        getPeripheral(arg0: $TurtleSide_): $IPeripheral;
        executeCommand(arg0: $TurtleCommand_): $MethodResult;
        getUpgradeData(arg0: $TurtleSide_): $DataComponentPatch;
        getDirection(): $Direction;
        getInventory(): $Container;
        setColour(arg0: number): void;
        teleportTo(arg0: $Level, arg1: $BlockPos_): boolean;
        isRemoved(): boolean;
        getColour(): number;
        consumeFuel(arg0: number): boolean;
        setDirection(arg0: $Direction_): void;
        getUpgradeWithData(arg0: $TurtleSide_): $UpgradeData<$ITurtleUpgrade>;
        setUpgradeData(arg0: $TurtleSide_, arg1: $DataComponentPatch_): void;
        isFuelNeeded(): boolean;
        getOwningPlayer(): $GameProfile;
        playAnimation(arg0: $TurtleAnimation_): void;
        setFuelLevel(arg0: number): void;
        getFuelLevel(): number;
        getFuelLimit(): number;
        getUpgrade(arg0: $TurtleSide_): $ITurtleUpgrade;
        setUpgrade(arg0: $TurtleSide_, arg1: $UpgradeData_<$ITurtleUpgrade>): void;
        addFuel(arg0: number): void;
        get position(): $BlockPos;
        get level(): $Level;
        get inventory(): $Container;
        get removed(): boolean;
        get fuelNeeded(): boolean;
        get owningPlayer(): $GameProfile;
        get fuelLimit(): number;
    }
    export class $TurtleSide extends $Enum<$TurtleSide> {
        static values(): $TurtleSide[];
        static valueOf(arg0: string): $TurtleSide;
        static LEFT: $TurtleSide;
        static RIGHT: $TurtleSide;
    }
    /**
     * Values that may be interpreted as {@link $TurtleSide}.
     */
    export type $TurtleSide_ = "left" | "right";
    export class $ITurtleUpgrade {
        static typeRegistry(): $ResourceKey<$Registry<$UpgradeType<$ITurtleUpgrade>>>;
        static createKey(arg0: $ResourceLocation_): $ResourceKey<$ITurtleUpgrade>;
        static REGISTRY: $ResourceKey<$Registry<$ITurtleUpgrade>>;
    }
    export interface $ITurtleUpgrade extends $UpgradeBase {
        update(arg0: $ITurtleAccess, arg1: $TurtleSide_): void;
        getType(): $UpgradeType<$ITurtleUpgrade>;
        getUpgradeType(): $TurtleUpgradeType;
        getPersistedData(arg0: $DataComponentPatch_): $DataComponentPatch;
        useTool(arg0: $ITurtleAccess, arg1: $TurtleSide_, arg2: $TurtleVerb_, arg3: $Direction_): $TurtleCommandResult;
        createPeripheral(arg0: $ITurtleAccess, arg1: $TurtleSide_): $IPeripheral;
        get type(): $UpgradeType<$ITurtleUpgrade>;
        get upgradeType(): $TurtleUpgradeType;
    }
    export class $TurtleCommandResult {
        static failure(): $TurtleCommandResult;
        static failure(arg0: string): $TurtleCommandResult;
        static success(): $TurtleCommandResult;
        static success(arg0: $Object[]): $TurtleCommandResult;
        getErrorMessage(): string;
        isSuccess(): boolean;
        getResults(): $Object[];
        get errorMessage(): string;
        get results(): $Object[];
    }
    export class $TurtleUpgradeType extends $Enum<$TurtleUpgradeType> {
        static values(): $TurtleUpgradeType[];
        static valueOf(arg0: string): $TurtleUpgradeType;
        isPeripheral(): boolean;
        isTool(): boolean;
        static PERIPHERAL: $TurtleUpgradeType;
        static BOTH: $TurtleUpgradeType;
        static TOOL: $TurtleUpgradeType;
        get peripheral(): boolean;
        get tool(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TurtleUpgradeType}.
     */
    export type $TurtleUpgradeType_ = "tool" | "peripheral" | "both";
    export class $TurtleAnimation extends $Enum<$TurtleAnimation> {
        static values(): $TurtleAnimation[];
        static valueOf(arg0: string): $TurtleAnimation;
        static TURN_RIGHT: $TurtleAnimation;
        static SWING_LEFT_TOOL: $TurtleAnimation;
        static MOVE_UP: $TurtleAnimation;
        static MOVE_DOWN: $TurtleAnimation;
        static TURN_LEFT: $TurtleAnimation;
        static MOVE_BACK: $TurtleAnimation;
        static MOVE_FORWARD: $TurtleAnimation;
        static NONE: $TurtleAnimation;
        static SWING_RIGHT_TOOL: $TurtleAnimation;
        static WAIT: $TurtleAnimation;
        static SHORT_WAIT: $TurtleAnimation;
    }
    /**
     * Values that may be interpreted as {@link $TurtleAnimation}.
     */
    export type $TurtleAnimation_ = "none" | "move_forward" | "move_back" | "move_up" | "move_down" | "turn_left" | "turn_right" | "swing_left_tool" | "swing_right_tool" | "wait" | "short_wait";
}
