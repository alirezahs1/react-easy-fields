export function finder(id: any,data: any[]) {
    return data.findIndex((v,k)=>v.id===id)
}