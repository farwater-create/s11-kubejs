import { $Stream } from "@package/java/util/stream";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BakedModel, $ModelManager, $ModelResourceLocation_ } from "@package/net/minecraft/client/resources/model";
import { $Record } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
export * as turtle from "@package/dan200/computercraft/api/client/turtle";

declare module "@package/dan200/computercraft/api/client" {
    export class $ModelLocation {
        getModel(arg0: $ModelManager): $BakedModel;
        getDependencies(): $Stream<$ResourceLocation>;
        static ofResource(arg0: $ResourceLocation_): $ModelLocation;
        static ofModel(arg0: $ModelResourceLocation_): $ModelLocation;
        get dependencies(): $Stream<$ResourceLocation>;
    }
    export class $TransformedModel extends $Record {
        static of(arg0: $ItemStack_, arg1: $Transformation): $TransformedModel;
        static of(arg0: $ModelLocation): $TransformedModel;
        static of(arg0: $ModelResourceLocation_): $TransformedModel;
        static of(arg0: $ResourceLocation_): $TransformedModel;
        model(): $BakedModel;
        matrix(): $Transformation;
        constructor(arg0: $BakedModel);
        constructor(model: $BakedModel, matrix: $Transformation);
    }
    /**
     * Values that may be interpreted as {@link $TransformedModel}.
     */
    export type $TransformedModel_ = { model?: $BakedModel, matrix?: $Transformation,  } | [model?: $BakedModel, matrix?: $Transformation, ];
}
