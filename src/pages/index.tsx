import { useState } from "react";

type Question = {
  id: number;
  text: string;
  options: string[];
  next: { value: string; nextId: number }[];
  sentence1?: string;
  sentence2?: string;
  sentence3?: string;
};


const questions: Question[] = [
  {
    id: 1,
    text: "Question 1: Do you prefer cats or dogs?",
    options: ["Cats", "Dogs"],
    next: [
      { value: "Cats", nextId: 2 },
      { value: "Dogs", nextId: 3 },
    ],
    sentence1: "You prefer cats",
    sentence2: "You prefer dogs",
  },
  {
    id: 2,
    text: "Question 2: Do you have a cat?",
    options: ["Yes", "No"],
    next: [
      { value: "Yes", nextId: 4 },
      { value: "No", nextId: 6 },
    ],
    sentence1: "You have a cat",
    sentence2: "You do not have a cat",
  },
  {
    id: 3,
    text: "Question 2: Do you have a dog?",
    options: ["Yes", "No"],
    next: [
      { value: "Yes", nextId: 5 },
      { value: "No", nextId: 6 },
    ],
    sentence1: "You have a dog",
    sentence2: "You do not have a dog",
  },
  {
    id: 4,
    text: "Question 3: What breed of cat do you have?",
    options: ["Persian", "Siamese"],
    next: [],
    sentence1: "You have a Persian cat",
    sentence2: "You have a Siamese cat",
  },
  {
    id: 5,
    text: "Question 3: What breed of dog do you have?",
    options: ["Labrador", "Retriever"],
    next: [],
    sentence1: "You have a Labrador",
    sentence2: "You have a Retriever",
  },
  {
    id: 6,
    text: "Question 3: Why don't you have a pet?",
    options: ["Allergic", "Too busy", "Don't like pets"],
    next: [],
    sentence1: "You are allergic to pets",
    sentence2: "You are too busy to have a pet",
    sentence3: "You don't like pets",
  },
];


export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option: string) => {
    const answer = { question: currentQuestion.text, answer: option };
    setAnswers([...answers, JSON.stringify(answer)]);

    const nextQuestionId = currentQuestion.next.find((n) => n.value === option)?.nextId;
    const nextQuestion = questions.find((q) => q.id === nextQuestionId);
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(questions[0]);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div>
      {!showResult ? (
        <div>
          <h1>Question {currentQuestion.id}</h1>
          <h2>{currentQuestion.text}</h2>
          {currentQuestion.options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h1>Quiz Result</h1>
          <p>You answered {answers.length} questions.</p>
          <ul>
            {answers.map((answer) => (
              <li key={answer}>{answer}</li>
            ))}
          </ul>
          <button onClick={resetQuiz}>Reset Quiz</button>
        </div>
      )}
    </div>
  );
}