import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import questions from './../questions/questions.json';

class QuizSummary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            questions,
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0,
            explanations:{}
        };
    }

    componentDidMount () {
        const { state } = this.props.location;
        if (state) {
            this.setState({
                questions,
                score: (state.score / state.numberOfQuestions) * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
                hintsUsed: state.hintsUsed,
                fiftyFiftyUsed: state.fiftyFiftyUsed
            },()=>{
                this.loadExplanations();
            });
        }
    }
    loadExplanations = () => {
  const { questions, selectedOptions } = this.state;
  const explanations = [];
  questions.forEach((question, index) => {
    const userAnswer = selectedOptions && selectedOptions[index];
    if (question.answer !== userAnswer) {
      const selectedOption = userAnswer || 'Not answered';
      explanations.push({
        question: question.question,
        explanation: question.explanation,
        correctAnswer: question.answer,
        userAnswer,
        selectedOption,
      });
    }
  });
  this.setState({
    explanations,
  });
};
    render () {
        const { state } = this.props.location;
        let stats, remark;
        const { explanations } = this.state;
        const userScore = this.state.score;

        if (userScore <= 30 ) {
            remark = 'You need more practice!';
        } else if (userScore > 30 && userScore <= 50) {
            remark = 'Better luck next time!';
        } else if (userScore <= 70 && userScore > 50) {
            remark = 'You can do better!';
        } else if (userScore >= 71 && userScore <= 84) {
            remark = 'You did great!';
        } else {
            remark = 'You\'re an absolute genius!';
        }

        if (state !== undefined) {
            stats = (
                <Fragment>
                    <Container>
                        <Row>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <Col>
                    <h1 className='text-center mt-5'>Quiz has ended</h1>
                    <div className="container stats">
                        <div className="remarkandscore d-flex justify-content-around">
                        <h4>{remark}</h4>
                        <h4>Your Score: <b>{this.state.score.toFixed(0)}&#37;</b></h4></div>
                        <div className="breakdown text-center">
                        <span className="stat left">Total number of questions: </span>
                        <span className="right"><b>{this.state.numberOfQuestions}</b></span><br />

                        <span className="stat left">Number of attempted questions: </span>
                        <span className="right"><b>{this.state.numberOfAnsweredQuestions}</b></span><br />

                        <span className="stat left">Number of Correct Answers: </span>
                        <span className="right"><b>{this.state.correctAnswers}</b></span> <br />

                        <span className="stat left">Number of Wrong Answers: </span>
                        <span className="right"><b>{this.state.wrongAnswers}</b></span><br />

                        <span className="stat left">Hints Used: </span>
                        <span className="right"><b>{this.state.hintsUsed}</b></span><br />

                        <span className="stat left">50-50 Used: </span>
                        <span className="right"><b>{this.state.fiftyFiftyUsed}</b></span>
                        </div>
                    </div>
                    <section>
                        <div className='d-flex justify-content-between m-3'>
                            
                                <Link to ="/play/start" className='btn btn-primary'>Play Again</Link>
                            
                                <Link to ="/" className='btn btn-outline-danger'>Back to Home</Link>
                            
                        </div>
                    </section>
                    </Col>
                   
                   {/* Display explanations */}
                   {/* {Object.keys(explanations).map((questionId) => (
  <div key={questionId} className="explanation">
    <h3>Explanation for Question {questionId}:</h3>
    <p>Question: {explanations[questionId].question}</p>
    <p>Explanation: {explanations[questionId].explanation}</p>
    <p>Correct Answer: {explanations[questionId].correctAnswer}</p>
    <p>Your Answer: {explanations[questionId].userAnswer}</p>
  </div>
))} */}
{Object.values(explanations).map((explanation, index) => (
  <div key={index} className="explanation btn btn-light mb-4">
    <h3>Question {index + 1}:</h3>
    <p>Question: {explanation.question}</p>
    <p>Explanation: {explanation.explanation}</p>
    <p>Correct Answer: {explanation.correctAnswer}</p>
    
  </div>
))}


</Row>
                    </Container>
                </Fragment>
            );
        } 
        else {
            stats = (
                <section>
                    <h1 className="no-stats">No Statistics Available</h1>
                    <ul>
                        <li>
                            <Link to ="/play/quiz">Take a Quiz</Link>
                        </li>
                        <li>
                            <Link to ="/">Back to Home</Link>
                        </li>
                    </ul>
                </section>
            );

        }
        
        return (
            <Fragment>
                <Helmet><title>Quiz App - Summary</title></Helmet>
                <div className="quiz-summary">
                    {stats}
                </div>
            </Fragment>
            
        );
        
    }
}

export default QuizSummary;