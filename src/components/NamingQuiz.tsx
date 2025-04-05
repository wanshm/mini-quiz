import { useState } from 'react';

interface Answers {
  text: string;
  concealed: boolean;
}

export default function NamingQuiz() {
  const [input, setInput] = useState('');
  const [answers, setAnswers] = useState<Answers[]>([
    { text: 'Wanshui', concealed: true },
    { text: 'Melonie', concealed: true },
    { text: 'Mukhlis', concealed: true },
    { text: 'Max', concealed: true },
    { text: 'Andrew', concealed: true },
    { text: 'Colin', concealed: true },
    { text: 'Preston', concealed: true },
    { text: 'Albertyne', concealed: true },
    { text: 'Althea', concealed: true },
    { text: 'Anthony', concealed: true },
    { text: 'Corey', concealed: true },
    { text: 'Rony', concealed: true },
  ]);

  function won() {
    let count = 0;
    answers.forEach((answer) => {
      if (answer.concealed == false) {
        count++;
      }
    });
    return count == answers.length;
  }

  function toNameCase(name: string) {
    const fL = name.substring(0, 1).toUpperCase();
    const rest = name.substring(1).toLowerCase();
    return fL + rest;
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    const copy = [...answers];
    answers.forEach((answer, i) => {
      if (
        answer.text == toNameCase(e.target.value) &&
        answer.concealed == true
      ) {
        answers[i].concealed = false;
        setAnswers(copy);
        setInput('');
      }
    });
  }
  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
      {answers.map((answer: Answers, key) => {
        return (
          <div
            key={key}
            className={answer.concealed ? 'concealed' : 'revealed'}
          >
            <p>{!answer.concealed ? answer.text : '?'}</p>
          </div>
        );
      })}
      {won() && (
        <div>
          <h1>You win!!</h1>
        </div>
      )}
    </div>
  );
}
