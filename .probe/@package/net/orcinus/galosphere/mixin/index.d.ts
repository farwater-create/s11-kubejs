import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List_, $List } from "@package/java/util";

declare module "@package/net/orcinus/galosphere/mixin" {
    export class $PalettedPermutationsAccessor {
    }
    export interface $PalettedPermutationsAccessor {
        getPaletteKey(): $ResourceLocation;
        setTextures(arg0: $List_<$ResourceLocation_>): void;
        getTextures(): $List<$ResourceLocation>;
        get paletteKey(): $ResourceLocation;
    }
}
