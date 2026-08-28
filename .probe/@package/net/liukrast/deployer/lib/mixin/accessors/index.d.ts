import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $AdvancementBehaviour } from "@package/com/simibubi/create/foundation/advancement";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Random, $UUID, $List, $Map } from "@package/java/util";
import { $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $MutableVertexList } from "@package/dev/engine_room/flywheel/api/vertex";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BlockPos, $Direction_ } from "@package/net/minecraft/core";
import { $InventoryIdentifier } from "@package/com/simibubi/create/api/packager";
import { $KineticEffectHandler } from "@package/com/simibubi/create/content/kinetics/base";
import { $VersionedInventoryTrackerBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ICapabilityProvider } from "@package/com/simibubi/create/foundation";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $STBEExtension } from "@package/net/liukrast/deployer/lib/mixinExtensions";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $SimpleMaterial } from "@package/dev/engine_room/flywheel/lib/material";
import { $LogisticallyLinkedBehaviour } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/liukrast/deployer/lib/mixin/accessors" {
    export class $AllIconsAccessor {
    }
    export interface $AllIconsAccessor {
        getIconY(): number;
        getIconX(): number;
        invokeVertex(arg0: $VertexConsumer, arg1: $Matrix4f, arg2: $Vec3_, arg3: $Color, arg4: number, arg5: number, arg6: number): void;
        get iconY(): number;
        get iconX(): number;
    }
    export class $FluidMeshAccessor$FluidStreamAccessor {
        static invokePutQuad(arg0: $MutableVertexList, arg1: number, arg2: $Direction_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    }
    export interface $FluidMeshAccessor$FluidStreamAccessor {
    }
    export class $ValueBoxAccessor {
        static drawString8x(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Component_, arg3: number, arg4: number, arg5: number): void;
    }
    export interface $ValueBoxAccessor {
    }
    export class $FluidMeshAccessor {
        static invokeMaterial(arg0: $TextureAtlasSprite): $SimpleMaterial;
    }
    export interface $FluidMeshAccessor {
    }
    export class $StockKeeperRequestScreenAccessor {
    }
    export interface $StockKeeperRequestScreenAccessor {
    }
    export class $KineticBlockEntityAccessor {
    }
    export interface $KineticBlockEntityAccessor {
        getEffects(): $KineticEffectHandler;
        get effects(): $KineticEffectHandler;
    }
    /**
     * Values that may be interpreted as {@link $KineticBlockEntityAccessor}.
     */
    export type $KineticBlockEntityAccessor_ = (() => $KineticEffectHandler);
    export class $FlowSourceAccessor {
        static getEMPTY(): $ICapabilityProvider<$IFluidHandler>;
        static get EMPTY(): $ICapabilityProvider<$IFluidHandler>;
    }
    export interface $FlowSourceAccessor {
        getLocation(): $BlockFace;
        get location(): $BlockFace;
    }
    /**
     * Values that may be interpreted as {@link $FlowSourceAccessor}.
     */
    export type $FlowSourceAccessor_ = (() => $BlockFace);
    export class $StockKeeperRequestScreenAccessor$CategoryEntryAccessor {
    }
    export interface $StockKeeperRequestScreenAccessor$CategoryEntryAccessor {
        getName(): string;
        getY(): number;
        setHidden(arg0: boolean): void;
        setY(arg0: number): void;
        getTargetBECategory(): number;
        getHidden(): boolean;
        get name(): string;
        get targetBECategory(): number;
    }
    export class $StockTickerBlockEntityAccessor {
    }
    export interface $StockTickerBlockEntityAccessor extends $STBEExtension {
        getHiddenCategoriesByPlayer(): $Map<$UUID, $List<number>>;
        getCategories(): $List<$ItemStack>;
        getActiveLinks(): number;
        get hiddenCategoriesByPlayer(): $Map<$UUID, $List<number>>;
        get categories(): $List<$ItemStack>;
        get activeLinks(): number;
    }
    export class $LogisticsManagerAccessor {
        static getR(): $Random;
        static invokeGetInventoryIdentifierFromLink(arg0: $LogisticallyLinkedBehaviour): $InventoryIdentifier;
        static get r(): $Random;
    }
    export interface $LogisticsManagerAccessor {
    }
    export class $FactoryPanelBehaviourAccessor {
    }
    export interface $FactoryPanelBehaviourAccessor {
        deployer$tickRequests(): void;
        deployer$invokeNotifyRedstoneOutputs(): void;
    }
    export class $FilteringBehaviourAccessor {
    }
    export interface $FilteringBehaviourAccessor {
        setValueBoxTransform(arg0: $ValueBoxTransform): void;
        set valueBoxTransform(value: $ValueBoxTransform);
    }
    /**
     * Values that may be interpreted as {@link $FilteringBehaviourAccessor}.
     */
    export type $FilteringBehaviourAccessor_ = ((arg0: $ValueBoxTransform) => void);
    export class $PackagerBlockEntityAccessor {
    }
    export interface $PackagerBlockEntityAccessor {
        invokeGetLinkPos(): $BlockPos;
        invokeSupportsBlockEntity(arg0: $BlockEntity): boolean;
        getInvVersionTracker(): $VersionedInventoryTrackerBehaviour;
        getAdvancement(): $AdvancementBehaviour;
        get invVersionTracker(): $VersionedInventoryTrackerBehaviour;
        get advancement(): $AdvancementBehaviour;
    }
}
