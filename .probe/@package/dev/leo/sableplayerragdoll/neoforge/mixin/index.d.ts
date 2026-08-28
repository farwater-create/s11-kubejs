import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $List_, $List } from "@package/java/util";

declare module "@package/dev/leo/sableplayerragdoll/neoforge/mixin" {
    export class $LivingEntityRendererAccessor {
    }
    export interface $LivingEntityRendererAccessor {
        getLayers(): $List<$RenderLayer<never, never>>;
        get layers(): $List<$RenderLayer<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityRendererAccessor}.
     */
    export type $LivingEntityRendererAccessor_ = (() => $List_<$RenderLayer<never, never>>);
}
