import { $Duration_ } from "@package/java/time";
import { $Consumer_ } from "@package/java/util/function";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Callable_, $TimeUnit_, $Executor_ } from "@package/java/util/concurrent";
import { $Record, $Exception } from "@package/java/lang";
import { $TimeSource_ } from "@package/net/minecraft/util";

declare module "@package/com/mojang/realmsclient/gui/task" {
    export class $DataFetcher$Subscription {
        reset(): void;
        subscribe<T>(task: $DataFetcher$Task<T>, output: $Consumer_<T>): void;
        tick(): void;
        forceUpdate(): void;
        constructor(arg0: $DataFetcher);
    }
    export class $DataFetcher {
        createTask<T>(id: string, updater: $Callable_<T>, period: $Duration_, repeatStrategy: $RepeatedDelayStrategy): $DataFetcher$Task<T>;
        createSubscription(): $DataFetcher$Subscription;
        constructor(executor: $Executor_, resolution: $TimeUnit_, timeSource: $TimeSource_);
    }
    export class $DataFetcher$SuccessfulComputationResult<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DataFetcher$SuccessfulComputationResult}.
     */
    export type $DataFetcher$SuccessfulComputationResult_<T> = { time?: number, value?: any,  } | [time?: number, value?: any, ];
    export class $DataFetcher$ComputationResult<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DataFetcher$ComputationResult}.
     */
    export type $DataFetcher$ComputationResult_<T> = { time?: number, value?: $Either<any, $Exception>,  } | [time?: number, value?: $Either<any, $Exception>, ];
    export class $DataFetcher$SubscribedTask<T> {
    }
    export class $RepeatedDelayStrategy {
        static exponentialBackoff(maxFailureDelay: number): $RepeatedDelayStrategy;
        static CONSTANT: $RepeatedDelayStrategy;
    }
    export interface $RepeatedDelayStrategy {
        delayCyclesAfterFailure(): number;
        delayCyclesAfterSuccess(): number;
    }
    export class $DataFetcher$Task<T> {
        reset(): void;
    }
}
