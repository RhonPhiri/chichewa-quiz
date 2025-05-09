// --- Quiz data: add your own questions/audio here
const lessonData = {
  lesson1: [
    {
      text: 'How do you say “Hello” in Chichewa?',
      questionAudio: '',
      choices: [
        { text: 'Zikomo',    audio: 'audios/zikomo.mp3', correct: false },
        { text: 'Moni',      audio: 'audios/moni.mp3', correct: true },
        { text: 'Pepani',    audio: 'audios/pepani.mp3', correct: false },
        { text: 'Muli bwanji?', audio: 'audios/muli_bwanji.mp3', correct: false }
      ]
    },
    {
      text: 'When would you use “Bo bo”?',
      questionAudio: 'audios/bobo.mp3',
      choices: [
        { text: 'Informal greeting to children',      audio: '', correct: true },
        { text: 'Informal greeting to adults',    audio: '', correct: false },
        { text: 'Formal greeting to children',    audio: '', correct: false },
        { text: 'Formal greeting to adults', audio: '', correct: false }
      ]
    },

    {
      text: 'What is the response to “Muli bwanji?”',
      questionAudio: '',
      choices: [
        { text: 'Ndadzuka bwino kaya inu?',    audio: 'audios/ndadzuka_bwino.mp3', correct: false },
        { text: 'Ndili bwino kaya inu?',      audio: 'audios/ndili_bwino.mp3', correct: true },
        { text: 'Ndaswera bwino kaya inu?',    audio: 'audios/ndaswera_bwino.mp3', correct: false },
        { text: 'Bo bo', audio: 'audios/bobo.mp3', correct: false }
      ]
    }
  ,
    {
      text: 'Mwadzuka bwanji? Means?',
      questionAudio: 'audios/mwadzuka_bwanji.mp3',
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
        { text: 'Chabwino',      audio: 'audios/chabwino.mp3', correct: false },
        { text: 'Zikomo',    audio: 'audios/zikomo.mp3', correct: true },
        { text: 'Pepani',    audio: 'audios/pepani.mp3', correct: false },
        { text: 'None of the above', audio: '', correct: false }
      ]
    }
  ,
    {
      text: 'What is the response to “Mwaswera bwanji”?',
      questionAudio: 'audios/mwaswera_bwanji.mp3',
      choices: [
        { text: 'Ndili bwino kaya inu?',    audio: 'audios/ndili_bwino.mp3', correct: false },
        { text: 'Ndadzuka bwino kaya inu?',    audio: 'audios/ndadzuka_bwino.mp3', correct: false },
        { text: 'Ndaswera bwino, kaya inu?',      audio: 'audios/ndaswera_bwino.mp3', correct: true },
        { text: 'Ndagona bwino kaya inu?', audio: 'audios/ndagona_bwino.mp3', correct: false }
      ]
    }
  ,
    {
      text: 'Pepani means?',
      questionAudio: 'audios/pepani.mp3',
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
      questionAudio: 'audios/kodi.mp3',
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
        { text: 'Chimodzi',      audio: 'audios/chimodzi.mp3', correct: false },
        { text: 'Zisanu',    audio: 'audios/zisanu.mp3', correct: false },
        { text: 'Khumi',    audio: 'audios/khumi.mp3', correct: true },
        { text: 'Zisanu ndi chimodzi', audio: 'audios/zisanu_ndi_chimodzi.mp3', correct: false }
      ]
    }
  ,
    {
      text: 'How many objects are said to be zitatu?',
      questionAudio: 'audios/zitatu.mp3',
      choices: [
        { text: '1',      audio: '', correct: true },
        { text: '3',    audio: '', correct: false },
        { text: '5',    audio: '', correct: false },
        { text: '7', audio: '', correct: false }
      ]
    }
  ],
  lesson2: [
    {
      text: 'How do you ask "what is your name"?',
      questionAudio: '',
      choices: [
        { text: 'Muli bwanji', audio: 'audios/muli_bwanji.mp3', correct: false },
        { text: 'Moni', audio: 'audios/moni.mp3', correct: false },
        { text: 'Dzina lanu ndi ndani?', audio: 'audios/dzina_lanu.mp3', correct: true },
        { text: 'Mumakhala kuti?', audio: 'audios/mumakhala_kuti.mp3', correct: false }
      ]
    }, {
      text: 'What day of the week is lachitatu??',
      questionAudio: 'audios/lachitatu.mp3',
      choices: [
        { text: 'Monday', audio: '', correct: false },
        { text: 'Tuesday', audio: '', correct: false },
        { text: 'Wednesday', audio: '', correct: true },
        { text: 'Thursday', audio: '', correct: false }
      ]
    }, {
      text: 'What is Sunday in Chichewa',
      questionAudio: '',
      choices: [
        { text: 'Lolemba', audio: 'audios/lolemba.mp3', correct: false },
        { text: 'Lachitatu', audio: 'audios/lachitatu.mp3', correct: false },
        { text: 'Loweluka', audio: 'audios/loweluka.mp3', correct: false },
        { text: 'Lamulungu', audio: 'audios/lamulungu.mp3', correct: true }
      ]
    },{
      text: 'What is the meaning of this question "Mumachokela kuti?"',
      questionAudio: 'audios/mumachokela_kuti.mp3',
      choices: [
        { text: 'What is your name?', audio: '', correct: false },
        { text: 'Where are you from?', audio: '', correct: true },
        { text: 'Where do you work?', audio: '', correct: false },
        { text: 'How old are you?', audio: '', correct: false }
      ]
    }
  ]
};

