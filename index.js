const app = require('./app')

app.listen(app.get('port'), ()=>{
    console.log(`Running on localhost, port: ${app.get('port')}`)
})