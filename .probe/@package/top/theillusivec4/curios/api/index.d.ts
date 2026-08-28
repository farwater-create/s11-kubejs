import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $IEntitiesData, $ISlotData } from "@package/top/theillusivec4/curios/api/type/data";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";
export * as type from "@package/top/theillusivec4/curios/api/type";
export * as event from "@package/top/theillusivec4/curios/api/event";
export * as extensions from "@package/top/theillusivec4/curios/api/extensions";
export * as client from "@package/top/theillusivec4/curios/api/client";

declare module "@package/top/theillusivec4/curios/api" {
    export class $SlotContext extends $Record {
        index(): number;
        visible(): boolean;
        identifier(): string;
        cosmetic(): boolean;
        entity(): $LivingEntity;
        constructor(identifier: string, entity: $LivingEntity, index: number, cosmetic: boolean, visible: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SlotContext}.
     */
    export type $SlotContext_ = { index?: number, cosmetic?: boolean, visible?: boolean, entity?: $LivingEntity, identifier?: string,  } | [index?: number, cosmetic?: boolean, visible?: boolean, entity?: $LivingEntity, identifier?: string, ];
    export class $SlotResult extends $Record {
        stack(): $ItemStack;
        slotContext(): $SlotContext;
        constructor(slotContext: $SlotContext_, stack: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $SlotResult}.
     */
    export type $SlotResult_ = { stack?: $ItemStack_, slotContext?: $SlotContext_,  } | [stack?: $ItemStack_, slotContext?: $SlotContext_, ];
    export class $CuriosDataProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        generate(arg0: $HolderLookup$Provider, arg1: $ExistingFileHelper): void;
        copyEntities(arg0: string, arg1: string): $IEntitiesData;
        copySlot(arg0: string, arg1: string): $ISlotData;
        createSlot(arg0: string): $ISlotData;
        createEntities(arg0: string): $IEntitiesData;
        constructor(arg0: string, arg1: $PackOutput, arg2: $ExistingFileHelper, arg3: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
}
