const list=[]
export async function listUsers(){
    const response= await fetch('http://localhost:3000/users').then(response => response.json())

    const data=await response
    
    
    const string = data.map(user=>{
        return `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`
    }).join(',\n')

    console.log('[\n'+string+'\n]')
}

