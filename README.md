# QuizCraft Pro

A modern, responsive quiz application built with HTML, CSS, and JavaScript for SkillCraft Technology internship.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive UI**: Modern, clean interface with smooth animations
- **Dynamic Timer System**: Customizable timer based on difficulty level
- **Multiple Subjects**: Science, Mathematics, Current Affairs, History, Web Development
- **Difficulty Levels**: Easy (5s), Medium (10s), Hard (10s) per question
- **User Registration**: Name input and personalized experience
- **Progress Tracking**: Real-time progress bar and question counter
- **Score Calculation**: Instant feedback and detailed results
- **Question Shuffling**: Random question order for varied experience
- **Social Sharing**: Share results with built-in sharing functionality
- **Rules & Instructions**: Clear guidelines before starting the quiz
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox/Grid, animations, and responsive design
- **JavaScript (ES6+)**: Object-oriented programming with classes
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Poppins font family for modern typography

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎯 Quiz Features

### User Setup
- **Name Registration**: Personalized quiz experience
- **Difficulty Selection**: Three levels with different time constraints
- **Subject Choice**: 5 comprehensive subjects to choose from

### Question Types
- Multiple choice questions (4 options each)
- 10 questions per quiz session covering selected subject:
  - 🔬 **Science**: Physics, Chemistry, Biology fundamentals
  - 🔢 **Mathematics**: Algebra, Geometry, Calculus basics
  - 📰 **Current Affairs**: Recent events and global knowledge
  - 🏛️ **History**: World history and important events
  - 💻 **Web Development**: HTML, CSS, JavaScript concepts

### Difficulty & Timing System
- **Easy**: 5 seconds per question (Quick decisions, basic knowledge)
- **Medium**: 10 seconds per question (Moderate thinking time)
- **Hard**: 10 seconds per question (Complex questions with adequate time)

### Scoring System
- **Excellent (90-100%)**: Outstanding performance
- **Great (75-89%)**: Very good understanding
- **Good (60-74%)**: Solid foundation
- **Keep Learning (<60%)**: Room for improvement

### Timer Features
- Dynamic timing based on difficulty selection
- Visual countdown with color indicators
- Auto-advance when time expires
- Time tracking for overall quiz duration

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Running the Application

1. **Clone or Download** the project files to your local machine

2. **Open the application**:
   ```
   Open index.html in your web browser
   ```

3. **Alternative methods**:
   - Double-click `index.html` file
   - Drag and drop `index.html` into browser window
   - Use a local development server (recommended for development)

### Using a Development Server (Optional)

For development purposes, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server package)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📂 File Structure

```
Task3.0/
├── index.html          # Main HTML file
├── style.css           # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Success**: Green gradient (#4caf50 to #45a049)
- **Error**: Red gradient (#f44336 to #d32f2f)
- **Warning**: Orange gradient (#ff9800 to #f57c00)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Animations
- Smooth transitions between screens
- Hover effects on interactive elements
- Progress bar animations
- Score circle animations

## 🔧 Customization

### Adding New Questions

Edit the `initializeQuestions()` method in `script.js`:

```javascript
{
    question: "Your question here?",
    options: [
        "Option A",
        "Option B", 
        "Option C",
        "Option D"
    ],
    correct: 0  // Index of correct answer (0-3)
}
```

### Modifying Timer Duration

Change the timer value in the `resetTimer()` method:

```javascript
this.timeRemaining = 30; // Change to desired seconds
```

### Customizing Colors

Update CSS custom properties in `style.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* Add more custom properties */
}
```

## 🌟 Advanced Features

### Browser Compatibility
- Modern browsers supporting ES6+
- Responsive design with CSS Grid/Flexbox
- Progressive enhancement for older browsers

### Performance Optimizations
- Efficient DOM manipulation
- Optimized CSS animations
- Minimal HTTP requests
- Compressed assets

### Accessibility Features
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios
- Focus indicators

## 🚀 Future Enhancements

- [ ] Question categories/difficulty levels
- [ ] User authentication and score tracking
- [ ] Multiplayer quiz functionality
- [ ] Question editor/admin panel
- [ ] Detailed analytics and reporting
- [ ] Offline support with Service Workers
- [ ] Audio/visual question types
- [ ] Leaderboard system

## 🤝 Contributing

This project is part of an internship at SkillCraft Technology. For suggestions or improvements:

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is created for educational purposes as part of SkillCraft Technology internship program.

## 👩‍💻 Developer

**Vanshika**  
Intern at SkillCraft Technology

## 🙏 Acknowledgments

- SkillCraft Technology for the internship opportunity
- Font Awesome for the icon library
- Google Fonts for typography
- Modern web development community for inspiration

---

**Happy Coding! 🚀**
