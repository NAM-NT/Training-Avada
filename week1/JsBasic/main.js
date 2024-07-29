import { GetAllComment, GetAllUsers, GetAllPost } from "./callAPI.js";
import * as fs from "fs";

let dataUser
let dataComments
let dataPosts
let FomattResultTask2
const StoreData = async (Name, data) => {
  try {
    fs.writeFileSync(`./${Name}.json`, JSON.stringify(data));
    console.log(`Data has been stored in ${Name}.json`);
  } catch (error) {
    console.error(`Error writing file ${Name}.json`, error);
  }
};

const Task1 = async () => {
  try {
    dataUser = await GetAllUsers(); 
    await StoreData("userData", dataUser); 
  } catch (error) {
    console.error("Error in main function", error);
  }
  // console.log(dataUser)
};

const GetDataCommentAndPost = async ()=>{
    try{
        [dataComments, dataPosts] = await Promise.all([
            GetAllComment(),
            GetAllPost()
          ]);
        // console.log(dataComments)
    }catch (error) {
        console.error("Error in main function", error);
    }
}

const Task2 = async (dataUser, dataComment, dataPost)=>{
  let dataFomattResult = await dataUser.map(user=>{
    let UserPost = dataPost.filter(Post=> Post.userId === user.id)
    let PostComment = dataComment.filter(comment => UserPost.some(post => post.id === comment.postId))
    
    return {
      id : user.id,
      name: user.name,
      username : user.username,
      email: user.email,
      comment: PostComment.map(cmt =>({
        id: cmt.id,
        postId: cmt.postId,
        name: cmt.name,
        body:cmt.body
      })),
      post: UserPost.map(pst=>({
        id: pst.id,
        title: pst.title,
        body: pst.body
      }))
    }
  })
  StoreData("fomattResult",dataFomattResult )
  return dataFomattResult
}


const main = async ()=>{
  await Task1()
  await GetDataCommentAndPost()
  FomattResultTask2 =  await Task2(dataUser, dataComments, dataPosts)
}

main()
