// // project_folder/trivia-server/questions.js

// // Embedded question bank for demo.
// // All question types match Flutter QuestionType enum values exactly:
// //   mcq, true_false, type_in, image_based

// const QUESTIONS = [
//   {
//     id: 'q1',
//     type: 'mcq',
//     text: 'What is the capital of France?',
//     options: ['London', 'Berlin', 'Paris', 'Madrid'],
//     correct: 'Paris',
//     timer_seconds: 15,
//   },
//   {
//     id: 'q2',
//     type: 'mcq',
//     text: 'Which planet is closest to the Sun?',
//     options: ['Venus', 'Mercury', 'Earth', 'Mars'],
//     correct: 'Mercury',
//     timer_seconds: 15,
//   },
//   {
//     id: 'q3',
//     type: 'true_false',
//     text: 'The Great Wall of China is visible from space.',
//     options: ['True', 'False'],
//     correct: 'false',
//     timer_seconds: 10,
//   },
//   {
//     id: 'q4',
//     type: 'mcq',
//     text: 'What is the largest ocean on Earth?',
//     options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
//     correct: 'Pacific',
//     timer_seconds: 15,
//   },
//   {
//     id: 'q5',
//     type: 'true_false',
//     text: 'A group of flamingos is called a flamboyance.',
//     options: ['True', 'False'],
//     correct: 'true',
//     timer_seconds: 10,
//   },
//   {
//     id: 'q6',
//     type: 'mcq',
//     text: 'How many sides does a hexagon have?',
//     options: ['5', '6', '7', '8'],
//     correct: '6',
//     timer_seconds: 10,
//   },
//   {
//     id: 'q7',
//     type: 'type_in',
//     text: 'What is the chemical symbol for water?',
//     options: [],
//     correct: 'h2o',          // compared case-insensitively on server
//     timer_seconds: 20,
//   },
//   {
//     id: 'q8',
//     type: 'mcq',
//     text: 'Who painted the Mona Lisa?',
//     options: ['Van Gogh', 'Picasso', 'Da Vinci', 'Rembrandt'],
//     correct: 'Da Vinci',
//     timer_seconds: 15,
//   },
//   {
//     id: 'q9',
//     type: 'true_false',
//     text: 'Sharks are mammals.',
//     options: ['True', 'False'],
//     correct: 'false',
//     timer_seconds: 10,
//   },
//   {
//     id: 'q10',
//     type: 'mcq',
//     text: 'What year did the first iPhone launch?',
//     options: ['2005', '2006', '2007', '2008'],
//     correct: '2007',
//     timer_seconds: 15,
//   },
// ];

// module.exports = { QUESTIONS };


// project_folder/trivia-server/questions.js

// Telugu movie trivia questions for demo.
// Types must match Flutter QuestionType enum:
// mcq, true_false, type_in, image_based

