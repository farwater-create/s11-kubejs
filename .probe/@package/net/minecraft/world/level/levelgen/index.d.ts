import { $JigsawJunction } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $DataResult, $DynamicOps, $Codec, $Lifecycle, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $HeightmapAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/combined_heightmap_update";
import { $RandomStateAccessor, $NoiseGeneratorSettingsAccessor, $NoiseBasedChunkGeneratorAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $RandomSource, $CubicSpline, $ToFloatFunction, $KeyDispatchDataCodec, $StringRepresentable, $KeyDispatchDataCodec_ } from "@package/net/minecraft/util";
import { $BeardifierAccessor } from "@package/com/github/L_Ender/cataclysm/mixin/accessor";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $CarvingContext } from "@package/net/minecraft/world/level/levelgen/carver";
import { $TerrainAdjustment_, $BoundingBox, $TerrainAdjustment } from "@package/net/minecraft/world/level/levelgen/structure";
import { $EnhancedBeardifierData } from "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/beardifier";
import { $EvalType_ } from "@package/com/ishland/c2me/opts/dfc/common/ast";
import { $BiomeResolver_, $BiomeSource, $Climate$ParameterPoint, $Climate$Sampler, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeResolver, $Climate$ParameterPoint_ } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorSettings } from "@package/net/minecraft/world/level/levelgen/flat";
import { $BlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $ProtoChunk, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $PrimaryLevelData$SpecialWorldProperty, $PrimaryLevelData$SpecialWorldProperty_ } from "@package/net/minecraft/world/level/storage";
import { $IExtendedNoiseGeneratorSettings } from "@package/terrablender/worldgen";
import { $CaveSurface_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $IFastCacheLike, $IDfcObjectCacheCapable, $ICoordinatesFilling, $NoiseRouterExtension, $IPreloadedCoordinates } from "@package/com/ishland/c2me/opts/dfc/common/ducks";
import { $Double2DoubleFunction } from "@package/it/unimi/dsi/fastutil/doubles";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $LevelStem_, $DimensionType, $LevelStem, $DimensionType_ } from "@package/net/minecraft/world/level/dimension";
import { $BeardifierAccessor as $BeardifierAccessor$1, $NoiseChunkAccessor } from "@package/com/yungnickyoung/minecraft/yungsapi/mixin/accessor";
import { $ContextBiomeAccessor, $ContextAccessor, $SurfaceSystemAccessor } from "@package/dev/worldgen/lithostitched/duck";
import { $SimplexNoise, $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters_, $NormalNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $Set_, $Map, $OptionalInt, $List, $Map_, $List_, $OptionalLong, $Set, $BitSet } from "@package/java/util";
import { $AquiferOverrideMask, $AquiferOverrideMaskSupplier } from "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/aquiferoverride";
import { $SurfaceRuleManager$RuleCategory_ } from "@package/terrablender/api";
import { $Supplier_, $Function, $Supplier, $Predicate_, $Predicate, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $ObjectListIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $HolderSet_, $BlockPos_, $Holder$Reference, $RegistryAccess$Frozen, $Holder, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $HolderGetter, $Holder_, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $StringBuilder, $Enum, $Record } from "@package/java/lang";
import { $ISimpleRandom, $IAtomicSimpleRandomDeriver, $IXoroshiro128PlusPlusRandomSplitter, $IDensityFunctionTypesEndIslands, $IBelowZeroRetrogen, $IXoroshiro128PlusPlusRandomImpl, $IDensityFunctionTypesWeirdScaledSamplerRarityValueMapper, $IAquiferSamplerFluidLevel, $IXoroshiro128PlusPlusRandom, $IXoroshiro128PlusPlusRandomDeriver, $IDensityFunctionsCaveScaler, $IChunkNoiseSamplerDensityInterpolator, $IStructureWeightSampler, $IChunkNoiseSampler, $ICheckedRandomSplitter, $IAquiferSamplerImpl, $INoiseChunkGenerator } from "@package/com/ishland/c2me/base/mixin/access";
import { $ChunkPos, $NoiseColumn, $LevelSimulatedReader, $CustomSpawner, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $Blender$BlendingOutput, $Blender } from "@package/net/minecraft/world/level/levelgen/blending";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $IExtendedNoiseGeneratorSettings as $IExtendedNoiseGeneratorSettings$1, $SurfaceRulesManager$RuleCategory_, $SurfaceRulesManager$RuleCategory } from "@package/com/github/alexthe666/citadel/server/generation";
import { $ExtendedSurfaceContext } from "@package/org/embeddedt/modernfix/world/gen";
import { $Stream } from "@package/java/util/stream";
import { $DebugChunkGeneratorAccessor } from "@package/net/fabricmc/fabric/mixin/registry/sync";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $DfcObjectCache } from "@package/com/ishland/c2me/opts/dfc/common/gen/jvm/util";
export * as structure from "@package/net/minecraft/world/level/levelgen/structure";
export * as placement from "@package/net/minecraft/world/level/levelgen/placement";
export * as feature from "@package/net/minecraft/world/level/levelgen/feature";
export * as blockpredicates from "@package/net/minecraft/world/level/levelgen/blockpredicates";
export * as blending from "@package/net/minecraft/world/level/levelgen/blending";
export * as synth from "@package/net/minecraft/world/level/levelgen/synth";
export * as heightproviders from "@package/net/minecraft/world/level/levelgen/heightproviders";
export * as carver from "@package/net/minecraft/world/level/levelgen/carver";
export * as flat from "@package/net/minecraft/world/level/levelgen/flat";
export * as presets from "@package/net/minecraft/world/level/levelgen/presets";
export * as material from "@package/net/minecraft/world/level/levelgen/material";

