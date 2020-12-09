use project;

db.dropDatabase()

db.historical_figures.insertMany(
    [
        {name: "Thomas Edison",
         avatarPath: "ThomasEdison.png", 
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
         markerLat: 40.3,
         markerLng: -74.2,
         biography: "Thomas Edison may be the greatest inventor in history. He has over 1000 patents in his name. Many of his inventions still have a major effect on our lives today. He was also a business entrepreneur. Several of his inventions were group efforts in his large invention laboratory where he had lots of people working for him to help develop, build, and test his inventions. Edison used his inventions to form companies including General Electric, which is one of the biggest corporations in the world today.",
        },
        {name: "Cleopatra VII",
         avatarPath: "Cleopatra.png",
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
         markerLat: 31,
         markerLng: 29,
         biography: "Cleopatra was born a princess of Egypt. Her father was the Pharaoh Ptolemy XII. Cleopatra was smart and cunning growing up. She was her father's favorite child and learned a lot about how the country was ruled from him.", 
        },
        {name: "Winston Churchill",
        avatarPath: "WinstonChurchill.png",
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
        markerLat: 52,
        markerLng: -1,
        biography: "Winston Churchill was one of the great world leaders of the 20th century. His leadership helped Britain to stand strong against Hitler and the Germans, even when they were the last country left fighting. He is also famous for his inspiring speeches and quotes.",
       },
       {name: "Frida Kahlo",
         avatarPath: "FridaKahlo.png",
         category: "Artist",
         born: {
             date: "1907-07-6",
             place: "Mexico City, Mexico"
         },
         died: {
            date: "1954-07-13",
            place: "Mexico City, Mexico"
         },
         bestKnownFor: "Surrealism art",
         occupation: "Artist",
         funFacts: [
            "Her full name is Magdalena Carmen Frida Kahlo y Calderon.",
            "In 1984, Mexico declared the works of Frida Kahlo part of the country's national cultural heritage.",
            "Her painting The Frame was the first painting by a Mexican artist acquired by the Louvre.",
            "Her paintings often featured aspects of Aztec Mythology and Mexican folklore.",
            "The major motion picture Frida told the story of her life and earned 6 Academy Award nominations."
         ],
         markerLat: 19.2,
         markerLng: -99.8,
         biography: "Although Frida had some success as an artist during her lifetime, she was not internationally famous. It wasn't until the late 1970s that her artwork was rediscovered by art historians. Since that time, Frida has become so famous that the term 'Fridamania' has been used to describe her popularity.",
        },
        {name: "Henry Ford",
        avatarPath: "HenryFord.png",
        category: "Inventor",
        born: {
            date: "1863-07-30",
            place: "Greenfield Township, Michigan"
        },
        died: {
           date: "1947-04-7",
           place: "Dearborn, Michigan"
        },
        bestKnownFor: "Founder of the Ford Motor Company and helped develop the assembly line for mass production",
        occupation: "Businessman and Inventor",
        funFacts: [
           "Henry worked as an engineer at the Edison Illumination Company where he met Thomas Edison.",
           "His first try at an automobile company was in collaboration with Thomas Edison and was called the Detroit Automobile Company.",
           "Ford had Edison's last breath saved in a test tube and you can still see the test tube at the Henry Ford Museum.",
           "In 1918 he ran for a US Senate seat, but lost.",
           "He was a race car driver early in his career."
        ],
        markerLat: 42,
        markerLng: -83,
        biography: "Henry Ford is most famous for founding the Ford Motor Company. Ford is still one of the world's largest producers of cars including brands such as Ford, Lincoln, Mercury, Volvo, Mazda, and Land Rover. Ford was a pioneer in manufacturing using the assembly line.",
       },
       {name: "King Henry VIII",
       avatarPath: "HenryVIII.png",
       category: "Royalty",
       born: {
           date: "1491-06-28",
           place: "Greenwich, England"
       },
       died: {
          date: "1547-01-28",
          place: "London, England"
       },
       bestKnownFor: "Marrying six times and splitting the Church of England from the Catholic Church",
       occupation: "King of England",
       funFacts: [
          "Anne Boleyn did not have a son, but she did give birth to a daughter Elizabeth who would become one of the greatest monarchs in English history.",
          "Not only was his son Edward VI king, but his daughters Mary and Elizabeth would also be monarchs of England.",
          "Henry VIII established the permanent navy of England.",
          "Shakespeare wrote a play about his life called Henry VIII.",
          "He spent lavishly as king, building over 50 palaces.",
          "He spent the entire fortune his father had left him and died in massive debt."
       ],
       markerLat: 51,
       markerLng: 0.8,
       biography: "Henry was determined to have a male heir. When Anne Boleyn did not have a son, he had her executed. Then he married Jane Seymour. Jane finally gave Henry what he wanted and had a son named Edward. However, Jane died during childbirth. Henry married three more times including Anne of Cleves, Catherine Howard, and Catherine Parr.",
      },
      {name: "Anne Frank",
      avatarPath: "AnneFrank.png",
      category: "Writer",
      born: {
          date: "1929-06-12",
          place: "Frankfurt, Germany"
      },
      died: {
         date: "1945-03-01",
         place: "Bergen-Belsen concentration camp, Nazi Germany."
      },
      bestKnownFor: "Writing a diary while hiding from the Nazis during World War II.",
      occupation: "None",
      funFacts: [
         "Anne and Margot called their father by his nickname 'Pim'.",
         "You can go here to read more about the Holocaust that caused the death of over 6 million Jewish people during World War II.",
         "Anne's diary was published in over sixty-five different languages.",
         "You can visit the Frank's hideaway, the Secret Annex, in Amsterdam today.",
         "One of Anne's hobbies was to collect photos and postcards of movie stars."
      ],
      markerPoint: "51, 0.8",
      markerLat: 50,
      markerLng: 8.4,
      biography: "Anne Frank was born in Frankfurt, Germany on June 12, 1929. Her father, Otto Frank, was a businessman while her mother, Edith, stayed home taking care of Anne and her older sister Margot.",
     },
     {name: "Captain James Cook",
     avatarPath: "JamesCook.png",
     category: "Explorer",
     born: {
         date: "1728-10-27",
         place: "Marton, England"
     },
     died: {
        date: "1779-02-14",
        place: "Hawaiian Islands"
     },
     bestKnownFor: "Exploring the South Pacific",
     occupation: "Explorer",
     funFacts: [
        "The first European to set foot on Australia's east coast was Cook's nephew Isaac Smith.",
        "The Endeavour also had scientists aboard including botanist Joseph Banks. They collected and recorded numerous plants and animals throughout their journey.",
        "Tahiti was so nice and the natives so friendly that some of Cook's crew wanted to stay.",
        "The Maori warriors in New Zealand wore tattoos on their faces. Some of the Endeavour's sailors got tattoos on their arms and started a tradition that continues today.",
        "As Cook was exploring during the American Revolution, Benjamin Franklin wrote to the captains of America's warships telling them to not attack or harass Cook's ships."
     ],
     markerPoint: "-30, 190",
     markerLat: -30,
     markerLng: 190,
     biography: "James Cook was a British navigator and explorer who sailed and mapped much of the South Pacific.",
    },
    {name: "Rosa Parks",
    avatarPath: "RosaParks.png",
    category: "Leaders",
    born: {
        date: "1913-02-4",
        place: "Tuskegee, Alabama"
    },
    died: {
       date: "2005-10-24",
       place: "Detroit, Michigan"
    },
    bestKnownFor: "Montgomery Bus Boycott",
    occupation: "Civil Rights Activist",
    funFacts: [
       "Rosa was awarded the Congressional Gold Medal as well as the Presidential Medal of Freedom.",
       "Rosa often worked as a seamstress when she needed a job or to make some extra money.",
       "You can visit the actual bus that Rosa Parks sat in at the Henry Ford Museum in Michigan.",
       "When she lived in Detroit, she worked as a secretary for U.S. Representative John Conyers for many years.",
       "She wrote an autobiography called Rosa Parks: My Story in 1992."
    ],
    markerPoint: "32, -86",
    markerLat: 32,
    markerLng: -86,
    biography: "Rosa grew up in the southern United States in Alabama. Her full name was Rosa Louise McCauley and she was born in Tuskegee, Alabama on February 4, 1913 to Leona and James McCauley. Her mother was a teacher and her father a carpenter. She had a younger brother named Sylvester.",
   },
   {name: "Joan of Arc",
   avatarPath: "JoanOfArc.png",
   category: "Leaders",
   born: {
       date: "1412",
       place: "Domremy, France"
   },
   died: {
      date: "1431-05-30",
      place: "Rouen, France"
   },
   bestKnownFor: "Leading the French against the English in the Hundred Years War at a young age",
   occupation: "Military Leader",
   funFacts: [
      "When King Charles first met Joan he dressed as a courtier to try and fool Joan. Joan, however, immediately approached the king and bowed to him.",
      "When Joan traveled she cut her hair and dressed to look like a man.",
      "King Charles of France, who Joan had helped to reclaim his throne, did nothing to help her once she was captured by the English.",
      "In 1920, Joan of Arc was proclaimed a Saint of the Catholic Church.",
      "Her nickname was 'The Maid of Orleans'.",
      " It is said that Joan knew she would be wounded in the Battle of Orleans. She also predicted that something bad would happen at the city of Compiegne where she was captured."
   ],
   markerPoint: "45, 1",
   markerLat: 45,
   markerLng: 1,
   biography: "Joan of Arc grew up in a small town in France. Her father, Jacques, was a farmer who also worked as an official for the town. Joan worked on the farm and learned how to sew from her mother, Isabelle. Joan was also very religious.",
  },
  {name: "Mohandas Gandhi",
  avatarPath: "MohandasGandhi.png",
  category: "Activist",
  born: {
      date: "1869-10-2",
      place: "Porbandar, India"
  },
  died: {
     date: "1948-01-30",
     place: "New Delhi, India"
  },
  bestKnownFor: "Organising non-violent civil rights protests",
  occupation: "Civil Rights Leader",
  funFacts: [
     "The 1982 movie Gandhi won the Academy Award for best motion picture.",
     "His birthday is a national holiday in India. It is also the International Day of Non-Violence.",
     "He was the 1930 Time Magazine Man of the Year.",
     "Gandhi wrote a lot.",
     "The Collected Works of Mahatma Gandhi have 50,000 pages!",
     "He was nominated for the Nobel Peace Prize five times."
     
  ],
  markerLat: 28.65,
  markerLng: 77.2,
  biography: "Mohandas Gandhi is one of the most famous leaders and champions for justice in the world. His principles and firm belief in non-violence have been followed by many other important civil rights leaders including Martin Luther King, Jr. and Nelson Mandela. His renown is such that he is mostly just referred to by the single name 'Gandhi'.",
 },
    ]
    )