export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <div>
        <button name={option.name} 
        onClick={() => onLeaveFeedback(option)} 
        type="button">
          {option.name}
        </button>
    </div>
  );
};
