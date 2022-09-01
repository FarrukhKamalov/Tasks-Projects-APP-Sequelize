import {Task} from '../models/Task.js';


const getTasks = async(req, res)=>{
    try {
        const tasks = await  Task.findAll();
        res.status(200).json({
            status: "OK",
            data: tasks
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getTask = async(req,res)=>{
    try {
        const {id} = req.params;
        const task = await Task.findAll({
            where: {
                id
            }
        })

        res.status(200).json({
            status: 'OK',
            data: task
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const createTask = async(req,res)=>{
    try {
        const {name, done, projectId} = req.body;
        const newTask = await Task.create({
            name, 
            done,
            projectId
        });
        res.status(201).json({
            status: "Created",
            data: newTask
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const updateTask = async(req,res)=>{
    try {
        const {id} = req.params;
        const updateTask = await Task.findOne({
            where: {
                id
            }
        });
        updateTask.set(req.body)
        await updateTask.save()

        res.status(200).json({
            status: "Updated",
            data: updateTask
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}


const deleteTask = async(req,res)=>{
    try {
        const id = req.params.id;

        await Task.destroy({
             where: {id}
         })
     
         res.sendStatus(204);
    } catch (error) {
        res.status(500).send(error.message)
    }  
}

export {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}