import { $Block } from "@package/net/minecraft/world/level/block";
export * as create from "@package/com/starfish_studios/another_furniture/mixin/neoforge/create";

declare module "@package/com/starfish_studios/another_furniture/mixin/neoforge" {
    export class $FireBlockAccessor {
    }
    export interface $FireBlockAccessor {
        invokeSetFlammable(arg0: $Block, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $FireBlockAccessor}.
     */
    export type $FireBlockAccessor_ = ((arg0: $Block, arg1: number, arg2: number) => void);
}
