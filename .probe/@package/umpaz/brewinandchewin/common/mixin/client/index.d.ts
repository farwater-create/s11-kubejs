import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";

declare module "@package/umpaz/brewinandchewin/common/mixin/client" {
    export class $RecipeBookComponentAccessor {
    }
    export interface $RecipeBookComponentAccessor {
        brewinandchewin$setStackedContents(arg0: $StackedContents): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookComponentAccessor}.
     */
    export type $RecipeBookComponentAccessor_ = ((arg0: $StackedContents) => void);
    export class $ModelBakeryAccessor {
    }
    export interface $ModelBakeryAccessor {
        brewinandchewin$getModel(arg0: $ResourceLocation_): $UnbakedModel;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakeryAccessor}.
     */
    export type $ModelBakeryAccessor_ = ((arg0: $ResourceLocation) => $UnbakedModel);
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        brewinandchewin$getTicks(): number;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererAccessor}.
     */
    export type $LevelRendererAccessor_ = (() => number);
    export class $GhostRecipeAccessor {
    }
    export interface $GhostRecipeAccessor {
        brewinandchewin$getTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $GhostRecipeAccessor}.
     */
    export type $GhostRecipeAccessor_ = (() => number);
}
