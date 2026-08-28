import { $AzBoneSnapshot } from "@package/mod/azure/azurelib/common/model";
import { $AzAnimationControllerStateMachine } from "@package/mod/azure/azurelib/common/animation/controller/state/machine";
import { $AzBoneAnimationQueue, $AzKeyframeManager, $AzKeyframeCallbacks } from "@package/mod/azure/azurelib/common/animation/controller/keyframe";
import { $AzAnimator } from "@package/mod/azure/azurelib/common/animation";
import { $AzBoneCache } from "@package/mod/azure/azurelib/common/animation/cache";
import { $AzDispatchSide_ } from "@package/mod/azure/azurelib/common/animation/dispatch";
import { $AzAnimationSequence_ } from "@package/mod/azure/azurelib/common/animation/dispatch/command/sequence";
import { $AzAnimationProperties } from "@package/mod/azure/azurelib/common/animation/property";
import { $AzQueuedAnimation, $AzQueuedAnimation_ } from "@package/mod/azure/azurelib/common/animation/primitive";
import { $AzEasingType } from "@package/mod/azure/azurelib/common/animation/easing";
import { $Collection_, $List, $Collection } from "@package/java/util";
export * as keyframe from "@package/mod/azure/azurelib/common/animation/controller/keyframe";
export * as state from "@package/mod/azure/azurelib/common/animation/controller/state";

declare module "@package/mod/azure/azurelib/common/animation/controller" {
    export class $AzAnimationController<T> extends $AzAbstractAnimationController {
        run(arg0: $AzDispatchSide_, arg1: $AzAnimationSequence_): void;
        update(): void;
        static builder<T>(arg0: $AzAnimator<never, T>, arg1: string): $AzAnimationControllerBuilder<T>;
        currentAnimation(): $AzQueuedAnimation;
        stateMachine(): $AzAnimationControllerStateMachine<T>;
        setAnimationProperties(arg0: $AzAnimationProperties): void;
        tryCreateAnimationQueue(arg0: T, arg1: $AzAnimationSequence_): $List<$AzQueuedAnimation>;
        setCurrentAnimation(arg0: $AzQueuedAnimation_): void;
        animationProperties(): $AzAnimationProperties;
        boneAnimationQueueCache(): $AzBoneAnimationQueueCache<T>;
        controllerTimer(): $AzAnimationControllerTimer<T>;
        animationQueue(): $AzAnimationQueue;
        keyframeManager(): $AzKeyframeManager<T>;
        boneSnapshotCache(): $AzBoneSnapshotCache;
    }
    export class $AzAnimationQueue {
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $AzQueuedAnimation_): void;
        next(): $AzQueuedAnimation;
        addAll(arg0: $Collection_<$AzQueuedAnimation_>): void;
        peek(): $AzQueuedAnimation;
        constructor();
        get empty(): boolean;
    }
    export class $AzAnimationControllerContainer<T> {
        add(arg0: $AzAnimationController<T>, ...arg1: $AzAnimationController<T>[]): void;
        getAll(): $Collection<$AzAnimationController<T>>;
        getOrNull(arg0: string): $AzAnimationController<T>;
        constructor();
        get all(): $Collection<$AzAnimationController<T>>;
    }
    export class $AzBoneSnapshotCache {
        put(arg0: $AzQueuedAnimation_, arg1: $Collection_<$AzBoneSnapshot>): void;
        getOrNull(arg0: string): $AzBoneSnapshot;
        constructor();
    }
    export class $AzAnimationControllerTimer<T> {
        reset(): void;
        update(): void;
        getAdjustedTick(): number;
        addToAdjustedTick(arg0: number): void;
        constructor(arg0: $AzAnimationController<T>);
        get adjustedTick(): number;
    }
    export class $AzAbstractAnimationController {
        name(): string;
        hasAnimationFinished(): boolean;
    }
    export class $AzAnimationControllerBuilder<T> {
        build(): $AzAnimationController<T>;
        setAnimationSpeed(arg0: number): $AzAnimationControllerBuilder<T>;
        setStartTickOffset(arg0: number): $AzAnimationControllerBuilder<T>;
        setKeyframeCallbacks(arg0: $AzKeyframeCallbacks<T>): $AzAnimationControllerBuilder<T>;
        setTransitionLength(arg0: number): $AzAnimationControllerBuilder<T>;
        setEasingType(arg0: $AzEasingType): $AzAnimationControllerBuilder<T>;
        constructor(arg0: $AzAnimator<never, T>, arg1: string);
        set animationSpeed(value: number);
        set startTickOffset(value: number);
        set keyframeCallbacks(value: $AzKeyframeCallbacks<T>);
        set transitionLength(value: number);
        set easingType(value: $AzEasingType);
    }
    export class $AzBoneAnimationQueueCache<T> {
        values(): $Collection<$AzBoneAnimationQueue>;
        update(arg0: $AzEasingType): void;
        clear(): void;
        getOrNull(arg0: string): $AzBoneAnimationQueue;
        prepareFrame(): void;
        constructor(arg0: $AzBoneCache);
    }
}
