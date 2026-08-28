import { $Action } from "@package/com/alrex/parcool/common/action";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/com/alrex/parcool/api/unstable/action" {
    export class $ParCoolActionEvent$Finish$Post extends $ParCoolActionEvent$Finish {
        constructor(arg0: $Player, arg1: $Action);
    }
    export class $ParCoolActionEvent$Start extends $ParCoolActionEvent {
    }
    export class $ParCoolActionEvent$Start$Post extends $ParCoolActionEvent$Start {
        constructor(arg0: $Player, arg1: $Action);
    }
    export class $ParCoolActionEvent$Finish$Pre extends $ParCoolActionEvent$Finish {
        constructor(arg0: $Player, arg1: $Action);
    }
    /**
     * @deprecated
     */
    export class $ParCoolActionEvent$StopEvent extends $ParCoolActionEvent {
        constructor(arg0: $Player, arg1: $Action);
    }
    /**
     * @deprecated
     */
    export class $ParCoolActionEvent$TryToStartEvent extends $ParCoolActionEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $Action);
    }
    export class $ParCoolActionEvent$Tick extends $ParCoolActionEvent {
    }
    export class $ParCoolActionEvent$TryToContinue extends $ParCoolActionEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $Action);
    }
    export class $ParCoolActionEvent$TryToStart extends $ParCoolActionEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $Action);
    }
    /**
     * @deprecated
     */
    export class $ParCoolActionEvent$TryToContinueEvent extends $ParCoolActionEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $Action);
    }
    export class $ParCoolActionEvent$Tick$Pre extends $ParCoolActionEvent$Tick {
        constructor(arg0: $Player, arg1: $Action);
    }
    export class $ParCoolActionEvent$Tick$Post extends $ParCoolActionEvent$Tick {
        constructor(arg0: $Player, arg1: $Action);
    }
    export class $ParCoolActionEvent extends $Event {
        getAction(): $Action;
        getPlayer(): $Player;
        constructor(arg0: $Player, arg1: $Action);
        get action(): $Action;
        get player(): $Player;
    }
    export class $ParCoolActionEvent$Finish extends $ParCoolActionEvent {
    }
    export class $ParCoolActionEvent$Start$Pre extends $ParCoolActionEvent$Start {
        constructor(arg0: $Player, arg1: $Action);
    }
    /**
     * @deprecated
     */
    export class $ParCoolActionEvent$StartEvent extends $ParCoolActionEvent {
        constructor(arg0: $Player, arg1: $Action);
    }
}
