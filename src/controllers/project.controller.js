import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

const getProjects = async(req,res)=>{
    try {
        const getProject = await Project.findAll();
        res.status(200).json({
            status: "OK",
            data: getProject
        });
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const createProject = async(req,res)=>{
    try {
        const {name, priority, description} = req.body;
        const newProject = await Project.create({
            name,
            description,
            priority
        });
        
        if(!newProject) throw new  Error('Not Created');
        
        res.status(201).json({
            status: 'Created',
            data: newProject
        });
    } catch (error) {
        res.json(500).send(error.message)
    }
  
}

const getByIdProject = async(req,res)=>{
   try {
        const {id} = req.params;
        const getProject = await Project.findAll({
            where: {
                id
            }
        })
        res.status(200).json({
            status: 'OK',
            data: getProject
        });
   } catch (error) {
        res.json(500).send(error.message)
   }
}

const deleteProject = async(req,res)=>{
   try {
        const {id} = req.params;
       const deleteProject = await Project.destroy({
            where: {
                id
            }
        })
        if(!deleteProject) throw new  Error('Not Deleted');
        res.status(204).json({
            status: "Deleted"
        })
   } catch (error) {
        res.json(500).send(error.message)
   }
}

const EditProject = async(req,res)=>{
    try {
        const {id} = req.params;
        const {name, priority, description} = req.body
        const updateProject = await Project.findByPk(id);
        updateProject.name = name;
        updateProject.priority = priority;
        updateProject.description = description;
        await updateProject.save();

        if(!updateProject) throw new  Error('Not Updated');
        
        res.json({
            status: "Update",
            data: updateProject
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getProjectTasks = async(req,res)=>{
    try {
        const {id} = req.params;
        const tasks = await Task.findAll({
            where: { projectId: id}
        })
        res.status(200).json({
            status: 'OK',
            data: tasks
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export {
    getByIdProject, 
    getProjects,
    EditProject,
    createProject,
    deleteProject,
    getProjectTasks
}