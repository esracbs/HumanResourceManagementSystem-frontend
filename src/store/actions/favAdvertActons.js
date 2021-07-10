export const ADD_FAV_ADV="ADD_FAV_ADV"
export const REMOVE_FAV_ADV="REMOVE_FAV_ADV"

export function addFavAdv(advertisement){
    return{
        type:ADD_FAV_ADV,
        payload:advertisement
    }
}
export function removeFromFavs(advertisement){
    return{
        type:REMOVE_FAV_ADV,
        payload:advertisement
    }
}
