import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RagdollEndEvent$Reason_, $RagdollStartEvent as $RagdollStartEvent$1, $RagdollEndEvent as $RagdollEndEvent$1 } from "@package/dev/leo/sableplayerragdoll/api";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/leo/sableplayerragdoll/neoforge/event" {
    /**
     * @deprecated
     */
    export class $RagdollStartEvent extends $RagdollStartEvent$1 {
        constructor(arg0: $ServerPlayer, arg1: $Vec3_);
    }
    /**
     * @deprecated
     */
    export class $RagdollEndEvent extends $RagdollEndEvent$1 {
        constructor(arg0: $ServerPlayer, arg1: $Vec3_, arg2: $RagdollEndEvent$Reason_);
    }
}