declare module "@package/net/minecraft/world/level/levelgen" {
    export class $DensityFunctions$HolderHolder extends $Record implements $DensityFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        "function"(): $Holder<$DensityFunction>;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        constructor(arg0: $Holder_<$DensityFunction>);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$HolderHolder}.
     */
    export type $DensityFunctions$HolderHolder_ = { function?: $Holder_<$DensityFunction>,  } | [function?: $Holder_<$DensityFunction>, ];
    export class $Xoroshiro128PlusPlus implements $IXoroshiro128PlusPlusRandomImpl {
        nextLong(): number;
        setSeedHi(arg0: number): void;
        getSeedLo(): number;
        getSeedHi(): number;
        setSeedLo(arg0: number): void;
        static CODEC: $Codec<$Xoroshiro128PlusPlus>;
        constructor(seed: $RandomSupport$Seed128bit_);
        constructor(seedLo: number, arg1: number);
    }
    export class $DensityFunctions$Constant extends $Record implements $DensityFunction$SimpleFunction {
        value(): number;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static ZERO: $DensityFunctions$Constant;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Constant>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Constant}.
     */
    export type $DensityFunctions$Constant_ = { value?: number,  } | [value?: number, ];
    export class $SurfaceRules$ConditionSource {
        static bootstrap(registry: $Registry<$MapCodec<$SurfaceRules$ConditionSource>>): $MapCodec<$SurfaceRules$ConditionSource>;
        static CODEC: $Codec<$SurfaceRules$ConditionSource>;
    }
    export interface $SurfaceRules$ConditionSource extends $Function<$SurfaceRules$Context, $SurfaceRules$Condition> {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$ConditionSource>;
    }
    export class $NoiseChunk$CacheOnce implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $IFastCacheLike {
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        c2me$describeCacheLike(): string;
        c2me$cache(x: number, y: number, z: number, evalType: $EvalType_, cached: number): void;
        c2me$cache(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): void;
        c2me$getCached(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): boolean;
        c2me$getCached(x: number, y: number, z: number, evalType: $EvalType_): number;
        c2me$withDelegate(delegate: $DensityFunction): $DensityFunction;
        c2me$isActualCache(): boolean;
        c2me$getDelegate(): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        this$0: $NoiseChunk;
        constructor(_function: $NoiseChunk, arg1: $DensityFunction);
    }
    export class $OreVeinifier$VeinType extends $Enum<$OreVeinifier$VeinType> {
    }
    /**
     * Values that may be interpreted as {@link $OreVeinifier$VeinType}.
     */
    export type $OreVeinifier$VeinType_ = "copper" | "iron";
    export class $DensityFunctions$ShiftB extends $Record implements $DensityFunctions$ShiftNoise {
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        offsetNoise(): $DensityFunction$NoiseHolder;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        compute(arg0: number, arg1: number, arg2: number): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$ShiftB>;
        constructor(arg0: $DensityFunction$NoiseHolder_);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$ShiftB}.
     */
    export type $DensityFunctions$ShiftB_ = { offsetNoise?: $DensityFunction$NoiseHolder_,  } | [offsetNoise?: $DensityFunction$NoiseHolder_, ];
    export class $DensityFunctions$ShiftA extends $Record implements $DensityFunctions$ShiftNoise {
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        offsetNoise(): $DensityFunction$NoiseHolder;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        compute(arg0: number, arg1: number, arg2: number): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$ShiftA>;
        constructor(arg0: $DensityFunction$NoiseHolder_);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$ShiftA}.
     */
    export type $DensityFunctions$ShiftA_ = { offsetNoise?: $DensityFunction$NoiseHolder_,  } | [offsetNoise?: $DensityFunction$NoiseHolder_, ];
    export class $SurfaceRules$VerticalGradientConditionSource$1VerticalGradientCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $NoiseRouter extends $Record implements $NoiseRouterExtension {
        depth(): $DensityFunction;
        c2me$setOriginalNoiseRouter(originalNoiseRouter: $NoiseRouter_): void;
        c2me$getOriginalNoiseRouter(): $NoiseRouter;
        fluidLevelSpreadNoise(): $DensityFunction;
        c2me$setFinalFinalDensity(densityFunction: $DensityFunction): void;
        fluidLevelFloodednessNoise(): $DensityFunction;
        c2me$getFinalFinalDensity(): $DensityFunction;
        finalDensity(): $DensityFunction;
        barrierNoise(): $DensityFunction;
        mapAll(visitor: $DensityFunction$Visitor_): $NoiseRouter;
        initialDensityWithoutJaggedness(): $DensityFunction;
        erosion(): $DensityFunction;
        ridges(): $DensityFunction;
        vegetation(): $DensityFunction;
        continents(): $DensityFunction;
        lavaNoise(): $DensityFunction;
        veinGap(): $DensityFunction;
        veinToggle(): $DensityFunction;
        veinRidged(): $DensityFunction;
        temperature(): $DensityFunction;
        static CODEC: $Codec<$NoiseRouter>;
        constructor(arg0: $DensityFunction, arg1: $DensityFunction, arg2: $DensityFunction, arg3: $DensityFunction, arg4: $DensityFunction, arg5: $DensityFunction, arg6: $DensityFunction, arg7: $DensityFunction, arg8: $DensityFunction, arg9: $DensityFunction, arg10: $DensityFunction, arg11: $DensityFunction, arg12: $DensityFunction, arg13: $DensityFunction, arg14: $DensityFunction);
    }
    /**
     * Values that may be interpreted as {@link $NoiseRouter}.
     */
    export type $NoiseRouter_ = { temperature?: $DensityFunction, barrierNoise?: $DensityFunction, vegetation?: $DensityFunction, depth?: $DensityFunction, ridges?: $DensityFunction, erosion?: $DensityFunction, fluidLevelSpreadNoise?: $DensityFunction, fluidLevelFloodednessNoise?: $DensityFunction, lavaNoise?: $DensityFunction, veinToggle?: $DensityFunction, initialDensityWithoutJaggedness?: $DensityFunction, continents?: $DensityFunction, veinGap?: $DensityFunction, veinRidged?: $DensityFunction, finalDensity?: $DensityFunction,  } | [temperature?: $DensityFunction, barrierNoise?: $DensityFunction, vegetation?: $DensityFunction, depth?: $DensityFunction, ridges?: $DensityFunction, erosion?: $DensityFunction, fluidLevelSpreadNoise?: $DensityFunction, fluidLevelFloodednessNoise?: $DensityFunction, lavaNoise?: $DensityFunction, veinToggle?: $DensityFunction, initialDensityWithoutJaggedness?: $DensityFunction, continents?: $DensityFunction, veinGap?: $DensityFunction, veinRidged?: $DensityFunction, finalDensity?: $DensityFunction, ];
    export class $RandomState implements $RandomStateAccessor {
        static create(registries: $HolderGetter$Provider_, settingsKey: $ResourceKey_<$NoiseGeneratorSettings>, levelSeed: number): $RandomState;
        static create(settings: $NoiseGeneratorSettings_, noiseParametersGetter: $HolderGetter<$NormalNoise$NoiseParameters_>, levelSeed: number): $RandomState;
        getOrCreateRandomFactory(location: $ResourceLocation_): $PositionalRandomFactory;
        router(): $NoiseRouter;
        surfaceSystem(): $SurfaceSystem;
        getOrCreateNoise(resourceKey: $ResourceKey_<$NormalNoise$NoiseParameters>): $NormalNoise;
        oreRandom(): $PositionalRandomFactory;
        sampler(): $Climate$Sampler;
        aquiferRandom(): $PositionalRandomFactory;
        getRandom(): $PositionalRandomFactory;
        random: $PositionalRandomFactory;
    }
    export class $WorldgenRandom$Algorithm extends $Enum<$WorldgenRandom$Algorithm> {
        static values(): $WorldgenRandom$Algorithm[];
        static valueOf(arg0: string): $WorldgenRandom$Algorithm;
        newInstance(seed: number): $RandomSource;
        static LEGACY: $WorldgenRandom$Algorithm;
        static XOROSHIRO: $WorldgenRandom$Algorithm;
    }
    /**
     * Values that may be interpreted as {@link $WorldgenRandom$Algorithm}.
     */
    export type $WorldgenRandom$Algorithm_ = "legacy" | "xoroshiro";
    export class $DensityFunctions$MulOrAdd extends $Record implements $DensityFunctions$PureTransformer, $DensityFunctions$TwoArgumentSimpleFunction {
        type(): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        transform(arg0: number): number;
        argument(): number;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        argument1(): $DensityFunction;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        argument2(): $DensityFunction;
        specificType(): $DensityFunctions$MulOrAdd$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        constructor(arg0: $DensityFunctions$MulOrAdd$Type_, arg1: $DensityFunction, arg2: number, arg3: number, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$MulOrAdd}.
     */
    export type $DensityFunctions$MulOrAdd_ = { minValue?: number, input?: $DensityFunction, argument?: number, maxValue?: number, specificType?: $DensityFunctions$MulOrAdd$Type_,  } | [minValue?: number, input?: $DensityFunction, argument?: number, maxValue?: number, specificType?: $DensityFunctions$MulOrAdd$Type_, ];
    export class $DensityFunctions$PureTransformer {
    }
    export interface $DensityFunctions$PureTransformer extends $DensityFunction {
        transform(value: number): number;
        compute(context: $DensityFunction$FunctionContext): number;
        input(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
    }
    export class $RandomState$1NoiseWiringHelper implements $DensityFunction$Visitor {
        visitNoise(noiseHolder: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
    }
    export class $DensityFunctions$MulOrAdd$Type extends $Enum<$DensityFunctions$MulOrAdd$Type> {
        static values(): $DensityFunctions$MulOrAdd$Type[];
        static valueOf(arg0: string): $DensityFunctions$MulOrAdd$Type;
        static ADD: $DensityFunctions$MulOrAdd$Type;
        static MUL: $DensityFunctions$MulOrAdd$Type;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$MulOrAdd$Type}.
     */
    export type $DensityFunctions$MulOrAdd$Type_ = "mul" | "add";
    export class $SurfaceRules$BlockRuleSource extends $Record implements $SurfaceRules$RuleSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$BlockRuleSource}.
     */
    export type $SurfaceRules$BlockRuleSource_ = { resultState?: $BlockState_, rule?: $SurfaceRules$StateRule_,  } | [resultState?: $BlockState_, rule?: $SurfaceRules$StateRule_, ];
    export class $GenerationStep$Decoration extends $Enum<$GenerationStep$Decoration> implements $StringRepresentable {
        getName(): string;
        static values(): $GenerationStep$Decoration[];
        static valueOf(arg0: string): $GenerationStep$Decoration;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static RAW_GENERATION: $GenerationStep$Decoration;
        static UNDERGROUND_STRUCTURES: $GenerationStep$Decoration;
        static LOCAL_MODIFICATIONS: $GenerationStep$Decoration;
        static TOP_LAYER_MODIFICATION: $GenerationStep$Decoration;
        static CODEC: $Codec<$GenerationStep$Decoration>;
        static UNDERGROUND_DECORATION: $GenerationStep$Decoration;
        static LAKES: $GenerationStep$Decoration;
        static SURFACE_STRUCTURES: $GenerationStep$Decoration;
        static STRONGHOLDS: $GenerationStep$Decoration;
        static FLUID_SPRINGS: $GenerationStep$Decoration;
        static VEGETAL_DECORATION: $GenerationStep$Decoration;
        static UNDERGROUND_ORES: $GenerationStep$Decoration;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GenerationStep$Decoration}.
     */
    export type $GenerationStep$Decoration_ = "raw_generation" | "lakes" | "local_modifications" | "underground_structures" | "surface_structures" | "strongholds" | "underground_ores" | "underground_decoration" | "fluid_springs" | "vegetal_decoration" | "top_layer_modification";
    export class $SurfaceRules$TestRule extends $Record implements $SurfaceRules$SurfaceRule {
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$TestRule}.
     */
    export type $SurfaceRules$TestRule_ = { condition?: $SurfaceRules$Condition_, followup?: $SurfaceRules$SurfaceRule_,  } | [condition?: $SurfaceRules$Condition_, followup?: $SurfaceRules$SurfaceRule_, ];
    export class $Aquifer$FluidPicker {
    }
    export interface $Aquifer$FluidPicker {
        computeFluid(x: number, y: number, z: number): $Aquifer$FluidStatus;
    }
    /**
     * Values that may be interpreted as {@link $Aquifer$FluidPicker}.
     */
    export type $Aquifer$FluidPicker_ = ((arg0: number, arg1: number, arg2: number) => $Aquifer$FluidStatus);
    export class $DensityFunctions$RangeChoice extends $Record implements $DensityFunction {
        compute(context: $DensityFunction$FunctionContext): number;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        maxExclusive(): number;
        whenInRange(): $DensityFunction;
        whenOutOfRange(): $DensityFunction;
        minInclusive(): number;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$RangeChoice>;
        static DATA_CODEC: $MapCodec<$DensityFunctions$RangeChoice>;
        constructor(arg0: $DensityFunction, arg1: number, arg2: number, arg3: $DensityFunction, arg4: $DensityFunction);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$RangeChoice}.
     */
    export type $DensityFunctions$RangeChoice_ = { minInclusive?: number, maxExclusive?: number, input?: $DensityFunction, whenOutOfRange?: $DensityFunction, whenInRange?: $DensityFunction,  } | [minInclusive?: number, maxExclusive?: number, input?: $DensityFunction, whenOutOfRange?: $DensityFunction, whenInRange?: $DensityFunction, ];
    export class $DensityFunctions$BeardifierMarker extends $Enum<$DensityFunctions$BeardifierMarker> implements $DensityFunctions$BeardifierOrMarker {
        static values(): $DensityFunctions$BeardifierMarker[];
        static valueOf(arg0: string): $DensityFunctions$BeardifierMarker;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static INSTANCE: $DensityFunctions$BeardifierMarker;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BeardifierMarker}.
     */
    export type $DensityFunctions$BeardifierMarker_ = "instance";
    export class $WorldDimensions$Complete extends $Record {
        dimensions(): $Registry<$LevelStem>;
        lifecycle(): $Lifecycle;
        specialWorldProperty(): $PrimaryLevelData$SpecialWorldProperty;
        dimensionsRegistryAccess(): $RegistryAccess$Frozen;
        constructor(dimensions: $Registry<$LevelStem_>, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_);
    }
    /**
     * Values that may be interpreted as {@link $WorldDimensions$Complete}.
     */
    export type $WorldDimensions$Complete_ = { dimensions?: $Registry<$LevelStem_>, specialWorldProperty?: $PrimaryLevelData$SpecialWorldProperty_,  } | [dimensions?: $Registry<$LevelStem_>, specialWorldProperty?: $PrimaryLevelData$SpecialWorldProperty_, ];
    export class $RandomSupport {
        static mixStafford13(seed: number): number;
        static upgradeSeedTo128bit(seed: number): $RandomSupport$Seed128bit;
        static upgradeSeedTo128bitUnmixed(seed: number): $RandomSupport$Seed128bit;
        static generateUniqueSeed(): number;
        static seedFromHashOf(string: string): $RandomSupport$Seed128bit;
        static GOLDEN_RATIO_64: number;
        static SILVER_RATIO_64: number;
        constructor();
    }
    export class $XoroshiroRandomSource$XoroshiroPositionalRandomFactory implements $PositionalRandomFactory, $IXoroshiro128PlusPlusRandomDeriver, $IXoroshiro128PlusPlusRandomSplitter {
        at(x: number, y: number, z: number): $RandomSource;
        fromSeed(seed: number): $RandomSource;
        fromHashOf(name: string): $RandomSource;
        parityConfigString(builder: $StringBuilder): void;
        at(pos: $BlockPos_): $RandomSource;
        fromHashOf(name: $ResourceLocation_): $RandomSource;
        getSeedLo(): number;
        getSeedHi(): number;
        constructor(seedLo: number, arg1: number);
        get seedLo(): number;
        get seedHi(): number;
    }
    export class $DensityFunctions$Mapped extends $Record implements $DensityFunctions$PureTransformer {
        type(): $DensityFunctions$Mapped$Type;
        transform(value: number): number;
        static create(type: $DensityFunctions$Mapped$Type_, input: $DensityFunction): $DensityFunctions$Mapped;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunctions$Mapped;
        compute(context: $DensityFunction$FunctionContext): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        constructor(arg0: $DensityFunctions$Mapped$Type_, arg1: $DensityFunction, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Mapped}.
     */
    export type $DensityFunctions$Mapped_ = { maxValue?: number, minValue?: number, input?: $DensityFunction, type?: $DensityFunctions$Mapped$Type_,  } | [maxValue?: number, minValue?: number, input?: $DensityFunction, type?: $DensityFunctions$Mapped$Type_, ];
    export class $SurfaceRules$SequenceRule extends $Record implements $SurfaceRules$SurfaceRule {
        rules(): $List<$SurfaceRules$SurfaceRule>;
        tryApply(i: number, j: number, k: number): $BlockState;
        constructor(arg0: $List_<$SurfaceRules$SurfaceRule_>);
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$SequenceRule}.
     */
    export type $SurfaceRules$SequenceRule_ = { rules?: $List_<$SurfaceRules$SurfaceRule_>,  } | [rules?: $List_<$SurfaceRules$SurfaceRule_>, ];
    export class $PhantomSpawner implements $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        constructor();
    }
    export class $SurfaceRules$StoneDepthCheck extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$StoneDepthCheck}.
     */
    export type $SurfaceRules$StoneDepthCheck_ = { secondaryDepthRange?: number, surfaceType?: $CaveSurface_, addSurfaceDepth?: boolean, offset?: number,  } | [secondaryDepthRange?: number, surfaceType?: $CaveSurface_, addSurfaceDepth?: boolean, offset?: number, ];
    export class $NoiseRouterData$QuantizedSpaghettiRarity implements $IDensityFunctionsCaveScaler {
        static getSpaghettiRarity3D(value: number): number;
        static getSphaghettiRarity2D(value: number): number;
        static invokeScaleTunnels$c2me_base_$md$707fe4$1(value: number): number;
        static invokeScaleCaves$c2me_base_$md$707fe4$0(value: number): number;
        constructor();
    }
    export class $Density {
        static UNRECOVERABLY_DENSE: number;
        static UNRECOVERABLY_THIN: number;
        static SURFACE: number;
        constructor();
    }
    export class $DensityFunction$SimpleFunction {
    }
    export interface $DensityFunction$SimpleFunction extends $DensityFunction {
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
    }
    export class $SurfaceRules$StateRule extends $Record implements $SurfaceRules$SurfaceRule {
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$StateRule}.
     */
    export type $SurfaceRules$StateRule_ = { state?: $BlockState_,  } | [state?: $BlockState_, ];
    export class $SurfaceRules$RuleSource {
        static bootstrap(registry: $Registry<$MapCodec<$SurfaceRules$RuleSource>>): $MapCodec<$SurfaceRules$RuleSource>;
        static CODEC: $Codec<$SurfaceRules$RuleSource>;
    }
    export interface $SurfaceRules$RuleSource extends $Function<$SurfaceRules$Context, $SurfaceRules$SurfaceRule> {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
    }
    /**
     * Aquifers are responsible for non-sea level fluids found in terrain generation, but also managing that different aquifers don't intersect with each other in ways that would create undesirable fluid placement.
     * The aquifer interface itself is a modifier on a per-block basis. It computes a block state to be placed for each position in the world.
     * 
     * Aquifers work by first partitioning a single chunk into a low resolution grid. They then generate, via various noise layers, an `AquiferStatus` at each grid point.
     * At each point, the grid cell containing that point is calculated, and then of the eight grid corners, the three closest aquifers are found, by square euclidean distance.
     * Borders between aquifers are created by comparing nearby aquifers to see if the given point is near-equidistant from them, indicating a border if so, or fluid/air depending on the aquifer height if not.
     */
    export class $Aquifer {
        /**
         * Creates a standard noise based aquifer. This aquifer will place liquid (both water and lava), air, and stone as described above.
         */
        static create(chunk: $NoiseChunk, chunkPos: $ChunkPos, noiseRouter: $NoiseRouter_, positionalRandomFactory: $PositionalRandomFactory, minY: number, height: number, globalFluidPicker: $Aquifer$FluidPicker_): $Aquifer;
        /**
         * Creates a disabled, or no-op aquifer. This will fill any open areas below sea level with the default fluid.
         */
        static createDisabled(defaultFluid: $Aquifer$FluidPicker_): $Aquifer;
    }
    export interface $Aquifer {
        computeSubstance(context: $DensityFunction$FunctionContext, substance: number): $BlockState;
        /**
         * Returns `true` if there should be a fluid update scheduled - due to a fluid block being placed in a possibly unsteady position - at the last position passed into `#computeState`.
         * This **must** be invoked only after `#computeState`, and will be using the same parameters as that method.
         */
        shouldScheduleFluidUpdate(): boolean;
    }
    export class $DensityFunction$Visitor {
    }
    export interface $DensityFunction$Visitor {
        apply(densityFunction: $DensityFunction): $DensityFunction;
        visitNoise(noiseHolder: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$Visitor}.
     */
    export type $DensityFunction$Visitor_ = ((arg0: $DensityFunction) => $DensityFunction);
    export class $Column$Ray extends $Column {
        constructor(edge: number, pointingUp: boolean);
    }
    export class $PatrolSpawner implements $CustomSpawner {
        tick(level: $ServerLevel, spawnEnemies: boolean, spawnFriendlies: boolean): number;
        constructor();
    }
    export class $DensityFunction {
        static CODEC: $Codec<$Holder<$DensityFunction>>;
        static DIRECT_CODEC: $Codec<$DensityFunction>;
        static HOLDER_HELPER_CODEC: $Codec<$DensityFunction>;
    }
    export interface $DensityFunction {
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        square(): $DensityFunction;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
    }
    export class $NoiseChunk$CacheAllInCell implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $IFastCacheLike {
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        c2me$describeCacheLike(): string;
        c2me$cache(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): void;
        c2me$cache(x: number, y: number, z: number, evalType: $EvalType_, cached: number): void;
        c2me$getCached(x: number, y: number, z: number, evalType: $EvalType_): number;
        c2me$getCached(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): boolean;
        c2me$withDelegate(delegate: $DensityFunction): $DensityFunction;
        c2me$isActualCache(): boolean;
        c2me$getDelegate(): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        noiseFiller: $DensityFunction;
        values: number[];
        this$0: $NoiseChunk;
        constructor(noiseFilter: $NoiseChunk, arg1: $DensityFunction);
    }
    export class $DensityFunction$SinglePointContext extends $Record implements $DensityFunction$FunctionContext {
        blockX(): number;
        blockY(): number;
        blockZ(): number;
        getBlender(): $Blender;
        constructor(arg0: number, arg1: number, arg2: number);
        get blender(): $Blender;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$SinglePointContext}.
     */
    export type $DensityFunction$SinglePointContext_ = { blockX?: number, blockY?: number, blockZ?: number,  } | [blockX?: number, blockY?: number, blockZ?: number, ];
    export class $LegacyRandomSource$LegacyPositionalRandomFactory implements $PositionalRandomFactory, $IAtomicSimpleRandomDeriver, $ICheckedRandomSplitter {
        at(x: number, y: number, z: number): $RandomSource;
        fromSeed(seed: number): $RandomSource;
        fromHashOf(name: string): $RandomSource;
        parityConfigString(builder: $StringBuilder): void;
        at(pos: $BlockPos_): $RandomSource;
        fromHashOf(name: $ResourceLocation_): $RandomSource;
        getSeed(): number;
        constructor(seed: number);
        get seed(): number;
    }
    export class $WorldGenerationContext {
        getGenDepth(): number;
        getMinGenY(): number;
        constructor(generator: $ChunkGenerator, level: $LevelHeightAccessor);
        get genDepth(): number;
        get minGenY(): number;
    }
    export class $NoiseChunk$NoiseInterpolator implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $IChunkNoiseSamplerDensityInterpolator, $IFastCacheLike {
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        selectCellYZ(y: number, z: number): void;
        updateForY(x: number): void;
        updateForX(x: number): void;
        updateForZ(x: number): void;
        c2me$describeCacheLike(): string;
        c2me$cache(x: number, y: number, z: number, evalType: $EvalType_, cached: number): void;
        c2me$cache(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): void;
        c2me$getCached(x: number, y: number, z: number, evalType: $EvalType_): number;
        c2me$getCached(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): boolean;
        c2me$withDelegate(delegate: $DensityFunction): $DensityFunction;
        c2me$isActualCache(): boolean;
        c2me$getDelegate(): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        invokeInterpolateY(x: number): void;
        invokeInterpolateX(x: number): void;
        invokeInterpolateZ(x: number): void;
        invokeSwapBuffers(): void;
        this$0: $NoiseChunk;
        slice0: number[][];
        slice1: number[][];
        constructor(noiseFilter: $NoiseChunk, arg1: $DensityFunction);
    }
    export class $NoiseChunk$BlockStateFiller {
    }
    export interface $NoiseChunk$BlockStateFiller {
        calculate(context: $DensityFunction$FunctionContext): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $NoiseChunk$BlockStateFiller}.
     */
    export type $NoiseChunk$BlockStateFiller_ = ((arg0: $DensityFunction$FunctionContext) => $BlockState_);
    export class $DensityFunctions$Mapped$Type extends $Enum<$DensityFunctions$Mapped$Type> implements $StringRepresentable {
        static values(): $DensityFunctions$Mapped$Type[];
        static valueOf(arg0: string): $DensityFunctions$Mapped$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HALF_NEGATIVE: $DensityFunctions$Mapped$Type;
        codec: $KeyDispatchDataCodec<$DensityFunctions$Mapped>;
        static ABS: $DensityFunctions$Mapped$Type;
        static SQUARE: $DensityFunctions$Mapped$Type;
        static QUARTER_NEGATIVE: $DensityFunctions$Mapped$Type;
        static SQUEEZE: $DensityFunctions$Mapped$Type;
        static CUBE: $DensityFunctions$Mapped$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Mapped$Type}.
     */
    export type $DensityFunctions$Mapped$Type_ = "abs" | "square" | "cube" | "half_negative" | "quarter_negative" | "squeeze";
    export class $NoiseChunk$BlendAlpha implements $NoiseChunk$NoiseChunkDensityFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        wrapped(): $DensityFunction;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        this$0: $NoiseChunk;
        constructor(arg0: $NoiseChunk);
    }
    export class $GenerationStep$Carving extends $Enum<$GenerationStep$Carving> implements $StringRepresentable {
        getName(): string;
        static values(): $GenerationStep$Carving[];
        static valueOf(arg0: string): $GenerationStep$Carving;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$GenerationStep$Carving>;
        static LIQUID: $GenerationStep$Carving;
        static AIR: $GenerationStep$Carving;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GenerationStep$Carving}.
     */
    export type $GenerationStep$Carving_ = "air" | "liquid";
    export class $WorldDimensions extends $Record {
        get(stemKey: $ResourceKey_<$LevelStem>): ($LevelStem) | undefined;
        dimensions(): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        isDebug(): boolean;
        levels(): $ImmutableSet<$ResourceKey<$Level>>;
        bake(stemRegistry: $Registry<$LevelStem_>): $WorldDimensions$Complete;
        overworld(): $ChunkGenerator;
        static keysInOrder(stemKeys: $Stream<$ResourceKey_<$LevelStem>>): $Stream<$ResourceKey<$LevelStem>>;
        replaceOverworldGenerator(registryAccess: $RegistryAccess, chunkGenerator: $ChunkGenerator): $WorldDimensions;
        static withOverworld(stemMap: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, dimensionType: $Holder_<$DimensionType>, chunkGenerator: $ChunkGenerator): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static withOverworld(dimensionTypeRegistry: $Registry<$DimensionType_>, stemMap: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, chunkGenerator: $ChunkGenerator): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static checkStability(key: $ResourceKey_<$LevelStem>, stem: $LevelStem_): $Lifecycle;
        static CODEC: $MapCodec<$WorldDimensions>;
        constructor(dimensions: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>);
        constructor(stemRegistry: $Registry<$LevelStem_>);
        get debug(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldDimensions}.
     */
    export type $WorldDimensions_ = { dimensions?: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>,  } | [dimensions?: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, ];
    export class $DensityFunctions$Marker extends $Record implements $DensityFunctions$MarkerOrMarked, $IFastCacheLike {
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        wrapped(): $DensityFunction;
        minValue(): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        c2me$describeCacheLike(): string;
        c2me$cache(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): void;
        c2me$cache(x: number, y: number, z: number, evalType: $EvalType_, cached: number): void;
        c2me$getCached(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): boolean;
        c2me$getCached(x: number, y: number, z: number, evalType: $EvalType_): number;
        c2me$withDelegate(delegate: $DensityFunction): $DensityFunction;
        c2me$isActualCache(): boolean;
        c2me$getDelegate(): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        constructor(arg0: $DensityFunctions$Marker$Type_, arg1: $DensityFunction);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Marker}.
     */
    export type $DensityFunctions$Marker_ = { wrapped?: $DensityFunction, type?: $DensityFunctions$Marker$Type_,  } | [wrapped?: $DensityFunction, type?: $DensityFunctions$Marker$Type_, ];
    export class $WorldGenSettings extends $Record {
        options(): $WorldOptions;
        static encode<T>(ops: $DynamicOps<T>, options: $WorldOptions, dimensions: $WorldDimensions_): $DataResult<T>;
        static encode<T>(ops: $DynamicOps<T>, options: $WorldOptions, access: $RegistryAccess): $DataResult<T>;
        dimensions(): $WorldDimensions;
        static CODEC: $Codec<$WorldGenSettings>;
        constructor(arg0: $WorldOptions, arg1: $WorldDimensions_);
    }
    /**
     * Values that may be interpreted as {@link $WorldGenSettings}.
     */
    export type $WorldGenSettings_ = { dimensions?: $WorldDimensions_, options?: $WorldOptions,  } | [dimensions?: $WorldDimensions_, options?: $WorldOptions, ];
    export class $SurfaceRules$LazyXZCondition extends $SurfaceRules$LazyCondition {
        result: boolean;
        context: $SurfaceRules$Context;
        constructor(arg0: $SurfaceRules$Context);
    }
    export class $NoiseGeneratorSettings extends $Record implements $IExtendedNoiseGeneratorSettings$1, $NoiseGeneratorSettingsAccessor, $IExtendedNoiseGeneratorSettings {
        static end(context: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static dummy(): $NoiseGeneratorSettings;
        static bootstrap(context: $BootstrapContext<$NoiseGeneratorSettings_>): void;
        useLegacyRandomSource(): boolean;
        /**
         * @deprecated
         */
        disableMobGeneration(): boolean;
        citadel$setRuleCategory(arg0: $SurfaceRulesManager$RuleCategory_): void;
        citadel$getRuleCategory(): $SurfaceRulesManager$RuleCategory;
        surfaceRule(): $SurfaceRules$RuleSource;
        noiseSettings(): $NoiseSettings;
        defaultFluid(): $BlockState;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        isAquifersEnabled(): boolean;
        static floatingIslands(context: $BootstrapContext<never>): $NoiseGeneratorSettings;
        oreVeinsEnabled(): boolean;
        setRuleCategory(arg0: $SurfaceRuleManager$RuleCategory_): void;
        aquifersEnabled(): boolean;
        getRandomSource(): $WorldgenRandom$Algorithm;
        noiseRouter(): $NoiseRouter;
        defaultBlock(): $BlockState;
        static nether(context: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static caves(context: $BootstrapContext<never>): $NoiseGeneratorSettings;
        seaLevel(): number;
        static overworld(context: $BootstrapContext<never>, large: boolean, amplified: boolean): $NoiseGeneratorSettings;
        setNoiseRouter(noiseRouter: $NoiseRouter_): void;
        static AMPLIFIED: $ResourceKey<$NoiseGeneratorSettings>;
        static CODEC: $Codec<$Holder<$NoiseGeneratorSettings>>;
        static OVERWORLD: $ResourceKey<$NoiseGeneratorSettings>;
        static NETHER: $ResourceKey<$NoiseGeneratorSettings>;
        static CAVES: $ResourceKey<$NoiseGeneratorSettings>;
        static DIRECT_CODEC: $Codec<$NoiseGeneratorSettings>;
        static END: $ResourceKey<$NoiseGeneratorSettings>;
        static FLOATING_ISLANDS: $ResourceKey<$NoiseGeneratorSettings>;
        static LARGE_BIOMES: $ResourceKey<$NoiseGeneratorSettings>;
        constructor(arg0: $NoiseSettings_, arg1: $BlockState_, arg2: $BlockState_, arg3: $NoiseRouter_, arg4: $SurfaceRules$RuleSource, arg5: $List_<$Climate$ParameterPoint_>, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean);
        set ruleCategory(value: $SurfaceRuleManager$RuleCategory_);
        get randomSource(): $WorldgenRandom$Algorithm;
    }
    /**
     * Values that may be interpreted as {@link $NoiseGeneratorSettings}.
     */
    export type $NoiseGeneratorSettings_ = { surfaceRule?: $SurfaceRules$RuleSource, oreVeinsEnabled?: boolean, defaultBlock?: $BlockState_, noiseSettings?: $NoiseSettings_, defaultFluid?: $BlockState_, spawnTarget?: $List_<$Climate$ParameterPoint_>, noiseRouter?: $NoiseRouter_, seaLevel?: number, aquifersEnabled?: boolean, useLegacyRandomSource?: boolean, disableMobGeneration?: boolean,  } | [surfaceRule?: $SurfaceRules$RuleSource, oreVeinsEnabled?: boolean, defaultBlock?: $BlockState_, noiseSettings?: $NoiseSettings_, defaultFluid?: $BlockState_, spawnTarget?: $List_<$Climate$ParameterPoint_>, noiseRouter?: $NoiseRouter_, seaLevel?: number, aquifersEnabled?: boolean, useLegacyRandomSource?: boolean, disableMobGeneration?: boolean, ];
    export class $DensityFunctions$Shift extends $Record implements $DensityFunctions$ShiftNoise {
        compute(arg0: $DensityFunction$FunctionContext): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        offsetNoise(): $DensityFunction$NoiseHolder;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        compute(arg0: number, arg1: number, arg2: number): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Shift>;
        constructor(arg0: $DensityFunction$NoiseHolder_);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Shift}.
     */
    export type $DensityFunctions$Shift_ = { offsetNoise?: $DensityFunction$NoiseHolder_,  } | [offsetNoise?: $DensityFunction$NoiseHolder_, ];
    /**
     * @deprecated
     */
    export class $DebugLevelSource extends $ChunkGenerator implements $DebugChunkGeneratorAccessor {
        static initValidStates(): void;
        static getBlockStateFor(chunkX: number, chunkZ: number): $BlockState;
        static setX_SIDE_LENGTH$fabric_registry_sync_v0_$md$707fe4$1(arg0: number): void;
        static setBLOCK_STATES$fabric_registry_sync_v0_$md$707fe4$0(arg0: $List_<any>): void;
        static setZ_SIDE_LENGTH$fabric_registry_sync_v0_$md$707fe4$2(arg0: number): void;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $MapCodec<$DebugLevelSource>;
        static BARRIER_HEIGHT: number;
        static BARRIER: $BlockState;
        biomeSource: $BiomeSource;
        static AIR: $BlockState;
        static HEIGHT: number;
        constructor(biome: $Holder$Reference<$Biome>);
        static set x_SIDE_LENGTH$fabric_registry_sync_v0_$md$707fe4$1(value: number);
        static set BLOCK_STATES$fabric_registry_sync_v0_$md$707fe4$0(value: $List_<any>);
        static set z_SIDE_LENGTH$fabric_registry_sync_v0_$md$707fe4$2(value: number);
    }
    export class $WorldOptions {
        seed(): number;
        generateBonusChest(): boolean;
        generateStructures(): boolean;
        static randomSeed(): number;
        isOldCustomizedWorld(): boolean;
        static defaultWithRandomSeed(): $WorldOptions;
        static parseSeed(seed: string): $OptionalLong;
        withSeed(seed: $OptionalLong): $WorldOptions;
        withStructures(generateBonusChest: boolean): $WorldOptions;
        withBonusChest(generateBonusChest: boolean): $WorldOptions;
        static CODEC: $MapCodec<$WorldOptions>;
        static DEMO_OPTIONS: $WorldOptions;
        constructor(seed: number, arg1: boolean, generateStructures: boolean);
        get oldCustomizedWorld(): boolean;
    }
    export class $GeodeLayerSettings {
        filling: number;
        static CODEC: $Codec<$GeodeLayerSettings>;
        outerLayer: number;
        innerLayer: number;
        middleLayer: number;
        constructor(filling: number, arg1: number, innerLayer: number, arg3: number);
    }
    /**
     * Modifies terrain noise to be flatter near structures such as villages.
     */
    export class $Beardifier implements $DensityFunctions$BeardifierOrMarker, $EnhancedBeardifierData, $BeardifierAccessor$1, $BeardifierAccessor, $IStructureWeightSampler {
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        static forStructuresInChunk(structureManager: $StructureManager, chunkPos: $ChunkPos): $Beardifier;
        handler$znn000$yungsapi$calculateDensity(arg0: $DensityFunction$FunctionContext, arg1: $CallbackInfoReturnable<any>): void;
        getNoiseChunk(): $NoiseChunk;
        setNoiseChunk(arg0: $NoiseChunk): void;
        setEnhancedPieceIterator(arg0: $ObjectListIterator<any>): void;
        static getBuryContribution(x: number, y: number, y: number): number;
        static getBeardContribution(x: number, y: number, z: number, height: number): number;
        getEnhancedPieceIterator(): $ObjectListIterator<any>;
        static getSTRUCTURE_WEIGHT_TABLE$c2me_base_$md$707fe4$0(): number[];
        getEnhancedJunctionIterator(): $ObjectListIterator<any>;
        setEnhancedJunctionIterator(arg0: $ObjectListIterator<any>): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        getPieceIterator(): $ObjectListIterator<$Beardifier$Rigid>;
        getPiecesIter(): $ObjectListIterator<$Beardifier$Rigid>;
        getJunctionsIter(): $ObjectListIterator<$JigsawJunction>;
        getJunctionIterator(): $ObjectListIterator<$JigsawJunction>;
        junctionIterator: $ObjectListIterator<$JigsawJunction>;
        static BEARD_KERNEL_RADIUS: number;
        pieceIterator: $ObjectListIterator<$Beardifier$Rigid>;
        constructor(pieceIterator: $ObjectListIterator<$Beardifier$Rigid_>, junctionIterator: $ObjectListIterator<$JigsawJunction>);
        static get STRUCTURE_WEIGHT_TABLE$c2me_base_$md$707fe4$0(): number[];
        get piecesIter(): $ObjectListIterator<$Beardifier$Rigid>;
        get junctionsIter(): $ObjectListIterator<$JigsawJunction>;
    }
    export class $SurfaceRules$YConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$YConditionSource}.
     */
    export type $SurfaceRules$YConditionSource_ = { addStoneDepth?: boolean, anchor?: $VerticalAnchor_, surfaceDepthMultiplier?: number,  } | [addStoneDepth?: boolean, anchor?: $VerticalAnchor_, surfaceDepthMultiplier?: number, ];
    export class $SurfaceRules$WaterConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$WaterConditionSource}.
     */
    export type $SurfaceRules$WaterConditionSource_ = { offset?: number, addStoneDepth?: boolean, surfaceDepthMultiplier?: number,  } | [offset?: number, addStoneDepth?: boolean, surfaceDepthMultiplier?: number, ];
    export class $SurfaceRules$NoiseThresholdConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$NoiseThresholdConditionSource}.
     */
    export type $SurfaceRules$NoiseThresholdConditionSource_ = { minThreshold?: number, noise?: $ResourceKey_<$NormalNoise$NoiseParameters>, maxThreshold?: number,  } | [minThreshold?: number, noise?: $ResourceKey_<$NormalNoise$NoiseParameters>, maxThreshold?: number, ];
    export class $Heightmap implements $HeightmapAccessor {
        update(x: number, y: number, z: number, state: $BlockState_): boolean;
        setRawData(chunk: $ChunkAccess, type: $Heightmap$Types_, data: number[]): void;
        getRawData(): number[];
        getFirstAvailable(x: number, z: number): number;
        static primeHeightmaps(chunk: $ChunkAccess, types: $Set_<$Heightmap$Types_>): void;
        getHighestTaken(x: number, z: number): number;
        callSet(x: number, z: number, value: number): void;
        getBlockPredicate(): $Predicate<$BlockState>;
        static MATERIAL_MOTION_BLOCKING: $Predicate<$BlockState>;
        static NOT_AIR: $Predicate<$BlockState>;
        constructor(chunk: $ChunkAccess, type: $Heightmap$Types_);
        get blockPredicate(): $Predicate<$BlockState>;
    }
    export class $SurfaceRules$LazyCondition implements $SurfaceRules$Condition {
        test(): boolean;
        compute(): boolean;
        getContextLastUpdate(): number;
        result: boolean;
        context: $SurfaceRules$Context;
        constructor(context: $SurfaceRules$Context);
        get contextLastUpdate(): number;
    }
    export class $NoiseRouterData {
        static end(densityFunctions: $HolderGetter<$DensityFunction>): $NoiseRouter;
        static bootstrap(context: $BootstrapContext<$DensityFunction>): $Holder<$DensityFunction>;
        static none(): $NoiseRouter;
        static peaksAndValleys(weirdness: number): number;
        static floatingIslands(densityFunctions: $HolderGetter<$DensityFunction>, noiseParameters: $HolderGetter<$NormalNoise$NoiseParameters_>): $NoiseRouter;
        static nether(densityFunctions: $HolderGetter<$DensityFunction>, noiseParameters: $HolderGetter<$NormalNoise$NoiseParameters_>): $NoiseRouter;
        static caves(densityFunctions: $HolderGetter<$DensityFunction>, noiseParameters: $HolderGetter<$NormalNoise$NoiseParameters_>): $NoiseRouter;
        static overworld(densityFunctions: $HolderGetter<$DensityFunction>, noiseParameters: $HolderGetter<$NormalNoise$NoiseParameters_>, large: boolean, amplified: boolean): $NoiseRouter;
        static ISLAND_CHUNK_DISTANCE: number;
        static CONTINENTS: $ResourceKey<$DensityFunction>;
        static JAGGEDNESS: $ResourceKey<$DensityFunction>;
        static GLOBAL_OFFSET: number;
        static RIDGES_FOLDED: $ResourceKey<$DensityFunction>;
        static FACTOR: $ResourceKey<$DensityFunction>;
        static EROSION: $ResourceKey<$DensityFunction>;
        static ISLAND_CHUNK_DISTANCE_SQR: number;
        static EROSION_LARGE: $ResourceKey<$DensityFunction>;
        static OFFSET: $ResourceKey<$DensityFunction>;
        static CONTINENTS_LARGE: $ResourceKey<$DensityFunction>;
        static RIDGES: $ResourceKey<$DensityFunction>;
        static DEPTH: $ResourceKey<$DensityFunction>;
        constructor();
    }
    export class $SurfaceRules$StoneDepthCheck$1StoneDepthCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $BelowZeroRetrogen implements $IBelowZeroRetrogen {
        static read(tag: $CompoundTag_): $BelowZeroRetrogen;
        targetStatus(): $ChunkStatus;
        static getBiomeResolver(resolver: $BiomeResolver_, access: $ChunkAccess): $BiomeResolver;
        static replaceOldBedrock(chunk: $ProtoChunk): void;
        hasBedrockHoles(): boolean;
        applyBedrockMask(chunk: $ProtoChunk): void;
        hasBedrockHole(x: number, z: number): boolean;
        invokeGetTargetStatus(): $ChunkStatus;
        getMissingBedrock(): $BitSet;
        static CODEC: $Codec<$BelowZeroRetrogen>;
        static UPGRADE_HEIGHT_ACCESSOR: $LevelHeightAccessor;
        get missingBedrock(): $BitSet;
    }
    export class $PositionalRandomFactory {
    }
    export interface $PositionalRandomFactory {
        at(pos: $BlockPos_): $RandomSource;
        at(x: number, y: number, z: number): $RandomSource;
        fromSeed(seed: number): $RandomSource;
        fromHashOf(name: string): $RandomSource;
        fromHashOf(name: $ResourceLocation_): $RandomSource;
        parityConfigString(builder: $StringBuilder): void;
    }
    export class $DensityFunctions$ShiftNoise {
    }
    export interface $DensityFunctions$ShiftNoise extends $DensityFunction {
        compute(x: number, arg1: number, y: number): number;
        maxValue(): number;
        minValue(): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        offsetNoise(): $DensityFunction$NoiseHolder;
    }
    export class $SurfaceRules$Context$TemperatureHelperCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $DensityFunctions$Spline$Coordinate extends $Record implements $ToFloatFunction<$DensityFunctions$Spline$Point> {
        apply(object: $DensityFunctions$Spline$Point_): number;
        "function"(): $Holder<$DensityFunction>;
        maxValue(): number;
        minValue(): number;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunctions$Spline$Coordinate;
        comap<C2>(converter: $Function_<C2, $DensityFunctions$Spline$Point>): $ToFloatFunction<C2>;
        static CODEC: $Codec<$DensityFunctions$Spline$Coordinate>;
        constructor(arg0: $Holder_<$DensityFunction>);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Spline$Coordinate}.
     */
    export type $DensityFunctions$Spline$Coordinate_ = { function?: $Holder_<$DensityFunction>,  } | [function?: $Holder_<$DensityFunction>, ];
    export class $SurfaceRules$Steep extends $Enum<$SurfaceRules$Steep> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Steep}.
     */
    export type $SurfaceRules$Steep_ = "instance";
    export class $Heightmap$Usage extends $Enum<$Heightmap$Usage> {
        static values(): $Heightmap$Usage[];
        static valueOf(arg0: string): $Heightmap$Usage;
        static WORLDGEN: $Heightmap$Usage;
        static LIVE_WORLD: $Heightmap$Usage;
        static CLIENT: $Heightmap$Usage;
    }
    /**
     * Values that may be interpreted as {@link $Heightmap$Usage}.
     */
    export type $Heightmap$Usage_ = "worldgen" | "live_world" | "client";
    export class $VerticalAnchor$AboveBottom extends $Record implements $VerticalAnchor {
        offset(): number;
        resolveY(arg0: $WorldGenerationContext): number;
        static CODEC: $Codec<$VerticalAnchor$AboveBottom>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor$AboveBottom}.
     */
    export type $VerticalAnchor$AboveBottom_ = { offset?: number,  } | [offset?: number, ];
    export class $Beardifier$Rigid extends $Record {
        box(): $BoundingBox;
        groundLevelDelta(): number;
        terrainAdjustment(): $TerrainAdjustment;
        constructor(box: $BoundingBox, terrainAdjustment: $TerrainAdjustment_, groundLevelDelta: number);
    }
    /**
     * Values that may be interpreted as {@link $Beardifier$Rigid}.
     */
    export type $Beardifier$Rigid_ = { box?: $BoundingBox, terrainAdjustment?: $TerrainAdjustment_, groundLevelDelta?: number,  } | [box?: $BoundingBox, terrainAdjustment?: $TerrainAdjustment_, groundLevelDelta?: number, ];
    export class $XoroshiroRandomSource implements $RandomSource, $IXoroshiro128PlusPlusRandom {
        nextDouble(): number;
        nextInt(bound: number): number;
        nextInt(): number;
        setSeed(seed: number): void;
        nextFloat(): number;
        nextGaussian(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        fork(): $RandomSource;
        consumeCount(count: number): void;
        forkPositional(): $PositionalRandomFactory;
        nextInt(min: number, max: number): number;
        nextIntBetweenInclusive(min: number, max: number): number;
        triangle(min: number, arg1: number): number;
        getImplementation(): $Xoroshiro128PlusPlus;
        static CODEC: $Codec<$XoroshiroRandomSource>;
        constructor(seedLo: number, arg1: number);
        constructor(seed: $RandomSupport$Seed128bit_);
        constructor(seed: number);
        set seed(value: number);
        get implementation(): $Xoroshiro128PlusPlus;
    }
    export class $SurfaceRules$AbovePreliminarySurface extends $Enum<$SurfaceRules$AbovePreliminarySurface> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$AbovePreliminarySurface}.
     */
    export type $SurfaceRules$AbovePreliminarySurface_ = "instance";
    export class $DensityFunctions$BlendDensity extends $Record implements $DensityFunctions$TransformerWithContext {
        transform(arg0: $DensityFunction$FunctionContext, arg1: number): number;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        compute(arg0: $DensityFunction$FunctionContext): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$BlendDensity>;
        constructor(arg0: $DensityFunction);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BlendDensity}.
     */
    export type $DensityFunctions$BlendDensity_ = { input?: $DensityFunction,  } | [input?: $DensityFunction, ];
    export class $SurfaceRules$NoiseThresholdConditionSource$1NoiseThresholdCondition extends $SurfaceRules$LazyXZCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $SurfaceRules$VerticalGradientConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$VerticalGradientConditionSource}.
     */
    export type $SurfaceRules$VerticalGradientConditionSource_ = { falseAtAndAbove?: $VerticalAnchor_, randomName?: $ResourceLocation_, trueAtAndBelow?: $VerticalAnchor_,  } | [falseAtAndAbove?: $VerticalAnchor_, randomName?: $ResourceLocation_, trueAtAndBelow?: $VerticalAnchor_, ];
    export class $DensityFunctions$BlendOffset extends $Enum<$DensityFunctions$BlendOffset> implements $DensityFunction$SimpleFunction {
        static values(): $DensityFunctions$BlendOffset[];
        static valueOf(arg0: string): $DensityFunctions$BlendOffset;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
        static INSTANCE: $DensityFunctions$BlendOffset;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BlendOffset}.
     */
    export type $DensityFunctions$BlendOffset_ = "instance";
    /**
     * Represents a resolvable height value, or y coordinate, based on the world minimum and maximum height.
     * Can take one of the following three forms:
     * 
     * - An absolute y value (`Absolute`).
     * - A height above the lowest valid y value in the level (`AboveBottom`).
     * - A height below the highest valid y value in the level (`BelowTop`).
     */
    export class $VerticalAnchor {
        static bottom(): $VerticalAnchor;
        static top(): $VerticalAnchor;
        static absolute(value: number): $VerticalAnchor;
        static aboveBottom(value: number): $VerticalAnchor;
        static belowTop(value: number): $VerticalAnchor;
        static CODEC: $Codec<$VerticalAnchor>;
        static TOP: $VerticalAnchor;
        static BOTTOM: $VerticalAnchor;
    }
    export interface $VerticalAnchor {
        resolveY(context: $WorldGenerationContext): number;
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor}.
     */
    export type $VerticalAnchor_ = ((arg0: $WorldGenerationContext) => number);
    export class $VerticalAnchor$BelowTop extends $Record implements $VerticalAnchor {
        offset(): number;
        resolveY(arg0: $WorldGenerationContext): number;
        static CODEC: $Codec<$VerticalAnchor$BelowTop>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor$BelowTop}.
     */
    export type $VerticalAnchor$BelowTop_ = { offset?: number,  } | [offset?: number, ];
    export class $DensityFunctions$TransformerWithContext {
    }
    export interface $DensityFunctions$TransformerWithContext extends $DensityFunction {
        transform(context: $DensityFunction$FunctionContext, value: number): number;
        compute(context: $DensityFunction$FunctionContext): number;
        input(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
    }
    export class $SurfaceRules$SurfaceRule {
    }
    export interface $SurfaceRules$SurfaceRule {
        tryApply(x: number, y: number, z: number): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$SurfaceRule}.
     */
    export type $SurfaceRules$SurfaceRule_ = ((arg0: number, arg1: number, arg2: number) => $BlockState_);
    export class $DensityFunction$NoiseHolder extends $Record {
        getValue(x: number, arg1: number, y: number): number;
        maxValue(): number;
        noise(): $NormalNoise;
        noiseData(): $Holder<$NormalNoise$NoiseParameters>;
        static CODEC: $Codec<$DensityFunction$NoiseHolder>;
        constructor(noiseData: $Holder_<$NormalNoise$NoiseParameters>);
        constructor(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: $NormalNoise | null);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$NoiseHolder}.
     */
    export type $DensityFunction$NoiseHolder_ = { noiseData?: $Holder_<$NormalNoise$NoiseParameters>, noise?: $NormalNoise,  } | [noiseData?: $Holder_<$NormalNoise$NoiseParameters>, noise?: $NormalNoise, ];
    export class $NoiseChunk implements $DensityFunction$ContextProvider, $DensityFunction$FunctionContext, $AquiferOverrideMaskSupplier, $NoiseChunkAccessor, $IChunkNoiseSampler, $IDfcObjectCacheCapable, $ICoordinatesFilling, $IPreloadedCoordinates {
        wrap(densityFunction: $DensityFunction): $DensityFunction;
        blockX(): number;
        blockY(): number;
        blockZ(): number;
        initializeForFirstCellX(): void;
        cachedClimateSampler(noiseRouter: $NoiseRouter_, points: $List_<$Climate$ParameterPoint_>): $Climate$Sampler;
        getInterpolatedState(): $BlockState;
        selectCellYZ(y: number, z: number): void;
        advanceCellX(increment: number): void;
        stopInterpolation(): void;
        fillAllDirectly(values: number[], _function: $DensityFunction): void;
        getBlender(): $Blender;
        updateForY(cellEndBlockX: number, x: number): void;
        static forChunk(chunk: $ChunkAccess, state: $RandomState, beardifierOrMarker: $DensityFunctions$BeardifierOrMarker, noiseGeneratorSettings: $NoiseGeneratorSettings_, fluidPicke: $Aquifer$FluidPicker_, blender: $Blender): $NoiseChunk;
        updateForX(cellEndBlockX: number, x: number): void;
        updateForZ(cellEndBlockX: number, x: number): void;
        cellHeight(): number;
        aquifer(): $Aquifer;
        swapSlices(): void;
        cellWidth(): number;
        forIndex(arrayIndex: number): $NoiseChunk;
        c2me$getXArray(): number[];
        c2me$getYArray(): number[];
        c2me$getZArray(): number[];
        getOrCreateAquiferOverrideMask(arg0: $Supplier_<any>): $AquiferOverrideMask;
        c2me$fillCoordinates(x: number[], y: number[], z: number[]): void;
        getOrComputeBlendingOutput(chunkX: number, chunkZ: number): $Blender$BlendingOutput;
        c2me$getDfcObjectCache(): $DfcObjectCache;
        preliminarySurfaceLevel(x: number, z: number): number;
        getNoiseSettings(): $NoiseSettings;
        getStartBlockX(): number;
        getStartBlockY(): number;
        getStartBlockZ(): number;
        getStartBiomeX(): number;
        getStartBiomeZ(): number;
        getMinimumCellY(): number;
        getCellBlockX(): number;
        getCellBlockY(): number;
        getCellBlockZ(): number;
        getStartCellX(): number;
        getStartCellZ(): number;
        getBeardifying(): $DensityFunctions$BeardifierOrMarker;
        getHorizontalCellBlockCount(): number;
        getVerticalCellBlockCount(): number;
        getIsInInterpolationLoop(): boolean;
        invokeSampleBlockState(): $BlockState;
        getVerticalCellCount(): number;
        getHorizontalCellCount(): number;
        getHorizontalBiomeEnd(): number;
        getIsSamplingForCaches(): boolean;
        initialDensityNoJaggedness: $DensityFunction;
        cellCountY: number;
        arrayInterpolationCounter: number;
        firstNoiseZ: number;
        fillingCell: boolean;
        lastBlendingOutput: $Blender$BlendingOutput;
        blender: $Blender;
        lastBlendingDataPos: number;
        blendOffset: $NoiseChunk$FlatCache;
        inCellZ: number;
        inCellY: number;
        inCellX: number;
        cellCaches: $List<$NoiseChunk$CacheAllInCell>;
        blockStateRule: $NoiseChunk$BlockStateFiller;
        cellCountXZ: number;
        firstNoiseX: number;
        interpolators: $List<$NoiseChunk$NoiseInterpolator>;
        wrapped: $Map<$DensityFunction, $DensityFunction>;
        interpolationCounter: number;
        cellStartBlockY: number;
        cellStartBlockZ: number;
        noiseSettings: $NoiseSettings;
        blendAlpha: $NoiseChunk$FlatCache;
        cellStartBlockX: number;
        interpolating: boolean;
        cellNoiseMinY: number;
        sliceFillingContextProvider: $DensityFunction$ContextProvider;
        noiseSizeXZ: number;
        firstCellZ: number;
        beardifier: $DensityFunctions$BeardifierOrMarker;
        arrayIndex: number;
        c2me$interpolatorsArray: $NoiseChunk$NoiseInterpolator[];
        firstCellX: number;
        constructor(cellCountXZ: number, random: $RandomState, firstNoiseX: number, firstNoiseZ: number, noiseSettings: $NoiseSettings_, beardifier: $DensityFunctions$BeardifierOrMarker, noiseGeneratorSettings: $NoiseGeneratorSettings_, fluidPicker: $Aquifer$FluidPicker_, blendifier: $Blender);
        get interpolatedState(): $BlockState;
        get startBlockX(): number;
        get startBlockY(): number;
        get startBlockZ(): number;
        get startBiomeX(): number;
        get startBiomeZ(): number;
        get minimumCellY(): number;
        get cellBlockX(): number;
        get cellBlockY(): number;
        get cellBlockZ(): number;
        get startCellX(): number;
        get startCellZ(): number;
        get beardifying(): $DensityFunctions$BeardifierOrMarker;
        get horizontalCellBlockCount(): number;
        get verticalCellBlockCount(): number;
        get isInInterpolationLoop(): boolean;
        get verticalCellCount(): number;
        get horizontalCellCount(): number;
        get horizontalBiomeEnd(): number;
        get isSamplingForCaches(): boolean;
    }
    export class $DensityFunctions$Marker$Type extends $Enum<$DensityFunctions$Marker$Type> implements $StringRepresentable {
        static values(): $DensityFunctions$Marker$Type[];
        static valueOf(arg0: string): $DensityFunctions$Marker$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CacheAllInCell: $DensityFunctions$Marker$Type;
        codec: $KeyDispatchDataCodec<$DensityFunctions$MarkerOrMarked>;
        static CacheOnce: $DensityFunctions$Marker$Type;
        static FlatCache: $DensityFunctions$Marker$Type;
        static Interpolated: $DensityFunctions$Marker$Type;
        static Cache2D: $DensityFunctions$Marker$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Marker$Type}.
     */
    export type $DensityFunctions$Marker$Type_ = "interpolated" | "flat_cache" | "cache_2d" | "cache_once" | "cache_all_in_cell";
    export class $DensityFunctions$WeirdScaledSampler extends $Record implements $DensityFunctions$TransformerWithContext {
        transform(context: $DensityFunction$FunctionContext, value: number): number;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        noise(): $DensityFunction$NoiseHolder;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        rarityValueMapper(): $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        compute(context: $DensityFunction$FunctionContext): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$WeirdScaledSampler>;
        constructor(arg0: $DensityFunction, arg1: $DensityFunction$NoiseHolder_, arg2: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$WeirdScaledSampler}.
     */
    export type $DensityFunctions$WeirdScaledSampler_ = { rarityValueMapper?: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_, input?: $DensityFunction, noise?: $DensityFunction$NoiseHolder_,  } | [rarityValueMapper?: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_, input?: $DensityFunction, noise?: $DensityFunction$NoiseHolder_, ];
    export class $VerticalAnchor$Absolute extends $Record implements $VerticalAnchor {
        y(): number;
        resolveY(arg0: $WorldGenerationContext): number;
        static CODEC: $Codec<$VerticalAnchor$Absolute>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor$Absolute}.
     */
    export type $VerticalAnchor$Absolute_ = { y?: number,  } | [y?: number, ];
    export class $LegacyRandomSource implements $BitRandomSource {
        next(size: number): number;
        setSeed(seed: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        nextDouble(): number;
        nextInt(size: number): number;
        nextInt(): number;
        nextFloat(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextInt(min: number, max: number): number;
        nextIntBetweenInclusive(min: number, max: number): number;
        triangle(min: number, arg1: number): number;
        consumeCount(count: number): void;
        constructor(seed: number);
        set seed(value: number);
    }
    export class $SurfaceRules$BiomeConditionSource$1BiomeCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $Aquifer$NoiseBasedAquifer implements $Aquifer, $IAquiferSamplerImpl {
        /**
         * @return A cache index based on grid positions.
         */
        getIndex(gridX: number, gridY: number, gridZ: number): number;
        gridX(x: number): number;
        gridY(x: number): number;
        /**
         * Compares two distances (between aquifers).
         * @return `1.0` if the distances are equal, and returns smaller values the more different in absolute value the two distances are.
         */
        static similarity(firstDistance: number, secondDistance: number): number;
        computeSubstance(context: $DensityFunction$FunctionContext, substance: number): $BlockState;
        /**
         * Returns `true` if there should be a fluid update scheduled - due to a fluid block being placed in a possibly unsteady position - at the last position passed into `#computeState`.
         * This **must** be invoked only after `#computeState`, and will be using the same parameters as that method.
         */
        shouldScheduleFluidUpdate(): boolean;
        gridZ(x: number): number;
        getStartZ(): number;
        getSizeX(): number;
        getFluidLevelSampler(): $Aquifer$FluidPicker;
        getStartX(): number;
        getStartY(): number;
        getSizeZ(): number;
        getBlockPositions(): number[];
        getRandomDeriver(): $PositionalRandomFactory;
        minGridY: number;
        minGridX: number;
        minGridZ: number;
        gridSizeX: number;
        aquiferLocationCache: number[];
        gridSizeZ: number;
        aquiferCache: $Aquifer$FluidStatus[];
        barrierNoise: $DensityFunction;
        lavaNoise: $DensityFunction;
        constructor(noiseChunk: $NoiseChunk, chunkPos: $ChunkPos, noiseRouter: $NoiseRouter_, positionalRandomFactory: $PositionalRandomFactory, minY: number, height: number, globalFluidPicker: $Aquifer$FluidPicker_);
        get startZ(): number;
        get sizeX(): number;
        get fluidLevelSampler(): $Aquifer$FluidPicker;
        get startX(): number;
        get startY(): number;
        get sizeZ(): number;
        get blockPositions(): number[];
        get randomDeriver(): $PositionalRandomFactory;
    }
    export class $SurfaceRules$TestRuleSource extends $Record implements $SurfaceRules$RuleSource {
        apply(context: $SurfaceRules$Context): $SurfaceRules$SurfaceRule;
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
        thenRun(): $SurfaceRules$RuleSource;
        ifTrue(): $SurfaceRules$ConditionSource;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
        static CODEC: $KeyDispatchDataCodec<$SurfaceRules$TestRuleSource>;
        constructor(arg0: $SurfaceRules$ConditionSource, arg1: $SurfaceRules$RuleSource);
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$TestRuleSource}.
     */
    export type $SurfaceRules$TestRuleSource_ = { ifTrue?: $SurfaceRules$ConditionSource, thenRun?: $SurfaceRules$RuleSource,  } | [ifTrue?: $SurfaceRules$ConditionSource, thenRun?: $SurfaceRules$RuleSource, ];
    export class $DensityFunctions$YClampedGradient extends $Record implements $DensityFunction$SimpleFunction {
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        fromValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fromY(): number;
        toY(): number;
        toValue(): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$YClampedGradient>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$YClampedGradient}.
     */
    export type $DensityFunctions$YClampedGradient_ = { toValue?: number, fromValue?: number, fromY?: number, toY?: number,  } | [toValue?: number, fromValue?: number, fromY?: number, toY?: number, ];
    export class $WorldDimensions$1Entry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WorldDimensions$1Entry}.
     */
    export type $WorldDimensions$1Entry_ = { key?: $ResourceKey_<$LevelStem>, value?: $LevelStem_,  } | [key?: $ResourceKey_<$LevelStem>, value?: $LevelStem_, ];
    export class $Column$Range extends $Column {
        floor(): number;
        ceiling(): number;
        height(): number;
        constructor(floor: number, ceiling: number);
    }
    export class $FlatLevelSource extends $ChunkGenerator {
        settings(): $FlatLevelGeneratorSettings;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $MapCodec<$FlatLevelSource>;
        biomeSource: $BiomeSource;
        constructor(settings: $FlatLevelGeneratorSettings);
    }
    export class $SingleThreadedRandomSource implements $BitRandomSource, $ISimpleRandom {
        next(size: number): number;
        setSeed(seed: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        nextDouble(): number;
        nextInt(size: number): number;
        nextInt(): number;
        nextFloat(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextInt(min: number, max: number): number;
        nextIntBetweenInclusive(min: number, max: number): number;
        triangle(min: number, arg1: number): number;
        consumeCount(count: number): void;
        getSeed(): number;
        invokeSetSeed(seed: number): void;
        constructor(seed: number);
    }
    export class $SurfaceRules$WaterConditionSource$1WaterCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $WorldgenRandom extends $LegacyRandomSource {
        getCount(): number;
        /**
         * Seeds the current random for placing the starts of structure features.
         * The region coordinates are the region which the target chunk lies in. For example, witch hut regions are 32x32 chunks, so all chunks within that region would be seeded identically.
         * The size of the regions themselves are determined by the `spacing` of the structure settings.
         */
        setLargeFeatureWithSalt(levelSeed: number, arg1: number, regionX: number, regionZ: number): void;
        /**
         * Seeds the current random for placing features.
         * Each feature is seeded differently in order to seem more random. However, it does not do a good job of this, and issues can arise from the salt being small with features that have the same decoration step and are close together in the feature lists.
         */
        setLargeFeatureSeed(decorationSeed: number, arg1: number, index: number): void;
        /**
         * Seeds the current random for placing features.
         * Each feature is seeded differently in order to seem more random. However, it does not do a good job of this, and issues can arise from the salt being small with features that have the same decoration step and are close together in the feature lists.
         */
        setFeatureSeed(decorationSeed: number, arg1: number, index: number): void;
        /**
         * Seeds the current random for chunk decoration, including spawning mobs and for use in feature placement.
         * The coordinates correspond to the minimum block position within a given chunk.
         */
        setDecorationSeed(levelSeed: number, arg1: number, minChunkBlockX: number): number;
        /**
         * Creates a new `RandomSource`, seeded for determining whether a chunk is a slime chunk or not.
         */
        static seedSlimeChunk(chunkX: number, chunkZ: number, levelSeed: number, arg3: number): $RandomSource;
        constructor(randomSource: $RandomSource);
        get count(): number;
    }
    export class $DensityFunction$FunctionContext {
    }
    export interface $DensityFunction$FunctionContext {
        blockX(): number;
        blockY(): number;
        blockZ(): number;
        getBlender(): $Blender;
        get blender(): $Blender;
    }
    export class $RandomSupport$Seed128bit extends $Record {
        xor(seedLo: number, arg1: number): $RandomSupport$Seed128bit;
        xor(seed: $RandomSupport$Seed128bit_): $RandomSupport$Seed128bit;
        mixed(): $RandomSupport$Seed128bit;
        seedLo(): number;
        seedHi(): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $RandomSupport$Seed128bit}.
     */
    export type $RandomSupport$Seed128bit_ = { seedLo?: number, seedHi?: number,  } | [seedLo?: number, seedHi?: number, ];
    export class $SurfaceRules$BiomeConditionSource implements $SurfaceRules$ConditionSource {
        apply(context: $SurfaceRules$Context): $SurfaceRules$Condition;
        codec(): $KeyDispatchDataCodec<$SurfaceRules$ConditionSource>;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
        static CODEC: $KeyDispatchDataCodec<$SurfaceRules$BiomeConditionSource>;
        biomes: $List<$ResourceKey<$Biome>>;
        biomeNameTest: $Predicate<$ResourceKey<$Biome>>;
        constructor(biomes: $List_<$ResourceKey_<$Biome>>);
    }
    /**
     * @deprecated
     */
    export class $ThreadSafeLegacyRandomSource implements $BitRandomSource {
        next(size: number): number;
        setSeed(seed: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        nextDouble(): number;
        nextInt(size: number): number;
        nextInt(): number;
        nextFloat(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextInt(min: number, max: number): number;
        nextIntBetweenInclusive(min: number, max: number): number;
        triangle(min: number, arg1: number): number;
        consumeCount(count: number): void;
        constructor(seed: number);
        set seed(value: number);
    }
    export class $DensityFunctions$EndIslandDensityFunction implements $DensityFunction$SimpleFunction, $IDensityFunctionTypesEndIslands {
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        getSampler(): $SimplexNoise;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$EndIslandDensityFunction>;
        constructor(seed: number);
        get sampler(): $SimplexNoise;
    }
    export class $DensityFunctions$Spline$Point extends $Record {
        context(): $DensityFunction$FunctionContext;
        constructor(arg0: $DensityFunction$FunctionContext);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Spline$Point}.
     */
    export type $DensityFunctions$Spline$Point_ = { context?: $DensityFunction$FunctionContext,  } | [context?: $DensityFunction$FunctionContext, ];
    export class $MarsagliaPolarGaussian {
        reset(): void;
        nextGaussian(): number;
        randomSource: $RandomSource;
        constructor(randomSource: $RandomSource);
    }
    export class $GeodeBlockSettings {
        static CODEC: $Codec<$GeodeBlockSettings>;
        outerLayerProvider: $BlockStateProvider;
        innerLayerProvider: $BlockStateProvider;
        alternateInnerLayerProvider: $BlockStateProvider;
        innerPlacements: $List<$BlockState>;
        cannotReplace: $TagKey<$Block>;
        middleLayerProvider: $BlockStateProvider;
        invalidBlocks: $TagKey<$Block>;
        fillingProvider: $BlockStateProvider;
        constructor(fillingProvider: $BlockStateProvider, innerLayerProvider: $BlockStateProvider, alternateInnerLayerProvider: $BlockStateProvider, middleLayerProvider: $BlockStateProvider, outerLayerProvider: $BlockStateProvider, innerPlacements: $List_<$BlockState_>, cannotReplace: $TagKey_<$Block>, invalidBlocks: $TagKey_<$Block>);
    }
    export class $NoiseChunk$BlendOffset implements $NoiseChunk$NoiseChunkDensityFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        wrapped(): $DensityFunction;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        this$0: $NoiseChunk;
        constructor(arg0: $NoiseChunk);
    }
    export class $DensityFunctions {
        static min(argument1: $DensityFunction, argument2: $DensityFunction): $DensityFunction;
        static max(argument1: $DensityFunction, argument2: $DensityFunction): $DensityFunction;
        static add(argument1: $DensityFunction, argument2: $DensityFunction): $DensityFunction;
        static map(input: $DensityFunction, type: $DensityFunctions$Mapped$Type_): $DensityFunction;
        static constant(value: number): $DensityFunction;
        static zero(): $DensityFunction;
        static bootstrap(registry: $Registry<$MapCodec<$DensityFunction>>): $MapCodec<$DensityFunction>;
        static shift(noiseData: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static mul(argument1: $DensityFunction, argument2: $DensityFunction): $DensityFunction;
        static noise(noiseData: $Holder_<$NormalNoise$NoiseParameters>, fromY: number, arg2: number): $DensityFunction;
        static noise(noiseData: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static noise(noiseData: $Holder_<$NormalNoise$NoiseParameters>, yScale: number): $DensityFunction;
        static lerp(deltaFunction: $DensityFunction, minFunction: $DensityFunction, maxFunction: $DensityFunction): $DensityFunction;
        static lerp(deltaFunction: $DensityFunction, min: number, arg2: $DensityFunction): $DensityFunction;
        static doubleFunctionArgumentCodec<O>(fromFunction: $BiFunction_<$DensityFunction, $DensityFunction, O>, primary: $Function_<O, $DensityFunction>, secondary: $Function_<O, $DensityFunction>): $KeyDispatchDataCodec<O>;
        static singleFunctionArgumentCodec<O>(fromFunction: $Function_<$DensityFunction, O>, toFunction: $Function_<O, $DensityFunction>): $KeyDispatchDataCodec<O>;
        static flatCache(input: $DensityFunction): $DensityFunction;
        static cacheOnce(input: $DensityFunction): $DensityFunction;
        static shiftA(noiseData: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static cache2d(input: $DensityFunction): $DensityFunction;
        static makeCodec<O>(mapCodec: $MapCodec<O>): $KeyDispatchDataCodec<O>;
        static spline(spline: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>): $DensityFunction;
        static shiftB(noiseData: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static blendAlpha(): $DensityFunction;
        static endIslands(seed: number): $DensityFunction;
        static weirdScaledSampler(input: $DensityFunction, noiseData: $Holder_<$NormalNoise$NoiseParameters>, rarityValueMapper: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_): $DensityFunction;
        static shiftedNoise2d(shiftX: $DensityFunction, shiftZ: $DensityFunction, xzScale: number, arg3: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static cacheAllInCell(input: $DensityFunction): $DensityFunction;
        static mappedNoise(noiseData: $Holder_<$NormalNoise$NoiseParameters>, xzScale: number, arg2: number, yScale: number, arg4: number): $DensityFunction;
        static mappedNoise(noiseData: $Holder_<$NormalNoise$NoiseParameters>, yScale: number, arg2: number, fromY: number): $DensityFunction;
        static mappedNoise(noiseData: $Holder_<$NormalNoise$NoiseParameters>, fromY: number, arg2: number): $DensityFunction;
        static blendDensity(input: $DensityFunction): $DensityFunction;
        static interpolated(input: $DensityFunction): $DensityFunction;
        static yClampedGradient(fromY: number, toY: number, fromValue: number, arg3: number): $DensityFunction;
        static blendOffset(): $DensityFunction;
        static rangeChoice(input: $DensityFunction, minInclusive: number, arg2: number, maxExclusive: $DensityFunction, arg4: $DensityFunction): $DensityFunction;
        static singleArgumentCodec<A, O>(codec: $Codec<A>, fromFunction: $Function_<A, O>, toFunction: $Function_<O, A>): $KeyDispatchDataCodec<O>;
        static MAX_REASONABLE_NOISE_VALUE: number;
        static NOISE_VALUE_CODEC: $Codec<number>;
        static DIRECT_CODEC: $Codec<$DensityFunction>;
    }
    export class $DensityFunctions$WeirdScaledSampler$RarityValueMapper extends $Enum<$DensityFunctions$WeirdScaledSampler$RarityValueMapper> implements $StringRepresentable, $IDensityFunctionTypesWeirdScaledSamplerRarityValueMapper {
        static values(): $DensityFunctions$WeirdScaledSampler$RarityValueMapper[];
        static valueOf(arg0: string): $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        getScaleFunction(): $Double2DoubleFunction;
        static TYPE2: $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        static CODEC: $Codec<$DensityFunctions$WeirdScaledSampler$RarityValueMapper>;
        maxRarity: number;
        mapper: $Double2DoubleFunction;
        static TYPE1: $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
        get scaleFunction(): $Double2DoubleFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$WeirdScaledSampler$RarityValueMapper}.
     */
    export type $DensityFunctions$WeirdScaledSampler$RarityValueMapper_ = "type_1" | "type_2";
    export class $DensityFunctions$TwoArgumentSimpleFunction {
        static create(type: $DensityFunctions$TwoArgumentSimpleFunction$Type_, argument1: $DensityFunction, argument2: $DensityFunction): $DensityFunctions$TwoArgumentSimpleFunction;
        static LOGGER: $Logger;
    }
    export interface $DensityFunctions$TwoArgumentSimpleFunction extends $DensityFunction {
        type(): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        argument1(): $DensityFunction;
        argument2(): $DensityFunction;
    }
    export class $DensityFunctions$Ap2 extends $Record implements $DensityFunctions$TwoArgumentSimpleFunction {
        type(): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        argument1(): $DensityFunction;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        argument2(): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        constructor(arg0: $DensityFunctions$TwoArgumentSimpleFunction$Type_, arg1: $DensityFunction, arg2: $DensityFunction, arg3: number, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Ap2}.
     */
    export type $DensityFunctions$Ap2_ = { argument1?: $DensityFunction, minValue?: number, argument2?: $DensityFunction, type?: $DensityFunctions$TwoArgumentSimpleFunction$Type_, maxValue?: number,  } | [argument1?: $DensityFunction, minValue?: number, argument2?: $DensityFunction, type?: $DensityFunctions$TwoArgumentSimpleFunction$Type_, maxValue?: number, ];
    /**
     * Represents individual steps that the features and carvers chunk status go through, respectively.
     */
    export class $GenerationStep {
        constructor();
    }
    export class $SurfaceRules$NotCondition extends $Record implements $SurfaceRules$Condition {
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$NotCondition}.
     */
    export type $SurfaceRules$NotCondition_ = { target?: $SurfaceRules$Condition_,  } | [target?: $SurfaceRules$Condition_, ];
    /**
     * A representation of an integer valued interval, either bounded or unbounded.
     * While the class itself does not imply any coordinate in particular, this is practically used to represent a column in the Y direction.
     */
    export class $Column {
        /**
         * @return A column of the unbounded interval (-infinity, infinity).
         */
        static line(): $Column;
        static create(floor: $OptionalInt, ceiling: $OptionalInt): $Column;
        /**
         * Scans for a column of states satisfying `columnPredicate`, up to a length of `maxDistance` from the origin, and ending with a state which satisfies `tipPredicate`.
         * @return A column representing the tips found. The column will be bounded if a tip was reached in the given direction, unbounded otherwise.
         */
        static scan(level: $LevelSimulatedReader, pos: $BlockPos_, maxDistance: number, columnPredicate: $Predicate_<$BlockState>, tipPredicate: $Predicate_<$BlockState>): ($Column) | undefined;
        getHeight(): $OptionalInt;
        /**
         * @return A column of the unbounded interval (floor, infinity).
         */
        static below(floor: number): $Column;
        /**
         * @return A column of the unbounded interval (floor, infinity).
         */
        static above(floor: number): $Column;
        /**
         * @return A column of the closed interval [floor, ceiling].
         */
        static inside(floor: number, ceiling: number): $Column$Range;
        /**
         * @return A column of the closed interval [floor, ceiling].
         */
        static around(floor: number, ceiling: number): $Column$Range;
        getFloor(): $OptionalInt;
        withFloor(ceiling: $OptionalInt): $Column;
        getCeiling(): $OptionalInt;
        /**
         * @return A column of the unbounded interval (floor, infinity).
         */
        static fromLowest(floor: number): $Column;
        /**
         * @return A column of the unbounded interval (floor, infinity).
         */
        static fromHighest(floor: number): $Column;
        withCeiling(ceiling: $OptionalInt): $Column;
        constructor();
        get height(): $OptionalInt;
        get floor(): $OptionalInt;
        get ceiling(): $OptionalInt;
    }
    export class $Column$Line extends $Column {
        static INSTANCE: $Column$Line;
    }
    export class $DensityFunctions$BlendAlpha extends $Enum<$DensityFunctions$BlendAlpha> implements $DensityFunction$SimpleFunction {
        static values(): $DensityFunctions$BlendAlpha[];
        static valueOf(arg0: string): $DensityFunctions$BlendAlpha;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
        static INSTANCE: $DensityFunctions$BlendAlpha;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BlendAlpha}.
     */
    export type $DensityFunctions$BlendAlpha_ = "instance";
    export class $Heightmap$Types extends $Enum<$Heightmap$Types> implements $StringRepresentable {
        static values(): $Heightmap$Types[];
        static valueOf(arg0: string): $Heightmap$Types;
        isOpaque(): $Predicate<$BlockState>;
        getSerializedName(): string;
        getSerializationKey(): string;
        sendToClient(): boolean;
        keepAfterWorldgen(): boolean;
        getRemappedEnumConstantName(): string;
        static OCEAN_FLOOR: $Heightmap$Types;
        static MOTION_BLOCKING_NO_LEAVES: $Heightmap$Types;
        static CODEC: $Codec<$Heightmap$Types>;
        static MOTION_BLOCKING: $Heightmap$Types;
        static WORLD_SURFACE: $Heightmap$Types;
        static OCEAN_FLOOR_WG: $Heightmap$Types;
        static WORLD_SURFACE_WG: $Heightmap$Types;
        get opaque(): $Predicate<$BlockState>;
        get serializedName(): string;
        get serializationKey(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Heightmap$Types}.
     */
    export type $Heightmap$Types_ = "world_surface_wg" | "world_surface" | "ocean_floor_wg" | "ocean_floor" | "motion_blocking" | "motion_blocking_no_leaves";
    export class $BitRandomSource {
        static FLOAT_MULTIPLIER: number;
        static DOUBLE_MULTIPLIER: number;
    }
    export interface $BitRandomSource extends $RandomSource {
        next(size: number): number;
        nextDouble(): number;
        nextInt(size: number): number;
        nextInt(): number;
        nextFloat(): number;
        nextLong(): number;
        nextBoolean(): boolean;
    }
    export class $SurfaceRules$YConditionSource$1YCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $DensityFunctions$MarkerOrMarked {
    }
    export interface $DensityFunctions$MarkerOrMarked extends $DensityFunction {
        type(): $DensityFunctions$Marker$Type;
        wrapped(): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
    }
    export class $NoiseBasedChunkGenerator extends $ChunkGenerator implements $NoiseBasedChunkGeneratorAccessor, $INoiseChunkGenerator {
        lambda$fillFromNoise$11(chunk: $ChunkAccess, generationShapeHeightFloorDiv: number, generationShapeConfig: $NoiseSettings_, minimumY: number, blender: $Blender, structureAccessor: $StructureManager, noiseConfig: $RandomState, minimumYFloorDiv: number): $ChunkAccess;
        stable(settings: $ResourceKey_<$NoiseGeneratorSettings>): boolean;
        iterateNoiseColumn(level: $LevelHeightAccessor, random: $RandomState, x: number, z: number, column: $MutableObject<$NoiseColumn> | null, stoppingState: $Predicate_<$BlockState> | null): $OptionalInt;
        buildSurface(chunk: $ChunkAccess, context: $WorldGenerationContext, random: $RandomState, structureManager: $StructureManager, biomeManager: $BiomeManager, biomes: $Registry<$Biome>, blender: $Blender): void;
        generatorSettings(): $Holder<$NoiseGeneratorSettings>;
        invokeCreateChunkNoiseSampler(chunk: $ChunkAccess, structureManager: $StructureManager, blender: $Blender, random: $RandomState): $NoiseChunk;
        getFluidLevelSampler(): $Supplier<$Aquifer$FluidPicker>;
        setSettings(holder: $Holder_<$NoiseGeneratorSettings>): void;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        settings: $Holder<$NoiseGeneratorSettings>;
        static CODEC: $MapCodec<$NoiseBasedChunkGenerator>;
        globalFluidPicker: $Supplier<$Aquifer$FluidPicker>;
        biomeSource: $BiomeSource;
        static AIR: $BlockState;
        constructor(biomeSource: $BiomeSource, settings: $Holder_<$NoiseGeneratorSettings>);
        get fluidLevelSampler(): $Supplier<$Aquifer$FluidPicker>;
    }
    export class $DensityFunctions$TwoArgumentSimpleFunction$Type extends $Enum<$DensityFunctions$TwoArgumentSimpleFunction$Type> implements $StringRepresentable {
        static values(): $DensityFunctions$TwoArgumentSimpleFunction$Type[];
        static valueOf(arg0: string): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ADD: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        codec: $KeyDispatchDataCodec<$DensityFunctions$TwoArgumentSimpleFunction>;
        static MIN: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        static MUL: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        static MAX: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$TwoArgumentSimpleFunction$Type}.
     */
    export type $DensityFunctions$TwoArgumentSimpleFunction$Type_ = "add" | "mul" | "min" | "max";
    export class $SurfaceRules$Context implements $ExtendedSurfaceContext, $ContextAccessor, $ContextBiomeAccessor {
        getX(): number;
        mfix$getPossibleBiomes(): $Set<any>;
        getY(): number;
        biomeMatches(biomes: $HolderSet_<any>): $SurfaceRules$Condition;
        getChunk(): $ChunkAccess;
        getSystem(): $SurfaceSystem;
        updateY(stoneDepthAbove: number, stoneDepthBelow: number, waterHeight: number, blockX: number, blockY: number, blockZ: number): void;
        updateXZ(blockX: number, blockZ: number): void;
        getZ(): number;
        getStoneDepthBelow(): number;
        lambda$updateY$0(arg0: number, arg1: number, arg2: number): $Holder<any>;
        getMinSurfaceLevel(): number;
        getSurfaceSecondary(): number;
        static surfaceCellToBlockCoord(blockCoord: number): number;
        static blockCoordToSurfaceCell(blockCoord: number): number;
        mfix$applyPossibleBiomes(): void;
        waterHeight: number;
        static SURFACE_CELL_BITS: number;
        steep: $SurfaceRules$Condition;
        lastUpdateXZ: number;
        chunk: $ChunkAccess;
        blockX: number;
        blockY: number;
        blockZ: number;
        abovePreliminarySurface: $SurfaceRules$Condition;
        noiseChunk: $NoiseChunk;
        lastPreliminarySurfaceCellOrigin: number;
        static SURFACE_CELL_SIZE: number;
        minSurfaceLevel: number;
        pos: $BlockPos$MutableBlockPos;
        temperature: $SurfaceRules$Condition;
        context: $WorldGenerationContext;
        preliminarySurfaceCache: number[];
        stoneDepthAbove: number;
        lastSurfaceDepth2Update: number;
        stoneDepthBelow: number;
        static HOW_FAR_BELOW_PRELIMINARY_SURFACE_LEVEL_TO_BUILD_SURFACE: number;
        randomState: $RandomState;
        static SURFACE_CELL_MASK: number;
        lastMinSurfaceLevelUpdate: number;
        lastUpdateY: number;
        hole: $SurfaceRules$Condition;
        biomeGetter: $Function<$BlockPos, $Holder<$Biome>>;
        surfaceSecondary: number;
        system: $SurfaceSystem;
        biome: $Supplier<$Holder<$Biome>>;
        mfix$possibleBiomes: $Set<any>;
        surfaceDepth: number;
        constructor(system: $SurfaceSystem, randomState: $RandomState, chunk: $ChunkAccess, noiseChunk: $NoiseChunk, biomeGetter: $Function_<$BlockPos, $Holder<$Biome>>, arg5: $Registry<$Biome>, context: $WorldGenerationContext);
        get x(): number;
        get y(): number;
        get z(): number;
    }
    export class $NoiseSettings extends $Record {
        static create(minY: number, height: number, noiseSizeHorizontal: number, noiseSizeVertical: number): $NoiseSettings;
        height(): number;
        minY(): number;
        clampToHeightAccessor(heightAccessor: $LevelHeightAccessor): $NoiseSettings;
        noiseSizeHorizontal(): number;
        getCellWidth(): number;
        getCellHeight(): number;
        noiseSizeVertical(): number;
        static CODEC: $Codec<$NoiseSettings>;
        static END_NOISE_SETTINGS: $NoiseSettings;
        static CAVES_NOISE_SETTINGS: $NoiseSettings;
        static OVERWORLD_NOISE_SETTINGS: $NoiseSettings;
        static FLOATING_ISLANDS_NOISE_SETTINGS: $NoiseSettings;
        static NETHER_NOISE_SETTINGS: $NoiseSettings;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get cellWidth(): number;
        get cellHeight(): number;
    }
    /**
     * Values that may be interpreted as {@link $NoiseSettings}.
     */
    export type $NoiseSettings_ = { minY?: number, noiseSizeHorizontal?: number, noiseSizeVertical?: number, height?: number,  } | [minY?: number, noiseSizeHorizontal?: number, noiseSizeVertical?: number, height?: number, ];
    export class $SurfaceRules$Hole extends $Enum<$SurfaceRules$Hole> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Hole}.
     */
    export type $SurfaceRules$Hole_ = "instance";
    export class $DensityFunctions$ShiftedNoise extends $Record implements $DensityFunction {
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        noise(): $DensityFunction$NoiseHolder;
        yScale(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        xzScale(): number;
        shiftZ(): $DensityFunction;
        shiftY(): $DensityFunction;
        shiftX(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$ShiftedNoise>;
        constructor(arg0: $DensityFunction, arg1: $DensityFunction, arg2: $DensityFunction, arg3: number, arg4: number, arg5: $DensityFunction$NoiseHolder_);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$ShiftedNoise}.
     */
    export type $DensityFunctions$ShiftedNoise_ = { xzScale?: number, noise?: $DensityFunction$NoiseHolder_, shiftX?: $DensityFunction, shiftZ?: $DensityFunction, yScale?: number, shiftY?: $DensityFunction,  } | [xzScale?: number, noise?: $DensityFunction$NoiseHolder_, shiftX?: $DensityFunction, shiftZ?: $DensityFunction, yScale?: number, shiftY?: $DensityFunction, ];
    export class $DensityFunctions$Spline extends $Record implements $DensityFunction {
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        spline(): $CubicSpline<$DensityFunctions$Spline$Point, $DensityFunctions$Spline$Coordinate>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Spline>;
        constructor(arg0: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Spline}.
     */
    export type $DensityFunctions$Spline_ = { spline?: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>,  } | [spline?: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>, ];
    export class $SurfaceRules$Condition {
    }
    export interface $SurfaceRules$Condition {
        test(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Condition}.
     */
    export type $SurfaceRules$Condition_ = (() => boolean);
    export class $SurfaceRules$LazyYCondition extends $SurfaceRules$LazyCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $NoiseChunk$NoiseChunkDensityFunction {
    }
    export interface $NoiseChunk$NoiseChunkDensityFunction extends $DensityFunction {
    }
    export class $NoiseChunk$Cache2D implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $IFastCacheLike {
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        c2me$describeCacheLike(): string;
        c2me$cache(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): void;
        c2me$cache(x: number, y: number, z: number, evalType: $EvalType_, cached: number): void;
        c2me$getCached(x: number, y: number, z: number, evalType: $EvalType_): number;
        c2me$getCached(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): boolean;
        c2me$withDelegate(delegate: $DensityFunction): $DensityFunction;
        c2me$isActualCache(): boolean;
        c2me$getDelegate(): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        constructor(_function: $DensityFunction);
    }
    export class $SurfaceSystem implements $SurfaceSystemAccessor {
        /**
         * @deprecated
         */
        topMaterial(rule: $SurfaceRules$RuleSource, context: $CarvingContext, biomeGetter: $Function_<$BlockPos, $Holder<$Biome>>, chunk: $ChunkAccess, noiseChunk: $NoiseChunk, pos: $BlockPos_, hasFluid: boolean): ($BlockState) | undefined;
        buildSurface(randomState: $RandomState, biomeManager: $BiomeManager, biomes: $Registry<$Biome>, useLegacyRandomSource: boolean, context: $WorldGenerationContext, chunk: $ChunkAccess, noiseChunk: $NoiseChunk, ruleSource: $SurfaceRules$RuleSource): void;
        getNoiseRandom(): $PositionalRandomFactory;
        getBand(x: number, y: number, z: number): $BlockState;
        getBandOffsetNoise(): $NormalNoise;
        getSurfaceDepth(x: number, z: number): number;
        getSurfaceSecondary(x: number, z: number): number;
        constructor(randomState: $RandomState, defaultBlock: $BlockState_, seaLevel: number, noiseRandom: $PositionalRandomFactory);
        get noiseRandom(): $PositionalRandomFactory;
        get bandOffsetNoise(): $NormalNoise;
    }
    export class $DensityFunction$ContextProvider {
    }
    export interface $DensityFunction$ContextProvider {
        fillAllDirectly(values: number[], _function: $DensityFunction): void;
        forIndex(arrayIndex: number): $DensityFunction$FunctionContext;
    }
    export class $SurfaceRules$Context$HoleCondition extends $SurfaceRules$LazyXZCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $SurfaceRules {
        static register<A>(registry: $Registry<$MapCodec<A>>, name: string, codec: $KeyDispatchDataCodec_<A>): $MapCodec<A>;
        static state(resultState: $BlockState_): $SurfaceRules$RuleSource;
        static sequence(...rules: $SurfaceRules$RuleSource[]): $SurfaceRules$RuleSource;
        static not(target: $SurfaceRules$ConditionSource): $SurfaceRules$ConditionSource;
        static abovePreliminarySurface(): $SurfaceRules$ConditionSource;
        static yBlockCheck(anchor: $VerticalAnchor_, surfaceDepthMultiplier: number): $SurfaceRules$ConditionSource;
        static yStartCheck(anchor: $VerticalAnchor_, surfaceDepthMultiplier: number): $SurfaceRules$ConditionSource;
        static stoneDepthCheck(offset: number, addSurfaceDepth: boolean, surfaceType: $CaveSurface_): $SurfaceRules$ConditionSource;
        static stoneDepthCheck(offset: number, addSurfaceDepth: boolean, secondaryDepthRange: number, surfaceType: $CaveSurface_): $SurfaceRules$ConditionSource;
        static waterStartCheck(offset: number, surfaceDepthMultiplier: number): $SurfaceRules$ConditionSource;
        static waterBlockCheck(offset: number, surfaceDepthMultiplier: number): $SurfaceRules$ConditionSource;
        static noiseCondition(noise: $ResourceKey_<$NormalNoise$NoiseParameters>, minThreshold: number): $SurfaceRules$ConditionSource;
        static noiseCondition(noise: $ResourceKey_<$NormalNoise$NoiseParameters>, minThreshold: number, arg2: number): $SurfaceRules$ConditionSource;
        static verticalGradient(randomName: string, trueAtAndBelow: $VerticalAnchor_, falseAtAndAbove: $VerticalAnchor_): $SurfaceRules$ConditionSource;
        static hole(): $SurfaceRules$ConditionSource;
        static steep(): $SurfaceRules$ConditionSource;
        static bandlands(): $SurfaceRules$RuleSource;
        static isBiome(...biomes: $ResourceKey_<$Biome>[]): $SurfaceRules$ConditionSource;
        static temperature(): $SurfaceRules$ConditionSource;
        static ifTrue(ifTrue: $SurfaceRules$ConditionSource, thenRun: $SurfaceRules$RuleSource): $SurfaceRules$RuleSource;
        static ON_FLOOR: $SurfaceRules$ConditionSource;
        static UNDER_FLOOR: $SurfaceRules$ConditionSource;
        static DEEP_UNDER_FLOOR: $SurfaceRules$ConditionSource;
        static ON_CEILING: $SurfaceRules$ConditionSource;
        static UNDER_CEILING: $SurfaceRules$ConditionSource;
        static VERY_DEEP_UNDER_FLOOR: $SurfaceRules$ConditionSource;
        constructor();
    }
    export class $Aquifer$FluidStatus implements $IAquiferSamplerFluidLevel {
        at(y: number): $BlockState;
        fluidLevel: number;
        fluidType: $BlockState;
        constructor(fluidLevel: number, fluidType: $BlockState_);
    }
    export class $DensityFunctions$BeardifierOrMarker {
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
    }
    export interface $DensityFunctions$BeardifierOrMarker extends $DensityFunction$SimpleFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
    }
    export class $NoiseChunk$FlatCache implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $IFastCacheLike {
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        c2me$describeCacheLike(): string;
        c2me$cache(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): void;
        c2me$cache(x: number, y: number, z: number, evalType: $EvalType_, cached: number): void;
        c2me$getCached(x: number, y: number, z: number, evalType: $EvalType_): number;
        c2me$getCached(res: number[], x: number[], y: number[], z: number[], evalType: $EvalType_): boolean;
        c2me$withDelegate(delegate: $DensityFunction): $DensityFunction;
        c2me$isActualCache(): boolean;
        c2me$getDelegate(): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        values: number[][];
        this$0: $NoiseChunk;
        constructor(noiseFiller: $NoiseChunk, computeValues: $DensityFunction, arg2: boolean);
    }
    export class $OreVeinifier {
        static create(veinToggle: $DensityFunction, veinRidged: $DensityFunction, veinGap: $DensityFunction, random: $PositionalRandomFactory): $NoiseChunk$BlockStateFiller;
    }
    export class $DensityFunctions$Noise extends $Record implements $DensityFunction {
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        noise(): $DensityFunction$NoiseHolder;
        yScale(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        /**
         * @deprecated
         */
        xzScale(): number;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Noise>;
        static DATA_CODEC: $MapCodec<$DensityFunctions$Noise>;
        constructor(arg0: $DensityFunction$NoiseHolder_, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Noise}.
     */
    export type $DensityFunctions$Noise_ = { yScale?: number, xzScale?: number, noise?: $DensityFunction$NoiseHolder_,  } | [yScale?: number, xzScale?: number, noise?: $DensityFunction$NoiseHolder_, ];
    export class $GeodeCrackSettings {
        static CODEC: $Codec<$GeodeCrackSettings>;
        generateCrackChance: number;
        crackPointOffset: number;
        baseCrackSize: number;
        constructor(generateCrackChance: number, arg1: number, baseCrackSize: number);
    }
    export class $DensityFunctions$Clamp extends $Record implements $DensityFunctions$PureTransformer {
        transform(value: number): number;
        input(): $DensityFunction;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        compute(context: $DensityFunction$FunctionContext): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        squeeze(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Clamp>;
        constructor(arg0: $DensityFunction, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Clamp}.
     */
    export type $DensityFunctions$Clamp_ = { maxValue?: number, minValue?: number, input?: $DensityFunction,  } | [maxValue?: number, minValue?: number, input?: $DensityFunction, ];
    export class $Noises {
        static instantiate(noises: $HolderGetter<$NormalNoise$NoiseParameters_>, random: $PositionalRandomFactory, resourceKey: $ResourceKey_<$NormalNoise$NoiseParameters>): $NormalNoise;
        static PILLAR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CONTINENTALNESS_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D_MODULATOR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CLAY_BANDS_OFFSET: $ResourceKey<$NormalNoise$NoiseParameters>;
        static EROSION: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SOUL_SAND_LAYER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PILLAR_RARENESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE_RIDGE_B: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE_RIDGE_A: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CAVE_ENTRANCE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_VEIN_B: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CONTINENTALNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_VEIN_A: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_VEININESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_FLUID_LEVEL_FLOODEDNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D: $ResourceKey<$NormalNoise$NoiseParameters>;
        static RIDGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PATCH: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NETHER_WART: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NETHER_STATE_SELECTOR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICEBERG_SURFACE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static BADLANDS_PILLAR_ROOF: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_LAVA: $ResourceKey<$NormalNoise$NoiseParameters>;
        static VEGETATION: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_ROUGHNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_ROUGHNESS_MODULATOR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CAVE_CHEESE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CAVE_LAYER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_GAP: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_BARRIER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static JAGGED: $ResourceKey<$NormalNoise$NoiseParameters>;
        static GRAVEL: $ResourceKey<$NormalNoise$NoiseParameters>;
        static BADLANDS_PILLAR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static BADLANDS_SURFACE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SHIFT: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SURFACE_SECONDARY: $ResourceKey<$NormalNoise$NoiseParameters>;
        static TEMPERATURE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D_ELEVATION: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_2: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_1: $ResourceKey<$NormalNoise$NoiseParameters>;
        static VEGETATION_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SURFACE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static POWDER_SNOW: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICEBERG_PILLAR_ROOF: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICEBERG_PILLAR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static GRAVEL_LAYER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_RARITY: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NETHERRACK: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PILLAR_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static EROSION_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SWAMP: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PACKED_ICE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_FLUID_LEVEL_SPREAD: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CALCITE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static TEMPERATURE_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        constructor();
    }
    export class $SurfaceRules$SequenceRuleSource extends $Record implements $SurfaceRules$RuleSource {
        apply(context: $SurfaceRules$Context): $SurfaceRules$SurfaceRule;
        sequence(): $List<$SurfaceRules$RuleSource>;
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
        static CODEC: $KeyDispatchDataCodec<$SurfaceRules$SequenceRuleSource>;
        constructor(arg0: $List_<$SurfaceRules$RuleSource>);
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$SequenceRuleSource}.
     */
    export type $SurfaceRules$SequenceRuleSource_ = { sequence?: $List_<$SurfaceRules$RuleSource>,  } | [sequence?: $List_<$SurfaceRules$RuleSource>, ];
    export class $SurfaceRules$Context$SteepMaterialCondition extends $SurfaceRules$LazyXZCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $SurfaceRules$NotConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$NotConditionSource}.
     */
    export type $SurfaceRules$NotConditionSource_ = { target?: $SurfaceRules$ConditionSource,  } | [target?: $SurfaceRules$ConditionSource, ];
    export class $SurfaceRules$Context$AbovePreliminarySurfaceCondition implements $SurfaceRules$Condition {
    }
    export class $SurfaceRules$Temperature extends $Enum<$SurfaceRules$Temperature> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Temperature}.
     */
    export type $SurfaceRules$Temperature_ = "instance";
    export class $SurfaceRules$Bandlands extends $Enum<$SurfaceRules$Bandlands> implements $SurfaceRules$RuleSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Bandlands}.
     */
    export type $SurfaceRules$Bandlands_ = "instance";
}
