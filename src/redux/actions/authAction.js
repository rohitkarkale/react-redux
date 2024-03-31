export function login(){
    alert("you are going to login")
    return{
        type : 'LOG_IN'
    }
}

export function logout(){
    return{
        type : 'LOG_OUT'
    }
}
