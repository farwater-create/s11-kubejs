import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Animation } from "@package/com/github/L_Ender/lionfishapi/server/animation";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";

declare module "@package/com/github/L_Ender/lionfishapi/server/event" {
    export class $AnimationEvent<T extends $Entity> extends $Event implements $ICancellableEvent {
        getEntity(): T;
        getAnimation(): $Animation;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        get entity(): T;
        get animation(): $Animation;
    }
    export class $StandOnFluidEvent extends $LivingEvent implements $ICancellableEvent {
        getFluidState(): $FluidState;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $FluidState);
        get fluidState(): $FluidState;
    }
    export class $AnimationEvent$Tick<T extends $Entity> extends $AnimationEvent<T> {
        getTick(): number;
        constructor(arg0: T, arg1: $Animation, arg2: number);
        get tick(): number;
    }
    export class $AnimationEvent$Start<T extends $Entity> extends $AnimationEvent<T> {
        setAnimation(arg0: $Animation): void;
        constructor(arg0: T, arg1: $Animation);
        set animation(value: $Animation);
    }
}
