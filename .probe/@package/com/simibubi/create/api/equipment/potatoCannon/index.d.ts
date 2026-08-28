import { $ItemLike_, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $HolderSet_, $RegistryAccess, $Holder$Reference, $HolderSet } from "@package/net/minecraft/core";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Enum, $Record } from "@package/java/lang";
import { $PotatoProjectileEntity } from "@package/com/simibubi/create/content/equipment/potatoCannon";
import { $EntityHitResult, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/api/equipment/potatoCannon" {
    export class $PotatoProjectileRenderMode {
        static CODEC: $Codec<$PotatoProjectileRenderMode>;
    }
    export interface $PotatoProjectileRenderMode {
        transform(arg0: $PoseStack, arg1: $PotatoProjectileEntity, arg2: number): void;
        codec(): $MapCodec<$PotatoProjectileRenderMode>;
    }
    export class $PotatoProjectileBlockHitAction {
        static CODEC: $Codec<$PotatoProjectileBlockHitAction>;
    }
    export interface $PotatoProjectileBlockHitAction {
        execute(arg0: $LevelAccessor, arg1: $ItemStack_, arg2: $BlockHitResult): boolean;
        codec(): $MapCodec<$PotatoProjectileBlockHitAction>;
    }
    export class $PotatoProjectileEntityHitAction {
        static CODEC: $Codec<$PotatoProjectileEntityHitAction>;
    }
    export interface $PotatoProjectileEntityHitAction {
        execute(arg0: $ItemStack_, arg1: $EntityHitResult, arg2: $PotatoProjectileEntityHitAction$Type_): boolean;
        codec(): $MapCodec<$PotatoProjectileEntityHitAction>;
    }
    export class $PotatoProjectileEntityHitAction$Type extends $Enum<$PotatoProjectileEntityHitAction$Type> {
        static values(): $PotatoProjectileEntityHitAction$Type[];
        static valueOf(arg0: string): $PotatoProjectileEntityHitAction$Type;
        static ON_HIT: $PotatoProjectileEntityHitAction$Type;
        static PRE_HIT: $PotatoProjectileEntityHitAction$Type;
    }
    /**
     * Values that may be interpreted as {@link $PotatoProjectileEntityHitAction$Type}.
     */
    export type $PotatoProjectileEntityHitAction$Type_ = "pre_hit" | "on_hit";
    export class $PotatoCannonProjectileType extends $Record {
        split(): number;
        sticky(): boolean;
        static getTypeForItem(arg0: $RegistryAccess, arg1: $Item): ($Holder$Reference<$PotatoCannonProjectileType>) | undefined;
        reloadTicks(): number;
        drag(): number;
        items(): $HolderSet<$Item>;
        velocityMultiplier(): number;
        dropStack(): $ItemStack;
        gravityMultiplier(): number;
        renderMode(): $PotatoProjectileRenderMode;
        onBlockHit(): ($PotatoProjectileBlockHitAction) | undefined;
        onBlockHit(arg0: $LevelAccessor, arg1: $ItemStack_, arg2: $BlockHitResult): boolean;
        knockback(): number;
        damage(): number;
        onEntityHit(arg0: $ItemStack_, arg1: $EntityHitResult): boolean;
        onEntityHit(): ($PotatoProjectileEntityHitAction) | undefined;
        preEntityHit(): ($PotatoProjectileEntityHitAction) | undefined;
        preEntityHit(arg0: $ItemStack_, arg1: $EntityHitResult): boolean;
        soundPitch(): number;
        static CODEC: $Codec<$PotatoCannonProjectileType>;
        constructor(items: $HolderSet_<$Item>, reloadTicks: number, damage: number, split: number, knockback: number, drag: number, velocityMultiplier: number, gravityMultiplier: number, soundPitch: number, sticky: boolean, dropStack: $ItemStack_, renderMode: $PotatoProjectileRenderMode, preEntityHit: ($PotatoProjectileEntityHitAction) | undefined, onEntityHit: ($PotatoProjectileEntityHitAction) | undefined, onBlockHit: ($PotatoProjectileBlockHitAction) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PotatoCannonProjectileType}.
     */
    export type $PotatoCannonProjectileType_ = { sticky?: boolean, onBlockHit?: ($PotatoProjectileBlockHitAction) | undefined, knockback?: number, velocityMultiplier?: number, damage?: number, drag?: number, soundPitch?: number, onEntityHit?: ($PotatoProjectileEntityHitAction) | undefined, preEntityHit?: ($PotatoProjectileEntityHitAction) | undefined, items?: $HolderSet_<$Item>, dropStack?: $ItemStack_, reloadTicks?: number, renderMode?: $PotatoProjectileRenderMode, gravityMultiplier?: number, split?: number,  } | [sticky?: boolean, onBlockHit?: ($PotatoProjectileBlockHitAction) | undefined, knockback?: number, velocityMultiplier?: number, damage?: number, drag?: number, soundPitch?: number, onEntityHit?: ($PotatoProjectileEntityHitAction) | undefined, preEntityHit?: ($PotatoProjectileEntityHitAction) | undefined, items?: $HolderSet_<$Item>, dropStack?: $ItemStack_, reloadTicks?: number, renderMode?: $PotatoProjectileRenderMode, gravityMultiplier?: number, split?: number, ];
    export class $PotatoCannonProjectileType$Builder {
        sticky(): $PotatoCannonProjectileType$Builder;
        build(): $PotatoCannonProjectileType;
        reloadTicks(arg0: number): $PotatoCannonProjectileType$Builder;
        drag(arg0: number): $PotatoCannonProjectileType$Builder;
        addItems(...arg0: $ItemLike_[]): $PotatoCannonProjectileType$Builder;
        dropStack(arg0: $ItemStack_): $PotatoCannonProjectileType$Builder;
        renderMode(arg0: $PotatoProjectileRenderMode): $PotatoCannonProjectileType$Builder;
        onBlockHit(arg0: $PotatoProjectileBlockHitAction): $PotatoCannonProjectileType$Builder;
        gravity(arg0: number): $PotatoCannonProjectileType$Builder;
        velocity(arg0: number): $PotatoCannonProjectileType$Builder;
        knockback(arg0: number): $PotatoCannonProjectileType$Builder;
        damage(arg0: number): $PotatoCannonProjectileType$Builder;
        onEntityHit(arg0: $PotatoProjectileEntityHitAction): $PotatoCannonProjectileType$Builder;
        preEntityHit(arg0: $PotatoProjectileEntityHitAction): $PotatoCannonProjectileType$Builder;
        soundPitch(arg0: number): $PotatoCannonProjectileType$Builder;
        renderBillboard(): $PotatoCannonProjectileType$Builder;
        splitInto(arg0: number): $PotatoCannonProjectileType$Builder;
        renderTumbling(): $PotatoCannonProjectileType$Builder;
        renderTowardMotion(arg0: number, arg1: number): $PotatoCannonProjectileType$Builder;
        constructor();
    }
}
