import fs from 'fs'
import data from './products.json' assert { type: 'json' };

/**
 * 
 */

const StroeData = (newData) =>{
    fs.writeFileSync('./src/database/products.json', JSON.stringify(newData)); 
}
const CheckData =(id) =>{
    let checkData = data.find(pr => pr.id === parseInt(id))
    if (checkData){
        return {
            result: true,
            ts : checkData
        }
    }
    else{
        return {
            result: false,
            ts : null
        }
    }
}


const GetAllProduct = (limit, order = 'asc') =>{
    limit = parseInt(limit)
    order = order.toString()
    const validLimit = (typeof limit === 'number' && limit > 0) ? limit : data.length;
    let result = data.slice(0, validLimit)
    if (order === 'asc') {
        return result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (order === 'desc') {
        return result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else {
        throw new Error('Invalid order parameter');
    }
}
const GetOneProduct = (id) => {
    let {result, ts} = CheckData(id)
    
    if (result === true){
        return ts
    }
    else{
        throw new Error("Notthing")
    }     
    
}

const AddOneProduct = (input) =>{
    let {result} = CheckData(input.id)
    if (result === false){
        if (!input.createdAt) {
            input.createdAt = new Date().toISOString();
        }
        let newData = [...data, input]
        StroeData(newData)        
    }
    else{
        throw new Error("Existing Products")
    }
}

const UpdateOneProduct = (id,input)=>{
    let {result, ts}= CheckData(id)
    if (result === true){
        ts.name= input.name
        ts.price= input.price,
        ts.description= input.description
        ts.product= input.product,
        ts.color= input.color,
        ts.createdAt = ts.createdAt = input.createdAt ?? ts.createdAt,
        ts.image = input.image
        StroeData(data)  
    }
    else{
        throw new Error("Not Found!")
    }
    
}

const DeleteOneProduct = (id) =>{
    let {result} = CheckData(id)
    console.log(result)
    if (result === true){
        let newData = data.filter(pr => pr.id !== parseInt(id))
        StroeData(newData)
    }
    else{
        throw new Error("Not Found!")
    }

}

export {GetAllProduct, GetOneProduct,AddOneProduct, UpdateOneProduct, DeleteOneProduct, }






