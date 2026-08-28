import { $HolderLookup$Provider, $BlockPos, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $UUID, $Collection_ } from "@package/java/util";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/de/maxhenkel/corpse/corelib/death" {
    export class $PlayerDeathEvent extends $Event {
        getSource(): $DamageSource;
        getPlayer(): $ServerPlayer;
        removeDrops(): void;
        getDeath(): $Death;
        storeDeath(): void;
        constructor(arg0: $Death, arg1: $ServerPlayer, arg2: $DamageSource_);
        get source(): $DamageSource;
        get player(): $ServerPlayer;
        get death(): $Death;
    }
    export class $Death {
        getId(): $UUID;
        getTimestamp(): number;
        getDimension(): string;
        getPosY(): number;
        getPosX(): number;
        getEquipment(): $NonNullList<$ItemStack>;
        getModel(): number;
        getBlockPos(): $BlockPos;
        getPlayerUUID(): $UUID;
        getPlayerName(): string;
        getAdditionalItems(): $NonNullList<$ItemStack>;
        getMainInventory(): $NonNullList<$ItemStack>;
        getArmorInventory(): $NonNullList<$ItemStack>;
        static fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Death;
        getAllItems(): $NonNullList<$ItemStack>;
        processDrops(arg0: $Collection_<$ItemEntity>): void;
        getExperience(): number;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        toNBT(arg0: $HolderLookup$Provider, arg1: boolean): $CompoundTag;
        getPosZ(): number;
        getOffHandInventory(): $NonNullList<$ItemStack>;
        static fromPlayer(arg0: $Player): $Death;
        get id(): $UUID;
        get timestamp(): number;
        get dimension(): string;
        get posY(): number;
        get posX(): number;
        get equipment(): $NonNullList<$ItemStack>;
        get model(): number;
        get blockPos(): $BlockPos;
        get playerUUID(): $UUID;
        get playerName(): string;
        get additionalItems(): $NonNullList<$ItemStack>;
        get mainInventory(): $NonNullList<$ItemStack>;
        get armorInventory(): $NonNullList<$ItemStack>;
        get allItems(): $NonNullList<$ItemStack>;
        get experience(): number;
        get posZ(): number;
        get offHandInventory(): $NonNullList<$ItemStack>;
    }
}
