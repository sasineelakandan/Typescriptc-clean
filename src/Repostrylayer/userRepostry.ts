






import User from "../model/Usermodel"
import Hashutils from "../utilitylayer/Hashutility"
import { login, signup } from "../Interface/Interface"
class userRepostry{
    private hashutils:Hashutils
    constructor(){
        this.hashutils=new Hashutils()
    }

    async createUser(name:string,email:string,phone:number,password:string):Promise<boolean|undefined>{
       

       try{
        
        
          const existuser=await User.findOne({email})

          if(existuser){
             return false
          }
          const hashpassword=await this.hashutils.hashpassword(password)
           const user=await new User({
             name,
             email,
             phone,
             password:hashpassword
           })
            await user.save()
            return true 
           
            
       }catch(err){
         console.log(err)
       }
    }
    async findByemail(email:string,password:string):Promise<Object|undefined>{
        try{
          
          
          const user=await User.findOne({email})
        
          const userpassword = await this.hashutils.isMatch(password, user?.password as string);
          if(userpassword){
            return user?.toObject()
          }else{
            return undefined
          }
        }catch(err){
         
        }
        
       
    }
}


export default userRepostry