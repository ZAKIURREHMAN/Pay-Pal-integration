const express = require('express')
const cors = require('cors')
const PORT = 5000;

const app = express()
app.use(cors())



app.use('/payment',require('./routes/paypal'))




app.listen(PORT,()=>{
    console.log(`Server is running in this PORT ${PORT} `)
})