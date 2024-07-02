import axiosInstance from "../../../Services/Interceptor";
import {
    HASH_TAG_REQUEST,
HASH_TAG_SUCCESS,
HASH_TAG_FAIL
} from "./HashTagConstant";



export const getHashTagData = (id) => async (dispatch) => {
    try {
        dispatch({ type: HASH_TAG_REQUEST });
        if(id){
            const res = await axiosInstance.get(`/apa-config/api/v1/hashtags/all?statusId=${id}`);

            if (res?.data?.status === 200) {
                dispatch({
                    type: HASH_TAG_SUCCESS,
                    payload: res?.data?.data,

                });
            }
        }else{
            const res = await axiosInstance.get(`/apa-config/api/v1/hashtags/all`);

            if (res?.data?.status === 200) {
                dispatch({
                    type: HASH_TAG_SUCCESS,
                    payload: res?.data?.data,

                });
            }
        }
        

    } catch (err) {
        dispatch({
            type: HASH_TAG_FAIL,
            error: err.message
        }
        )
    }
}




