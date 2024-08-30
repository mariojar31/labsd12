export function delUser(number){
    try{
        fetch(`http://localhost:3000/users/${number}`,{method:'DELETE'})
    }catch(e){

    }
}
