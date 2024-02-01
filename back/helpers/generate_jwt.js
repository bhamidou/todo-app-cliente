const jwt = require('jsonwebtoken')


const generarJWT = (uid = '', roles) => {
    return jwt.sign({uid, roles}, process.env.SECRETORPRIVATEKEY, {
        expiresIn: '4h' // 24 hours
    });
}

let blacklistedTokens = [];

const revokeToken = (token) => {
    blacklistedTokens.push(token);
 }

 const verifyToken = (token) => {
    if (blacklistedTokens.includes(token)) {
        throw new Error('Token has been revoked');
    }else{
        return 1
    }
}

module.exports ={
    generarJWT,
    revokeToken,
    verifyToken
}
