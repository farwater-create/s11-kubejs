export * as accessors from "@package/net/liukrast/deployer/lib/mixin/accessors";

declare module "@package/net/liukrast/deployer/lib/mixin" {
    export class $FactoryPanelSupportAccessor {
    }
    export interface $FactoryPanelSupportAccessor {
        deployer$setChanged(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelSupportAccessor}.
     */
    export type $FactoryPanelSupportAccessor_ = ((arg0: boolean) => void);
}
