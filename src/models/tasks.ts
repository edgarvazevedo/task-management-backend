import mongoose, { Schema, Document } from 'mongoose';

interface ITask extends Document {
  name: string;
  description: string;
  dueDate: Date;
  completed: boolean;
  status: string;
}

const TaskSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: false },
  completed: { type: Boolean, default: false},
  status: { type: String, default: 'Pending' }
});

const Task = mongoose.model<ITask>('Task', TaskSchema);

export default Task;
