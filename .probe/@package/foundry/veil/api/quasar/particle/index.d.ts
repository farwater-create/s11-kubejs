import { $Colorc } from "@package/foundry/veil/api/client/color";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $Camera } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $TickTaskScheduler } from "@package/foundry/veil/api";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Trail } from "@package/foundry/veil/api/quasar/fx";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CodeModule_ } from "@package/foundry/veil/api/quasar/data/module";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $QuasarParticleData_, $QuasarParticleData, $ParticleSettings, $ParticleSettings_, $EmitterShapeSettings, $ParticleEmitterData, $EmitterShapeSettings_ } from "@package/foundry/veil/api/quasar/data";
import { $Vector4fc, $Vector3dc, $Vector3d, $Vector3f, $Vector4f, $Vector3fc } from "@package/org/joml";
import { $ForceParticleModule, $ParticleModule, $CollisionParticleModule, $UpdateParticleModule, $InitParticleModule, $RenderParticleModule } from "@package/foundry/veil/api/quasar/emitters/module";

declare module "@package/foundry/veil/api/quasar/particle" {
    export class $RenderStyle {
        static CODEC: $Codec<$RenderStyle>;
    }
    export interface $RenderStyle {
        clear(): void;
        setup(arg0: number): boolean;
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        render(arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number): void;
        set up(value: number);
    }
    /**
     * Values that may be interpreted as {@link $RenderStyle}.
     */
    export type $RenderStyle_ = ((arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number) => void);
    export class $RenderData {
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: $Vector4fc): void;
        setColor(arg0: $Colorc): void;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        setAlpha(arg0: number): void;
        getRenderType(): $RenderType;
        isAdditive(): boolean;
        setAdditive(arg0: boolean): void;
        getPackedLight(): number;
        getRenderRotation(): $Vector3fc;
        getRenderRadius(): number;
        getRenderAge(): number;
        getAgePercent(): number;
        render(arg0: $QuasarParticle, arg1: number): void;
        setFixedPackedLight(arg0: number): void;
        tick(arg0: $QuasarParticle, arg1: number): void;
        getAlpha(): number;
        getBlue(): number;
        getGreen(): number;
        getRenderPosition(): $Vector3dc;
        getTrails(): $List<$Trail>;
        setBlue(arg0: number): void;
        setRed(arg0: number): void;
        setGreen(arg0: number): void;
        getRed(): number;
        getSpriteData(): $SpriteData;
        getAtlasSprite(): $TextureAtlasSprite;
        markDirty(): void;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        getFixedPackedLight(): number;
        setSpriteData(arg0: $SpriteData_): void;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get renderType(): $RenderType;
        get packedLight(): number;
        get renderRotation(): $Vector3fc;
        get renderRadius(): number;
        get renderPosition(): $Vector3dc;
        get trails(): $List<$Trail>;
    }
    export class $ParticleModuleSet {
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        getAllModules(): $ParticleModule[];
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getCollisionModules(): $CollisionParticleModule[];
        getRenderModules(): $RenderParticleModule[];
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        getEnabledRenderModuleCount(): number;
        getInitModules(): $InitParticleModule[];
        getUpdateModules(): $UpdateParticleModule[];
        getForceModules(): $ForceParticleModule[];
        updateEnabled(): void;
        get allModules(): $ParticleModule[];
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get collisionModules(): $CollisionParticleModule[];
        get renderModules(): $RenderParticleModule[];
        get enabledRenderModulesArray(): $RenderParticleModule[];
        get enabledRenderModuleCount(): number;
        get initModules(): $InitParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get forceModules(): $ForceParticleModule[];
    }
    export class $ParticleModuleSet$Builder {
        build(): $ParticleModuleSet;
        addModule(arg0: $ParticleModule): void;
        constructor();
    }
    export class $QuasarParticle {
        remove(): void;
        init(): void;
        getData(): $QuasarParticleData;
        getPosition(): $Vector3d;
        getLevel(): $ClientLevel;
        getBlockPosition(): $BlockPos;
        getEnvironment(): $MolangEnvironment;
        getRotation(): $Vector3f;
        getSettings(): $ParticleSettings;
        render(arg0: number): void;
        getScheduler(): $TickTaskScheduler;
        getAge(): number;
        getModules(): $ParticleModuleSet;
        tick(): void;
        onRemove(): void;
        getBoundingBox(): $AABB;
        getVelocity(): $Vector3d;
        getRandomSource(): $RandomSource;
        isRemoved(): boolean;
        getLifetime(): number;
        getEmitter(): $ParticleEmitter;
        getRadius(): number;
        setRadius(arg0: number): void;
        getBlockStateInOrUnder(): $BlockState;
        getRenderData(): $RenderData;
        setAge(arg0: number): void;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get data(): $QuasarParticleData;
        get position(): $Vector3d;
        get level(): $ClientLevel;
        get blockPosition(): $BlockPos;
        get environment(): $MolangEnvironment;
        get rotation(): $Vector3f;
        get settings(): $ParticleSettings;
        get scheduler(): $TickTaskScheduler;
        get modules(): $ParticleModuleSet;
        get boundingBox(): $AABB;
        get velocity(): $Vector3d;
        get randomSource(): $RandomSource;
        get removed(): boolean;
        get lifetime(): number;
        get emitter(): $ParticleEmitter;
        get blockStateInOrUnder(): $BlockState;
        get renderData(): $RenderData;
    }
    export class $ParticleEmitter {
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        getPosition(): $Vector3d;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        setPosition(arg0: $Vec3_): void;
        getRegistryName(): $ResourceLocation;
        static clearErrors(): void;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        getParticleSettings(): $ParticleSettings;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        setParticleSettings(arg0: $ParticleSettings_): void;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        setCount(arg0: number): void;
        isRemoved(): boolean;
        setRate(arg0: number): void;
        getRate(): number;
        setLoop(arg0: boolean): void;
        getParticleCount(): number;
        addCodeModule(arg0: $CodeModule_): void;
        getMaxLifetime(): number;
        getMaxParticles(): number;
        isForceSpawn(): boolean;
        getAttachedEntity(): $Entity;
        setMaxLifetime(arg0: number): void;
        setForceSpawn(arg0: boolean): void;
        setAttachedEntity(arg0: $Entity): void;
        setMaxParticles(arg0: number): void;
        getParticleData(): $QuasarParticleData;
        setParticleData(arg0: $QuasarParticleData_): void;
        get data(): $ParticleEmitterData;
        get registryName(): $ResourceLocation;
        get removed(): boolean;
        get particleCount(): number;
    }
    export class $SpriteData extends $Record {
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        frameHeight(): number;
        frameWidth(): number;
        frameCount(): number;
        frameTime(): number;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        stretchToLifetime(): boolean;
        sprite(): $ResourceLocation;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { sprite?: $ResourceLocation_, frameTime?: number, frameHeight?: number, frameCount?: number, stretchToLifetime?: boolean, frameWidth?: number,  } | [sprite?: $ResourceLocation_, frameTime?: number, frameHeight?: number, frameCount?: number, stretchToLifetime?: boolean, frameWidth?: number, ];
}
