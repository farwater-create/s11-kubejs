import { $JsonObject, $JsonElement } from "@package/com/google/gson";
import { $ArmorMaterial, $Item, $ArmorItem } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ModelTemplate, $TextureMapping, $TexturedModel, $TextureSlot, $TexturedModel$Provider_ } from "@package/net/minecraft/data/models/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ItemModelGeneratorsAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $BlockStateGenerator, $PropertyDispatch, $Variant, $PropertyDispatch$C4, $MultiPartGenerator, $VariantProperties$Rotation_, $Condition$TerminalCondition, $MultiVariantGenerator } from "@package/net/minecraft/data/models/blockstates";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $ItemModelGeneratorsAccess, $TrimModelDataAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $BlockFamily, $DataProvider, $PackOutput, $CachedOutput_, $BlockFamily$Variant } from "@package/net/minecraft/data";
import { $BiConsumer, $Consumer, $BiConsumer_, $Function_, $Consumer_, $UnaryOperator_, $BiFunction_, $Function, $Supplier } from "@package/java/util/function";
import { $DripstoneThickness_, $DoorHingeSide_, $DoorHingeSide, $DoubleBlockHalf_, $Property, $BooleanProperty, $DoubleBlockHalf } from "@package/net/minecraft/world/level/block/state/properties";
import { $Holder_, $Holder, $FrontAndTop_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record, $Comparable } from "@package/java/lang";
export * as blockstates from "@package/net/minecraft/data/models/blockstates";
export * as model from "@package/net/minecraft/data/models/model";

