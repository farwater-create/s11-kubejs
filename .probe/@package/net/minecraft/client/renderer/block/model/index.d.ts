import { $JsonDeserializationContext_, $JsonObject_, $JsonDeserializer, $Gson, $JsonElement_ } from "@package/com/google/gson";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $BlockModelRotation, $ModelState, $BakedModel, $ModelBaker, $Material, $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Map_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Function_ } from "@package/java/util/function";
import { $Direction$Axis_, $Direction_, $Direction$Axis, $Direction } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Type } from "@package/java/lang/reflect";
import { $BakedQuadView } from "@package/net/caffeinemc/mods/sodium/client/model/quad";
import { $SpriteContents, $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $RuntimeException } from "@package/java/lang";
import { $Reader } from "@package/java/io";
import { $BlockGeometryBakingContext } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $ItemStack_, $ItemDisplayContext_, $ItemDisplayContext } from "@package/net/minecraft/world/item";
import { $ImmutableList, $ImmutableMap } from "@package/com/google/common/collect";
import { $MultiPart } from "@package/net/minecraft/client/renderer/block/model/multipart";
import { $Stream } from "@package/java/util/stream";
import { $ExtraFaceData, $ExtraFaceData_ } from "@package/net/neoforged/neoforge/client/model";
import { $BakedQuadAccess } from "@package/malte0811/ferritecore/mixin/accessors";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $Transformation } from "@package/com/mojang/math";
import { $Vector3f } from "@package/org/joml";
export * as multipart from "@package/net/minecraft/client/renderer/block/model/multipart";