let quizData = [];
let currentIndex = 0;
let score = 0;

// DOM refs
const welcomeScreen = document.getElementById('welcome-screen');
const lessonButtons = document.querySelectorAll('.lesson-button');
const quizContainer = document.querySelector('.quiz-container');
const playQBtn = document.getElementById('play-question');
const audioQ = document.getElementById('audio-question');
const questionEl = document.getElementById('question-text');
const choicesDiv = document.getElementById('choices');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-question');
const progTxt = document.getElementById('progress-text');
const scoreTxt = document.getElementById('score-text');



document.addEventListener('DOMContentLoaded',()=>{const homeButton = document.getElementById('home-button');
  homeButton.addEventListener('click', () => {
    document.querySelector('.quiz-container').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
    homeButton.style.display = 'none';
  });
  lessonButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedLesson = button.dataset.lesson;
      quizData = lessonData[selectedLesson]; // Assign the selected lesson's data to quizData
      welcomeScreen.style.display = 'none'; // Hide the welcome screen
      quizContainer.style.display = 'block'; // Show the quiz container
      document.getElementById('home-button').style.display = 'block'; // Show the home button
      currentIndex = 0; // Reset the quiz index
      score = 0; // Reset the score
      loadQuestion(currentIndex); // Load the first question
    });
  });
})



// Update progress & score display
function updateStatus() {
  progTxt.textContent = `Question ${currentIndex + 1} of ${quizData.length}`;
  scoreTxt.textContent = `Score: ${score}`;
}

let selectedChoiceIndex = null; // Track the selected choice

// Render a question
function loadQuestion(i) {
  updateStatus();
  choicesDiv.style.pointerEvents = 'auto'; // 🔥 Allow clicking again
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
lessonButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedLesson = button.dataset.lesson;
    quizData = lessonData[selectedLesson]; // Assign the selected lesson's data to quizData
    welcomeScreen.style.display = 'none'; // Hide the welcome screen
    quizContainer.style.display = 'block'; // Show the quiz container
    currentIndex = 0; // Reset the quiz index
    score = 0; // Reset the score
    loadQuestion(currentIndex); // Load the first question
  });
});

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
      aboutInfoContainer.style.display = 'none'; // Hide the about button when restarting the quiz
    });
    feedbackEl.appendChild(restartBtn);
  }
}); () => {
  currentIndex = (currentIndex + 1) % quizData.length;
  loadQuestion(currentIndex);
};
