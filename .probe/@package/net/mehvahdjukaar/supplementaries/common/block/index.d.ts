export * as fire_behaviors from "@package/net/mehvahdjukaar/supplementaries/common/block/fire_behaviors";

declare module "@package/net/mehvahdjukaar/supplementaries/common/block" {
    export class $IAntiquable {
    }
    export interface $IAntiquable {
        supplementaries$isAntique(): boolean;
        supplementaries$setAntique(arg0: boolean): void;
    }
    export class $IConvertableHorse {
    }
    export interface $IConvertableHorse {
        supp$isConverting(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IConvertableHorse}.
     */
    export type $IConvertableHorse_ = (() => boolean);
}
