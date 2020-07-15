import React, { Component } from 'react';
import {QuizData} from './QuizData'

 class Quiz extends React.Component {
     state ={
         userAnswer :null ,
         currentQuestion :0,
         options :[] ,
         quizEnd : false, 
         score:0 ,
         disapled :true 
     }
     loadQuiz= ()  => {
         const {currentQuestion} = this.state;
        
        this.setState(()=> {
            return{
                questions :QuizData[currentQuestion].question,
                options :QuizData[currentQuestion].options,
                answers :QuizData[currentQuestion].answer,

            }
        })
     }
  componentDidMount(){
      this.loadQuiz();
  }
  nextQuestionHandler = () =>{
      const {userAnswer , answers, score} = this.state;
      this.setState(
          {
            currentQuestion:this.state.currentQuestion +1 
          }
      )

      if(userAnswer === answers){
          this.setState({
              score : score +1 
          })
      }
  }
  componentDidUpdate(prevProps, prevState){
      const {currentQuestion} =this.state;
      if(this.state.currentQuestion !== prevState.currentQuestion){
          this.setState(() =>{
            return{
                disapled :true,
                questions :QuizData[currentQuestion].question,
                options :QuizData[currentQuestion].options,
                answers :QuizData[currentQuestion].answer,

            }
          })

      }

  }

checkAnswer= answer =>{
    this.setState({
        userAnswer :answer ,
        disapled :false
    })

}

finishHandler = ()=>{
    if(this.state.currentQuestion === QuizData.length -1 ) {
        this.setState({
          quizEnd:true  
        })
    }

}
    render() {
        const {questions ,options ,currentQuestion ,userAnswer ,quizEnd} =this.state;
    if(quizEnd){
        return(
            <div>
                <h2> test finished : Score is {this.state.score}</h2>
                <p> The correct answer was</p>
                <ul>
                    {QuizData.map((item , index) => (
                       <li className ="ui floating message options "
                       key={index}>
                      {item.answer}
                       </li>
                   ))}
                </ul>
            </div>
        )
    }


        return (
            <div className="App">
              <h2>{questions}</h2>  
        <span>{`Questions ${currentQuestion} out of ${QuizData.length-1 }`}</span>
                {options.map(option => (
                    <p
                    key = {option.id}
                    onClick={()=>this.checkAnswer(option)}
                    className={`ui floating message options
                    ${userAnswer === option ? "selected" :null }
                    `}>
                         {option}

                    </p>
                ))}
               {currentQuestion < QuizData.length -1 && 
                <button
                className="ui inverted button "
                disabled={this.state.disapled}
                onClick={this.nextQuestionHandler}
                >Next</button>
            }
                {currentQuestion === QuizData.length -1 && 
                <button
                disabled={this.state.disapled}
                className="ui inverted button "
                onClick={this.finishHandler}
                 >Finish</button>
                }
            </div>
        )
    }
}
export default Quiz;
