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
        {name: "Cleopatra VII",
         category: "Ancient Egypt",
         born: {
             date: "69 BC",
             place: "Alexandria, Egypt"
         },
         died: {
            date: "August 30, 30 BC",
            place: "Unknown"
         },
         bestKnownFor: "The last pharaoh of Ancient Egypt",
         occupation: "Pharaoh of Egypt",
         funFacts: [
            "Cleopatra could speak at least seven languages including Greek and Egyptian.",
            "She claimed to be the reincarnation of the Egyptian god Isis.",
            "Marc Antony declared her son Caesarion as the legal heir of Julius Caesar.",
            "Octavian became the first Emperor of Rome and changed his name to Augustus.",
            "Cleopatra has been the subject of many movies and plays including the famous 1963 film starring Elizabeth Taylor."

         ],
         biography: "Cleopatra was born a princess of Egypt. Her father was the Pharaoh Ptolemy XII. Cleopatra was smart and cunning growing up. She was her father's favorite child and learned a lot about how the country was ruled from him.", 
        },
    ]
    )