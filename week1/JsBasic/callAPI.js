import fetch from "node-fetch"

const DefaultAPI = `https://jsonplaceholder.typicode.com`
const user =`users`
const comments = `comments`
const posts =`posts`

export const GetAllUsers = async ()=>{
    try {
        let data = await fetch(`${DefaultAPI}/${user}`);
        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }
        data = await data.json();
        // console.log(data)
        return data
    } catch (error) {
        console.error('Error:', error);
    }
    
}
   

export const GetAllPost = async () => {
    try{
        let data = await fetch(`${DefaultAPI}/${posts}`)
        if(!data.ok){
            throw new Error (`error`)
        }
        data = await data.json()
        // console.log(data)
        return data
    }
    catch(err){
        console.log("err: ", err)
    }
       

}
export const GetAllComment = async ()=>{
    try{
        let data = await fetch(`${DefaultAPI}/${comments}`)
        if(!data.ok){
            throw new Error (`error`)
        }
        data = await data.json()
        // console.log(data)
        return data
    }
    catch(err){
        console.log("err: ", err)
    }
}