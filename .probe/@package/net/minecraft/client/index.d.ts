import { $WorldStem_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $GameRenderer, $RenderBuffers, $GpuWarnlistManager } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MinecraftExt } from "@package/com/moulberry/axiom/hooks";
import { $Entity, $HumanoidArm } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimplePreparableReloadListener, $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $KeyBindingAccessor as $KeyBindingAccessor$1 } from "@package/net/fabricmc/fabric/mixin/event/interaction/client";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CameraZoomExtension } from "@package/dev/ryanhcode/sable/mixinterface/camera/camera_zoom";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $TimerAccessor as $TimerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $HeadRenderable } from "@package/dzwdz/chat_heads/mixininterface";
import { $MinecraftAccessor, $MouseHandlerAccessor as $MouseHandlerAccessor$2 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $ISimpleOption } from "@package/com/ishland/c2me/client/uncapvd/mixin";
import { $MessageSignature_, $Component_, $MessageSignature, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ChatListener } from "@package/net/minecraft/client/multiplayer/chat";
import { $RecipeBookCategoriesAccessor } from "@package/org/sinytra/connector/mod/mixin/recipebook";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DownloadedPackSource } from "@package/net/minecraft/client/resources/server";
import { $FloatUnaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $SkinManager, $MapDecorationTextureManager, $PaintingTextureManager, $SplashManager, $MobEffectTextureManager } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $IWorldMapMinecraftClient } from "@package/xaero/map/core";
import { $GameConfig$QuickPlayData, $SilentInitException, $GameConfig$QuickPlayData_, $GameConfig } from "@package/net/minecraft/client/main";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $KeyBindingAccessor } from "@package/net/fabricmc/fabric/mixin/client/keybinding";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $TimerAccessor, $MinecraftAccessor as $MinecraftAccessor$1, $MouseHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RealmsDataFetcher } from "@package/com/mojang/realmsclient/gui";
import { $UUID_, $Map, $TimerTask, $List, $Map_, $List_, $Collection, $Locale, $Set, $UUID } from "@package/java/util";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $AccessorMinecraft } from "@package/net/darkhax/bookshelf/common/mixin/access/client";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $FontManager } from "@package/net/minecraft/client/gui/font";
import { $Throwable, $Runnable, $Enum, $Comparable, $Iterable_, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $HeadData_, $HeadData } from "@package/dzwdz/chat_heads";
import { $File_, $File } from "@package/java/io";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $FogType } from "@package/net/minecraft/world/level/material";
import { $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $WidgetTooltipHolder, $CycleButton$ValueListSupplier, $DebugScreenOverlay, $Tooltip, $AbstractWidget, $AbstractOptionSliderButton } from "@package/net/minecraft/client/gui/components";
import { $Hotbar } from "@package/net/minecraft/client/player/inventory";
import { $StringSplitterAccessor, $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "@package/team/creative/creativecore/mixin";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $Narrator } from "@package/com/mojang/text2speech";
import { $IXaeroMinimapMinecraftClient } from "@package/xaero/common/core";
import { $CameraWaterOcclusionExtension } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $Screen, $Overlay, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $MinecraftClientAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MinecraftAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $KeyMappingsAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $ByteBuffer } from "@package/java/nio";
import { $OptionInstanceAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $OptionEnum, $FormattedCharSequence_, $StringRepresentable, $FormattedCharSink, $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $ClientLevel, $ServerData, $ProfileKeyPairManager, $MultiPlayerGameMode, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $WorldOpenFlows } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $CrashReport } from "@package/net/minecraft";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $SoundManager, $MusicManager } from "@package/net/minecraft/client/sounds";
import { $Tutorial, $TutorialSteps } from "@package/net/minecraft/client/tutorial";
import { $IMinecraftExtension, $IKeyMappingExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $PackResources, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $ReportEnvironment_, $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $PlayerModelPart_, $Inventory, $ChatVisiblity } from "@package/net/minecraft/world/entity/player";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $KeyMappingInvoker } from "@package/dev/simulated_team/simulated/mixin/hold_interaction";
import { $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $MinecraftClientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService, $BanDetails } from "@package/com/mojang/authlib/minecraft";
import { $AccessKeyMapping } from "@package/com/blamejared/controlling/mixin";
import { $Gson } from "@package/com/google/gson";
import { $DebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $Function, $BiConsumer_, $DoubleFunction_, $BooleanSupplier_, $Supplier, $Consumer_, $IntSupplier_, $ToDoubleFunction_, $IntSupplier, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $Object2BooleanFunction_ } from "@package/it/unimi/dsi/fastutil/objects";
import { $ClientInformation } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CameraAccessor } from "@package/dev/kosmx/playerAnim/mixin/firstPerson";
import { $WindowEventHandler, $InputConstants$Type_, $InputConstants$Key, $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $QuickPlayLog } from "@package/net/minecraft/client/quickplay";
import { $GuiGraphics, $Gui, $Font, $GuiSpriteManager } from "@package/net/minecraft/client/gui";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";
export * as resources from "@package/net/minecraft/client/resources";
export * as renderer from "@package/net/minecraft/client/renderer";
export * as gui from "@package/net/minecraft/client/gui";
export * as particle from "@package/net/minecraft/client/particle";
export * as telemetry from "@package/net/minecraft/client/telemetry";
export * as model from "@package/net/minecraft/client/model";
export * as sounds from "@package/net/minecraft/client/sounds";
export * as animation from "@package/net/minecraft/client/animation";
export * as color from "@package/net/minecraft/client/color";
export * as multiplayer from "@package/net/minecraft/client/multiplayer";
export * as tutorial from "@package/net/minecraft/client/tutorial";
export * as searchtree from "@package/net/minecraft/client/searchtree";
export * as quickplay from "@package/net/minecraft/client/quickplay";
export * as main from "@package/net/minecraft/client/main";
export * as player from "@package/net/minecraft/client/player";
export * as server from "@package/net/minecraft/client/server";
export * as profiling from "@package/net/minecraft/client/profiling";

