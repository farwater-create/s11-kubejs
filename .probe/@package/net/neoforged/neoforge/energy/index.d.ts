import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";

declare module "@package/net/neoforged/neoforge/energy" {
    /**
     * An energy storage is the unit of interaction with Energy inventories.
     * 
     * A reference implementation can be found at `EnergyStorage`.
     * 
     * Derived from the Redstone Flux power system designed by King Lemming and originally utilized in Thermal Expansion and related mods.
     * Created with consent and permission of King Lemming and Team CoFH. Released with permission under LGPL 2.1 when bundled with Forge.
     */
    export class $IEnergyStorage {
    }
    export interface $IEnergyStorage {
        /**
         * Returns the amount of energy currently stored.
         */
        getMaxEnergyStored(): number;
        /**
         * Returns the amount of energy currently stored.
         */
        getEnergyStored(): number;
        /**
         * Returns if this storage can have energy extracted.
         * If this is false, then any calls to extractEnergy will return 0.
         */
        canExtract(): boolean;
        /**
         * Returns if this storage can have energy extracted.
         * If this is false, then any calls to extractEnergy will return 0.
         */
        canReceive(): boolean;
        /**
         * Adds energy to the storage. Returns the amount of energy that was accepted.
         */
        extractEnergy(toReceive: number, simulate: boolean): number;
        /**
         * Adds energy to the storage. Returns the amount of energy that was accepted.
         */
        receiveEnergy(toReceive: number, simulate: boolean): number;
        get maxEnergyStored(): number;
        get energyStored(): number;
    }
    /**
     * Implementation of `IEnergyStorage` that cannot store, receive, or provide energy.
     * Use the `#INSTANCE`, don't instantiate. Example:
     * 
     * {@code
     * ItemStack stack = ...;
     * IEnergyStorage storage = stack.getCapability(ForgeCapabilities.ENERGY).orElse(EmptyEnergyStorage.INSTANCE);
     * // Use storage without checking whether it's present.
     * }
     */
    export class $EmptyEnergyStorage implements $IEnergyStorage {
        getMaxEnergyStored(): number;
        getEnergyStored(): number;
        canExtract(): boolean;
        canReceive(): boolean;
        extractEnergy(maxReceive: number, simulate: boolean): number;
        receiveEnergy(maxReceive: number, simulate: boolean): number;
        static INSTANCE: $EmptyEnergyStorage;
        get maxEnergyStored(): number;
        get energyStored(): number;
    }
    /**
     * Reference implementation of `IEnergyStorage`. Use/extend this or implement your own.
     * 
     * Derived from the Redstone Flux power system designed by King Lemming and originally utilized in Thermal Expansion and related mods.
     * Created with consent and permission of King Lemming and Team CoFH. Released with permission under LGPL 2.1 when bundled with Forge.
     */
    export class $EnergyStorage implements $IEnergyStorage, $INBTSerializable<$Tag> {
        getMaxEnergyStored(): number;
        getEnergyStored(): number;
        canExtract(): boolean;
        canReceive(): boolean;
        serializeNBT(provider: $HolderLookup$Provider): $Tag;
        deserializeNBT(provider: $HolderLookup$Provider, nbt: $Tag_): void;
        extractEnergy(toReceive: number, simulate: boolean): number;
        receiveEnergy(toReceive: number, simulate: boolean): number;
        constructor(capacity: number, maxReceive: number, maxExtract: number, energy: number);
        constructor(capacity: number, maxReceive: number, maxExtract: number);
        constructor(capacity: number, maxTransfer: number);
        constructor(capacity: number);
        get maxEnergyStored(): number;
        get energyStored(): number;
    }
    /**
     * Variant of `EnergyStorage` for use with data components.
     * 
     * The actual data storage is managed by a data component, and all changes will write back to that component.
     * 
     * To use this class, register a new `DataComponentType` which holds an `Integer` for your item.
     * Then reference that component from your `ICapabilityProvider` passed to `RegisterCapabilitiesEvent#registerItem` to create an instance of this class.
     */
    export class $ComponentEnergyStorage implements $IEnergyStorage {
        getMaxEnergyStored(): number;
        getEnergyStored(): number;
        canExtract(): boolean;
        canReceive(): boolean;
        extractEnergy(toReceive: number, simulate: boolean): number;
        receiveEnergy(toReceive: number, simulate: boolean): number;
        /**
         * Creates a new ItemEnergyStorage with a transfer rate equivalent to the capacity.
         */
        constructor(parent: $MutableDataComponentHolder, energyComponent: $DataComponentType<number>, capacity: number);
        /**
         * Creates a new ItemEnergyStorage with a unified receive / extract rate.
         */
        constructor(parent: $MutableDataComponentHolder, energyComponent: $DataComponentType<number>, capacity: number, maxTransfer: number);
        /**
         * Creates a new ComponentEnergyStorage with a data component as the backing store for the energy value.
         */
        constructor(parent: $MutableDataComponentHolder, energyComponent: $DataComponentType<number>, capacity: number, maxReceive: number, maxExtract: number);
        get maxEnergyStored(): number;
        get energyStored(): number;
    }
}
