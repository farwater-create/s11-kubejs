import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ProcessingOutput } from "@package/com/simibubi/create/content/processing/recipe";

declare module "@package/com/tom/createores/kubejs" {
    export class $COEUtil {
        static processingOutput(arg0: $ItemStack_, arg1: number): $ProcessingOutput;
    }
    export interface $COEUtil {
    }
}
