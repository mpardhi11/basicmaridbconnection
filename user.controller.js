import db from "./db.auth.js"


const User = db.user;


class userController {
    static sayHello = async (req,res) =>[
        res.json({message :"Hello World"})
    ]


}


export default userController