export interface propPrompt {
    title : string,
    message:string,
    response:object
}

export interface respApi {
    title : string,
    message:string,
    response:object
}
export interface reqApi{
    url:string,
    data:object
}

export interface btnPostData{
    url:string,
    data:object,
    name:string
}

export interface propView{
    view : string
}