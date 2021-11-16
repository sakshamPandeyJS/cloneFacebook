export const initialState={
    user:""
}
export const actionTypes={
    SET_USER:"SET_USER"
};

const reducer=(state,action)=>{// state here is the initial state
    console.log('coming from reducer 2' );
    // console.log('state in reducer is',state);
    // console.log('action in reducer is',action);
    switch(action.type){
        case actionTypes.SET_USER: return {...state, user:action.user}
           default: return state
    };
 

}

export default reducer;