const express = require('express')
      cors = require('cors')

class Server {
     
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.userPath = '/api/user'

        // Midlewares
        this.midlewares()

        // app routes
        this.routes();
    }

    midlewares(){
        // cors
        this.app.use(cors())

        // read and parse 
        this.app.use(express.json())

        // Public dir
        this.app.use(express.static('public'))
    }

    routes(){

        this.app.use(this.userPath, require('../routes/user'));
        
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('server running on port: '+ this.port);
        })
    }
}

module.exports = Server;