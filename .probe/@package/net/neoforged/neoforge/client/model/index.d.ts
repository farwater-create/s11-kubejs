import { $JsonDeserializationContext_, $JsonObject_, $Gson, $JsonElement_ } from "@package/com/google/gson";
import { $RenderType, $ItemModelShaper } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemColor } from "@package/net/minecraft/client/color/item";
import { $SimpleBakedModel, $ModelState, $BakedModel, $ModelResourceLocation, $ModelManager, $ModelBaker, $Material, $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $List, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $RenderTypeGroup, $ChunkRenderTypeSet, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $IGeometryLoader, $IGeometryBakingContext, $SimpleUnbakedGeometry, $IUnbakedGeometry } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $BlockModel, $BlockElement, $ItemOverrides, $BakedQuad, $ItemTransforms, $BlockModel$Deserializer } from "@package/net/minecraft/client/renderer/block/model";
import { $ImmutableList, $ImmutableMap } from "@package/com/google/common/collect";
import { $ModelData, $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $Transformation } from "@package/com/mojang/math";
export * as generators from "@package/net/neoforged/neoforge/client/model/generators";
export * as obj from "@package/net/neoforged/neoforge/client/model/obj";
export * as renderable from "@package/net/neoforged/neoforge/client/model/renderable";
export * as pipeline from "@package/net/neoforged/neoforge/client/model/pipeline";
export * as lighting from "@package/net/neoforged/neoforge/client/model/lighting";
export * as data from "@package/net/neoforged/neoforge/client/model/data";
export * as geometry from "@package/net/neoforged/neoforge/client/model/geometry";

