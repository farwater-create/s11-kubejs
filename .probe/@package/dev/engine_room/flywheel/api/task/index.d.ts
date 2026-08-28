import { $Executor } from "@package/java/util/concurrent";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/dev/engine_room/flywheel/api/task" {
    export class $Plan<C> {
    }
    export interface $Plan<C> {
        execute(arg0: $TaskExecutor, arg1: C, arg2: $Runnable_): void;
        execute(taskExecutor: $TaskExecutor, context: C): void;
        and(arg0: $Plan<C>): $Plan<C>;
        then(arg0: $Plan<C>): $Plan<C>;
    }
    export class $TaskExecutor {
    }
    export interface $TaskExecutor extends $Executor {
        threadCount(): number;
    }
}