declare module "@package/net/minecraft/client" {
    export class $MouseHandler implements $MouseHandlerAccessor$2, $MouseHandlerAccessor, $MouseHandlerAccessor$1 {
        setup(windowPointer: number): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isLeftPressed(): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMiddlePressed(): boolean;
        getYVelocity(): number;
        getXVelocity(): number;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        handleAccumulatedMovement(): void;
        wrapWithCondition$bjn000$supplementaries$supp$onMoveMouse(arg0: $LocalPlayer, arg1: number, arg2: number): boolean;
        ypos(): number;
        xpos(): number;
        handler$bjn000$supplementaries$supp$onMoveMouse(arg0: $CallbackInfo): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        releaseMouse(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        setIgnoreFirstMove(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        cursorEntered(): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMouseGrabbed(): boolean;
        handler$jjf000$axiom$isMouseGrabbed(cir: $CallbackInfoReturnable<any>): void;
        wrapWithCondition$bnh000$vista$onMoveMouse(arg0: $LocalPlayer, arg1: number, arg2: number): boolean;
        handler$jjf000$axiom$releaseMouse(ci: $CallbackInfo): void;
        handler$jjf000$axiom$onTurnPlayer(ci: $CallbackInfo): void;
        handler$jjf000$axiom$grabMouse(ci: $CallbackInfo): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        grabMouse(): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isRightPressed(): boolean;
        create$setXPos(movementTime: number): void;
        getActiveButton(): number;
        create$setYPos(movementTime: number): void;
        getLastHandleMovementTime(): number;
        constructor(minecraft: $Minecraft);
        set up(value: number);
        get leftPressed(): boolean;
        get middlePressed(): boolean;
        get YVelocity(): number;
        get XVelocity(): number;
        get mouseGrabbed(): boolean;
        get rightPressed(): boolean;
        get activeButton(): number;
        get lastHandleMovementTime(): number;
    }
    export class $User {
        getName(): string;
        getType(): $User$Type;
        getClientId(): (string) | undefined;
        getXuid(): (string) | undefined;
        getProfileId(): $UUID;
        getSessionId(): string;
        getAccessToken(): string;
        constructor(name: string, uuid: $UUID_, accessToken: string, xuid: (string) | undefined, clientId: (string) | undefined, type: $User$Type_);
        get name(): string;
        get type(): $User$Type;
        get clientId(): (string) | undefined;
        get xuid(): (string) | undefined;
        get profileId(): $UUID;
        get sessionId(): string;
        get accessToken(): string;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        getCollections(): $List<$RecipeCollection>;
        setupCollections(recipes: $Iterable_<$RecipeHolder<never>>, registryAccess: $RegistryAccess): void;
        getCollection(categories: $RecipeBookCategories_): $List<$RecipeCollection>;
        highlight: $Set<$ResourceLocation>;
        known: $Set<$ResourceLocation>;
        constructor();
        get collections(): $List<$RecipeCollection>;
    }
    export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum, $StringRepresentable {
        static values(): $CloudStatus[];
        static valueOf(arg0: string): $CloudStatus;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static FANCY: $CloudStatus;
        static CODEC: $Codec<$CloudStatus>;
        static FAST: $CloudStatus;
        static OFF: $CloudStatus;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CloudStatus}.
     */
    export type $CloudStatus_ = "false" | "fast" | "true";
    export class $OptionInstance$OptionInstanceSliderButton<N> extends $AbstractOptionSliderButton {
        applyUnsavedValue(): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        options: $Options;
        width: number;
        x: number;
        y: number;
        value: number;
        height: number;
        constructor(options: $Options, x: number, y: number, width: number, height: number, instance: $OptionInstance<N>, values: $OptionInstance$SliderableValueSet<N>, tooltipSupplier: $OptionInstance$TooltipSupplier_<N>, onValueChanged: $Consumer_<N>, applyValueImmediately: boolean);
    }
    export class $HotbarManager {
        get(index: number): $Hotbar;
        save(): void;
        static NUM_HOTBAR_GROUPS: number;
        constructor(gameDirectory: $Path_, fixerUpper: $DataFixer);
    }
    export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
        static values(): $GraphicsStatus[];
        static valueOf(arg0: string): $GraphicsStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $GraphicsStatus;
        getCaption(): $Component;
        static FANCY: $GraphicsStatus;
        static FABULOUS: $GraphicsStatus;
        static FAST: $GraphicsStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsStatus}.
     */
    export type $GraphicsStatus_ = "fast" | "fancy" | "fabulous";
    export class $InputType extends $Enum<$InputType> {
        static values(): $InputType[];
        static valueOf(arg0: string): $InputType;
        isKeyboard(): boolean;
        isMouse(): boolean;
        static MOUSE: $InputType;
        static KEYBOARD_TAB: $InputType;
        static NONE: $InputType;
        static KEYBOARD_ARROW: $InputType;
        get keyboard(): boolean;
        get mouse(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InputType}.
     */
    export type $InputType_ = "none" | "mouse" | "keyboard_arrow" | "keyboard_tab";
    export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
        static values(): $AttackIndicatorStatus[];
        static valueOf(arg0: string): $AttackIndicatorStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $AttackIndicatorStatus;
        getCaption(): $Component;
        static CROSSHAIR: $AttackIndicatorStatus;
        static HOTBAR: $AttackIndicatorStatus;
        static OFF: $AttackIndicatorStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AttackIndicatorStatus}.
     */
    export type $AttackIndicatorStatus_ = "off" | "crosshair" | "hotbar";
    export class $OptionInstance$LazyEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $Supplier<$List<T>>;
        validateValue(): $Function<T, (T) | undefined>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $Supplier_<$List<T>>, arg1: $Function_<T, (T) | undefined>, arg2: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$LazyEnum}.
     */
    export type $OptionInstance$LazyEnum_<T> = { values?: $Supplier_<$List<any>>, codec?: $Codec<any>, validateValue?: $Function_<any, (T) | undefined>,  } | [values?: $Supplier_<$List<any>>, codec?: $Codec<any>, validateValue?: $Function_<any, (T) | undefined>, ];
    export class $PeriodicNotificationManager$Notification extends $Record {
        message(): string;
        delay(): number;
        period(): number;
        title(): string;
        constructor(delay: number, arg1: number, period: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $PeriodicNotificationManager$Notification}.
     */
    export type $PeriodicNotificationManager$Notification_ = { message?: string, title?: string, period?: number, delay?: number,  } | [message?: string, title?: string, period?: number, delay?: number, ];
    export class $StringSplitter$WidthLimitedCharSink implements $FormattedCharSink {
    }
    export class $GameNarrator$NarratorInitException extends $SilentInitException {
        constructor(arg0: string);
    }
    export class $DeltaTracker {
        static ZERO: $DeltaTracker;
        static ONE: $DeltaTracker;
    }
    export interface $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
    }
    export class $Screenshot {
        close(): $File;
        /**
         * Saves a screenshot in the game directory with a time-stamped filename.
         */
        static grab(gameDirectory: $File_, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        static grab(gameDirectory: $File_, screenshotName: string | null, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        saveRow(): void;
        addRegion(buffer: $ByteBuffer, width: number, height: number, rowWidth: number, rowHeight: number): void;
        static takeScreenshot(framebuffer: $RenderTarget): $NativeImage;
        static SCREENSHOT_DIR: string;
        constructor(gameDirectory: $File_, width: number, height: number, rowHeight: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
    }
    export class $Options {
        load(arg0: boolean): void;
        /**
         * Send a client info packet with settings information to the server
         */
        load(): void;
        /**
         * Send a client info packet with settings information to the server
         */
        save(): void;
        getFile(): $File;
        static isTrue(value: string): boolean;
        getCloudsType(): $CloudStatus;
        chatLinksPrompt(): $OptionInstance<boolean>;
        hideSplashTexts(): $OptionInstance<boolean>;
        getMenuBackgroundBlurriness(): number;
        /**
         * Send a client info packet with settings information to the server
         */
        onboardingAccessibilityFinished(): void;
        setKey(keyBinding: $KeyMapping, input: $InputConstants$Key): void;
        chatLinks(): $OptionInstance<boolean>;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        dumpOptionsForReport(): string;
        getEffectiveRenderDistance(): number;
        loadSelectedResourcePacks(resourcePackList: $PackRepository): void;
        chatOpacity(): $OptionInstance<number>;
        static isFalse(value: string): boolean;
        gamma(): $OptionInstance<number>;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        notificationDisplayTime(): $OptionInstance<number>;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        setServerRenderDistance(serverRenderDistance: number): void;
        darknessEffectScale(): $OptionInstance<number>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        discreteMouseScroll(): $OptionInstance<boolean>;
        chatHeightUnfocused(): $OptionInstance<number>;
        mouseWheelSensitivity(): $OptionInstance<number>;
        entityDistanceScaling(): $OptionInstance<number>;
        updateResourcePacks(resourcePackList: $PackRepository): void;
        static genericValueOrOffLabel(text: $Component_, value: number): $Component;
        getSoundSourceVolume(category: $SoundSource_): number;
        realmsNotifications(): $OptionInstance<boolean>;
        getBackgroundOpacity(opacity: number): number;
        buildPlayerInformation(): $ClientInformation;
        simulationDistance(): $OptionInstance<number>;
        getBackgroundColor(chatColor: number): number;
        getBackgroundColor(opacity: number): number;
        rawMouseInput(): $OptionInstance<boolean>;
        framerateLimit(): $OptionInstance<number>;
        glintStrength(): $OptionInstance<number>;
        mipmapLevels(): $OptionInstance<number>;
        enableVsync(): $OptionInstance<boolean>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        biomeBlendRadius(): $OptionInstance<number>;
        getCameraType(): $CameraType;
        setCameraType(pointOfView: $CameraType_): void;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        renderDistance(): $OptionInstance<number>;
        ambientOcclusion(): $OptionInstance<boolean>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        operatorItemsTab(): $OptionInstance<boolean>;
        handler$jcl000$parcool$onGetCameraType(arg0: $CallbackInfoReturnable<any>): void;
        autoJump(): $OptionInstance<boolean>;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        hideMatchedNames(): $OptionInstance<boolean>;
        allowServerListing(): $OptionInstance<boolean>;
        soundDevice(): $OptionInstance<string>;
        entityShadows(): $OptionInstance<boolean>;
        chatLineSpacing(): $OptionInstance<number>;
        narratorHotkey(): $OptionInstance<boolean>;
        panoramaSpeed(): $OptionInstance<number>;
        chatHeightFocused(): $OptionInstance<number>;
        /**
         * Returns `true` if the client connect to a server using the native transport system.
         */
        useNativeTransport(): boolean;
        autoSuggestions(): $OptionInstance<boolean>;
        showSubtitles(): $OptionInstance<boolean>;
        directionalAudio(): $OptionInstance<boolean>;
        sensitivity(): $OptionInstance<number>;
        invertYMouse(): $OptionInstance<boolean>;
        toggleCrouch(): $OptionInstance<boolean>;
        toggleSprint(): $OptionInstance<boolean>;
        highContrast(): $OptionInstance<boolean>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        /**
         * Send a client info packet with settings information to the server
         */
        broadcastOptions(): void;
        static genericValueLabel(text: $Component_, value: number): $Component;
        static genericValueLabel(text: $Component_, value: $Component_): $Component;
        toggleModelPart(modelPart: $PlayerModelPart_, enable: boolean): void;
        isModelPartEnabled(playerModelPart: $PlayerModelPart_): boolean;
        chatScale(): $OptionInstance<number>;
        chatWidth(): $OptionInstance<number>;
        handler$jjh000$axiom$getCameraType(cir: $CallbackInfoReturnable<any>): void;
        getSoundSourceOptionInstance(soundSource: $SoundSource_): $OptionInstance<number>;
        glintSpeed(): $OptionInstance<number>;
        fov(): $OptionInstance<number>;
        bobView(): $OptionInstance<boolean>;
        textBackgroundOpacity(): $OptionInstance<number>;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        chatDelay(): $OptionInstance<number>;
        fullscreen(): $OptionInstance<boolean>;
        narrator(): $OptionInstance<$NarratorStatus>;
        guiScale(): $OptionInstance<number>;
        particles(): $OptionInstance<$ParticleStatus>;
        touchscreen(): $OptionInstance<boolean>;
        screenEffectScale(): $OptionInstance<number>;
        damageTiltStrength(): $OptionInstance<number>;
        fovEffectScale(): $OptionInstance<number>;
        hideLightningFlash(): $OptionInstance<boolean>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        chatColors(): $OptionInstance<boolean>;
        tutorialStep: $TutorialSteps;
        static RENDER_DISTANCE_REALLY_FAR: number;
        static DEFAULT_SOUND_DEVICE: string;
        keyChat: $KeyMapping;
        resourcePacks: $List<string>;
        keyInventory: $KeyMapping;
        keyCommand: $KeyMapping;
        keySwapOffhand: $KeyMapping;
        keyHotbarSlots: $KeyMapping[];
        keySpectatorOutlines: $KeyMapping;
        static RENDER_DISTANCE_NORMAL: number;
        keySprint: $KeyMapping;
        keyAdvancements: $KeyMapping;
        static RENDER_DISTANCE_EXTREME: number;
        keySaveHotbarActivator: $KeyMapping;
        advancedItemTooltips: boolean;
        fullscreenVideoModeString: string;
        keyFullscreen: $KeyMapping;
        incompatibleResourcePacks: $List<string>;
        languageCode: string;
        static RENDER_DISTANCE_SHORT: number;
        keyDrop: $KeyMapping;
        overrideHeight: number;
        static LOGGER: $Logger;
        keyMappings: $KeyMapping[];
        minecraft: $Minecraft;
        keyAttack: $KeyMapping;
        skipMultiplayerWarning: boolean;
        static RENDER_DISTANCE_FAR: number;
        keyUp: $KeyMapping;
        keyJump: $KeyMapping;
        keyLoadHotbarActivator: $KeyMapping;
        onboardAccessibility: boolean;
        keyShift: $KeyMapping;
        smoothCamera: boolean;
        keyScreenshot: $KeyMapping;
        static AUTO_GUI_SCALE: number;
        keyTogglePerspective: $KeyMapping;
        keySocialInteractions: $KeyMapping;
        pauseOnLostFocus: boolean;
        keyRight: $KeyMapping;
        lastMpIp: string;
        syncWrites: boolean;
        keySmoothCamera: $KeyMapping;
        overrideWidth: number;
        keyLeft: $KeyMapping;
        static GSON: $Gson;
        hideServerAddress: boolean;
        glDebugVerbosity: number;
        static RENDER_DISTANCE_TINY: number;
        keyPlayerList: $KeyMapping;
        static UNLIMITED_FRAMERATE_CUTOFF: number;
        joinedFirstServer: boolean;
        hideBundleTutorial: boolean;
        keyUse: $KeyMapping;
        keyPickItem: $KeyMapping;
        keyDown: $KeyMapping;
        hideGui: boolean;
        constructor(minecraft: $Minecraft, gameDirectory: $File_);
        get file(): $File;
        get cloudsType(): $CloudStatus;
        get effectiveRenderDistance(): number;
        set serverRenderDistance(value: number);
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        validateValue(value: number): (number) | undefined;
        codec(): $Codec<number>;
        applyValueImmediately(): boolean;
        minInclusive(): number;
        maxInclusive(): number;
        constructor(minInclusive: number, maxInclusive: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$IntRange}.
     */
    export type $OptionInstance$IntRange_ = { maxInclusive?: number, minInclusive?: number, applyValueImmediately?: boolean,  } | [maxInclusive?: number, minInclusive?: number, applyValueImmediately?: boolean, ];
    export class $ToggleKeyMapping extends $KeyMapping {
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        reset(): void;
        modifyReturnValue$ean000$xaerominimap$onIsDown(arg0: boolean): boolean;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_SORT_ORDER: $Map<string, number>;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        defaultKey: $InputConstants$Key;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(name: string, keyCode: number, category: string, needsToggle: $BooleanSupplier_);
    }
    export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
        static values(): $PrioritizeChunkUpdates[];
        static valueOf(arg0: string): $PrioritizeChunkUpdates;
        getKey(): string;
        getId(): number;
        static byId(id: number): $PrioritizeChunkUpdates;
        getCaption(): $Component;
        static NEARBY: $PrioritizeChunkUpdates;
        static NONE: $PrioritizeChunkUpdates;
        static PLAYER_AFFECTED: $PrioritizeChunkUpdates;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PrioritizeChunkUpdates}.
     */
    export type $PrioritizeChunkUpdates_ = "none" | "player_affected" | "nearby";
    export class $OptionInstance$UnitDouble extends $Enum<$OptionInstance$UnitDouble> implements $OptionInstance$SliderableValueSet<number> {
        static values(): $OptionInstance$UnitDouble[];
        static valueOf(arg0: string): $OptionInstance$UnitDouble;
        validateValue(value: number): (number) | undefined;
        xmap<R>(encoder: $DoubleFunction_<R>, decoder: $ToDoubleFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        codec(): $Codec<number>;
        toSliderValue(value: number): number;
        fromSliderValue(value: number): number;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getRealtimeDeltaTicks(): number;
        updatePauseState(frozen: boolean): void;
        advanceTime(time: number, arg1: boolean): number;
        updateFrozenState(frozen: boolean): void;
        getGameTimeDeltaTicks(): number;
        catnip$getDeltaTickResidual(): number;
        getDeltaTickResidual(): number;
        msPerTick: number;
        constructor(ticksPerSecond: number, time: number, arg2: $FloatUnaryOperator_);
        get realtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
        get deltaTickResidual(): number;
    }
    export class $CameraType extends $Enum<$CameraType> {
        static values(): $CameraType[];
        static valueOf(arg0: string): $CameraType;
        isMirrored(): boolean;
        cycle(): $CameraType;
        isFirstPerson(): boolean;
        static THIRD_PERSON_BACK: $CameraType;
        static THIRD_PERSON_FRONT: $CameraType;
        static FIRST_PERSON: $CameraType;
        get mirrored(): boolean;
        get firstPerson(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CameraType}.
     */
    export type $CameraType_ = "first_person" | "third_person_back" | "third_person_front" | "sub_level_view" | "sub_level_view_unlocked";
    export class $GuiMessage$Line extends $Record implements $HeadRenderable {
        tag(): $GuiMessageTag;
        content(): $FormattedCharSequence;
        addedTime(): number;
        endOfEntry(): boolean;
        chatheads$getHeadData(): $HeadData;
        handler$bdl000$chat_heads$chatheads$setOwnerForFirstLine(callbackInfo: $CallbackInfo): void;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_ | null, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage$Line}.
     */
    export type $GuiMessage$Line_ = { addedTime?: number, endOfEntry?: boolean, content?: $FormattedCharSequence_, tag?: $GuiMessageTag_,  } | [addedTime?: number, endOfEntry?: boolean, content?: $FormattedCharSequence_, tag?: $GuiMessageTag_, ];
    export class $GameNarrator {
        clear(): void;
        destroy(): void;
        isActive(): boolean;
        say(message: $Component_): void;
        updateNarratorStatus(status: $NarratorStatus_): void;
        checkStatus(narratorEnabled: boolean): void;
        sayNow(message: $Component_): void;
        sayNow(message: string): void;
        sayChat(message: $Component_): void;
        narrator: $Narrator;
        static NO_TITLE: $Component;
        constructor(minecraft: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        validateValue(value: number): (number) | undefined;
        codec(): $Codec<number>;
        encodableMaxInclusive(): number;
        minInclusive(): number;
        maxInclusive(): number;
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        createCycleButton(): boolean;
        maxSupplier(): $IntSupplier;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$ClampingLazyMaxIntRange}.
     */
    export type $OptionInstance$ClampingLazyMaxIntRange_ = { minInclusive?: number, maxSupplier?: $IntSupplier_, encodableMaxInclusive?: number,  } | [minInclusive?: number, maxSupplier?: $IntSupplier_, encodableMaxInclusive?: number, ];
    export class $OptionInstance$SliderableValueSet<T> {
    }
    export interface $OptionInstance$SliderableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
    export class $GuiMessageTag extends $Record {
        static system(): $GuiMessageTag;
        text(): $Component;
        icon(): $GuiMessageTag$Icon;
        indicatorColor(): number;
        static systemSinglePlayer(): $GuiMessageTag;
        logTag(): string;
        static chatError(): $GuiMessageTag;
        static chatModified(originalText: string): $GuiMessageTag;
        static chatNotSecure(): $GuiMessageTag;
        constructor(arg0: number, arg1: $GuiMessageTag$Icon_ | null, arg2: $Component_ | null, arg3: string | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag}.
     */
    export type $GuiMessageTag_ = { text?: $Component_, logTag?: string, icon?: $GuiMessageTag$Icon_, indicatorColor?: number,  } | [text?: $Component_, logTag?: string, icon?: $GuiMessageTag$Icon_, indicatorColor?: number, ];
    export class $Options$OptionAccess {
    }
    export interface $Options$OptionAccess {
    }
    /**
     * Values that may be interpreted as {@link $Options$OptionAccess}.
     */
    export type $Options$OptionAccess_ = (() => void);
    export class $PeriodicNotificationManager extends $SimplePreparableReloadListener<$Map<string, $List<$PeriodicNotificationManager$Notification>>> implements $AutoCloseable {
        apply(object: $Map_<string, $List_<$PeriodicNotificationManager$Notification_>>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        close(): void;
        /**
         * Performs any reloading that can be done off-thread, such as file IO
         */
        prepare(resourceManager: $ResourceManager, profiler: $ProfilerFiller): $Map<string, $List<$PeriodicNotificationManager$Notification>>;
        constructor(notifications: $ResourceLocation_, selector: $Object2BooleanFunction_<string>);
    }
    export class $GuiMessage extends $Record implements $HeadRenderable {
        signature(): $MessageSignature;
        tag(): $GuiMessageTag;
        icon(): $GuiMessageTag$Icon;
        content(): $Component;
        addedTime(): number;
        chatheads$getHeadData(): $HeadData;
        chatheads$setHeadData(headData: $HeadData_): void;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_ | null, arg3: $GuiMessageTag_ | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage}.
     */
    export type $GuiMessage_ = { addedTime?: number, signature?: $MessageSignature_, content?: $Component_, tag?: $GuiMessageTag_,  } | [addedTime?: number, signature?: $MessageSignature_, content?: $Component_, tag?: $GuiMessageTag_, ];
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum, $RecipeBookCategoriesAccessor {
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        static getExtensionInfo(): $ExtensionInfo;
        static setAGGREGATE_CATEGORIES$connector_$md$707fe4$0(arg0: $Map_<any, any>): void;
        static getCategories(recipeBookType: $RecipeBookType_): $List<$RecipeBookCategories>;
        getIconItems(): $List<$ItemStack>;
        static CRAFTING_REDSTONE: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_SEARCH: $RecipeBookCategories;
        static CRAFTING_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_MISC: $RecipeBookCategories;
        static SMOKER_FOOD: $RecipeBookCategories;
        static CRAFTING_BUILDING_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_DRINKS: $RecipeBookCategories;
        static SMOKER_CATEGORIES: $List<$RecipeBookCategories>;
        static SMOKER_SEARCH: $RecipeBookCategories;
        static STONECUTTER: $RecipeBookCategories;
        static AGGREGATE_CATEGORIES: $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static CRAFTING_EQUIPMENT: $RecipeBookCategories;
        static BLAST_FURNACE_BLOCKS: $RecipeBookCategories;
        static BLAST_FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static FARMERSDELIGHT_COOKING_MEALS: $RecipeBookCategories;
        static BREWINANDCHEWIN_FERMENTING_SEARCH: $RecipeBookCategories;
        static CRAFTING_MISC: $RecipeBookCategories;
        static CAMPFIRE: $RecipeBookCategories;
        static FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_CATEGORIES: $List<$RecipeBookCategories>;
        static SMITHING: $RecipeBookCategories;
        static FURNACE_FOOD: $RecipeBookCategories;
        static FURNACE_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_MISC: $RecipeBookCategories;
        static BREWINANDCHEWIN_FERMENTING_MISC: $RecipeBookCategories;
        static FURNACE_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_SEARCH: $RecipeBookCategories;
        static UNKNOWN: $RecipeBookCategories;
        static BREWINANDCHEWIN_FERMENTING_MEALS: $RecipeBookCategories;
        static FURNACE_MISC: $RecipeBookCategories;
        static BREWINANDCHEWIN_FERMENTING_DRINKS: $RecipeBookCategories;
        static get extensionInfo(): $ExtensionInfo;
        static set AGGREGATE_CATEGORIES$connector_$md$707fe4$0(value: $Map_<any, any>);
        get iconItems(): $List<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookCategories}.
     */
    export type $RecipeBookCategories_ = "crafting_search" | "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_search" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_search" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_search" | "smoker_food" | "stonecutter" | "smithing" | "campfire" | "unknown" | "brewinandchewin_fermenting_drinks" | "brewinandchewin_fermenting_meals" | "brewinandchewin_fermenting_misc" | "brewinandchewin_fermenting_search" | "farmersdelight_cooking_drinks" | "farmersdelight_cooking_meals" | "farmersdelight_cooking_misc" | "farmersdelight_cooking_search";
    export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $List_<T>, arg1: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$Enum}.
     */
    export type $OptionInstance$Enum_<T> = { values?: $List_<any>, codec?: $Codec<any>,  } | [values?: $List_<any>, codec?: $Codec<any>, ];
    export class $OptionInstance$TooltipSupplier<T> {
    }
    export interface $OptionInstance$TooltipSupplier<T> {
        apply(value: T): $Tooltip;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$TooltipSupplier}.
     */
    export type $OptionInstance$TooltipSupplier_<T> = ((arg0: T) => $Tooltip);
    export class $CommandHistory {
        history(): $Collection<string>;
        addCommand(command: string): void;
        constructor(path: $Path_);
    }
    export class $Camera implements $CameraAccessor, $CameraZoomExtension, $CameraWaterOcclusionExtension {
        reset(): void;
        setup(level: $BlockGetter, entity: $Entity, detached: boolean, thirdPersonReverse: boolean, partialTick: number): void;
        move(zoom: number, dy: number, dx: number): void;
        getPosition(): $Vec3;
        getBlockPosition(): $BlockPos;
        setPosition(pos: $Vec3_): void;
        /**
         * Sets the position and blockpos of the active render
         */
        setPosition(x: number, arg1: number, y: number): void;
        isInitialized(): boolean;
        getMaxZoom(maxZoom: number): number;
        getEntity(): $Entity;
        sable$setZoomAmount(arg0: number): void;
        rotation(): $Quaternionf;
        getLeftVector(): $Vector3f;
        getBlockAtCamera(): $BlockState;
        getNearPlane(): $Camera$NearPlane;
        tick(): void;
        sable$getZoomAmount(): number;
        handler$bip000$supplementaries$supp$setupCannonCamera(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number, arg5: $CallbackInfo): void;
        isDetached(): boolean;
        sable$isOccluded(): boolean;
        getUpVector(): $Vector3f;
        handler$hfo000$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        handler$hhj001$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        handler$bmk000$vista$setupCannonCamera(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number, arg5: $CallbackInfo): void;
        getLookVector(): $Vector3f;
        getRoll(): number;
        handler$jig000$axiom$getMaxZoom(d: number, cir: $CallbackInfoReturnable<any>): void;
        handler$hmk000$sable$rotateView(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        getXRot(): number;
        getYRot(): number;
        sable$setIgnoreOcclusion(arg0: boolean): void;
        sable$isIgnoreOcclusion(): boolean;
        setRotation(zoom: number, dy: number, dx: number): void;
        /**
         * @deprecated
         */
        setRotation(yRot: number, xRot: number): void;
        getFluidInCamera(): $FogType;
        getPartialTickTime(): number;
        setDetached(arg0: boolean): void;
        eyeHeightOld: number;
        static FOG_DISTANCE_SCALE: number;
        level: $BlockGetter;
        eyeHeight: number;
        initialized: boolean;
        static $assertionsDisabled: boolean;
        entity: $Entity;
        constructor();
        get blockPosition(): $BlockPos;
        get leftVector(): $Vector3f;
        get blockAtCamera(): $BlockState;
        get nearPlane(): $Camera$NearPlane;
        get upVector(): $Vector3f;
        get lookVector(): $Vector3f;
        get roll(): number;
        get XRot(): number;
        get YRot(): number;
        get fluidInCamera(): $FogType;
        get partialTickTime(): number;
    }
    export class $StringSplitter$LinePosConsumer {
    }
    export interface $StringSplitter$LinePosConsumer {
        accept(style: $Style, currentPos: number, contentWidth: number): void;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$LinePosConsumer}.
     */
    export type $StringSplitter$LinePosConsumer_ = ((arg0: $Style, arg1: number, arg2: number) => void);
    export class $User$Type extends $Enum<$User$Type> {
        getName(): string;
        static values(): $User$Type[];
        static valueOf(typeName: string): $User$Type;
        static byName(typeName: string): $User$Type;
        static MOJANG: $User$Type;
        static LEGACY: $User$Type;
        static MSA: $User$Type;
    }
    /**
     * Values that may be interpreted as {@link $User$Type}.
     */
    export type $User$Type_ = "legacy" | "mojang" | "msa";
    export class $Minecraft$GameLoadCookie extends $Record {
        quickPlayData(): $GameConfig$QuickPlayData;
        realmsClient(): $RealmsClient;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$GameLoadCookie}.
     */
    export type $Minecraft$GameLoadCookie_ = { realmsClient?: $RealmsClient, quickPlayData?: $GameConfig$QuickPlayData_,  } | [realmsClient?: $RealmsClient, quickPlayData?: $GameConfig$QuickPlayData_, ];
    export class $OptionInstance<T> implements $OptionInstanceAccessor<any>, $ISimpleOption<any> {
        get(): $Object;
        values(): $OptionInstance$ValueSet<$Object>;
        set(value: $Object): void;
        createButton(options: $Options, x: number, y: number, width: number): $AbstractWidget;
        createButton(options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<$Object>): $AbstractWidget;
        createButton(options: $Options): $AbstractWidget;
        codec(): $Codec<$Object>;
        static cachedConstantTooltip<T>(message: $Component_): $OptionInstance$TooltipSupplier<T>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(key: string, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(key: string, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, valueStringifier: $OptionInstance$CaptionBasedToString_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean): $OptionInstance<boolean>;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        setCodec(arg0: $Codec<$Object>): void;
        setCallbacks(arg0: $OptionInstance$ValueSet<$Object>): void;
        getInitialValue(): $Object;
        caption: $Component;
        static BOOLEAN_VALUES: $OptionInstance$Enum<boolean>;
        value: $Object;
        static BOOLEAN_TO_STRING: $OptionInstance$CaptionBasedToString<boolean>;
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, codec: $Codec<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        set callbacks(value: $OptionInstance$ValueSet<$Object>);
        get initialValue(): $Object;
    }
    export class $StringSplitter$LineComponent implements $FormattedText {
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        get string(): string;
    }
    export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IMinecraftExtension, $MinecraftAccessor, $MinecraftAccess, $IXaeroMinimapMinecraftClient, $IWorldMapMinecraftClient, $AccessorMinecraft, $MinecraftClientAccessor, $MinecraftClientKJS, $MinecraftAccessor$1, $MinecraftExt {
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        run(): void;
        /**
         * Return the singleton Minecraft instance for the game
         */
        static getInstance(): $Minecraft;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        stop(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        destroy(): void;
        disconnect(nextScreen: $Screen): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        disconnect(): void;
        disconnect(nextScreen: $Screen, keepResourcePacks: boolean): void;
        setLevel(level: $ClientLevel, reason: $ReceivingLevelScreen$Reason_): void;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        handler$jjd000$axiom$onRightClick(ci: $CallbackInfo): void;
        handler$jje000$axiom$pickBlock(ci: $CallbackInfo): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        handler$inf000$ae2$pickColor(arg0: $CallbackInfo): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        clearDownloadedResourcePacks(): void;
        handler$jjd000$axiom$setLevel(ci: $CallbackInfo): void;
        handler$bap000$veil$beginFrame(arg0: $CallbackInfo): void;
        handler$jjd000$axiom$setScreen(screen: $Screen, ci: $CallbackInfo): void;
        handler$bap000$veil$endFrame(arg0: $CallbackInfo): void;
        handler$jjd000$axiom$startAttack(ci: $CallbackInfoReturnable<any>): void;
        handler$jjd000$axiom$afterMainBlit(ci: $CallbackInfo): void;
        handler$jjd000$axiom$resizeDisplay(ci: $CallbackInfo): void;
        handler$jjd000$axiom$startUseItem(ci: $CallbackInfo): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        telemetryOptInExtra(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        extraTelemetryAvailable(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        hasSingleplayerServer(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useShaderTransparency(): boolean;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useAmbientOcclusion(): boolean;
        updateReportEnvironment(reportEnvironment: $ReportEnvironment_): void;
        createWorldOpenFlows(): $WorldOpenFlows;
        /**
         * Returns the currently running integrated server
         */
        getSingleplayerServer(): $IntegratedServer;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        debugFpsMeterKeyPress(keyCount: number): void;
        getTelemetryManager(): $ClientTelemetryManager;
        debugClientMetricsStart(logger: $Consumer_<$Component>): boolean;
        getReportingContext(): $ReportingContext;
        getResourcePackRepository(): $PackRepository;
        /**
         * Gets the sprite uploader used for paintings.
         */
        getPaintingTextures(): $PaintingTextureManager;
        getDownloadedPackSource(): $DownloadedPackSource;
        getSituationalMusic(): $Music;
        /**
         * Gets the sprite uploader used for potions.
         */
        getMobEffectTextures(): $MobEffectTextureManager;
        grabPanoramixScreenshot(gameDirectory: $File_, width: number, height: number): $Component;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        getResourcePackDirectory(): $Path;
        shouldEntityAppearGlowing(entity: $Entity): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        canValidateProfileKeys(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        showOnlyReducedInfo(): boolean;
        getPlayerSocialManager(): $PlayerSocialManager;
        getProgressListener(): $StoringChunkProgressListener;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isTextFilteringEnabled(): boolean;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        prepareForMultiplayer(): void;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        getMinecraftSessionService(): $MinecraftSessionService;
        getVanillaPackResources(): $VanillaPackResources;
        getMainRenderTarget(): $RenderTarget;
        reloadResourcePacks(): $CompletableFuture<void>;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        clearResourcePacksOnError(throwable: $Throwable, errorMessage: $Component_ | null, gameLoadCookie: $Minecraft$GameLoadCookie_ | null): void;
        emergencySaveAndCrash(report: $CrashReport): void;
        handler$bcb002$veil$close(arg0: $CallbackInfo): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        axiom$popMainRenderTarget(): void;
        getScheduledEvents(): $ScheduledEvents;
        axiom$getRightClickDelay(): number;
        axiom$addCustomNbtData(stack: $ItemStack_, blockEntity: $BlockEntity, registryAccess: $RegistryAccess): void;
        axiom$pushMainRenderTarget(renderTarget: $RenderTarget): void;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        axiom$setRightClickDelay(keyCount: number): void;
        getProfiler(): $ProfilerFiller;
        static crash(minecraft: $Minecraft | null, gameDirectory: $File_, crashReport: $CrashReport): void;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        static getLauncherBrand(): string;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isRunning(): boolean;
        getTimer(): $DeltaTracker;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        tick(): void;
        getCurrentServer(): $ServerData;
        setScreen(nextScreen: $Screen | null): void;
        getUser(): $User;
        getTextureManager(): $TextureManager;
        getGuiSprites(): $GuiSpriteManager;
        getItemRenderer(): $ItemRenderer;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isLocalServer(): boolean;
        realmsDataFetcher(): $RealmsDataFetcher;
        quickPlayLog(): $QuickPlayLog;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsMultiplayer(): boolean;
        renderBuffers(): $RenderBuffers;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateFontOptions(): void;
        directoryValidator(): $DirectoryValidator;
        setWindowActive(leftClick: boolean): void;
        commandHistory(): $CommandHistory;
        getBlockRenderer(): $BlockRenderDispatcher;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        resizeDisplay(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateTitle(): void;
        static checkModStatus(): $ModCheck;
        getDebugOverlay(): $DebugScreenOverlay;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isGameLoadFinished(): boolean;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getVersionType(): string;
        delayCrashRaw(report: $CrashReport): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isEnforceUnicode(): boolean;
        getModelManager(): $ModelManager;
        multiplayerBan(): $BanDetails;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getLaunchedVersion(): string;
        setLastInputType(lastInputType: $InputType_): void;
        getChatStatus(): $Minecraft$ChatStatus;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        cursorEntered(): void;
        getFrameTimeNs(): number;
        /**
         * Returns the save loader that is currently being used
         */
        getLevelSource(): $LevelStorageSource;
        /**
         * Return the musicTicker's instance
         */
        getMusicManager(): $MusicManager;
        getCameraEntity(): $Entity;
        forceSetScreen(nextScreen: $Screen): void;
        doWorldLoad(levelStorage: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, newWorld: boolean): void;
        clearClientLevel(nextScreen: $Screen): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsTelemetry(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isNameBanned(): boolean;
        getGpuUtilization(): number;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsRealms(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static renderNames(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useFancyGraphics(): boolean;
        getLanguageManager(): $LanguageManager;
        isLocalPlayer(playerUUID: $UUID_): boolean;
        getTextureAtlas(location: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        delayTextureReload(): $CompletableFuture<void>;
        getSkinManager(): $SkinManager;
        setCameraEntity(viewingEntity: $Entity): void;
        addCustomNbtData(stack: $ItemStack_, blockEntity: $BlockEntity, registryAccess: $RegistryAccess): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isSingleplayer(): boolean;
        getResourceManager(): $ResourceManager;
        getSoundManager(): $SoundManager;
        getGameProfile(): $GameProfile;
        getSplashManager(): $SplashManager;
        getBlockColors(): $BlockColors;
        getNarrator(): $GameNarrator;
        getLastInputType(): $InputType;
        getChatListener(): $ChatListener;
        getHotbarManager(): $HotbarManager;
        getEntityModels(): $EntityModelSet;
        getTutorial(): $Tutorial;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isWindowActive(): boolean;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        updateMaxMipLevel(keyCount: number): void;
        getItemColors(): $ItemColors;
        getFixerUpper(): $DataFixer;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getTitle(): string;
        getProxy(): $Proxy;
        wrapOperation$jjd000$axiom$handleKeybinds_setScreen(instance: $Minecraft, screen: $Screen, original: $Operation_<any>): void;
        handler$jha000$fabric_events_interaction_v0$cancelItemPick(arg0: $CallbackInfo): void;
        wrapWithCondition$jjd000$axiom$handleKeybindsSendPacket(instance: $ClientPacketListener, packet: $Packet<any>): boolean;
        redirect$jjd000$axiom$updateSelectedSlot(instance: $Inventory, value: number): void;
        handler$jjd000$axiom$getMainRenderTarget(cir: $CallbackInfoReturnable<any>): void;
        modify$elm000$xaeroworldmap$onRenderCall(arg0: boolean): boolean;
        handler$jjd000$axiom$continueAttack(attacking: boolean, ci: $CallbackInfo): void;
        handler$jjd000$axiom$pickBlockInfinite(ci: $CallbackInfo): void;
        handler$iep004$distanthorizons$close(ci: $CallbackInfo): void;
        handler$jjd000$axiom$handleKeyboards(ci: $CallbackInfo): void;
        handler$hej000$sable$postCycleCameraType(arg0: $CallbackInfo): void;
        setOverlay(loadingGui: $Overlay | null): void;
        getWindow(): $Window;
        localvar$jha000$fabric_events_interaction_v0$modifyItemPick(arg0: $ItemStack_): $ItemStack;
        handler$elm000$xaeroworldmap$onRunTickStart(arg0: $CallbackInfo): void;
        handler$glm000$nochatrestrictions$onCreateUserApi(arg0: $YggdrasilAuthenticationService, arg1: $GameConfig, arg2: $CallbackInfoReturnable<any>): void;
        handler$flp000$collective$Minecraft_setLevel(arg0: $ClientLevel, arg1: $ReceivingLevelScreen$Reason_, arg2: $CallbackInfo): void;
        handler$glm000$nochatrestrictions$onCheckNameBan(arg0: $CallbackInfoReturnable<any>): void;
        getXaeroWorldMap_fps(): number;
        getXaeroMinimap_fps(): number;
        handler$cci000$transition$fillReport(theCrash: $CrashReport, ci: $CallbackInfoReturnable<any>): void;
        /**
         * Adds core server Info (GL version, Texture pack, isModded, type), and the worldInfo to the crash report.
         */
        fillReport(theCrash: $CrashReport): $CrashReport;
        static fillReport(minecraft: $Minecraft | null, languageManager: $LanguageManager | null, launchVersion: string, options: $Options | null, report: $CrashReport): void;
        getToasts(): $ToastComponent;
        getFps(): number;
        delayCrash(report: $CrashReport): void;
        pauseGame(leftClick: boolean): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isPaused(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isDemo(): boolean;
        isBlocked(playerUUID: $UUID_): boolean;
        getOverlay(): $Overlay;
        /**
         * Retrieves the `Locale` set by the player.
         * Useful for creating string and number formatters.
         */
        getLocale(): $Locale;
        pushGuiLayer(nextScreen: $Screen): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        popGuiLayer(): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        isKeyMappingDown(key: $KeyMapping): boolean;
        setStatusMessage(message: $Component_): void;
        getCurrentScreen(): $Screen;
        setCurrentScreen(nextScreen: $Screen): void;
        getKeyBindPressedTicks(id: string): number;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getCurrentWorldName(): string;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(defaultText: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isCtrlDown(): boolean;
        isKeyBindDown(id: string): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(defaultText: string): void;
        getName(): $Component;
        setTitle(defaultText: string): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isShiftDown(): boolean;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isAltDown(): boolean;
        /**
         * Return the singleton Minecraft instance for the game
         */
        self(): $Minecraft;
        tell(message: $Component_): void;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        getConnection(): $Connection;
        ldlib2$getClientTickCount(): number;
        bookshelf$getFontManager(): $FontManager;
        getFontManager(): $FontManager;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        create$setMissTime(keyCount: number): void;
        static instance: $Minecraft;
        crosshairPickEntity: $Entity;
        screen: $Screen;
        cameraEntity: $Entity;
        mainRenderTarget: $RenderTarget;
        running: boolean;
        sectionVisibility: boolean;
        static ON_OSX: boolean;
        mouseHandler: $MouseHandler;
        static UNIFORM_FONT: $ResourceLocation;
        gameRenderer: $GameRenderer;
        wireframe: boolean;
        options: $Options;
        levelRenderer: $LevelRenderer;
        player: $LocalPlayer;
        pendingConnection: $Connection;
        fontFilterFishy: $Font;
        missTime: number;
        level: $ClientLevel;
        gameDirectory: $File;
        static $assertionsDisabled: boolean;
        sectionPath: boolean;
        debugRenderer: $DebugRenderer;
        noRender: boolean;
        static DEFAULT_FONT: $ResourceLocation;
        fpsString: string;
        keyboardHandler: $KeyboardHandler;
        fontManager: $FontManager;
        static UPDATE_DRIVERS_ADVICE: string;
        particleEngine: $ParticleEngine;
        gui: $Gui;
        gameMode: $MultiPlayerGameMode;
        static ALT_FONT: $ResourceLocation;
        hitResult: $HitResult;
        smartCull: boolean;
        font: $Font;
        constructor(gameConfig: $GameConfig);
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get profileKeySignatureValidator(): $SignatureValidator;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get singleplayerServer(): $IntegratedServer;
        get telemetryManager(): $ClientTelemetryManager;
        get reportingContext(): $ReportingContext;
        get resourcePackRepository(): $PackRepository;
        get paintingTextures(): $PaintingTextureManager;
        get downloadedPackSource(): $DownloadedPackSource;
        get situationalMusic(): $Music;
        get mobEffectTextures(): $MobEffectTextureManager;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get resourcePackDirectory(): $Path;
        get playerSocialManager(): $PlayerSocialManager;
        get progressListener(): $StoringChunkProgressListener;
        get textFilteringEnabled(): boolean;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get minecraftSessionService(): $MinecraftSessionService;
        get vanillaPackResources(): $VanillaPackResources;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get scheduledEvents(): $ScheduledEvents;
        get profiler(): $ProfilerFiller;
        static get launcherBrand(): string;
        get timer(): $DeltaTracker;
        get currentServer(): $ServerData;
        get user(): $User;
        get textureManager(): $TextureManager;
        get guiSprites(): $GuiSpriteManager;
        get itemRenderer(): $ItemRenderer;
        get localServer(): boolean;
        get blockRenderer(): $BlockRenderDispatcher;
        get debugOverlay(): $DebugScreenOverlay;
        get gameLoadFinished(): boolean;
        get versionType(): string;
        get enforceUnicode(): boolean;
        get modelManager(): $ModelManager;
        get launchedVersion(): string;
        get chatStatus(): $Minecraft$ChatStatus;
        get frameTimeNs(): number;
        get levelSource(): $LevelStorageSource;
        get musicManager(): $MusicManager;
        get nameBanned(): boolean;
        get gpuUtilization(): number;
        get languageManager(): $LanguageManager;
        get skinManager(): $SkinManager;
        get singleplayer(): boolean;
        get resourceManager(): $ResourceManager;
        get soundManager(): $SoundManager;
        get gameProfile(): $GameProfile;
        get splashManager(): $SplashManager;
        get blockColors(): $BlockColors;
        get narrator(): $GameNarrator;
        get chatListener(): $ChatListener;
        get hotbarManager(): $HotbarManager;
        get entityModels(): $EntityModelSet;
        get tutorial(): $Tutorial;
        get itemColors(): $ItemColors;
        get fixerUpper(): $DataFixer;
        get proxy(): $Proxy;
        get window(): $Window;
        get xaeroWorldMap_fps(): number;
        get xaeroMinimap_fps(): number;
        get toasts(): $ToastComponent;
        get fps(): number;
        get paused(): boolean;
        get demo(): boolean;
        get locale(): $Locale;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set statusMessage(value: $Component_);
        get currentWorldName(): string;
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set activePostShader(value: $ResourceLocation_);
        get ctrlDown(): boolean;
        get shiftDown(): boolean;
        get altDown(): boolean;
        get displayName(): $Component;
        get connection(): $Connection;
    }
    export class $Camera$NearPlane {
        getTopLeft(): $Vec3;
        getPointOnPlane(leftScale: number, upScale: number): $Vec3;
        getTopRight(): $Vec3;
        getBottomRight(): $Vec3;
        getBottomLeft(): $Vec3;
        forward: $Vec3;
        constructor(forward: $Vec3_, left: $Vec3_, up: $Vec3_);
        get topLeft(): $Vec3;
        get topRight(): $Vec3;
        get bottomRight(): $Vec3;
        get bottomLeft(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        draw(guiGraphics: $GuiGraphics, x: number, y: number): void;
        static create$nochatreports_$md$707fe4$0(arg0: string, arg1: number, arg2: $ResourceLocation_, arg3: number, arg4: number): $GuiMessageTag$Icon;
        static CHAT_MODIFIED: $GuiMessageTag$Icon;
        sprite: $ResourceLocation;
        width: number;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag$Icon}.
     */
    export type $GuiMessageTag$Icon_ = "chat_modified" | "chat_ncr_encrypted";
    export class $KeyboardHandler {
        setup(window: number): void;
        setClipboard(string: string): void;
        handler$bjg000$supplementaries$supp$onKeyPressCancellable(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        tick(): void;
        keyPress(windowPointer: number, arg1: number, key: number, scanCode: number, action: number): void;
        handler$bnd001$vista$supp$onKeyPressCancellable(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        handler$dke000$emi$onChar(window: number, codePoint: number, modifiers: number, info: $CallbackInfo): void;
        handler$dke000$emi$onKey(window: number, key: number, scancode: number, action: number, modifiers: number, info: $CallbackInfo): void;
        getClipboard(): string;
        handler$zpj000$veil$handleChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$zpj000$veil$printChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$jfb000$dashpanels$panels$keyPress(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        static DEBUG_CRASH_TIME: number;
        constructor(minecraft: $Minecraft);
        set up(value: number);
    }
    export class $StringSplitter$WidthProvider {
    }
    export interface $StringSplitter$WidthProvider {
        getWidth(codePoint: number, style: $Style): number;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$WidthProvider}.
     */
    export type $StringSplitter$WidthProvider_ = ((arg0: number, arg1: $Style) => number);
    export class $ResourceLoadStateTracker {
        startReload(reloadReason: $ResourceLoadStateTracker$ReloadReason_, packs: $List_<$PackResources>): void;
        startRecovery(error: $Throwable): void;
        fillCrashReport(report: $CrashReport): void;
        finishReload(): void;
        constructor();
    }
    export class $StringSplitter$LineBreakFinder implements $FormattedCharSink {
    }
    export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
        static values(): $ResourceLoadStateTracker$ReloadReason[];
        static valueOf(arg0: string): $ResourceLoadStateTracker$ReloadReason;
        static INITIAL: $ResourceLoadStateTracker$ReloadReason;
        static MANUAL: $ResourceLoadStateTracker$ReloadReason;
        static UNKNOWN: $ResourceLoadStateTracker$ReloadReason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoadStateTracker$ReloadReason}.
     */
    export type $ResourceLoadStateTracker$ReloadReason_ = "initial" | "manual" | "unknown";
    export class $OptionInstance$SliderableOrCyclableValueSet<T> {
    }
    export interface $OptionInstance$SliderableOrCyclableValueSet<T> extends $OptionInstance$CycleableValueSet<T>, $OptionInstance$SliderableValueSet<T> {
    }
    export class $OptionInstance$ValueSet<T> {
    }
    export interface $OptionInstance$ValueSet<T> {
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
        validateValue(value: T): (T) | undefined;
        codec(): $Codec<T>;
    }
    export class $ComponentCollector {
        reset(): void;
        append(part: $FormattedText): void;
        getResult(): $FormattedText;
        getResultOrEmpty(): $FormattedText;
        constructor();
        get result(): $FormattedText;
        get resultOrEmpty(): $FormattedText;
    }
    export class $ClientBrandRetriever {
        static getClientModName(): string;
        static VANILLA_NAME: string;
        constructor();
        static get clientModName(): string;
    }
    export class $OptionInstance$AltEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        altCondition(): $BooleanSupplier;
        altValues(): $List<T>;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$AltEnum}.
     */
    export type $OptionInstance$AltEnum_<T> = { valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, codec?: $Codec<any>, altValues?: $List_<any>, values?: $List_<any>, altCondition?: $BooleanSupplier_,  } | [valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, codec?: $Codec<any>, altValues?: $List_<any>, values?: $List_<any>, altCondition?: $BooleanSupplier_, ];
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter implements $StringSplitterAccessor {
        stringWidth(content: $FormattedCharSequence_): number;
        stringWidth(content: $FormattedText): number;
        stringWidth(content: string | null): number;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: string, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: string, maxWidth: number, style: $Style, withNewLines: boolean, linePos: $StringSplitter$LinePosConsumer_): void;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, prefix: $FormattedText): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, splitifier: $BiConsumer_<$FormattedText, boolean>): void;
        componentStyleAtWidth(content: $FormattedCharSequence_, maxWidth: number): $Style;
        componentStyleAtWidth(content: $FormattedText, maxWidth: number): $Style;
        plainHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        headByWidth(content: $FormattedText, maxWidth: number, style: $Style): $FormattedText;
        static getWordPosition(content: string, skipCount: number, cursorPoint: number, includeWhitespace: boolean): number;
        plainTailByWidth(content: string, maxWidth: number, style: $Style): string;
        plainIndexAtWidth(content: string, maxWidth: number, style: $Style): number;
        findLineBreak(content: string, maxWidth: number, style: $Style): number;
        formattedIndexByWidth(content: string, maxWidth: number, style: $Style): number;
        formattedHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        getWidthProvider(): $StringSplitter$WidthProvider;
        widthProvider: $StringSplitter$WidthProvider;
        constructor(widthProvider: $StringSplitter$WidthProvider_);
    }
    export class $PeriodicNotificationManager$NotificationTask extends $TimerTask {
    }
    export class $KeyMapping implements $Comparable<$KeyMapping>, $IKeyMappingExtension, $AccessKeyMapping, $KeyMappingsAccessor, $KeyMappingInvoker, $KeyBindingAccessor, $KeyBindingAccessor$1 {
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDefault(): boolean;
        getName(): string;
        compareTo(arg0: $KeyMapping): number;
        matches(keysym: number, scancode: number): boolean;
        static set(key: $InputConstants$Key, held: boolean): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static setAll(): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static releaseAll(): void;
        /**
         * Returns `true` if the `KeyMapping` is set to a mouse key and the key matches.
         */
        matchesMouse(key: number): boolean;
        handler$jjb000$axiom$isDown(cir: $CallbackInfoReturnable<any>): void;
        handler$jjb000$axiom$isPressed(cir: $CallbackInfoReturnable<any>): void;
        setKey(key: $InputConstants$Key): void;
        getCategory(): string;
        static click(key: $InputConstants$Key): void;
        setDown(value: boolean): void;
        saveString(): string;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getTranslatedKeyMessage(): $Component;
        getKeyConflictContext(): $IKeyConflictContext;
        setKeyConflictContext(keyConflictContext: $IKeyConflictContext): void;
        getDefaultKeyModifier(): $KeyModifier;
        setKeyModifierAndCode(keyModifier: $KeyModifier_, keyCode: $InputConstants$Key): void;
        getKeyModifier(): $KeyModifier;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetMapping(): void;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        same(binding: $KeyMapping): boolean;
        /**
         * Returns a supplier which gets a keybind's current binding (eg, `key.forward` returns W by default), or the keybind's name if no such keybind exists (eg, `key.invalid` returns key.invalid)
         */
        static createNameSupplier(key: string): $Supplier<$Component>;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        consumeClick(): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDown(): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isUnbound(): boolean;
        getDefaultKey(): $InputConstants$Key;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetToggleKeys(): void;
        static fabric_getCategoryMap$fabric_key_binding_api_v1_$md$707fe4$0(): $Map<any, any>;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getDisplayName(): $Component;
        /**
         * @return true if the key conflict context and modifier are active and the keyCode matches this binding, false otherwise
         */
        isActiveAndMatches(keyCode: $InputConstants$Key): boolean;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        setToDefault(): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isConflictContextAndModifierActive(): boolean;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        hasKeyModifierConflict(binding: $KeyMapping): boolean;
        getKey(): $InputConstants$Key;
        fabric_getTimesPressed(): number;
        fabric_getBoundKey(): $InputConstants$Key;
        controlling$getKey(): $InputConstants$Key;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        invokeRelease(): void;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_SORT_ORDER: $Map<string, number>;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        defaultKey: $InputConstants$Key;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(name: string, type: $InputConstants$Type_, keyCode: number, category: string);
        constructor(name: string, keyCode: number, category: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        get default(): boolean;
        get name(): string;
        get category(): string;
        get translatedKeyMessage(): $Component;
        get defaultKeyModifier(): $KeyModifier;
        get keyModifier(): $KeyModifier;
        get unbound(): boolean;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaTicks(): number;
        constructor(value: number);
        get realtimeDeltaTicks(): number;
        get gameTimeDeltaTicks(): number;
    }
    export class $Options$FieldAccess {
    }
    export interface $Options$FieldAccess extends $Options$OptionAccess {
        process<T>(name: string, value: T, stringValuefier: $Function_<string, T>, valueStringifier: $Function_<T, string>): T;
        process(name: string, value: number): number;
        process(name: string, value: string): string;
        process(name: string, value: boolean): boolean;
        process(name: string, value: number): number;
    }
    export class $DebugQueryHandler {
        queryEntityTag(entId: number, tag: $Consumer_<$CompoundTag>): void;
        queryBlockEntityTag(pos: $BlockPos_, tag: $Consumer_<$CompoundTag>): void;
        handleResponse(transactionId: number, tag: $CompoundTag_ | null): boolean;
        constructor(connection: $ClientPacketListener);
    }
    export class $NarratorStatus extends $Enum<$NarratorStatus> {
        getName(): $Component;
        static values(): $NarratorStatus[];
        static valueOf(arg0: string): $NarratorStatus;
        getId(): number;
        shouldNarrateSystem(): boolean;
        shouldNarrateChat(): boolean;
        static byId(id: number): $NarratorStatus;
        static SYSTEM: $NarratorStatus;
        static ALL: $NarratorStatus;
        static CHAT: $NarratorStatus;
        static OFF: $NarratorStatus;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NarratorStatus}.
     */
    export type $NarratorStatus_ = "off" | "all" | "chat" | "system";
    export class $ResourceLoadStateTracker$RecoveryInfo {
    }
    export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
        static values(): $Minecraft$ChatStatus[];
        static valueOf(arg0: string): $Minecraft$ChatStatus;
        getMessage(): $Component;
        isChatAllowed(isLocalServer: boolean): boolean;
        static DISABLED_BY_OPTIONS: $Minecraft$ChatStatus;
        static INFO_DISABLED_BY_PROFILE: $Component;
        static DISABLED_BY_PROFILE: $Minecraft$ChatStatus;
        static ENABLED: $Minecraft$ChatStatus;
        static DISABLED_BY_LAUNCHER: $Minecraft$ChatStatus;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$ChatStatus}.
     */
    export type $Minecraft$ChatStatus_ = "enabled" | "disabled_by_options" | "disabled_by_launcher" | "disabled_by_profile";
    export class $OptionInstance$CaptionBasedToString<T> {
    }
    export interface $OptionInstance$CaptionBasedToString<T> {
        toString(caption: $Component_, value: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CaptionBasedToString}.
     */
    export type $OptionInstance$CaptionBasedToString_<T> = ((arg0: $Component, arg1: T) => $Component_);
    export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
        static values(): $ParticleStatus[];
        static valueOf(arg0: string): $ParticleStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ParticleStatus;
        getCaption(): $Component;
        static ALL: $ParticleStatus;
        static DECREASED: $ParticleStatus;
        static MINIMAL: $ParticleStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ParticleStatus}.
     */
    export type $ParticleStatus_ = "all" | "decreased" | "minimal";
    export class $OptionInstance$CycleableValueSet$ValueSetter<T> {
    }
    export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
        set(instance: $OptionInstance<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CycleableValueSet$ValueSetter}.
     */
    export type $OptionInstance$CycleableValueSet$ValueSetter_<T> = ((arg0: $OptionInstance<T>, arg1: T) => void);
    export class $OptionInstance$CycleableValueSet<T> {
    }
    export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
}
