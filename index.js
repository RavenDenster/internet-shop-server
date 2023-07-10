require('dotenv').config()
const expess = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = expess()
app.use(cors())
app.use(expess.json())
app.use(fileUpload({}))
app.use(expess.static(path.resolve(__dirname, 'static')))
app.use('/api', router)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({message: 'WORKING!!!'})
})

const start = async() => {
    try {
        await sequelize.authenticate() // устанавливает подключение к бд
        await sequelize.sync() // сверяет состояние базы данных сос схомой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()