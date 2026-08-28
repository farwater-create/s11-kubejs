import { $JsonObject } from "@package/com/google/gson";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ICurio$DropRule_ } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";

declare module "@package/top/theillusivec4/curios/api/type/data" {
    export class $ISlotData {
    }
    export interface $ISlotData {
        size(arg0: number): $ISlotData;
        replace(arg0: boolean): $ISlotData;
        order(arg0: number): $ISlotData;
        icon(arg0: $ResourceLocation_): $ISlotData;
        serialize(arg0: $HolderLookup$Provider): $JsonObject;
        /**
         * @deprecated
         */
        operation(arg0: $AttributeModifier$Operation_): $ISlotData;
        operation(arg0: string): $ISlotData;
        renderToggle(arg0: boolean): $ISlotData;
        dropRule(arg0: $ICurio$DropRule_): $ISlotData;
        addCondition(arg0: $ICondition): $ISlotData;
        useNativeGui(arg0: boolean): $ISlotData;
        addCosmetic(arg0: boolean): $ISlotData;
        addValidator(arg0: $ResourceLocation_): $ISlotData;
    }
    export class $IEntitiesData {
    }
    export interface $IEntitiesData {
        replace(arg0: boolean): $IEntitiesData;
        serialize(arg0: $HolderLookup$Provider): $JsonObject;
        addSlots(...arg0: string[]): $IEntitiesData;
        addCondition(arg0: $ICondition): $IEntitiesData;
        addPlayer(): $IEntitiesData;
        addEntities(...arg0: $EntityType<never>[]): $IEntitiesData;
    }
}
