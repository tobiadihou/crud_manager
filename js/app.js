const App ={
  // data() {
  //   return {
  //     question: ['Quelle est la capitale de la France?'],
  //     answers: ['Paris', 'Berlin', 'Londres', 'Madrid'],
  //     selectedAnswer: null,
  //     timeRemaining: 10,
  //     intervalId: null
  //   }
  // },
  // methods: {
  //   startTimer() {
  //     this.intervalId = setInterval(() => {
  //       this.timeRemaining -= 1;
  //       if (this.timeRemaining === 0) {
  //         this.selectRandomAnswer();
  //         this.timeRemaining = 10;
  //       }
  //     }, 1000);
  //   },
  //   stopTimer() {
  //     clearInterval(this.intervalId);
  //   },
  //   selectRandomAnswer() {
  //     const randomIndex = Math.floor(Math.random() * this.answers.length);
  //     this.question = `Quelle est la capitale de ${this.answers[randomIndex]}?`;
  //     this.selectedAnswer = null;
  //   }
  // },
  // mounted() {
  //   this.startTimer();
  // },
  // beforeUnmount() {
  //   this.stopTimer();
  // }

  data() {
    return {
      questions: [
        {
          question: "Quelle est la capitale de la France ?",
          answers: ["Paris", "Lyon", "Marseille"],
          correctAnswer: "Paris",
        },
        {
          question: "Quelle est la couleur du ciel ?",
          answers: ["Rouge", "Bleu", "Vert"],
          correctAnswer: "Bleu",
        },
        // Ajoutez ici les questions supplémentaires
      ],
      currentQuestionIndex: 0,
      currentQuestion: null,
    };
  },
  mounted() {
    this.setCurrentQuestion();
    setInterval(this.nextQuestion, 10000);
  },
  methods: {
    setCurrentQuestion() {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    },
    selectAnswer(answer) {
      if (answer === this.currentQuestion.correctAnswer) {
        console.log("Bonne réponse !");
      } else {
        console.log("Mauvaise réponse !");
      }
      this.nextQuestion();
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.setCurrentQuestion();
      } else {
        console.log("Fin du quiz !");
        // Ajoutez ici le code pour afficher les résultats du quiz
      }
    },
  },
}

 Vue.createApp(App).mount('#app') 