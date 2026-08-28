import { $Instance } from "@package/dev/engine_room/flywheel/api/instance";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $BlockEntityBehaviourRenderer } from "@package/com/cake/azimuth/behaviour/render";
import { $List, $List_ } from "@package/java/util";
import { $Consumer_, $Supplier } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BehaviourExtension, $SuperBlockEntityBehaviour } from "@package/com/cake/azimuth/behaviour";
import { $IRotate, $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/com/cake/azimuth/behaviour/extensions" {
    export class $KineticBehaviourExtension {
    }
    export interface $KineticBehaviourExtension extends $BehaviourExtension {
        attachKinetics(): void;
        addExtraPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        detachKinetics(): void;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        forcePropagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        repropagateKinetics(): void;
    }
    /**
     * Values that may be interpreted as {@link $KineticBehaviourExtension}.
     */
    export type $KineticBehaviourExtension_ = (() => void);
    export class $ItemRequirementBehaviourExtension {
    }
    export interface $ItemRequirementBehaviourExtension extends $BehaviourExtension {
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
    }
    export class $RenderedBehaviourExtension {
    }
    export interface $RenderedBehaviourExtension extends $BehaviourExtension {
        getRenderBoundingBox(): $AABB;
        getVisualFactory(): $RenderedBehaviourExtension$BehaviourVisualFactory;
        invalidateRenderBoundingBox(): void;
        getRenderer(): $RenderedBehaviourExtension$BehaviourRenderSupplier;
        rendersWhenVisualizationAvailable(): boolean;
        get renderBoundingBox(): $AABB;
        get visualFactory(): $RenderedBehaviourExtension$BehaviourVisualFactory;
        get renderer(): $RenderedBehaviourExtension$BehaviourRenderSupplier;
    }
    export class $RenderedBehaviourExtension$BehaviourVisualFactory {
    }
    export interface $RenderedBehaviourExtension$BehaviourVisualFactory {
        create(arg0: $VisualizationContext, arg1: $SuperBlockEntityBehaviour, arg2: $SmartBlockEntity, arg3: $AbstractBlockEntityVisual<never>, arg4: number): $RenderedBehaviourExtension$BehaviourVisual;
    }
    /**
     * Values that may be interpreted as {@link $RenderedBehaviourExtension$BehaviourVisualFactory}.
     */
    export type $RenderedBehaviourExtension$BehaviourVisualFactory_ = ((arg0: $VisualizationContext, arg1: $SuperBlockEntityBehaviour, arg2: $SmartBlockEntity, arg3: $AbstractBlockEntityVisual<never>, arg4: number) => $RenderedBehaviourExtension$BehaviourVisual);
    export class $RenderedBehaviourExtension$BehaviourRenderSupplier {
    }
    export interface $RenderedBehaviourExtension$BehaviourRenderSupplier extends $Supplier<$Supplier<$BlockEntityBehaviourRenderer<never>>> {
    }
    /**
     * Values that may be interpreted as {@link $RenderedBehaviourExtension$BehaviourRenderSupplier}.
     */
    export type $RenderedBehaviourExtension$BehaviourRenderSupplier_ = (() => void);
    export class $RenderedBehaviourExtension$BehaviourVisual {
        update(arg0: number): void;
        "delete"(): void;
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
        updateLight(arg0: number): void;
    }
}
