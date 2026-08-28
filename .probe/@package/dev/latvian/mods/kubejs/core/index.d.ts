import { $MinecraftServer } from "@package/net/minecraft/server";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $Ingredient, $Ingredient_, $RecipeSerializer, $RecipeHolder_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EquipmentSlot_, $EntityType, $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $KeyMapping, $Minecraft } from "@package/net/minecraft/client";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $ExplosionProperties_, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_, $ItemPredicate, $ItemBuilder, $ItemStackKey, $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource } from "@package/net/minecraft/util";
import { $DisplayInfo, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $ScheduledEvents$ScheduledEvent, $SlotFilter_, $WrappedJS, $ScheduledEvents, $NotificationToastData_, $ScheduledEvents$Callback_, $WithCodec, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { DataComponentTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SpecialEquality, $ToStringJS } from "@package/dev/latvian/mods/rhino/util";
import { $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ScriptType, $ScriptTypeHolder } from "@package/dev/latvian/mods/kubejs/script";
import { $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $MutableComponent, $Component_, $ClickEvent_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $Duration_ } from "@package/java/time";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $SoundType_, $Block } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $JsonElement } from "@package/com/google/gson";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $AttributeModifier$Operation_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Map, $Set, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $EntityArrayList, $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $SizedFluidIngredient, $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Consumer_, $Predicate_, $Function, $Supplier } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Registry, $Holder_, $Holder, $Direction } from "@package/net/minecraft/core";
import { $Enchantment, $ItemEnchantments_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $ItemMatch, $FluidMatch, $Replaceable, $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Iterable, $Iterable_, $Record, $Object, $IllegalStateException } from "@package/java/lang";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $InputStream } from "@package/java/io";
import { $Explosion, $ItemLike_, $EntityGetter, $GameRules$Value, $Level } from "@package/net/minecraft/world/level";
import { $TagManager, $TagKey, $TagLoader$EntryWithSource_, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { AbstractClientPlayer, $AbstractClientPlayer, LocalPlayer } from "@package/net/minecraft/client/player";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $BufferedImage } from "@package/java/awt/image";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $EntityPotionEffectsJS, $KubeRayTraceResult } from "@package/dev/latvian/mods/kubejs/entity";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableDataComponentHolderFunctions, $ItemComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as mixin from "@package/dev/latvian/mods/kubejs/core/mixin";

