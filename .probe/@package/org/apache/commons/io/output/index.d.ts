import { $OutputStream, $FilterOutputStream } from "@package/java/io";

declare module "@package/org/apache/commons/io/output" {
    export class $ProxyOutputStream extends $FilterOutputStream {
        constructor(arg0: $OutputStream);
    }
    export class $CountingOutputStream extends $ProxyOutputStream {
        getCount(): number;
        resetByteCount(): number;
        getByteCount(): number;
        resetCount(): number;
        constructor(arg0: $OutputStream);
        get count(): number;
        get byteCount(): number;
    }
}
