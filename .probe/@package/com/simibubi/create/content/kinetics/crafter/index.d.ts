import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $RecipeSerializer, $RecipeHolder_, $ShapedRecipePattern, $CraftingInput, $CraftingRecipe, $ShapedRecipe, $CraftingBookCategory_ } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List, $Collection_, $Map } from "@package/java/util";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntity, $HorizontalKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $CrafterAccessor } from "@package/net/pinkcats/createlazytick/mixin/OptElement/crafter";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockAndTintGetter, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $ConnectedTextureBehaviour$Base } from "@package/com/simibubi/create/foundation/block/connected";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ICogWheel } from "@package/com/simibubi/create/content/kinetics/simpleRelays";
import { $EnumProperty, $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $ISmartBlockEntityControl } from "@package/net/pinkcats/createlazytick/bridge/Create";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Pointing_, $BlockFace, $Pointing } from "@package/net/createmod/catnip/math";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/kinetics/crafter" {
    export class $RecipeGridHandler {
        static tryToApplyRecipe(arg0: $Level, arg1: $RecipeGridHandler$GroupedItems): $ItemStack;
        static getTargetingCrafter(arg0: $MechanicalCrafterBlockEntity): $MechanicalCrafterBlockEntity;
        static getPrecedingCrafters(arg0: $MechanicalCrafterBlockEntity): $List<$MechanicalCrafterBlockEntity>;
        static getAllCraftersOfChainIf(arg0: $MechanicalCrafterBlockEntity, arg1: $Predicate_<$MechanicalCrafterBlockEntity>): $List<$MechanicalCrafterBlockEntity>;
        static getAllCraftersOfChainIf(arg0: $MechanicalCrafterBlockEntity, arg1: $Predicate_<$MechanicalCrafterBlockEntity>, arg2: boolean): $List<$MechanicalCrafterBlockEntity>;
        static getAllCraftersOfChain(arg0: $MechanicalCrafterBlockEntity): $List<$MechanicalCrafterBlockEntity>;
        static isRecipeAllowed(arg0: $RecipeHolder_<$CraftingRecipe>, arg1: $CraftingInput): boolean;
        constructor();
    }
    export class $MechanicalCrafterBlockEntity extends $KineticBlockEntity implements $TransformableBlockEntity, $ISmartBlockEntityControl {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getInput(): $ConnectedInputHandler$ConnectedInput;
        tryInsert(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        dropItem(arg0: $Vec3_, arg1: $ItemStack_): void;
        getCountDownSpeed(): number;
        setScriptedResult(arg0: $ItemStack_): void;
        getTargetFace(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): $BlockFace;
        blockChanged(): void;
        getInventory(): $MechanicalCrafterBlockEntity$Inventory;
        eject(): void;
        getTargetDirection(): $Direction;
        ejectWholeGrid(): void;
        connectivityChanged(): void;
        checkCompletedRecipe(arg0: boolean): void;
        craftingItemPresent(): boolean;
        craftingItemOrCoverPresent(): boolean;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get input(): $ConnectedInputHandler$ConnectedInput;
        get countDownSpeed(): number;
        set scriptedResult(value: $ItemStack_);
        get inventory(): $MechanicalCrafterBlockEntity$Inventory;
        get targetDirection(): $Direction;
    }
    export class $CrafterCTBehaviour extends $ConnectedTextureBehaviour$Base {
        constructor();
    }
    export class $ConnectedInputHandler$ConnectedInput {
        write(arg0: $CompoundTag_): void;
        read(arg0: $CompoundTag_): void;
        getItemHandler(arg0: $Level, arg1: $BlockPos_): $IItemHandler;
        attachTo(arg0: $BlockPos_, arg1: $BlockPos_): void;
        getInventories(arg0: $Level, arg1: $BlockPos_): $List<$MechanicalCrafterBlockEntity$Inventory>;
        constructor();
    }
    export class $MechanicalCrafterBlockEntity$Phase extends $Enum<$MechanicalCrafterBlockEntity$Phase> {
    }
    /**
     * Values that may be interpreted as {@link $MechanicalCrafterBlockEntity$Phase}.
     */
    export type $MechanicalCrafterBlockEntity$Phase_ = "idle" | "accepting" | "assembling" | "exporting" | "waiting" | "crafting" | "inserting";
    export class $CrafterHelper {
        static getInput(arg0: $BlockAndTintGetter, arg1: $BlockPos_): $ConnectedInputHandler$ConnectedInput;
        static areCraftersConnected(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        static getCrafter(arg0: $BlockAndTintGetter, arg1: $BlockPos_): $MechanicalCrafterBlockEntity;
        constructor();
    }
    export class $ConnectedInputHandler {
        static shouldConnect(arg0: $Level, arg1: $BlockPos_, arg2: $Direction_, arg3: $Direction_): boolean;
        static toggleConnection(arg0: $Level, arg1: $BlockPos_, arg2: $BlockPos_): void;
        static connectControllers(arg0: $Level, arg1: $MechanicalCrafterBlockEntity, arg2: $MechanicalCrafterBlockEntity): void;
        static initAndAddAll(arg0: $Level, arg1: $MechanicalCrafterBlockEntity, arg2: $Collection_<$BlockPos_>): void;
        constructor();
    }
    export class $MechanicalCrafterRenderer extends $SafeBlockEntityRenderer<$MechanicalCrafterBlockEntity> {
        renderItems(arg0: $MechanicalCrafterBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        renderFast(arg0: $MechanicalCrafterBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $RecipeGridHandler$GroupedItems implements $CrafterAccessor {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $RecipeGridHandler$GroupedItems;
        onlyEmptyItems(): boolean;
        mergeOnto(arg0: $RecipeGridHandler$GroupedItems, arg1: $Pointing_): void;
        calcStats(): void;
        getMinX(): number;
        getMinY(): number;
        getGrid(): $Map<$Pair<number, number>, $ItemStack>;
        constructor();
        constructor(arg0: $ItemStack_);
        get minX(): number;
        get minY(): number;
        get grid(): $Map<$Pair<number, number>, $ItemStack>;
    }
    export class $MechanicalCraftingRecipe$Serializer implements $RecipeSerializer<$MechanicalCraftingRecipe> {
        codec(): $MapCodec<$MechanicalCraftingRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $MechanicalCraftingRecipe>;
        static CODEC: $MapCodec<$MechanicalCraftingRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MechanicalCraftingRecipe>;
        constructor();
    }
    export class $MechanicalCrafterBlockEntity$Inventory extends $SmartInventory {
        kjs$self(): $IItemHandler;
        constructor(arg0: $MechanicalCrafterBlockEntity);
    }
    export class $MechanicalCraftingRecipe extends $ShapedRecipe {
        acceptsMirrored(): boolean;
        result: $ItemStack;
        pattern: $ShapedRecipePattern;
        group: string;
        constructor(arg0: string, arg1: $CraftingBookCategory_, arg2: $ShapedRecipePattern, arg3: $ItemStack_, arg4: boolean);
    }
    export class $MechanicalCraftingInput extends $CraftingInput {
        static of(arg0: $RecipeGridHandler$GroupedItems): $MechanicalCraftingInput;
        static EMPTY: $CraftingInput;
    }
    export class $MechanicalCrafterBlock extends $HorizontalKineticBlock implements $IBE<$MechanicalCrafterBlockEntity>, $ICogWheel {
        static isValidTarget(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getBlockEntityClass(): $Class<$MechanicalCrafterBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$MechanicalCrafterBlockEntity>;
        static getTargetDirection(arg0: $BlockState_): $Direction;
        static pointingFromFacing(arg0: $Direction_, arg1: $Direction_): $Pointing;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $MechanicalCrafterBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($MechanicalCrafterBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalCrafterBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalCrafterBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$MechanicalCrafterBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        isDedicatedCogWheel(): boolean;
        isLargeCog(): boolean;
        isSmallCog(): boolean;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        static HORIZONTAL_FACING: $Property<$Direction>;
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
        static POINTING: $EnumProperty<$Pointing>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$MechanicalCrafterBlockEntity>;
        get blockEntityType(): $BlockEntityType<$MechanicalCrafterBlockEntity>;
        get dedicatedCogWheel(): boolean;
        get largeCog(): boolean;
        get smallCog(): boolean;
    }
}
