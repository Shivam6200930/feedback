interface Feedback {
    name: string;
    feedback: string;
  }
  
  const feedbacks: Feedback[] = [];
  
  export const getFeedback = (): Feedback[] => {
    return feedbacks;
  };
  
  export const addFeedback = (feedback: Feedback) => {
    feedbacks.push(feedback);
  };
  