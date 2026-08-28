import { $LongFunction_ } from "@package/java/util/function";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";

declare module "@package/com/moulberry/axiom/collections" {
    export class $PositionConsumer<T> {
    }
    export interface $PositionConsumer<T> {
        accept(arg0: number, arg1: number, arg2: number, arg3: T): void;
    }
    /**
     * Values that may be interpreted as {@link $PositionConsumer}.
     */
    export type $PositionConsumer_<T> = ((arg0: number, arg1: number, arg2: number, arg3: T) => void);
    export class $Position2ObjectMap<T> {
        get(x: number, y: number, z: number): T;
        put(x: number, y: number, z: number, v: T): void;
        clear(): void;
        copy(): $Position2ObjectMap<T>;
        forEachEntry(consumer: $PositionConsumer_<T>): void;
        getOrCreate(x: number, y: number, z: number): T;
        calculateChunksChanged(other: $Position2ObjectMap<T>): $LongSet;
        forEachChunk(consumer: $PositionConsumer_<T[]>): void;
        getOrCreateChunk(xC: number, yC: number, zC: number): T[];
        getOrCreateChunk(pos: number): T[];
        chunkKeySet(): $LongSet;
        mergeAllFrom(other: $Position2ObjectMap<T>, keys: $LongSet): void;
        removeChunk(xC: number, yC: number, zC: number): T[];
        removeChunk(pos: number): T[];
        getChunk(pos: number): T[];
        getChunk(xC: number, yC: number, zC: number): T[];
        getAndPut(x: number, y: number, z: number, v: T): T;
        putChunk(xC: number, yC: number, zC: number, array: T[]): void;
        putChunk(pos: number, array: T[]): void;
        constructor(defaultChunkSupplier: $LongFunction_<T[]>);
    }
}
