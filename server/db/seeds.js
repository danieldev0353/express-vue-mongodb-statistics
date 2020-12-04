use project;

db.dropDatabase()

db.historical_figures.insertMany(
    [
        {name: "Thomas Edison",
         category: "science",
         born: {
             date: "1847-02-11",
             place: "Milan, Ohio"
         },
         died: {
            date: "1931-10-18",
            place: "West Orange, New Jersey"
         },
         bestKnownFor: "Inventing many useful items including the phonograph and a practical light bulb",
         occupation: "Businessman and Inventor",
         funFacts: [
            "His middle name was Alva and his family called him Al.",
            "His first two kids had the nicknames Dot and Dash.",

         ],
         biography: "Thomas Edison may be the greatest inventor in history. He has over 1000 patents in his name. Many of his inventions still have a major effect on our lives today. He was also a business entrepreneur. Several of his inventions were group efforts in his large invention laboratory where he had lots of people working for him to help develop, build, and test his inventions. Edison used his inventions to form companies including General Electric, which is one of the biggest corporations in the world today.",
        },
        {name: "Thomas Edison",
         category: "science",
         born: {
             date: "1847-02-11",
             place: "Milan, Ohio"
         },
         died: {
            date: "1931-10-18",
            place: "West Orange, New Jersey"
         },
         bestKnownFor: "Inventing many useful items including the phonograph and a practical light bulb",
         occupation: "Businessman and Inventor",
         funFacts: [
            "His middle name was Alva and his family called him Al.",
            "His first two kids had the nicknames Dot and Dash.",

         ],
         biography: "Thomas Edison may be the greatest inventor in history. He has over 1000 patents in his name. Many of his inventions still have a major effect on our lives today. He was also a business entrepreneur. Several of his inventions were group efforts in his large invention laboratory where he had lots of people working for him to help develop, build, and test his inventions. Edison used his inventions to form companies including General Electric, which is one of the biggest corporations in the world today.", 
        },
    ]
    )