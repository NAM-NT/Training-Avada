import { GetAllProduct, GetOneProduct, AddOneProduct, UpdateOneProduct, DeleteOneProduct } from "../../database/controlData.js";

const GetProducts =  async (ctx) =>{
    try{
        let {limit, sort} = ctx.request.query;
        const products = GetAllProduct(limit, sort)
        ctx.body ={
            data: products
        };
    }catch(e){
        ctx.status = 404;
        ctx.body={
            success: false,
            data:[],
            error: e.message
        };
    }
}


const GetProduct = async (ctx) =>{
    try{
        const {id} = ctx.params;
        const product = GetOneProduct(id);
        if (product){
            return ctx.body ={
                data: product
            };
        }
        else{
            throw new Error("Not Found!")
        }
        
    }catch (e){
        ctx.status = 404;
        return ctx.body = {
            success: false,
            data : [],
            error: e.message
        } 
    }
}

const UpdateProduct = async (ctx)=>{
    try{
        const input = ctx.request.body;
        const {id} = ctx.params;
        console.log(id)
        UpdateOneProduct(id,input)
        ctx.status = 201;
        return ctx.body ={
            success : true
        }

    }catch (e){
        return ctx.body ={
            success : false,
            error: e.message
        }
    }
}

const AddProduct = async(ctx) =>{
    try{
        const input = ctx.request.body;
        AddOneProduct(input)
        return ctx.body ={
            success : true
        }
    }catch(e){
        ctx.status = 404;
        return ctx.body= {
            success: false,
            error: e.message
        }
    }
}
const DeleteProduct = async(ctx) =>{
    try{
        const {id} = ctx.params;
        DeleteOneProduct(id)
        return ctx.body ={
            success : true
        }
    }catch(e){
        ctx.status = 404;
        return ctx.body= {
            success: false,
            error: e.message
        }
    }
}


export {GetProducts, GetProduct, UpdateProduct, AddProduct, DeleteProduct}