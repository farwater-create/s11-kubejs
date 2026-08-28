import { $AzAnimationControllerStateMachine$Context } from "@package/mod/azure/azurelib/common/animation/controller/state/machine";

declare module "@package/mod/azure/azurelib/common/animation/play_behavior" {
    export class $AzPlayBehavior {
        name(): string;
        onFinish(arg0: $AzAnimationControllerStateMachine$Context<never>): void;
        onUpdate(arg0: $AzAnimationControllerStateMachine$Context<never>): void;
    }
}
