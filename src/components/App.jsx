import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/Feedback';
import { Section } from './Section/Section';

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
    // function onClick(options) {
    //   console.log('dvdv');
    //   this.setState(prevState => ({
    //     [options.name]: prevState[options.name] + 1,
    //   }));
    // }

    return (
      <div>
       <Section title={"Please leave feedback"}>
        {this.options.map(option => (
          <FeedbackOptions
            key={option.key}
            option={option}
            onLeaveFeedback={this.handleGoodIncrement}
          />
        ))}

        {<Statistics
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
