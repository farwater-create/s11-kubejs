import { $AzAnimationControllerContainer } from "@package/mod/azure/azurelib/common/animation/controller";
import { $AzBoneCache } from "@package/mod/azure/azurelib/common/animation/cache";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AzBakedAnimation } from "@package/mod/azure/azurelib/common/animation/primitive";
import { $Record } from "@package/java/lang";
export * as play_behavior from "@package/mod/azure/azurelib/common/animation/play_behavior";
export * as controller from "@package/mod/azure/azurelib/common/animation/controller";
export * as primitive from "@package/mod/azure/azurelib/common/animation/primitive";
export * as dispatch from "@package/mod/azure/azurelib/common/animation/dispatch";
export * as easing from "@package/mod/azure/azurelib/common/animation/easing";
export * as cache from "@package/mod/azure/azurelib/common/animation/cache";
export * as property from "@package/mod/azure/azurelib/common/animation/property";

declare module "@package/mod/azure/azurelib/common/animation" {
    export class $AzAnimator<K, T> {
        context(): $AzAnimationContext<T>;
        getAnimationControllerContainer(): $AzAnimationControllerContainer<T>;
        getAnimationLocation(arg0: T): $ResourceLocation;
        createAzAnimationTimer(arg0: $AzAnimatorConfig_): $AzAnimationTimer;
        setCustomAnimations(arg0: T, arg1: number): void;
        registerControllers(arg0: $AzAnimationControllerContainer<T>): void;
        animate(arg0: T, arg1: number, arg2: boolean): void;
        animate(arg0: T, arg1: number): void;
        createBoneCache(): $AzBoneCache;
        getOrCreateContext(arg0: K): $AzAnimationContext<T>;
        getAnimation(arg0: T, arg1: string): $AzBakedAnimation;
        reloadAnimations: boolean;
        get animationControllerContainer(): $AzAnimationControllerContainer<T>;
    }
    export class $AzAnimationTimer {
        tick(): void;
        getAnimTime(): number;
        constructor(arg0: $AzAnimatorConfig_);
        get animTime(): number;
    }
    export class $AzAnimatorConfig$Builder {
        build(): $AzAnimatorConfig;
        crashIfBoneMissing(): $AzAnimatorConfig$Builder;
        withBoneResetTime(arg0: number): $AzAnimatorConfig$Builder;
        shouldPlayAnimationsWhileGamePaused(): $AzAnimatorConfig$Builder;
    }
    export class $AzAnimationContext<T> {
        config(): $AzAnimatorConfig;
        timer(): $AzAnimationTimer;
        boneCache(): $AzBoneCache;
        animatable(): T;
        constructor(arg0: $AzBoneCache, arg1: $AzAnimatorConfig_, arg2: $AzAnimationTimer);
    }
    export class $AzAnimatorAccessor<K, T> {
        static get<K, T>(arg0: T): ($AzAnimator<K, T>) | undefined;
        static cast<K, T>(arg0: T): $AzAnimatorAccessor<K, T>;
        static getOrNull<K, T>(arg0: T): $AzAnimator<K, T>;
    }
    export interface $AzAnimatorAccessor<K, T> {
        getAnimator(): ($AzAnimator<K, T>) | undefined;
        getAnimatorOrNull(): $AzAnimator<K, T>;
        setAnimator(arg0: $AzAnimator<K, T>): void;
        get animatorOrNull(): $AzAnimator<K, T>;
    }
    export class $AzAnimatorConfig extends $Record {
        static builder(): $AzAnimatorConfig$Builder;
        static defaultConfig(): $AzAnimatorConfig;
        crashIfBoneMissing(): boolean;
        boneResetTime(): number;
        shouldPlayAnimationsWhileGamePaused(): boolean;
        constructor(boneResetTime: number, crashIfBoneMissing: boolean, shouldPlayAnimationsWhileGamePaused: boolean);
    }
    /**
     * Values that may be interpreted as {@link $AzAnimatorConfig}.
     */
    export type $AzAnimatorConfig_ = { boneResetTime?: number, shouldPlayAnimationsWhileGamePaused?: boolean, crashIfBoneMissing?: boolean,  } | [boneResetTime?: number, shouldPlayAnimationsWhileGamePaused?: boolean, crashIfBoneMissing?: boolean, ];
}
