import { $Supplier_ } from "@package/java/util/function";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Parkourability } from "@package/com/alrex/parcool/common/attachment/common";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Comparable, $Enum } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $RenderFrameEvent } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/alrex/parcool/common/action" {
    export class $Action {
        finish(arg0: $Player): void;
        start(arg0: $Player, arg1: $Parkourability, arg2: $ByteBuffer): void;
        onStart(arg0: $Player, arg1: $Parkourability, arg2: $ByteBuffer): void;
        onClientTick(arg0: $Player, arg1: $Parkourability): void;
        onStopInServer(arg0: $Player): void;
        isJustStarted(): boolean;
        getStatusValue(arg0: $LocalPlayer, arg1: $Parkourability): number;
        onRenderTick(arg0: $RenderFrameEvent, arg1: $Player, arg2: $Parkourability): void;
        onWorkingTick(arg0: $Player, arg1: $Parkourability): void;
        tick(): void;
        onServerTick(arg0: $Player, arg1: $Parkourability): void;
        getStaminaConsumeTiming(): $StaminaConsumeTiming;
        onWorkingTickInClient(arg0: $Player, arg1: $Parkourability): void;
        onStopInLocalClient(arg0: $Player): void;
        canContinue(arg0: $Player, arg1: $Parkourability): boolean;
        getDoingTick(): number;
        onStartInServer(arg0: $Player, arg1: $Parkourability, arg2: $ByteBuffer): void;
        getNotDoingTick(): number;
        isDoing(): boolean;
        restoreSynchronizedState(arg0: $ByteBuffer): void;
        wantsToShowStatusBar(arg0: $LocalPlayer, arg1: $Parkourability): boolean;
        onStopInOtherClient(arg0: $Player): void;
        onStartInLocalClient(arg0: $Player, arg1: $Parkourability, arg2: $ByteBuffer): void;
        onStartInOtherClient(arg0: $Player, arg1: $Parkourability, arg2: $ByteBuffer): void;
        onWorkingTickInServer(arg0: $Player, arg1: $Parkourability): void;
        saveSynchronizedState(arg0: $ByteBuffer): void;
        onWorkingTickInOtherClient(arg0: $Player, arg1: $Parkourability): void;
        onWorkingTickInLocalClient(arg0: $Player, arg1: $Parkourability): void;
        getTickFromLastStarted(): number;
        canStart(arg0: $Player, arg1: $Parkourability, arg2: $ByteBuffer): boolean;
        onStop(arg0: $Player): void;
        onTick(arg0: $Player, arg1: $Parkourability): void;
        constructor();
        get justStarted(): boolean;
        get staminaConsumeTiming(): $StaminaConsumeTiming;
        get doingTick(): number;
        get notDoingTick(): number;
        get doing(): boolean;
        get tickFromLastStarted(): number;
    }
    export class $BehaviorEnforcer$ID implements $Comparable<$BehaviorEnforcer$ID> {
        compareTo(arg0: $BehaviorEnforcer$ID): number;
    }
    export class $StaminaConsumeTiming extends $Enum<$StaminaConsumeTiming> {
        static values(): $StaminaConsumeTiming[];
        static valueOf(arg0: string): $StaminaConsumeTiming;
        static OnWorking: $StaminaConsumeTiming;
        static OnStart: $StaminaConsumeTiming;
        static None: $StaminaConsumeTiming;
    }
    /**
     * Values that may be interpreted as {@link $StaminaConsumeTiming}.
     */
    export type $StaminaConsumeTiming_ = "none" | "onstart" | "onworking";
    export class $BehaviorEnforcer {
        addMarkerCancellingSneak(arg0: $BehaviorEnforcer$ID, arg1: $BehaviorEnforcer$Marker_): void;
        setMarkerEnforcePosition(arg0: $BehaviorEnforcer$Marker_, arg1: $Supplier_<$Vec3>): void;
        getEnforcedMovePoint(): $Vec3;
        cancelSprint(): boolean;
        addMarkerCancellingFallFlying(arg0: $BehaviorEnforcer$ID, arg1: $BehaviorEnforcer$Marker_): void;
        addMarkerCancellingDescendFromEdge(arg0: $BehaviorEnforcer$ID, arg1: $BehaviorEnforcer$Marker_): void;
        cancelJump(): boolean;
        getEnforcedPosition(): $Vec3;
        cancelDescendFromEdge(): boolean;
        addMarkerCancellingShowName(arg0: $BehaviorEnforcer$ID, arg1: $BehaviorEnforcer$Marker_): void;
        cancelShowingName(): boolean;
        static newID(): $BehaviorEnforcer$ID;
        addMarkerCancellingJump(arg0: $BehaviorEnforcer$ID, arg1: $BehaviorEnforcer$Marker_): void;
        setMarkerEnforceMovePoint(arg0: $BehaviorEnforcer$Marker_, arg1: $Supplier_<$Vec3>): void;
        addMarkerCancellingSprint(arg0: $BehaviorEnforcer$ID, arg1: $BehaviorEnforcer$Marker_): void;
        cancelSneak(): boolean;
        cancelFallFlying(): boolean;
        constructor();
        get enforcedMovePoint(): $Vec3;
        get enforcedPosition(): $Vec3;
    }
    export class $AdditionalProperties {
        getPreviousNotLandingTick(): number;
        getLastSprintingTick(): number;
        getTickAfterLastJump(): number;
        onJump(): void;
        getNotSprintingTick(): number;
        getSprintingTick(): number;
        isInAirByJumping(): boolean;
        getActualNotLandingTick(): number;
        getNotInWaterTick(): number;
        getNotLandingTick(): number;
        getLandingTick(): number;
        onTick(arg0: $Player, arg1: $Parkourability): void;
        getNotCreativeFlyingTick(): number;
        getInWaterTick(): number;
        getSneakingTick(): number;
        getNotSneakingTick(): number;
        getLastSneakingTick(): number;
        constructor();
        get previousNotLandingTick(): number;
        get lastSprintingTick(): number;
        get tickAfterLastJump(): number;
        get notSprintingTick(): number;
        get sprintingTick(): number;
        get inAirByJumping(): boolean;
        get actualNotLandingTick(): number;
        get notInWaterTick(): number;
        get notLandingTick(): number;
        get landingTick(): number;
        get notCreativeFlyingTick(): number;
        get inWaterTick(): number;
        get sneakingTick(): number;
        get notSneakingTick(): number;
        get lastSneakingTick(): number;
    }
    export class $BehaviorEnforcer$Marker {
    }
    export interface $BehaviorEnforcer$Marker {
        remain(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BehaviorEnforcer$Marker}.
     */
    export type $BehaviorEnforcer$Marker_ = (() => boolean);
}
