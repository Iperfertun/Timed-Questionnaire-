// This is the question funstions that contain questions and the answers. They are in multidimensional array with inner array elements
var questions = [
    { 
        question: "What is your country of birth?", 
        answers: [
            { text: "msg('Hello World')", correct: false },
            { text: "alert('Hello World')" , correct: true },
            { text: "prompt('Hello World')", correct: false },
            { text: "alertBox('Hello World')", correct: false }
        ]
    },

    { 
        question: "What is your gender?", 
        answers: [
            { text: "Male", correct: true },
            { text: "Female", correct: true },
        ]
    },
    { 
        question: "Are you married?", 
        answers: [
            { text: "No", correct: false },
            { text: "Yes", correct: true },
            { text: "Complicated", correct: false },
        ]
    },
    { 
        question: "Do you have children?",
        answers: [
            { text: "Yes", correct: false },
            { text: "NO", correct: false },
        ]
    },
    { 
        question: "investment option?",
        answers: [
            { text: "Golden Visa", correct: false },
            { text: "Golden Visa Lativa", correct: false },
            { text: "Citizenship by investment", correct:true}
            { text: "Real Estate project", correct:true}
        ]
    },
];