
function successResponse(res, message , data ={}){
return res.status(200).json({
    success: true,
    message,
    data
})

}

function errorResponse(res, message ){
    return res.status(400).json({
        success: false,
        message
    })
}

module.exports = {
    successResponse,
    errorResponse
}
