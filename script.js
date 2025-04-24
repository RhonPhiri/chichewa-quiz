
// 1. Define an array of questions with text, audio, and choices
const quizData = [
    {
      text: 'How do you say "Thank you" in Chichewa?',
      questionAudio: 'audio/q1.mp3',
      choices: [
        { text: 'Zikomo', audio: 'audio/a1.mp3', correct: true },
        { text: 'Moni', audio: 'audio/a2.mp3', correct: false },
        { text: 'Pepani', audio: 'audio/a3.mp3', correct: false },
        { text: 'Muli bwanji?', audio: 'audio/a4.mp3', correct: false }
      ]
    },
    {
      text: 'How do you greet someone in the morning?',
      questionAudio: 'audio/q2.mp3',
      choices: [
        { text: 'Muli bwanji?', audio: 'audio/b1.mp3', correct: false },
        { text: 'Moni', audio: 'audio/b2.mp3', correct: true },
        { text: 'Zikomo', audio: 'audio/b3.mp3', correct: false },
        { text: 'Pepani', audio: 'audio/b4.mp3', correct: false }
      ]
    }
    // add more questions here
  ];

  let currentIndex = 0;

  // DOM elements
const playQBtn   = document.getElementById('play-question');
const audioQ     = document.getElementById('audio-question');
const questionEl = document.getElementById('question-text');
const choicesDiv = document.getElementById('choices');
const feedbackDiv= document.getElementById('feedback');
const nextBtn    = document.getElementById('next-question');

// Load a question by index
function loadQuestion(index) {
  const q = quizData[index];

  // set question text & audio
  questionEl.textContent = q.text;
  audioQ.src = q.questionAudio;
  feedbackDiv.textContent = '';
  choicesDiv.innerHTML = '';

  // render choices
  q.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice.text;
    btn.addEventListener('click', () => {
      feedbackDiv.textContent = choice.correct ? '✅ Correct!' : '❌ Try again.';
    });

    // answer audio button
    const playA = document.createElement('button');
    playA.textContent = '🔊';
    playA.addEventListener('click', e => {
      e.stopPropagation();
      new Audio(choice.audio).play();
    });

    const wrapper = document.createElement('div');
    wrapper.appendChild(btn);
    wrapper.appendChild(playA);
    choicesDiv.appendChild(wrapper);
  });
}

// initial display
loadQuestion(currentIndex);

// event listeners
playQBtn.addEventListener('click', () => audioQ.play());
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % quizData.length;
  loadQuestion(currentIndex);
});