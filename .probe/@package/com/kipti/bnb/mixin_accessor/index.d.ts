import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/com/kipti/bnb/mixin_accessor" {
    export class $ReverseRenderableBakedGlyph {
    }
    export interface $ReverseRenderableBakedGlyph {
        bits_n_bobs$renderReverse(arg0: boolean, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ReverseRenderableBakedGlyph}.
     */
    export type $ReverseRenderableBakedGlyph_ = ((arg0: boolean, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number) => void);
    export class $DynamicComponentMigrator {
    }
    export interface $DynamicComponentMigrator {
        bits_n_bobs$setValueToLiteral(arg0: string, arg1: $HolderLookup$Provider): void;
    }
    /**
     * Values that may be interpreted as {@link $DynamicComponentMigrator}.
     */
    export type $DynamicComponentMigrator_ = ((arg0: string, arg1: $HolderLookup$Provider) => void);
    export class $FontAccess {
    }
    export interface $FontAccess {
        bits_n_bobs$getFontSet(arg0: $ResourceLocation_): $FontSet;
    }
    /**
     * Values that may be interpreted as {@link $FontAccess}.
     */
    export type $FontAccess_ = ((arg0: $ResourceLocation) => $FontSet);
    export class $FlywheelAccessibleKineticNetwork {
    }
    export interface $FlywheelAccessibleKineticNetwork {
        bits_n_bobs$getFlywheelStressReleaseCapacity(): number;
        bits_n_bobs$getFlywheelStressAbsoptionCapacity(): number;
        bits_n_bobs$updateFlywheelStresses(): void;
    }
}
