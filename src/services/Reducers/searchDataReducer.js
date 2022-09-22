const searchDataReducerFn = (state = "", {type, payload}) => {
    // console.log(state)
    console.log('payload',payload)
    state = payload ? payload : '';
    return state;
};

export default searchDataReducerFn;