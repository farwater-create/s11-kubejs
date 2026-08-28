
declare module "@package/xaero/map/util/linked" {
    export class $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
    }
    export interface $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
        isDestroyed(): boolean;
        setPrevious(arg0: V): void;
        getPrevious(): V;
        getNext(): V;
        setNext(arg0: V): void;
        onDestroyed(): void;
        get destroyed(): boolean;
    }
}
