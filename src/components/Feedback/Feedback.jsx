import { Wrapper, Button } from "./Feedback.styled";
export const FeedbackOption = ({ option, onLeaveFeedback }) => {
  return (
    <div>
        <Button name={option.name} 
        onClick={() => onLeaveFeedback(option)} 
        type="button">
          {option.name}
        </Button>
    </div>
  );
};
