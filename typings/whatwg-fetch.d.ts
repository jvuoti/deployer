///<reference path="es6-promise/es6-promise.d.ts"/>

declare var fetch: {
    (url: string): Promise<IFetchResponse>;
    (url: string, obj: IFetchParameters): Promise<IFetchResponse>;
};

declare interface IFetchResponse {
    type: string;
    status: string;
    ok: boolean;
    statusText: string;
    headers: IFetchResponseHeader[],
    url: string;
    text(): string;
    json(): any;
}

declare interface IFetchResponseHeader{
    
}

declare interface IFetchParameters {

}