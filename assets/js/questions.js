// list of all questions, choices, and answers, (20 question)
var questions = [
  {
    title: "Dealer showing a 2, player have 12",
    choices: ["hit", "stand", "double down", "split"],
    answer: "hit",
    dealer: "assets/img/card-2.jpg",
    player: ["assets/img/card-7-heart.jpg", "assets/img/card-5.jpg"]
  },
  {
    title: "Dealer showing a 10, player have 11",
    choices: ["hit", "stand", "double down", "split"],
    answer: "double down",
    dealer: "assets/img/card-10.jpg",
    player: ["assets/img/card-6.jpg", "assets/img/card-5.jpg"]
  },
  {
    title: "Dealer showing a 3, player have 13",
    choices: ["hit", "stand", "double down", "split"],
    answer: "stand",
    dealer: "assets/img/card-3.jpg",
    player: ["assets/img/card-4.jpg", "assets/img/card-9-diamond.jpg"]
  },
  {
    title: "Dealer showing an A, player have 11",
    choices: ["hit", "stand", "double down", "split"],
    answer: "double down",
    dealer: "assets/img/ace.jpg",
    player: ["assets/img/card-4.jpg", "assets/img/card-7-heart.jpg"]
  },
  {
    title: "Dealer showing a 6, player have soft 19 (A8)",
    choices: ["hit", "stand", "double down", "split"],
    answer: "double down",
    dealer: "assets/img/card-6.jpg",
    player: ["assets/img/ace.jpg", "assets/img/card-8-club.jpg"]
  },
  {
    title: "Dealer showing a 4, player have a pair of 4",
    choices: ["hit", "stand", "double down", "split"],
    answer: "hit",
    dealer: "assets/img/card-4-diamond.jpg",
    player: ["assets/img/card-4-heart.jpg", "assets/img/card-4.jpg"]
  },
  {
    title: "Dealer showing 8, player have soft 18 (A7)",
    choices: ["hit", "stand", "double down", "split"],
    answer: "stand",
    dealer: "assets/img/card-8-heart.jpg",
    player: ["assets/img/card-7.jpg", "assets/img/ace.jpg"]
  },
  {
    title: "Dealer showing a 3, player have a pair of 7",
    choices: ["hit", "stand", "double down", "split"],
    answer: "split",
    dealer: "assets/img/card-3.jpg",
    player: ["assets/img/card-7.jpg", "assets/img/card-7-heart.jpg"]
  },
  {
    title: "Dealer showing a 9, player have 10",
    choices: ["hit", "stand", "double down", "split"],
    answer: "double down",
    dealer: "assets/img/card-9-diamond.jpg",
    player: ["assets/img/card-7-heart.jpg", "assets/img/card-3.jpg"]
  },
  {
    title: "Dealer showing a 2, player have 13",
    choices: ["hit", "stand", "double down", "split"],
    answer: "stand",
    dealer: "assets/img/card-2-diamond.jpg",
    player: ["assets/img/card-4.jpg", "assets/img/card-9-diamond.jpg"]
  },
  {
    title: "Dealer showing a 7, player have a pair of 9",
    choices: ["hit", "stand", "double down", "split"],
    answer: "stand",
    dealer: "assets/img/card-7-heart.jpg",
    player: ["assets/img/card-9.jpg", "assets/img/card-9-diamond.jpg"]
  },
  {
    title: "Dealer showing a 2, player have soft 17 (A6)",
    choices: ["hit", "stand", "double down", "split"],
    answer: "hit",
    dealer: "assets/img/card-2.jpg",
    player: ["assets/img/ace-diamond.jpg", "assets/img/card-5.jpg"]
  },
  {
    title: "Dealer showing a 7, player have a pair of 4",
    choices: ["hit", "stand", "double down", "split"],
    answer: "hit",
    dealer: "assets/img/card-7.jpg",
    player: ["assets/img/card-4-diamond.jpg", "assets/img/card-4-heart.jpg"]
  },
  {
    title: "Dealer showing a 5, player have a pair of 4",
    choices: ["hit", "stand", "double down", "split"],
    answer: "split",
    dealer: "assets/img/card-5.jpg",
    player: ["assets/img/card-4.jpg", "assets/img/card-4-diamond.jpg"]
  },
  {
    title: "Dealer showing a 6, player have 8",
    choices: ["hit", "stand", "double down", "split"],
    answer: "hit",
    dealer: "assets/img/card-6.jpg",
    player: ["assets/img/card-6.jpg", "assets/img/card-2-diamond.jpg"]
  },
  {
    title: "Dealer showing an A, player have a pair of 8",
    choices: ["hit", "stand", "double down", "split"],
    answer: "split",
    dealer: "assets/img/ace-diamond.jpg",
    player: ["assets/img/card-8-heart.jpg", "assets/img/card-8-club.jpg"]
  },
  {
    title: "Dealer showing a 10, player have 18",
    choices: ["hit", "stand", "double down", "split"],
    answer: "stand",
    dealer: "assets/img/king.jpg",
    player: ["assets/img/card-8-heart.jpg", "assets/img/queen.jpg"]
  },
  {
    title: "Dealer showing a 4, player have a soft 15 (A4)",
    choices: ["hit", "stand", "double down", "split"],
    answer: "double down",
    dealer: "assets/img/card-4-diamond.jpg",
    player: ["assets/img/ace.jpg", "assets/img/card-4.jpg"]
  },
  {
    title: "Dealer showing a 8, player have a pair of 7",
    choices: ["hit", "stand", "double down", "split"],
    answer: "hit",
    dealer: "assets/img/card-8-club.jpg",
    player: ["assets/img/card-7.jpg", "assets/img/card-7-heart.jpg"]
  },
  {
    title: "Dealer showing a 2, player have a pair of 4",
    choices: ["hit", "stand", "double down", "split"],
    answer: "hit",
    dealer: "assets/img/card-2.jpg",
    player: ["assets/img/card-4-heart.jpg", "assets/img/card-4-diamond.jpg"]
  },
];

