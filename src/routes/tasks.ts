import express from 'express';
import connectDB from '../database';
import Task from '../models/tasks';
import cors from 'cors';

const router = express.Router();

// Ruta para obtener las tareas
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
});

// Ruta para adicionar una nueva tarea
router.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
});

// Ruta para editar una tarea
router.put('/tasks/:id', async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedTask) {
        return res.status(404).send({ message: 'Task not found' });
      }
      res.json(updatedTask);
    } catch (err) {
      res.status(500).send({ message: 'Error updating task', error: (err as Error).message });
    }
  });
  
  // Ruta para apagar una tarea
  router.delete('/tasks/:id', async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id);
      if (!deletedTask) {
        return res.status(404).send({ message: 'Task not found' });
      }
      res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      res.status(500).send({ message: 'Error deleting task', error: (err as Error).message });
    }
  });

// Ruta para marcar una tarea como concluída
router.patch('/tasks/:id/complete', async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, { completed: true, status: 'Completed' }, { new: true });
      if (!updatedTask) {
        return res.status(404).send({ message: 'Task not found' });
      }
      res.json(updatedTask);
    } catch (err) {
      res.status(500).send({ message: 'Error marking task as completed', error: (err as Error).message });
    }
  });

  
// Ruta para atualizar el status de una tarea
router.patch('/tasks/:id/status', async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
      );
      if (!updatedTask) {
        return res.status(404).send({ message: 'Task not found' });
      }
      res.json(updatedTask);
    } catch (err) {
      res.status(500).send({ message: 'Error updating task status', error: (err as Error).message });
    }
  });
  
  export default router;