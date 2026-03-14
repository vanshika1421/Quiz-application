// Quiz Application JavaScript
class QuizApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.timeRemaining = 5;
        this.timer = null;
        this.startTime = null;
        this.endTime = null;
        this.userName = '';
        this.difficulty = '';
        this.subject = '';
        this.timePerQuestion = 5;
        
        // DOM Elements
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.setupScreen = document.getElementById('setup-screen');
        this.rulesScreen = document.getElementById('rules-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        
        // Welcome screen elements
        this.startSetupBtn = document.getElementById('start-setup');
        
        // Setup screen elements
        this.userNameInput = document.getElementById('user-name');
        this.difficultySelect = document.getElementById('difficulty-level');
        this.subjectSelect = document.getElementById('subject-selection');
        this.backToWelcomeBtn = document.getElementById('back-to-welcome');
        this.showRulesBtn = document.getElementById('show-rules');
        
        // Rules screen elements
        this.backToSetupBtn = document.getElementById('back-to-setup');
        this.startQuizBtn = document.getElementById('start-quiz');
        
        // Quiz screen elements
        this.questionElement = document.getElementById('question');
        this.optionsContainer = document.getElementById('options-container');
        this.questionCounter = document.getElementById('question-counter');
        this.progressFill = document.getElementById('progress-fill');
        this.timeElement = document.getElementById('time-remaining');
        this.nextBtn = document.getElementById('next-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.quizUserName = document.getElementById('quiz-user-name');
        this.quizSubject = document.getElementById('quiz-subject');
        
        // AI Explanation elements
        this.aiExplanationContainer = document.getElementById('ai-explanation-container');
        this.aiExplainBtn = document.getElementById('ai-explain-btn');
        this.aiExplanation = document.getElementById('ai-explanation');
        this.explanationContent = document.getElementById('explanation-content');
        this.explanationLoading = document.getElementById('explanation-loading');
        
        // Results screen elements
        this.restartBtn = document.getElementById('restart-quiz');
        this.shareBtn = document.getElementById('share-results');
        
        // Initialize
        this.initializeQuestions();
        this.bindEvents();
    }
    
    // Quiz Questions Database
    initializeQuestions() {
        this.questionBank = {
            science: [
                {
                    question: "What is the chemical symbol for water?",
                    options: ["H2O", "HO2", "H2O2", "OH2"],
                    correct: 0
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    correct: 1
                },
                {
                    question: "What is the speed of light in vacuum?",
                    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                    correct: 0
                },
                {
                    question: "Which gas makes up about 78% of Earth's atmosphere?",
                    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                    correct: 2
                },
                {
                    question: "What is the hardest natural substance on Earth?",
                    options: ["Gold", "Iron", "Diamond", "Platinum"],
                    correct: 2
                },
                {
                    question: "Which organ in the human body produces insulin?",
                    options: ["Liver", "Kidney", "Pancreas", "Heart"],
                    correct: 2
                },
                {
                    question: "What is the smallest unit of matter?",
                    options: ["Molecule", "Atom", "Electron", "Neutron"],
                    correct: 1
                },
                {
                    question: "Which blood type is known as the universal donor?",
                    options: ["A+", "B+", "AB+", "O-"],
                    correct: 3
                },
                {
                    question: "What force keeps planets in orbit around the Sun?",
                    options: ["Magnetic force", "Gravitational force", "Nuclear force", "Electric force"],
                    correct: 1
                },
                {
                    question: "Which element has the atomic number 1?",
                    options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
                    correct: 1
                }
            ],
            mathematics: [
                {
                    question: "What is the value of π (pi) to two decimal places?",
                    options: ["3.14", "3.15", "3.16", "3.17"],
                    correct: 0
                },
                {
                    question: "What is 15% of 200?",
                    options: ["25", "30", "35", "40"],
                    correct: 1
                },
                {
                    question: "What is the square root of 144?",
                    options: ["11", "12", "13", "14"],
                    correct: 1
                },
                {
                    question: "In a right triangle, what is the longest side called?",
                    options: ["Adjacent", "Opposite", "Hypotenuse", "Base"],
                    correct: 2
                },
                {
                    question: "What is 7! (7 factorial)?",
                    options: ["5040", "720", "140", "49"],
                    correct: 0
                },
                {
                    question: "What is the sum of angles in a triangle?",
                    options: ["90°", "180°", "270°", "360°"],
                    correct: 1
                },
                {
                    question: "What is the derivative of x²?",
                    options: ["x", "2x", "x²", "2x²"],
                    correct: 1
                },
                {
                    question: "What is the area of a circle with radius 5?",
                    options: ["25π", "10π", "15π", "20π"],
                    correct: 0
                },
                {
                    question: "What is log₁₀(100)?",
                    options: ["1", "2", "10", "100"],
                    correct: 1
                },
                {
                    question: "What is the slope of the line y = 3x + 2?",
                    options: ["2", "3", "5", "1"],
                    correct: 1
                }
            ],
            currentAffairs: [
                {
                    question: "Who is the current Secretary-General of the United Nations?",
                    options: ["Ban Ki-moon", "António Guterres", "Kofi Annan", "Boutros Boutros-Ghali"],
                    correct: 1
                },
                {
                    question: "Which country hosted the 2024 Summer Olympics?",
                    options: ["Japan", "France", "USA", "Australia"],
                    correct: 1
                },
                {
                    question: "What is the largest economy in the world by GDP?",
                    options: ["China", "USA", "Japan", "Germany"],
                    correct: 1
                },
                {
                    question: "Which organization was awarded the Nobel Peace Prize in 2020?",
                    options: ["WHO", "UNICEF", "World Food Programme", "Red Cross"],
                    correct: 2
                },
                {
                    question: "What is the capital of Australia?",
                    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                    correct: 2
                },
                {
                    question: "Which social media platform was formerly known as Twitter?",
                    options: ["Meta", "X", "Threads", "BlueSky"],
                    correct: 1
                },
                {
                    question: "What is the currency of the European Union?",
                    options: ["Pound", "Dollar", "Euro", "Franc"],
                    correct: 2
                },
                {
                    question: "Which country is the largest producer of coffee in the world?",
                    options: ["Colombia", "Vietnam", "Brazil", "Ethiopia"],
                    correct: 2
                },
                {
                    question: "What does 'AI' stand for in technology?",
                    options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Algorithmic Intelligence"],
                    correct: 1
                },
                {
                    question: "Which renewable energy source is most widely used globally?",
                    options: ["Solar", "Wind", "Hydroelectric", "Geothermal"],
                    correct: 2
                }
            ],
            history: [
                {
                    question: "In which year did World War II end?",
                    options: ["1944", "1945", "1946", "1947"],
                    correct: 1
                },
                {
                    question: "Who was the first President of the United States?",
                    options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                    correct: 2
                },
                {
                    question: "Which ancient wonder of the world was located in Alexandria?",
                    options: ["Hanging Gardens", "Lighthouse", "Colossus", "Mausoleum"],
                    correct: 1
                },
                {
                    question: "In which year did the Berlin Wall fall?",
                    options: ["1987", "1988", "1989", "1990"],
                    correct: 2
                },
                {
                    question: "Who painted the ceiling of the Sistine Chapel?",
                    options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
                    correct: 2
                },
                {
                    question: "Which empire was ruled by Julius Caesar?",
                    options: ["Greek", "Roman", "Persian", "Byzantine"],
                    correct: 1
                },
                {
                    question: "In which year did India gain independence?",
                    options: ["1946", "1947", "1948", "1949"],
                    correct: 1
                },
                {
                    question: "Who invented the printing press?",
                    options: ["Johannes Gutenberg", "Benjamin Franklin", "Thomas Edison", "Alexander Graham Bell"],
                    correct: 0
                },
                {
                    question: "Which revolution began in 1789?",
                    options: ["American Revolution", "Industrial Revolution", "French Revolution", "Russian Revolution"],
                    correct: 2
                },
                {
                    question: "Who was known as the 'Iron Lady'?",
                    options: ["Queen Elizabeth II", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
                    correct: 1
                }
            ],
            webDevelopment: [
                {
                    question: "What does HTML stand for?",
                    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
                    correct: 0
                },
                {
                    question: "Which CSS property is used to change the text color?",
                    options: ["font-color", "text-color", "color", "background-color"],
                    correct: 2
                },
                {
                    question: "What is the correct way to create a function in JavaScript?",
                    options: ["function = myFunction() {}", "function myFunction() {}", "create myFunction() {}", "def myFunction() {}"],
                    correct: 1
                },
                {
                    question: "Which of the following is NOT a JavaScript data type?",
                    options: ["String", "Boolean", "Float", "Number"],
                    correct: 2
                },
                {
                    question: "What does CSS stand for?",
                    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
                    correct: 1
                },
                {
                    question: "Which HTML tag is used to create a hyperlink?",
                    options: ["<link>", "<href>", "<a>", "<url>"],
                    correct: 2
                },
                {
                    question: "What is the correct syntax to output 'Hello World' in JavaScript?",
                    options: ["echo('Hello World');", "print('Hello World');", "console.log('Hello World');", "document.write('Hello World');"],
                    correct: 2
                },
                {
                    question: "Which CSS property is used to make text bold?",
                    options: ["font-weight", "text-weight", "font-style", "text-style"],
                    correct: 0
                },
                {
                    question: "What does DOM stand for in web development?",
                    options: ["Data Object Model", "Document Object Model", "Display Object Management", "Dynamic Object Method"],
                    correct: 1
                },
                {
                    question: "Which method is used to add an element to the end of an array in JavaScript?",
                    options: ["append()", "add()", "push()", "insert()"],
                    correct: 2
                }
            ]
        };
        
        this.questions = [];
    }
    
    // Utility function to shuffle array
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // Event Listeners
    bindEvents() {
        // Welcome screen
        this.startSetupBtn.addEventListener('click', () => this.showSetupScreen());
        
        // Setup screen
        this.backToWelcomeBtn.addEventListener('click', () => this.showWelcomeScreen());
        this.showRulesBtn.addEventListener('click', () => this.validateAndShowRules());
        
        // Rules screen
        this.backToSetupBtn.addEventListener('click', () => this.showSetupScreen());
        this.startQuizBtn.addEventListener('click', () => this.startQuiz());
        
        // Quiz screen
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.aiExplainBtn.addEventListener('click', () => this.explainAnswerWithAI());
        
        // Results screen
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.shareBtn.addEventListener('click', () => this.shareResults());
    }
    
    // Screen Navigation
    showWelcomeScreen() {
        this.showScreen('welcome');
    }
    
    showSetupScreen() {
        this.showScreen('setup');
        this.userNameInput.focus();
    }
    
    validateAndShowRules() {
        // Validate form inputs
        const userName = this.userNameInput.value.trim();
        const difficulty = this.difficultySelect.value;
        const subject = this.subjectSelect.value;
        
        if (!userName) {
            this.showNotification('Please enter your name', 'error');
            this.userNameInput.focus();
            return;
        }
        
        if (!difficulty) {
            this.showNotification('Please select a difficulty level', 'error');
            this.difficultySelect.focus();
            return;
        }
        
        if (!subject) {
            this.showNotification('Please select a subject', 'error');
            this.subjectSelect.focus();
            return;
        }
        
        // Store user preferences
        this.userName = userName;
        this.difficulty = difficulty;
        this.subject = subject;
        
        // Set time per question based on difficulty
        switch(difficulty) {
            case 'easy':
                this.timePerQuestion = 10;
                break;
            case 'medium':
                this.timePerQuestion = 10;
                break;
            case 'hard':
                this.timePerQuestion = 15;
                break;
        }
        
        // Prepare questions for selected subject
        this.prepareQuestions();
        
        // Update rules summary
        this.updateRulesSummary();
        
        // Show rules screen
        this.showScreen('rules');
    }
    
    prepareQuestions() {
        // Get questions for selected subject
        this.questions = [...this.questionBank[this.subject]];
        
        // Shuffle questions for variety
        this.shuffleArray(this.questions);
        
        // Take only 10 questions
        this.questions = this.questions.slice(0, 10);
    }
    
    updateRulesSummary() {
        document.getElementById('summary-name').textContent = this.userName;
        document.getElementById('summary-subject').textContent = this.getSubjectDisplayName(this.subject);
        document.getElementById('summary-difficulty').textContent = this.getDifficultyDisplayName(this.difficulty);
        document.getElementById('summary-time').textContent = `${this.timePerQuestion} seconds`;
    }
    
    getSubjectDisplayName(subject) {
        const subjects = {
            'science': 'Science',
            'mathematics': 'Mathematics',
            'currentAffairs': 'Current Affairs',
            'history': 'History',
            'webDevelopment': 'Web Development'
        };
        return subjects[subject] || subject;
    }
    
    getDifficultyDisplayName(difficulty) {
        const difficulties = {
            'easy': 'Easy',
            'medium': 'Medium',
            'hard': 'Hard'
        };
        return difficulties[difficulty] || difficulty;
    }
    
    // Start Quiz
    startQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.startTime = Date.now();
        
        // Update quiz header with user info
        this.quizUserName.textContent = this.userName;
        this.quizSubject.textContent = this.getSubjectDisplayName(this.subject);
        
        this.showScreen('quiz');
        this.displayQuestion();
        this.startTimer();
    }
    
    // Display Current Question
    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.questionElement.textContent = question.question;
        
        // Update progress
        this.updateProgress();
        
        // Clear previous options
        this.optionsContainer.innerHTML = '';
        
        // Hide AI explanation container
        this.aiExplanationContainer.style.display = 'none';
        this.aiExplanation.style.display = 'none';
        this.explanationLoading.style.display = 'none';
        
        // Create option elements
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(index));
            
            // Restore previous selection if exists
            if (this.userAnswers[this.currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
                this.nextBtn.disabled = false;
                // Show AI explanation container if answer was already selected
                this.aiExplanationContainer.style.display = 'block';
            }
            
            this.optionsContainer.appendChild(optionElement);
        });
        
        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Reset and start timer for this question
        this.resetTimer();
    }
    
    // Select Option
    selectOption(selectedIndex) {
        // Remove previous selection
        const options = this.optionsContainer.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        
        // Add selection to clicked option
        options[selectedIndex].classList.add('selected');
        
        // Store user answer
        this.userAnswers[this.currentQuestionIndex] = selectedIndex;
        
        // Enable next button
        this.nextBtn.disabled = false;
        
        // Show AI explanation container
        this.aiExplanationContainer.style.display = 'block';
        this.aiExplanation.style.display = 'none';
        this.aiExplainBtn.disabled = false;
        this.aiExplainBtn.textContent = 'Explain Answer with AI';
        this.aiExplainBtn.innerHTML = '<i class="fas fa-brain"></i> Explain Answer with AI';
        
        // Remove auto-advance - user must click Next button to proceed
    }
    
    // Explain Answer with AI
    async explainAnswerWithAI() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        const correctAnswer = currentQuestion.options[currentQuestion.correct];
        const userAnswer = this.userAnswers[this.currentQuestionIndex] !== undefined 
            ? currentQuestion.options[this.userAnswers[this.currentQuestionIndex]] 
            : 'No answer selected';

        // Show loading state
        this.aiExplainBtn.disabled = true;
        this.aiExplainBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        this.explanationLoading.style.display = 'flex';
        this.aiExplanation.style.display = 'none';

        try {
            // Call backend API instead of OpenAI directly
            const response = await fetch('http://localhost:5000/api/explain', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: currentQuestion.question,
                    options: currentQuestion.options,
                    correctAnswer: correctAnswer,
                    userAnswer: userAnswer
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP ${response.status}`);
            }

            const data = await response.json();
            const explanation = data.explanation;

            if (!explanation) {
                throw new Error('No explanation returned from the server.');
            }

            // Display explanation
            this.explanationContent.textContent = explanation;
            this.explanationLoading.style.display = 'none';
            this.aiExplanation.style.display = 'block';

            // Reset button
            this.aiExplainBtn.disabled = false;
            this.aiExplainBtn.innerHTML = '<i class="fas fa-check"></i> Explanation Generated';

        } catch (error) {
            console.error('Error calling backend API:', error);

            const message = error.message || '';
            if (message.includes('Failed to fetch') || message.includes('CORS')) {
                this.showAIError('Unable to connect to the backend server. Make sure the server is running on port 5000.');
            } else {
                this.showAIError(`Sorry, I couldn't generate an explanation right now. ${message}`);
            }
        }
    }

    showAIError(message) {
        this.explanationContent.textContent = message;
        this.explanationLoading.style.display = 'none';
        this.aiExplanation.style.display = 'block';
        this.aiExplainBtn.disabled = false;
        this.aiExplainBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Try Again';
    }


    
    // Next Question
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        } else {
            this.finishQuiz();
        }
    }
    
    // Previous Question
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }
    
    // Update Progress
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.questionCounter.textContent = `${this.currentQuestionIndex + 1} / ${this.questions.length}`;
    }
    
    // Update Navigation Buttons
    updateNavigationButtons() {
        this.prevBtn.disabled = this.currentQuestionIndex === 0;
        this.nextBtn.disabled = this.userAnswers[this.currentQuestionIndex] === undefined;
        
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.nextBtn.innerHTML = '<i class="fas fa-check"></i> Finish';
        } else {
            this.nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
        }
    }
    
    // Timer Functions
    startTimer() {
        this.resetTimer();
    }
    
    resetTimer() {
        this.timeRemaining = this.timePerQuestion;
        this.updateTimerDisplay();
        
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.timeUp();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        this.timeElement.textContent = this.timeRemaining;
        
        // Add warning class when time is low
        const warningThreshold = Math.ceil(this.timePerQuestion * 0.3); // 30% of time remaining
        if (this.timeRemaining <= warningThreshold) {
            this.timeElement.parentElement.style.background = 'rgba(244, 67, 54, 0.3)';
        } else {
            this.timeElement.parentElement.style.background = 'rgba(255, 255, 255, 0.2)';
        }
    }
    
    timeUp() {
        // Auto-move to next question if no answer selected
        if (this.userAnswers[this.currentQuestionIndex] === undefined) {
            // Mark as no answer (will be counted as incorrect)
            this.userAnswers[this.currentQuestionIndex] = -1;
        }
        
        // Auto advance to next question
        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.nextQuestion();
            } else {
                this.finishQuiz();
            }
        }, 500);
    }
    
    // Calculate Score
    calculateScore() {
        this.score = 0;
        this.questions.forEach((question, index) => {
            if (this.userAnswers[index] === question.correct) {
                this.score++;
            }
        });
    }
    
    // Finish Quiz
    finishQuiz() {
        this.endTime = Date.now();
        clearInterval(this.timer);
        this.calculateScore();
        this.showResults();
    }
    
    // Show Results
    showResults() {
        this.showScreen('results');
        
        const percentage = Math.round((this.score / this.questions.length) * 100);
        const totalTime = Math.round((this.endTime - this.startTime) / 1000);
        const incorrectAnswers = this.questions.length - this.score;
        
        // Update score display
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        document.getElementById('correct-answers').textContent = this.score;
        document.getElementById('incorrect-answers').textContent = incorrectAnswers;
        document.getElementById('total-time').textContent = `${totalTime}s`;
        
        // Update results message
        let title, message;
        const subjectName = this.getSubjectDisplayName(this.subject);
        
        if (percentage >= 90) {
            title = "Excellent! 🎉";
            message = `Outstanding performance! You're a ${subjectName.toLowerCase()} expert!`;
        } else if (percentage >= 75) {
            title = "Great Job! 👏";
            message = `Very good! You have a solid understanding of ${subjectName.toLowerCase()}.`;
        } else if (percentage >= 60) {
            title = "Good Work! 👍";
            message = `Not bad! Keep practicing ${subjectName.toLowerCase()} to improve your skills.`;
        } else {
            title = "Keep Learning! 📚";
            message = `Don't worry! Practice makes perfect. Keep studying ${subjectName.toLowerCase()}!`;
        }
        
        document.getElementById('results-title').textContent = title;
        document.getElementById('results-message').textContent = message;
        
        // Animate score circle
        this.animateScoreCircle(percentage);
    }
    
    // Animate Score Circle
    animateScoreCircle(percentage) {
        const circle = document.querySelector('.score-circle');
        const circumference = 2 * Math.PI * 70; // radius = 70px
        
        // Create SVG circle for animation (optional enhancement)
        // For now, we'll use a simple color change animation
        circle.style.background = percentage >= 75 
            ? 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)'
            : percentage >= 60 
                ? 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)'
                : 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)';
    }
    
    // Screen Management
    showScreen(screenName) {
        // Hide all screens
        this.welcomeScreen.classList.remove('active');
        this.setupScreen.classList.remove('active');
        this.rulesScreen.classList.remove('active');
        this.quizScreen.classList.remove('active');
        this.resultsScreen.classList.remove('active');
        
        // Show target screen
        setTimeout(() => {
            switch(screenName) {
                case 'welcome':
                    this.welcomeScreen.classList.add('active');
                    break;
                case 'setup':
                    this.setupScreen.classList.add('active');
                    break;
                case 'rules':
                    this.rulesScreen.classList.add('active');
                    break;
                case 'quiz':
                    this.quizScreen.classList.add('active');
                    break;
                case 'results':
                    this.resultsScreen.classList.add('active');
                    break;
            }
        }, 100);
    }
    
    // Restart Quiz
    restartQuiz() {
        // Reset all states
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.startTime = null;
        this.endTime = null;
        this.userName = '';
        this.difficulty = '';
        this.subject = '';
        this.timePerQuestion = 5;
        this.questions = [];
        
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // Clear form inputs
        this.userNameInput.value = '';
        this.difficultySelect.value = '';
        this.subjectSelect.value = '';
        
        // Show welcome screen
        this.showScreen('welcome');
    }
    
    // Share Results
    shareResults() {
        const percentage = Math.round((this.score / this.questions.length) * 100);
        const shareText = `I just scored ${percentage}% on the SkillCraft Quiz! 🎯\n\nCorrect answers: ${this.score}/${this.questions.length}\n\nTry it yourself!`;
        
        if (navigator.share) {
            // Use native sharing if available (mobile devices)
            navigator.share({
                title: 'SkillCraft Quiz Results',
                text: shareText,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                // Show temporary notification
                this.showNotification('Results copied to clipboard!');
            }).catch(() => {
                // Fallback: show share text in alert
                alert(shareText);
            });
        }
    }
    
    // Show Notification
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        const bgColor = type === 'error' 
            ? 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)'
            : 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
            
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
            text-align: center;
            font-weight: 500;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize Quiz App when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.quizApp = new QuizApp();
});

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
