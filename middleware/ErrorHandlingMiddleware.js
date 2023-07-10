const ApiError = require('../error/ApiError')

module.exports = function(err, req, res, next) { // когда цепочка доходит до этого мидлвейр, то в него кидается возникцая ошибка для обработки, которую мы поместили в некс в контролире
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message})
    } 
    return res.status(500).json({message: 'Непредвиденная ошибка!'})
}