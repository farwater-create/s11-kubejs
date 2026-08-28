import { $Thread } from "@package/java/lang";

declare module "@package/me/srrapero720/dimthread/thread" {
    export class $IMutableMainThread {
    }
    export interface $IMutableMainThread {
        dimThreads$getMainThread(): $Thread;
        dimThreads$setMainThread(arg0: $Thread): void;
    }
}
