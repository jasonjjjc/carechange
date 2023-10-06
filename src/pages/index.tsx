import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

// create a type for the questions
type Question = {
  id: number;
  text: string;
  options: { answer: string; sentence: string }[];
  next: { value: string; nextId: number }[];
};

// fetch the questions from the api using getStaticProps so that the questions are available at build time

export const getStaticProps: GetStaticProps = async (context) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const accessKey = process.env.NEXT_PUBLIC_API_KEY;

  console.log(accessKey, url);
  if (!url) {
    console.error("NEXT_PUBLIC_API_URL environment variable is not set.");
    return {
      notFound: true,
    };
  }

  const headers = new Headers();
  headers.append("X-Access-Key", accessKey || "");

  const result = await fetch(url, {
    headers,
  });

  const data = await result.json();
  const questions = data.record;
  return {
    props: {
      questions,
    },
  };
};

// export const getStaticProps: GetStaticProps = async () => {
//   const result = await fetch("http://localhost:3000/api/questions");
//   const questions = await result.json();

//   return {
//     props: {
//       questions,
//     },
//   };
// };

// create a component that takes in the questions as a prop and renders the quiz

const Quiz: NextPage = ({
  questions,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // store the current question in state
  // const [questions, setQuestions] = useState<Question[]>(questions);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[0]
  );
  // store the sentences in state
  const [sentences, setSentences] = useState<string[]>([]);
  // store whether the result should be shown in state
  const [showResult, setShowResult] = useState(false);

  // handle the answer when a button is clicked
  const handleAnswer = (answer: string, sentence: string) => {
    // add the sentence to the sentences array
    setSentences([...sentences, sentence]);
    // find the next question id based on the answer
    const nextQuestionId = currentQuestion.next.find(
      (n) => n.value === answer
    )?.nextId;
    // find the next question based on the nextQuestionId
    const nextQuestion = questions.find(
      (q: Question) => q.id === nextQuestionId
    );
    if (nextQuestion) {
      // if there is a next question, then set it as the current question
      setCurrentQuestion(nextQuestion);
    } else {
      // if there is no next question, then we are done with the quiz so show the result
      setShowResult(true);
    }
  };

  // create a dynamic component that will be rendered only on the client side to copy the text to the clipboard
  const CC = dynamic(
    () =>
      import("../components/CopyClipboard").then((mod) => mod.CopyClipboard),
    { ssr: false }
  );

  // reset the quiz if the person wants to start again
  const resetQuiz = () => {
    setCurrentQuestion(questions[0]);
    setSentences([]);
    setShowResult(false);
  };

  return (
    <>
        <div className="flex flex-col gap-2 min-h-screen text-gray-800">
          <Navbar />
          {/* check whether the result should be shown or not */}
          {!showResult ? (
            <div className="flex flex-col gap-4 px-4 h-full md:max-h-3/4 justify-start items-center">
              {/* display the current question text */}
              <div className=" text-3xl text-center py-5">
                {currentQuestion?.text}
              </div>
              {/* display the options */}
              <div className="flex flex-col h-full justify-around">
                {currentQuestion?.options.map((option) => (
                  // use the answer as a unique key for each button to avoid list errors
                  // pass the answer and sentence to the handleAnswer function that runs when a button is clicked
                  <button
                    className="py-4 px-8 bg-gray-800 rounded-md text-white my-5"
                    key={option.answer}
                    onClick={() => handleAnswer(option.answer, option.sentence)}
                  >
                    {option.answer}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 px-4 h-full justify-around items-center ">
              {/* if the result should be shown, then display the sentences */}
              <h1 className="w-full text-4xl text-center my-5">Result</h1>
              {/* display the sentences joined on whitespace*/}
              <div className="max-w-4xl px-6">
                <p className="text-center">{sentences.join(" ")}</p>
              </div>
              {/* display the reset button */}
              <div className="flex flex-row justify-around w-full max-w-4xl my-10">
                <label className="py-4 px-8 bg-gray-800 text-white rounded-md">
                  <button className=" text-2xl" onClick={resetQuiz}>
                    Start Again
                  </button>
                </label>
                {/* display the copy to clipboard button */}
                <label className="pt-5 pr-7 pb-3 pl-8 bg-gray-800 text-white rounded-md">
                  <CC content={sentences.join(" ")} />
                </label>
              </div>
            </div>
          )}
        </div>
    </>
  );
};

export default Quiz;
