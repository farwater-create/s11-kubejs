import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List_, $ArrayList } from "@package/java/util";
import { $PlayerEvent$PlayerLoggedOutEvent, $PlayerContainerEvent$Close, $AdvancementEvent$AdvancementEarnEvent, $PlayerEvent$Clone, $PlayerEvent$PlayerLoggedInEvent, $PlayerEvent$PlayerChangedDimensionEvent, $PlayerContainerEvent$Open, $PlayerEvent$PlayerRespawnEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $AdvancementNode } from "@package/net/minecraft/advancements";
import { $Container } from "@package/net/minecraft/world";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $AbstractContainerMenu, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $Iterable_, $Object } from "@package/java/lang";
import { $Level } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $EntitySelector } from "@package/net/minecraft/commands/arguments/selector";
import { $OnDatapackSyncEvent, $ServerChatEvent } from "@package/net/neoforged/neoforge/event";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $KubeLivingEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $PlayerTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MessageSenderKJS, $DataSenderKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Stat_, $Stat, $StatsCounter } from "@package/net/minecraft/stats";

declare module "@package/dev/latvian/mods/kubejs/player" {
    export class $InventoryChangedKubeEvent implements $KubePlayerEvent {
        /**
         * Gets the slot that was changed.
         */
        getSlot(): number;
        /**
         * Gets the item that was changed.
         */
        getItem(): $ItemStack;
        /**
         * Gets the player that changed their inventory.
         */
        getEntity(): $Player;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(p: $Player, is: $ItemStack_, s: number);
        get slot(): number;
        get item(): $ItemStack;
        get entity(): $Player;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $EntityArrayList extends $ArrayList<$Entity> implements $MessageSenderKJS, $DataSenderKJS {
        /**
         * Filters the entity list by passing each entity through a given predicate.
         * Entities that pass the predicate will end up in the resulting entity list.
         * 
         * @param filter The predicate - a function that takes an argument of `Entity` and returns a boolean.
         */
        filter(filter: $Predicate_<$Entity>): $EntityArrayList;
        /**
         * Gets the first entity on the list, or `null` if the list is empty.
         */
        getFirst(): $Entity;
        /**
         * Filters the entity list based on the type of the entity. Only entities whose type is equal to the provided one will end up in the resulting list.
         * 
         * @param type The entity type. It may be a string representing an entity ID, like `'minecraft:creeper'`.
         */
        filterType(type: $EntityType<never>): $EntityArrayList;
        /**
         * Kills every entity in the list.
         */
        kill(): void;
        setStatusMessage(message: $Component_): void;
        /**
         * Each entity in the list runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Filters the entity list by passing each entity through all predicates in provided list.
         * Entities that pass at least one of the predicates will end up in the resulting entity list.
         * 
         * @param filterList The list of predicates - functions that take one argument of `Entity` and return boolean values.
         */
        filterList(filterList: $List_<$Predicate_<$Entity>>): $EntityArrayList;
        /**
         * Results in an entity list containing only item entities.
         */
        filterItems(): $EntityArrayList;
        /**
         * Each entity in the list runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        /**
         * Plays a sound from each entity in the list, unless the entity is silent.
         */
        playSound(id: $SoundEvent, volume: number, pitch: number): void;
        /**
         * Plays a sound from each entity in the list, unless the entity is silent.
         */
        playSound(id: $SoundEvent): void;
        /**
         * Sends a message in chat to every entity in the list.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        /**
         * Sends NBT data to every player in the list.
         * 
         * @param channel String. Represents the network channel.
         * @param data The NBT compound tag containing data to send. May be `null`.
         * It may be a JS object containing data or string representing stringified NBT.
         */
        sendData(channel: string, data: $CompoundTag_): void;
        addAllIterable(entities: $Iterable_<$Entity>): void;
        /**
         * Filters the entity list based on distance to the given block position.
         * Entities that are closer than `distance` away from the center of the block will end up in the resulting list.
         * 
         * @param pos The `BlockPos` - that is the center of the block at specified position. It can be a 3-element array of integers, such as `[64, 25, 39]`.
         * @param distance The maximum distance of entities from the point.
         */
        filterDistance(pos: $BlockPos_, distance: number): $EntityArrayList;
        /**
         * Filters the entity list based on distance to the given point.
         * Entities that are closer than `distance` away from the point specified by `x`, `y` and `z` coordinates will end up in the resulting list.
         * 
         * @param x The `x` coordinate of the point.
         * @param y The `y` coordinate of the point.
         * @param z The `z` coordinate of the point.
         * @param distance The maximum distance of entities from the point.
         */
        filterDistance(x: number, y: number, z: number, distance: number): $EntityArrayList;
        /**
         * Filters the entity list based on the provided `EntitySelector`.
         * 
         * @param selector The entity selector. It may be a string representing the entity selector as seen in commands, such as `'@e[distance=..25]'`
         */
        filterSelector(selector: $EntitySelector): $EntityArrayList;
        /**
         * Results in an entity list containing only players.
         */
        filterPlayers(): $EntityArrayList;
        sendData(channel: string): void;
        static ALWAYS_TRUE_PREDICATE: $Predicate<$Entity>;
        /**
         * @deprecated
         */
        constructor(level: $Level, entities: $Iterable_<$Entity>);
        constructor(entities: $Iterable_<$Entity>);
        constructor(size: number);
        get first(): $Entity;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $KubePlayerEvent {
    }
    export interface $KubePlayerEvent extends $KubeLivingEntityEvent {
        getEntity(): $Player;
        getPlayer(): $Player;
        get entity(): $Player;
        get player(): $Player;
    }
    /**
     * Values that may be interpreted as {@link $KubePlayerEvent}.
     */
    export type $KubePlayerEvent_ = (() => $Player);
    export class $KubeJSPlayerEventHandler {
        static dimensionChanged(event: $PlayerEvent$PlayerChangedDimensionEvent): void;
        static cloned(event: $PlayerEvent$Clone): void;
        static tick(event: $PlayerTickEvent$Post): void;
        static respawn(event: $PlayerEvent$PlayerRespawnEvent): void;
        static advancement(event: $AdvancementEvent$AdvancementEarnEvent): void;
        static loggedIn(event: $PlayerEvent$PlayerLoggedInEvent): void;
        static loggedOut(event: $PlayerEvent$PlayerLoggedOutEvent): void;
        static inventoryOpened(event: $PlayerContainerEvent$Open): void;
        static inventoryClosed(event: $PlayerContainerEvent$Close): void;
        static chatDecorate(event: $ServerChatEvent): void;
        static chatReceived(event: $ServerChatEvent): void;
        static datapackSync(event: $OnDatapackSyncEvent): void;
        constructor();
    }
    export class $PlayerRespawnedKubeEvent implements $KubePlayerEvent {
        /**
         * Gets the player that respawned.
         */
        getEntity(): $ServerPlayer;
        isEndConquered(): boolean;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(player: $ServerPlayer, endConquered: boolean);
        get entity(): $ServerPlayer;
        get endConquered(): boolean;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $PlayerChatReceivedKubeEvent implements $KubePlayerEvent {
        getMessage(): string;
        getEntity(): $ServerPlayer;
        setComponent(component: $Component_): void;
        getComponent(): $Component;
        getUsername(): string;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $ServerChatEvent);
        get message(): string;
        get entity(): $ServerPlayer;
        get username(): string;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $StageChangedEvent implements $KubePlayerEvent {
        getEntity(): $Player;
        getPlayer(): $Player;
        getStage(): string;
        getPlayerStages(): $Stages;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(player: $Player, stages: $Stages, stage: string);
        get entity(): $Player;
        get player(): $Player;
        get stage(): string;
        get playerStages(): $Stages;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeJSInventoryListener implements $ContainerListener {
        slotChanged(container: $AbstractContainerMenu, index: number, stack: $ItemStack_): void;
        dataChanged(container: $AbstractContainerMenu, id: number, value: number): void;
        player: $Player;
        constructor(p: $Player);
    }
    export class $SimplePlayerKubeEvent implements $KubePlayerEvent {
        getEntity(): $Player;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(p: $Player);
        get entity(): $Player;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $PlayerClonedKubeEvent implements $KubePlayerEvent {
        /**
         * Gets the player that respawned.
         */
        getEntity(): $ServerPlayer;
        /**
         * Gets the player that was before respawn. Note that this entity is already removed from the world.
         */
        getOldPlayer(): $ServerPlayer;
        /**
         * Gets whether the player's data was kept, e.g. when returning from the end.
         */
        getKeepData(): boolean;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(player: $ServerPlayer, oldPlayer: $ServerPlayer, keepData: boolean);
        get entity(): $ServerPlayer;
        get oldPlayer(): $ServerPlayer;
        get keepData(): boolean;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $ChestKubeEvent extends $InventoryKubeEvent {
        /**
         * Gets the chest block.
         */
        getBlock(): $LevelBlock;
        /**
         * Gets the chest inventory.
         */
        getInventory(): $Container;
        constructor(player: $Player, menu: $AbstractContainerMenu);
        get block(): $LevelBlock;
        get inventory(): $Container;
    }
    export class $PlayerAdvancementKubeEvent implements $KubePlayerEvent {
        /**
         * Returns the player that got the advancement.
         */
        getEntity(): $ServerPlayer;
        /**
         * Returns the advancement that was obtained.
         */
        getAdvancement(): $AdvancementNode;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(player: $ServerPlayer, advancementNode: $AdvancementNode);
        get entity(): $ServerPlayer;
        get advancement(): $AdvancementNode;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $InventoryKubeEvent implements $KubePlayerEvent {
        /**
         * Gets the player that opened or closed the container.
         */
        getEntity(): $Player;
        /**
         * Gets the container that was opened or closed.
         */
        getInventoryContainer(): $AbstractContainerMenu;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(player: $Player, menu: $AbstractContainerMenu);
        get entity(): $Player;
        get inventoryContainer(): $AbstractContainerMenu;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $PlayerStatsJS {
        get(stat: $Stat_<never>): number;
        add(stat: $Stat_<never>, value: number): void;
        set(stat: $Stat_<never>, value: number): void;
        getDamageDealt_absorbed(): number;
        getDamageBlocked_by_shield(): number;
        getDamageDealt_resisted(): number;
        static wrapStat(o: $Object): $Stat<never>;
        getDeaths(): number;
        getJumps(): number;
        getKilled(entity: $EntityType<never>): number;
        getSwimDistance(): number;
        getDamageDealt(): number;
        getDamageAbsorbed(): number;
        getAnimalsBred(): number;
        getPlayerKills(): number;
        getItemsDropped(item: $Item): number;
        getDamageResisted(): number;
        getKilledBy(entity: $EntityType<never>): number;
        getItemsBroken(item: $Item): number;
        getItemsUsed(item: $Item): number;
        getPlayTime(): number;
        getFishCaught(): number;
        getSprintDistance(): number;
        getMobKills(): number;
        getItemsCrafted(item: $Item): number;
        getDamageTaken(): number;
        getItemsPickedUp(item: $Item): number;
        getTimeSinceRest(): number;
        getTimeCrouchTime(): number;
        getCrouchDistance(): number;
        getWalkDistance(): number;
        getBlocksMined(block: $Block): number;
        getTimeSinceDeath(): number;
        player: $Player;
        constructor(p: $Player, s: $StatsCounter);
        get damageDealt_absorbed(): number;
        get damageBlocked_by_shield(): number;
        get damageDealt_resisted(): number;
        get deaths(): number;
        get jumps(): number;
        get swimDistance(): number;
        get damageDealt(): number;
        get damageAbsorbed(): number;
        get animalsBred(): number;
        get playerKills(): number;
        get damageResisted(): number;
        get playTime(): number;
        get fishCaught(): number;
        get sprintDistance(): number;
        get mobKills(): number;
        get damageTaken(): number;
        get timeSinceRest(): number;
        get timeCrouchTime(): number;
        get crouchDistance(): number;
        get walkDistance(): number;
        get timeSinceDeath(): number;
    }
}
