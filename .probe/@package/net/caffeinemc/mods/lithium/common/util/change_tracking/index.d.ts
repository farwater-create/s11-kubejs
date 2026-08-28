import { $ItemStack_ } from "@package/net/minecraft/world/item";

declare module "@package/net/caffeinemc/mods/lithium/common/util/change_tracking" {
    export class $ChangeSubscriber<T> {
        static combine<T>(arg0: $ChangeSubscriber<T>, arg1: number, arg2: $ChangeSubscriber<T>, arg3: number): $ChangeSubscriber<T>;
        static without<T>(arg0: $ChangeSubscriber<T>, arg1: $ChangeSubscriber<T>, arg2: number, arg3: boolean): $ChangeSubscriber<T>;
        static without<T>(arg0: $ChangeSubscriber<T>, arg1: $ChangeSubscriber<T>): $ChangeSubscriber<T>;
        static dataWithout<T>(arg0: $ChangeSubscriber<T>, arg1: $ChangeSubscriber<T>, arg2: number, arg3: number, arg4: boolean): number;
        static dataWithout<T>(arg0: $ChangeSubscriber<T>, arg1: $ChangeSubscriber<T>, arg2: number): number;
        static containsSubscriber(arg0: $ChangeSubscriber<$ItemStack_>, arg1: number, arg2: $ChangeSubscriber<$ItemStack_>, arg3: number): boolean;
        static dataOf(arg0: $ChangeSubscriber<never>, arg1: $ChangeSubscriber<never>, arg2: number): number;
    }
    export interface $ChangeSubscriber<T> {
        lithium$notify(arg0: T, arg1: number): void;
        lithium$forceUnsubscribe(arg0: T, arg1: number): void;
    }
    export class $ChangePublisher<T> {
    }
    export interface $ChangePublisher<T> {
        lithium$isSubscribedWithData(arg0: $ChangeSubscriber<$ItemStack_>, arg1: number): boolean;
        lithium$subscribe(arg0: $ChangeSubscriber<T>, arg1: number): void;
        lithium$unsubscribe(arg0: $ChangeSubscriber<T>): number;
        lithium$unsubscribeWithData(arg0: $ChangeSubscriber<T>, arg1: number): void;
    }
    export class $ChangeSubscriber$CountChangeSubscriber<T> {
    }
    export interface $ChangeSubscriber$CountChangeSubscriber<T> extends $ChangeSubscriber<T> {
        lithium$notifyCount(arg0: T, arg1: number, arg2: number): void;
    }
    export class $ChangeSubscriber$EnchantmentSubscriber<T> {
    }
    export interface $ChangeSubscriber$EnchantmentSubscriber<T> extends $ChangeSubscriber<T> {
        lithium$notifyAfterEnchantmentChange(arg0: T, arg1: number): void;
    }
}
