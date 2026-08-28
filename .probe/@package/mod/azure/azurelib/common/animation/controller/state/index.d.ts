import { $AzAnimationControllerStateMachine$Context } from "@package/mod/azure/azurelib/common/animation/controller/state/machine";
import { $State } from "@package/mod/azure/azurelib/common/util/state";
export * as machine from "@package/mod/azure/azurelib/common/animation/controller/state/machine";

declare module "@package/mod/azure/azurelib/common/animation/controller/state" {
    export class $AzAnimationState<T> implements $State<$AzAnimationControllerStateMachine$Context<T>> {
        onExit(arg0: $AzAnimationControllerStateMachine$Context<T>): void;
        isActive(): boolean;
        onEnter(arg0: $AzAnimationControllerStateMachine$Context<T>): void;
        get active(): boolean;
    }
}