declare module "@package/dev/latvian/mods/kubejs/core" {
    export class $EntityKJS {
    }
    export interface $EntityKJS extends $WithPersistentData, $MessageSenderKJS, $ScriptTypeHolder {
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        setMotionX(x: number): void;
        setMotionY(y: number): void;
        setMotionZ(z: number): void;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        setPosition(block: $LevelBlock): void;
        setPosition(x: number, y: number, z: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        getMotionX(): number;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        getMotionZ(): number;
        getServer(): $MinecraftServer;
        getType(): string;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        getScriptType(): $ScriptType;
        getMotionY(): number;
        getLevel(): $Level;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        setRotation(yaw: number, pitch: number): void;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         */
        getDistanceSq(x: number, y: number, z: number): number;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        mergeNbt(tag: $CompoundTag_): $Entity;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        setNbt(nbt: $CompoundTag_): void;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        spawn(): void;
        setZ(z: number): void;
        setY(y: number): void;
        setX(x: number): void;
        getNbt(): $CompoundTag;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Checks if the entity is a water creature.
         */
        isWaterCreature(): boolean;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(teamName: string): boolean;
        /**
         * Checks, whether the entity is part of any team.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        get username(): string;
        get clientPlayer(): boolean;
        get frame(): boolean;
        get monster(): boolean;
        get animal(): boolean;
        get player(): boolean;
        get living(): boolean;
        get teamName(): string;
        get profile(): $GameProfile;
        get server(): $MinecraftServer;
        get type(): string;
        get block(): $LevelBlock;
        get scriptType(): $ScriptType;
        get level(): $Level;
        get serverPlayer(): boolean;
        get facing(): $Direction;
        get teamId(): string;
        get passengers(): $EntityArrayList;
        get name(): $Component;
        get displayName(): $Component;
        get self(): boolean;
        set z(value: number);
        set y(value: number);
        set x(value: number);
        get waterCreature(): boolean;
        get ambientCreature(): boolean;
        get peacefulCreature(): boolean;
    }
    export class $IngredientSupplierKJS {
    }
    export interface $IngredientSupplierKJS {
        kjs$asIngredient(): $Ingredient;
    }
    export class $FluidStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $FluidStackKJS extends $Replaceable, $SpecialEquality, $WithCodec, $FluidLike, $FluidMatch, $MutableDataComponentHolderFunctions, $RegistryObjectKJS<$Fluid> {
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        kjs$isEmpty(): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getCodec(): $Codec<never>;
        kjs$equalsIgnoringCount(stack: $FluidStack_): boolean;
        kjs$getId(): string;
        kjs$copy(amount: number): $FluidLike;
        kjs$getFluid(): $Fluid;
        kjs$getAmount(): number;
        kjs$getMod(): string;
        kjs$getKey(): $ResourceKey<$Fluid>;
        kjs$self(): $FluidStack;
        kjs$getIdLocation(): $ResourceLocation;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        kjs$getRegistry(): $Registry<$Fluid>;
        kjs$asHolder(): $Holder<$Fluid>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<never>;
    }
    export class $EntityGetterKJS {
    }
    export interface $EntityGetterKJS extends $EntityCollectionKJS {
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        self(): $EntityGetter;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
    }
    export class $SizedIngredientKJS {
    }
    export interface $SizedIngredientKJS extends $Replaceable, $IngredientSupplierKJS, $ItemMatch {
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        kjs$toFlatJson(): $JsonElement;
        kjs$toNestedJson(): $JsonElement;
        kjs$asIngredient(): $Ingredient;
        kjs$self(): $SizedIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
    }
    export class $RegistryObjectKJS<T> {
    }
    export interface $RegistryObjectKJS<T> extends $SpecialEquality {
        specialEquals(o: $Object, shallow: boolean): boolean;
        getId(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getKey(): $ResourceKey<T>;
        getIdLocation(): $ResourceLocation;
        getRegistryId(): $ResourceKey<$Registry<T>>;
        getRegistry(): $Registry<T>;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        asHolder(): $Holder<T>;
        get id(): string;
        get mod(): string;
        get key(): $ResourceKey<T>;
        get idLocation(): $ResourceLocation;
        get registryId(): $ResourceKey<$Registry<T>>;
        get registry(): $Registry<T>;
        get tagKeys(): $List<$TagKey<T>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $DiggerItemKJS {
    }
    export interface $DiggerItemKJS {
        kjs$getMineableTag(): $TagKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $DiggerItemKJS}.
     */
    export type $DiggerItemKJS_ = (() => $TagKey_<$Block>);
    export class $EntityCollectionKJS {
    }
    export interface $EntityCollectionKJS {
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getEntities(): $EntityArrayList;
        getPlayers(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get entities(): $EntityArrayList;
        get players(): $EntityArrayList;
    }
    /**
     * Values that may be interpreted as {@link $EntityCollectionKJS}.
     */
    export type $EntityCollectionKJS_ = (() => $Iterable_<$Entity>);
    export class $CreativeModeTabKJS {
    }
    export interface $CreativeModeTabKJS {
        kjs$setDisplayName(component: $Component_): void;
        kjs$setIcon(icon: $ItemStack_): void;
    }
    export class $WithPersistentData {
    }
    export interface $WithPersistentData extends $MessageSenderKJS {
        getPersistentData(): $CompoundTag;
        get persistentData(): $CompoundTag;
    }
    export class $TagLoaderKJS<T> {
    }
    export interface $TagLoaderKJS<T> {
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$getRegistry(): $Registry<T>;
        kjs$init(resources: $ReloadableServerResourcesKJS, registry: $Registry<T>): void;
        kjs$customTags(kjs$resources: $ReloadableServerResourcesKJS, map: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): void;
    }
    export class $ItemFrameEntityKJS {
    }
    export interface $ItemFrameEntityKJS extends $EntityKJS {
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Gets the item stack corresponding to the item in the item frame.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        get frame(): boolean;
        get item(): $ItemStack;
    }
    export class $BlockProviderKJS {
    }
    export interface $BlockProviderKJS extends $RegistryObjectKJS<$Block> {
        getBlock(): $Block;
        getId(): string;
        getTypeData(): $Map<string, $Object>;
        getKey(): $ResourceKey<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        get block(): $Block;
        get id(): string;
        get typeData(): $Map<string, $Object>;
        get key(): $ResourceKey<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockProviderKJS}.
     */
    export type $BlockProviderKJS_ = (() => $Block);
    export class $LivingEntityKJS {
        static KJS_PLAYER_CUSTOM_SPEED: $ResourceLocation;
    }
    export interface $LivingEntityKJS extends $EntityKJS {
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        rayTrace(): $KubeRayTraceResult;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        getOffHandItem(): $ItemStack;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        isLiving(): this is $LivingEntity;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        setOffHandItem(item: $ItemStack_): void;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        isUndead(): boolean;
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        swing(): void;
        swing(hand: $InteractionHand_): void;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        getPotionEffects(): $EntityPotionEffectsJS;
        getMainHandItem(): $ItemStack;
        setMainHandItem(item: $ItemStack_): void;
        getHeadArmorItem(): $ItemStack;
        setHeadArmorItem(item: $ItemStack_): void;
        getReachDistance(): number;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        getChestArmorItem(): $ItemStack;
        setChestArmorItem(item: $ItemStack_): void;
        getLegsArmorItem(): $ItemStack;
        setLegsArmorItem(item: $ItemStack_): void;
        setFeetArmorItem(item: $ItemStack_): void;
        getFeetArmorItem(): $ItemStack;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        getTotalMovementSpeed(): number;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        setDefaultMovementSpeed(speed: number): void;
        setMovementSpeedAddition(speed: number): void;
        getDefaultMovementSpeed(): number;
        get living(): boolean;
        set maxHealth(value: number);
        get undead(): boolean;
        get potionEffects(): $EntityPotionEffectsJS;
        get reachDistance(): number;
        get totalMovementSpeed(): number;
        set totalMovementSpeedMultiplier(value: number);
        set defaultMovementSpeedMultiplier(value: number);
        set movementSpeedAddition(value: number);
    }
    export class $ServerLevelKJS {
    }
    export interface $ServerLevelKJS extends $LevelKJS, $WithPersistentData {
        self(): $ServerLevel;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelKJS}.
     */
    export type $ServerLevelKJS_ = (() => void);
    export class $ClientPacketListenerKJS {
    }
    export interface $ClientPacketListenerKJS {
        kjs$sessionData(): $KubeSessionData;
    }
    export class $TagManagerKJS {
    }
    export interface $TagManagerKJS extends $ReloadableServerResourceHolderKJS {
    }
    export class $MinecraftServerKJS {
    }
    export interface $MinecraftServerKJS extends $WithAttachedData<$MinecraftServer>, $WithPersistentData, $DataSenderKJS, $MinecraftEnvironmentKJS, $EntityCollectionKJS {
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        restoreInventories(): $Map<$UUID, $Map<number, $ItemStack>>;
        getOverworld(): $ServerLevel;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        self(): $MinecraftServer;
        tell(message: $Component_): void;
        sendData(channel: string, data: $CompoundTag_): void;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get overworld(): $ServerLevel;
        get name(): $Component;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
    }
    export class $MenuTypeKJS {
    }
    export interface $MenuTypeKJS extends $RegistryObjectKJS<$MenuType<never>> {
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
    }
    export class $DataSenderKJS {
    }
    export interface $DataSenderKJS {
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
    }
    export class $RecipeLikeKJS {
    }
    export interface $RecipeLikeKJS {
        getType(): $ResourceLocation;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getGroup(): string;
        getSerializer(): $RecipeSerializer<never>;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getSchema(): $RecipeSchema;
        getOrCreateId(): $ResourceLocation;
        setGroup(group: string): void;
        getMod(): string;
        get type(): $ResourceLocation;
        get serializer(): $RecipeSerializer<never>;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get schema(): $RecipeSchema;
        get orCreateId(): $ResourceLocation;
        get mod(): string;
    }
    export class $LevelKJS {
    }
    export interface $LevelKJS extends $WithAttachedData<$Level>, $ScriptTypeHolder, $EntityGetterKJS {
        setStatusMessage(message: $Component_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        getBlock(entity: $BlockEntity): $LevelBlock;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getSide(): $ScriptType;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        self(): $Level;
        tell(message: $Component_): void;
        getDimension(): $ResourceLocation;
        setTime(time: number): void;
        isOverworld(): boolean;
        createEntity(type: $EntityType<never>): $Entity;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        spawnEntity(type: $EntityType<never>, callback: $Consumer_<$Entity>): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get side(): $ScriptType;
        get name(): $Component;
        get dimension(): $ResourceLocation;
        set time(value: number);
        get overworld(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelKJS}.
     */
    export type $LevelKJS_ = (() => void);
    export class $FluidIngredientKJS {
    }
    export interface $FluidIngredientKJS extends $WithCodec, $FluidMatch {
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        withAmount(amount: number): $SizedFluidIngredient;
        self(): $FluidIngredient;
        get codec(): $Codec<never>;
    }
    export class $WindowKJS$KJSScaledIconProvider extends $Record implements $Supplier<number[]> {
        get(): number[];
        target(): number;
        original(): $BufferedImage;
        constructor(original: $BufferedImage, target: number);
    }
    /**
     * Values that may be interpreted as {@link $WindowKJS$KJSScaledIconProvider}.
     */
    export type $WindowKJS$KJSScaledIconProvider_ = { original?: $BufferedImage, target?: number,  } | [original?: $BufferedImage, target?: number, ];
    export class $PlayerSelector {
        static name(name: string): $PlayerSelector;
        static wrap(o: $Object): $PlayerSelector;
        static identity(player: $ServerPlayer): $PlayerSelector;
        static uuid(uuid: $UUID_): $PlayerSelector;
        static fuzzyName(name: string): $PlayerSelector;
        static TYPE_INFO: $TypeInfo;
    }
    export interface $PlayerSelector {
        or(fallback: $PlayerSelector_): $PlayerSelector;
        getPlayer(server: $MinecraftServer): $ServerPlayer;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSelector}.
     */
    export type $PlayerSelector_ = ((server: $MinecraftServer) => $ServerPlayer);
    export class $LocalClientPlayerKJS {
    }
    export interface $LocalClientPlayerKJS extends $ClientPlayerKJS {
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        notify(notification: $NotificationToastData_): void;
        getMinecraft(): $Minecraft;
        getStats(): $PlayerStatsJS;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        set activePostShader(value: $ResourceLocation_);
        get self(): boolean;
        get minecraft(): $Minecraft;
        get stats(): $PlayerStatsJS;
        get miningBlock(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LocalClientPlayerKJS}.
     */
    export type $LocalClientPlayerKJS_ = (() => void);
    export class $WithAttachedData<T> {
    }
    export interface $WithAttachedData<T> extends $MessageSenderKJS {
        getData(): $AttachedData<T>;
        get data(): $AttachedData<T>;
    }
    /**
     * Values that may be interpreted as {@link $WithAttachedData}.
     */
    export type $WithAttachedData_<T> = (() => $AttachedData<T>);
    export class $LazyComponentKJS {
    }
    export interface $LazyComponentKJS extends $Supplier<$Component> {
        get(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $LazyComponentKJS}.
     */
    export type $LazyComponentKJS_ = (() => $Component_);
    export class $CustomIngredientKJS {
    }
    export interface $CustomIngredientKJS extends $ItemPredicate {
        kjs$canBeUsedForMatching(): boolean;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$getStackArray(): $ItemStack[];
        kjs$asIngredient(): $Ingredient;
        getItems(): $Stream<$ItemStack>;
        get items(): $Stream<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $CustomIngredientKJS}.
     */
    export type $CustomIngredientKJS_ = (() => void);
    export class $FluidKJS {
    }
    export interface $FluidKJS extends $RegistryObjectKJS<$Fluid>, $FluidLike {
        isEmpty(): boolean;
        getFluid(): $Fluid;
        getAmount(): number;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getRegistry(): $Registry<$Fluid>;
        get empty(): boolean;
        get fluid(): $Fluid;
        get amount(): number;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get registry(): $Registry<$Fluid>;
    }
    export class $GameRulesKJS {
    }
    export interface $GameRulesKJS {
        kjs$getInt(rule: string): number;
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$set(rule: string, value: string): void;
        kjs$get(rule: string): $GameRules$Value<never>;
    }
    export class $PlayerKJS {
    }
    export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<$Player> {
        setStatusMessage(message: $Component_): void;
        /**
         * Gets the player's username.
         */
        getUsername(): string;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Gets the player's profile.
         */
        getProfile(): $GameProfile;
        spawn(): void;
        give(item: $ItemStack_): void;
        setXp(xp: number): void;
        notify(title: $Component_, text: $Component_): void;
        notify(builder: $NotificationToastData_): void;
        /**
         * Checks if the player is fake.
         */
        isFake(): this is $FakePlayer;
        addXP(xp: number): void;
        getXp(): number;
        getSelectedSlot(): number;
        sendInventoryUpdate(): void;
        boostElytraFlight(): void;
        setSelectedSlot(index: number): void;
        getCraftingGrid(): $InventoryKJS;
        getOpenInventory(): $AbstractContainerMenu;
        addItemCooldown(item: $Item, ticks: number): void;
        getStats(): $PlayerStatsJS;
        getInventory(): $InventoryKJS;
        getStages(): $Stages;
        getSaturation(): number;
        setMouseItem(item: $ItemStack_): void;
        isMiningBlock(): boolean;
        setSaturation(saturation: number): void;
        giveInHand(item: $ItemStack_): void;
        addXPLevels(levels: number): void;
        setFoodLevel(foodLevel: number): void;
        getXpLevel(): number;
        getFoodLevel(): number;
        getMouseItem(): $ItemStack;
        addFood(hunger: number, saturation: number): void;
        addExhaustion(exhaustion: number): void;
        setXpLevel(levels: number): void;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        set statusMessage(value: $Component_);
        get username(): string;
        get player(): boolean;
        get profile(): $GameProfile;
        get fake(): boolean;
        get craftingGrid(): $InventoryKJS;
        get openInventory(): $AbstractContainerMenu;
        get stats(): $PlayerStatsJS;
        get inventory(): $InventoryKJS;
        get stages(): $Stages;
        get miningBlock(): boolean;
        get inventoryChangeListener(): $KubeJSInventoryListener;
    }
    /**
     * Values that may be interpreted as {@link $PlayerKJS}.
     */
    export type $PlayerKJS_ = (() => void);
    export class $FireworkRocketEntityKJS {
    }
    export interface $FireworkRocketEntityKJS {
        setLifetimeKJS(lifetime: number): void;
        set lifetimeKJS(value: number);
    }
    /**
     * Values that may be interpreted as {@link $FireworkRocketEntityKJS}.
     */
    export type $FireworkRocketEntityKJS_ = ((lifetime: number) => void);
    export class $SizedFluidIngredientKJS {
    }
    export interface $SizedFluidIngredientKJS extends $Replaceable, $FluidMatch {
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        toFlatJson(): $JsonElement;
        toNestedJson(): $JsonElement;
        self(): $SizedFluidIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
    }
    export class $RecipeHolderKJS {
    }
    export interface $RecipeHolderKJS extends $RecipeLikeKJS {
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getGroup(): string;
        getSerializer(): $RecipeSerializer<never>;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getRecipe(): $Recipe<never>;
        getSchema(): $RecipeSchema;
        getOrCreateId(): $ResourceLocation;
        setGroup(group: string): void;
        self(): $RecipeHolder<never>;
        get serializer(): $RecipeSerializer<never>;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get recipe(): $Recipe<never>;
        get schema(): $RecipeSchema;
        get orCreateId(): $ResourceLocation;
    }
    export class $ReloadableServerResourcesKJS {
    }
    export interface $ReloadableServerResourcesKJS {
        kjs$getServerScriptManager(): $ServerScriptManager;
        kjs$getTagManager(): $TagManager;
    }
    export class $MessageSenderKJS {
    }
    export interface $MessageSenderKJS {
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        /**
         * Sends a message in chat to something.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $AdvancementNodeKJS {
    }
    export interface $AdvancementNodeKJS {
        getTitle(): $Component;
        getId(): $ResourceLocation;
        self(): $AdvancementNode;
        getChildren(): $Set<$AdvancementNode>;
        getDisplayText(): $Component;
        getDisplay(): $DisplayInfo;
        getParent(): $AdvancementNode;
        addChild(a: $AdvancementNode): void;
        getDescription(): $Component;
        hasDisplay(): boolean;
        get title(): $Component;
        get id(): $ResourceLocation;
        get children(): $Set<$AdvancementNode>;
        get displayText(): $Component;
        get display(): $DisplayInfo;
        get parent(): $AdvancementNode;
        get description(): $Component;
    }
    export class $BlockBuilderProvider {
    }
    export interface $BlockBuilderProvider {
        getBlockBuilder(): $BlockBuilder;
        get blockBuilder(): $BlockBuilder;
    }
    export class $RecipeInputKJS {
    }
    export interface $RecipeInputKJS {
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        self(): $RecipeInput;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        findAll(): $List<$ItemStack>;
    }
    export class $InventoryKJS {
    }
    export interface $InventoryKJS {
        isEmpty(): boolean;
        getBlock(level: $Level): $LevelBlock;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getWidth(): number;
        getSlots(): number;
        setChanged(): void;
        getHeight(): number;
        isMutable(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        asContainer(): $Container;
        getAllItems(): $List<$ItemStack>;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getStackInSlot(slot: number): $ItemStack;
        get empty(): boolean;
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockKJS {
    }
    export interface $BlockKJS extends $BlockBuilderProvider, $BlockBehaviourKJS, $Replaceable {
        getBlock(): $Block;
        setLightEmission(v: number): void;
        setDestroySpeed(v: number): void;
        setRequiresTool(v: boolean): void;
        setBlockBuilder(b: $BlockBuilder): void;
        getBlockStates(): $List<$BlockState>;
        setNameKey(key: string): void;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        get block(): $Block;
        set lightEmission(value: number);
        set destroySpeed(value: number);
        set requiresTool(value: boolean);
        set blockBuilder(value: $BlockBuilder);
        get blockStates(): $List<$BlockState>;
        set nameKey(value: string);
    }
    export class $EntityTypeKJS {
    }
    export interface $EntityTypeKJS extends $RegistryObjectKJS<$EntityType<never>> {
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
    }
    export class $ServerPlayerKJS {
    }
    export interface $ServerPlayerKJS extends $PlayerKJS {
        setActivePostShader(id: $ResourceLocation_): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        setSpawnLocation(c: $LevelBlock): void;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(mode: boolean): void;
        revokeAdvancement(id: $ResourceLocation_): void;
        captureInventory(autoRestore: boolean): $Container;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        unlockAdvancement(id: $ResourceLocation_): void;
        getSpawnLocation(): $LevelBlock;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        notify(builder: $NotificationToastData_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        setSelectedSlot(index: number): void;
        getStats(): $PlayerStatsJS;
        setMouseItem(item: $ItemStack_): void;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         */
        heal(): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(reason: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         */
        kick(): void;
        /**
         * Checks, whether the player is a server operator.
         */
        isOp(): boolean;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        set activePostShader(value: $ResourceLocation_);
        set creativeMode(value: boolean);
        get serverPlayer(): boolean;
        set selectedSlot(value: number);
        get stats(): $PlayerStatsJS;
        set mouseItem(value: $ItemStack_);
        get miningBlock(): boolean;
        get op(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayerKJS}.
     */
    export type $ServerPlayerKJS_ = (() => void);
    export class $BlockStateKJS {
    }
    export interface $BlockStateKJS extends $RegistryObjectKJS<$Block>, $Replaceable {
        getId(): string;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        setLightEmission(v: number): void;
        setDestroySpeed(v: number): void;
        setRequiresTool(v: boolean): void;
        getKey(): $ResourceKey<$Block>;
        getWebIconURL(size: number): $RelativeURL;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        toString(): string;
        get id(): string;
        set lightEmission(value: number);
        set destroySpeed(value: number);
        set requiresTool(value: boolean);
        get key(): $ResourceKey<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
    }
    export class $MinecraftEnvironmentKJS {
    }
    export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getScheduledEvents(): $ScheduledEvents;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        get scheduledEvents(): $ScheduledEvents;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftEnvironmentKJS}.
     */
    export type $MinecraftEnvironmentKJS_ = (() => $ScheduledEvents);
    export class $ClientLevelKJS {
    }
    export interface $ClientLevelKJS extends $LevelKJS {
        self(): $ClientLevel;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelKJS}.
     */
    export type $ClientLevelKJS_ = (() => void);
    export class $BlockBehaviourKJS {
    }
    export interface $BlockBehaviourKJS extends $BlockProviderKJS {
        setIsRandomlyTicking(v: boolean): void;
        setExplosionResistance(v: number): void;
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        setHasCollision(v: boolean): void;
        setSoundType(v: $SoundType_): void;
        setSpeedFactor(v: number): void;
        setFriction(v: number): void;
        setJumpFactor(v: number): void;
        set isRandomlyTicking(value: boolean);
        set explosionResistance(value: number);
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
        set hasCollision(value: boolean);
        set soundType(value: $SoundType_);
        set speedFactor(value: number);
        set friction(value: number);
        set jumpFactor(value: number);
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourKJS}.
     */
    export type $BlockBehaviourKJS_ = (() => void);
    export class $ItemKJS {
    }
    export interface $ItemKJS extends $IngredientSupplierKJS, $RegistryObjectKJS<$Item> {
        getTypeItemStackKey(): $ItemStackKey;
        setCraftingRemainder(i: $Item): void;
        setItemBuilder(b: $ItemBuilder): void;
        setCanRepair(repairable: boolean): void;
        getItemBuilder(): $ItemBuilder;
        getTypeData(): $Map<string, $Object>;
        setNameKey(key: string): void;
        getItem(): $Item;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getRegistry(): $Registry<$Item>;
        get typeItemStackKey(): $ItemStackKey;
        set craftingRemainder(value: $Item);
        set canRepair(value: boolean);
        get typeData(): $Map<string, $Object>;
        set nameKey(value: string);
        get item(): $Item;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get registry(): $Registry<$Item>;
    }
    export class $ComponentKJS {
    }
    export interface $ComponentKJS extends $Component, $WithCodec, $WrappedJS {
        forEach(action: $Consumer_<$Component>): void;
        clickRunCommand(command: string): $MutableComponent;
        clickSuggestCommand(command: string): $MutableComponent;
        clickChangePage(page: string): $MutableComponent;
        asIterable(): $Iterable<$Component>;
        darkBlue(): $MutableComponent;
        underlined(): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        noColor(): $MutableComponent;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        hasSiblings(): boolean;
        /**
         * @deprecated
         */
        component(): $Component;
        hasStyle(): boolean;
        clickOpenFile(path: string): $MutableComponent;
        darkRed(): $MutableComponent;
        darkGray(): $MutableComponent;
        darkAqua(): $MutableComponent;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        obfuscated(): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        insertion(s: string): $MutableComponent;
        darkPurple(): $MutableComponent;
        strikethrough(): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        darkGreen(): $MutableComponent;
        isEmpty(): boolean;
        clickOpenUrl(url: string): $MutableComponent;
        lightPurple(): $MutableComponent;
        clickCopy(text: string): $MutableComponent;
        getCodec(): $Codec<never>;
        black(): $MutableComponent;
        white(): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        bold(): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        blue(): $MutableComponent;
        green(): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        gold(): $MutableComponent;
        aqua(): $MutableComponent;
        hover(s: $Component_): $MutableComponent;
        yellow(): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        red(): $MutableComponent;
        gray(): $MutableComponent;
        italic(): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        self(): $MutableComponent;
        get codec(): $Codec<never>;
    }
    export class $MinecraftClientKJS {
    }
    export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        isKeyMappingDown(key: $KeyMapping): boolean;
        setStatusMessage(message: $Component_): void;
        getCurrentScreen(): $Screen;
        setCurrentScreen(gui: $Screen): void;
        getKeyBindPressedTicks(id: string): number;
        getCurrentWorldName(): string;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getTitle(): string;
        isCtrlDown(): boolean;
        isKeyBindDown(id: string): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        setTitle(t: string): void;
        isShiftDown(): boolean;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        isAltDown(): boolean;
        self(): $Minecraft;
        tell(message: $Component_): void;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set statusMessage(value: $Component_);
        get currentWorldName(): string;
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set activePostShader(value: $ResourceLocation_);
        get ctrlDown(): boolean;
        get name(): $Component;
        get shiftDown(): boolean;
        get altDown(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientKJS}.
     */
    export type $MinecraftClientKJS_ = (() => void);
    export class $WindowKJS {
    }
    export interface $WindowKJS {
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
    }
    export class $RecipeManagerKJS {
    }
    export interface $RecipeManagerKJS extends $ReloadableServerResourceHolderKJS {
        kjs$getRecipeIdMap(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        kjs$replaceRecipes(byName: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
    }
    export class $ContainerKJS {
    }
    export interface $ContainerKJS extends $InventoryKJS {
        getBlock(level: $Level): $LevelBlock;
        clear(): void;
        self(): $Container;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getWidth(): number;
        getSlots(): number;
        setChanged(): void;
        getHeight(): number;
        isMutable(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getStackInSlot(slot: number): $ItemStack;
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
    }
    export class $IngredientKJS {
    }
    export interface $IngredientKJS extends $ItemPredicate, $Replaceable, $WithCodec, $ItemMatch {
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        getStackArray(): $ItemStack[];
        getTagKey(): $TagKey<$Item>;
        asStack(): $SizedIngredient;
        containsAnyTag(): boolean;
        asIngredient(): $Ingredient;
        and(ingredient: $Ingredient_): $Ingredient;
        or(ingredient: $Ingredient_): $Ingredient;
        except(subtracted: $Ingredient_): $Ingredient;
        self(): $Ingredient;
        withCount(count: number): $SizedIngredient;
        isWildcard(): boolean;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        get codec(): $Codec<never>;
        get stackArray(): $ItemStack[];
        get tagKey(): $TagKey<$Item>;
        get wildcard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IngredientKJS}.
     */
    export type $IngredientKJS_ = (() => void);
    export class $ItemEntityKJS {
    }
    export interface $ItemEntityKJS extends $EntityKJS {
        getLifespan(): number;
        setLifespan(lifespan: number): void;
        setNoDespawn(): void;
        /**
         * Gets the item stack corresponding to the item contained in the item entity.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        isItem(): this is $ItemEntity;
        setTicksUntilDespawn(ticks: number): void;
        setNoPickUpDelay(): void;
        getTicksUntilDespawn(): number;
        setDefaultPickUpDelay(): void;
        setInfinitePickUpDelay(): void;
    }
    export class $NoMixinException extends $IllegalStateException {
        constructor();
    }
    export class $ReloadableServerResourceHolderKJS {
    }
    export interface $ReloadableServerResourceHolderKJS {
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
    }
    export class $ItemStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ItemStackKJS extends $SpecialEquality, $WithCodec, $IngredientSupplierKJS, $ToStringJS, $Replaceable, $ItemComponentFunctions, $MutableDataComponentHolderFunctions, $ItemMatch, $RegistryObjectKJS<$Item> {
        matches(cx: $RecipeMatchContext, s: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getCodec(): $Codec<$ItemStack>;
        equalsIgnoringCount(stack: $ItemStack_): boolean;
        areComponentsEqual(other: $ItemStack_): boolean;
        getEnchantments(): $ItemEnchantments;
        getHarvestSpeed(): number;
        getHarvestSpeed(block: $LevelBlock): number;
        asIngredient(): $Ingredient;
        getBlock(): $Block;
        getComponentString(): string;
        getId(): string;
        toStringJS(): string;
        getTypeData(): $Map<string, $Object>;
        getMod(): string;
        getKey(): $ResourceKey<$Item>;
        self(): $ItemStack;
        areItemsEqual(other: $ItemStack_): boolean;
        toItemString0(dynamicOps: $DynamicOps<$Tag_>): string;
        withCount(c: number): this;
        /**
         * @deprecated
         */
        withChance(chance: number): $ItemStack;
        withCustomName(name: $Component_): this;
        enchant(enchantments: $ItemEnchantments_): this;
        enchant(enchantment: $Holder_<$Enchantment>, level: number): this;
        toItemString(): string;
        withLore(lines: $Component_[]): this;
        withLore(lines: $Component_[], styledLines: $Component_[]): this;
        hasEnchantment(enchantment: $Holder_<$Enchantment>, level: number): boolean;
        getIdLocation(): $ResourceLocation;
        getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getRegistry(): $Registry<$Item>;
        asHolder(): $Holder<$Item>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<$ItemStack>;
        get enchantments(): $ItemEnchantments;
        get block(): $Block;
        get componentString(): string;
        get id(): string;
        get typeData(): $Map<string, $Object>;
        get mod(): string;
        get key(): $ResourceKey<$Item>;
        get idLocation(): $ResourceLocation;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get registry(): $Registry<$Item>;
    }
    export class $ClientPlayerKJS {
    }
    export interface $ClientPlayerKJS extends $PlayerKJS {
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is $AbstractClientPlayer;
        notify(notification: $NotificationToastData_): void;
        getStats(): $PlayerStatsJS;
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        get clientPlayer(): boolean;
        get stats(): $PlayerStatsJS;
        get miningBlock(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientPlayerKJS}.
     */
    export type $ClientPlayerKJS_ = (() => void);
}
