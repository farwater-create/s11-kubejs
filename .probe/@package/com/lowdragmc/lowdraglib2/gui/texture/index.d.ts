import { $File_ } from "@package/java/io";
import { $LDLRegisterClient } from "@package/com/lowdragmc/lowdraglib2/registry/annotation";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $GUIContext } from "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $AutoRegistry$Holder, $AutoRegistry$LDLibRegisterClient, $ILDLRegisterClient } from "@package/com/lowdragmc/lowdraglib2/registry";
import { $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $Transform2D } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $Position, $Size } from "@package/com/lowdragmc/lowdraglib2/math";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $IPersistedSerializable } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LDShaderHolder } from "@package/com/lowdragmc/lowdraglib2/client/shader";
import { $Color } from "@package/java/awt";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $AutoCloseable } from "@package/java/lang";
import { $IResourcePath } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $Vector4f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/gui/texture" {
    export class $UIResourceTexture extends $TransformTexture {
        getResourcePath(): $IResourcePath;
        getInternalTexture(): $IGuiTexture;
        constructor(arg0: $IResourcePath);
        constructor();
        get resourcePath(): $IResourcePath;
        get internalTexture(): $IGuiTexture;
    }
    export class $RectTexture extends $TransformTexture {
        static of(arg0: number): $RectTexture;
        copy(): $RectTexture;
        setColor(arg0: number): $RectTexture;
        getColor(): number;
        getCornerSegments(): number;
        setCornerSegments(arg0: number): $RectTexture;
        getStroke(): number;
        setStroke(arg0: number): $RectTexture;
        getRadius(): $Vector4f;
        setRadius(arg0: $Vector4f): $RectTexture;
        setBorderColor(arg0: number): $RectTexture;
        getBorderColor(): number;
        constructor();
    }
    export class $DynamicTexture implements $IGuiTexture {
        static of(arg0: $Supplier_<$IGuiTexture>): $DynamicTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        copy(): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        writeToBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        beforeDeserialize(): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        createHistoryRecorder(): $IConfigurableHistory;
        name(): string;
        group(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        getTranslateKey(): string;
        getChatComponent(): $Component;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        registryName(): $ResourceLocation;
        textureSupplier: $Supplier<$IGuiTexture>;
        constructor(arg0: $Supplier_<$IGuiTexture>);
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get translateKey(): string;
        get chatComponent(): $Component;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get registerUIClient(): $LDLRegisterClient;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
    }
    export class $SpriteTexture$WrapMode extends $Enum<$SpriteTexture$WrapMode> {
        static values(): $SpriteTexture$WrapMode[];
        static valueOf(arg0: string): $SpriteTexture$WrapMode;
        static REPEAT: $SpriteTexture$WrapMode;
        static CLAMP: $SpriteTexture$WrapMode;
        static MIRRORED_REPEAT: $SpriteTexture$WrapMode;
    }
    /**
     * Values that may be interpreted as {@link $SpriteTexture$WrapMode}.
     */
    export type $SpriteTexture$WrapMode_ = "clamp" | "repeat" | "mirrored_repeat";
    export class $ItemStackTexture extends $TransformTexture {
        copy(): $ItemStackTexture;
        setColor(arg0: number): $ItemStackTexture;
        setItems(...arg0: $ItemStack_[]): $ItemStackTexture;
        updateTick(): void;
        items: $ItemStack[];
        constructor(...arg0: $Item[]);
        constructor(...arg0: $ItemStack_[]);
        constructor();
        set color(value: number);
    }
    export class $TextTexture extends $TransformTexture {
        copy(): $TextTexture;
        setColor(arg0: number): $TextTexture;
        setType(arg0: $TextTexture$TextType_): $TextTexture;
        getLines(): number;
        setRollSpeed(arg0: number): void;
        setDropShadow(arg0: boolean): $TextTexture;
        updateText(arg0: string): void;
        setBackgroundColor(arg0: number): $TextTexture;
        setSupplier(arg0: $Supplier_<string>): $TextTexture;
        setWidth(arg0: number): $TextTexture;
        updateTick(): void;
        dropShadow: boolean;
        backgroundColor: number;
        color: number;
        rollSpeed: number;
        supplier: $Supplier<string>;
        width: number;
        text: string;
        type: $TextTexture$TextType;
        constructor(arg0: $Supplier_<string>);
        constructor(arg0: string);
        constructor(arg0: string, arg1: number);
        constructor();
        get lines(): number;
    }
    export class $ColorBorderTexture extends $TransformTexture {
        copy(): $ColorBorderTexture;
        setColor(arg0: number): $ColorBorderTexture;
        setBorder(arg0: number): $ColorBorderTexture;
        border: number;
        color: number;
        constructor(arg0: number, arg1: $Color);
        constructor(arg0: number, arg1: number);
        constructor();
    }
    export class $IGuiTexture$EmptyTexture implements $IGuiTexture {
        copy(): $IGuiTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        writeToBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        beforeDeserialize(): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        createHistoryRecorder(): $IConfigurableHistory;
        name(): string;
        group(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        getTranslateKey(): string;
        getChatComponent(): $Component;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        registryName(): $ResourceLocation;
        constructor();
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get translateKey(): string;
        get chatComponent(): $Component;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get registerUIClient(): $LDLRegisterClient;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
    }
    export class $GuiTextureGroup extends $TransformTexture {
        static of(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        copy(): $GuiTextureGroup;
        setColor(arg0: number): $GuiTextureGroup;
        setTextures(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        getTextures(): $IGuiTexture[];
        constructor();
        constructor(...arg0: $IGuiTexture_[]);
        set color(value: number);
    }
    export class $ITextureSize {
    }
    export interface $ITextureSize {
        getWidth(): number;
        getHeight(): number;
        ldlib2$getImageHeight(): number;
        ldlib2$getImageWidth(): number;
        get width(): number;
        get height(): number;
    }
    export class $IGuiTexture {
        static group(...arg0: $IGuiTexture_[]): $GuiTextureGroup;
        static dynamic(arg0: $Supplier_<$IGuiTexture>): $DynamicTexture;
        static getTextureFromFile(arg0: $File_): $ResourceLocation;
        static createCodec(): $Codec<$IGuiTexture>;
        static CODEC: $Codec<$IGuiTexture>;
        static EMPTY: $IGuiTexture$EmptyTexture;
        static MISSING_TEXTURE: $IGuiTexture$MissingTexture;
    }
    export interface $IGuiTexture extends $IPersistedSerializable, $IConfigurable, $ILDLRegisterClient<$IGuiTexture, $Supplier<$IGuiTexture>> {
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        copy(): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        set color(value: number);
        get rawTexture(): $IGuiTexture;
    }
    /**
     * Values that may be interpreted as {@link $IGuiTexture}.
     */
    export type $IGuiTexture_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => void);
    export class $SpriteTexture extends $TransformTexture {
        copy(): $SpriteTexture;
        setColor(arg0: number): $SpriteTexture;
        setBorder(arg0: number): $SpriteTexture;
        setBorder(arg0: number, arg1: number, arg2: number, arg3: number): $SpriteTexture;
        setBorderLT(arg0: $Position): $SpriteTexture;
        setSpriteSize(arg0: $Size): $SpriteTexture;
        setImageLocation(arg0: $ResourceLocation_): $SpriteTexture;
        setWrapMode(arg0: $SpriteTexture$WrapMode_): $SpriteTexture;
        getImageLocation(): $ResourceLocation;
        setSpritePosition(arg0: $Position): $SpriteTexture;
        setBorderRB(arg0: $Position): $SpriteTexture;
        static of(arg0: $ResourceLocation_): $SpriteTexture;
        setSprite(arg0: number, arg1: number, arg2: number, arg3: number): $SpriteTexture;
        getImageSize(): $Size;
        borderLT: $Position;
        color: number;
        wrapMode: $SpriteTexture$WrapMode;
        borderRB: $Position;
        spriteSize: $Size;
        spritePosition: $Position;
        constructor();
        get imageSize(): $Size;
    }
    export class $SDFRectTexture extends $TransformTexture {
        static of(arg0: number): $SDFRectTexture;
        copy(): $SDFRectTexture;
        setColor(arg0: number): $SDFRectTexture;
        getColor(): number;
        getStroke(): number;
        setStroke(arg0: number): $SDFRectTexture;
        getRadius(): $Vector4f;
        setRadius(arg0: number): $SDFRectTexture;
        setRadius(arg0: $Vector4f): $SDFRectTexture;
        setBorderColor(arg0: number): $SDFRectTexture;
        getBorderColor(): number;
        constructor();
    }
    export class $AnimationTexture extends $TransformTexture {
        copy(): $AnimationTexture;
        setColor(arg0: number): $AnimationTexture;
        getFrom(): number;
        getTo(): number;
        getColor(): number;
        setTexture(arg0: string): $AnimationTexture;
        setAnimation(arg0: number, arg1: number): $AnimationTexture;
        setAnimation(arg0: number): $AnimationTexture;
        setCellSize(arg0: number): $AnimationTexture;
        getCellSize(): number;
        getAnimation(): number;
        updateTick(): void;
        imageLocation: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
        constructor(arg0: string);
        constructor();
        get from(): number;
        get to(): number;
        set texture(value: string);
    }
    export class $TextTexture$TextType extends $Enum<$TextTexture$TextType> {
        static values(): $TextTexture$TextType[];
        static valueOf(arg0: string): $TextTexture$TextType;
        static LEFT_ROLL_ALWAYS: $TextTexture$TextType;
        static HIDE: $TextTexture$TextType;
        static LEFT_HIDE: $TextTexture$TextType;
        static LEFT: $TextTexture$TextType;
        static ROLL_ALWAYS: $TextTexture$TextType;
        static RIGHT: $TextTexture$TextType;
        static ROLL: $TextTexture$TextType;
        static LEFT_ROLL: $TextTexture$TextType;
        static NORMAL: $TextTexture$TextType;
    }
    /**
     * Values that may be interpreted as {@link $TextTexture$TextType}.
     */
    export type $TextTexture$TextType_ = "normal" | "hide" | "roll" | "roll_always" | "left" | "right" | "left_hide" | "left_roll" | "left_roll_always";
    export class $ColorRectTexture extends $TransformTexture {
        copy(): $ColorRectTexture;
        setColor(arg0: number): $ColorRectTexture;
        color: number;
        constructor(arg0: $Color);
        constructor(arg0: number);
        constructor();
    }
    export class $TransformTexture implements $IGuiTexture {
        scale(arg0: number, arg1: number): $TransformTexture;
        scale(arg0: number): $TransformTexture;
        transform(arg0: number, arg1: number): $TransformTexture;
        rotate(arg0: number): $TransformTexture;
        beforeDeserialize(): void;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getTransform2D(): $Transform2D;
        copyTransform(arg0: $TransformTexture): void;
        copyTransform(arg0: $Transform2D): void;
        transform(arg0: number, arg1: number): $IGuiTexture;
        copy(): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        writeToBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        createHistoryRecorder(): $IConfigurableHistory;
        name(): string;
        group(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        getTranslateKey(): string;
        getChatComponent(): $Component;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        registryName(): $ResourceLocation;
        constructor();
        get transform2D(): $Transform2D;
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get translateKey(): string;
        get chatComponent(): $Component;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get registerUIClient(): $LDLRegisterClient;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
    }
    export class $ShaderTexture extends $TransformTexture implements $AutoCloseable {
        close(): void;
        setColor(arg0: number): $ShaderTexture;
        getColor(): number;
        getShaderFromFile(arg0: $File_): $ResourceLocation;
        getShaderLocation(): $ResourceLocation;
        getShaderHolder(): $LDShaderHolder;
        setShader(arg0: $ResourceLocation_): $ShaderTexture;
        constructor();
        constructor(arg0: $ResourceLocation_);
        get shaderLocation(): $ResourceLocation;
        get shaderHolder(): $LDShaderHolder;
        set shader(value: $ResourceLocation_);
    }
    export class $IGuiTexture$MissingTexture implements $IGuiTexture {
        copy(): $IGuiTexture;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        scale(arg0: number): $IGuiTexture;
        transform(arg0: number, arg1: number): $IGuiTexture;
        rotate(arg0: number): $IGuiTexture;
        setColor(arg0: number): $IGuiTexture;
        createPreview(arg0: $ConfiguratorGroup): void;
        getRawTexture(): $IGuiTexture;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        interpolate(arg0: $IGuiTexture_, arg1: number): $IGuiTexture;
        draw(arg0: $GUIContext, arg1: number, arg2: number, arg3: number, arg4: number): void;
        writeToBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        beforeDeserialize(): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        createHistoryRecorder(): $IConfigurableHistory;
        name(): string;
        group(): string;
        isLDLRegister(): boolean;
        getRegistryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        getTranslateKey(): string;
        getChatComponent(): $Component;
        getRegistryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        getRegisterUIClient(): $LDLRegisterClient;
        getRegistry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
        registryName(): $ResourceLocation;
        constructor();
        set color(value: number);
        get rawTexture(): $IGuiTexture;
        get configurableName(): string;
        get LDLRegister(): boolean;
        get registryHolder(): $AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>;
        get translateKey(): string;
        get chatComponent(): $Component;
        get registryHolderOptional(): ($AutoRegistry$Holder<$LDLRegisterClient, $CompoundTag, $Supplier<$IGuiTexture>>) | undefined;
        get registerUIClient(): $LDLRegisterClient;
        get registry(): $AutoRegistry$LDLibRegisterClient<$CompoundTag, $Supplier<$IGuiTexture>>;
    }
    export class $FluidStackTexture extends $TransformTexture {
        copy(): $FluidStackTexture;
        setColor(arg0: number): $FluidStackTexture;
        setFluids(...arg0: $FluidStack_[]): $FluidStackTexture;
        updateTick(): void;
        fluids: $FluidStack[];
        constructor(...arg0: $Fluid[]);
        constructor(...arg0: $FluidStack_[]);
        constructor();
        set color(value: number);
    }
    export class $VanillaSpriteTexture extends $TransformTexture {
        copy(): $VanillaSpriteTexture;
        setColor(arg0: number): $VanillaSpriteTexture;
        getColor(): number;
        static of(arg0: $ResourceLocation_): $VanillaSpriteTexture;
        setSprite(arg0: $ResourceLocation_): $VanillaSpriteTexture;
        getSprite(): $ResourceLocation;
        constructor();
        constructor(arg0: $ResourceLocation_);
    }
}
