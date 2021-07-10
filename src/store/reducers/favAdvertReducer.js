import { ADD_FAV_ADV, REMOVE_FAV_ADV } from "../actions/favAdvertActons";
import { favAdvItems } from "../initialValues/favAdvItems"

const initialState={
    favAdvItems:favAdvItems
}
//gönderdiğim aksiyona göre favllistin son hali burada görünür
export default function favAdvertReducer(state=initialState,{type,payload}) {
    switch (type) {
        case ADD_FAV_ADV:
            let advertisement = state.favAdvItems.find(a=>a.advertisement.id===payload.id);
            if (advertisement) {
                advertisement.quantity++;
                 return{
                  ...state,
                };
            }else{
                return{
                    ...state,
                    favAdvItems:[...state.favAdvItems,{quantity:1,advertisement:payload}]
                }
            }
            case REMOVE_FAV_ADV:
                return{
                    ...state,
                    favAdvItems:state.favAdvItems.filter(a=>a.advertisement.id !== payload.id)
                };
           default:
               return {...state};
    }
}