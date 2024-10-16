


import userRepostry from "../Repostrylayer/userRepostry";

class Authservice{
      private userRepostry:userRepostry
      constructor(){
        this.userRepostry=new userRepostry()
      }
    async signupuser(name:string,email:string,phone:number,password:string):Promise<Boolean|undefined>{
       try{
         const user=await this.userRepostry.createUser(name,email,phone,password)
         return user
       }catch(err){
         console.log(err)
       }
        
    }
    async loginUser(email:string,password:string):Promise<Boolean|undefined>{
        try{
            const user=await this.userRepostry.findByemail(email,password)
            return user
        }catch(err){
          console.log(err)
        }
         
     }
}


export default Authservice