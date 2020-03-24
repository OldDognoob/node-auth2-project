const jwt = require('jsonwebtoken')
const THE_SECRET = process.env.THE_SECRET || '...not very secret...'

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    if(token){
        jwt.verify(
            token,
            THE_SECRET,
            (error, decodedToken) => {
                if(error){
                    res.status(401).json({
                        message: 'Token for strangers.'
                    })
                } else {
                    req.decodedToken = decodedToken
                    next()
                }
            }
        )
    }
    else {
        res.status(400).json({message: 'You need a token...'});
    }
}