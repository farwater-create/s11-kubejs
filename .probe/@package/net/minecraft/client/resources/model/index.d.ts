import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $BakedModelManagerAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $BakedModelMixin } from "@package/net/fabricmc/fabric/mixin/renderer/client";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $ResourceModelManagerAccessor, $ResourceAtlasSetAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $Comparator, $Map, $List, $Map_, $Collection_, $List_, $Collection, $BitSet } from "@package/java/util";
import { $BlockModelShaper } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SimpleBakedModelAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $Supplier_, $Predicate_, $Function, $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IBakedModelExtension, $IModelBakerExtension, $ModelStateExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockStatesLoaderHooks, $BlockStatesLoaderHooks$LoadingOverride_, $BakerImplHooks, $ModelLoadingEventDispatcher, $ModelLoaderHooks } from "@package/net/fabricmc/fabric/impl/client/model/loading";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $WeightedEntry$Wrapper_, $WeightedEntry$Wrapper } from "@package/net/minecraft/util/random";
import { $TextureAtlasSprite, $SpriteLoader$Preparations_, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $RuntimeException, $Comparable, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $ModelBakeryAccessor as $ModelBakeryAccessor$1 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $FabricBakedModelManager } from "@package/net/fabricmc/fabric/api/client/model/loading/v1";
import { $Logger } from "@package/org/slf4j";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BlockModel, $ItemOverrides, $BakedQuad, $ItemTransforms, $ItemModelGenerator, $BlockModelDefinition, $BlockModelDefinition$Context } from "@package/net/minecraft/client/renderer/block/model";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $ModelBakeryAccessor } from "@package/umpaz/brewinandchewin/common/mixin/client";
import { $ResourceLocation, $ResourceLocation_, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $SimpleModelAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $OctahedralGroup, $Transformation } from "@package/com/mojang/math";
import { $FabricBakedModel } from "@package/net/fabricmc/fabric/api/renderer/v1/model";

