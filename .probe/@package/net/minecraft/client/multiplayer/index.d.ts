import { $ServerLinks, $ServerLinks_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $PanoramaRenderer, $CubeMap, $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $XaeroMinimapSession } from "@package/xaero/common";
import { $ClientLevelExt } from "@package/com/moulberry/axiom/hooks";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $InetSocketAddress, $URL } from "@package/java/net";
import { $DisconnectionDetails_, $ServerboundPacketListener, $TickablePacketListener, $Connection, $FriendlyByteBuf, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $PlayerChatMessage_, $RemoteChatSession, $SignedMessageChain$Encoder, $PlayerChatMessage, $RemoteChatSession_, $SignedMessageValidator, $LocalChatSession, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LevelChunk, $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $VeilClientSuggestionProvider } from "@package/foundry/veil/ext";
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$ElementSuggestionType_, $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $IXaeroMinimapClientWorld, $MinimapClientWorldData } from "@package/xaero/common/minimap/mcworld";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $IWorldMapClientPlayNetHandler } from "@package/xaero/map/core";
import { $ServerStatus$Players } from "@package/net/minecraft/network/protocol/status";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $PredictiveAction_, $BlockStatePredictionHandler } from "@package/net/minecraft/client/multiplayer/prediction";
import { $UUID_, $Set_, $List, $Collection_, $List_, $UUID, $ArrayList, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $ChunkTrackerHolder, $ChunkTracker } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
import { $ClientboundCookieRequestPacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $HolderLookup$Provider, $RegistryAccess$Frozen, $RegistrySynchronization$PackedRegistryEntry_, $Direction_, $LayeredRegistryAccess, $Holder_, $BlockPos, $BlockPos_, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $FabricClientCommandSource } from "@package/net/fabricmc/fabric/api/client/command/v2";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Iterable, $Thread, $Object, $Exception, $Throwable, $Record, $Runnable_ } from "@package/java/lang";
import { $ClientLoginNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking/client";
import { $BiomeSeedProvider } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $GameRules, $ChunkPos, $ColorResolver_, $GameType, $LevelHeightAccessor, $Level, $GameType_ } from "@package/net/minecraft/world/level";
import { $DebugScreenOverlay, $ChatComponent$State, $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $ClientboundHelloPacket, $ClientboundLoginDisconnectPacket, $ClientboundCustomQueryPacket_, $ClientboundGameProfilePacket_, $ClientboundLoginCompressionPacket, $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $ClientChunkCacheStorageAccessor } from "@package/dev/ryanhcode/sable/mixin/loaded_chunk_debug";
import { $ClientboundPongResponsePacket_ } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapClientPlayNetHandler } from "@package/xaero/common/core";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $ClientPacketListenerAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Screen, $Screen$DeferredTooltipRendering, $ConfirmScreen } from "@package/net/minecraft/client/gui/screens";
import { $ChannelHandlerContext, $SimpleChannelInboundHandler } from "@package/io/netty/channel";
import { $PlayerControllerAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $ClientLoginNetworkHandlerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $IClientChunkCacheExt } from "@package/net/mehvahdjukaar/vista/client";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $DebugQueryHandler, $Minecraft, $NarratorStatus, $User, $ClientRecipeBook } from "@package/net/minecraft/client";
import { $MultiPlayerGameModeAccessor } from "@package/com/moulberry/axiom/mixin";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementTree$Listener, $AdvancementHolder_, $AdvancementTree, $AdvancementHolder, $AdvancementProgress, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Difficulty_, $InteractionResult, $Difficulty } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $ExtendedServerListData } from "@package/net/neoforged/neoforge/client";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $LevelCallback, $EntityTickList, $TransientEntitySectionManager } from "@package/net/minecraft/world/level/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $TooltipFlag, $Item$TooltipContext, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DebugChunkProviderAttachments } from "@package/dev/ryanhcode/sable/mixinterface/loaded_chunk_debug";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $ProfileKeyPair, $Player, $ProfileKeyPair_ } from "@package/net/minecraft/world/entity/player";
import { $Function_ } from "@package/it/unimi/dsi/fastutil";
import { $IWorldMapClientWorld, $WorldMapClientWorldData } from "@package/xaero/map/mcworld";
import { $ClientLevelAccessor } from "@package/dev/ryanhcode/offroad/mixin/client/multimining_destruction_progress";
import { $KnownPack_, $KnownPack, $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ClientPacketListenerKJS, $ClientLevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $Vec3_, $BlockHitResult, $EntityHitResult, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $NetworkHandlerExtensions } from "@package/net/fabricmc/fabric/impl/networking";
import { $LevelPoseProviderExtension } from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
import { $ServerDataExtension } from "@package/com/aizistral/nochatreports/common/core";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ClientboundResourcePackPopPacket_, $ClientboundCustomPayloadPacket_, $ClientboundPingPacket, $ClientboundCustomReportDetailsPacket_, $ClientboundServerLinksPacket_, $ClientboundStoreCookiePacket_, $ClientboundTransferPacket_, $ClientboundDisconnectPacket_, $ClientboundKeepAlivePacket, $ClientCommonPacketListener, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $SuggestionsBuilder, $Suggestions } from "@package/com/mojang/brigadier/suggestion";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $Pose3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetActionBarTextPacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundTakeItemEntityPacket, $ClientboundSetExperiencePacket, $ClientboundStartConfigurationPacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundPlayerCombatEndPacket, $ClientboundBlockChangedAckPacket_, $ClientboundRemoveEntitiesPacket, $ClientboundSetCameraPacket, $ClientboundSetEquipmentPacket, $ClientboundPlayerPositionPacket, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundAwardStatsPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetTitlesAnimationPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundCommandsPacket, $ClientboundLevelParticlesPacket, $ClientboundLevelEventPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundContainerSetSlotPacket, $ClientboundTabListPacket_, $ClientboundMerchantOffersPacket, $ClientboundSetScorePacket_, $ClientboundTeleportEntityPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundMoveVehiclePacket, $ClientboundSetTitleTextPacket_, $ClientboundTickingStatePacket_, $ClientboundPlayerLookAtPacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundLightUpdatePacket, $ClientboundBlockDestructionPacket, $ClientboundOpenBookPacket, $ClientboundBlockUpdatePacket, $ClientboundStopSoundPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundLoginPacket_, $ClientboundSetEntityLinkPacket, $ClientboundRespawnPacket_, $ClientboundRecipePacket, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundContainerClosePacket, $ClientboundSetObjectivePacket, $ClientboundSetEntityDataPacket_, $ClientboundPlaceGhostRecipePacket, $ClientboundHorseScreenOpenPacket, $ClientboundClearTitlesPacket, $ClientboundProjectilePowerPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetHealthPacket, $ClientboundSetEntityMotionPacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundOpenScreenPacket, $ClientboundBundlePacket, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundPlayerAbilitiesPacket, $ClientboundBlockEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ICapabilityProvider_, $ICapableObject, $ICapabilityProvider } from "@package/xaero/pac/common/capability";
import { $ClientboundUpdateEnabledFeaturesPacket_, $ClientboundFinishConfigurationPacket, $ClientboundResetChatPacket, $ClientConfigurationPacketListener, $ClientboundRegistryDataPacket_, $ClientboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $Stream } from "@package/java/util/stream";
import { $WorldSessionTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $AccessorClientPacketListener } from "@package/com/aizistral/nochatreports/common/mixins/client";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $WorldMapSession } from "@package/xaero/map";
import { $IClientLevel, $ClientLevelData } from "@package/xaero/lib/client/level";
import { $ClientWorldAccessor } from "@package/net/caffeinemc/mods/lithium/common/client";
import { $Scoreboard, $PlayerTeam } from "@package/net/minecraft/world/scores";
import { $Font } from "@package/net/minecraft/client/gui";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ClientLevelAccessor as $ClientLevelAccessor$1 } from "@package/rbasamoyai/createbigcannons/mixin/client";
export * as chat from "@package/net/minecraft/client/multiplayer/chat";
export * as resolver from "@package/net/minecraft/client/multiplayer/resolver";
export * as prediction from "@package/net/minecraft/client/multiplayer/prediction";

