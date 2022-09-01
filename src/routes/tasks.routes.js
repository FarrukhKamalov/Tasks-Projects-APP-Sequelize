import {Router} from 'express';
const router = Router();
import {deleteTask, updateTask, getTask, getTasks, createTask} from '../controllers/task.controller.js'

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
export default router;