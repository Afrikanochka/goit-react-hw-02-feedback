import React, {Component} from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';
import SectionTitle from './sectionTitle/SectionTitle';
import Statistics from './statistics/Statistics';

class App extends Component {
    state = { 
        good: 0,
        neutral: 0,
        bad: 0
     }

     addFeedback = option => {
      this.setState(state => ({
        [option]: state[option] + 1,
      }));
    };

     countTotalFeedback = () => {
        const { good, bad, neutral } = this.state;
        return good + bad + neutral;
      };

      countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Math.round((good / this.countTotalFeedback()) * 100);
      };

    render() {
        const {good, neutral, bad} = this.state;
        return (
            <>
            <SectionTitle title="Please leave your feedback">
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback} />
            </SectionTitle>
            <SectionTitle title="Statistics">
            {this.countTotalFeedback() ? (
            <Statistics good={good}
             neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
             positivePercentage={this.countPositiveFeedbackPercentage()} />
            ) : (
              <Notification message="No feedback given" />
            )}
            </SectionTitle>
            </>
        );
    }
}

export default App;

