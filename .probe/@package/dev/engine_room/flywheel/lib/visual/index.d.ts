import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $TickableVisual, $TickableVisual$Context, $DynamicVisual$Context, $LightUpdatedVisual, $Visual, $SectionTrackedVisual$SectionCollector_, $EntityVisual, $DynamicVisual, $BlockEntityVisual } from "@package/dev/engine_room/flywheel/api/visual";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3f, $FrustumIntersection } from "@package/org/joml";

declare module "@package/dev/engine_room/flywheel/lib/visual" {
    export class $AbstractVisual implements $Visual {
        update(partialTick: number): void;
        "delete"(): void;
        constructor(ctx: $VisualizationContext, level: $Level, partialTick: number);
    }
    export class $SimpleTickableVisual {
    }
    export interface $SimpleTickableVisual extends $TickableVisual {
        tick(arg0: $TickableVisual$Context): void;
        planTick(): $Plan<$TickableVisual$Context>;
    }
    export class $AbstractBlockEntityVisual<T extends $BlockEntity> extends $AbstractVisual implements $BlockEntityVisual<T>, $LightUpdatedVisual {
        isVisible(frustum: $FrustumIntersection): boolean;
        getVisualPosition(): $BlockPos;
        doDistanceLimitThisFrame(context: $DynamicVisual$Context): boolean;
        setSectionCollector(sectionCollector: $SectionTrackedVisual$SectionCollector_): void;
        constructor(ctx: $VisualizationContext, blockEntity: T, partialTick: number);
        get visualPosition(): $BlockPos;
        set sectionCollector(value: $SectionTrackedVisual$SectionCollector_);
    }
    export class $SimpleDynamicVisual {
    }
    export interface $SimpleDynamicVisual extends $DynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
    }
    export class $AbstractEntityVisual<T extends $Entity> extends $AbstractVisual implements $EntityVisual<T> {
        distanceSquared(x: number, y: number, z: number): number;
        isVisible(frustum: $FrustumIntersection): boolean;
        getVisualPosition(partialTick: number): $Vector3f;
        getVisualPosition(): $Vector3f;
        constructor(ctx: $VisualizationContext, entity: T, partialTick: number);
    }
}
