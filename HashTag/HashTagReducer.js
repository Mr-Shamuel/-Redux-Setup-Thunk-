import { HASH_TAG_SUCCESS } from "./HashTagConstant";

 

export const hashTagReducer = (state = { hashTagData: [] }, action) => {

    switch (action.type) {
        case HASH_TAG_SUCCESS:
            return {
                ...state,
                loading: false,
                hashTagData: action.payload,
            }
        default:
            return state;
    }

}