const QUESTIONS = [

  
  {
    id: 'q1',
    type: 'mcq',
    text: 'Who directed the movie "Baahubali"?',
    options: ['Trivikram Srinivas', 'S. S. Rajamouli', 'Sukumar', 'Puri Jagannadh'],
    correct: 'S. S. Rajamouli',
    timer_seconds: 15,
  },
  {
    id: 'q2',
    type: 'mcq',
    text: 'Who played the role of Pushpa in the movie "Pushpa"?',
    options: ['Ram Charan', 'Allu Arjun', 'Jr NTR', 'Mahesh Babu'],
    correct: 'Allu Arjun',
    timer_seconds: 15,
  },
  {
    id: 'q3',
    type: 'true_false',
    text: 'The movie "RRR" was directed by S. S. Rajamouli.',
    options: ['True', 'False'],
    correct: 'true',
    timer_seconds: 10,
  },
  {
    id: 'q4',
    type: 'mcq',
    text: 'Which Telugu actor is known as "Power Star"?',
    options: ['Chiranjeevi', 'Pawan Kalyan', 'Balakrishna', 'Nagarjuna'],
    correct: 'Pawan Kalyan',
    timer_seconds: 15,
  },
  {
    id: 'q5',
    type: 'true_false',
    text: 'Mahesh Babu acted in the movie "Pokiri".',
    options: ['True', 'False'],
    correct: 'true',
    timer_seconds: 10,
  },
  {
    id: 'q6',
    type: 'mcq',
    text: 'Who composed the music for the movie "Ala Vaikunthapurramuloo"?',
    options: ['Devi Sri Prasad', 'Thaman S', 'Mani Sharma', 'Ilaiyaraaja'],
    correct: 'Thaman S',
    timer_seconds: 15,
  },
  {
    id: 'q7',
    type: 'type_in',
    text: 'Who is the hero of the Telugu movie "Arjun Reddy"?',
    options: [],
    correct: 'vijay devarakonda',
    timer_seconds: 20,
  },
  {
    id: 'q8',
    type: 'mcq',
    text: 'Which movie features the character "Bheem" played by Jr NTR?',
    options: ['RRR', 'Janatha Garage', 'Temper', 'Nannaku Prematho'],
    correct: 'RRR',
    timer_seconds: 15,
  },
  {
    id: 'q9',
    type: 'true_false',
    text: 'The movie "Magadheera" starred Ram Charan.',
    options: ['True', 'False'],
    correct: 'true',
    timer_seconds: 10,
  },
  {
    id: 'q10',
    type: 'mcq',
    text: 'Who directed the movie "Pokiri"?',
    options: ['Puri Jagannadh', 'Trivikram Srinivas', 'Sukumar', 'Boyapati Srinu'],
    correct: 'Puri Jagannadh',
    timer_seconds: 15,
  },


    // Additional Telugu cinema questions

  {
    id: 'q11',
    type: 'mcq',
    text: 'Which movie made Ram Charan debut as a hero?',
    options: ['Magadheera', 'Chirutha', 'Racha', 'Orange'],
    correct: 'Chirutha',
    timer_seconds: 15,
  },
  {
    id: 'q12',
    type: 'true_false',
    text: 'Allu Arjun is popularly known as "Stylish Star".',
    options: ['True', 'False'],
    correct: 'true',
    timer_seconds: 10,
  },
  {
    id: 'q13',
    type: 'mcq',
    text: 'Which movie features Mahesh Babu as a police officer?',
    options: ['Businessman', 'Pokiri', 'Dookudu', 'Spyder'],
    correct: 'Dookudu',
    timer_seconds: 15,
  },
  {
    id: 'q14',
    type: 'mcq',
    text: 'Who directed the movie "Arjun Reddy"?',
    options: ['Sandeep Reddy Vanga', 'Sukumar', 'Puri Jagannadh', 'Krish'],
    correct: 'Sandeep Reddy Vanga',
    timer_seconds: 15,
  },
  {
    id: 'q15',
    type: 'true_false',
    text: 'The movie "Eega" was directed by S. S. Rajamouli.',
    options: ['True', 'False'],
    correct: 'true',
    timer_seconds: 10,
  },
  {
    id: 'q16',
    type: 'mcq',
    text: 'Which movie features the famous dialogue "Taggede Le"?',
    options: ['Pushpa', 'RRR', 'Ala Vaikunthapurramuloo', 'Race Gurram'],
    correct: 'Pushpa',
    timer_seconds: 15,
  },
  {
    id: 'q17',
    type: 'mcq',
    text: 'Who is known as "Megastar" in Telugu cinema?',
    options: ['Chiranjeevi', 'Pawan Kalyan', 'Balakrishna', 'Nagarjuna'],
    correct: 'Chiranjeevi',
    timer_seconds: 15,
  },
  {
    id: 'q18',
    type: 'type_in',
    text: 'Which actor played Komaram Bheem in the movie "RRR"?',
    options: [],
    correct: 'jr ntr',
    timer_seconds: 20,
  },
  {
    id: 'q19',
    type: 'mcq',
    text: 'Which movie starred Prabhas before Baahubali and became a blockbuster?',
    options: ['Mirchi', 'Billa', 'Rebel', 'Darling'],
    correct: 'Mirchi',
    timer_seconds: 15,
  },
  {
    id: 'q20',
    type: 'true_false',
    text: 'The movie "Athadu" starred Mahesh Babu.',
    options: ['True', 'False'],
    correct: 'true',
    timer_seconds: 10,
  },
  {
    id: 'q21',
    type: 'mcq',
    text: 'Which movie features the character "Bunny"?',
    options: ['Bunny', 'Race Gurram', 'Julayi', 'Arya'],
    correct: 'Bunny',
    timer_seconds: 15,
  },
  {
    id: 'q22',
    type: 'mcq',
    text: 'Who directed the blockbuster movie "RRR"?',
    options: ['S. S. Rajamouli', 'Sukumar', 'Puri Jagannadh', 'Trivikram'],
    correct: 'S. S. Rajamouli',
    timer_seconds: 15,
  },
  {
    id: 'q23',
    type: 'type_in',
    text: 'Who played the hero in the movie "Geetha Govindam"?',
    options: [],
    correct: 'vijay devarakonda',
    timer_seconds: 20,
  },
  {
    id: 'q24',
    type: 'true_false',
    text: 'The movie "Temper" starred Jr NTR.',
    options: ['True', 'False'],
    correct: 'true',
    timer_seconds: 10,
  },
  {
    id: 'q25',
    type: 'mcq',
    text: 'Which movie features the song "Butta Bomma"?',
    options: ['Ala Vaikunthapurramuloo', 'Pushpa', 'Sarileru Neekevvaru', 'Aravinda Sametha'],
    correct: 'Ala Vaikunthapurramuloo',
    timer_seconds: 15,
  },
  {
    id: 'q26',
    type: 'mcq',
    text: 'Which actor starred in the movie "Leader"?',
    options: ['Rana Daggubati', 'Ram Charan', 'Nani', 'Naga Chaitanya'],
    correct: 'Rana Daggubati',
    timer_seconds: 15,
  },
  {
    id: 'q27',
    type: 'true_false',
    text: 'The movie "Jersey" starred Nani.',
    options: ['True', 'False'],
    correct: 'true',
    timer_seconds: 10,
  },
  {
    id: 'q28',
    type: 'mcq',
    text: 'Who directed the movie "Ala Vaikunthapurramuloo"?',
    options: ['Trivikram Srinivas', 'Sukumar', 'Boyapati Srinu', 'Puri Jagannadh'],
    correct: 'Trivikram Srinivas',
    timer_seconds: 15,
  },
  {
    id: 'q29',
    type: 'type_in',
    text: 'Which actor is popularly called "Natural Star"?',
    options: [],
    correct: 'nani',
    timer_seconds: 20,
  },
  {
    id: 'q30',
    type: 'mcq',
    text: 'Which Telugu movie features the character "Balu"?',
    options: ['Pokiri', 'Athadu', 'Okkadu', 'Murari'],
    correct: 'Pokiri',
    timer_seconds: 15,
  }
];

module.exports = { QUESTIONS };