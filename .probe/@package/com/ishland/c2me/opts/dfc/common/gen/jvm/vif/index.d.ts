import { $Blender } from "@package/net/minecraft/world/level/levelgen/blending";
import { $DfcObjectCache } from "@package/com/ishland/c2me/opts/dfc/common/gen/jvm/util";
import { $DensityFunction$FunctionContext } from "@package/net/minecraft/world/level/levelgen";
import { $EvalType_, $EvalType } from "@package/com/ishland/c2me/opts/dfc/common/ast";

declare module "@package/com/ishland/c2me/opts/dfc/common/gen/jvm/vif" {
    export class $NoisePosVanillaInterface implements $DensityFunction$FunctionContext {
        getType(): $EvalType;
        at(x: number, y: number, z: number, type: $EvalType_, cache: $DfcObjectCache): $NoisePosVanillaInterface;
        blockX(): number;
        blockY(): number;
        blockZ(): number;
        deInit(): void;
        ensureUninitialized(): void;
        getBlender(): $Blender;
        constructor();
        get type(): $EvalType;
        get blender(): $Blender;
    }
}
