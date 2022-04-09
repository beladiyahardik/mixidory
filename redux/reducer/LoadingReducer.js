import { IS_LOADING } from "../type";

const Loading = false;
export const LoadingReducer = (state = Loading, action) => {
    switch(action.type){
        case IS_LOADING:{
            state = action.payload;
        }
        default: return state;
    }
}