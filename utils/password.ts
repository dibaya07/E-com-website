// import connected from '@/config/dbConnect';
// import bcrypt from 'bcrypt'
// import User from '@/models/user';


// // export const saltAndHashPassword = async(password : unknown)=>{
// // }

// export const getUserFromDb = async(email : unknown, password : unknown)=>{
//     // console.log('hello')
//     await connected();
//     if(!email || !password){
//         return null
//     }
    
//     const user =await User.findOne({email: email })
//     if(user){
//         // const pwHash = await bcrypt.hash(password as string, 10 );

//         if(await bcrypt.compare(password as string , user.password)){
//             return user;
//         }
//     }else{
//         return null;
//     }
//     return null;
// }