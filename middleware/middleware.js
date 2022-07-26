const jwt = require("jsonwebtoken");



    let mid = async function(req,res,next)
    {

        try{
        let Token = req.headers["x-api-key"]
        if(Token){
            let DecodedToken = jwt.verify(Token , "secret-key" )      
            if(DecodedToken){

           req.DecodedToken = decodedToken
            next()
            
            }

        }

    }
    catch(err){
        return res.status(500).send({ERR:err.message})}
}
   
module.exports.mid=mid