export function getToken(){
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
}

export function removeToken(){
    sessionStorage.removeItem('token');
}