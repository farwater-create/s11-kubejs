import { $MapCodec } from "@package/com/mojang/serialization";
import { $SingleRecipeInput_, $RecipeHolder_, $Recipe, $RecipeHolder, $Ingredient_, $SingleRecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $DeferralBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/simple";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List, $Set_, $List_ } from "@package/java/util";
import { $BehaviourType } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Function_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntityRenderer, $HorizontalKineticBlock, $ShaftVisual } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SequencedAssemblySubCategory } from "@package/com/simibubi/create/compat/jei/category/sequencedAssembly";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $IAssemblyRecipe } from "@package/com/simibubi/create/content/processing/sequenced";
import { $ItemLike_, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $BeltProcessingBehaviour } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ProcessingRecipeParams, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BasinOperatingBlockEntity } from "@package/com/simibubi/create/content/processing/basin";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";

declare module "@package/com/simibubi/create/content/kinetics/press" {
    export class $PressingBehaviour$Mode extends $Enum<$PressingBehaviour$Mode> {
        static values(): $PressingBehaviour$Mode[];
        static valueOf(arg0: string): $PressingBehaviour$Mode;
        headOffset: number;
        static BELT: $PressingBehaviour$Mode;
        static BASIN: $PressingBehaviour$Mode;
        static WORLD: $PressingBehaviour$Mode;
    }
    /**
     * Values that may be interpreted as {@link $PressingBehaviour$Mode}.
     */
    export type $PressingBehaviour$Mode_ = "world" | "belt" | "basin";
    export class $BeltPressingCallbacks {
        constructor();
    }
    export class $MechanicalPressRenderer extends $KineticBlockEntityRenderer<$MechanicalPressBlockEntity> {
        shouldRenderOffScreen(arg0: $MechanicalPressBlockEntity): boolean;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $PressingRecipe extends $StandardProcessingRecipe<$SingleRecipeInput> implements $IAssemblyRecipe {
        matches(arg0: $SingleRecipeInput_, arg1: $Level): boolean;
        getDescriptionForAssembly(): $Component;
        addRequiredMachines(arg0: $Set_<$ItemLike_>): void;
        addAssemblyIngredients(arg0: $List_<$Ingredient_>): void;
        getJEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        supportsAssembly(): boolean;
        addAssemblyFluidIngredients(arg0: $List_<$SizedFluidIngredient>): void;
        constructor(arg0: $ProcessingRecipeParams);
        get descriptionForAssembly(): $Component;
        get JEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
    }
    export class $MechanicalPressBlockEntity extends $BasinOperatingBlockEntity implements $PressingBehaviour$PressingBehaviourSpecifics {
        getRecipe(arg0: $ItemStack_): ($RecipeHolder<$PressingRecipe>) | undefined;
        onItemPressed(arg0: $ItemStack_): void;
        tryProcessInWorld(arg0: $ItemEntity, arg1: boolean): boolean;
        tryProcessOnBelt(arg0: $TransportedItemStack, arg1: $List_<$ItemStack_>, arg2: boolean): boolean;
        getKineticSpeed(): number;
        tryProcessInBasin(arg0: boolean): boolean;
        canProcessInBulk(): boolean;
        static canCompress(arg0: $Recipe<never>): boolean;
        getParticleAmount(): number;
        handler$jmj000$createdieselgenerators$matchStaticFilters(arg0: $RecipeHolder_<any>, arg1: $CallbackInfoReturnable<any>): void;
        getPressingBehaviour(): $PressingBehaviour;
        onPressingCompleted(): void;
        basinRemoved: boolean;
        pressingBehaviour: $PressingBehaviour;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        basinChecker: $DeferralBehaviour;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        updateSpeed: boolean;
        hasComparators: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get kineticSpeed(): number;
        get particleAmount(): number;
    }
    export class $PressingBehaviour$PressingBehaviourSpecifics {
    }
    export interface $PressingBehaviour$PressingBehaviourSpecifics {
        tryProcessInWorld(arg0: $ItemEntity, arg1: boolean): boolean;
        tryProcessOnBelt(arg0: $TransportedItemStack, arg1: $List_<$ItemStack_>, arg2: boolean): boolean;
        getKineticSpeed(): number;
        tryProcessInBasin(arg0: boolean): boolean;
        canProcessInBulk(): boolean;
        getParticleAmount(): number;
        onPressingCompleted(): void;
        get kineticSpeed(): number;
        get particleAmount(): number;
    }
    export class $PressingBehaviour extends $BeltProcessingBehaviour {
        start(arg0: $PressingBehaviour$Mode_): void;
        makePressingParticleEffect(arg0: $Vec3_, arg1: $ItemStack_): void;
        makePressingParticleEffect(arg0: $Vec3_, arg1: $ItemStack_, arg2: number): void;
        inWorld(): boolean;
        onBasin(): boolean;
        makeCompactingParticleEffect(arg0: $Vec3_, arg1: $ItemStack_): void;
        getRenderedHeadOffset(arg0: number): number;
        getRunningTickSpeed(): number;
        running: boolean;
        mode: $PressingBehaviour$Mode;
        prevRunningTicks: number;
        static ENTITY_SCAN: number;
        runningTicks: number;
        particleItems: $List<$ItemStack>;
        blockEntity: $SmartBlockEntity;
        finished: boolean;
        static TYPE: $BehaviourType<$BeltProcessingBehaviour>;
        static CYCLE: number;
        specifics: $PressingBehaviour$PressingBehaviourSpecifics;
        constructor<T extends $SmartBlockEntity>(arg0: T);
        get runningTickSpeed(): number;
    }
    export class $MechanicalPressBlock extends $HorizontalKineticBlock implements $IBE<$MechanicalPressBlockEntity> {
        getBlockEntityClass(): $Class<$MechanicalPressBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$MechanicalPressBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $MechanicalPressBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($MechanicalPressBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalPressBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalPressBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$MechanicalPressBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
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
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$MechanicalPressBlockEntity>;
        get blockEntityType(): $BlockEntityType<$MechanicalPressBlockEntity>;
    }
    export class $PressVisual extends $ShaftVisual<$MechanicalPressBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $MechanicalPressBlockEntity, arg2: number);
    }
}
