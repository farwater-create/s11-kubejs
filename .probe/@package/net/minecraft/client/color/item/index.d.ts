import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $AccessorItemColor } from "@package/com/ordana/immersive_weathering/mixins/neoforge";
import { $ItemColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $Holder$Reference } from "@package/net/minecraft/core";
import { $ItemColorsNeoForgeAccessor } from "@package/fuzs/puzzleslib/neoforge/mixin/client/accessor";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ColorProviderRegistryImpl$ColorMapperHolder } from "@package/net/fabricmc/fabric/impl/client/rendering";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $Map } from "@package/java/util";

declare module "@package/net/minecraft/client/color/item" {
    export class $ItemColors implements $ColorProviderRegistryImpl$ColorMapperHolder<any, any>, $ItemColorsExtension, $ItemColorsNeoForgeAccessor, $AccessorItemColor {
        get(arg0: $ItemLike_): $ItemColor;
        /**
         * @deprecated
         */
        register(itemColor: $ItemColor_, ...items: $ItemLike_[]): void;
        static createDefault(colors: $BlockColors): $ItemColors;
        getColor(stack: $ItemStack_, tintIndex: number): number;
        sodium$getColorProvider(arg0: $ItemStack_): $ItemColor;
        getItemColors(): $Map<$Holder$Reference<$Item>, $ItemColor>;
        puzzleslib$getItemColors(): $Map<$Item, $ItemColor>;
        constructor();
        get itemColors(): $Map<$Holder$Reference<$Item>, $ItemColor>;
    }
    export class $ItemColor {
    }
    export interface $ItemColor {
        getColor(stack: $ItemStack_, tintIndex: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemColor}.
     */
    export type $ItemColor_ = ((arg0: $ItemStack, arg1: number) => number);
}
