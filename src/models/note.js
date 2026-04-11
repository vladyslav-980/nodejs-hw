import { Schema } from 'mongoose';
import { model } from 'mongoose';

const noteSchema = new Schema(
  {
  title: {
    type: String,
      required: true,
      trim: true, // прибирає пробіли на початку та в кінці
    },
  content: {
   type: String,
      trim: true,
      default: '', // за замовчуванням порожній рядок, якщо не вказано
    },
    tag: {
      type: String,
      trim: true,
    enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'],
    default: 'Todo',
    },
    },
    {
     timestamps: true,
     versionKey: false,
   },
);

export const Note = model('Note', noteSchema);

