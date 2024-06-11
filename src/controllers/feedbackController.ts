import { Request, Response } from 'express';
import { getFeedback, addFeedback } from '../services/feedbackService';

export const getAllFeedback = (req: Request, res: Response) => {
  const feedbacks = getFeedback();
  res.json(feedbacks);
};

export const submitFeedback = (req: Request, res: Response) => {
  const { name, feedback } = req.body;
  if (!name || !feedback) {
    return res.status(400).json({ message: 'Name and feedback are required' });
  }
  addFeedback({ name, feedback });
  res.status(201).json({ message: 'Feedback submitted' });
};
