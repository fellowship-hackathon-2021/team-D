const questions = [
  {
    question: "What is the command to run a React Native project?",
    answers: [
      { id: "1", text: "npm go" },
      { id: "2", text: "npm -start" },
      { id: "3", text: "npm -s" },
      { id: "4", text: "npm start",correct:true }
    ]
  },
  {
    question: "How do we test for strong equality in JavaScript?",
    answers: [
      { id: "1", text: "=" },
      { id: "2", text: "==" },
      { id: "3", text: "===", correct: true  },
      { id: "4", text: "!="}
    ]
  },
  {
    question: "What component must a text component be wrapped in inside React Native?",
    answers: [
      { id: "1", text: "<p></p>" },
      { id: "2", text: "<span></span>" },
      { id: "3", text: "<div></div>" },
      { id: "4", text: "<View></View>", correct: true }
    ]
  },
  {
    question: "Which technology allows users to communicate with back-end in React Native?",
    answers: [
      { id: "1", text: "Fetch" },
      { id: "2", text: "XML" },
      { id: "3", text: "jQuery" },
      { id: "4", text: "Axios", correct: true }
    ]
  },
  {
    question: "Which service allows us to have a serverless back-end?",
    answers: [
      { id: "1", text: "AWS EC2" },
      { id: "2", text: "AWS Lambda", correct: true },
      { id: "3", text: "MongoDB" },
      { id: "4", text: "Express.js" }
    ]
  }
];

export default questions;
