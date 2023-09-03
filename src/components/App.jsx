import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOption } from './Feedback/Feedback';
import { Section } from './Section/Section';
import {Notification} from './Notification'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = [
    { key: 1, name: 'good' },
    { key: 2, name: 'neutral' },
    { key: 3, name: 'bad' },
  ];

  handleGoodIncrement = option => {
    this.setState(prevState => ({ [option.name]: prevState[option.name] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div style={{padding: '10px 50px'}}>
       <Section title={"Please leave feedback"}>
        <div style={{display: 'flex', gap: '10px'}}>
        {this.options.map(option => (
          <FeedbackOption
            key={option.key}
            option={option}
            onLeaveFeedback={this.handleGoodIncrement}
          />
        ))}
      </div>


{
(this.countTotalFeedback() === 0)? <Notification message="There is no feedback"/> :
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          percentage={this.countPositiveFeedbackPercentage()}
        />}
      </Section>
      </div>
    );
  }
}
