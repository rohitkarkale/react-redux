const CountReducer = (state=100, action)=>{
    switch(action.type){
        case 'INC' :
            return state + 1;
        case "DEC" :
            return state - 1;
        case "RES" :
            return state=100;
        default : 
            return state 
    } 
}
export default CountReducer;