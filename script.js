let questions = [
{
    "question": 'Wie heißt die Schicht der Atmosphäre, die der Erde am nächsten ist?',
    'answer_1': 'Stratosphäre',
    'answer_2': 'Mesosphäre',
    'answer_3': 'Troposphäre',
    'answer_4': 'Thermosphäre',
    'right_answer': 3,
},
{
    "question": 'Wie hoch ist der Eiffelturm?',
    'answer_1': '150m',
    'answer_2': '176m',
    'answer_3': '220m',
    'answer_4': '300m',
    'right_answer': 4,
},
{
    "question": 'In welchem Jahr wurde Michael Jackson geboren?',
    'answer_1': '1958',
    'answer_2': '1959',
    'answer_3': '1965',
    'answer_4': '1934',
    'right_answer': 1,
},
];

function init() {
    document.getElementById('all-Questions').innerHTML = questions.lenght;
}