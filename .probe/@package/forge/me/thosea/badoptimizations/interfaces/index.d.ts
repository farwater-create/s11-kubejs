import { $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $BlockEntityRenderer, $BlockEntityRenderer_ } from "@package/net/minecraft/client/renderer/blockentity";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/forge/me/thosea/badoptimizations/interfaces" {
    export class $EntityTypeMethods {
    }
    export interface $EntityTypeMethods {
        bo$setRenderer(arg0: $EntityRenderer<never>): void;
        bo$getRenderer(): $EntityRenderer<never>;
    }
    export class $EntityMethods {
    }
    export interface $EntityMethods {
        bo$getRenderer<T extends $Entity>(): $EntityRenderer<T>;
        bo$refreshEntityData(arg0: number): void;
    }
    export class $BlockEntityTypeMethods {
    }
    export interface $BlockEntityTypeMethods {
        bo$setRenderer(arg0: $BlockEntityRenderer_<never>): void;
        bo$getRenderer<T extends $BlockEntity>(): $BlockEntityRenderer<T>;
    }
}