declare module "@package/net/neoforged/neoforge/client/model" {
    /**
     * A collection of `IQuadTransformer` implementations.
     */
    export class $QuadTransformers {
        /**
         * @return a `BakedQuad` transformer that does nothing
         */
        static empty(): $IQuadTransformer;
        /**
         * @return a new `BakedQuad` transformer that applies the specified `Transformation`
         */
        static applying(transform: $Transformation): $IQuadTransformer;
        /**
         * Converts an ARGB color to an ABGR color, as the commonly used color format is not the format colors end up packed into.
         * This function doubles as its own inverse.
         */
        static toABGR(argb: number): number;
        static applyingLightmap(blockLight: number, skyLight: number): $IQuadTransformer;
        static applyingLightmap(packedLight: number): $IQuadTransformer;
        static applyingColor(alpha: number, red: number, green: number, blue: number): $IQuadTransformer;
        static applyingColor(packedLight: number): $IQuadTransformer;
        /**
         * This method supplies a default alpha value of 255 (no transparency)
         */
        static applyingColor(red: number, green: number, blue: number): $IQuadTransformer;
        /**
         * @return a `BakedQuad` transformer that does nothing
         */
        static settingMaxEmissivity(): $IQuadTransformer;
        static settingEmissivity(packedLight: number): $IQuadTransformer;
        static set tingEmissivity(value: number);
    }
    /**
     * Forge reimplementation of vanilla's `ItemModelGenerator`, i.e. builtin/generated models with some tweaks:
     * - Represented as `IUnbakedGeometry` so it can be baked as usual instead of being special-cased
     * - Not limited to an arbitrary number of layers (5)
     * - Support for per-layer render types
     */
    export class $ItemLayerModel implements $IUnbakedGeometry<$ItemLayerModel> {
        bake(context: $IGeometryBakingContext, baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, modelState: $ModelState, overrides: $ItemOverrides): $BakedModel;
        /**
         * @return a set of all the components whose visibility may be configured via `IGeometryBakingContext`
         */
        getConfigurableComponentNames(): $Set<string>;
        /**
         * Resolve parents of nested `BlockModel`s which are later used in
         * `IUnbakedGeometry#bake(IGeometryBakingContext, ModelBaker, Function, ModelState, ItemOverrides)`
         * via `BlockModel#resolveParents(Function)`
         */
        resolveParents(modelGetter: $Function_<$ResourceLocation, $UnbakedModel>, context: $IGeometryBakingContext): void;
        get configurableComponentNames(): $Set<string>;
    }
    export class $SeparateTransformsModel$Baked implements $IDynamicBakedModel {
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, data: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        applyTransform(cameraTransformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        isGui3d(): boolean;
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource): $List<$BakedQuad>;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        /**
         * Controls the AO behavior for all quads of this model. The default behavior is to use AO unless the block emits light,
         * `TriState#TRUE` and `TriState#FALSE` force AO to be enabled and disabled respectively, regardless of
         * the block emitting light or not. `BakedQuad#hasAmbientOcclusion()` can be used to disable AO for a specific
         * quad even if this method says otherwise.
         * 
         * This method cannot force AO if the global smooth lighting video setting is disabled.
         */
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
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
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        isVanillaAdapter(): boolean;
        constructor(isAmbientOcclusion: boolean, isGui3d: boolean, isSideLit: boolean, particle: $TextureAtlasSprite, overrides: $ItemOverrides, baseModel: $BakedModel, perspectives: $ImmutableMap<$ItemDisplayContext_, $BakedModel>);
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
        get customRenderer(): boolean;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
    }
    /**
     * A model composed of vanilla block elements.
     */
    export class $ElementsModel extends $SimpleUnbakedGeometry<$ElementsModel> {
        constructor(elements: $List_<$BlockElement>);
    }
    /**
     * A version of `Deserializer` capable of deserializing models with custom loaders, as well as other
     * changes introduced to the spec by Forge.
     */
    export class $ExtendedBlockModelDeserializer extends $BlockModel$Deserializer {
        static deserializeGeometry(deserializationContext: $JsonDeserializationContext_, object: $JsonObject_): $IUnbakedGeometry<never>;
        static INSTANCE: $Gson;
        constructor();
    }
    export class $ItemLayerModel$Loader implements $IGeometryLoader<$ItemLayerModel> {
        read(jsonObject: $JsonObject_, deserializationContext: $JsonDeserializationContext_): $ItemLayerModel;
        static INSTANCE: $ItemLayerModel$Loader;
        constructor();
    }
    /**
     * A model composed of multiple sub-models which are picked based on the `ItemDisplayContext` being used.
     */
    export class $SeparateTransformsModel implements $IUnbakedGeometry<$SeparateTransformsModel> {
        bake(context: $IGeometryBakingContext, baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, modelState: $ModelState, overrides: $ItemOverrides): $BakedModel;
        resolveParents(modelGetter: $Function_<$ResourceLocation, $UnbakedModel>, context: $IGeometryBakingContext): void;
        /**
         * @return a set of all the components whose visibility may be configured via `IGeometryBakingContext`
         */
        getConfigurableComponentNames(): $Set<string>;
        constructor(baseModel: $BlockModel, perspectives: $ImmutableMap<$ItemDisplayContext_, $BlockModel>);
        get configurableComponentNames(): $Set<string>;
    }
    export class $DynamicFluidContainerModel$ContainedFluidOverrideHandler extends $ItemOverrides {
        static NO_OVERRIDE: number;
        static EMPTY: $ItemOverrides;
    }
    export class $IModelBuilder$Simple implements $IModelBuilder<$IModelBuilder$Simple> {
        /**
         * @deprecated
         */
        build(): $BakedModel;
        addCulledFace(arg0: $Direction_, arg1: $BakedQuad): $IModelBuilder$Simple;
        addUnculledFace(arg0: $BakedQuad): $IModelBuilder$Simple;
    }
    export class $ElementsModel$Loader implements $IGeometryLoader<$ElementsModel> {
        read(jsonObject: $JsonObject_, deserializationContext: $JsonDeserializationContext_): $ElementsModel;
        static INSTANCE: $ElementsModel$Loader;
    }
    /**
     * A completely empty model with no quads or texture dependencies.
     * 
     * You can access it as a `BakedModel`, an `IUnbakedGeometry` or an `IGeometryLoader`.
     */
    export class $EmptyModel extends $SimpleUnbakedGeometry<$EmptyModel> {
        static INSTANCE: $EmptyModel;
        static BAKED: $BakedModel;
        static LOADER: $IGeometryLoader<$EmptyModel>;
    }
    /**
     * Transformer for baked quads.
     */
    export class $IQuadTransformer {
        static UV2: number;
        static STRIDE: number;
        static POSITION: number;
        static UV1: number;
        static COLOR: number;
        static UV0: number;
        static NORMAL: number;
    }
    export interface $IQuadTransformer {
        andThen(other: $IQuadTransformer_): $IQuadTransformer;
        process(inputs: $List_<$BakedQuad>): $List<$BakedQuad>;
        process(quad: $BakedQuad): $BakedQuad;
        processInPlace(quad: $BakedQuad): void;
        processInPlace(quads: $List_<$BakedQuad>): void;
    }
    /**
     * Values that may be interpreted as {@link $IQuadTransformer}.
     */
    export type $IQuadTransformer_ = ((arg0: $BakedQuad) => void);
    export class $IModelBuilder$Collecting implements $IModelBuilder<$IModelBuilder$Collecting> {
        build(): $BakedModel;
        addCulledFace(arg0: $Direction_, arg1: $BakedQuad): $IModelBuilder$Collecting;
        addUnculledFace(arg0: $BakedQuad): $IModelBuilder$Collecting;
    }
    export class $CompositeModel$Loader implements $IGeometryLoader<$CompositeModel> {
        read(jsonObject: $JsonObject_, deserializationContext: $JsonDeserializationContext_): $CompositeModel;
        static INSTANCE: $CompositeModel$Loader;
    }
    export class $ExtraFaceData extends $Record {
        static read(arg0: $JsonElement_, arg1: $ExtraFaceData_): $ExtraFaceData;
        color(): number;
        blockLight(): number;
        ambientOcclusion(): boolean;
        skyLight(): number;
        static CODEC: $Codec<$ExtraFaceData>;
        static COLOR: $Codec<number>;
        static DEFAULT: $ExtraFaceData;
        constructor(color: number, blockLight: number, skyLight: number, ambientOcclusion: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ExtraFaceData}.
     */
    export type $ExtraFaceData_ = { ambientOcclusion?: boolean, skyLight?: number, blockLight?: number, color?: number,  } | [ambientOcclusion?: boolean, skyLight?: number, blockLight?: number, color?: number, ];
    /**
     * Simple implementation of `ModelState`.
     */
    export class $SimpleModelState implements $ModelState {
        getRotation(): $Transformation;
        isUvLocked(): boolean;
        mayApplyArbitraryRotation(): boolean;
        constructor(transformation: $Transformation, uvLocked: boolean);
        constructor(transformation: $Transformation);
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    /**
     * A model data container which stores data for child components.
     */
    export class $CompositeModel$Data {
        get(name: string): $ModelData;
        static builder(): $CompositeModel$Data$Builder;
        /**
         * Helper to get the data from a `ModelData` instance.
         */
        static resolve(modelData: $ModelData, name: string): $ModelData;
        static PROPERTY: $ModelProperty<$CompositeModel$Data>;
    }
    /**
     * Convenience interface with default implementation of `IBakedModelExtension#getQuads(BlockState, Direction, RandomSource, ModelData, RenderType)`.
     */
    export class $IDynamicBakedModel {
    }
    export interface $IDynamicBakedModel extends $BakedModel {
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource): $List<$BakedQuad>;
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, extraData: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
    }
    /**
     * Wrapper for `BakedModel` which delegates all operations to its parent.
     * 
     * Useful for creating wrapper baked models which only override certain properties.
     */
    export class $BakedModelWrapper<T extends $BakedModel> implements $BakedModel {
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, extraData: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource): $List<$BakedQuad>;
        useAmbientOcclusion(state: $BlockState_, data: $ModelData, renderType: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        applyTransform(cameraTransformType: $ItemDisplayContext_, poseStack: $PoseStack, applyLeftHandTransform: boolean): $BakedModel;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getParticleIcon(data: $ModelData): $TextureAtlasSprite;
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        isGui3d(): boolean;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        isVanillaAdapter(): boolean;
        constructor(arg0: T);
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
        get customRenderer(): boolean;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $CompositeModel$Baked implements $IDynamicBakedModel {
        static builder(arg0: $IGeometryBakingContext, arg1: $TextureAtlasSprite, arg2: $ItemOverrides, arg3: $ItemTransforms): $CompositeModel$Baked$Builder;
        static builder(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $TextureAtlasSprite, arg4: $ItemOverrides, arg5: $ItemTransforms): $CompositeModel$Baked$Builder;
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource, data: $ModelData, renderType: $RenderType): $List<$BakedQuad>;
        useAmbientOcclusion(): boolean;
        getOverrides(): $ItemOverrides;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        getTransforms(): $ItemTransforms;
        isCustomRenderer(): boolean;
        getRenderTypes(state: $BlockState_, rand: $RandomSource, data: $ModelData): $ChunkRenderTypeSet;
        getRenderPasses(itemStack: $ItemStack_, fabulous: boolean): $List<$BakedModel>;
        isGui3d(): boolean;
        getPart(name: string): $BakedModel;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        getQuads(state: $BlockState_, side: $Direction_, rand: $RandomSource): $List<$BakedQuad>;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
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
        getRenderTypes(itemStack: $ItemStack_, fabulous: boolean): $List<$RenderType>;
        isVanillaAdapter(): boolean;
        constructor(isGui3d: boolean, isSideLit: boolean, isAmbientOcclusion: boolean, particle: $TextureAtlasSprite, transforms: $ItemTransforms, overrides: $ItemOverrides, children: $ImmutableMap<string, $BakedModel>, itemPasses: $ImmutableList<$BakedModel>);
        get overrides(): $ItemOverrides;
        get transforms(): $ItemTransforms;
        get customRenderer(): boolean;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $CompositeModel$Data$Builder {
        "with"(arg0: string, arg1: $ModelData): $CompositeModel$Data$Builder;
        build(): $CompositeModel$Data;
        constructor();
    }
    export class $SeparateTransformsModel$Loader implements $IGeometryLoader<$SeparateTransformsModel> {
        read(jsonObject: $JsonObject_, deserializationContext: $JsonDeserializationContext_): $SeparateTransformsModel;
        static INSTANCE: $SeparateTransformsModel$Loader;
    }
    export class $EmptyModel$Baked extends $SimpleBakedModel {
        itemRenderTypes: $List<$RenderType>;
        fabulousItemRenderTypes: $List<$RenderType>;
        unculledFaces: $List<$BakedQuad>;
        culledFaces: $Map<$Direction, $List<$BakedQuad>>;
        particleIcon: $TextureAtlasSprite;
        hasAmbientOcclusion: boolean;
        transforms: $ItemTransforms;
        blockRenderTypes: $ChunkRenderTypeSet;
        overrides: $ItemOverrides;
    }
    /**
     * Base interface for any object that collects culled and unculled faces and bakes them into a model.
     * 
     * Provides a generic base implementation via `#of(boolean, boolean, boolean, ItemTransforms, ItemOverrides, TextureAtlasSprite, RenderTypeGroup)`
     * and a quad-collecting alternative via `#collecting(List)`.
     */
    export class $IModelBuilder<T extends $IModelBuilder<T>> {
        /**
         * Creates a new model builder that uses the provided attributes in the final baked model.
         */
        static of(hasAmbientOcclusion: boolean, usesBlockLight: boolean, isGui3d: boolean, transforms: $ItemTransforms, overrides: $ItemOverrides, particle: $TextureAtlasSprite, renderTypes: $RenderTypeGroup_): $IModelBuilder<never>;
        /**
         * Creates a new model builder that collects quads to the provided list, returning
         * an empty model if you call `#build()`.
         */
        static collecting(quads: $List_<$BakedQuad>): $IModelBuilder<never>;
    }
    export interface $IModelBuilder<T extends $IModelBuilder<T>> {
        build(): $BakedModel;
        addCulledFace(arg0: $Direction_, arg1: $BakedQuad): T;
        addUnculledFace(arg0: $BakedQuad): T;
    }
    /**
     * Wrapper around `ItemModelShaper` that cleans up the internal maps to respect ID remapping.
     */
    export class $RegistryAwareItemModelShaper extends $ItemModelShaper {
        getLocation(stack: $ItemStack_): $ModelResourceLocation;
        shapes: $Int2ObjectMap<$ModelResourceLocation>;
        constructor(manager: $ModelManager);
    }
    export class $CompositeModel$Baked$Builder {
        build(): $BakedModel;
        setParticle(arg0: $TextureAtlasSprite): $CompositeModel$Baked$Builder;
        addLayer(model: $BakedModel): void;
        addQuads(arg0: $RenderTypeGroup_, arg1: $Collection_<$BakedQuad>): $CompositeModel$Baked$Builder;
        addQuads(arg0: $RenderTypeGroup_, ...arg1: $BakedQuad[]): $CompositeModel$Baked$Builder;
        set particle(value: $TextureAtlasSprite);
    }
    export class $DynamicFluidContainerModel$Colors implements $ItemColor {
        getColor(stack: $ItemStack_, tintIndex: number): number;
        constructor();
    }
    /**
     * A dynamic fluid container model, capable of re-texturing itself at runtime to match the contained fluid.
     * 
     * Composed of a base layer, a fluid layer (applied with a mask) and a cover layer (optionally applied with a mask).
     * The entire model may optionally be flipped if the fluid is gaseous, and the fluid layer may glow if light-emitting.
     * 
     * Fluid tinting requires registering a separate `ItemColor`. An implementation is provided in `Colors`.
     */
    export class $DynamicFluidContainerModel implements $IUnbakedGeometry<$DynamicFluidContainerModel> {
        bake(context: $IGeometryBakingContext, baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, modelState: $ModelState, overrides: $ItemOverrides): $BakedModel;
        static getLayerRenderTypes(unlit: boolean): $RenderTypeGroup;
        /**
         * Returns a new ModelDynBucket representing the given fluid, but with the same
         * other properties (flipGas, tint, coverIsMask).
         */
        withFluid(newFluid: $Fluid): $DynamicFluidContainerModel;
        /**
         * @return a set of all the components whose visibility may be configured via `IGeometryBakingContext`
         */
        getConfigurableComponentNames(): $Set<string>;
        /**
         * Resolve parents of nested `BlockModel`s which are later used in
         * `IUnbakedGeometry#bake(IGeometryBakingContext, ModelBaker, Function, ModelState, ItemOverrides)`
         * via `BlockModel#resolveParents(Function)`
         */
        resolveParents(modelGetter: $Function_<$ResourceLocation, $UnbakedModel>, context: $IGeometryBakingContext): void;
        get configurableComponentNames(): $Set<string>;
    }
    /**
     * A model composed of several named children.
     * 
     * These respect component visibility as specified in `IGeometryBakingContext` and can additionally be provided
     * with an item-specific render ordering, for multi-pass arrangements.
     */
    export class $CompositeModel implements $IUnbakedGeometry<$CompositeModel> {
        bake(context: $IGeometryBakingContext, baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, modelState: $ModelState, overrides: $ItemOverrides): $BakedModel;
        getConfigurableComponentNames(): $Set<string>;
        resolveParents(modelGetter: $Function_<$ResourceLocation, $UnbakedModel>, context: $IGeometryBakingContext): void;
        constructor(children: $ImmutableMap<string, $BlockModel>, itemPasses: $ImmutableList<string>);
        get configurableComponentNames(): $Set<string>;
    }
    export class $DynamicFluidContainerModel$Loader implements $IGeometryLoader<$DynamicFluidContainerModel> {
        read(jsonObject: $JsonObject_, deserializationContext: $JsonDeserializationContext_): $DynamicFluidContainerModel;
        static INSTANCE: $DynamicFluidContainerModel$Loader;
    }
}
