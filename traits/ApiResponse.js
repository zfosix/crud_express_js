const responseNotFound = (res) => {
     res.status(404).json({
         success: false,
         message: 'Not Found'
     })
 }
 
 const responseSuccess = (res, result, message) => {
     res.status(200).json({
         success: true,
         message: message,
         data: result
     })
 }   
 
 module.exports = {
     responseNotFound,
     responseSuccess
 }