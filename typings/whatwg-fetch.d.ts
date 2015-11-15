///<reference path="es6-promise/es6-promise.d.ts"/>

declare var fetch: {
    <T>(url: string): Promise<IFetchResponse<T>>;
    <T>(url: string, obj: IFetchParameters): Promise<IFetchResponse<T>>;
};

declare interface IFetchResponse<T> {
    type: string;
    status: string;
    ok: boolean;
    statusText: string;
    headers: IFetchResponseHeader[],
    url: string;
    text(): string;
    json(): Promise<T>;
}

declare interface IFetchResponseHeader{
    
}

declare interface IFetchParameters {

}