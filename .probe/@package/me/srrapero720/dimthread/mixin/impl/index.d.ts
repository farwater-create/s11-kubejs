import { $IMutableMainThread } from "@package/me/srrapero720/dimthread/thread";
import { $Thread } from "@package/java/lang";

declare module "@package/me/srrapero720/dimthread/mixin/impl" {
    export class $ILevelMixin {
    }
    export interface $ILevelMixin extends $IMutableMainThread {
        dimThreads$getMainThread(): $Thread;
        dimThreads$setMainThread(arg0: $Thread): void;
    }
    export class $IntegerValueAccessor {
    }
    export interface $IntegerValueAccessor {
        getValue(): number;
        setValue(arg0: number): void;
    }
}
