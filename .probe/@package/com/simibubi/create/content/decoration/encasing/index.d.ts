import { $Level } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ConnectedTextureBehaviour$Base, $CTSpriteShiftEntry } from "@package/com/simibubi/create/foundation/block/connected";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $NonNullUnaryOperator } from "@package/com/tterrag/registrate/util/nullness";
import { $BlockBuilder } from "@package/com/tterrag/registrate/builders";
import { $BiPredicate_, $Supplier_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/simibubi/create/content/decoration/encasing" {
    export class $CasingBlock extends $Block implements $IWrenchable {
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $CasingConnectivity$Entry {
        register(): void;
        getCasing(): $CTSpriteShiftEntry;
        isSideValid(arg0: $BlockState_, arg1: $Direction_): boolean;
        get casing(): $CTSpriteShiftEntry;
    }
    export class $CasingConnectivity {
        get(arg0: $BlockState_): $CasingConnectivity$Entry;
        make(arg0: $Block, arg1: $CTSpriteShiftEntry): void;
        make(arg0: $Block, arg1: $CTSpriteShiftEntry, arg2: $BiPredicate_<$BlockState, $Direction>): void;
        makeCasing(arg0: $Block, arg1: $CTSpriteShiftEntry): void;
        constructor();
    }
    export class $EncasedCTBehaviour extends $ConnectedTextureBehaviour$Base {
        constructor(arg0: $CTSpriteShiftEntry);
    }
    export class $EncasingRegistry {
        static getVariants(arg0: $Block): $List<$Block>;
        static addVariant<B extends $Block, E extends $Block, P>(arg0: B, arg1: E): void;
        static addVariantTo<B extends $Block, P, E extends $Block>(arg0: $Supplier_<E>): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        constructor();
    }
    export class $EncasableBlock {
    }
    export interface $EncasableBlock {
        playEncaseSound(arg0: $Level, arg1: $BlockPos_): void;
        tryEncase(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
    }
    export class $EncasedBlock {
    }
    export interface $EncasedBlock {
        getCasing(): $Block;
        handleEncasing(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): void;
        get casing(): $Block;
    }
    /**
     * Values that may be interpreted as {@link $EncasedBlock}.
     */
    export type $EncasedBlock_ = (() => $Block);
}
