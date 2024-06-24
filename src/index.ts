import express from 'express';
import connectDB from './database';
import Task from './models/tasks';
import cors from 'cors';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Habilitar CORS
app.use(cors());

// Rota para obter tarefas
app.get('/tasks', async (req, res) => {
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

// Rota para adicionar uma nova tarefa
app.post('/tasks', async (req, res) => {
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

// Rota para editar uma tarefa
app.put('/tasks/:id', async (req, res) => {
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
  
  // Rota para excluir uma tarefa
  app.delete('/tasks/:id', async (req, res) => {
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

// Rota para marcar uma tarefa como concluída
app.patch('/tasks/:id/complete', async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });
      if (!updatedTask) {
        return res.status(404).send({ message: 'Task not found' });
      }
      res.json(updatedTask);
    } catch (err) {
      res.status(500).send({ message: 'Error marking task as completed', error: (err as Error).message });
    }
  });

  // Rota para atualizar o status de uma tarefa
app.patch('/tasks/:id/status', async (req, res) => {
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
  

// Conectar ao MongoDB e iniciar o servidor
connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