declare module "@package/net/minecraft/client/resources/model" {
    export class $BakedModel {
    }
    export interface $BakedModel extends $IBakedModelExtension, $FabricBakedModel, $BakedModelMixin {
        /**
         * @deprecated
         */
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        isGui3d(): boolean;
        get overrides(): $ItemOverrides;
        get particleIcon(): $TextureAtlasSprite;
        get transforms(): $ItemTransforms;
        get customRenderer(): boolean;
        get gui3d(): boolean;
    }
    export class $ModelBakery implements $ModelBakeryAccessor$1, $ModelBakeryAccessor, $ModelLoaderHooks {
        getModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        modifyExpressionValue$ble000$ldlib2$changeLoadedModel(arg0: $Collection_<any>, arg1: $ModelResourceLocation_, arg2: $LocalRef<any>): $Collection<any>;
        wrapOperation$ble000$ldlib2$injectStateToModelLocation(arg0: $Logger, arg1: string, arg2: $Object[], arg3: $Operation_<any>): void;
        fabric_getDispatcher(): $ModelLoadingEventDispatcher;
        fabric_getMissingModel(): $UnbakedModel;
        fabric_getOrLoadModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        bakeModels(textureGetter: $ModelBakery$TextureGetter_): void;
        getBakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        localvar$efp000$puzzleslib$init(blockStateModelLoader: $BlockStateModelLoader): $BlockStateModelLoader;
        fabric_add(modelLocation: $ModelResourceLocation_, model: $UnbakedModel): void;
        getModelGroups(): $Object2IntMap<$BlockState>;
        getMissingModel(): $UnbakedModel;
        brewinandchewin$getModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        invokeGetModel(modelLocation: $ResourceLocation_): $UnbakedModel;
        getTopLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
        getUnbakedCache(): $Map<$ResourceLocation, $UnbakedModel>;
        static BLOCK_ENTITY_MARKER: $BlockModel;
        static ITEM_MODEL_GENERATOR: $ItemModelGenerator;
        topLevelModels: $Map<$ModelResourceLocation, $UnbakedModel>;
        static NO_PATTERN_SHIELD: $Material;
        static DESTROY_STAGE_COUNT: number;
        static DESTROY_STAGES: $List<$ResourceLocation>;
        static BANNER_BASE: $Material;
        static GENERATION_MARKER: $BlockModel;
        static BREAKING_LOCATIONS: $List<$ResourceLocation>;
        static MISSING_MODEL_LOCATION: $ResourceLocation;
        static DESTROY_TYPES: $List<$RenderType>;
        static MISSING_MODEL_MESH: string;
        static FIRE_1: $Material;
        static LAVA_FLOW: $Material;
        bakedCache: $Map<$ModelBakery$BakedCacheKey, $BakedModel>;
        static SHIELD_BASE: $Material;
        static FIRE_0: $Material;
        static WATER_FLOW: $Material;
        static MODEL_LISTER: $FileToIdConverter;
        static WATER_OVERLAY: $Material;
        static MISSING_MODEL_VARIANT: $ModelResourceLocation;
        constructor(blockColors: $BlockColors, profilerFiller: $ProfilerFiller, modelResources: $Map_<$ResourceLocation_, $BlockModel>, blockStateResources: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>);
        get bakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        get modelGroups(): $Object2IntMap<$BlockState>;
        get missingModel(): $UnbakedModel;
        get unbakedCache(): $Map<$ResourceLocation, $UnbakedModel>;
    }
    export class $UnbakedModel {
    }
    export interface $UnbakedModel {
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        getDependencies(): $Collection<$ResourceLocation>;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $BuiltInModel implements $BakedModel {
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        isGui3d(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        /**
         * A null `RenderType` is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
         */
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, data: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        isVanillaAdapter(): boolean;
        constructor(itemTransforms: $ItemTransforms, overrides: $ItemOverrides, particleTexture: $TextureAtlasSprite, usesBlockLight: boolean);
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
        get customRenderer(): boolean;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelState {
    }
    export interface $ModelState extends $ModelStateExtension {
        getRotation(): $Transformation;
        isUvLocked(): boolean;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    export class $ModelManager implements $PreparableReloadListener, $AutoCloseable, $ResourceModelManagerAccessor, $FabricBakedModelManager, $BakedModelManagerAccessor, $IdentifiableResourceReloadListener {
        close(): void;
        getModelBakery(): $ModelBakery;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        requiresRender(oldState: $BlockState_, newState: $BlockState_): boolean;
        getBlockModelShaper(): $BlockModelShaper;
        getModel(modelLocation: $ModelResourceLocation_): $BakedModel;
        getFabricId(): $ResourceLocation;
        getMissingModel(): $BakedModel;
        updateMaxMipLevel(level: number): void;
        getFabricDependencies(): $Collection<any>;
        getAtlas(location: $ResourceLocation_): $TextureAtlas;
        getName(): string;
        getModel(arg0: $ResourceLocation_): $BakedModel;
        getModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getAtlases(): $AtlasSet;
        getMaxMipmapLevels(): number;
        bakedRegistry: $Map<$ModelResourceLocation, $BakedModel>;
        static VANILLA_ATLASES: $Map<$ResourceLocation, $ResourceLocation>;
        constructor(textureManager: $TextureManager, blockColors: $BlockColors, maxMipmapLevels: number);
        get modelBakery(): $ModelBakery;
        get blockModelShaper(): $BlockModelShaper;
        get fabricId(): $ResourceLocation;
        get missingModel(): $BakedModel;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
        get models(): $Map<$ModelResourceLocation, $BakedModel>;
        get atlases(): $AtlasSet;
        get maxMipmapLevels(): number;
    }
    export class $WeightedBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel {
        getQuads(state: $BlockState_ | null, side: $Direction_ | null, rand: $RandomSource, extraData: $ModelData, renderType: $RenderType): $List<any>;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        isVanillaAdapter(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        isGui3d(): boolean;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        isVanilla: boolean;
        totalWeight: number;
        list: $List<$WeightedEntry$Wrapper<$BakedModel>>;
        constructor(list: $List_<$WeightedEntry$Wrapper_<$BakedModel>>);
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
        get customRenderer(): boolean;
        get vanillaAdapter(): boolean;
        get gui3d(): boolean;
    }
    export class $WeightedBakedModel$Builder {
        add(model: $BakedModel | null, weight: number): $WeightedBakedModel$Builder;
        build(): $BakedModel;
        constructor();
    }
    export class $ModelBaker {
    }
    export interface $ModelBaker extends $IModelBakerExtension {
        /**
         * @deprecated
         */
        bake(location: $ResourceLocation_, transform: $ModelState): $BakedModel;
        getModel(location: $ResourceLocation_): $UnbakedModel;
    }
    export class $SimpleBakedModel$Builder {
        /**
         * @deprecated
         */
        build(): $BakedModel;
        build(arg0: $RenderTypeGroup_): $BakedModel;
        item(): $SimpleBakedModel$Builder;
        handler$jek000$ferritecore$deduplicate(arg0: $Direction_, arg1: $BakedQuad, arg2: $CallbackInfoReturnable<any>): void;
        handler$jek000$ferritecore$deduplicate(arg0: $BakedQuad, arg1: $CallbackInfoReturnable<any>): void;
        addCulledFace(facing: $Direction_, quad: $BakedQuad): $SimpleBakedModel$Builder;
        addUnculledFace(quad: $BakedQuad): $SimpleBakedModel$Builder;
        particle(particleIcon: $TextureAtlasSprite): $SimpleBakedModel$Builder;
        constructor(blockModel: $BlockModel, overrides: $ItemOverrides, isGui3d: boolean);
        constructor(hasAmbientOcclusion: boolean, usesBlockLight: boolean, isGui3d: boolean, transforms: $ItemTransforms, overrides: $ItemOverrides);
    }
    export class $MultiPartBakedModel$Builder {
        add(predicate: $Predicate_<$BlockState>, model: $BakedModel): void;
        build(): $BakedModel;
        redirect$jeh000$ferritecore$build(arg0: $List_<any>): $MultiPartBakedModel;
        constructor();
    }
    export class $Material {
        buffer(buffer: $MultiBufferSource_, renderTypeGetter: $Function_<$ResourceLocation, $RenderType>): $VertexConsumer;
        buffer(buffer: $MultiBufferSource_, renderTypeGetter: $Function_<$ResourceLocation, $RenderType>, withGlint: boolean): $VertexConsumer;
        texture(): $ResourceLocation;
        renderType(renderTypeGetter: $Function_<$ResourceLocation, $RenderType>): $RenderType;
        atlasLocation(): $ResourceLocation;
        sprite(): $TextureAtlasSprite;
        static COMPARATOR: $Comparator<$Material>;
        constructor(atlasLocation: $ResourceLocation_, texture: $ResourceLocation_);
    }
    export class $BlockModelRotation extends $Enum<$BlockModelRotation> implements $ModelState {
        static values(): $BlockModelRotation[];
        static valueOf(arg0: string): $BlockModelRotation;
        getRotation(): $Transformation;
        static by(x: number, y: number): $BlockModelRotation;
        actualRotation(): $OctahedralGroup;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        isUvLocked(): boolean;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        mayApplyArbitraryRotation(): boolean;
        static X90_Y0: $BlockModelRotation;
        static X0_Y180: $BlockModelRotation;
        static X0_Y270: $BlockModelRotation;
        static X180_Y270: $BlockModelRotation;
        static X180_Y0: $BlockModelRotation;
        static X270_Y90: $BlockModelRotation;
        static X0_Y0: $BlockModelRotation;
        static X0_Y90: $BlockModelRotation;
        static X90_Y270: $BlockModelRotation;
        static X90_Y180: $BlockModelRotation;
        static X180_Y180: $BlockModelRotation;
        static X270_Y0: $BlockModelRotation;
        static X270_Y180: $BlockModelRotation;
        static X90_Y90: $BlockModelRotation;
        static X270_Y270: $BlockModelRotation;
        static X180_Y90: $BlockModelRotation;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelRotation}.
     */
    export type $BlockModelRotation_ = "x0_y0" | "x0_y90" | "x0_y180" | "x0_y270" | "x90_y0" | "x90_y90" | "x90_y180" | "x90_y270" | "x180_y0" | "x180_y90" | "x180_y180" | "x180_y270" | "x270_y0" | "x270_y90" | "x270_y180" | "x270_y270";
    export class $AtlasSet$StitchResult {
        missing(): $TextureAtlasSprite;
        upload(): void;
        getSprite(location: $ResourceLocation_): $TextureAtlasSprite;
        readyForUpload(): $CompletableFuture<void>;
        constructor(atlas: $TextureAtlas, preperations: $SpriteLoader$Preparations_);
    }
    export class $BlockStateModelLoader$LoadedJson extends $Record {
        data(): $JsonElement;
        source(): string;
        parse(blockStateId: $ResourceLocation_, context: $BlockModelDefinition$Context): $BlockModelDefinition;
        constructor(arg0: string, arg1: $JsonElement_);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedJson}.
     */
    export type $BlockStateModelLoader$LoadedJson_ = { source?: string, data?: $JsonElement_,  } | [source?: string, data?: $JsonElement_, ];
    export class $ModelBakery$TextureGetter {
    }
    export interface $ModelBakery$TextureGetter {
        get(modelLocation: $ModelResourceLocation_, material: $Material): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$TextureGetter}.
     */
    export type $ModelBakery$TextureGetter_ = ((arg0: $ModelResourceLocation, arg1: $Material) => $TextureAtlasSprite);
    export class $AtlasSet$AtlasEntry extends $Record implements $AutoCloseable {
        close(): void;
        atlas(): $TextureAtlas;
        atlasInfoLocation(): $ResourceLocation;
        constructor(arg0: $TextureAtlas, arg1: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $AtlasSet$AtlasEntry}.
     */
    export type $AtlasSet$AtlasEntry_ = { atlas?: $TextureAtlas, atlasInfoLocation?: $ResourceLocation_,  } | [atlas?: $TextureAtlas, atlasInfoLocation?: $ResourceLocation_, ];
    export class $SimpleBakedModel implements $BakedModel, $SimpleBakedModelAccessor, $SimpleModelAccess {
        getQuads(state: $BlockState_ | null, direction: $Direction_ | null, random: $RandomSource): $List<$BakedQuad>;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        isGui3d(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        /**
         * A null `RenderType` is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
         */
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, data: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        isVanillaAdapter(): boolean;
        getItemRenderTypes(): $List<$RenderType>;
        getBlockRenderTypes(): $ChunkRenderTypeSet;
        getFabulousItemRenderTypes(): $List<$RenderType>;
        itemRenderTypes: $List<$RenderType>;
        fabulousItemRenderTypes: $List<$RenderType>;
        unculledFaces: $List<$BakedQuad>;
        culledFaces: $Map<$Direction, $List<$BakedQuad>>;
        particleIcon: $TextureAtlasSprite;
        hasAmbientOcclusion: boolean;
        transforms: $ItemTransforms;
        blockRenderTypes: $ChunkRenderTypeSet;
        overrides: $ItemOverrides;
        /**
         * @deprecated
         */
        constructor(unculledFaces: $List_<$BakedQuad>, culledFaces: $Map_<$Direction_, $List_<$BakedQuad>>, hasAmbientOcclusion: boolean, usesBlockLight: boolean, isGui3d: boolean, particleIcon: $TextureAtlasSprite, transforms: $ItemTransforms, overrides: $ItemOverrides);
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides, arg8: $RenderTypeGroup_);
        get customRenderer(): boolean;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelManager$ReloadState extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ModelManager$ReloadState}.
     */
    export type $ModelManager$ReloadState_ = { modelBakery?: $ModelBakery, missingModel?: $BakedModel, modelCache?: $Map_<$BlockState_, $BakedModel>, atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, readyForUpload?: $CompletableFuture<void>,  } | [modelBakery?: $ModelBakery, missingModel?: $BakedModel, modelCache?: $Map_<$BlockState_, $BakedModel>, atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, readyForUpload?: $CompletableFuture<void>, ];
    export class $BlockStateModelLoader implements $BlockStatesLoaderHooks {
        loadAllBlockStates(): void;
        static getValueHelper<T extends $Comparable<T>>(property: $Property<T>, propertyName: string): T;
        fabric_setLoadingOverride(arg0: $BlockStatesLoaderHooks$LoadingOverride_): void;
        loadBlockStateDefinitions(blockStateId: $ResourceLocation_, stateDefenition: $StateDefinition<$Block, $BlockState_>): void;
        getModelGroups(): $Object2IntMap<$BlockState>;
        static SINGLETON_MODEL_GROUP: number;
        static BLOCKSTATE_LISTER: $FileToIdConverter;
        constructor(blockStateResources: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>, profiler: $ProfilerFiller, missingModel: $UnbakedModel, blockColors: $BlockColors, discoveredModelOutput: $BiConsumer_<$ModelResourceLocation, $UnbakedModel>);
        get modelGroups(): $Object2IntMap<$BlockState>;
    }
    export class $BlockStateModelLoader$LoadedModel extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedModel}.
     */
    export type $BlockStateModelLoader$LoadedModel_ = { key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>, model?: $UnbakedModel,  } | [key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>, model?: $UnbakedModel, ];
    export class $MultiPartBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel {
        getQuads(state: $BlockState_ | null, side: $Direction_ | null, rand: $RandomSource, extraData: $ModelData, renderType: $RenderType): $List<any>;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        /**
         * Applies a transform for the given `TransformType` and `applyLeftHandTransform`, and
         * returns the model to be rendered.
         */
        applyTransform(transformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        usesBlockLight(): boolean;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        /**
         * Gets the set of render types to use when drawing this block in the level.
         * Supported types are those returned by `RenderType#chunkBufferLayers()`.
         * 
         * By default, defers query to `ItemBlockRenderTypes`.
         */
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        isVanillaAdapter(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        getSelectors(arg0: $BlockState_ | null): $BitSet;
        isGui3d(): boolean;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        redirect$jei000$ferritecore$redirectCacheGet(arg0: $Map_<any, any>, arg1: $Object): $Object;
        redirect$jei000$ferritecore$redirectCachePut(arg0: $Map_<any, any>, arg1: $Object, arg2: $Object): $Object;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        /**
         * Gets an ordered list of baked models used to render this model as an item.
         * Each of those models' render types will be queried via `#getRenderTypes(ItemStack, boolean)`.
         * 
         * By default, returns the model itself.
         */
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        particleIcon: $TextureAtlasSprite;
        isVanilla: boolean;
        hasAmbientOcclusion: boolean;
        transforms: $ItemTransforms;
        overrides: $ItemOverrides;
        constructor(selectors: $List_<$Pair<$Predicate_<$BlockState>, $BakedModel>>);
        get customRenderer(): boolean;
        get vanillaAdapter(): boolean;
        get gui3d(): boolean;
    }
    export class $ModelBakery$BakedCacheKey extends $Record {
        id(): $ResourceLocation;
        isUvLocked(): boolean;
        transformation(): $Transformation;
        constructor(id: $ResourceLocation_, transformation: $Transformation, isUvLocked: boolean);
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$BakedCacheKey}.
     */
    export type $ModelBakery$BakedCacheKey_ = { transformation?: $Transformation, isUvLocked?: boolean, id?: $ResourceLocation_,  } | [transformation?: $Transformation, isUvLocked?: boolean, id?: $ResourceLocation_, ];
    export class $BlockStateModelLoader$ModelGroupKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$ModelGroupKey}.
     */
    export type $BlockStateModelLoader$ModelGroupKey_ = { coloringValues?: $List_<$Object>, models?: $List_<$UnbakedModel>,  } | [coloringValues?: $List_<$Object>, models?: $List_<$UnbakedModel>, ];
    export class $BlockStateModelLoader$BlockStateDefinitionException extends $RuntimeException {
    }
    export class $ModelResourceLocation extends $Record {
        id(): $ResourceLocation;
        getVariant(): string;
        variant(): string;
        static standalone(id: $ResourceLocation_): $ModelResourceLocation;
        static vanilla(path: string, variant: string): $ModelResourceLocation;
        static inventory(id: $ResourceLocation_): $ModelResourceLocation;
        static INVENTORY_VARIANT: string;
        static STANDALONE_VARIANT: string;
        constructor(id: $ResourceLocation_, variant: string);
    }
    /**
     * Values that may be interpreted as {@link $ModelResourceLocation}.
     */
    export type $ModelResourceLocation_ = { id?: $ResourceLocation_, variant?: string,  } | [id?: $ResourceLocation_, variant?: string, ];
    export class $ModelBakery$ModelBakerImpl implements $ModelBaker, $BakerImplHooks {
        bake(location: $ResourceLocation_, transform: $ModelState): $BakedModel;
        bake(location: $ResourceLocation_, state: $ModelState, sprites: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        getModel(location: $ResourceLocation_): $UnbakedModel;
        getModelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        getTopLevelModel(location: $ModelResourceLocation_): $UnbakedModel;
        bakeUncached(model: $UnbakedModel, state: $ModelState, sprites: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        bakeUncached(model: $UnbakedModel, state: $ModelState): $BakedModel;
        fabric_getTextureGetter(): $Function<any, any>;
        this$0: $ModelBakery;
        constructor(textureGetter: $ModelBakery, modelLocation: $ModelBakery$TextureGetter_, arg2: $ModelResourceLocation_);
        get modelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
    }
    export class $AtlasSet implements $AutoCloseable, $ResourceAtlasSetAccessor {
        close(): void;
        getAtlas(location: $ResourceLocation_): $TextureAtlas;
        scheduleLoad(resourceManager: $ResourceManager, mipLevel: number, executor: $Executor_): $Map<$ResourceLocation, $CompletableFuture<$AtlasSet$StitchResult>>;
        getAtlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
        constructor(atlasMap: $Map_<$ResourceLocation_, $ResourceLocation_>, textureManager: $TextureManager);
        get atlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
    }
}
