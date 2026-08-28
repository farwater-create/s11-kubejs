import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map } from "@package/java/util";

declare module "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/aquiferoverride" {
    export class $ReplaceAquiferOverride extends $AquiferOverride {
        static CODEC: $MapCodec<$ReplaceAquiferOverride>;
        static NONE: $AquiferOverride;
        constructor(arg0: $BlockState_);
    }
    export class $AquiferOverrideMask {
        get(arg0: number, arg1: number, arg2: number): boolean;
        set(arg0: number, arg1: number, arg2: number): void;
        getAquiferOverride(): $AquiferOverride;
        getBlockStateForPos(arg0: number, arg1: number, arg2: number, arg3: $BlockState_): $BlockState;
        setAquiferOverride(arg0: $AquiferOverride): void;
        constructor(arg0: number, arg1: number);
    }
    export class $AquiferOverrideType<C extends $AquiferOverride> {
        static register<C extends $AquiferOverride>(arg0: $ResourceLocation_, arg1: $MapCodec<C>): $AquiferOverrideType<C>;
        static AQUIFER_OVERRIDE_NAME_BY_TYPE: $Map<$AquiferOverrideType<never>, $ResourceLocation>;
        static SOLIDIFY: $AquiferOverrideType<$SolidifyAquiferOverride>;
        static AQUIFER_OVERRIDE_TYPE_BY_NAME: $Map<$ResourceLocation, $AquiferOverrideType<never>>;
        static AQUIFER_OVERRIDE_CODEC: $Codec<$AquiferOverride>;
        static NONE: $AquiferOverrideType<$NoneAquiferOverride>;
        static REPLACE: $AquiferOverrideType<$ReplaceAquiferOverride>;
        static AQUIFER_OVERRIDE_TYPE_CODEC: $Codec<$AquiferOverrideType<never>>;
    }
    export interface $AquiferOverrideType<C extends $AquiferOverride> {
        codec(): $MapCodec<C>;
    }
    /**
     * Values that may be interpreted as {@link $AquiferOverrideType}.
     */
    export type $AquiferOverrideType_<C> = (() => $MapCodec<C>);
    export class $SolidifyAquiferOverride extends $AquiferOverride {
        setSolidBlockState(arg0: $BlockState_): void;
        static CODEC: $MapCodec<$SolidifyAquiferOverride>;
        static NONE: $AquiferOverride;
        constructor();
        set solidBlockState(value: $BlockState_);
    }
    export class $NoneAquiferOverride extends $AquiferOverride {
        static CODEC: $MapCodec<$NoneAquiferOverride>;
        static NONE: $AquiferOverride;
        constructor();
    }
    export class $AquiferOverrideMaskSupplier {
    }
    export interface $AquiferOverrideMaskSupplier {
        getOrCreateAquiferOverrideMask(arg0: $Supplier_<$AquiferOverrideMask>): $AquiferOverrideMask;
    }
    /**
     * Values that may be interpreted as {@link $AquiferOverrideMaskSupplier}.
     */
    export type $AquiferOverrideMaskSupplier_ = ((arg0: $Supplier<$AquiferOverrideMask>) => $AquiferOverrideMask);
    export class $AquiferOverride {
        type(): $AquiferOverrideType<never>;
        getBlockState(arg0: $BlockState_): $BlockState;
        static NONE: $AquiferOverride;
    }
}
