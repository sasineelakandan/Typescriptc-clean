
import pkg from 'bcryptjs';
const { genSalt, hash,compare } = pkg
class Hashutils{

  async hashpassword(password:string):Promise<string>{
     const salt=await genSalt(10)
     return await hash(password,salt)
  }

  async isMatch(password:string,userpassword:string):Promise<Boolean|undefined>{
    try{
       const passwordver=await compare(password,userpassword)
       console.log(passwordver)
       return passwordver
    }catch(err){
        console.log(err)
    }
  }
  
}

export default Hashutils