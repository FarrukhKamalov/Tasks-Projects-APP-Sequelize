import {Router} from 'express';
import { createProject, deleteProject, EditProject, getByIdProject, getProjects, getProjectTasks } from '../controllers/project.controller.js';
const router = Router();

router.get('/projects', getProjects)
router.get('/projects/:id', getByIdProject)
router.post('/projects', createProject)
router.put('/projects/:id', EditProject)
router.delete('/projects/:id', deleteProject)
router.get('/projects/:id/tasks', getProjectTasks)

export default router;