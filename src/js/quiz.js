// quiz.js - Quiz interativo com 10 perguntas

document.addEventListener('DOMContentLoaded', function() {
    // Perguntas do quiz
    const questions = [
        {
            question: "Quantas inundações foram registradas no Brasil entre 1991 e 2022?",
            options: [
                "Aproximadamente 5 mil",
                "Cerca de 10 mil",
                "Mais de 21 mil",
                "Menos de 3 mil"
            ],
            correctAnswer: 2
        },
        {
            question: "Quantas pessoas foram afetadas por enchentes no Brasil entre 1991 e 2022?",
            options: [
                "Cerca de 50 milhões",
                "Mais de 110 milhões",
                "Aproximadamente 30 milhões",
                "Menos de 20 milhões"
            ],
            correctAnswer: 1
        },
        {
            question: "Qual foi o número aproximado de brasileiros impactados por eventos hidrológicos extremos em 2023?",
            options: [
                "1,5 milhão",
                "2,2 milhões",
                "3,3 milhões",
                "4,7 milhões"
            ],
            correctAnswer: 2
        },
        {
            question: "Quantas pessoas morreram aproximadamente devido às enchentes no Rio Grande do Sul em 2024?",
            options: [
                "Cerca de 50",
                "Aproximadamente 100",
                "Mais de 170",
                "Menos de 30"
            ],
            correctAnswer: 2
        },
        {
            question: "Qual o valor anual estimado que o Brasil perde devido a desastres naturais, segundo o Banco Mundial?",
            options: [
                "R$ 3 bilhões",
                "R$ 5 bilhões",
                "R$ 8 bilhões",
                "R$ 12 bilhões"
            ],
            correctAnswer: 2
        },
        {
            question: "Qual porcentagem das perdas econômicas por desastres naturais no Brasil é causada por enchentes?",
            options: [
                "Cerca de 30%",
                "Aproximadamente 45%",
                "Mais de 60%",
                "Menos de 20%"
            ],
            correctAnswer: 2
        },
        {
            question: "Quantos brasileiros vivem em áreas de risco, segundo o IBGE?",
            options: [
                "Cerca de 3 milhões",
                "Aproximadamente 5 milhões",
                "Mais de 8 milhões",
                "Menos de 2 milhões"
            ],
            correctAnswer: 2
        },
        {
            question: "Qual porcentagem das áreas de risco no Brasil carece de sistemas básicos de drenagem urbana?",
            options: [
                "25%",
                "40%",
                "55%",
                "70%"
            ],
            correctAnswer: 2
        },
        {
            question: "Em quanto os sistemas de alerta precoce implementados no Japão e na Holanda conseguiram reduzir o número de vítimas fatais em eventos extremos?",
            options: [
                "Até 30%",
                "Até 50%",
                "Até 70%",
                "Até 90%"
            ],
            correctAnswer: 2
        },
        {
            question: "Qual é o nome do centro brasileiro responsável pelo monitoramento e alertas de desastres naturais?",
            options: [
                "INMET",
                "CEMADEN",
                "CPRM",
                "IBAMA"
            ],
            correctAnswer: 1
        }
    ];

// Elementos do quiz
    const quizContainer = document.querySelector('.quiz-container');
    const questionElement = document.querySelector('.quiz-question p');
    const optionsContainer = document.querySelector('.quiz-options');
    const prevButton = document.getElementById('prev-question');
    const nextButton = document.getElementById('next-question');
    const resultElement = document.querySelector('.quiz-result');
    const correctAnswersElement = document.getElementById('correct-answers');
    
    // Variáveis de controle
    let currentQuestionIndex = 0;
    let userAnswers = Array(questions.length).fill(null);
