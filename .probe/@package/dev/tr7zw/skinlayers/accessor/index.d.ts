import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $OffsetProvider, $OffsetProvider_, $SkullData, $Mesh, $PlayerData } from "@package/dev/tr7zw/skinlayers/api";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";

declare module "@package/dev/tr7zw/skinlayers/accessor" {
    export class $NativeImageAccessor {
    }
    export interface $NativeImageAccessor {
        skinlayers$isAllocated(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NativeImageAccessor}.
     */
    export type $NativeImageAccessor_ = (() => boolean);
    export class $SkullModelAccessor {
    }
    export interface $SkullModelAccessor {
        injectHatMesh(arg0: $Mesh): void;
    }
    /**
     * Values that may be interpreted as {@link $SkullModelAccessor}.
     */
    export type $SkullModelAccessor_ = ((arg0: $Mesh) => void);
    export class $HttpTextureAccessor {
    }
    export interface $HttpTextureAccessor {
        getImage(): $NativeImage;
        get image(): $NativeImage;
    }
    /**
     * Values that may be interpreted as {@link $HttpTextureAccessor}.
     */
    export type $HttpTextureAccessor_ = (() => $NativeImage);
    export class $PlayerSettings {
    }
    export interface $PlayerSettings extends $PlayerData {
        hasThinArms(): boolean;
        setTorsoMesh(arg0: $Mesh): void;
        setRightLegMesh(arg0: $Mesh): void;
        setThinArms(arg0: boolean): void;
        setLeftArmMesh(arg0: $Mesh): void;
        setRightArmMesh(arg0: $Mesh): void;
        setCurrentSkin(arg0: $ResourceLocation_): void;
        setLeftLegMesh(arg0: $Mesh): void;
        setHeadMesh(arg0: $Mesh): void;
        getCurrentSkin(): $ResourceLocation;
        clearMeshes(): void;
        set torsoMesh(value: $Mesh);
        set rightLegMesh(value: $Mesh);
        set thinArms(value: boolean);
        set leftArmMesh(value: $Mesh);
        set rightArmMesh(value: $Mesh);
        set leftLegMesh(value: $Mesh);
        set headMesh(value: $Mesh);
    }
    export class $ModelPartInjector {
    }
    export interface $ModelPartInjector {
        isVisible(): boolean;
        getOffsetProvider(): $OffsetProvider;
        getInjectedMesh(): $Mesh;
        setInjectedMesh(arg0: $Mesh, arg1: $OffsetProvider_): void;
        prepareTranslateAndRotate(arg0: $PoseStack): void;
        get visible(): boolean;
        get offsetProvider(): $OffsetProvider;
    }
    export class $PlayerEntityModelAccessor {
    }
    export interface $PlayerEntityModelAccessor {
        hasThinArms(): boolean;
        setIgnored(arg0: boolean): void;
        set ignored(value: boolean);
    }
    export class $SkullSettings {
    }
    export interface $SkullSettings extends $SkullData {
        initialized(): boolean;
        setInitialized(arg0: boolean): void;
        getMesh(): $Mesh;
        setLastTexture(arg0: $ResourceLocation_): void;
        getLastTexture(): $ResourceLocation;
        setupHeadLayers(arg0: $Mesh): void;
        getHeadLayers(): $Mesh;
        get mesh(): $Mesh;
        set upHeadLayers(value: $Mesh);
        get headLayers(): $Mesh;
    }
}
