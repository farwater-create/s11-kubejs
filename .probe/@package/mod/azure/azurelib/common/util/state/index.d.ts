
declare module "@package/mod/azure/azurelib/common/util/state" {
    export class $StateMachine<C extends $StateMachineContext, T extends $State<C>> {
        update(arg0: C): void;
        getContext(): C;
        getState(): T;
        setState(arg0: T): void;
        constructor(arg0: T);
        get context(): C;
    }
}
