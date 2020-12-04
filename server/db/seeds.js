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
            "He set up his first lab in his parent's basement at the age of 10.",
            "He was partially deaf.",
            "His first invention was an electric vote recorder.",
            "His 1093 patents are the most on record.",
            " He said the words to 'Mary had a little lamb' as the first recorded voice on the phonograph"
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
        {name: "Winston Churchill",
        category: "Leader",
        born: {
            date: "1874-11-30",
            place: "Oxfordshire, England"
        },
        died: {
           date: "1965-01-24",
           place: "London, England"
        },
        bestKnownFor: "Standing up to the Germans in World War II",
        occupation: "Prime Minister",
        funFacts: [
           "He wrote a number of historical books and won the Nobel Prize in Literature in 1953.",
           "He was named an honorary citizen of the United States.",
           "Churchill married Clementine Hozier in 1908.",
           "He had five children including four daughters and one son.",
           "Winston did not do well in school as a child.",
           "He also had trouble getting into the Royal Military College. Although, once in, he finished near the top of his class.",
           "He was not healthy during World War II. He had a heart attack in 1941 and pneumonia in 1943."
        ],
        biography: "Winston Churchill was one of the great world leaders of the 20th century. His leadership helped Britain to stand strong against Hitler and the Germans, even when they were the last country left fighting. He is also famous for his inspiring speeches and quotes.",
       },
    ]
    )