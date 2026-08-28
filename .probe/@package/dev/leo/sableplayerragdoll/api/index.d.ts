import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Enum } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/dev/leo/sableplayerragdoll/api" {
    export class $RagdollInteractEvent extends $Event implements $ICancellableEvent {
        pos(): $BlockPos;
        level(): $ServerLevel;
        player(): $ServerPlayer;
        rootId(): $UUID;
        partId(): $UUID;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ServerPlayer, arg1: $UUID_, arg2: $UUID_, arg3: $BlockPos_, arg4: $ServerLevel);
    }
    export class $RagdollStartEvent extends $Event implements $ICancellableEvent {
        setVelocity(arg0: $Vec3_): void;
        velocity(): $Vec3;
        player(): $ServerPlayer;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ServerPlayer, arg1: $Vec3_);
    }
    export class $RagdollEndEvent$Reason extends $Enum<$RagdollEndEvent$Reason> {
        static values(): $RagdollEndEvent$Reason[];
        static valueOf(arg0: string): $RagdollEndEvent$Reason;
        static PLAYER_DEATH: $RagdollEndEvent$Reason;
        static RELEASED: $RagdollEndEvent$Reason;
        static EXPIRED: $RagdollEndEvent$Reason;
        static PLAYER_LOGOUT: $RagdollEndEvent$Reason;
    }
    /**
     * Values that may be interpreted as {@link $RagdollEndEvent$Reason}.
     */
    export type $RagdollEndEvent$Reason_ = "expired" | "released" | "player_death" | "player_logout";
    export class $RagdollEndEvent extends $Event {
        reason(): $RagdollEndEvent$Reason;
        player(): $ServerPlayer;
        exitVelocity(): $Vec3;
        constructor(arg0: $ServerPlayer, arg1: $Vec3_, arg2: $RagdollEndEvent$Reason_);
    }
}
