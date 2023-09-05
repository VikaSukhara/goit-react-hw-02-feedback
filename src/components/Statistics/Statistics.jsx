import {Paragraph} from './Statistics.styled'
export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      <Paragraph>Good: {good}</Paragraph>
      <Paragraph>Neutral: {neutral}</Paragraph>
      <Paragraph>Bad: {bad}</Paragraph>
      <Paragraph>Total: {total}</Paragraph>
      <Paragraph>Positive feedback: {percentage} %</Paragraph>
    </>
  );
};
