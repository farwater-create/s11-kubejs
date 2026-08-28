import { $AzBakedModel, $AzBoneSnapshot } from "@package/mod/azure/azurelib/common/model";
import { $AzAnimationContext } from "@package/mod/azure/azurelib/common/animation";
import { $Map } from "@package/java/util";

declare module "@package/mod/azure/azurelib/common/animation/cache" {
    export class $AzBoneCache {
        update(arg0: $AzAnimationContext<never>): void;
        isEmpty(): boolean;
        getBakedModel(): $AzBakedModel;
        setActiveModel(arg0: $AzBakedModel): boolean;
        getBoneSnapshotsByName(): $Map<string, $AzBoneSnapshot>;
        setBakedModel(arg0: $AzBakedModel): void;
        getTemplateModel(): $AzBakedModel;
        constructor();
        get empty(): boolean;
        set activeModel(value: $AzBakedModel);
        get boneSnapshotsByName(): $Map<string, $AzBoneSnapshot>;
        get templateModel(): $AzBakedModel;
    }
}
