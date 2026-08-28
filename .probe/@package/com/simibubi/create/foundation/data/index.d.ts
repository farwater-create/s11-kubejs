import { $BlazeBurnerBlock } from "@package/com/simibubi/create/content/processing/burner";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $SimpleBuilder } from "@package/com/simibubi/create/api/registry/registrate";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $MobCategory_, $Entity, $EntityType$EntityFactory_ } from "@package/net/minecraft/world/entity";
import { $BaseFlowingFluid, $FluidType, $BaseFlowingFluid$Flowing, $BaseFlowingFluid$Properties, $FluidType$Properties } from "@package/net/neoforged/neoforge/fluids";
import { $ItemModelBuilder, $ModelFile, $ConfiguredModel, $BlockStateProvider } from "@package/net/neoforged/neoforge/client/model/generators";
import { $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $PackageStyles$PackageStyle_, $PackageItem } from "@package/com/simibubi/create/content/logistics/box";
import { $ValveHandleBlock } from "@package/com/simibubi/create/content/kinetics/crank";
import { $SimpleBlockEntityVisualizer$Factory, $SimpleEntityVisualizer$Factory } from "@package/dev/engine_room/flywheel/lib/visualization";
import { $MountedFluidStorageType } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $EncasedCogwheelBlock, $EncasedShaftBlock } from "@package/com/simibubi/create/content/kinetics/simpleRelays/encased";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $DataIngredient } from "@package/com/tterrag/registrate/util";
import { $RegistrateBlockstateProvider, $RegistrateTagsProvider, $RegistrateItemModelProvider, $DataGenContext } from "@package/com/tterrag/registrate/providers";
import { $SlidingDoorBlock } from "@package/com/simibubi/create/content/decoration/slidingDoor";
import { $BeltTunnelBlock } from "@package/com/simibubi/create/content/logistics/tunnel";
import { $IngredientType, $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $CTSpriteShiftEntry, $ConnectedTextureBehaviour } from "@package/com/simibubi/create/foundation/block/connected";
import { $CreativeModeTab, $Item, $DyeColor_, $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $StandardBogeyBlock } from "@package/com/simibubi/create/content/trains/bogey";
import { $NonNullFunction_, $NonNullFunction, $NonNullConsumer, $NonNullSupplier_, $NonNullUnaryOperator, $NonNullBiConsumer, $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $CasingBlock, $CasingConnectivity } from "@package/com/simibubi/create/content/decoration/encasing";
import { $PistonType_, $IntegerProperty, $WoodType_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $CopycatBlock } from "@package/com/simibubi/create/content/decoration/copycat";
import { $IronBarsBlock, $TrapDoorBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $TagsProvider$TagAppender, $TagsProvider } from "@package/net/minecraft/data/tags";
import { $GlassPaneBlock, $ConnectedGlassPaneBlock, $WindowBlock, $ConnectedGlassBlock } from "@package/com/simibubi/create/content/decoration/palettes";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $LinearChassisBlock, $RadialChassisBlock } from "@package/com/simibubi/create/content/contraptions/chassis";
import { $Map, $Set, $Map_, $List_, $Collection } from "@package/java/util";
import { $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";
import { $FluidBuilder, $BlockBuilder, $EntityBuilder, $ItemBuilder, $BlockEntityBuilder, $BlockEntityBuilder$BlockEntityFactory_, $FluidBuilder$FluidTypeFactory_, $BuilderCallback_ } from "@package/com/tterrag/registrate/builders";
import { $Supplier_, $Predicate_, $Function, $Predicate, $BiConsumer_, $Function_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $BlockEntry, $RegistryEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Registry, $Holder$Reference, $HolderLookup$Provider, $Holder_ } from "@package/net/minecraft/core";
import { $DirectionalAxisKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $EncasedPipeBlock, $FluidPipeBlock } from "@package/com/simibubi/create/content/fluids/pipes";
import { $Object } from "@package/java/lang";
import { $DatagenMod_ } from "@package/com/simibubi/create/api/data/recipe";
import { $ItemLike } from "@package/net/minecraft/world/level";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $TagBuilder, $TagKey_ } from "@package/net/minecraft/tags";
import { $DataMapProvider, $ExistingFileHelper, $DataMapProvider$Builder } from "@package/net/neoforged/neoforge/common/data";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $MapColor } from "@package/net/minecraft/world/level/material";
import { $DynamicPack } from "@package/com/simibubi/create/foundation/pack";
import { $StandardProcessingRecipe$Builder, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $Mods_, $CommonMetal$ItemLikeTag_ } from "@package/com/simibubi/create/foundation/data/recipe";
import { $Stream } from "@package/java/util/stream";
import { $TooltipModifier } from "@package/com/simibubi/create/foundation/item";
import { $WhistleExtenderBlock } from "@package/com/simibubi/create/content/decoration/steamWhistle";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DisplaySource, $DisplayTarget } from "@package/com/simibubi/create/api/behaviour/display";
import { $CartAssemblerBlock } from "@package/com/simibubi/create/content/contraptions/mounted";
import { $VirtualFluid } from "@package/com/simibubi/create/content/fluids";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $CreateBlockEntityBuilderAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $MountedItemStorageType } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $DamageType } from "@package/net/minecraft/world/damagesource";
export * as recipe from "@package/com/simibubi/create/foundation/data/recipe";

