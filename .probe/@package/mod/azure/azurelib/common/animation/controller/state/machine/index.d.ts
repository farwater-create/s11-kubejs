import { $AzAnimationController } from "@package/mod/azure/azurelib/common/animation/controller";
import { $AzAnimationContext } from "@package/mod/azure/azurelib/common/animation";
import { $AzAnimationState } from "@package/mod/azure/azurelib/common/animation/controller/state";
import { $Record } from "@package/java/lang";
import { $AzAnimationPauseState, $AzAnimationPlayState, $AzAnimationStopState, $AzAnimationTransitionState } from "@package/mod/azure/azurelib/common/animation/controller/state/impl";
import { $StateMachine, $StateMachineContext } from "@package/mod/azure/azurelib/common/util/state";

declare module "@package/mod/azure/azurelib/common/animation/controller/state/machine" {
    export class $AzAnimationControllerStateMachine$Context<T> implements $StateMachineContext {
        stateMachine(): $AzAnimationControllerStateMachine<T>;
        animationController(): $AzAnimationController<T>;
        animationContext(): $AzAnimationContext<T>;
    }
    export class $AzAnimationControllerStateMachine<T> extends $StateMachine<$AzAnimationControllerStateMachine$Context<T>, $AzAnimationState<T>> {
        update(): void;
        stop(): void;
        isTransitioning(): boolean;
        transition(): void;
        isPlaying(): boolean;
        createContext(): $AzAnimationControllerStateMachine$Context<$AzAnimationState<T>>;
        isStopped(): boolean;
        play(): void;
        pause(): void;
        isPaused(): boolean;
        constructor(arg0: $AzAnimationControllerStateMachine$StateHolder_<$AzAnimationState<T>>, arg1: $AzAnimationController<$AzAnimationState<T>>, arg2: $AzAnimationContext<$AzAnimationState<T>>);
        get transitioning(): boolean;
        get playing(): boolean;
        get stopped(): boolean;
        get paused(): boolean;
    }
    export class $AzAnimationControllerStateMachine$StateHolder<T> extends $Record {
        stopState(): $AzAnimationStopState<T>;
        playState(): $AzAnimationPlayState<T>;
        transitionState(): $AzAnimationTransitionState<T>;
        pauseState(): $AzAnimationPauseState<T>;
        constructor(playState: $AzAnimationPlayState<T>, pauseState: $AzAnimationPauseState<T>, stopState: $AzAnimationStopState<T>, transitionState: $AzAnimationTransitionState<T>);
    }
    /**
     * Values that may be interpreted as {@link $AzAnimationControllerStateMachine$StateHolder}.
     */
    export type $AzAnimationControllerStateMachine$StateHolder_<T> = { playState?: $AzAnimationPlayState<any>, stopState?: $AzAnimationStopState<any>, pauseState?: $AzAnimationPauseState<any>, transitionState?: $AzAnimationTransitionState<any>,  } | [playState?: $AzAnimationPlayState<any>, stopState?: $AzAnimationStopState<any>, pauseState?: $AzAnimationPauseState<any>, transitionState?: $AzAnimationTransitionState<any>, ];
}
