import {TodoAction, TodoActionTypes} from "../../types/todo";
import {Dispatch} from "redux";
import axios from "axios";

const url='https://jsonplaceholder.typicode.com/todos';
export const fetchTodos=(page=1,limit=10)=>{
    return async (dispatch:Dispatch<TodoAction>)=>{
        try {
            dispatch({type:TodoActionTypes.FETCH_TODOS});
            const responce=await axios.get(url,{
                params:{_page:page,_limit:limit}
            });
            setTimeout(()=>{

                dispatch({type:TodoActionTypes.FETCH_TODOS_SUCCESS,
                    payload:responce.data})
            },500)

        }catch (e) {
            dispatch({type:TodoActionTypes.FETCH_TODOS_ERRORS,
                payload:'Error loading todos'})
        }
    }
};

export function setTodopage(page:number):TodoAction {
    return {type:TodoActionTypes.SET_TODO_PAGE,payload:page}
}