declare module "@package/net/minecraft/data/models" {
    export class $BlockModelGenerators$BlockStateGeneratorSupplier {
    }
    export interface $BlockModelGenerators$BlockStateGeneratorSupplier {
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$BlockStateGeneratorSupplier}.
     */
    export type $BlockModelGenerators$BlockStateGeneratorSupplier_ = (() => void);
    export class $BlockModelGenerators$BlockFamilyProvider {
        fence(buttonBlock: $Block): $BlockModelGenerators$BlockFamilyProvider;
        sign(buttonBlock: $Block): $BlockModelGenerators$BlockFamilyProvider;
        wall(buttonBlock: $Block): $BlockModelGenerators$BlockFamilyProvider;
        fullBlock(block: $Block, modelTemplate: $ModelTemplate): $BlockModelGenerators$BlockFamilyProvider;
        generateFor(family: $BlockFamily): $BlockModelGenerators$BlockFamilyProvider;
        button(buttonBlock: $Block): $BlockModelGenerators$BlockFamilyProvider;
        stairs(buttonBlock: $Block): $BlockModelGenerators$BlockFamilyProvider;
        fenceGate(buttonBlock: $Block): $BlockModelGenerators$BlockFamilyProvider;
        slab(buttonBlock: $Block): $BlockModelGenerators$BlockFamilyProvider;
        pressurePlate(buttonBlock: $Block): $BlockModelGenerators$BlockFamilyProvider;
        donateModelTo(sourceBlock: $Block, block: $Block): $BlockModelGenerators$BlockFamilyProvider;
        customFence(buttonBlock: $Block): $BlockModelGenerators$BlockFamilyProvider;
        customFenceGate(buttonBlock: $Block): $BlockModelGenerators$BlockFamilyProvider;
        this$0: $BlockModelGenerators;
        constructor(mapping: $BlockModelGenerators, arg1: $TextureMapping);
    }
    export class $BlockModelGenerators$TintState extends $Enum<$BlockModelGenerators$TintState> {
        static values(): $BlockModelGenerators$TintState[];
        static valueOf(arg0: string): $BlockModelGenerators$TintState;
        getCrossPot(): $ModelTemplate;
        getCross(): $ModelTemplate;
        static NOT_TINTED: $BlockModelGenerators$TintState;
        static TINTED: $BlockModelGenerators$TintState;
        get crossPot(): $ModelTemplate;
        get cross(): $ModelTemplate;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$TintState}.
     */
    export type $BlockModelGenerators$TintState_ = "tinted" | "not_tinted";
    export class $BlockModelGenerators {
        run(): void;
        family(block: $Block): $BlockModelGenerators$BlockFamilyProvider;
        static createButton(buttonBlock: $Block, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createStairs(orientableTrapdoorBlock: $Block, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createStems(bulbBlock: $Block, sourceBlock: $Block): void;
        static createFacingDispatch(): $PropertyDispatch;
        createDoubleBlock(doubleBlock: $Block, topHalfModelLocation: $ResourceLocation_, bottomHalfModelLocation: $ResourceLocation_): void;
        applyRotation(frontAndTop: $FrontAndTop_, variant: $Variant): $Variant;
        static createPressurePlate(buttonBlock: $Block, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createSimpleBlock(block: $Block, modelLocation: $ResourceLocation_): $MultiVariantGenerator;
        createHangingSign(particleBlock: $Block, hangingSignBlock: $Block, wallHangingSignBlock: $Block): void;
        static createSlab(orientableTrapdoorBlock: $Block, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createWall(orientableTrapdoorBlock: $Block, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createDoor(railBlock: $Block): void;
        static createDoor(doorBlock: $Block, topLeftModelLocation: $ResourceLocation_, topLeftOpenModelLocation: $ResourceLocation_, topRightModelLocation: $ResourceLocation_, topRightOpenModelLocation: $ResourceLocation_, bottomLeftModelLocation: $ResourceLocation_, bottomLeftOpenModelLocation: $ResourceLocation_, bottomRightModelLocation: $ResourceLocation_, bottomRightOpenModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createFenceGate(fenceGateBlock: $Block, openModelLocation: $ResourceLocation_, closedModelLocation: $ResourceLocation_, wallOpenModelLocation: $ResourceLocation_, wallClosedModelLocation: $ResourceLocation_, uvLock: boolean): $BlockStateGenerator;
        static createFence(buttonBlock: $Block, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createTrivialCube(railBlock: $Block): void;
        createTrivialBlock(axisAlignedPillarBlock: $Block, provider: $TexturedModel$Provider_): void;
        createTrivialBlock(block: $Block, textureMapping: $TextureMapping, modelTemplate: $ModelTemplate): void;
        copyDoorModel(bulbBlock: $Block, sourceBlock: $Block): void;
        static configureDoorHalf(properties: $PropertyDispatch$C4<$Direction_, $DoubleBlockHalf_, $DoorHingeSide_, boolean>, half: $DoubleBlockHalf_, leftModelLocation: $ResourceLocation_, leftOpenModelLocation: $ResourceLocation_, rightModelLocation: $ResourceLocation_, rightOpenModelLocation: $ResourceLocation_): $PropertyDispatch$C4<$Direction, $DoubleBlockHalf, $DoorHingeSide, boolean>;
        copyTrapdoorModel(bulbBlock: $Block, sourceBlock: $Block): void;
        woodProvider(logBlock: $Block): $BlockModelGenerators$WoodProvider;
        createCrossBlock(crossBlock: $Block, tintState: $BlockModelGenerators$TintState_): void;
        createCrossBlock(crossBlock: $Block, tintState: $BlockModelGenerators$TintState_, property: $Property<number>, ...propertyValues: number[]): void;
        createCrossBlock(crossBlock: $Block, tintState: $BlockModelGenerators$TintState_, textureMapping: $TextureMapping): void;
        createPlant(growingPlantBlock: $Block, plantBlock: $Block, tintState: $BlockModelGenerators$TintState_): void;
        createCoralFans(bulbBlock: $Block, sourceBlock: $Block): void;
        createSimpleFlatItemModel(railBlock: $Block): void;
        createSimpleFlatItemModel(flatBlock: $Block, layerZeroTextureSuffix: string): void;
        createSimpleFlatItemModel(flatItem: $Item): void;
        static createOrientableTrapdoor(orientableTrapdoorBlock: $Block, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createOrientableTrapdoor(railBlock: $Block): void;
        delegateItemModel(item: $Item, delegateModelLocation: $ResourceLocation_): void;
        delegateItemModel(airLikeBlock: $Block, particleTexture: $ResourceLocation_): void;
        skipAutoItemBlock(railBlock: $Block): void;
        static createCustomFence(customFenceBlock: $Block, postModelId: $ResourceLocation_, northModelId: $ResourceLocation_, eastModelId: $ResourceLocation_, southModelId: $ResourceLocation_, westModelId: $ResourceLocation_): $BlockStateGenerator;
        createTrapdoor(railBlock: $Block): void;
        static createTrapdoor(orientableTrapdoorBlock: $Block, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        blockEntityModels(entityBlockModelLocation: $ResourceLocation_, particleBlock: $Block): $BlockModelGenerators$BlockEntityModelGenerator;
        blockEntityModels(entityBlockBaseModel: $Block, particleBlock: $Block): $BlockModelGenerators$BlockEntityModelGenerator;
        createCropBlock(cropBlock: $Block, ageProperty: $Property<number>, ...ageToVisualStageMapping: number[]): void;
        createNyliumBlock(railBlock: $Block): void;
        createGlassBlocks(bulbBlock: $Block, sourceBlock: $Block): void;
        createCopperBulb(bulbBlock: $Block, unlit: $ResourceLocation_, unlitPowered: $ResourceLocation_, lit: $ResourceLocation_, litPowered: $ResourceLocation_): $BlockStateGenerator;
        createCopperBulb(railBlock: $Block): void;
        createAirLikeBlock(airLikeBlock: $Block, particleItem: $Item): void;
        createAirLikeBlock(airLikeBlock: $Block, particleTexture: $ResourceLocation_): void;
        createBambooModels(age: number): $List<$Variant>;
        createCoral(coralBlock: $Block, deadCoralBlock: $Block, coralFullBlock: $Block, deadCoralFullBlock: $Block, coralFanBlock: $Block, deadCoralFanBlock: $Block, coralWallFanBlock: $Block, deadCoralWallFanBlock: $Block): void;
        createAnvil(railBlock: $Block): void;
        createPassiveRail(railBlock: $Block): void;
        createCampfires(...campfireBlocks: $Block[]): void;
        createActiveRail(railBlock: $Block): void;
        createDoublePlant(crossBlock: $Block, tintState: $BlockModelGenerators$TintState_): void;
        createAzalea(railBlock: $Block): void;
        createGenericCube(railBlock: $Block): void;
        createFurnace(axisAlignedPillarBlock: $Block, provider: $TexturedModel$Provider_): void;
        createPottedAzalea(railBlock: $Block): void;
        createBeeNest(beeNestBlock: $Block, textureMappingGetter: $Function_<$Block, $TextureMapping>): void;
        createCommandBlock(railBlock: $Block): void;
        createLantern(railBlock: $Block): void;
        createFlowerBed(railBlock: $Block): void;
        createNormalTorch(bulbBlock: $Block, sourceBlock: $Block): void;
        createShulkerBox(railBlock: $Block): void;
        createBedItem(bulbBlock: $Block, sourceBlock: $Block): void;
        addBookSlotModel(generator: $MultiPartGenerator, condition: $Condition$TerminalCondition, rotation: $VariantProperties$Rotation_, hasBookProperty: $BooleanProperty, template: $ModelTemplate, hasBook: boolean): void;
        createNetherRoots(bulbBlock: $Block, sourceBlock: $Block): void;
        createMultiface(railBlock: $Block): void;
        createGrowingPlant(growingPlantBlock: $Block, plantBlock: $Block, tintState: $BlockModelGenerators$TintState_): void;
        createColoredBlockWithRandomRotations(modelProvider: $TexturedModel$Provider_, ...coloredBlocks: $Block[]): void;
        createRotatedPillarWithHorizontalVariant(rotatedPillarBlock: $Block, modelProvider: $TexturedModel$Provider_, horizontalModelProvider: $TexturedModel$Provider_): void;
        static createRotatedPillarWithHorizontalVariant(buttonBlock: $Block, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createAxisAlignedPillarBlockCustomModel(airLikeBlock: $Block, particleTexture: $ResourceLocation_): void;
        createColoredBlockWithStateRotations(modelProvider: $TexturedModel$Provider_, ...coloredBlocks: $Block[]): void;
        static createNorthWestMirroredCubeGenerator(columnBlock: $Block, location: $ResourceLocation_, textureMapping: $TextureMapping, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        static createHorizontalFacingDispatchAlt(): $PropertyDispatch;
        static createMirroredColumnGenerator(columnBlock: $Block, location: $ResourceLocation_, textureMapping: $TextureMapping, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        createCrossBlockWithDefaultItem(crossBlock: $Block, tintState: $BlockModelGenerators$TintState_): void;
        createCrossBlockWithDefaultItem(crossBlock: $Block, tintState: $BlockModelGenerators$TintState_, textureMapping: $TextureMapping): void;
        static createHorizontalFacingDispatch(): $PropertyDispatch;
        static createAxisAlignedPillarBlock(axisAlignedPillarBlock: $Block, modelLocation: $ResourceLocation_): $BlockStateGenerator;
        createAxisAlignedPillarBlock(axisAlignedPillarBlock: $Block, provider: $TexturedModel$Provider_): void;
        createRotatedMirroredVariantBlock(railBlock: $Block): void;
        static createTorchHorizontalDispatch(): $PropertyDispatch;
        static createMirroredCubeGenerator(columnBlock: $Block, location: $ResourceLocation_, textureMapping: $TextureMapping, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        createPointedDripstoneVariant(direction: $Direction_, dripstoneThickness: $DripstoneThickness_): $Variant;
        createNonTemplateHorizontalBlock(railBlock: $Block): void;
        addSlotStateAndRotationVariants(generator: $MultiPartGenerator, condition: $Condition$TerminalCondition, rotation: $VariantProperties$Rotation_): void;
        createNonTemplateModelBlock(railBlock: $Block): void;
        createNonTemplateModelBlock(bulbBlock: $Block, sourceBlock: $Block): void;
        createWeightedPressurePlate(bulbBlock: $Block, sourceBlock: $Block): void;
        createHorizontallyRotatedBlock(axisAlignedPillarBlock: $Block, provider: $TexturedModel$Provider_): void;
        static wrapModels(modelLocations: $List_<$ResourceLocation_>, variantMapper: $UnaryOperator_<$Variant>): $List<$Variant>;
        copyModel(bulbBlock: $Block, sourceBlock: $Block): void;
        createColumnWithFacing(): $PropertyDispatch;
        static createRotatedPillar(): $PropertyDispatch;
        createSuffixedVariant(block: $Block, suffix: string, modelTemplate: $ModelTemplate, textureMappingGetter: $Function_<$ResourceLocation, $TextureMapping>): $ResourceLocation;
        createFullAndCarpetBlocks(bulbBlock: $Block, sourceBlock: $Block): void;
        createBrushableBlock(railBlock: $Block): void;
        static createEmptyOrFullDispatch<T extends $Comparable<T>>(property: $Property<T>, minimumValueForFullVariant: T, fullVariantModelLocation: $ResourceLocation_, emptyVariantModelLocation: $ResourceLocation_): $PropertyDispatch;
        createRotatedVariantBlock(railBlock: $Block): void;
        createMushroomBlock(railBlock: $Block): void;
        static createRotatedVariants(modelLocation: $ResourceLocation_): $Variant[];
        createCraftingTableLike(craftingTableBlock: $Block, craftingTableMaterialBlock: $Block, textureMappingGetter: $BiFunction_<$Block, $Block, $TextureMapping>): void;
        createPumpkinVariant(pumpkinBlock: $Block, columnTextureMapping: $TextureMapping): void;
        createDispenserBlock(railBlock: $Block): void;
        static createRotatedVariant(block: $Block, normalModelLocation: $ResourceLocation_, mirroredModelLocation: $ResourceLocation_): $MultiVariantGenerator;
        static createRotatedVariant(block: $Block, modelLocation: $ResourceLocation_): $MultiVariantGenerator;
        static createBooleanModelDispatch(property: $BooleanProperty, trueModelLocation: $ResourceLocation_, falseModelLocation: $ResourceLocation_): $PropertyDispatch;
        static createPillarBlockUVLocked(block: $Block, textureMapping: $TextureMapping, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        createTurtleEggModel(hatchAmount: number, variantName: string, textureMapping: $TextureMapping): $ResourceLocation;
        createTurtleEggModel(eggAmount: number, variantId: number): $ResourceLocation;
        copyCopperBulbModel(bulbBlock: $Block, sourceBlock: $Block): void;
        createAmethystCluster(railBlock: $Block): void;
        createRotatableColumn(railBlock: $Block): void;
        createFloorFireModels(fireBlock: $Block): $List<$ResourceLocation>;
        createSideFireModels(fireBlock: $Block): $List<$ResourceLocation>;
        createCandleAndCandleCake(bulbBlock: $Block, sourceBlock: $Block): void;
        createTopFireModels(fireBlock: $Block): $List<$ResourceLocation>;
        createGrassLikeBlock(grassLikeBlock: $Block, modelLocation: $ResourceLocation_, variant: $Variant): void;
        createPistonVariant(pistonBlock: $Block, baseModelLocation: $ResourceLocation_, topTextureMapping: $TextureMapping): void;
        static MULTIFACE_GENERATOR: $List<$Pair<$BooleanProperty, $Function<$ResourceLocation, $Variant>>>;
        nonOrientableTrapdoor: $List<$Block>;
        texturedModels: $Map<$Block, $TexturedModel>;
        fullBlockModelCustomGenerators: $Map<$Block, $BlockModelGenerators$BlockStateGeneratorSupplier>;
        blockStateOutput: $Consumer<$BlockStateGenerator>;
        modelOutput: $BiConsumer<$ResourceLocation, $Supplier<$JsonElement>>;
        static SHAPE_CONSUMERS: $Map<$BlockFamily$Variant, $BiConsumer<$BlockModelGenerators$BlockFamilyProvider, $Block>>;
        constructor(blockStateOutput: $Consumer_<$BlockStateGenerator>, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>, skippedAutoModelsOutput: $Consumer_<$Item>);
    }
    export class $ModelProvider implements $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        handler$jgi000$fabric_data_generation_api_v1$init(arg0: $PackOutput, arg1: $CallbackInfo): void;
        constructor(output: $PackOutput);
        get name(): string;
    }
    export class $ItemModelGenerators implements $ItemModelGeneratorsAccess, $ItemModelGeneratorsAccessor {
        run(): void;
        generateItemWithOverlay(item: $Item): void;
        generateLayeredItem(modelLocation: $ResourceLocation_, layer0: $ResourceLocation_, layer1: $ResourceLocation_): void;
        generateLayeredItem(modelLocation: $ResourceLocation_, layer0: $ResourceLocation_, layer1: $ResourceLocation_, layer2: $ResourceLocation_): void;
        generateCompassItem(item: $Item): void;
        generateClockItem(item: $Item): void;
        generateArmorTrims(armorItem: $ArmorItem): void;
        generateFlatItem(item: $Item, layerZeroItem: $Item, modelTemplate: $ModelTemplate): void;
        generateFlatItem(item: $Item, modelTemplate: $ModelTemplate): void;
        generateFlatItem(item: $Item, modelLocationSuffix: string, modelTemplate: $ModelTemplate): void;
        static getGENERATED_TRIM_MODELS$create_$md$707fe4$1(): $List<any>;
        getItemModelForTrimMaterial(modelLocation: $ResourceLocation_, trimId: string): $ResourceLocation;
        generateBaseArmorTrimTemplate(modelLocation: $ResourceLocation_, modelGetter: $Map_<$TextureSlot, $ResourceLocation_>, armorMaterial: $Holder_<$ArmorMaterial>): $JsonObject;
        static getGeneratedTrimModels$immersiveengineering_$md$707fe4$0(): $List<any>;
        output: $BiConsumer<$ResourceLocation, $Supplier<$JsonElement>>;
        static GENERATED_TRIM_MODELS: $List<$ItemModelGenerators$TrimModelData>;
        static TRIM_TYPE_PREDICATE_ID: $ResourceLocation;
        constructor(output: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>);
        static get GENERATED_TRIM_MODELS$create_$md$707fe4$1(): $List<any>;
        static get generatedTrimModels$immersiveengineering_$md$707fe4$0(): $List<any>;
    }
    export class $BlockModelGenerators$WoodProvider {
        log(logBlock: $Block): $BlockModelGenerators$WoodProvider;
        wood(logBlock: $Block): $BlockModelGenerators$WoodProvider;
        logWithHorizontal(logBlock: $Block): $BlockModelGenerators$WoodProvider;
        logUVLocked(logBlock: $Block): $BlockModelGenerators$WoodProvider;
        this$0: $BlockModelGenerators;
        constructor(logMapping: $BlockModelGenerators, arg1: $TextureMapping);
    }
    export class $ItemModelGenerators$TrimModelData extends $Record implements $TrimModelDataAccess {
        name(armorMaterial: $Holder_<$ArmorMaterial>): string;
        name(): string;
        overrideArmorMaterials(): $Map<$Holder<$ArmorMaterial>, string>;
        itemModelIndex(): number;
        getName(): string;
        getItemModelIndex(): number;
        constructor(arg0: string, arg1: number, arg2: $Map_<$Holder_<$ArmorMaterial>, string>);
    }
    /**
     * Values that may be interpreted as {@link $ItemModelGenerators$TrimModelData}.
     */
    export type $ItemModelGenerators$TrimModelData_ = { overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, itemModelIndex?: number, name?: string,  } | [overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, itemModelIndex?: number, name?: string, ];
    export class $BlockModelGenerators$BlockEntityModelGenerator {
        create(...blocks: $Block[]): $BlockModelGenerators$BlockEntityModelGenerator;
        createWithCustomBlockItemModel(modelTemplate: $ModelTemplate, ...blocks: $Block[]): $BlockModelGenerators$BlockEntityModelGenerator;
        createWithoutBlockItem(...blocks: $Block[]): $BlockModelGenerators$BlockEntityModelGenerator;
        this$0: $BlockModelGenerators;
        constructor(baseModel: $BlockModelGenerators, particleBlock: $ResourceLocation_, arg2: $Block);
    }
    export class $BlockModelGenerators$BookSlotModelCacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$BookSlotModelCacheKey}.
     */
    export type $BlockModelGenerators$BookSlotModelCacheKey_ = { modelSuffix?: string, template?: $ModelTemplate,  } | [modelSuffix?: string, template?: $ModelTemplate, ];
}
