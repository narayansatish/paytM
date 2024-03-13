const { JWT_SECRET } = require("./config");

const jwt = require("jsonwebtoken");

export function authMiddleWare(req , res , next){

    let token = req.headers.authorization;

    if (!token) {

         res.status(401).json({ message: 'No token provided' });

    }
    token=token.split(" ");
    token=token[1];
    if (err) {
        res.status(403).json({ message: 'Failed to authenticate token' });
   }
   try {
    const decodedToken =  jwt.verify(token, JWT_SECRET)
    req.user = decodedToken;
    next()
} catch (error) {
    res.status(400).send("Failed to verify token");
}

   

}