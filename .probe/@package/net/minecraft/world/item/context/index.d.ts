import { $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $UseOnContextInvoker } from "@package/com/jesz/createdieselgenerators/mixins";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        static at(context: $BlockPlaceContext, pos: $BlockPos_, direction: $Direction_): $BlockPlaceContext;
        canPlace(): boolean;
        getNearestLookingDirections(): $Direction[];
        getNearestLookingVerticalDirection(): $Direction;
        handler$ihf000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        handler$ihf000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        handler$ihf000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        getNearestLookingDirection(): $Direction;
        replacingClickedOnBlock(): boolean;
        replaceClicked: boolean;
        constructor(level: $Level, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(context: $UseOnContext);
        constructor(player: $Player, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get nearestLookingDirections(): $Direction[];
        get nearestLookingVerticalDirection(): $Direction;
        get nearestLookingDirection(): $Direction;
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        replaceClicked: boolean;
        constructor(level: $Level, pos: $BlockPos_, direction: $Direction_, itemStack: $ItemStack_, face: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor, $UseOnContextInvoker {
        getLevel(): $Level;
        getRotation(): number;
        getClickLocation(): $Vec3;
        getHitResult(): $BlockHitResult;
        getItemInHand(): $ItemStack;
        isSecondaryUseActive(): boolean;
        getPlayer(): $Player;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        getHand(): $InteractionHand;
        isInside(): boolean;
        getHorizontalDirection(): $Direction;
        create$getHitResult(): $BlockHitResult;
        cdg_getHitResult(): $BlockHitResult;
        constructor(player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult);
        constructor(level: $Level, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get level(): $Level;
        get rotation(): number;
        get clickLocation(): $Vec3;
        get hitResult(): $BlockHitResult;
        get itemInHand(): $ItemStack;
        get secondaryUseActive(): boolean;
        get player(): $Player;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get hand(): $InteractionHand;
        get inside(): boolean;
        get horizontalDirection(): $Direction;
    }
}
