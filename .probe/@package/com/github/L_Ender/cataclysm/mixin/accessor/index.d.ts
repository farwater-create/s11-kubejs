import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $JigsawJunction, $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectListIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $StructureTemplate, $StructureTemplateManager, $StructureProcessorType } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $List, $List_ } from "@package/java/util";
import { $Beardifier$Rigid } from "@package/net/minecraft/world/level/levelgen";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";

declare module "@package/com/github/L_Ender/cataclysm/mixin/accessor" {
    export class $StructureProcessorAccessor {
    }
    export interface $StructureProcessorAccessor {
        callGetType(): $StructureProcessorType<never>;
    }
    /**
     * Values that may be interpreted as {@link $StructureProcessorAccessor}.
     */
    export type $StructureProcessorAccessor_ = (() => $StructureProcessorType<never>);
    export class $FeaturePoolElementAccessor {
    }
    export interface $FeaturePoolElementAccessor {
        getFeature(): $Holder<$PlacedFeature>;
        get feature(): $Holder<$PlacedFeature>;
    }
    /**
     * Values that may be interpreted as {@link $FeaturePoolElementAccessor}.
     */
    export type $FeaturePoolElementAccessor_ = (() => $Holder_<$PlacedFeature>);
    export class $ListPoolElementAccessor {
    }
    export interface $ListPoolElementAccessor {
        getElements(): $List<$StructurePoolElement>;
        get elements(): $List<$StructurePoolElement>;
    }
    /**
     * Values that may be interpreted as {@link $ListPoolElementAccessor}.
     */
    export type $ListPoolElementAccessor_ = (() => $List_<$StructurePoolElement>);
    export class $BoundingBoxAccessor {
    }
    export interface $BoundingBoxAccessor {
        setMinX(arg0: number): void;
        setMaxZ(arg0: number): void;
        setMaxX(arg0: number): void;
        setMinZ(arg0: number): void;
        setMaxY(arg0: number): void;
        setMinY(arg0: number): void;
        set minX(value: number);
        set maxZ(value: number);
        set maxX(value: number);
        set minZ(value: number);
        set maxY(value: number);
        set minY(value: number);
    }
    export class $BeardifierAccessor {
    }
    export interface $BeardifierAccessor {
        getPieceIterator(): $ObjectListIterator<$Beardifier$Rigid>;
        getJunctionIterator(): $ObjectListIterator<$JigsawJunction>;
        get pieceIterator(): $ObjectListIterator<$Beardifier$Rigid>;
        get junctionIterator(): $ObjectListIterator<$JigsawJunction>;
    }
    export class $LivingEntityRendererAccessor {
    }
    export interface $LivingEntityRendererAccessor {
        accessorScale(arg0: $LivingEntity, arg1: $PoseStack, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityRendererAccessor}.
     */
    export type $LivingEntityRendererAccessor_ = ((arg0: $LivingEntity, arg1: $PoseStack, arg2: number) => void);
    export class $SinglePoolElementAccessor {
    }
    export interface $SinglePoolElementAccessor {
        callGetTemplate(arg0: $StructureTemplateManager): $StructureTemplate;
    }
    /**
     * Values that may be interpreted as {@link $SinglePoolElementAccessor}.
     */
    export type $SinglePoolElementAccessor_ = ((arg0: $StructureTemplateManager) => $StructureTemplate);
    export class $StructureManagerAccessor {
    }
    export interface $StructureManagerAccessor {
        getLevel(): $LevelAccessor;
        get level(): $LevelAccessor;
    }
    /**
     * Values that may be interpreted as {@link $StructureManagerAccessor}.
     */
    export type $StructureManagerAccessor_ = (() => $LevelAccessor);
    export class $StructureTemplatePoolAccessor {
    }
    export interface $StructureTemplatePoolAccessor {
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        get rawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePoolAccessor}.
     */
    export type $StructureTemplatePoolAccessor_ = (() => $List_<$Pair<$StructurePoolElement, number>>);
}