declare module "@package/com/simibubi/create/foundation/data" {
    export class $MetalBarsGen {
        static createBars(arg0: string, arg1: boolean, arg2: $Supplier_<$DataIngredient>, arg3: $MapColor): $BlockEntry<$IronBarsBlock>;
        static barsBlockState<P extends $IronBarsBlock>(arg0: string, arg1: boolean): $NonNullBiConsumer<$DataGenContext<$Block, P>, $RegistrateBlockstateProvider>;
        constructor();
    }
    export class $CreateEntityBuilder<T extends $Entity, P> extends $EntityBuilder<T, P> {
        visual(arg0: $NonNullSupplier_<$SimpleEntityVisualizer$Factory<T>>, arg1: $Predicate_<T>): $CreateEntityBuilder<T, P>;
        visual(arg0: $NonNullSupplier_<$SimpleEntityVisualizer$Factory<T>>): $CreateEntityBuilder<T, P>;
        visual(arg0: $NonNullSupplier_<$SimpleEntityVisualizer$Factory<T>>, arg1: boolean): $CreateEntityBuilder<T, P>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $EntityType$EntityFactory_<T>, arg5: $MobCategory_);
    }
    export class $CreateBlockEntityBuilder<T extends $BlockEntity, P> extends $BlockEntityBuilder<T, P> implements $CreateBlockEntityBuilderAccessor<any, any> {
        validBlocksDeferred(arg0: $NonNullSupplier_<$Collection<$NonNullSupplier<$Block>>>): $CreateBlockEntityBuilder<$Object, $Object>;
        displayTarget(arg0: $RegistryEntry<$DisplayTarget, $DisplayTarget>): $CreateBlockEntityBuilder<$Object, $Object>;
        displaySource(arg0: $RegistryEntry<$DisplaySource, $DisplaySource>): $CreateBlockEntityBuilder<$Object, $Object>;
        visual(arg0: $NonNullSupplier_<$SimpleBlockEntityVisualizer$Factory<$Object>>, arg1: boolean): $CreateBlockEntityBuilder<$Object, $Object>;
        visual(arg0: $NonNullSupplier_<$SimpleBlockEntityVisualizer$Factory<$Object>>): $CreateBlockEntityBuilder<$Object, $Object>;
        visual(arg0: $NonNullSupplier_<$SimpleBlockEntityVisualizer$Factory<$Object>>, arg1: $Predicate_<$Object>): $CreateBlockEntityBuilder<$Object, $Object>;
        getVisualFactory(): $NonNullSupplier<$SimpleBlockEntityVisualizer$Factory<$Object>>;
        getRenderNormally(): $Predicate<$Object>;
        get visualFactory(): $NonNullSupplier<$SimpleBlockEntityVisualizer$Factory<$Object>>;
        get renderNormally(): $Predicate<$Object>;
    }
    export class $CreateDatamapProvider extends $DataMapProvider {
        static add<T>(arg0: $DataMapProvider$Builder<T, $Block>, arg1: $Holder_<$Block>, arg2: T): void;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $DamageTypeTagGen extends $TagsProvider<$DamageType> {
        registryKey: $ResourceKey<$Registry<$DamageType>>;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        pathProvider: $PackOutput$PathProvider;
        existingFileHelper: $ExistingFileHelper;
        modId: string;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $RuntimeDataGenerator {
        static insertIntoPack(arg0: $DynamicPack): void;
        constructor();
    }
    export class $ModelGen {
        static createOvergrown(arg0: $DataGenContext<$Block, $Block>, arg1: $BlockStateProvider, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: $ResourceLocation_): $ModelFile;
        static createOvergrown(arg0: $DataGenContext<$Block, $Block>, arg1: $BlockStateProvider, arg2: $ResourceLocation_, arg3: $ResourceLocation_): $ModelFile;
        static customItemModel<I extends $BlockItem, P>(...arg0: string[]): $NonNullFunction<$ItemBuilder<I, P>, P>;
        static customItemModel<I extends $BlockItem, P>(): $NonNullFunction<$ItemBuilder<I, P>, P>;
        constructor();
    }
    export class $AssetLookup {
        static itemModel<T extends $Item>(arg0: string): $NonNullBiConsumer<$DataGenContext<$Item, T>, $RegistrateItemModelProvider>;
        static customBlockItemModel<I extends $BlockItem>(...arg0: string[]): $NonNullBiConsumer<$DataGenContext<$Item, I>, $RegistrateItemModelProvider>;
        static customGenericItemModel<I extends $Item>(...arg0: string[]): $NonNullBiConsumer<$DataGenContext<$Item, I>, $RegistrateItemModelProvider>;
        static forPowered(arg0: $DataGenContext<never, never>, arg1: $RegistrateBlockstateProvider): $Function<$BlockState, $ModelFile>;
        static forPowered(arg0: $DataGenContext<never, never>, arg1: $RegistrateBlockstateProvider, arg2: string): $Function<$BlockState, $ModelFile>;
        static itemModelWithPartials<T extends $Item>(): $NonNullBiConsumer<$DataGenContext<$Item, T>, $RegistrateItemModelProvider>;
        static withIndicator(arg0: $DataGenContext<never, never>, arg1: $RegistrateBlockstateProvider, arg2: $Function_<$BlockState, $ModelFile>, arg3: $IntegerProperty): $Function<$BlockState, $ModelFile>;
        static standardModel(arg0: $DataGenContext<never, never>, arg1: $RegistrateBlockstateProvider): $ModelFile;
        static existingItemModel<T extends $Item>(): $NonNullBiConsumer<$DataGenContext<$Item, T>, $RegistrateItemModelProvider>;
        static partialBaseModel(arg0: $DataGenContext<never, never>, arg1: $RegistrateBlockstateProvider, ...arg2: string[]): $ModelFile;
        static customItemModel<I extends $BlockItem>(arg0: $DataGenContext<$Item, I>, arg1: $RegistrateItemModelProvider): $ItemModelBuilder;
        constructor();
    }
    export class $BlockStateGen {
        static horizontalWheelProvider<T extends $Block>(arg0: boolean): $NonNullBiConsumer<$DataGenContext<$Block, T>, $RegistrateBlockstateProvider>;
        static directionalAxisBlock<T extends $DirectionalAxisKineticBlock>(arg0: $DataGenContext<$Block, T>, arg1: $RegistrateBlockstateProvider, arg2: $BiFunction_<$BlockState, boolean, $ModelFile>): void;
        static horizontalBlockProvider<T extends $Block>(arg0: boolean): $NonNullBiConsumer<$DataGenContext<$Block, T>, $RegistrateBlockstateProvider>;
        static uvLockedTrapdoorBlock<P extends $TrapDoorBlock>(arg0: P, arg1: $ModelFile, arg2: $ModelFile, arg3: $ModelFile): $NonNullBiConsumer<$DataGenContext<$Block, P>, $RegistrateBlockstateProvider>;
        static directionalBlockProvider<T extends $Block>(arg0: boolean): $NonNullBiConsumer<$DataGenContext<$Block, T>, $RegistrateBlockstateProvider>;
        static cubeAll<T extends $Block>(arg0: $DataGenContext<$Block, T>, arg1: $RegistrateBlockstateProvider, arg2: string, arg3: string): void;
        static cubeAll<T extends $Block>(arg0: $DataGenContext<$Block, T>, arg1: $RegistrateBlockstateProvider, arg2: string): void;
        static axisBlockProvider<T extends $Block>(arg0: boolean): $NonNullBiConsumer<$DataGenContext<$Block, T>, $RegistrateBlockstateProvider>;
        static horizontalAxisBlock<T extends $Block>(arg0: $DataGenContext<$Block, T>, arg1: $RegistrateBlockstateProvider, arg2: $Function_<$BlockState, $ModelFile>): void;
        static horizontalAxisBlockProvider<T extends $Block>(arg0: boolean): $NonNullBiConsumer<$DataGenContext<$Block, T>, $RegistrateBlockstateProvider>;
        static directionalAxisBlockProvider<T extends $DirectionalAxisKineticBlock>(): $NonNullBiConsumer<$DataGenContext<$Block, T>, $RegistrateBlockstateProvider>;
        static directionalBlockIgnoresWaterlogged<T extends $Block>(arg0: $DataGenContext<$Block, T>, arg1: $RegistrateBlockstateProvider, arg2: $Function_<$BlockState, $ModelFile>): void;
        static directionalBlockProviderIgnoresWaterlogged<T extends $Block>(arg0: boolean): $NonNullBiConsumer<$DataGenContext<$Block, T>, $RegistrateBlockstateProvider>;
        static axisBlock<T extends $Block>(arg0: $DataGenContext<$Block, T>, arg1: $RegistrateBlockstateProvider, arg2: $Function_<$BlockState, $ModelFile>): void;
        static axisBlock<T extends $Block>(arg0: $DataGenContext<$Block, T>, arg1: $RegistrateBlockstateProvider, arg2: $Function_<$BlockState, $ModelFile>, arg3: boolean): void;
        static simpleBlock<T extends $Block>(arg0: $DataGenContext<$Block, T>, arg1: $RegistrateBlockstateProvider, arg2: $Function_<$BlockState, $ModelFile>): void;
        static horizontalWheel<T extends $Block>(arg0: $DataGenContext<$Block, T>, arg1: $RegistrateBlockstateProvider, arg2: $Function_<$BlockState, $ModelFile>): void;
        static simpleCubeAll<T extends $Block>(arg0: string): $NonNullBiConsumer<$DataGenContext<$Block, T>, $RegistrateBlockstateProvider>;
        static cartAssembler(): $NonNullBiConsumer<$DataGenContext<$Block, $CartAssemblerBlock>, $RegistrateBlockstateProvider>;
        static blazeHeater(): $NonNullBiConsumer<$DataGenContext<$Block, $BlazeBurnerBlock>, $RegistrateBlockstateProvider>;
        static linearChassis<B extends $LinearChassisBlock>(): $NonNullBiConsumer<$DataGenContext<$Block, B>, $RegistrateBlockstateProvider>;
        static radialChassis<B extends $RadialChassisBlock>(): $NonNullBiConsumer<$DataGenContext<$Block, B>, $RegistrateBlockstateProvider>;
        static encasedPipe<P extends $EncasedPipeBlock>(): $NonNullBiConsumer<$DataGenContext<$Block, P>, $RegistrateBlockstateProvider>;
        static whistleExtender<P extends $WhistleExtenderBlock>(): $NonNullBiConsumer<$DataGenContext<$Block, P>, $RegistrateBlockstateProvider>;
        static naturalStoneTypeBlock<P extends $Block>(arg0: string): $NonNullBiConsumer<$DataGenContext<$Block, P>, $RegistrateBlockstateProvider>;
        static pipe<P extends $FluidPipeBlock>(): $NonNullBiConsumer<$DataGenContext<$Block, P>, $RegistrateBlockstateProvider>;
        static mapToAir(arg0: $RegistrateBlockstateProvider): $Function<$BlockState, $ConfiguredModel[]>;
        constructor();
    }
    export class $BuilderTransformers {
        static casing<B extends $CasingBlock>(arg0: $Supplier_<$CTSpriteShiftEntry>): $NonNullUnaryOperator<$BlockBuilder<B, $CreateRegistrate>>;
        static encasedLargeCogwheel<B extends $EncasedCogwheelBlock, P>(arg0: string, arg1: $Supplier_<$CTSpriteShiftEntry>): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static encasedCogwheel<B extends $EncasedCogwheelBlock, P>(arg0: string, arg1: $Supplier_<$CTSpriteShiftEntry>): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static encasedShaft<B extends $EncasedShaftBlock, P>(arg0: string, arg1: $Supplier_<$CTSpriteShiftEntry>): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static cuckooClock<B extends $Block, P>(): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static valveHandle<B extends $ValveHandleBlock>(arg0: $DyeColor_): $NonNullUnaryOperator<$BlockBuilder<B, $CreateRegistrate>>;
        static mechanicalPiston<B extends $Block, P>(arg0: $PistonType_): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static layeredCasing<B extends $CasingBlock>(arg0: $Supplier_<$CTSpriteShiftEntry>, arg1: $Supplier_<$CTSpriteShiftEntry>): $NonNullUnaryOperator<$BlockBuilder<B, $CreateRegistrate>>;
        static slidingDoor<B extends $SlidingDoorBlock, P>(arg0: string): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static palettesIronBlock<B extends $Block, P>(): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static packager<B extends $Block, P>(): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static tableCloth<B extends $Block, P>(arg0: string, arg1: $NonNullSupplier_<$Block>, arg2: boolean): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static beltTunnel<B extends $BeltTunnelBlock>(arg0: string, arg1: $ResourceLocation_): $NonNullUnaryOperator<$BlockBuilder<B, $CreateRegistrate>>;
        static crate<B extends $Block, P>(arg0: string): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static scaffold<B extends $Block, P>(arg0: string, arg1: $Supplier_<$DataIngredient>, arg2: $MapColor, arg3: $CTSpriteShiftEntry, arg4: $CTSpriteShiftEntry, arg5: $CTSpriteShiftEntry): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static copycat<B extends $CopycatBlock, P>(): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static backtank<B extends $Block, P>(arg0: $Supplier_<$ItemLike>): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static ladder<B extends $Block, P>(arg0: string, arg1: $Supplier_<$DataIngredient>, arg2: $MapColor): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static bell<B extends $Block, P>(): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static trapdoor<B extends $TrapDoorBlock, P>(arg0: boolean): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static bogey<B extends $StandardBogeyBlock, P>(): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static packageItem(arg0: $PackageStyles$PackageStyle_): $ItemBuilder<$PackageItem, $CreateRegistrate>;
        static bearing<B extends $Block, P>(arg0: string, arg1: string): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        constructor();
    }
    export class $RuntimeDataGenerator$StandardBuilder<T extends $StandardProcessingRecipe<never>> extends $StandardProcessingRecipe$Builder<T> {
    }
    export class $TagGen$CreateTagAppender<T> extends $TagsProvider$TagAppender<T> {
        add(arg0: T): $TagGen$CreateTagAppender<T>;
        add(...arg0: T[]): $TagGen$CreateTagAppender<T>;
        builder: $TagBuilder;
        constructor(arg0: $TagBuilder, arg1: $Function_<T, $ResourceKey<T>>);
    }
    export class $WindowGen {
        static randomisedWindowBlock(arg0: string, arg1: $Supplier_<$ItemLike>, arg2: $Supplier_<$Supplier<$RenderType>>, arg3: boolean, arg4: $Supplier_<$MapColor>): $BlockBuilder<$WindowBlock, $CreateRegistrate>;
        static windowBlock(arg0: string, arg1: $Supplier_<$ItemLike>, arg2: $Supplier_<$CTSpriteShiftEntry>, arg3: $Supplier_<$Supplier<$RenderType>>, arg4: boolean, arg5: $NonNullFunction_<string, $ResourceLocation>, arg6: $NonNullFunction_<string, $ResourceLocation>, arg7: $Supplier_<$MapColor>): $BlockBuilder<$WindowBlock, $CreateRegistrate>;
        static customWindowPane(arg0: string, arg1: $Supplier_<$Block>, arg2: $Supplier_<$CTSpriteShiftEntry>, arg3: $Supplier_<$Supplier<$RenderType>>): $BlockBuilder<$ConnectedGlassPaneBlock, $CreateRegistrate>;
        static woodenWindowPane(arg0: $WoodType_, arg1: $Supplier_<$Block>): $BlockEntry<$ConnectedGlassPaneBlock>;
        static woodenWindowPane(arg0: $WoodType_, arg1: $Supplier_<$Block>, arg2: $Supplier_<$Supplier<$RenderType>>): $BlockEntry<$ConnectedGlassPaneBlock>;
        static woodenWindowBlock(arg0: $WoodType_, arg1: $Block, arg2: $Supplier_<$Supplier<$RenderType>>, arg3: boolean): $BlockEntry<$WindowBlock>;
        static woodenWindowBlock(arg0: $WoodType_, arg1: $Block): $BlockEntry<$WindowBlock>;
        static standardGlassPane(arg0: string, arg1: $Supplier_<$Block>, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $Supplier_<$Supplier<$RenderType>>): $BlockEntry<$GlassPaneBlock>;
        static framedGlassPane(arg0: string, arg1: $Supplier_<$Block>, arg2: $Supplier_<$CTSpriteShiftEntry>): $BlockEntry<$ConnectedGlassPaneBlock>;
        static framedGlass(arg0: string, arg1: $Supplier_<$ConnectedTextureBehaviour>): $BlockEntry<$ConnectedGlassBlock>;
        static customWindowBlock(arg0: string, arg1: $Supplier_<$ItemLike>, arg2: $Supplier_<$CTSpriteShiftEntry>, arg3: $Supplier_<$Supplier<$RenderType>>, arg4: boolean, arg5: $Supplier_<$MapColor>): $BlockEntry<$WindowBlock>;
        constructor();
    }
    export class $TagGen {
        static axeOnly<T extends $Block, P>(): $NonNullFunction<$BlockBuilder<T, P>, $BlockBuilder<T, P>>;
        static tagBlockAndItem<T extends $Block, P>(arg0: $Map_<$TagKey_<$Block>, $TagKey_<$Item>>): $NonNullFunction<$BlockBuilder<T, P>, $ItemBuilder<$BlockItem, $BlockBuilder<T, P>>>;
        static tagBlockAndItem<T extends $Block, P>(arg0: $TagKey_<$Block>, arg1: $TagKey_<$Item>): $NonNullFunction<$BlockBuilder<T, P>, $ItemBuilder<$BlockItem, $BlockBuilder<T, P>>>;
        static tagBlockAndItem<T extends $Block, P>(arg0: $CommonMetal$ItemLikeTag_): $NonNullFunction<$BlockBuilder<T, P>, $ItemBuilder<$BlockItem, $BlockBuilder<T, P>>>;
        static axeOrPickaxe<T extends $Block, P>(): $NonNullFunction<$BlockBuilder<T, P>, $BlockBuilder<T, P>>;
        static pickaxeOnly<T extends $Block, P>(): $NonNullFunction<$BlockBuilder<T, P>, $BlockBuilder<T, P>>;
        static addOptional<T extends $TagsProvider$TagAppender<never>>(arg0: T, arg1: $Mods_, arg2: $List_<string>): T;
        static addOptional<T extends $TagsProvider$TagAppender<never>>(arg0: T, arg1: $Mods_, arg2: string): T;
        constructor();
    }
    export class $SimpleDatagenIngredient implements $ICustomIngredient {
        test(arg0: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        isSimple(): boolean;
        getItems(): $Stream<$ItemStack>;
        toVanilla(): $Ingredient;
        kjs$canBeUsedForMatching(): boolean;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$getStackArray(): $ItemStack[];
        kjs$asIngredient(): $Ingredient;
        getStacks(): $ItemStackSet;
        getItemTypes(): $Set<$Item>;
        getFirst(): $ItemStack;
        getItemIds(): $Set<string>;
        getItemStream(): $Stream<$Item>;
        testItem(item: $Item): boolean;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        constructor(arg0: $DatagenMod_, arg1: string);
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get items(): $Stream<$ItemStack>;
        get stacks(): $ItemStackSet;
        get itemTypes(): $Set<$Item>;
        get first(): $ItemStack;
        get itemIds(): $Set<string>;
        get itemStream(): $Stream<$Item>;
        get wildcard(): boolean;
    }
    export class $SharedProperties {
        static softMetal(): $Block;
        static stone(): $Block;
        static copperMetal(): $Block;
        static netheriteMetal(): $Block;
        static wooden(): $Block;
        constructor();
    }
    export class $DirectionalAxisBlockStateGen extends $SpecialBlockStateGen {
        getModelPrefix<T extends $Block>(arg0: $DataGenContext<$Block, T>, arg1: $RegistrateBlockstateProvider, arg2: $BlockState_): string;
        constructor();
    }
    export class $SpecialBlockStateGen {
        generate<T extends $Block>(arg0: $DataGenContext<$Block, T>, arg1: $RegistrateBlockstateProvider): void;
        getModel<T extends $Block>(arg0: $DataGenContext<$Block, T>, arg1: $RegistrateBlockstateProvider, arg2: $BlockState_): $ModelFile;
        constructor();
    }
    export class $VirtualFluidBuilder<T extends $BaseFlowingFluid, P> extends $FluidBuilder<T, P> {
        constructor(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $ResourceLocation_, arg5: $ResourceLocation_, arg6: $FluidBuilder$FluidTypeFactory_, arg7: $NonNullFunction_<$BaseFlowingFluid$Properties, T>, arg8: $NonNullFunction_<$BaseFlowingFluid$Properties, T>);
    }
    export class $TagGen$CreateTagsProvider<T> {
        tag(arg0: $TagKey_<T>): $TagGen$CreateTagAppender<T>;
        getOrCreateRawBuilder(arg0: $TagKey_<T>): $TagBuilder;
        constructor(arg0: $RegistrateTagsProvider<T>, arg1: $Function_<T, $Holder$Reference<T>>);
    }
    export class $CreateRegistrate extends $AbstractRegistrate<$CreateRegistrate> {
        static create(arg0: string): $CreateRegistrate;
        static blockModel<T extends $Block>(arg0: $Supplier_<$NonNullFunction<$BakedModel, $BakedModel>>): $NonNullConsumer<T>;
        static itemModel<T extends $Item>(arg0: $Supplier_<$NonNullFunction<$BakedModel, $BakedModel>>): $NonNullConsumer<T>;
        entity<T extends $Entity>(arg0: string, arg1: $EntityType$EntityFactory_<T>, arg2: $MobCategory_): $CreateEntityBuilder<T, $CreateRegistrate>;
        entity<T extends $Entity, P>(arg0: P, arg1: string, arg2: $EntityType$EntityFactory_<T>, arg3: $MobCategory_): $CreateEntityBuilder<T, P>;
        registerEventListeners(arg0: $IEventBus): $CreateRegistrate;
        setTooltipModifierFactory(arg0: $Function_<$Item, $TooltipModifier>): $CreateRegistrate;
        blockEntity<T extends $BlockEntity>(arg0: string, arg1: $BlockEntityBuilder$BlockEntityFactory_<T>): $CreateBlockEntityBuilder<T, $CreateRegistrate>;
        blockEntity<T extends $BlockEntity, P>(arg0: P, arg1: string, arg2: $BlockEntityBuilder$BlockEntityFactory_<T>): $CreateBlockEntityBuilder<T, P>;
        setCreativeTab(arg0: $DeferredHolder<$CreativeModeTab, $CreativeModeTab>): $CreateRegistrate;
        getCreativeTab(): $DeferredHolder<$CreativeModeTab, $CreativeModeTab>;
        static connectedTextures(arg0: $Supplier_<$ConnectedTextureBehaviour>): $NonNullConsumer<$Block>;
        paletteStoneBlock(arg0: string, arg1: $NonNullSupplier_<$Block>, arg2: boolean, arg3: boolean): $BlockBuilder<$Block, $CreateRegistrate>;
        paletteStoneBlock<T extends $Block>(arg0: string, arg1: $NonNullFunction_<$BlockBehaviour$Properties, T>, arg2: $NonNullSupplier_<$Block>, arg3: boolean, arg4: boolean): $BlockBuilder<T, $CreateRegistrate>;
        displayTarget<T extends $DisplayTarget>(arg0: string, arg1: $Supplier_<T>): $SimpleBuilder<$DisplayTarget, T, $CreateRegistrate>;
        virtualFluid(arg0: string): $FluidBuilder<$VirtualFluid, $CreateRegistrate>;
        virtualFluid(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $FluidBuilder<$VirtualFluid, $CreateRegistrate>;
        virtualFluid<T extends $BaseFlowingFluid>(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $FluidBuilder$FluidTypeFactory_, arg4: $NonNullFunction_<$BaseFlowingFluid$Properties, T>, arg5: $NonNullFunction_<$BaseFlowingFluid$Properties, T>): $FluidBuilder<T, $CreateRegistrate>;
        virtualFluid<T extends $BaseFlowingFluid>(arg0: string, arg1: $FluidBuilder$FluidTypeFactory_, arg2: $NonNullFunction_<$BaseFlowingFluid$Properties, T>, arg3: $NonNullFunction_<$BaseFlowingFluid$Properties, T>): $FluidBuilder<T, $CreateRegistrate>;
        mountedItemStorage<T extends $MountedItemStorageType<never>>(arg0: string, arg1: $Supplier_<T>): $SimpleBuilder<$MountedItemStorageType<never>, T, $CreateRegistrate>;
        standardFluid(arg0: string): $FluidBuilder<$BaseFlowingFluid$Flowing, $CreateRegistrate>;
        standardFluid(arg0: string, arg1: $FluidBuilder$FluidTypeFactory_): $FluidBuilder<$BaseFlowingFluid$Flowing, $CreateRegistrate>;
        static defaultFluidType(arg0: $FluidType$Properties, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $FluidType;
        static isInCreativeTab(arg0: $RegistryEntry<never, never>, arg1: $DeferredHolder<$CreativeModeTab, $CreativeModeTab>): boolean;
        displaySource<T extends $DisplaySource>(arg0: string, arg1: $Supplier_<T>): $SimpleBuilder<$DisplaySource, T, $CreateRegistrate>;
        static casingConnectivity<T extends $Block>(arg0: $BiConsumer_<T, $CasingConnectivity>): $NonNullConsumer<T>;
        getTooltipModifierFactory(): $Function<$Item, $TooltipModifier>;
        mountedFluidStorage<T extends $MountedFluidStorageType<never>>(arg0: string, arg1: $Supplier_<T>): $SimpleBuilder<$MountedFluidStorageType<never>, T, $CreateRegistrate>;
    }
}