declare module "@package/net/minecraft/client/multiplayer" {
    export class $SessionSearchTrees$Key {
        constructor();
    }
    export class $TagCollector {
        append(registryKey: $ResourceKey_<$Registry<never>>, networkPayload: $TagNetworkSerialization$NetworkPayload): void;
        updateTags(registryAccess: $RegistryAccess, isMemoryConnection: boolean): void;
        constructor();
    }
    export class $ServerData$State extends $Enum<$ServerData$State> {
        static values(): $ServerData$State[];
        static valueOf(arg0: string): $ServerData$State;
        static PINGING: $ServerData$State;
        static SUCCESSFUL: $ServerData$State;
        static INITIAL: $ServerData$State;
        static INCOMPATIBLE: $ServerData$State;
        static UNREACHABLE: $ServerData$State;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$State}.
     */
    export type $ServerData$State_ = "initial" | "pinging" | "unreachable" | "incompatible" | "successful";
    export class $AccountProfileKeyPairManager implements $ProfileKeyPairManager {
        shouldRefreshKeyPair(): boolean;
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        constructor(userApiService: $UserApiService, uuid: $UUID_, gameDirectory: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler {
        handleDisconnect(): void;
        tick(): void;
        handleConfigurationFinished(packet: $ClientboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(packet: $ClientboundSelectKnownPacks_): void;
        handleEnabledFeatures(packet: $ClientboundUpdateEnabledFeaturesPacket_): void;
        handler$gap000$fabric_networking_api_v1$handleComplete(arg0: $ClientboundFinishConfigurationPacket, arg1: $CallbackInfo): void;
        handleRegistryData(packet: $ClientboundRegistryDataPacket_): void;
        handleResetChat(packet: $ClientboundResetChatPacket): void;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        connection: $Connection;
        chatState: $ChatComponent$State;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
    }
    export class $ClientHandshakePacketListenerImpl$State extends $Enum<$ClientHandshakePacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ClientHandshakePacketListenerImpl$State}.
     */
    export type $ClientHandshakePacketListenerImpl$State_ = "connecting" | "authorizing" | "encrypting" | "joining";
    export class $LevelLoadStatusManager {
        levelReady(): boolean;
        tick(): void;
        loadingPacketsReceived(): void;
        constructor(player: $LocalPlayer, level: $ClientLevel, levelRenderer: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $AccessorClientPacketListener, $ClientPacketListenerAccessor, $IXaeroMinimapClientPlayNetHandler, $IWorldMapClientPlayNetHandler, $ClientPacketListenerKJS {
        getId(): $UUID;
        close(): void;
        handler$jch000$parcool$onHandlePlayerInfoUpdate(arg0: $ClientboundPlayerInfoUpdatePacket, arg1: $CallbackInfo): void;
        handler$eaf000$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        handler$fon000$computercraft$commandUnsigned(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        handler$jch000$parcool$onHandlePlayerInfoRemove(arg0: $ClientboundPlayerInfoRemovePacket_, arg1: $CallbackInfo): void;
        handler$gjd001$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ClientLevel;
        getOnlinePlayerIds(): $Collection<$UUID>;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        handleDisconnect(): void;
        serverLinks(): $ServerLinks;
        sendChat(message: string): void;
        handler$bdg000$chat_heads$chatheads$captureSenderInfo(packet: $ClientboundPlayerChatPacket_, ci: $CallbackInfo, senderInfo: $LocalRef<any>): void;
        modify$bdg000$chat_heads$chatheads$rememberSenderInfo(playerChatMessage: $PlayerChatMessage_, senderInfo: $LocalRef<any>): $PlayerChatMessage;
        handler$elj001$xaeroworldmap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$eaf000$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$elj001$xaeroworldmap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$eaf000$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$eaf000$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$elj001$xaeroworldmap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        sendUnsignedCommand(command: string): boolean;
        tick(): void;
        handleTagQueryPacket(packet: $ClientboundTagQueryPacket): void;
        handlePlayerCombatEnd(packet: $ClientboundPlayerCombatEndPacket): void;
        /**
         * Invoked when the server registers new proximate objects in your watchlist or when objects in your watchlist have changed -> Registers any changes locally
         */
        handleSetEntityData(packet: $ClientboundSetEntityDataPacket_): void;
        /**
         * Updates an entity's position and rotation as specified by the packet
         */
        handleTeleportEntity(packet: $ClientboundTeleportEntityPacket): void;
        /**
         * Sets the velocity of the specified entity to the specified value
         */
        handleSetEntityMotion(packet: $ClientboundSetEntityMotionPacket): void;
        handlePlayerCombatEnter(packet: $ClientboundPlayerCombatEnterPacket): void;
        /**
         * Updates all registered IWorldAccess instances with destroyBlockInWorldPartially
         */
        handleBlockDestruction(packet: $ClientboundBlockDestructionPacket): void;
        handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_): void;
        handleRemoveEntities(packet: $ClientboundRemoveEntitiesPacket): void;
        handleHorseScreenOpen(packet: $ClientboundHorseScreenOpenPacket): void;
        /**
         * Handles picking up an ItemStack or dropping one in your inventory or an open (non-creative) container
         */
        handleContainerSetSlot(packet: $ClientboundContainerSetSlotPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCommandSuggestions(packet: $ClientboundCommandSuggestionsPacket_): void;
        /**
         * Received from the servers PlayerManager if between 1 and 64 blocks in a chunk are changed. If only one block requires an update, the server sends S23PacketBlockChange and if 64 or more blocks are changed, the server sends S21PacketChunkData
         */
        handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket): void;
        handleTakeItemEntity(packet: $ClientboundTakeItemEntityPacket): void;
        handleSetExperience(packet: $ClientboundSetExperiencePacket): void;
        /**
         * Updates the NBTTagCompound metadata of instances of the following entitytypes: Mob spawners, command blocks, beacons, skulls, flowerpot
         */
        handleBlockEntityData(packet: $ClientboundBlockEntityDataPacket): void;
        /**
         * Sets the progressbar of the opened window to the specified value
         */
        handleContainerSetData(packet: $ClientboundContainerSetDataPacket): void;
        handleConfigurationStart(packet: $ClientboundStartConfigurationPacket): void;
        handleDisguisedChat(packet: $ClientboundDisguisedChatPacket_): void;
        handleEntityLinkPacket(packet: $ClientboundSetEntityLinkPacket): void;
        /**
         * Spawns an experience orb and sets its value (amount of XP)
         */
        handleAddExperienceOrb(packet: $ClientboundAddExperienceOrbPacket): void;
        /**
         * Creates a sign in the specified location if it didn't exist and opens the GUI to edit its text
         */
        handleOpenSignEditor(packet: $ClientboundOpenSignEditorPacket): void;
        handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket): void;
        handleStopSoundEvent(packet: $ClientboundStopSoundPacket): void;
        handleUpdateRecipes(packet: $ClientboundUpdateRecipesPacket): void;
        handleAddOrRemoveRecipes(packet: $ClientboundRecipePacket): void;
        handleHurtAnimation(packet: $ClientboundHurtAnimationPacket_): void;
        /**
         * Handles the placement of a specified ItemStack in a specified container/inventory slot
         */
        handleContainerContent(packet: $ClientboundContainerSetContentPacket): void;
        handleUpdateMobEffect(packet: $ClientboundUpdateMobEffectPacket): void;
        /**
         * Updates which hotbar slot of the player is currently selected
         */
        handleSetCarriedItem(packet: $ClientboundSetCarriedItemPacket): void;
        /**
         * Resets the ItemStack held in hand and closes the window that is opened
         */
        handleContainerClose(packet: $ClientboundContainerClosePacket): void;
        handleTabListCustomisation(packet: $ClientboundTabListPacket_): void;
        handleSetBorderCenter(packet: $ClientboundSetBorderCenterPacket): void;
        handlePlayerAbilities(packet: $ClientboundPlayerAbilitiesPacket): void;
        /**
         * Spawns a specified number of particles at the specified location with a randomized displacement according to specified bounds
         */
        handleParticleEvent(packet: $ClientboundLevelParticlesPacket): void;
        handleSetBorderSize(packet: $ClientboundSetBorderSizePacket): void;
        handlePlayerInfoUpdate(packet: $ClientboundPlayerInfoUpdatePacket): void;
        /**
         * Updates en entity's attributes and their respective modifiers, which are used for speed bonuses (player sprinting, animals fleeing, baby speed), weapon/tool attackDamage, hostiles followRange randomization, zombie maxHealth and knockback resistance as well as reinforcement spawning chance.
         */
        handleUpdateAttributes(packet: $ClientboundUpdateAttributesPacket): void;
        handleSetChunkCacheRadius(packet: $ClientboundSetChunkCacheRadiusPacket): void;
        handlePlayerInfoRemove(packet: $ClientboundPlayerInfoRemovePacket_): void;
        handleSetChunkCacheCenter(packet: $ClientboundSetChunkCacheCenterPacket): void;
        handleChunkBatchStart(packet: $ClientboundChunkBatchStartPacket): void;
        getDebugQueryHandler(): $DebugQueryHandler;
        handleInitializeBorder(packet: $ClientboundInitializeBorderPacket): void;
        handleLightUpdatePacket(packet: $ClientboundLightUpdatePacket): void;
        /**
         * Removes or sets the ScoreObjective to be displayed at a particular scoreboard position (list, sidebar, below name)
         */
        handleSetDisplayObjective(packet: $ClientboundSetDisplayObjectivePacket): void;
        handleChangeDifficulty(packet: $ClientboundChangeDifficultyPacket): void;
        handleMerchantOffers(packet: $ClientboundMerchantOffersPacket): void;
        /**
         * Updates a team managed by the scoreboard: Create/Remove the team registration, Register/Remove the player-team-memberships, Set team displayname/prefix/suffix and/or whether friendly fire is enabled
         */
        handleSetPlayerTeamPacket(packet: $ClientboundSetPlayerTeamPacket): void;
        handleChunkBatchFinished(packet: $ClientboundChunkBatchFinishedPacket_): void;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        markMessageAsProcessed(chatMessage: $PlayerChatMessage_, acknowledged: boolean): void;
        handleSetBorderLerpSize(packet: $ClientboundSetBorderLerpSizePacket): void;
        handleSoundEntityEvent(packet: $ClientboundSoundEntityPacket): void;
        handlePlayerCombatKill(packet: $ClientboundPlayerCombatKillPacket_): void;
        handleRemoveMobEffect(packet: $ClientboundRemoveMobEffectPacket_): void;
        getXaero_serverChunkRadius(): number;
        getXaero_worldmapSession(): $WorldMapSession;
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        getXaero_minimapSession(): $XaeroMinimapSession;
        handler$jii000$axiom$handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_, ci: $CallbackInfo): void;
        handler$eaf000$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$eaf000$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$iek000$distanthorizons$onCleanupStart(ci: $CallbackInfo): void;
        handler$iek000$distanthorizons$onHandleLoginEnd(ci: $CallbackInfo): void;
        handler$eaf000$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$jii000$axiom$handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket, ci: $CallbackInfo): void;
        handler$jii000$axiom$handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket, ci: $CallbackInfo): void;
        handler$elj001$xaeroworldmap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$elj001$xaeroworldmap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$jii000$axiom$handleConfigurationStart(ci: $CallbackInfo): void;
        handler$elj001$xaeroworldmap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        getLocalGameProfile(): $GameProfile;
        handleGameEvent(packet: $ClientboundGameEventPacket): void;
        /**
         * Invokes the entities' handleUpdateHealth method which is implemented in LivingBase (hurt/death), MinecartMobSpawner (spawn delay), FireworkRocket & MinecartTNT (explosion), IronGolem (throwing, ...), Witch (spawn particles), Zombie (villager transformation), Animal (breeding mode particles), Horse (breeding/smoke particles), Sheep (...), Tameable (...), Villager (particles for breeding mode, angry and happy), Wolf (...)
         */
        handleEntityEvent(packet: $ClientboundEntityEventPacket): void;
        handleDamageEvent(packet: $ClientboundDamageEventPacket_): void;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        enabledFeatures(): $FeatureFlagSet;
        getAdvancements(): $ClientAdvancements;
        registryAccess(): $RegistryAccess$Frozen;
        getServerData(): $ServerData;
        updateSearchTrees(): void;
        getRecipeManager(): $RecipeManager;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        handleBlockChangedAck(packet: $ClientboundBlockChangedAckPacket_): void;
        handler$elj000$xaeroworldmap$onCleanup(arg0: $CallbackInfo): void;
        handler$jii000$axiom$handleSetEntityData(clientboundSetEntityDataPacket: $ClientboundSetEntityDataPacket_, ci: $CallbackInfo): void;
        handler$jii000$axiom$handleSetCarriedItem(clientboundSetCarriedItemPacket: $ClientboundSetCarriedItemPacket, ci: $CallbackInfo): void;
        handler$jii000$axiom$handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_, ci: $CallbackInfo): void;
        handler$elj001$xaeroworldmap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$ell001$xaeroworldmap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$eaf000$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$eaf000$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$jii000$axiom$handleBlockUpdate(packet: $ClientboundBlockUpdatePacket, ci: $CallbackInfo): void;
        handler$eaf000$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        handler$eaf002$xaerominimap$onClose(arg0: $CallbackInfo): void;
        handler$zdd000$openpartiesandclaims$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        scoreboard(): $Scoreboard;
        handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_): void;
        handleSetTime(packet: $ClientboundSetTimePacket): void;
        handleTickingStep(packet: $ClientboundTickingStepPacket_): void;
        handleSetSpawn(packet: $ClientboundSetDefaultSpawnPositionPacket): void;
        /**
         * Initiates a new explosion (sound, particles, drop spawn) for the affected blocks indicated by the packet.
         */
        handleExplosion(packet: $ClientboundExplodePacket): void;
        /**
         * Renders a specified animation: Waking up a player, a living entity swinging its currently held item, being hurt or receiving a critical hit by normal or magical means
         */
        handleAnimate(packet: $ClientboundAnimatePacket): void;
        /**
         * Updates the direction in which the specified entity is looking, normally this head rotation is independent of the rotation of the entity itself
         */
        handleRotateMob(packet: $ClientboundRotateHeadPacket): void;
        /**
         * Updates the block and metadata and generates a blockupdate (and notify the clients)
         */
        handleBlockUpdate(packet: $ClientboundBlockUpdatePacket): void;
        handlePlayerChat(packet: $ClientboundPlayerChatPacket_): void;
        kjs$sessionData(): $KubeSessionData;
        /**
         * Registers some server properties (gametype, hardcore-mode, terraintype, difficulty, player limit), creates a new WorldClient and sets the player initial dimension.
         */
        handleLogin(packet: $ClientboundLoginPacket_): void;
        /**
         * Spawns an instance of the objecttype indicated by the packet and sets its position and momentum
         */
        handleAddEntity(packet: $ClientboundAddEntityPacket): void;
        /**
         * Updates the specified entity's position by the specified relative momentum and absolute rotation. Note that subclassing of the packet allows for the specification of a subset of this data (e.g. only rel. position, abs. rotation or both).
         */
        handleMoveEntity(packet: $ClientboundMoveEntityPacket): void;
        handleSystemChat(packet: $ClientboundSystemChatPacket_): void;
        handleTickingState(packet: $ClientboundTickingStatePacket_): void;
        handleDeleteChat(packet: $ClientboundDeleteChatPacket_): void;
        handleSetHealth(packet: $ClientboundSetHealthPacket): void;
        searchTrees(): $SessionSearchTrees;
        handleMovePlayer(packet: $ClientboundPlayerPositionPacket): void;
        handleRespawn(packet: $ClientboundRespawnPacket_): void;
        handleSetEquipment(packet: $ClientboundSetEquipmentPacket): void;
        handleServerData(packet: $ClientboundServerDataPacket_): void;
        setActionBarText(packet: $ClientboundSetActionBarTextPacket_): void;
        setTitleText(packet: $ClientboundSetTitleTextPacket_): void;
        setSubtitleText(packet: $ClientboundSetSubtitleTextPacket_): void;
        handleOpenScreen(packet: $ClientboundOpenScreenPacket): void;
        handleLevelEvent(packet: $ClientboundLevelEventPacket): void;
        handleCommands(packet: $ClientboundCommandsPacket): void;
        /**
         * Updates the players statistics or achievements
         */
        handleAwardStats(packet: $ClientboundAwardStatsPacket_): void;
        /**
         * Triggers Block.onBlockEventReceived, which is implemented in BlockPistonBase for extension/retraction, BlockNote for setting the instrument (including audiovisual feedback) and in BlockContainer to set the number of players accessing a (Ender)Chest
         */
        handleBlockEvent(packet: $ClientboundBlockEventPacket): void;
        handleTitlesClear(packet: $ClientboundClearTitlesPacket): void;
        /**
         * Updates the worlds MapStorage with the specified MapData for the specified map-identifier and invokes a MapItemRenderer for it
         */
        handleMapItemData(packet: $ClientboundMapItemDataPacket_): void;
        handleLookAt(packet: $ClientboundPlayerLookAtPacket): void;
        handleSetCamera(packet: $ClientboundSetCameraPacket): void;
        handleOpenBook(packet: $ClientboundOpenBookPacket): void;
        handleItemCooldown(packet: $ClientboundCooldownPacket_): void;
        /**
         * May create a scoreboard objective, remove an objective from the scoreboard or update an objectives' displayname
         */
        handleAddObjective(packet: $ClientboundSetObjectivePacket): void;
        handlePlaceRecipe(packet: $ClientboundPlaceGhostRecipePacket): void;
        handleSoundEvent(packet: $ClientboundSoundPacket): void;
        /**
         * Either updates the score with a specified value or removes the score for an objective
         */
        handleSetScore(packet: $ClientboundSetScorePacket_): void;
        handleResetScore(packet: $ClientboundResetScorePacket_): void;
        setTitlesAnimation(packet: $ClientboundSetTitlesAnimationPacket): void;
        handleBossUpdate(packet: $ClientboundBossEventPacket): void;
        handleMoveVehicle(packet: $ClientboundMoveVehiclePacket): void;
        handlePongResponse(packet: $ClientboundPongResponsePacket_): void;
        handleDebugSample(packet: $ClientboundDebugSamplePacket_): void;
        isFeatureEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        handleBundlePacket(packet: $ClientboundBundlePacket): void;
        setKeyPair(keyPair: $ProfileKeyPair_): void;
        handler$emn000$bookshelf$onInit(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_, arg3: $CallbackInfo): void;
        handler$jii000$axiom$handleLogin(clientboundLoginPacket: $ClientboundLoginPacket_, ci: $CallbackInfo): void;
        handleCustomChatCompletions(packet: $ClientboundCustomChatCompletionsPacket_): void;
        handleSetEntityPassengersPacket(packet: $ClientboundSetPassengersPacket): void;
        handleSetBorderWarningDelay(packet: $ClientboundSetBorderWarningDelayPacket): void;
        handleSetBorderWarningDistance(packet: $ClientboundSetBorderWarningDistancePacket): void;
        handler$jii000$axiom$handleRespawn(clientboundRespawnPacket: $ClientboundRespawnPacket_, ci: $CallbackInfo): void;
        handleSelectAdvancementsTab(packet: $ClientboundSelectAdvancementsTabPacket): void;
        handleUpdateAdvancementsPacket(packet: $ClientboundUpdateAdvancementsPacket): void;
        handleSetSimulationDistance(packet: $ClientboundSetSimulationDistancePacket_): void;
        handleProjectilePowerPacket(packet: $ClientboundProjectilePowerPacket): void;
        handler$jii000$axiom$handleSetTime(clientboundSetTimePacket: $ClientboundSetTimePacket, ci: $CallbackInfo): void;
        clearLevel(): void;
        /**
         * Gets the client's description information about another player on the server.
         */
        getPlayerInfo(name: string): $PlayerInfo;
        getPlayerInfo(uniqueId: $UUID_): $PlayerInfo;
        sendCommand(message: string): void;
        potionBrewing(): $PotionBrewing;
        invokeParseCommand(command: string): $ParseResults<$SharedSuggestionProvider>;
        catnip$getServerChunkRadius(): number;
        xaero_worldmapSession: $WorldMapSession;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        serverChunkRadius: number;
        signedMessageEncoder: $SignedMessageChain$Encoder;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        xaero_minimapSession: $XaeroMinimapSession;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverCookies: $Map<$ResourceLocation, number[]>;
        chatSession: $LocalChatSession;
        connection: $Connection;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get id(): $UUID;
        get level(): $ClientLevel;
        get onlinePlayerIds(): $Collection<$UUID>;
        get onlinePlayers(): $Collection<$PlayerInfo>;
        get debugQueryHandler(): $DebugQueryHandler;
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
        get xaero_serverChunkRadius(): number;
        get localGameProfile(): $GameProfile;
        get advancements(): $ClientAdvancements;
        get recipeManager(): $RecipeManager;
        get suggestionsProvider(): $ClientSuggestionProvider;
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        set keyPair(value: $ProfileKeyPair_);
    }
    export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
        getName(): $Component;
        static values(): $ServerData$ServerPackStatus[];
        static valueOf(arg0: string): $ServerData$ServerPackStatus;
        static DISABLED: $ServerData$ServerPackStatus;
        static PROMPT: $ServerData$ServerPackStatus;
        static ENABLED: $ServerData$ServerPackStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$ServerPackStatus}.
     */
    export type $ServerData$ServerPackStatus_ = "enabled" | "disabled" | "prompt";
    export class $ServerData implements $ServerDataExtension {
        type(): $ServerData$Type;
        /**
         * Returns an NBTTagCompound with the server's name, IP and maybe acceptTextures.
         */
        write(): $CompoundTag;
        /**
         * Takes an NBTTagCompound with 'name' and 'ip' keys, returns a ServerData instance.
         */
        static read(nbtCompound: $CompoundTag_): $ServerData;
        state(): $ServerData$State;
        setState(state: $ServerData$State_): void;
        copyFrom(serverData: $ServerData): void;
        setPreventsChatReports(arg0: boolean): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        preventsChatReports(): boolean;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        setIconBytes(iconBytes: number[] | null): void;
        static validateIcon(icon: number[] | null): number[];
        copyNameIconFrom(serverData: $ServerData): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isLan(): boolean;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isRealm(): boolean;
        setResourcePackStatus(packStatus: $ServerData$ServerPackStatus_): void;
        getIconBytes(): number[];
        neoForgeData: $ExtendedServerListData;
        motd: $Component;
        protocol: number;
        players: $ServerStatus$Players;
        ping: number;
        ip: string;
        playerList: $List<$Component>;
        name: string;
        version: $Component;
        status: $Component;
        constructor(name: string, ip: string, type: $ServerData$Type_);
        get lan(): boolean;
        get realm(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        channelRead0(context: $ChannelHandlerContext, buffer: $ByteBuf): void;
        constructor(address: $ServerAddress, output: $LegacyServerPinger$Output_);
    }
    export class $ServerList {
        remove(serverData: $ServerData): void;
        /**
         * Counts the number of ServerData instances in the list.
         */
        size(): number;
        /**
         * Gets the ServerData instance stored for the given index in the list.
         */
        get(index: number): $ServerData;
        get(ip: string): $ServerData;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        load(): void;
        replace(index: number, server: $ServerData): void;
        add(server: $ServerData, hidden: boolean): void;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        save(): void;
        /**
         * Takes two list indexes, and swaps their order around.
         */
        swap(pos1: number, pos2: number): void;
        unhide(ip: string): $ServerData;
        static saveSingleServer(serverData: $ServerData): void;
        constructor(minecraft: $Minecraft);
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ClientChunkCache$Storage implements $ClientChunkCacheStorageAccessor {
        replace(chunkIndex: number, chunk: $LevelChunk, replaceWith: $LevelChunk | null): $LevelChunk;
        replace(chunkIndex: number, chunk: $LevelChunk | null): void;
        getIndex(x: number, z: number): number;
        inRange(x: number, z: number): boolean;
        getChunk(chunkIndex: number): $LevelChunk;
        getChunks(): $AtomicReferenceArray<$LevelChunk>;
        chunkRadius: number;
        viewCenterZ: number;
        chunks: $AtomicReferenceArray<$LevelChunk>;
        chunkCount: number;
        this$0: $ClientChunkCache;
        viewCenterX: number;
        constructor(chunkRadius: $ClientChunkCache, arg1: number);
    }
    export class $ClientLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $PlayerInfo {
        /**
         * Returns the GameProfile for the player represented by this NetworkPlayerInfo instance
         */
        getProfile(): $GameProfile;
        getTabListDisplayName(): $Component;
        setLatency(latency: number): void;
        getLatency(): number;
        getMessageValidator(): $SignedMessageValidator;
        setTabListDisplayName(displayName: $Component_ | null): void;
        setGameMode(gameMode: $GameType_): void;
        setChatSession(chatSession: $RemoteChatSession_): void;
        getChatSession(): $RemoteChatSession;
        getTeam(): $PlayerTeam;
        getSkin(): $PlayerSkin;
        hasVerifiableChat(): boolean;
        clearChatSession(enforcesSecureChat: boolean): void;
        getGameMode(): $GameType;
        constructor(profile: $GameProfile, enforeSecureChat: boolean);
        get profile(): $GameProfile;
        get messageValidator(): $SignedMessageValidator;
        get team(): $PlayerTeam;
        get skin(): $PlayerSkin;
    }
    export class $PingDebugMonitor {
        tick(): void;
        onPongReceived(packet: $ClientboundPongResponsePacket_): void;
        constructor(connection: $ClientPacketListener, delayTimer: $LocalSampleLogger);
    }
    export class $ProfileKeyPairManager {
        static create(userApiService: $UserApiService, user: $User, gameDirectory: $Path_): $ProfileKeyPairManager;
        static EMPTY_KEY_MANAGER: $ProfileKeyPairManager;
    }
    export interface $ProfileKeyPairManager {
        shouldRefreshKeyPair(): boolean;
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
    }
    export class $SessionSearchTrees {
        register(key: $SessionSearchTrees$Key, reloader: $Runnable_): void;
        rebuildAfterLanguageChange(): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        updateCreativeTooltips(registries: $HolderLookup$Provider, items: $List_<$ItemStack_>): void;
        static getTooltipLines(items: $Stream<$ItemStack_>, context: $Item$TooltipContext, tooltipFlag: $TooltipFlag): $Stream<string>;
        recipes(): $SearchTree<$RecipeCollection>;
        updateRecipes(recipeBook: $ClientRecipeBook, registries: $RegistryAccess$Frozen): void;
        updateCreativeTags(items: $List_<$ItemStack_>): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        creativeTagSearch(): $SearchTree<$ItemStack>;
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        static CREATIVE_NAMES: $SessionSearchTrees$Key;
        static CREATIVE_TAGS: $SessionSearchTrees$Key;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest}.
     */
    export type $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest_ = { hash?: string, id?: $UUID_, url?: $URL,  } | [hash?: string, id?: $UUID_, url?: $URL, ];
    export class $ClientAdvancements {
        get(id: $ResourceLocation_): $AdvancementHolder;
        update(packet: $ClientboundUpdateAdvancementsPacket): void;
        getTree(): $AdvancementTree;
        setSelectedTab(advancement: $AdvancementHolder_ | null, tellServer: boolean): void;
        setListener(listener: $ClientAdvancements$Listener | null): void;
        constructor(minecraft: $Minecraft, telemetryManager: $WorldSessionTelemetryManager);
        get tree(): $AdvancementTree;
        set listener(value: $ClientAdvancements$Listener | null);
    }
    export class $MultiPlayerGameMode implements $PlayerControllerAccess, $MultiPlayerGameModeAccessor {
        /**
         * Returns `true` if player is in creative mode.
         */
        isServerControlledInventory(): boolean;
        /**
         * Used in PlayerControllerMP to update the server with an ItemStack in a slot.
         */
        handleCreativeModeItemAdd(stack: $ItemStack_, slotId: number): void;
        continueDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        handleInventoryMouseClick(containerId: number, slotId: number, mouseButton: number, clickType: $ClickType_, player: $Player): void;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        /**
         * Syncs the current player item with the server
         */
        tick(): void;
        getPreviousPlayerMode(): $GameType;
        startDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Syncs the current player item with the server
         */
        stopDestroyBlock(): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        isDestroying(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasInfiniteItems(): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasMissTime(): boolean;
        /**
         * Sets player capabilities depending on current gametype.
         */
        releaseUsingItem(player: $Player): void;
        handlePickItem(index: number): void;
        getPlayerMode(): $GameType;
        /**
         * Returns `true` if player is in creative mode.
         */
        canHurtPlayer(): boolean;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean): $LocalPlayer;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook): $LocalPlayer;
        setLocalMode(localPlayerMode: $GameType_, previousLocalPlayerMode: $GameType_ | null): void;
        /**
         * Sets the game type for the player.
         */
        setLocalMode(type: $GameType_): void;
        /**
         * Sets player capabilities depending on current gametype.
         */
        adjustPlayer(player: $Player): void;
        handlePlaceRecipe(containerId: number, recipe: $RecipeHolder_<never>, shiftDown: boolean): void;
        /**
         * Handles right-clicking an entity, sends a packet to the server.
         */
        interact(player: $Player, target: $Entity, hand: $InteractionHand_): $InteractionResult;
        /**
         * Attacks an entity
         */
        attack(player: $Player, targetEntity: $Entity): void;
        useItem(player: $Player, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $LocalPlayer, hand: $InteractionHand_, result: $BlockHitResult): $InteractionResult;
        /**
         * Handles right-clicking an entity from the entities side, sends a packet to the server.
         */
        interactAt(player: $Player, target: $Entity, ray: $EntityHitResult, hand: $InteractionHand_): $InteractionResult;
        /**
         * Returns `true` if player is in creative mode.
         */
        isAlwaysFlying(): boolean;
        destroyBlock(pos: $BlockPos_): boolean;
        /**
         * Sends a Packet107 to the server to drop the item on the ground
         */
        handleCreativeModeItemDrop(stack: $ItemStack_): void;
        /**
         * GuiEnchantment uses this during multiplayer to tell PlayerControllerMP to send a packet indicating the enchantment action the player has taken.
         */
        handleInventoryButtonClick(containerId: number, buttonId: number): void;
        handler$jjg000$axiom$performUseItemOn(localPlayer: $LocalPlayer, interactionHand: $InteractionHand_, blockHitResult: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$jjg000$axiom$useItemOnReturn(localPlayer: $LocalPlayer, interactionHand: $InteractionHand_, blockHitResult: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$jjg000$axiom$startDestroyBlock(blockPos: $BlockPos_, direction: $Direction_, cir: $CallbackInfoReturnable<any>): void;
        handler$jjg000$axiom$isAlwaysFlying(cir: $CallbackInfoReturnable<any>): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasExperience(): boolean;
        startPrediction(level: $ClientLevel, action: $PredictiveAction_): void;
        sameDestroyTarget(pos: $BlockPos_): boolean;
        getDestroyStage(): number;
        getDestroyProgress(): number;
        getDestroyDelay(): number;
        setDestroyDelay(index: number): void;
        destroyBlockPos: $BlockPos;
        destroyDelay: number;
        static $assertionsDisabled: boolean;
        connection: $ClientPacketListener;
        destroyProgress: number;
        constructor(minecraft: $Minecraft, connection: $ClientPacketListener);
        get serverControlledInventory(): boolean;
        get previousPlayerMode(): $GameType;
        get destroying(): boolean;
        get playerMode(): $GameType;
        get alwaysFlying(): boolean;
        get destroyStage(): number;
    }
    export class $ServerData$Type extends $Enum<$ServerData$Type> {
        static values(): $ServerData$Type[];
        static valueOf(arg0: string): $ServerData$Type;
        static OTHER: $ServerData$Type;
        static LAN: $ServerData$Type;
        static REALM: $ServerData$Type;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$Type}.
     */
    export type $ServerData$Type_ = "lan" | "realm" | "other";
    export class $LegacyServerPinger$Output {
    }
    export interface $LegacyServerPinger$Output {
        handleResponse(version: number, motd: string, players: string, capacity: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LegacyServerPinger$Output}.
     */
    export type $LegacyServerPinger$Output_ = ((arg0: number, arg1: string, arg2: string, arg3: number, arg4: number) => void);
    export class $ClientHandshakePacketListenerImpl implements $ClientLoginPacketListener, $ClientLoginNetworkHandlerAccessor, $NetworkHandlerExtensions {
        handleHello(packet: $ClientboundHelloPacket): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        isAcceptingMessages(): boolean;
        getAddon(): $ClientLoginNetworkAddon;
        setMinigameName(minigameName: string | null): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillCrashReport(crashReport: $CrashReport): void;
        getConnection(): $Connection;
        constructor(connection: $Connection, minecraft: $Minecraft, serverData: $ServerData | null, parent: $Screen | null, newWorld: boolean, worldLoadDuration: $Duration_ | null, updateStatus: $Consumer_<$Component>, cookies: $TransferState_ | null);
        get acceptingMessages(): boolean;
        get addon(): $ClientLoginNetworkAddon;
        set minigameName(value: string | null);
        get connection(): $Connection;
    }
    export class $TransferState extends $Record {
        cookies(): $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Map_<$ResourceLocation_, number[]>);
    }
    /**
     * Values that may be interpreted as {@link $TransferState}.
     */
    export type $TransferState_ = { cookies?: $Map_<$ResourceLocation_, number[]>,  } | [cookies?: $Map_<$ResourceLocation_, number[]>, ];
    export class $DebugSampleSubscriber {
        tick(): void;
        static REQUEST_INTERVAL_MS: number;
        constructor(connection: $ClientPacketListener, debugScreenOverlay: $DebugScreenOverlay);
    }
    export class $ClientAdvancements$Listener {
    }
    export interface $ClientAdvancements$Listener extends $AdvancementTree$Listener {
        onUpdateAdvancementProgress(advancement: $AdvancementNode, advancementProgress: $AdvancementProgress): void;
        onSelectedTabChanged(advancement: $AdvancementHolder_ | null): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendContents(registryKey: $ResourceKey_<$Registry<never>>, registryEntries: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        appendTags(tags: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        collectGameRegistries(resourceProvider: $ResourceProvider_, registryAccess: $RegistryAccess, isMemoryConnection: boolean): $RegistryAccess$Frozen;
        constructor();
    }
    export class $ClientLevel extends $Level implements $ICapableObject, $ClientLevelAccessor$1, $ClientWorldAccessor, $BiomeSeedProvider, $ChunkTrackerHolder, $ClientLevelAccessor, $IXaeroMinimapClientWorld, $IWorldMapClientWorld, $ClientLevelKJS, $IClientLevel, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $LevelPoseProviderExtension, $ClientLevelExt, $LevelHeightAccessor {
        unload(chunk: $LevelChunk): void;
        setServerVerifiedBlockState(pos: $BlockPos_, state: $BlockState_, flags: number): void;
        getServerSimulationDistance(): number;
        setXaero_OPAC_CapabilityProvider(arg0: $ICapabilityProvider_): void;
        getBlockStatePredictionHandler(): $BlockStatePredictionHandler;
        handler$jih006$axiom$onTick(ci: $CallbackInfo): void;
        setSectionDirtyWithNeighbors(posX: number, posY: number, posZ: number): void;
        handler$jih000$axiom$setBlock(blockPos: $BlockPos_, blockState: $BlockState_, i: number, j: number, cir: $CallbackInfoReturnable<any>): void;
        getXaero_OPAC_CapabilityProvider(): $ICapabilityProvider;
        setServerSimulationDistance(sequence: number): void;
        handler$jih000$axiom$onLevelEvent(player: $Player, event: number, blockPos: $BlockPos_, j: number, ci: $CallbackInfo): void;
        effects(): $DimensionSpecialEffects;
        sable$getPlotContainer(): $SubLevelContainer;
        getEntityCount(): number;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        xaerolib_getData(): $ClientLevelData;
        xaerolib_setData(arg0: $ClientLevelData): void;
        tickNonPassenger(entity: $Entity): void;
        setDefaultSpawnPos(spawnPos: $BlockPos_, spawnAngle: number): void;
        sable$getPose(arg0: $SubLevel): $Pose3dc;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $ClientLevel$ClientLevelData;
        /**
         * If on MP, sends a quitting packet.
         */
        tickEntities(): void;
        animateTick(posX: number, posY: number, posZ: number): void;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ClientChunkCache;
        sable$pushPoseSupplier(arg0: $Function_<any, any>): void;
        /**
         * If on MP, sends a quitting packet.
         */
        sable$popPoseSupplier(): void;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
        entitiesForRendering(): $Iterable<$Entity>;
        handleBlockChangedAck(sequence: number): void;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        lithium$getEntityManager(): $TransientEntitySectionManager<any>;
        isLightUpdateQueueEmpty(): boolean;
        sodium$getBiomeZoomSeed(): number;
        getXaero_minimapData(): $MinimapClientWorldData;
        getXaero_worldmapData(): $WorldMapClientWorldData;
        handler$edd000$entityculling$tickEntity(entity: $Entity, info: $CallbackInfo): void;
        handler$hgd000$sable$subLevelAnimateTick(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: $RandomSource, arg5: $Block, arg6: $BlockPos$MutableBlockPos): void;
        handler$jci000$parcool$onSetBlocksDirty(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_, arg3: $CallbackInfo): void;
        wrapOperation$jih000$axiom$onRemoveEntity(instance: $Entity, original: $Operation_<any>): void;
        addMapData(map: $Map_<$MapId_, $MapItemSavedData>): void;
        modifyReturnValue$jih000$axiom$getMarkerParticleTarget(block: $Block): $Block;
        handler$zgh000$tinymultiblocklib$destroyBlockProgress(arg0: number, arg1: $BlockPos_, arg2: number, arg3: $CallbackInfo): void;
        getSkyColor(pos: $Vec3_, partialTick: number): $Vec3;
        getSkyDarken(partialTick: number): number;
        /**
         * Sets the world time.
         */
        setGameTime(time: number): void;
        axiom$isTimeFrozen(): boolean;
        getSkyFlashTime(): number;
        getAllMapData(): $Map<$MapId, $MapItemSavedData>;
        /**
         * If on MP, sends a quitting packet.
         */
        pollLightUpdates(): void;
        getStarBrightness(partialTick: number): number;
        onChunkLoaded(chunkPos: $ChunkPos): void;
        removeEntity(entityId: number, reason: $Entity$RemovalReason_): void;
        doAnimateTick(posX: number, posY: number, posZ: number, range: number, random: $RandomSource, block: $Block | null, blockPos: $BlockPos$MutableBlockPos): void;
        syncBlockState(pos: $BlockPos_, state: $BlockState_, playerPos: $Vec3_): void;
        overrideMapData(mapId: $MapId_, mapData: $MapItemSavedData): void;
        /**
         * If on MP, sends a quitting packet.
         */
        clearTintCaches(): void;
        queueLightUpdate(task: $Runnable_): void;
        getCloudColor(partialTick: number): $Vec3;
        sodium$getTracker(): $ChunkTracker;
        calculateBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        /**
         * Sets the world time.
         */
        setDayTime(time: number): void;
        addEntity(entity: $Entity): void;
        self(): $ClientLevel;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        getLevelRenderer(): $LevelRenderer;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        tickingEntities: $EntityTickList;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        levelRenderer: $LevelRenderer;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(connection: $ClientPacketListener, clientLevelData: $ClientLevel$ClientLevelData, dimension: $ResourceKey_<$Level>, dimensionType: $Holder_<$DimensionType>, viewDistance: number, serverSimulationDistance: number, profiler: $Supplier_<$ProfilerFiller>, levelRenderer: $LevelRenderer, isDebug: boolean, biomeZoomSeed: number);
        get blockStatePredictionHandler(): $BlockStatePredictionHandler;
        get entityCount(): number;
        get chunkSource(): $ClientChunkCache;
        get lightUpdateQueueEmpty(): boolean;
        set gameTime(value: number);
        get skyFlashTime(): number;
        get allMapData(): $Map<$MapId, $MapItemSavedData>;
    }
    export class $ClientRegistryLayer extends $Enum<$ClientRegistryLayer> {
        static values(): $ClientRegistryLayer[];
        static valueOf(arg0: string): $ClientRegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$ClientRegistryLayer>;
        static REMOTE: $ClientRegistryLayer;
        static STATIC: $ClientRegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryLayer}.
     */
    export type $ClientRegistryLayer_ = "static" | "remote";
    export class $ClientLevel$ClientLevelData implements $WritableLevelData {
        getHorizonHeight(level: $LevelHeightAccessor): number;
        setDifficulty(difficulty: $Difficulty_): void;
        setDifficultyLocked(difficultyLocked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        /**
         * Get current world time
         */
        getGameTime(): number;
        /**
         * Get current world time
         */
        getDayTime(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setGameTime(dayTime: number): void;
        setRaining(difficultyLocked: boolean): void;
        setDayTime(dayTime: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        getClearColorScale(): number;
        constructor(difficulty: $Difficulty_, hardcore: boolean, isFlat: boolean);
        get gameRules(): $GameRules;
        get hardcore(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
        get clearColorScale(): number;
    }
    export class $ServerStatusPinger {
        removeAll(): void;
        tick(): void;
        pingServer(serverData: $ServerData, serverListUpdater: $Runnable_, stateUpdater: $Runnable_): void;
        pingLegacyServer(resolvedServerAddress: $InetSocketAddress, serverAddress: $ServerAddress, serverData: $ServerData): void;
        onPingFailed(reason: $Component_, serverData: $ServerData): void;
        static formatPlayerCount(players: number, capacity: number): $Component;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource implements $IClientChunkCacheExt, $DebugChunkProviderAttachments {
        drop(chunkPos: $ChunkPos): void;
        replaceWithPacketData(x: number, z: number, buffer: $FriendlyByteBuf, tag: $CompoundTag_, consumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        replaceBiomes(x: number, z: number, buffer: $FriendlyByteBuf): void;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus, requireChunk: boolean): $LevelChunk;
        updateViewRadius(viewDistance: number): void;
        updateViewCenter(x: number, z: number): void;
        sable$loadedChunks(): $Collection<any>;
        vista$getPinnedChunks(): $Map<any, any>;
        lightEngine: $LevelLightEngine;
        level: $ClientLevel;
        static LOGGER: $Logger;
        storage: $ClientChunkCache$Storage;
        constructor(level: $ClientLevel, viewDistance: number);
    }
    export class $KnownPacksManager {
        createResourceManager(): $CloseableResourceManager;
        modifyReturnValue$gke000$fabric_resource_loader_v0$getCommonKnownPacksReturn(packs: $List_<any>): $List<any>;
        trySelectingPacks(packs: $List_<$KnownPack_>): $List<$KnownPack>;
        redirect$gke000$fabric_resource_loader_v0$createClientManager(): $PackRepository;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$DeferredPacket extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$DeferredPacket}.
     */
    export type $ClientCommonPacketListenerImpl$DeferredPacket_ = { expirationTime?: number, sendCondition?: $BooleanSupplier_, packet?: $Packet<$ServerboundPacketListener>,  } | [expirationTime?: number, sendCondition?: $BooleanSupplier_, packet?: $Packet<$ServerboundPacketListener>, ];
    export class $CommonListenerCookie extends $Record {
        serverLinks(): $ServerLinks;
        serverData(): $ServerData;
        chatState(): $ChatComponent$State;
        connectionType(): $ConnectionType;
        postDisconnectScreen(): $Screen;
        customReportDetails(): $Map<string, string>;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        telemetryManager(): $WorldSessionTelemetryManager;
        enabledFeatures(): $FeatureFlagSet;
        localGameProfile(): $GameProfile;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        receivedRegistries(): $RegistryAccess$Frozen;
        serverBrand(): string;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string | null, arg5: $ServerData | null, arg6: $Screen | null, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State | null, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string | null, serverData: $ServerData | null, postDisconnectScreen: $Screen | null, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State | null, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { telemetryManager?: $WorldSessionTelemetryManager, receivedRegistries?: $RegistryAccess$Frozen, serverLinks?: $ServerLinks_, serverCookies?: $Map_<$ResourceLocation_, number[]>, chatState?: $ChatComponent$State, enabledFeatures?: $FeatureFlagSet, postDisconnectScreen?: $Screen, connectionType?: $ConnectionType_, serverBrand?: string, customReportDetails?: $Map_<string, string>, strictErrorHandling?: boolean, serverData?: $ServerData, localGameProfile?: $GameProfile,  } | [telemetryManager?: $WorldSessionTelemetryManager, receivedRegistries?: $RegistryAccess$Frozen, serverLinks?: $ServerLinks_, serverCookies?: $Map_<$ResourceLocation_, number[]>, chatState?: $ChatComponent$State, enabledFeatures?: $FeatureFlagSet, postDisconnectScreen?: $Screen, connectionType?: $ConnectionType_, serverBrand?: string, customReportDetails?: $Map_<string, string>, strictErrorHandling?: boolean, serverData?: $ServerData, localGameProfile?: $GameProfile, ];
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener {
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        handleDisconnect(packet: $ClientboundDisconnectPacket_): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        send(packet: $Packet<never>): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        handleCustomPayload(packet: $ClientboundCustomPayloadPacket_): void;
        handleCustomPayload(payload: $CustomPacketPayload_): void;
        sendDeferredPackets(): void;
        createDisconnectScreen(details: $DisconnectionDetails_): $Screen;
        handleCustomReportDetails(packet: $ClientboundCustomReportDetailsPacket_): void;
        handleResourcePackPush(packet: $ClientboundResourcePackPushPacket_): void;
        handleResourcePackPop(packet: $ClientboundResourcePackPopPacket_): void;
        wrapOperation$gao001$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$gao001$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        handleKeepAlive(packet: $ClientboundKeepAlivePacket): void;
        handleStoreCookie(packet: $ClientboundStoreCookiePacket_): void;
        handleTransfer(packet: $ClientboundTransferPacket_): void;
        handleServerLinks(packet: $ClientboundServerLinksPacket_): void;
        static preparePackPrompt(line1: $Component_, line2: $Component_ | null): $Component;
        handlePing(packet: $ClientboundPingPacket): void;
        serverBrand(): string;
        flow(): $PacketFlow;
        /**
         * {@inheritDoc}
         */
        disconnect(reason: $Component_): void;
        send(payload: $CustomPacketPayload_): void;
        /**
         * {@inheritDoc}
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        fillCrashReport(crashReport: $CrashReport): void;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        hasChannel(payload: $CustomPacketPayload_): boolean;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        connection: $Connection;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider, $FabricClientCommandSource, $VeilClientSuggestionProvider {
        levels(): $Set<$ResourceKey<$Level>>;
        completeCustomSuggestions(transaction: number, result: $Suggestions): void;
        modifyCustomCompletions(action: $ClientboundCustomChatCompletionsPacket$Action_, entries: $List_<string>): void;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getCustomTabSugggestions(): $Collection<string>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getPlayer(): $LocalPlayer;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getOnlinePlayerNames(): $Collection<string>;
        getSelectedEntities(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        hasPermission(level: number): boolean;
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        sendError(arg0: $Component_): void;
        getWorld(): $ClientLevel;
        sendFeedback(arg0: $Component_): void;
        getClient(): $Minecraft;
        modifyReturnValue$jij000$axiom$getSelectedEntities(returnValue: $Collection_<any>): $Collection<any>;
        veil$getPostPipelineNames(): $Stream<any>;
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        getPosition(): $Vec3;
        getEntity(): $Entity;
        getRotation(): $Vec2;
        getMeta(arg0: string): $Object;
        constructor(connection: $ClientPacketListener, minecraft: $Minecraft);
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get customTabSugggestions(): $Collection<string>;
        get player(): $LocalPlayer;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get onlinePlayerNames(): $Collection<string>;
        get selectedEntities(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get allTeams(): $Collection<string>;
        get world(): $ClientLevel;
        get client(): $Minecraft;
        get position(): $Vec3;
        get entity(): $Entity;
        get rotation(): $Vec2;
    }
    export class $ChunkBatchSizeCalculator {
        getDesiredChunksPerTick(): number;
        onBatchStart(): void;
        onBatchFinished(batchSize: number): void;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
