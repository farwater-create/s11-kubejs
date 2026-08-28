import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item$Properties, $BlockItem, $Item } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Map } from "@package/java/util";
import { $NonNullFunction } from "@package/com/tterrag/registrate/util/nullness";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $ItemBuilder } from "@package/com/tterrag/registrate/builders";
import { $Predicate_ } from "@package/java/util/function";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $DirectionProperty, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $DirectionalAxisBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/simibubi/create/content/decoration/bracket" {
    export class $BracketBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block, arg1: $Item$Properties);
    }
    export class $BracketGenerator extends $DirectionalAxisBlockStateGen {
        static itemModel<I extends $BlockItem, P>(arg0: string): $NonNullFunction<$ItemBuilder<I, P>, P>;
        constructor(arg0: string);
    }
    export class $BracketBlock$BracketType extends $Enum<$BracketBlock$BracketType> implements $StringRepresentable {
        static values(): $BracketBlock$BracketType[];
        static valueOf(arg0: string): $BracketBlock$BracketType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SHAFT: $BracketBlock$BracketType;
        static COG: $BracketBlock$BracketType;
        static PIPE: $BracketBlock$BracketType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BracketBlock$BracketType}.
     */
    export type $BracketBlock$BracketType_ = "pipe" | "cog" | "shaft";
    export class $BracketedBlockEntityBehaviour extends $BlockEntityBehaviour {
        transformBracket(arg0: $StructureTransform): void;
        canHaveBracket(): boolean;
        isBracketPresent(): boolean;
        removeBracket(arg0: boolean): $BlockState;
        getBracket(): $BlockState;
        applyBracket(arg0: $BlockState_): void;
        isBracketValid(arg0: $BlockState_): boolean;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$BracketedBlockEntityBehaviour>;
        constructor(arg0: $SmartBlockEntity);
        constructor(arg0: $SmartBlockEntity, arg1: $Predicate_<$BlockState>);
        get bracketPresent(): boolean;
        get bracket(): $BlockState;
    }
    export class $BracketBlock extends $WrenchableDirectionalBlock {
        getSuitableBracket(arg0: $BlockState_, arg1: $Direction_): ($BlockState) | undefined;
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
        static TYPE: $EnumProperty<$BracketBlock$BracketType>;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static AXIS_ALONG_FIRST_COORDINATE: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
}
