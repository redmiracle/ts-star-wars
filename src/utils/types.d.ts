export interface SWcontextValue{
    page:string,
    changePage:(page:string)=>void,
}

export interface Item{
    title:string,
    path:string,
}
export interface Hero {
    name:string,
    image:string,
    url:string,
}

export interface Characters {
[key:string]:Hero,

}
