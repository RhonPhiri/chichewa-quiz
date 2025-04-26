// --- Quiz data: add your own questions/audio here
const quizData = [
  {
    text: 'How do you say “Hello” in Chichewa?',
    questionAudio: '',
    choices: [
      { text: 'Zikomo',    audio: 'audio/a1.mp3', correct: false },
      { text: 'Moni',      audio: 'audio/a2.mp3', correct: true },
      { text: 'Pepani',    audio: 'audio/a3.mp3', correct: false },
      { text: 'Muli bwanji?', audio: 'audio/a4.mp3', correct: false }
    ]
  },
  {
    text: 'When would you use “Bo bo”?',
    questionAudio: 'audio/q2.mp3',
    choices: [
      { text: 'Informal greeting to children',      audio: '', correct: true },
      { text: 'Informal greeting to adults',    audio: '', correct: false },
      { text: 'Formal greeting to children',    audio: '', correct: false },
      { text: 'Informal greeting to adults', audio: '', correct: false }
    ]
  },

  {
    text: 'What is the response to “Muli bwanji?”',
    questionAudio: '',
    choices: [
      { text: 'Ndadzuka bwino kaya inu?',    audio: '', correct: false },
      { text: 'Ndili bwino kaya inu?',      audio: '', correct: true },
      { text: 'Ndaswera bwino kaya inu?',    audio: '', correct: false },
      { text: 'Bo bo', audio: '', correct: false }
    ]
  }
,
  {
    text: 'Mwadzuka bwanji? Means?',
    questionAudio: '',
    choices: [
      { text: 'How did you eat?',      audio: '', correct: false },
      { text: 'How did you sleep?',    audio: '', correct: false },
      { text: 'How did you walk?',    audio: '', correct: false },
      { text: 'How did you wake?', audio: '', correct: true }
    ]
  }
,
  {
    text: 'How do you say “thank you”?',
    questionAudio: '',
    choices: [
      { text: 'Chabwino',      audio: '', correct: false },
      { text: 'Zikomo',    audio: '', correct: true },
      { text: 'Pepani',    audio: '', correct: false },
      { text: 'None of the above', audio: '', correct: false }
    ]
  }
,
  {
    text: 'What is the response to “Mwaswera bwanji”?',
    questionAudio: '',
    choices: [
      { text: 'Ndili bwino kaya inu?',    audio: '', correct: false },
      { text: 'Ndadzuka bwino kaya inu?',    audio: '', correct: false },
      { text: 'Ndaswera bwanji, kaya inu?',      audio: '', correct: true },
      { text: 'Ndagona bwino kaya inu?', audio: '', correct: false }
    ]
  }
,
  {
    text: 'Pepani means?',
    questionAudio: '',
    choices: [
      { text: 'Sorry',      audio: '', correct: true },
      { text: 'Please',    audio: '', correct: false },
      { text: 'No problem',    audio: '', correct: false },
      { text: 'Question', audio: '', correct: false }
    ]
  }
,
  {
    text: 'When would you use Kodi?',
    questionAudio: '',
    choices: [
      { text: 'When asking a question',      audio: '', correct: true },
      { text: 'When apologising',    audio: '', correct: false },
      { text: 'When saying "Thank you"',    audio: '', correct: false },
      { text: 'When welcoming guests', audio: '', correct: false }
    ]
  }
,
  {
    text: 'How do we say 10 in Chichewa?',
    questionAudio: '',
    choices: [
      { text: 'Chimodzi',      audio: '', correct: false },
      { text: 'Zisanu',    audio: '', correct: false },
      { text: 'Khumi',    audio: '', correct: true },
      { text: 'Zisanu ndi chimodzi', audio: '', correct: false }
    ]
  }
,
  {
    text: 'How many objects are said to be zitatu?',
    questionAudio: 'audio/q2.mp3',
    choices: [
      { text: '1',      audio: '', correct: true },
      { text: '3',    audio: '', correct: false },
      { text: '5',    audio: '', correct: false },
      { text: '7', audio: '', correct: false }
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

// Theme toggle logic
const themeSelect = document.getElementById('theme-select');

// Apply the selected theme
function applyTheme(theme) {
  if (theme === 'system') {
    document.body.classList.remove('light', 'dark');
  } else {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }
}

// Load the saved theme or default to system
const savedTheme = localStorage.getItem('theme') || 'system';
themeSelect.value = savedTheme;
applyTheme(savedTheme);

// Handle theme change
themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;
  localStorage.setItem('theme', selectedTheme);
  applyTheme(selectedTheme);
});

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

  // Set question audio if available
  if (q.questionAudio) {
    audioQ.src = q.questionAudio;
    playQBtn.style.display = 'inline-block'; // Show play button
  } else {
    audioQ.src = '';
    playQBtn.style.display = 'none'; // Hide play button
  }

  feedbackEl.textContent = '';
  choicesDiv.innerHTML = '';
  nextBtn.disabled = true; // Disable next until answered
  selectedChoiceIndex = null; // Reset selected choice

  q.choices.forEach((c, idx) => {
    // Create answer button
    const btn = document.createElement('button');
    btn.textContent = c.text;
    btn.classList.add('answer-btn');

    // Create container wrapper
    const wrap = document.createElement('div');
    wrap.classList.add('choice-wrapper');

    // Handle selection
    wrap.addEventListener('click', () => {
      // Remove previous selection
      document.querySelectorAll('.choice-wrapper').forEach(w => w.classList.remove('selected'));
      wrap.classList.add('selected');
      selectedChoiceIndex = idx; // Store selected choice index
    });

    // Add play audio button if audio is available
    if (c.audio) {
      const playA = document.createElement('button');
      playA.textContent = '🔊';
      playA.addEventListener('click', e => {
        e.stopPropagation();
        new Audio(c.audio).play();
      });
      wrap.appendChild(playA);
    }

    wrap.appendChild(btn);
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

    // Check if selected choice is correct
    if (q.choices[selectedChoiceIndex].correct) {
      score++; // Increment the score
    }

    // Update the score
    updateStatus();

    // Disable all choices after submission
    choicesDiv.querySelectorAll('.choice-wrapper').forEach(w => w.classList.add('disabled'));
    submitBtn.disabled = true; // Disable submit button
    nextBtn.disabled = false; // Enable next button
  });

  choicesDiv.appendChild(submitBtn);
}

// DOM reference for the About Info button and text
const aboutInfoContainer = document.getElementById('about-info-container');
const aboutInfoButton = document.getElementById('about-info-button');
const aboutInfoText = document.getElementById('about-info-text');

// Show the About Info button after the quiz is completed
function showAboutInfo() {
  aboutInfoContainer.style.display = 'block';
}

// Handle About Info button click
aboutInfoButton.addEventListener('click', () => {
  aboutInfoText.style.display = aboutInfoText.style.display === 'none' ? 'block' : 'none';
});


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
    showAboutInfo(); // Show the About Info button

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
