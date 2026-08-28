import { $ItemLike_, $ItemLike } from "@package/net/minecraft/world/level";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $BlockEntityRendererProvider_ } from "@package/net/minecraft/client/renderer/blockentity";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/darkhax/bookshelf/common/mixin/access/block" {
    export class $AccessorBaseContainerBlockEntity {
    }
    export interface $AccessorBaseContainerBlockEntity {
        bookshelf$name(arg0: $Component_): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorBaseContainerBlockEntity}.
     */
    export type $AccessorBaseContainerBlockEntity_ = ((arg0: $Component) => void);
    export class $AccessorBannerBlockEntity {
    }
    export interface $AccessorBannerBlockEntity {
        setName(arg0: $Component_): void;
        set name(value: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $AccessorBannerBlockEntity}.
     */
    export type $AccessorBannerBlockEntity_ = ((arg0: $Component) => void);
    export class $AccessorBlockEntityRenderers {
        static bookshelf$register(arg0: $BlockEntityType<any>, arg1: $BlockEntityRendererProvider_<any>): void;
    }
    export interface $AccessorBlockEntityRenderers {
    }
    export class $AccessorCropBlock {
    }
    export interface $AccessorCropBlock {
        bookshelf$getSeed(): $ItemLike;
    }
    /**
     * Values that may be interpreted as {@link $AccessorCropBlock}.
     */
    export type $AccessorCropBlock_ = (() => $ItemLike_);
}
