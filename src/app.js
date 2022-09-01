//import 
import express from 'express';
import {sequelize} from './database/database.js';
import ProjectRouter from './routes/projects.routes.js';
import './models/Project.js' 
import './models/Task.js';
import TaskRouter from './routes/tasks.routes.js'
// app setting
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// sequelize 
sequelize.sync({force: false}).then(() => { 
        console.log('Connection has been established successfully.'); 
    }).catch(err => { 
        console.error('Unable to connect to the database:', err); 
}); 

//routes
app.use('/api/v1/', ProjectRouter)
app.use('/api/v1/', TaskRouter)


// server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(PORT)   
})