declare module "@package/net/minecraft/client/renderer/block/model" {
    export class $BlockElement {
        uvsByFace(face: $Direction_): number[];
        getFaceData(): $ExtraFaceData;
        setFaceData(arg0: $ExtraFaceData_): void;
        rotation: $BlockElementRotation;
        shade: boolean;
        from: $Vector3f;
        to: $Vector3f;
        faces: $Map<$Direction, $BlockElementFace>;
        constructor(from: $Vector3f, to: $Vector3f, faces: $Map_<$Direction_, $BlockElementFace_>, rotation: $BlockElementRotation_ | null, shade: boolean);
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $Map_<$Direction_, $BlockElementFace_>, arg3: $BlockElementRotation_ | null, arg4: boolean, arg5: $ExtraFaceData_);
    }
    export class $BlockFaceUV {
        setMissingUv(uvs: number[]): void;
        getReverseIndex(index: number): number;
        getU(index: number): number;
        getV(index: number): number;
        uvs: number[];
        rotation: number;
        constructor(uvs: number[] | null, rotation: number);
        set missingUv(value: number[]);
    }
    export class $FaceBakery {
        static recomputeUVs(uv: $BlockFaceUV, facing: $Direction_, rotation: $Transformation): $BlockFaceUV;
        recalculateWinding(vertices: number[], direction: $Direction_): void;
        static calculateFacing(faceData: number[]): $Direction;
        applyModelRotation(pos: $Vector3f, transform: $Transformation): void;
        bakeQuad(posFrom: $Vector3f, posTo: $Vector3f, face: $BlockElementFace_, sprite: $TextureAtlasSprite, facing: $Direction_, transform: $ModelState, rotation: $BlockElementRotation_ | null, shade: boolean): $BakedQuad;
        static VERTEX_INT_SIZE: number;
        static UV_INDEX: number;
        static VERTEX_COUNT: number;
        constructor();
    }
    export class $ItemOverride$Predicate {
        getProperty(): $ResourceLocation;
        getValue(): number;
        constructor(property: $ResourceLocation_, value: number);
        get property(): $ResourceLocation;
        get value(): number;
    }
    export class $BlockModel$GuiLight extends $Enum<$BlockModel$GuiLight> {
        static values(): $BlockModel$GuiLight[];
        static valueOf(name: string): $BlockModel$GuiLight;
        static getByName(name: string): $BlockModel$GuiLight;
        getSerializedName(): string;
        lightLikeBlock(): boolean;
        static SIDE: $BlockModel$GuiLight;
        static FRONT: $BlockModel$GuiLight;
        get serializedName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockModel$GuiLight}.
     */
    export type $BlockModel$GuiLight_ = "front" | "side";
    export class $BakedQuad implements $BakedQuadView, $BakedQuadAccess {
        getFlags(): number;
        getX(arg0: number): number;
        getLight(arg0: number): number;
        getY(arg0: number): number;
        getDirection(): $Direction;
        getVertices(): number[];
        getColor(arg0: number): number;
        hasShade(): boolean;
        isTinted(): boolean;
        getTexV(arg0: number): number;
        getTexU(arg0: number): number;
        hasAmbientOcclusion(): boolean;
        isShade(): boolean;
        getZ(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        getVertexNormal(arg0: number): number;
        getFaceNormal(): number;
        getLightFace(): $Direction;
        getColorIndex(): number;
        getTintIndex(): number;
        getNormalFace(): $ModelQuadFacing;
        hasAO(): boolean;
        hasColor(): boolean;
        getAccurateNormal(arg0: number): number;
        calculateNormal(): number;
        setVertices(arg0: number[]): void;
        tintIndex: number;
        vertices: number[];
        sprite: $TextureAtlasSprite;
        direction: $Direction;
        constructor(vertices: number[], tintIndex: number, direction: $Direction_, sprite: $TextureAtlasSprite, shade: boolean);
        constructor(arg0: number[], arg1: number, arg2: $Direction_, arg3: $TextureAtlasSprite, arg4: boolean, arg5: boolean);
        get flags(): number;
        get tinted(): boolean;
        get shade(): boolean;
        get faceNormal(): number;
        get lightFace(): $Direction;
        get colorIndex(): number;
        get normalFace(): $ModelQuadFacing;
    }
    export class $ItemOverride$Deserializer implements $JsonDeserializer<$ItemOverride> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $ItemOverride;
        getPredicates(json: $JsonObject_): $List<$ItemOverride$Predicate>;
        constructor();
    }
    export class $ItemTransforms {
        getTransform(displayContext: $ItemDisplayContext_): $ItemTransform;
        hasTransform(displayContext: $ItemDisplayContext_): boolean;
        static NO_TRANSFORMS: $ItemTransforms;
        head: $ItemTransform;
        firstPersonLeftHand: $ItemTransform;
        moddedTransforms: $ImmutableMap<$ItemDisplayContext, $ItemTransform>;
        firstPersonRightHand: $ItemTransform;
        thirdPersonRightHand: $ItemTransform;
        thirdPersonLeftHand: $ItemTransform;
        gui: $ItemTransform;
        ground: $ItemTransform;
        fixed: $ItemTransform;
        constructor(arg0: $ItemTransform, arg1: $ItemTransform, arg2: $ItemTransform, arg3: $ItemTransform, arg4: $ItemTransform, arg5: $ItemTransform, arg6: $ItemTransform, arg7: $ItemTransform, arg8: $ImmutableMap<$ItemDisplayContext_, $ItemTransform>);
        /**
         * @deprecated
         */
        constructor(thirdPersonLeftHand: $ItemTransform, thirdPersonRightHand: $ItemTransform, firstPersonLeftHand: $ItemTransform, firstPersonRightHand: $ItemTransform, head: $ItemTransform, gui: $ItemTransform, ground: $ItemTransform, fixed: $ItemTransform);
        constructor(transforms: $ItemTransforms);
    }
    export class $BlockModel$LoopException extends $RuntimeException {
        constructor(message: string);
    }
    export class $ItemOverride {
        /**
         * @return the location of the target model
         */
        getModel(): $ResourceLocation;
        getPredicates(): $Stream<$ItemOverride$Predicate>;
        constructor(model: $ResourceLocation_, predicates: $List_<$ItemOverride$Predicate>);
        get model(): $ResourceLocation;
        get predicates(): $Stream<$ItemOverride$Predicate>;
    }
    export class $BlockModel$Deserializer implements $JsonDeserializer<$BlockModel> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $BlockModel;
        getOverrides(context: $JsonDeserializationContext_, json: $JsonObject_): $List<$ItemOverride>;
        getElements(context: $JsonDeserializationContext_, json: $JsonObject_): $List<$BlockElement>;
        getAmbientOcclusion(json: $JsonObject_): boolean;
        constructor();
    }
    export class $BlockModel implements $UnbakedModel {
        isResolved(): boolean;
        static fromStream(reader: $Reader): $BlockModel;
        static fromString(jsonString: string): $BlockModel;
        getParentLocation(): $ResourceLocation;
        bake(baker: $ModelBaker, model: $BlockModel, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState, guiLight3d: boolean): $BakedModel;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        getOverrides(arg0: $ModelBaker, arg1: $BlockModel, arg2: $Function_<$Material, $TextureAtlasSprite>): $ItemOverrides;
        getOverrides(): $List<$ItemOverride>;
        /**
         * @deprecated
         */
        getElements(): $List<$BlockElement>;
        getDependencies(): $Collection<$ResourceLocation>;
        getMaterial(name: string): $Material;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        getTransforms(): $ItemTransforms;
        hasAmbientOcclusion(): boolean;
        bakeVanilla(baker: $ModelBaker, model: $BlockModel, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState, guiLight3d: boolean): $BakedModel;
        getGuiLight(): $BlockModel$GuiLight;
        getRootModel(): $BlockModel;
        static isTextureReference(textureName: string): boolean;
        static bakeFace(element: $BlockElement, face: $BlockElementFace_, sprite: $TextureAtlasSprite, facing: $Direction_, state: $ModelState): $BakedQuad;
        hasTexture(textureName: string): boolean;
        parent: $BlockModel;
        parentLocation: $ResourceLocation;
        textureMap: $Map<string, $Either<$Material, string>>;
        static PARTICLE_TEXTURE_REFERENCE: string;
        name: string;
        static GSON: $Gson;
        customData: $BlockGeometryBakingContext;
        static FACE_BAKERY: $FaceBakery;
        constructor(parentLocation: $ResourceLocation_ | null, elements: $List_<$BlockElement>, textureMap: $Map_<string, $Either<$Material, string>>, hasAmbientOcclusion: boolean | null, guiLight: $BlockModel$GuiLight_ | null, transforms: $ItemTransforms, overrides: $List_<$ItemOverride>);
        get resolved(): boolean;
        get elements(): $List<$BlockElement>;
        get dependencies(): $Collection<$ResourceLocation>;
        get transforms(): $ItemTransforms;
        get guiLight(): $BlockModel$GuiLight;
        get rootModel(): $BlockModel;
    }
    export class $ItemModelGenerator$SpanFacing extends $Enum<$ItemModelGenerator$SpanFacing> {
    }
    /**
     * Values that may be interpreted as {@link $ItemModelGenerator$SpanFacing}.
     */
    export type $ItemModelGenerator$SpanFacing_ = "up" | "down" | "left" | "right";
    export class $ItemTransform {
        apply(leftHand: boolean, poseStack: $PoseStack): void;
        static NO_TRANSFORM: $ItemTransform;
        rotation: $Vector3f;
        translation: $Vector3f;
        scale: $Vector3f;
        rightRotation: $Vector3f;
        constructor(rotation: $Vector3f, translation: $Vector3f, scale: $Vector3f);
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f, arg3: $Vector3f);
    }
    export class $BlockModelDefinition {
        static fromStream(context: $BlockModelDefinition$Context, reader: $Reader): $BlockModelDefinition;
        getVariant(key: string): $MultiVariant;
        getVariants(): $Map<string, $MultiVariant>;
        getMultiVariants(): $Set<$MultiVariant>;
        getMultiPart(): $MultiPart;
        isMultiPart(): boolean;
        static fromJsonElement(context: $BlockModelDefinition$Context, json: $JsonElement_): $BlockModelDefinition;
        hasVariant(key: string): boolean;
        constructor(variants: $Map_<string, $MultiVariant>, multiPart: $MultiPart);
        constructor(modelDefinitions: $List_<$BlockModelDefinition>);
        get variants(): $Map<string, $MultiVariant>;
        get multiVariants(): $Set<$MultiVariant>;
    }
    export class $ItemModelGenerator {
        processFrames(tintIndex: number, texture: string, sprite: $SpriteContents): $List<$BlockElement>;
        generateBlockModel(spriteGetter: $Function_<$Material, $TextureAtlasSprite>, model: $BlockModel): $BlockModel;
        static LAYERS: $List<string>;
        constructor();
    }
    export class $MultiVariant$Deserializer implements $JsonDeserializer<$MultiVariant> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $MultiVariant;
        constructor();
    }
    export class $BlockElementFace$Deserializer implements $JsonDeserializer<$BlockElementFace> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $BlockElementFace;
        getTintIndex(json: $JsonObject_): number;
        constructor();
    }
    export class $BlockElementFace extends $Record {
        parent(): $MutableObject<$BlockElement>;
        texture(): string;
        tintIndex(): number;
        faceData(): $ExtraFaceData;
        uv(): $BlockFaceUV;
        cullForDirection(): $Direction;
        static NO_TINT: number;
        constructor(cullForDirection: $Direction_ | null, tintIndex: number, texture: string, uv: $BlockFaceUV);
        constructor(cullForDirection: $Direction_ | null, tintIndex: number, texture: string, uv: $BlockFaceUV, faceData: $ExtraFaceData_ | null, parent: $MutableObject<$BlockElement>);
    }
    /**
     * Values that may be interpreted as {@link $BlockElementFace}.
     */
    export type $BlockElementFace_ = { faceData?: $ExtraFaceData_, cullForDirection?: $Direction_, texture?: string, parent?: $MutableObject<$BlockElement>, tintIndex?: number, uv?: $BlockFaceUV,  } | [faceData?: $ExtraFaceData_, cullForDirection?: $Direction_, texture?: string, parent?: $MutableObject<$BlockElement>, tintIndex?: number, uv?: $BlockFaceUV, ];
    export class $ItemModelGenerator$Span {
    }
    export class $MultiVariant implements $UnbakedModel {
        getVariants(): $List<$Variant>;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        getDependencies(): $Collection<$ResourceLocation>;
        resolveParents(resolver: $Function_<any, any>): void;
        constructor(variants: $List_<$Variant>);
        get variants(): $List<$Variant>;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $ItemOverrides$BakedOverride {
        test(properties: number[]): boolean;
        model: $BakedModel;
        constructor(matchers: $ItemOverrides$PropertyMatcher[], model: $BakedModel | null);
    }
    export class $BlockModelDefinition$Deserializer implements $JsonDeserializer<$BlockModelDefinition> {
        getVariants(context: $JsonDeserializationContext_, json: $JsonObject_): $Map<string, $MultiVariant>;
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $BlockModelDefinition;
        getMultiPart(context: $JsonDeserializationContext_, json: $JsonObject_): $MultiPart;
        constructor();
    }
    export class $ItemOverrides$PropertyMatcher {
    }
    export class $ItemOverrides {
        resolve(model: $BakedModel, stack: $ItemStack_, level: $ClientLevel | null, entity: $LivingEntity | null, seed: number): $BakedModel;
        getOverrides(): $ImmutableList<$ItemOverrides$BakedOverride>;
        static NO_OVERRIDE: number;
        static EMPTY: $ItemOverrides;
        constructor(arg0: $ModelBaker, arg1: $UnbakedModel, arg2: $List_<$ItemOverride>, arg3: $Function_<$Material, $TextureAtlasSprite>);
        /**
         * @deprecated
         */
        constructor(baker: $ModelBaker, model: $BlockModel, overrides: $List_<$ItemOverride>);
        constructor();
        get overrides(): $ImmutableList<$ItemOverrides$BakedOverride>;
    }
    export class $BlockModelDefinition$MissingVariantException extends $RuntimeException {
    }
    export class $Variant$Deserializer implements $JsonDeserializer<$Variant> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $Variant;
        getModel(json: $JsonObject_): $ResourceLocation;
        getWeight(json: $JsonObject_): number;
        getBlockRotation(json: $JsonObject_): $BlockModelRotation;
        handler$ini000$ae2$addAdditionalRotationOptions(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_, arg3: $CallbackInfoReturnable<any>): void;
        static DEFAULT_Y_ROTATION: number;
        static DEFAULT_X_ROTATION: number;
        static DEFAULT_UVLOCK: boolean;
        static DEFAULT_WEIGHT: number;
        constructor();
    }
    export class $BlockElementRotation extends $Record {
        origin(): $Vector3f;
        rescale(): boolean;
        axis(): $Direction$Axis;
        angle(): number;
        constructor(arg0: $Vector3f, arg1: $Direction$Axis_, arg2: number, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $BlockElementRotation}.
     */
    export type $BlockElementRotation_ = { origin?: $Vector3f, rescale?: boolean, axis?: $Direction$Axis_, angle?: number,  } | [origin?: $Vector3f, rescale?: boolean, axis?: $Direction$Axis_, angle?: number, ];
    export class $BlockFaceUV$Deserializer implements $JsonDeserializer<$BlockFaceUV> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $BlockFaceUV;
        getRotation(json: $JsonObject_): number;
        constructor();
    }
    export class $ItemTransform$Deserializer implements $JsonDeserializer<$ItemTransform> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $ItemTransform;
        static DEFAULT_SCALE: $Vector3f;
        static MAX_TRANSLATION: number;
        static DEFAULT_ROTATION: $Vector3f;
        static DEFAULT_TRANSLATION: $Vector3f;
        static MAX_SCALE: number;
        constructor();
    }
    export class $BlockModelDefinition$Context {
        getDefinition(): $StateDefinition<$Block, $BlockState>;
        setDefinition(stateContainer: $StateDefinition<$Block, $BlockState_>): void;
        gson: $Gson;
        constructor();
    }
    export class $Variant implements $ModelState {
        getModelLocation(): $ResourceLocation;
        getRotation(): $Transformation;
        getWeight(): number;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        isUvLocked(): boolean;
        /**
         * @return whether this model state may apply a rotation that is not a multiple of 90 degrees
         */
        mayApplyArbitraryRotation(): boolean;
        constructor(modelLocation: $ResourceLocation_, rotation: $Transformation, uvLock: boolean, weight: number);
        get modelLocation(): $ResourceLocation;
        get rotation(): $Transformation;
        get weight(): number;
        get uvLocked(): boolean;
    }
    export class $ItemTransforms$Deserializer implements $JsonDeserializer<$ItemTransforms> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $ItemTransforms;
        constructor();
    }
    export class $BlockElement$Deserializer implements $JsonDeserializer<$BlockElement> {
        deserialize(json: $JsonElement_, type: $Type, context: $JsonDeserializationContext_): $BlockElement;
        constructor();
    }
}
