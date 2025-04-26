// --- Quiz data: add your own questions/audio here
const quizData = [
  {
    text: 'How do you say "Thank you" in Chichewa?',
    questionAudio: 'audio/q1.mp3',
    choices: [
      { text: 'Zikomo',    audio: 'audio/a1.mp3', correct: true },
      { text: 'Moni',      audio: 'audio/a2.mp3', correct: false },
      { text: 'Pepani',    audio: 'audio/a3.mp3', correct: false },
      { text: 'Muli bwanji?', audio: 'audio/a4.mp3', correct: false }
    ]
  },
  {
    text: 'How do you greet someone in the morning?',
    questionAudio: 'audio/q2.mp3',
    choices: [
      { text: 'Moni',      audio: 'audio/b1.mp3', correct: true },
      { text: 'Zikomo',    audio: 'audio/b2.mp3', correct: false },
      { text: 'Pepani',    audio: 'audio/b3.mp3', correct: false },
      { text: 'Muli bwanji?', audio: 'audio/b4.mp3', correct: false }
    ]
  }
];

let currentIndex = 0;
let score = 0;
// DOM refs
const playQBtn   = document.getElementById('play-question');
const audioQ     = document.getElementById('audio-question');
const questionEl = document.getElementById('question-text');
const choicesDiv = document.getElementById('choices');
const feedbackEl = document.getElementById('feedback');
const nextBtn    = document.getElementById('next-question');
const progTxt    = document.getElementById('progress-text');
const scoreTxt   = document.getElementById('score-text');

// Update progress & score display
function updateStatus() {
  progTxt.textContent = `Question ${currentIndex+1} of ${quizData.length}`;
  scoreTxt.textContent = `Score: ${score}`;
}

let selectedChoiceIndex = null; // Track the selected choice

// Render a question
function loadQuestion(i) {
  updateStatus();
  const q = quizData[i];
  questionEl.textContent = q.text;
  audioQ.src = q.questionAudio;
  feedbackEl.textContent = '';
  choicesDiv.innerHTML = '';
  nextBtn.disabled = true; // Disable next until answered
  selectedChoiceIndex = null; // Reset selected choice

  q.choices.forEach((c, idx) => {
    // answer button
    const btn = document.createElement('button');
    btn.textContent = c.text;
    btn.classList.add('answer-btn');

    // container wrapper
    const wrap = document.createElement('div');
    wrap.classList.add('choice-wrapper');

    // Handle selection
    wrap.addEventListener('click', () => {
      // Remove previous selection
      document.querySelectorAll('.choice-wrapper').forEach(w => w.classList.remove('selected'));
      wrap.classList.add('selected');
      selectedChoiceIndex = idx; // Store selected choice index
    });

    // audio play button
    const playA = document.createElement('button');
    playA.textContent = '🔊';
    playA.addEventListener('click', e => {
      e.stopPropagation();
      new Audio(c.audio).play();
    });

    wrap.appendChild(btn);
    wrap.appendChild(playA);
    choicesDiv.appendChild(wrap);
  });

  // Add a submit button
  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.id = 'submit-button';
  submitBtn.disabled = true; // Initially disabled

  // Enable submit button when a choice is selected
  choicesDiv.addEventListener('click', () => {
    if (selectedChoiceIndex !== null) {
      submitBtn.disabled = false;
    }
  });

  // Handle submission
  submitBtn.addEventListener('click', () => {
    const q = quizData[currentIndex];
    q.choices.forEach((opt, j) => {
      const w = choicesDiv.children[j];
      w.classList.toggle('correct-answer', opt.correct);
      w.classList.toggle('wrong-answer', !opt.correct);
    });

    // Disable all choices after submission
    choicesDiv.querySelectorAll('.choice-wrapper').forEach(w => w.classList.add('disabled'));
    submitBtn.disabled = true; // Disable submit button
    nextBtn.disabled = false; // Enable next button
  });

  choicesDiv.appendChild(submitBtn);
}

// Initial load & event hooks
loadQuestion(currentIndex);
playQBtn.addEventListener('click', () => audioQ.play());
nextBtn.addEventListener('click', () => {
  if (currentIndex < quizData.length - 1) {
    currentIndex++;
    loadQuestion(currentIndex);
  } else {
    feedbackEl.textContent = 'Quiz complete!🔥';
    nextBtn.disabled = true;

    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Restart Quiz';
    restartBtn.id = 'restart-button';
    restartBtn.addEventListener('click', () => {
      currentIndex = 0;
      score = 0;
      nextBtn.disabled = false;
      loadQuestion(currentIndex);
      restartBtn.remove();
    });
    feedbackEl.appendChild(restartBtn);
  }
}); () => {
  currentIndex = (currentIndex + 1) % quizData.length;
  loadQuestion(currentIndex);
};