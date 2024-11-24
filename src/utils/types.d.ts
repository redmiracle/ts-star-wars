export interface SWcontextValue{
    headerName: string;
    setHeaderName: (name: string) => void;
}

export interface Item{
    title:string,
    path:string,
}
export interface Hero {
    name:string,
    img:string,
    url:string,
}

export interface Characters {
[key:string]:Hero,

}
