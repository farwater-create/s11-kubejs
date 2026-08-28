import { $Holder$Reference } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $BlockColor, $BlockColor_ } from "@package/net/minecraft/client/color/block";
import { $ItemColor, $ItemColor_ } from "@package/net/minecraft/client/color/item";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/ordana/immersive_weathering/mixins/neoforge" {
    export class $AccessorItemColor {
    }
    export interface $AccessorItemColor {
        getItemColors(): $Map<$Holder$Reference<$Item>, $ItemColor>;
        get itemColors(): $Map<$Holder$Reference<$Item>, $ItemColor>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorItemColor}.
     */
    export type $AccessorItemColor_ = (() => $Map_<$Holder$Reference<$Item>, $ItemColor_>);
    export class $AccessorBlockColor {
    }
    export interface $AccessorBlockColor {
        getBlockColors(): $Map<$Holder$Reference<$Block>, $BlockColor>;
        get blockColors(): $Map<$Holder$Reference<$Block>, $BlockColor>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorBlockColor}.
     */
    export type $AccessorBlockColor_ = (() => $Map_<$Holder$Reference<$Block>, $BlockColor_>);
}
