import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/leo/sableplayerragdoll/mob/api" {
    export class $MobRagdollEndEvent$Reason extends $Enum<$MobRagdollEndEvent$Reason> {
        static values(): $MobRagdollEndEvent$Reason[];
        static valueOf(arg0: string): $MobRagdollEndEvent$Reason;
        static ENTITY_REMOVED: $MobRagdollEndEvent$Reason;
        static RELEASED: $MobRagdollEndEvent$Reason;
        static EXPIRED: $MobRagdollEndEvent$Reason;
        static ENTITY_DEATH: $MobRagdollEndEvent$Reason;
    }
    /**
     * Values that may be interpreted as {@link $MobRagdollEndEvent$Reason}.
     */
    export type $MobRagdollEndEvent$Reason_ = "expired" | "released" | "entity_death" | "entity_removed";
    export class $MobRagdollEndEvent extends $Event {
        reason(): $MobRagdollEndEvent$Reason;
        entity(): $LivingEntity;
        exitVelocity(): $Vec3;
        constructor(arg0: $LivingEntity, arg1: $Vec3_, arg2: $MobRagdollEndEvent$Reason_);
    }
    export class $MobRagdollStartEvent extends $Event implements $ICancellableEvent {
        entity(): $LivingEntity;
        setVelocity(arg0: $Vec3_): void;
        velocity(): $Vec3;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $Vec3_);
    }
}
