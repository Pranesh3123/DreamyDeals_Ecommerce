import {createSlice,configureStore} from '@reduxjs/toolkit';
const initialState ={
    items:[],
    count:0
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem(state,action){
            state.items.push(action.payload);
            state.count+=1
        },
        deleteItems(state,action) {
            state.items.splice(action.payload,1);
            state.count-=1
        }
    }
});

export const actions=cartSlice.actions;

const store =configureStore({
    reducer:{
        cartState:cartSlice.reducer
    }
});

export default store;