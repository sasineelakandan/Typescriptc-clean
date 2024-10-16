import { Request,Response,NextFunction } from "express"
import { signup,login } from "../Interface/Interface"
import Authservice from "../Servicelayer/service"








class AuthController {
    private authservice!: Authservice; 

    constructor() {
        this.authservice = new Authservice(); 
    }

     signup=async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
        try {
            const { name, email, phone, password }: signup = req.body;

    
            const user = await this.authservice.signupuser(name, email, phone, password);
           
            res.send(user)
            
           
        } catch (err) {
            console.error(err);
           
        }
    }

    async login(req: Request, res: Response, next: NextFunction){
        try{
             const {email,password}:login=req.body
             const user=await this.authservice.loginUser(email,password)
             
              res.send(user)
             
        }catch(err){
          console.log(err)
        }
    }
}



export default AuthController