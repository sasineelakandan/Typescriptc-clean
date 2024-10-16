



import { login } from "../Interface/Interface"
import User from "../model/Usermodel"
import Hashutils from "../utilitylayer/Hashutility"

class userRepostry{
    private hashutils:Hashutils
    constructor(){
        this.hashutils=new Hashutils()
    }

    async createUser(name:string,email:string,phone:number,password:string):Promise<Boolean|undefined>{
       

       try{

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
    async findByemail(email:string,password:string):Promise<object|unknown>{
        const user=await User.findOne({email})
        
        const userpassword = await this.hashutils.isMatch(password, user?.password as string);
        
        return user
    }
}


export default userRepostry