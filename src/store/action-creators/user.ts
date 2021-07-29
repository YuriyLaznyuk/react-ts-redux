import {UserAction, UserActionType} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

const url='https://jsonplaceholder.typicode.com/users';
export const fetchUsers=()=>{
    return async (dispatch:Dispatch<UserAction>)=>{
        try {
          dispatch({type:UserActionType.FETCH_USERS});
            const responce=await axios.get(url);
            setTimeout(()=>{

          dispatch({type:UserActionType.FETCH_USERS_SUCCESS,
              payload:responce.data})
            },500)

        }catch (e) {
            dispatch({type:UserActionType.FETCH_USERS_ERROR,
                payload:'Error loading users'})
        }
    }
};