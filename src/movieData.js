import Kapilsharmashow from './assets/Kapilsharmashow.jpg';
import fighter from './assets/fighter.jpg';
import Pink from './assets/Pink.jpg';
import mom from './assets/mom.jpg';
import Shehzada from './assets/Shehzada.jpg';
import singlepapa from './assets/singlepapa.jpg';
// Mock movie data for Netflix clone
export const movieData = {
  netflixOriginals: [
    {
      id: 1,
      title: "Stranger Things",
      backdrop_path: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      poster_path: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
      overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
    },
    {
      id: 2,
      title: "The Crown",
      backdrop_path: "https://image.tmdb.org/t/p/original/1M876KPjulVwppEpldhdc8V4o68.jpg",
      poster_path: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
      overview: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century."
    },
    {
      id: 3,
      title: "Money Heist",
      backdrop_path: "https://image.tmdb.org/t/p/original/1Jpkm9qZcsT0m0uV7X8NX4VqyN4.jpg",
      poster_path: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      overview: "A criminal mastermind who goes by 'The Professor' plans the biggest heist in history."
    },
    {
      id: 4,
      title: "Dark",
      backdrop_path: "https://image.tmdb.org/t/p/original/7FW4qg1VHOQ8eQE5ZkTnZpWsGpN.jpg",
      poster_path: "https://image.tmdb.org/t/p/w500/5Lo4WFYAHxYtvFmTwsbM2V5L9RV.jpg",
      overview: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery."
    },
    {
      id: 5,
      title: "The Witcher",
      backdrop_path: "https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      poster_path: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      overview: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny."
    }
  ],
  trending: [
    {
      id: 6,
      title: "MOM",
      poster_path: mom
    },
    {
      id: 7,
      title: "The Great Indian Kapil Show",
      poster_path: Kapilsharmashow
    },
    {
      id: 8,
      title: "FIGHTER",
      poster_path: fighter
    },
    {
      id: 9,
      title: "PINK",
      poster_path: Pink
    },
    {
      id: 10,
      title: "Single Papa",
      poster_path: singlepapa
    },
    {
      id: 11,
    title: "SHEHZADA",
      poster_path: Shehzada
    }
  ],
  topRated: [
    {
      id: 13,
      title: "The Shawshank Redemption",
      poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
    },
    {
      id: 14,
      title: "The Godfather",
      poster_path: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
    },
    {
      id: 15,
      title: "The Dark Knight",
      poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
      id: 16,
      title: "Pulp Fiction",
      poster_path: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
    },
    {
      id: 17,
      title: "Fight Club",
      poster_path: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
    },
    {
      id: 18,
      title: "Forrest Gump",
      poster_path: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
    }
  ],
  action: [
    {
      id: 19,
      title: "John Wick",
      poster_path: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
    },
    {
      id: 20,
      title: "Mad Max: Fury Road",
      poster_path: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg"
    },
    {
      id: 21,
      title: "Mission: Impossible",
      poster_path: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg"
    },
    {
      id: 22,
      title: "The Matrix",
      poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
    },
    {
      id: 23,
      title: "Inception",
      poster_path: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },
    {
      id: 24,
      title: "Avengers: Endgame",
      poster_path: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    }
  ],
  comedy: [
    {
      id: 25,
      title: "The Hangover",
      poster_path: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg"
    },
    {
      id: 26,
      title: "Superbad",
      poster_path: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg"
    },
    {
      id: 27,
      title: "Borat",
      poster_path: "https://image.tmdb.org/t/p/w500/kz8Ut5OPXgfkwrIqgYQXz7TynOu.jpg"
    },
    {
      id: 28,
      title: "The Grand Budapest Hotel",
      poster_path: "https://image.tmdb.org/t/p/w500/eWdyYQeya6xOL3Y3qZ5z9Yz1z2Y.jpg"
    },
    {
      id: 29,
      title: "Zombieland",
      poster_path: "https://image.tmdb.org/t/p/w500/vUzzDpVrab1BOG3gx3R3xmmYjZ.jpg"
    }
  ],
  horror: [
    {
      id: 30,
      title: "The Exorcist",
      poster_path: "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg"
    },
    {
      id: 31,
      title: "Get Out",
      poster_path: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg"
    },
    {
      id: 32,
      title: "A Quiet Place",
      poster_path: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5Pjl6n4w8UE4Wu3.jpg"
    },
    {
      id: 33,
      title: "Hereditary",
      poster_path: "https://image.tmdb.org/t/p/w500/4jSWO2eXvVn9MiCHhV8LRXLnPvF.jpg"
    },
    {
      id: 34,
      title: "The Conjuring",
      poster_path: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHTCEgNem.jpg"
    }
  ],
  romance: [
    {
      id: 35,
      title: "The Notebook",
      poster_path: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg"
    },
    {
      id: 36,
      title: "Titanic",
      poster_path: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
    },
    {
      id: 37,
      title: "La La Land",
      poster_path: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
    },
    {
      id: 38,
      title: "Pride & Prejudice",
      poster_path: "https://image.tmdb.org/t/p/w500/6Fg5hf9bBPjKvVThJYZ1Yza1aRJ.jpg"
    },
    {
      id: 39,
      title: "Before Sunrise",
      poster_path: "https://image.tmdb.org/t/p/w500/kZv92eTc0Gg3mKxqjjDaw73wKp8.jpg"
    }
  ],
  documentaries: [
    {
      id: 40,
      title: "Planet Earth",
      poster_path: "https://image.tmdb.org/t/p/w500/hdCIXWj5yqKj6fXZQD8NQmEmHG.jpg"
    },
    {
      id: 41,
      title: "The Social Dilemma",
      poster_path: "https://image.tmdb.org/t/p/w500/2NKON9qJtHgN4P6E2Xau6wLWo9n.jpg"
    },
    {
      id: 42,
      title: "My Octopus Teacher",
      poster_path: "https://image.tmdb.org/t/p/w500/vW8V0W0QKlOf8tPjqZq5dZ7Z1EK.jpg"
    },
    {
      id: 43,
      title: "Free Solo",
      poster_path: "https://image.tmdb.org/t/p/w500/r4xWLZq7V4qjWLXqXoQqBf5E0uZ.jpg"
    },
    {
      id: 44,
      title: "Making a Murderer",
      poster_path: "https://image.tmdb.org/t/p/w500/l1H8q1Y6YuXxKM3VYr8q3q3q3q3q.jpg"
    }
  ]
};

