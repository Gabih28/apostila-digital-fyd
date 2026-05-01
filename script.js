const lessons = [
  {
    title: "Lesson 1",
    modules: [
      {
        title: "Verbs and Grammar",
        content: {
          topic: "Basic verbs + like structure",
          explanation:
            "We use I / You + verb to talk about actions. We can also use I like to + verb.",
          examples: [
            "I like → Eu gosto",
            "I eat → Eu como",
            "I drink → Eu bebo",
            "I study → Eu estudo",
            "I help → Eu ajudo",
            "I visit → Eu visito",
            "You like → Você gosta",
            "You eat → Você come",
            "I like to eat → Eu gosto de comer",
            "You like to study → Você gosta de estudar"
          ],
          exercises: [
            {
              type: "choice",
              question: "Choose the correct translation: I drink.",
              options: ["Eu estudo", "Eu bebo", "Eu visito"],
              answer: "Eu bebo"
            },
            {
              type: "text",
              question: "Translate to English: Eu gosto de estudar.",
              answer: "i like to study"
            },
            {
              type: "matching",
              question: "Match the verbs:",
              pairs: [
                { left: "I eat", right: "Eu como" },
                { left: "I help", right: "Eu ajudo" },
                { left: "You study", right: "Você estuda" }
              ]
            }
          ]
        }
      },
      {
        title: "Vocabulary",
        content: {
          topic: "Food and Family",
          explanation:
            "In this module, you will learn vocabulary about food and family members.",
          examples: [
            "bread → pão",
            "butter → manteiga",
            "cheese → queijo",
            "eggs → ovos",
            "fruit → frutas",
            "lemonade → limonada",
            "father → pai",
            "mother → mãe",
            "sister → irmã",
            "brother → irmão",
            "son → filho",
            "daughter → filha"
          ],
          exercises: [
            {
              type: "matching",
              question: "Match the vocabulary:",
              pairs: [
                { left: "bread", right: "pão" },
                { left: "mother", right: "mãe" },
                { left: "eggs", right: "ovos" },
                { left: "cheese", right: "queijo" }
              ]
            },
            {
              type: "choice",
              question: "What does 'father' mean?",
              options: ["mãe", "pai", "irmão"],
              answer: "pai"
            },
            {
              type: "text",
              question: "Translate to English: irmã",
              answer: "sister"
            }
          ]
        }
      },
      {
        title: "Idiomatic Expressions",
        content: {
          topic: "Basic conversation",
          explanation:
            "Use these expressions to start simple conversations in English.",
          examples: [
            "Hi → Oi",
            "Thank you → Obrigado",
            "You're welcome → De nada",
            "Good morning → Bom dia",
            "Good-bye → Adeus",
            "Bye → Tchau",
            "Hi, I drink lemonade. And you?",
            "Thank you, I like tea."
          ],
          exercises: [
            {
              type: "choice",
              question: "What do you say when someone gives you something?",
              options: ["Good-bye", "Thank you", "Hi"],
              answer: "Thank you"
            },
            {
              type: "text",
              question: "Translate to English: De nada",
              answer: "you're welcome"
            },
            {
              type: "matching",
              question: "Match the expressions:",
              pairs: [
                { left: "Hi", right: "Oi" },
                { left: "Good morning", right: "Bom dia" },
                { left: "Bye", right: "Tchau" }
              ]
            }
          ]
        }
      }
    ],
    test: [
      {
        type: "choice",
        question: "I like to ___",
        options: ["eat", "chair", "book"],
        answer: "eat"
      },
      {
        type: "text",
        question: "Translate: You drink water.",
        answer: "você bebe água"
      },
      {
        type: "choice",
        question: "Bread means:",
        options: ["mãe", "pão", "ovo"],
        answer: "pão"
      },
      {
        type: "text",
        question: "Translate: Eu gosto de estudar.",
        answer: "i like to study"
      },
      {
        type: "choice",
        question: "Thank you means:",
        options: ["Tchau", "Obrigado", "Bom dia"],
        answer: "Obrigado"
      },
      {
        type: "matching",
        question: "Match the words:",
        pairs: [
          { left: "mother", right: "mãe" },
          { left: "cheese", right: "queijo" },
          { left: "lemonade", right: "limonada" }
        ]
      }
    ]
  },

  {
    title: "Lesson 2",
    modules: [
      {
        title: "Verbs and Grammar",
        content: {
          topic: "Writing Practice: Basic Verbs",
          explanation:
            "In this module, you will practice writing simple sentences in English using basic verbs such as like, visit, eat, drink, help and study.",
          examples: [
            "I like → Eu gosto",
            "I visit → Eu visito",
            "I eat → Eu como",
            "I drink → Eu bebo",
            "I help → Eu ajudo",
            "I study → Eu estudo",
            "You like → Você gosta",
            "You visit → Você visita",
            "You eat → Você come",
            "You drink → Você bebe",
            "You help → Você ajuda",
            "You study → Você estuda",
            "I like to visit → Eu gosto de visitar",
            "I like to eat → Eu gosto de comer",
            "I like to drink → Eu gosto de beber",
            "I like to help → Eu gosto de ajudar",
            "I like to study → Eu gosto de estudar",
            "You like to visit → Você gosta de visitar",
            "You like to eat → Você gosta de comer",
            "You like to drink → Você gosta de beber",
            "You like to help → Você gosta de ajudar",
            "You like to study → Você gosta de estudar"
          ],
          exercises: [
            {
              type: "text",
              question: "Translate to English: Eu gosto.",
              answer: "i like"
            },
            {
              type: "text",
              question: "Translate to English: Eu bebo.",
              answer: "i drink"
            },
            {
              type: "text",
              question: "Translate to English: Você estuda.",
              answer: "you study"
            },
            {
              type: "matching",
              question: "Match the sentences:",
              pairs: [
                { left: "I eat", right: "Eu como" },
                { left: "You help", right: "Você ajuda" },
                { left: "I like to drink", right: "Eu gosto de beber" },
                { left: "You like to study", right: "Você gosta de estudar" }
              ]
            }
          ]
        }
      },
      {
        title: "Vocabulary",
        content: {
          topic: "Family and Food Vocabulary",
          explanation:
            "In this module, you will practice vocabulary about family members and food using simple sentences.",
          examples: [
            "I like my father → Eu gosto do meu pai",
            "I like my mother → Eu gosto da minha mãe",
            "I like my sister → Eu gosto da minha irmã",
            "I like my brother → Eu gosto do meu irmão",
            "You like your daughter → Você gosta da sua filha",
            "You like your son → Você gosta do seu filho",
            "You like your friend → Você gosta do seu amigo",
            "You like your brother → Você gosta do seu irmão",
            "I like bread → Eu gosto de pão",
            "I like butter → Eu gosto de manteiga",
            "I like ham → Eu gosto de presunto",
            "I like cheese → Eu gosto de queijo",
            "You like honey → Você gosta de mel",
            "You like fruit → Você gosta de frutas",
            "You like eggs → Você gosta de ovos",
            "You like lemonade → Você gosta de limonada",
            "I drink water → Eu bebo água",
            "I drink tea → Eu bebo chá",
            "I drink milk → Eu bebo leite",
            "I drink lemonade → Eu bebo limonada",
            "You visit my friend → Você visita meu amigo",
            "You visit my father → Você visita meu pai",
            "You visit my brother → Você visita meu irmão",
            "You visit my daughter → Você visita minha filha",
            "I help your son → Eu ajudo seu filho",
            "I help your mother → Eu ajudo sua mãe",
            "I help your sister → Eu ajudo sua irmã",
            "I help your friend → Eu ajudo seu amigo"
          ],
          exercises: [
            {
              type: "choice",
              question: "What does 'father' mean?",
              options: ["mãe", "pai", "irmão"],
              answer: "pai"
            },
            {
              type: "choice",
              question: "What does 'cheese' mean?",
              options: ["queijo", "presunto", "mel"],
              answer: "queijo"
            },
            {
              type: "text",
              question: "Translate to English: Eu gosto de pão.",
              answer: "i like bread"
            },
            {
              type: "matching",
              question: "Match the vocabulary:",
              pairs: [
                { left: "mother", right: "mãe" },
                { left: "bread", right: "pão" },
                { left: "eggs", right: "ovos" },
                { left: "lemonade", right: "limonada" },
                { left: "daughter", right: "filha" }
              ]
            }
          ]
        }
      },
      {
        title: "Idiomatic Expressions",
        content: {
          topic: "Simple Conversation Expressions",
          explanation:
            "In this module, you will practice short expressions used in simple conversations.",
          examples: [
            "Hi, I drink lemonade. And you? → Oi, eu bebo limonada. E você?",
            "Thank you, I like tea → Obrigado, eu gosto de chá",
            "Good morning. I like to eat fruit, please → Bom dia. Eu gosto de comer frutas, por favor",
            "Thanks, I like your lemonade → Obrigado, eu gosto da sua limonada",
            "You're welcome → De nada",
            "Good-bye, Father → Adeus, Pai",
            "Bye-bye, Mother → Tchau, Mãe",
            "Bye, Son → Tchau, Filho"
          ],
          exercises: [
            {
              type: "choice",
              question: "What does 'You're welcome' mean?",
              options: ["Obrigado", "De nada", "Bom dia"],
              answer: "De nada"
            },
            {
              type: "text",
              question: "Translate to English: Bom dia.",
              answer: "good morning"
            },
            {
              type: "text",
              question: "Translate to English: Obrigado.",
              answer: "thank you"
            },
            {
              type: "matching",
              question: "Match the expressions:",
              pairs: [
                { left: "Hi", right: "Oi" },
                { left: "Good-bye", right: "Adeus" },
                { left: "Bye", right: "Tchau" },
                { left: "Thank you", right: "Obrigado" }
              ]
            }
          ]
        }
      }
    ],
    test: [
      {
        type: "text",
        question: "Translate to English: Eu estudo.",
        answer: "i study"
      },
      {
        type: "text",
        question: "Translate to English: Você bebe.",
        answer: "you drink"
      },
      {
        type: "choice",
        question: "What does 'I like cheese' mean?",
        options: ["Eu gosto de queijo", "Eu gosto de pão", "Eu como queijo"],
        answer: "Eu gosto de queijo"
      },
      {
        type: "text",
        question: "Translate to English: Eu gosto de estudar.",
        answer: "i like to study"
      },
      {
        type: "choice",
        question: "What does 'Thank you' mean?",
        options: ["De nada", "Obrigado", "Tchau"],
        answer: "Obrigado"
      },
      {
        type: "matching",
        question: "Match the sentences:",
        pairs: [
          { left: "I drink water", right: "Eu bebo água" },
          { left: "You like fruit", right: "Você gosta de frutas" },
          { left: "Good morning", right: "Bom dia" }
        ]
      }
    ]
  },

  {
    title: "Lesson 3",
    modules: [
      {
        title: "Verbs and Grammar",
        content: {
          topic: "Want + Basic Actions",
          explanation:
            "In this lesson, you will learn how to use 'I want', 'Do you want?' and action verbs such as buy, work, sleep, play and go.",
          examples: [
            "I want → Eu quero",
            "You buy → Você compra",
            "I want to play → Eu quero jogar",
            "You want to sleep → Você quer dormir",
            "I want to go → Eu quero ir",
            "You want to work → Você quer trabalhar",
            "Do you want? → Você quer?",
            "Do you buy? → Você compra?",
            "Do you work? → Você trabalha?",
            "Do you want to sleep? → Você quer dormir?",
            "Do you want to play? → Você quer jogar?",
            "I like to work → Eu gosto de trabalhar",
            "You like to sleep → Você gosta de dormir",
            "I want to help → Eu quero ajudar",
            "You want to drink → Você quer beber",
            "I like to play → Eu gosto de jogar",
            "You want to eat → Você quer comer",
            "I want to buy → Eu quero comprar",
            "I want to buy honey → Eu quero comprar mel",
            "I want to play with my sister → Eu quero brincar com minha irmã",
            "Do you work with your father? → Você trabalha com seu pai?",
            "You sleep with your brother → Você dorme com seu irmão",
            "Do you go with your mother? → Você vai com sua mãe?",
            "I want to visit your daughter → Eu quero visitar sua filha",
            "Do you like to play with your son? → Você gosta de brincar com seu filho?"
          ],
          exercises: [
            {
              type: "choice",
              question: "What does 'I want' mean?",
              options: ["Eu gosto", "Eu quero", "Eu estudo"],
              answer: "Eu quero"
            },
            {
              type: "text",
              question: "Translate to English: Eu quero jogar.",
              answer: "i want to play"
            },
            {
              type: "text",
              question: "Translate to English: Você quer dormir?",
              answer: "do you want to sleep"
            },
            {
              type: "matching",
              question: "Match the sentences:",
              pairs: [
                { left: "I want to go", right: "Eu quero ir" },
                { left: "You buy", right: "Você compra" },
                { left: "Do you work?", right: "Você trabalha?" },
                { left: "You want to eat", right: "Você quer comer" }
              ]
            }
          ]
        }
      },
      {
        title: "Vocabulary",
        content: {
          topic: "Actions, Food and People",
          explanation:
            "In this module, you will practice sentences using food, family members and daily actions.",
          examples: [
            "We want to eat fruit → Nós queremos comer frutas",
            "We want to eat cheese → Nós queremos comer queijo",
            "We want to eat ham and eggs → Nós queremos comer presunto e ovos",
            "We want to eat bread and butter → Nós queremos comer pão e manteiga",
            "They work with my father → Eles trabalham com meu pai",
            "They work with my mother → Eles trabalham com minha mãe",
            "They work with my brother → Eles trabalham com meu irmão",
            "They work with my sister → Eles trabalham com minha irmã",
            "Do we eat bread and butter? → Nós comemos pão e manteiga?",
            "Do we eat ham and cheese? → Nós comemos presunto e queijo?",
            "Do we eat fruit with honey? → Nós comemos frutas com mel?",
            "Do they want to play the piano? → Eles querem tocar piano?",
            "Do they want to play the flute? → Eles querem tocar flauta?",
            "I want to buy a house → Eu quero comprar uma casa",
            "I want to buy your piano → Eu quero comprar seu piano",
            "I want to buy a farm → Eu quero comprar uma fazenda",
            "I want to buy a flute → Eu quero comprar uma flauta",
            "Do you like to work together? → Vocês gostam de trabalhar juntos?",
            "Do you like to work on the farm? → Vocês gostam de trabalhar na fazenda?",
            "Do you like to work alone? → Vocês gostam de trabalhar sozinhos?",
            "Do you like to work at the office? → Vocês gostam de trabalhar no escritório?",
            "I want to go with my teacher → Nós queremos ir com nosso professor",
            "They want to go with their teacher → Eles querem ir com seu professor",
            "We want to go with our teacher → Nós queremos ir com nosso professor"
          ],
          exercises: [
            {
              type: "choice",
              question: "What does 'house' mean?",
              options: ["casa", "fazenda", "escritório"],
              answer: "casa"
            },
            {
              type: "choice",
              question: "What does 'together' mean?",
              options: ["sozinho", "juntos", "hoje"],
              answer: "juntos"
            },
            {
              type: "text",
              question: "Translate to English: Nós queremos comer frutas.",
              answer: "we want to eat fruit"
            },
            {
              type: "matching",
              question: "Match the vocabulary:",
              pairs: [
                { left: "house", right: "casa" },
                { left: "farm", right: "fazenda" },
                { left: "office", right: "escritório" },
                { left: "teacher", right: "professor" }
              ]
            }
          ]
        }
      },
      {
        title: "Idiomatic Expressions",
        content: {
          topic: "Daily Conversation",
          explanation:
            "In this module, you will practice short useful expressions for everyday communication.",
          examples: [
            "I work at home with you → Eu trabalho em casa com você",
            "I work at home with my brother → Eu trabalho em casa com meu irmão",
            "I work at home with my friend → Eu trabalho em casa com meu amigo",
            "I want to go home with my mother → Eu quero ir para casa com minha mãe",
            "I want to go home alone → Eu quero ir para casa sozinho",
            "Good morning. Do you work at home? → Bom dia. Você trabalha em casa?",
            "Excuse me, I want to go → Com licença, eu quero ir",
            "Excuse me, I want to study → Com licença, eu quero estudar",
            "Let's play → Vamos brincar",
            "Let's study English → Vamos estudar inglês",
            "Let's play basketball → Vamos jogar basquete",
            "Let's work every day → Vamos trabalhar todos os dias",
            "Hi, nice to meet you. Do you work at the office? → Oi, prazer em conhecê-lo. Você trabalha no escritório?",
            "I study English every day → Eu estudo inglês todos os dias",
            "They study English every day → Eles estudam inglês todos os dias",
            "We study English every day → Nós estudamos inglês todos os dias",
            "You study English every day → Você estuda inglês todos os dias",
            "Let's go with your mother → Vamos com sua mãe",
            "Let's help your friend → Vamos ajudar seu amigo",
            "Let's sleep at home → Vamos dormir em casa",
            "Let's go home → Vamos para casa"
          ],
          exercises: [
            {
              type: "choice",
              question: "What does 'Excuse me' mean?",
              options: ["Com licença", "Obrigado", "De nada"],
              answer: "Com licença"
            },
            {
              type: "text",
              question: "Translate to English: Vamos brincar.",
              answer: "let's play"
            },
            {
              type: "text",
              question: "Translate to English: Bom dia.",
              answer: "good morning"
            },
            {
              type: "matching",
              question: "Match the expressions:",
              pairs: [
                { left: "Let's study English", right: "Vamos estudar inglês" },
                { left: "Let's go home", right: "Vamos para casa" },
                { left: "Excuse me", right: "Com licença" },
                { left: "Nice to meet you", right: "Prazer em conhecê-lo" }
              ]
            }
          ]
        }
      }
    ],
    test: [
      {
        type: "text",
        question: "Translate to English: Eu quero.",
        answer: "i want"
      },
      {
        type: "text",
        question: "Translate to English: Você compra?",
        answer: "do you buy"
      },
      {
        type: "choice",
        question: "What does 'I want to play' mean?",
        options: ["Eu quero jogar", "Eu gosto de jogar", "Eu quero comprar"],
        answer: "Eu quero jogar"
      },
      {
        type: "text",
        question: "Translate to English: Nós queremos comer frutas.",
        answer: "we want to eat fruit"
      },
      {
        type: "choice",
        question: "What does 'Let's go home' mean?",
        options: ["Vamos para casa", "Vamos brincar", "Vamos estudar"],
        answer: "Vamos para casa"
      },
      {
        type: "matching",
        question: "Match the sentences:",
        pairs: [
          { left: "I want to go", right: "Eu quero ir" },
          { left: "Do you work?", right: "Você trabalha?" },
          { left: "I work at home", right: "Eu trabalho em casa" },
          { left: "Let's study English", right: "Vamos estudar inglês" }
        ]
      }
    ]
  },
  {
  title: "Lesson 4",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Need, Have, Have To and Prefer",
        explanation:
          "In this lesson, you will learn how to use need, have, have to, prefer, negative sentences with don't, and simple questions with Do.",
        examples: [
          "We need → Nós precisamos",
          "You have → Você tem",
          "They need to understand → Eles precisam entender",
          "I have to write → Eu tenho que escrever",
          "I prefer to live alone → Eu prefiro morar sozinho",
          "I don't have to write → Eu não tenho que escrever",
          "You don't need to understand → Você não precisa entender",
          "They don't write → Eles não escrevem",
          "We don't live in Brazil → Nós não moramos no Brasil",
          "I don't have to understand → Eu não tenho que entender",
          "Do you understand? → Você entende?",
          "Do you want to live alone? → Você quer morar sozinho?",
          "Do they prefer to study? → Eles preferem estudar?",
          "Do we have to sleep? → Nós temos que dormir?",
          "Do I have to go? → Eu tenho que ir?",
          "I need to go with you → Eu preciso ir com você",
          "They don't have to go home → Eles não têm que ir para casa",
          "Do we need to understand? → Nós precisamos entender?",
          "I like to live at home → Eu gosto de morar em casa",
          "Do you prefer to eat? → Você prefere comer?"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'We need' mean?",
            options: ["Nós precisamos", "Nós temos", "Nós moramos"],
            answer: "Nós precisamos"
          },
          {
            type: "text",
            question: "Translate to English: Eu tenho que escrever.",
            answer: "i have to write"
          },
          {
            type: "text",
            question: "Translate to English: Você entende?",
            answer: "do you understand"
          },
          {
            type: "matching",
            question: "Match the sentences:",
            pairs: [
              { left: "I prefer to live alone", right: "Eu prefiro morar sozinho" },
              { left: "They don't write", right: "Eles não escrevem" },
              { left: "Do we have to sleep?", right: "Nós temos que dormir?" },
              { left: "I need to go with you", right: "Eu preciso ir com você" }
            ]
          }
        ]
      }
    },

    {
      title: "Vocabulary",
      content: {
        topic: "Time, Places, Objects and Daily Actions",
        explanation:
          "In this module, you will practice vocabulary related to time, places, objects, food and daily routines.",
        examples: [
          "I need to go tomorrow → Eu preciso ir amanhã",
          "I need to go today → Eu preciso ir hoje",
          "I need to go now → Eu preciso ir agora",
          "I need to go to the office → Eu preciso ir ao escritório",
          "I live with my children → Eu moro com meus filhos",
          "I live with my daughter → Eu moro com minha filha",
          "I live with my son → Eu moro com meu filho",
          "I live with my friend → Eu moro com meu amigo",
          "They have to write now → Eles têm que escrever agora",
          "They have to write every day → Eles têm que escrever todos os dias",
          "They have to write tomorrow → Eles têm que escrever amanhã",
          "They have to write today → Eles têm que escrever hoje",
          "We don't live together → Nós não moramos juntos",
          "We don't live alone → Nós não moramos sozinhos",
          "We don't live here → Nós não moramos aqui",
          "We don't live there → Nós não moramos lá",
          "You don't have a car → Você não tem um carro",
          "You don't have an office → Você não tem um escritório",
          "You don't have an apple → Você não tem uma maçã",
          "You don't have a house → Você não tem uma casa",
          "You don't have a child → Você não tem uma criança",
          "Do you like to go to the movies? → Você gosta de ir ao cinema?",
          "Do you like to go to the bank? → Você gosta de ir ao banco?",
          "Do you like to go to the market? → Você gosta de ir ao mercado?",
          "Do you like to go to the university? → Você gosta de ir à universidade?",
          "Do you like to go to the office? → Você gosta de ir ao escritório?",
          "I prefer apple and honey → Eu prefiro maçã e mel",
          "I prefer bread and cheese → Eu prefiro pão e queijo",
          "I like to drink tea with sugar → Eu gosto de tomar chá com açúcar",
          "I like to drink coffee with sweetener → Eu gosto de tomar café com adoçante"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'tomorrow' mean?",
            options: ["hoje", "agora", "amanhã"],
            answer: "amanhã"
          },
          {
            type: "choice",
            question: "What does 'office' mean?",
            options: ["escritório", "mercado", "cinema"],
            answer: "escritório"
          },
          {
            type: "text",
            question: "Translate to English: Eu preciso ir agora.",
            answer: "i need to go now"
          },
          {
            type: "matching",
            question: "Match the vocabulary:",
            pairs: [
              { left: "car", right: "carro" },
              { left: "house", right: "casa" },
              { left: "apple", right: "maçã" },
              { left: "bank", right: "banco" },
              { left: "market", right: "mercado" }
            ]
          }
        ]
      }
    },

    {
      title: "Idiomatic Expressions",
      content: {
        topic: "Meals, Apologies and Daily Conversation",
        explanation:
          "In this module, you will practice useful daily expressions with meals, apologies, work and study situations.",
        examples: [
          "I want ham and eggs for breakfast → Eu quero presunto e ovos no café da manhã",
          "I want ham and eggs for lunch → Eu quero presunto e ovos no almoço",
          "I want ham and eggs for dinner → Eu quero presunto e ovos no jantar",
          "Sorry, I have to go now → Desculpe, eu tenho que ir agora",
          "Sorry, I have to go home → Desculpe, eu tenho que ir para casa",
          "Sorry, I have to go to the university → Desculpe, eu tenho que ir à universidade",
          "Sorry, I have to go to work → Desculpe, eu tenho que ir ao trabalho",
          "Hello, do you work there? → Olá, você trabalha lá?",
          "Hello, do you work here? → Olá, você trabalha aqui?",
          "Hello, do you work tomorrow? → Olá, você trabalha amanhã?",
          "Hello, do you work today? → Olá, você trabalha hoje?",
          "Hi, how are you today? I'm fine, thanks. And you? → Oi, como vai você hoje? Estou bem, obrigado. E você?",
          "Sorry, they have to study now → Desculpe, eles têm que estudar agora",
          "Sorry, we have to study now → Desculpe, nós temos que estudar agora",
          "Sorry, you have to study now → Desculpe, você tem que estudar agora",
          "Sorry, I have to study now → Desculpe, eu tenho que estudar agora"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'Sorry' mean?",
            options: ["Desculpe", "Obrigado", "Olá"],
            answer: "Desculpe"
          },
          {
            type: "text",
            question: "Translate to English: Eu tenho que ir agora.",
            answer: "i have to go now"
          },
          {
            type: "text",
            question: "Translate to English: Olá, você trabalha aqui?",
            answer: "hello do you work here"
          },
          {
            type: "matching",
            question: "Match the expressions:",
            pairs: [
              { left: "breakfast", right: "café da manhã" },
              { left: "lunch", right: "almoço" },
              { left: "dinner", right: "jantar" },
              { left: "I'm fine, thanks", right: "Estou bem, obrigado" }
            ]
          }
        ]
      }
    }
  ],

  test: [
    {
      type: "text",
      question: "Translate to English: Nós precisamos.",
      answer: "we need"
    },
    {
      type: "text",
      question: "Translate to English: Eu tenho que escrever.",
      answer: "i have to write"
    },
    {
      type: "choice",
      question: "What does 'Do you understand?' mean?",
      options: ["Você entende?", "Você escreve?", "Você prefere?"],
      answer: "Você entende?"
    },
    {
      type: "text",
      question: "Translate to English: Eu preciso ir amanhã.",
      answer: "i need to go tomorrow"
    },
    {
      type: "choice",
      question: "What does 'I want ham and eggs for breakfast' mean?",
      options: [
        "Eu quero presunto e ovos no café da manhã",
        "Eu quero presunto e ovos no almoço",
        "Eu quero presunto e ovos no jantar"
      ],
      answer: "Eu quero presunto e ovos no café da manhã"
    },
    {
      type: "matching",
      question: "Match the sentences:",
      pairs: [
        { left: "You don't have a car", right: "Você não tem um carro" },
        { left: "We don't live here", right: "Nós não moramos aqui" },
        { left: "Sorry, I have to go home", right: "Desculpe, eu tenho que ir para casa" },
        { left: "Hello, do you work today?", right: "Olá, você trabalha hoje?" }
      ]
    }
  ]
},
{
  title: "Lesson 5",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Daily Actions, Questions and Negative Sentences",
        explanation:
          "In this lesson, you will practice actions with go, have, drink, play, study, need and want. You will also practice questions with Do you...? and negative sentences with don't.",
        examples: [
          "I go to the university every day → Eu vou à universidade todos os dias",
          "I go to the university tomorrow → Eu vou à universidade amanhã",
          "I go to the university today → Eu vou à universidade hoje",
          "I go to the university now → Eu vou à universidade agora",
          "We drink coffee every day → Nós tomamos café todos os dias",
          "We drink coffee at the office → Nós tomamos café no escritório",
          "We drink coffee at home → Nós tomamos café em casa",
          "We drink coffee at the bank → Nós tomamos café no banco",
          "Do you play with your children? → Você brinca com seus filhos?",
          "Do you play with your friends? → Você brinca com seus amigos?",
          "Do you play with your brothers? → Você brinca com seus irmãos?",
          "Do you play with your sisters? → Você brinca com suas irmãs?",
          "Do you have brothers and sisters? → Você tem irmãos e irmãs?",
          "Do you have sons and daughters? → Você tem filhos e filhas?",
          "Do you have friends? → Você tem amigos?",
          "I don't like to study Portuguese → Eu não gosto de estudar português",
          "I don't like to study every day → Eu não gosto de estudar todos os dias",
          "I don't like to study alone → Eu não gosto de estudar sozinho",
          "I don't like to study with the boy → Eu não gosto de estudar com o menino"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'I go to the university today' mean?",
            options: [
              "Eu vou à universidade hoje",
              "Eu vou ao banco hoje",
              "Eu estudo em casa hoje"
            ],
            answer: "Eu vou à universidade hoje"
          },
          {
            type: "text",
            question: "Translate to English: Nós tomamos café em casa.",
            answer: "we drink coffee at home"
          },
          {
            type: "text",
            question: "Translate to English: Você tem amigos?",
            answer: "do you have friends"
          },
          {
            type: "matching",
            question: "Match the sentences:",
            pairs: [
              { left: "I go today", right: "Eu vou hoje" },
              { left: "We drink coffee", right: "Nós tomamos café" },
              { left: "Do you play with your friends?", right: "Você brinca com seus amigos?" },
              { left: "I don't like to study alone", right: "Eu não gosto de estudar sozinho" }
            ]
          }
        ]
      }
    },

    {
      title: "Vocabulary",
      content: {
        topic: "Places, Objects, Food and People",
        explanation:
          "In this module, you will practice vocabulary about places, school objects, food, family and work.",
        examples: [
          "I like to have a pencil and an eraser to study → Eu gosto de ter um lápis e uma borracha para estudar",
          "I like to have a pen and paper to study → Eu gosto de ter uma caneta e papel para estudar",
          "Do you want a bottle of beer? → Você quer uma garrafa de cerveja?",
          "Do you want a bottle of wine? → Você quer uma garrafa de vinho?",
          "Do you want a bottle of water? → Você quer uma garrafa de água?",
          "Do you want a bottle of milk? → Você quer uma garrafa de leite?",
          "Do you need to study today? → Você precisa estudar hoje?",
          "Do you need to study tomorrow? → Você precisa estudar amanhã?",
          "Do you need to study now? → Você precisa estudar agora?",
          "Do you need to study English? → Você precisa estudar inglês?",
          "I need to buy a notebook → Eu preciso comprar um caderno",
          "I need to buy an eraser → Eu preciso comprar uma borracha",
          "I need to buy a flute → Eu preciso comprar uma flauta",
          "I need to buy a piano → Eu preciso comprar um piano",
          "We don't need a shirt → Nós não precisamos de uma camisa",
          "We don't need a car → Nós não precisamos de um carro",
          "We don't need a pencil → Nós não precisamos de um lápis",
          "We don't need paper → Nós não precisamos de papel",
          "We don't have cheese → Nós não temos queijo",
          "We don't have honey → Nós não temos mel",
          "We don't have fruit → Nós não temos frutas",
          "We don't have butter → Nós não temos manteiga",
          "We don't have children → Nós não temos filhos",
          "We don't have brothers → Nós não temos irmãos",
          "We don't have a teacher → Nós não temos um professor",
          "We don't have a boss → Nós não temos um chefe"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'notebook' mean?",
            options: ["caderno", "caneta", "papel"],
            answer: "caderno"
          },
          {
            type: "choice",
            question: "What does 'eraser' mean?",
            options: ["borracha", "lápis", "camisa"],
            answer: "borracha"
          },
          {
            type: "text",
            question: "Translate to English: Eu preciso comprar um caderno.",
            answer: "i need to buy a notebook"
          },
          {
            type: "matching",
            question: "Match the vocabulary:",
            pairs: [
              { left: "pencil", right: "lápis" },
              { left: "paper", right: "papel" },
              { left: "bottle of water", right: "garrafa de água" },
              { left: "boss", right: "chefe" },
              { left: "shirt", right: "camisa" }
            ]
          }
        ]
      }
    },

    {
      title: "Idiomatic Expressions",
      content: {
        topic: "Let's, Excuse Me and Short Conversations",
        explanation:
          "In this module, you will practice useful expressions with Let's..., Excuse me..., Hello... and simple invitations.",
        examples: [
          "Let's go to the movies → Vamos ao cinema",
          "Let's go to the bank → Vamos ao banco",
          "Let's go home → Vamos para casa",
          "Let's go to the store → Vamos ao mercado",
          "Excuse me, do you want to help my friend? → Com licença, você quer ajudar meu amigo?",
          "Excuse me, do you want to help your mother? → Com licença, você quer ajudar sua mãe?",
          "Excuse me, do you want to help your sister? → Com licença, você quer ajudar sua irmã?",
          "Excuse me, do you want to help my son? → Com licença, você quer ajudar meu filho?",
          "Hello, do you study there? → Olá, você estuda lá?",
          "Hello, do you study here? → Olá, você estuda aqui?",
          "Hello, do you study together? → Olá, vocês estudam juntos?",
          "Hello, do you study alone? → Olá, você estuda sozinho?",
          "They don't work together every day → Eles não trabalham juntos todos os dias",
          "They don't work together now → Eles não trabalham juntos agora",
          "They don't work together tomorrow → Eles não trabalham juntos amanhã",
          "They don't work together here → Eles não trabalham juntos aqui",
          "My mother and my father don't like to live alone → Minha mãe e meu pai não gostam de morar sozinhos",
          "My mother and my father don't like to live on the farm → Minha mãe e meu pai não gostam de morar na fazenda"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'Let's go home' mean?",
            options: ["Vamos para casa", "Vamos ao banco", "Vamos estudar"],
            answer: "Vamos para casa"
          },
          {
            type: "text",
            question: "Translate to English: Com licença, você quer ajudar minha mãe?",
            answer: "excuse me do you want to help my mother"
          },
          {
            type: "text",
            question: "Translate to English: Olá, você estuda aqui?",
            answer: "hello do you study here"
          },
          {
            type: "matching",
            question: "Match the expressions:",
            pairs: [
              { left: "Let's go to the movies", right: "Vamos ao cinema" },
              { left: "Let's go to the bank", right: "Vamos ao banco" },
              { left: "Excuse me", right: "Com licença" },
              { left: "Study alone", right: "Estudar sozinho" }
            ]
          }
        ]
      }
    },

    {
      title: "Conversation",
      content: {
        topic: "My Farm",
        explanation:
          "Read and listen to the conversation. Then answer questions about the text.",
        examples: [
          "I live in a house on a farm with my mother and father → Eu moro em uma casa em uma fazenda com minha mãe e meu pai",
          "I have a brother and a sister → Eu tenho um irmão e uma irmã",
          "We have a big breakfast every day → Nós temos um grande café da manhã todos os dias",
          "We like to eat ham and eggs, bread and butter, cheese and fruit → Nós gostamos de comer presunto e ovos, pão e manteiga, queijo e frutas",
          "My father and mother drink coffee with sugar or sweetener → Meu pai e minha mãe tomam café com açúcar ou adoçante",
          "My brother and sister drink milk, but prefer juice → Meu irmão e minha irmã tomam leite, mas preferem suco",
          "My mother and my sister go to the market to buy food for lunch and dinner → Minha mãe e minha irmã vão ao mercado comprar comida para o almoço e jantar",
          "My father and my brother go to work → Meu pai e meu irmão vão trabalhar",
          "I study at home every day → Eu estudo em casa todos os dias",
          "I write with a pencil in my notebook → Eu escrevo com um lápis no meu caderno",
          "I need to buy an eraser and a pen → Eu preciso comprar uma borracha e uma caneta",
          "I need to go help my mother now → Eu preciso ir ajudar minha mãe agora"
        ],
        exercises: [
          {
            type: "choice",
            question: "Where does the person live?",
            options: ["On a farm", "At the bank", "At the university"],
            answer: "On a farm"
          },
          {
            type: "choice",
            question: "What does the family like to eat for breakfast?",
            options: [
              "Ham and eggs, bread and butter, cheese and fruit",
              "Only apples and honey",
              "Rice and beans"
            ],
            answer: "Ham and eggs, bread and butter, cheese and fruit"
          },
          {
            type: "text",
            question: "Answer in English: What does the person write with?",
            answer: "a pencil"
          },
          {
            type: "matching",
            question: "Match the question words:",
            pairs: [
              { left: "What", right: "O que" },
              { left: "Who", right: "Quem" },
              { left: "Why", right: "Por que" },
              { left: "Where", right: "Onde" },
              { left: "When", right: "Quando" },
              { left: "How", right: "Como" }
            ]
          }
        ]
      }
    }
  ],

  test: [
    {
      type: "text",
      question: "Translate to English: Eu vou à universidade hoje.",
      answer: "i go to the university today"
    },
    {
      type: "text",
      question: "Translate to English: Você tem amigos?",
      answer: "do you have friends"
    },
    {
      type: "choice",
      question: "What does 'I need to buy a notebook' mean?",
      options: [
        "Eu preciso comprar um caderno",
        "Eu preciso comprar uma borracha",
        "Eu gosto de ter uma caneta"
      ],
      answer: "Eu preciso comprar um caderno"
    },
    {
      type: "choice",
      question: "What does 'Let's go to the movies' mean?",
      options: ["Vamos ao cinema", "Vamos ao banco", "Vamos para casa"],
      answer: "Vamos ao cinema"
    },
    {
      type: "text",
      question: "Translate to English: Nós não temos queijo.",
      answer: "we don't have cheese"
    },
    {
      type: "choice",
      question: "According to the conversation, where does the person study?",
      options: ["At home", "At the office", "At the bank"],
      answer: "At home"
    },
    {
      type: "matching",
      question: "Match the vocabulary:",
      pairs: [
        { left: "notebook", right: "caderno" },
        { left: "eraser", right: "borracha" },
        { left: "bottle of water", right: "garrafa de água" },
        { left: "Where", right: "Onde" }
      ]
    }
  ]
},
{
  title: "Lesson 6",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Speak, Read, Know, Sell and Close",
        explanation:
          "In this lesson, you will practice verbs such as speak, read, know, sell, close and talk. You will also practice questions, negative sentences and polite expressions.",
        examples: [
          "I speak English every day → Eu falo inglês todos os dias",
          "Do you speak Portuguese with your sister? → Você fala português com sua irmã?",
          "They don't like to read alone → Eles não gostam de ler sozinhos",
          "Do you know my friend? → Você conhece meu amigo?",
          "Do you want to sell your house? → Você quer vender sua casa?",
          "Please, close the book → Por favor, feche o livro",
          "I don't speak English → Eu não falo inglês",
          "I don't like to study Portuguese → Eu não gosto de estudar português",
          "You don't have to sell your car → Você não tem que vender seu carro",
          "I don't talk to my sister at the university → Eu não falo com minha irmã na universidade",
          "They don't like to read → Eles não gostam de ler",
          "Sorry, but I don't have paper → Desculpe, mas eu não tenho papel",
          "Excuse me, do you have a pencil, please? → Com licença, você tem um lápis, por favor?",
          "Do you want to talk to your teacher now? → Você quer falar com sua professora agora?",
          "I don't know your father, but I know your mother → Eu não conheço seu pai, mas conheço sua mãe",
          "Hello, I want to talk to the teacher, please → Olá, eu quero falar com o professor, por favor",
          "My friends sell fruit → Meus amigos vendem frutas",
          "Let's close the notebook now → Vamos fechar o caderno agora",
          "The boy and the girl have to read the lesson → O menino e a menina têm que ler a lição",
          "Do you want to talk to my boss? → Você quer falar com o meu chefe?",
          "Do you know my mother? → Você conhece a minha mãe?",
          "They don't like to speak English at home → Eles não gostam de falar inglês em casa",
          "They don't want to talk to you → Eles não querem falar com você",
          "We don't have to close the notebook on Lesson 3 → Nós não temos que fechar o caderno na Lição 3",
          "Do you know how to play basketball? → Você sabe jogar basquete?",
          "We don't know how to read in English → Nós não sabemos ler em inglês"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'I speak English every day' mean?",
            options: [
              "Eu falo inglês todos os dias",
              "Eu estudo inglês amanhã",
              "Eu leio inglês em casa"
            ],
            answer: "Eu falo inglês todos os dias"
          },
          {
            type: "text",
            question: "Translate to English: Você conhece meu amigo?",
            answer: "do you know my friend"
          },
          {
            type: "text",
            question: "Translate to English: Por favor, feche o livro.",
            answer: "please close the book"
          },
          {
            type: "matching",
            question: "Match the sentences:",
            pairs: [
              { left: "They don't like to read alone", right: "Eles não gostam de ler sozinhos" },
              { left: "My friends sell fruit", right: "Meus amigos vendem frutas" },
              { left: "Let's close the notebook now", right: "Vamos fechar o caderno agora" },
              { left: "Do you know how to play basketball?", right: "Você sabe jogar basquete?" }
            ]
          }
        ]
      }
    },

    {
      title: "Vocabulary",
      content: {
        topic: "Questions, Places, Reading and Food",
        explanation:
          "In this module, you will practice questions with What and Why, places, reading materials and food vocabulary.",
        examples: [
          "What do you want to study today? → O que você quer estudar hoje?",
          "What do you want to study tomorrow? → O que você quer estudar amanhã?",
          "What do you want to study now? → O que você quer estudar agora?",
          "What do you want to study there? → O que você quer estudar lá?",
          "I want to go to school with my mother → Eu quero ir à escola com minha mãe",
          "I want to go to the office with my mother → Eu quero ir ao escritório com minha mãe",
          "I want to go to the store with my mother → Eu quero ir à loja com minha mãe",
          "I want to go to church with my mother → Eu quero ir à igreja com minha mãe",
          "Why do you want to speak English? → Por que você quer falar inglês?",
          "Why do you want to speak Portuguese? → Por que você quer falar português?",
          "Why do you want to speak with the teacher? → Por que você quer falar com o professor?",
          "I already have an English teacher → Eu já tenho um professor de inglês",
          "I already have a car → Eu já tenho um carro",
          "I already have an apartment → Eu já tenho um apartamento",
          "I already have a neighbor → Eu já tenho um vizinho",
          "Hi, what do you want to eat now? → Oi, o que você quer comer agora?",
          "Hi, what do you want to eat today? → Oi, o que você quer comer hoje?",
          "Hi, what do you want to eat tomorrow? → Oi, o que você quer comer amanhã?",
          "I like to read books at home → Eu gosto de ler livros em casa",
          "I like to read magazines at home → Eu gosto de ler revistas em casa",
          "I like to read the newspaper at home → Eu gosto de ler o jornal em casa",
          "Do you want to go to church with your friend? → Você quer ir à igreja com seu amigo?",
          "Do you want to go to work with your friend? → Você quer ir ao trabalho com seu amigo?",
          "Do you want to go to school with your friend? → Você quer ir à escola com seu amigo?",
          "Do you want to go to the apartment with your friend? → Você quer ir ao apartamento com seu amigo?",
          "They speak English at home → Eles falam inglês em casa",
          "They speak English at school → Eles falam inglês na escola",
          "They speak English at church → Eles falam inglês na igreja",
          "They speak English at the office → Eles falam inglês no escritório",
          "They speak English with the child → Eles falam inglês com a criança",
          "They have to close the store → Eles têm que fechar a loja",
          "They have to close the window → Eles têm que fechar a janela",
          "They have to close the house → Eles têm que fechar a casa",
          "They have to close the door → Eles têm que fechar a porta",
          "Do you prefer to eat meat or fish? → Você prefere comer carne ou peixe?",
          "Do you prefer to eat fish or chicken? → Você prefere comer peixe ou frango?",
          "Do you prefer to eat bread or fruit? → Você prefere comer pão ou frutas?",
          "Why do you like to live here? → Por que você gosta de morar aqui?",
          "Why do you like to live there? → Por que você gosta de morar lá?",
          "Why do you like to live downtown? → Por que você gosta de morar no centro?"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'already' mean?",
            options: ["já", "agora", "amanhã"],
            answer: "já"
          },
          {
            type: "choice",
            question: "What does 'newspaper' mean?",
            options: ["jornal", "revista", "livro"],
            answer: "jornal"
          },
          {
            type: "text",
            question: "Translate to English: Por que você quer falar inglês?",
            answer: "why do you want to speak english"
          },
          {
            type: "matching",
            question: "Match the vocabulary:",
            pairs: [
              { left: "church", right: "igreja" },
              { left: "apartment", right: "apartamento" },
              { left: "neighbor", right: "vizinho" },
              { left: "window", right: "janela" },
              { left: "downtown", right: "centro" }
            ]
          }
        ]
      }
    },

    {
      title: "Idiomatic Expressions",
      content: {
        topic: "A Lot, Good Evening, Know About and More",
        explanation:
          "In this module, you will practice expressions with a lot, good evening, good afternoon, good night, know about and more about.",
        examples: [
          "We have a lot of books to read → Nós temos muitos livros para ler",
          "We have a lot of books to sell → Nós temos muitos livros para vender",
          "We have a lot of books to study → Nós temos muitos livros para estudar",
          "We work a lot → Nós trabalhamos muito",
          "We study a lot → Nós estudamos muito",
          "We sell a lot → Nós vendemos muito",
          "We sleep a lot → Nós dormimos muito",
          "Good evening, how are you? → Boa noite, como vai você?",
          "Good afternoon, how are you? → Boa tarde, como vai você?",
          "Good night, I have to sleep now → Boa noite, eu tenho que dormir agora",
          "Good night, I have to study now → Boa noite, eu tenho que estudar agora",
          "Good night, I have to go now → Boa noite, eu tenho que ir agora",
          "What do you know about cars? → O que você sabe sobre carros?",
          "What do you know about houses? → O que você sabe sobre casas?",
          "What do you know about my friend? → O que você sabe sobre meu amigo?",
          "What do you know about the university? → O que você sabe sobre a universidade?",
          "Do you want to know more about my city? → Você quer saber mais sobre minha cidade?",
          "Do you want to know more about the book? → Você quer saber mais sobre o livro?",
          "Do you want to know more about the bank? → Você quer saber mais sobre o banco?",
          "I have about five books → Eu tenho aproximadamente cinco livros"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'a lot' mean?",
            options: ["muito", "pouco", "agora"],
            answer: "muito"
          },
          {
            type: "choice",
            question: "What does 'Good afternoon' mean?",
            options: ["Boa tarde", "Boa noite", "Bom dia"],
            answer: "Boa tarde"
          },
          {
            type: "text",
            question: "Translate to English: Nós estudamos muito.",
            answer: "we study a lot"
          },
          {
            type: "matching",
            question: "Match the expressions:",
            pairs: [
              { left: "Good evening", right: "Boa noite" },
              { left: "Good afternoon", right: "Boa tarde" },
              { left: "more about", right: "mais sobre" },
              { left: "about five books", right: "aproximadamente cinco livros" }
            ]
          }
        ]
      }
    }
  ],

  test: [
    {
      type: "text",
      question: "Translate to English: Eu falo inglês todos os dias.",
      answer: "i speak english every day"
    },
    {
      type: "text",
      question: "Translate to English: Você conhece meu amigo?",
      answer: "do you know my friend"
    },
    {
      type: "choice",
      question: "What does 'Please, close the book' mean?",
      options: [
        "Por favor, feche o livro",
        "Por favor, leia o livro",
        "Por favor, venda o livro"
      ],
      answer: "Por favor, feche o livro"
    },
    {
      type: "text",
      question: "Translate to English: Por que você quer falar inglês?",
      answer: "why do you want to speak english"
    },
    {
      type: "choice",
      question: "What does 'We work a lot' mean?",
      options: ["Nós trabalhamos muito", "Nós estudamos muito", "Nós vendemos muito"],
      answer: "Nós trabalhamos muito"
    },
    {
      type: "text",
      question: "Translate to English: Boa tarde, como vai você?",
      answer: "good afternoon how are you"
    },
    {
      type: "matching",
      question: "Match the sentences:",
      pairs: [
        { left: "I don't speak English", right: "Eu não falo inglês" },
        { left: "They have to close the door", right: "Eles têm que fechar a porta" },
        { left: "I already have a car", right: "Eu já tenho um carro" },
        { left: "I have about five books", right: "Eu tenho aproximadamente cinco livros" }
      ]
    }
  ]
},
{
  title: "Lesson 7",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Questions with What, Why, Or and Know How To",
        explanation:
          "In this lesson, you will practice questions with What and Why, choices with or, and sentences using know how to, because and need.",
        examples: [
          "Do you have a son or a daughter? → Você tem um filho ou uma filha?",
          "Do you have a boy or a girl? → Você tem um menino ou uma menina?",
          "Do you have an apartment or a house? → Você tem um apartamento ou uma casa?",
          "What do you like to study? → O que você gosta de estudar?",
          "What do you like to play? → O que você gosta de jogar?",
          "What do you like to eat? → O que você gosta de comer?",
          "What do you like to read? → O que você gosta de ler?",
          "Why do you have to go downtown? → Por que você tem que ir ao centro?",
          "Why do you have to go home? → Por que você tem que ir para casa?",
          "Why do you have to go to the university? → Por que você tem que ir à universidade?",
          "Why do you have to go to work? → Por que você tem que ir ao trabalho?",
          "Do you already know how to speak English? → Você já sabe falar inglês?",
          "Do you already know how to write in English? → Você já sabe escrever em inglês?",
          "Do you already know how to read in English? → Você já sabe ler em inglês?",
          "We want to sell the car because we need money to buy a house → Nós queremos vender o carro porque precisamos de dinheiro para comprar uma casa",
          "We want to sell the car because we need money to buy an apartment → Nós queremos vender o carro porque precisamos de dinheiro para comprar um apartamento"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'or' mean?",
            options: ["e", "ou", "mas"],
            answer: "ou"
          },
          {
            type: "text",
            question: "Translate to English: O que você gosta de estudar?",
            answer: "what do you like to study"
          },
          {
            type: "text",
            question: "Translate to English: Por que você tem que ir ao centro?",
            answer: "why do you have to go downtown"
          },
          {
            type: "matching",
            question: "Match the questions:",
            pairs: [
              { left: "What do you like to eat?", right: "O que você gosta de comer?" },
              { left: "Do you have a son or a daughter?", right: "Você tem um filho ou uma filha?" },
              { left: "Do you already know how to speak English?", right: "Você já sabe falar inglês?" },
              { left: "Why do you have to go home?", right: "Por que você tem que ir para casa?" }
            ]
          }
        ]
      }
    },

    {
      title: "Vocabulary",
      content: {
        topic: "Downtown, Drinks, School and Daily Situations",
        explanation:
          "In this module, you will practice vocabulary about places, drinks, school, family and daily actions.",
        examples: [
          "I like to go downtown with my mother → Eu gosto de ir ao centro com minha mãe",
          "I like to go downtown with my father → Eu gosto de ir ao centro com meu pai",
          "I like to go downtown with my friend → Eu gosto de ir ao centro com meu amigo",
          "I like to go downtown alone → Eu gosto de ir ao centro sozinho",
          "I don't understand Portuguese → Eu não entendo português",
          "I don't understand the teacher → Eu não entendo o professor",
          "I don't understand my neighbor → Eu não entendo meu vizinho",
          "I don't understand my son → Eu não entendo meu filho",
          "Do you read in English every day? → Você lê em inglês todos os dias?",
          "Do you read to your mother every day? → Você lê para sua mãe todos os dias?",
          "Do you read to your friend every day? → Você lê para seu amigo todos os dias?",
          "The boy and the girl need a glass of water → O menino e a menina precisam de um copo de água",
          "The boy and the girl need a glass of juice → O menino e a menina precisam de um copo de suco",
          "The boy and the girl need a glass of lemonade → O menino e a menina precisam de um copo de limonada",
          "The boy and the girl need a glass of milk → O menino e a menina precisam de um copo de leite",
          "Do you want to drink a glass of water now? → Você quer beber um copo de água agora?",
          "Do you want to drink a cup of coffee now? → Você quer beber uma xícara de café agora?",
          "Do you want to drink a cup of tea now? → Você quer beber uma xícara de chá agora?",
          "Do you need to go to school today? → Você precisa ir à escola hoje?",
          "Do you need to go to school tomorrow? → Você precisa ir à escola amanhã?",
          "Do you need to go to school every day? → Você precisa ir à escola todos os dias?",
          "Do you need to go to school now? → Você precisa ir à escola agora?"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'downtown' mean?",
            options: ["centro", "escola", "fazenda"],
            answer: "centro"
          },
          {
            type: "choice",
            question: "What does 'a glass of water' mean?",
            options: ["um copo de água", "uma xícara de café", "uma garrafa de água"],
            answer: "um copo de água"
          },
          {
            type: "text",
            question: "Translate to English: Eu não entendo português.",
            answer: "i don't understand portuguese"
          },
          {
            type: "matching",
            question: "Match the vocabulary:",
            pairs: [
              { left: "downtown", right: "centro" },
              { left: "neighbor", right: "vizinho" },
              { left: "a cup of tea", right: "uma xícara de chá" },
              { left: "a glass of milk", right: "um copo de leite" },
              { left: "school", right: "escola" }
            ]
          }
        ]
      }
    },

    {
      title: "Idiomatic Expressions",
      content: {
        topic: "Know How To, Because, Class and Helping",
        explanation:
          "In this module, you will practice expressions with know how to, because, class, help and prefer.",
        examples: [
          "I don't know how to close the window → Eu não sei fechar a janela",
          "I don't know how to close the door → Eu não sei fechar a porta",
          "I don't know how to go downtown alone → Eu não sei ir ao centro sozinho",
          "I don't know how to go to church alone → Eu não sei ir à igreja sozinho",
          "I don't know how to go to the office alone → Eu não sei ir ao escritório sozinho",
          "I don't know how to go to the bank alone → Eu não sei ir ao banco sozinho",
          "They like to eat a lot for breakfast → Eles gostam de comer bastante no café da manhã",
          "They like to eat a lot for lunch → Eles gostam de comer bastante no almoço",
          "They like to eat a lot for dinner → Eles gostam de comer bastante no jantar",
          "We like to help you every day → Nós gostamos de ajudar você todos os dias",
          "We like to help you at home → Nós gostamos de ajudar você em casa",
          "We like to help you at work → Nós gostamos de ajudar você no trabalho",
          "We like to help you at school → Nós gostamos de ajudar você na escola",
          "Do you prefer to have an English class or go to the movies? → Você prefere ter uma aula de inglês ou ir ao cinema?",
          "Do you prefer to have an English class or go to the store? → Você prefere ter uma aula de inglês ou ir à loja?",
          "I like to talk to my friend → Eu gosto de falar com meu amigo",
          "I like to talk to my sister → Eu gosto de falar com minha irmã",
          "I like to talk to my daughter → Eu gosto de falar com minha filha",
          "I like to talk to my son → Eu gosto de falar com meu filho"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'I don't know how to close the door' mean?",
            options: [
              "Eu não sei fechar a porta",
              "Eu não sei abrir a porta",
              "Eu não preciso fechar a porta"
            ],
            answer: "Eu não sei fechar a porta"
          },
          {
            type: "text",
            question: "Translate to English: Eu gosto de falar com meu amigo.",
            answer: "i like to talk to my friend"
          },
          {
            type: "text",
            question: "Translate to English: Nós gostamos de ajudar você em casa.",
            answer: "we like to help you at home"
          },
          {
            type: "matching",
            question: "Match the expressions:",
            pairs: [
              { left: "English class", right: "aula de inglês" },
              { left: "breakfast", right: "café da manhã" },
              { left: "lunch", right: "almoço" },
              { left: "dinner", right: "jantar" }
            ]
          }
        ]
      }
    },

    {
      title: "Conversation",
      content: {
        topic: "Today",
        explanation:
          "Read and listen to the conversation. Then answer questions about the text.",
        examples: [
          "Today I have to go to church because my brother and my mother study there → Hoje eu tenho que ir à igreja porque meu irmão e minha mãe estudam lá",
          "I have the car because I have to go to the store to buy fruit, sugar and bread → Eu estou com o carro porque tenho que ir à loja comprar frutas, açúcar e pão",
          "They need the car to go home → Eles precisam do carro para ir para casa",
          "Then, my brother and I need to study English with the neighbor → Depois, meu irmão e eu precisamos estudar inglês com o vizinho",
          "The neighbor is an English teacher → O vizinho é professor de inglês",
          "I don't like to study English with my teacher at school → Eu não gosto de estudar inglês com meu professor na escola",
          "Do you study English at school? → Você estuda inglês na escola?",
          "Do you like to study English? → Você gosta de estudar inglês?"
        ],
        exercises: [
          {
            type: "choice",
            question: "Where does the person have to go today?",
            options: ["To church", "To the bank", "To the movies"],
            answer: "To church"
          },
          {
            type: "choice",
            question: "Why does the person have the car?",
            options: [
              "Because they have to buy fruit, sugar and bread",
              "Because they want to go to the movies",
              "Because they study at the bank"
            ],
            answer: "Because they have to buy fruit, sugar and bread"
          },
          {
            type: "text",
            question: "Answer in English: Who studies at church?",
            answer: "my brother and my mother"
          },
          {
            type: "matching",
            question: "Match the question words:",
            pairs: [
              { left: "What", right: "O que" },
              { left: "Why", right: "Por que" },
              { left: "Where", right: "Onde" },
              { left: "How", right: "Como" }
            ]
          }
        ]
      }
    }
  ],

  test: [
    {
      type: "text",
      question: "Translate to English: Eu gosto de ir ao centro sozinho.",
      answer: "i like to go downtown alone"
    },
    {
      type: "text",
      question: "Translate to English: Você já sabe falar inglês?",
      answer: "do you already know how to speak english"
    },
    {
      type: "choice",
      question: "What does 'because' mean?",
      options: ["porque", "quando", "onde"],
      answer: "porque"
    },
    {
      type: "text",
      question: "Translate to English: Eu não sei fechar a janela.",
      answer: "i don't know how to close the window"
    },
    {
      type: "choice",
      question: "According to the conversation, where does the person have to go?",
      options: ["To church", "To the office", "To the university"],
      answer: "To church"
    },
    {
      type: "choice",
      question: "What does 'Do you prefer to have an English class or go to the movies?' mean?",
      options: [
        "Você prefere ter uma aula de inglês ou ir ao cinema?",
        "Você prefere estudar inglês ou dormir?",
        "Você quer falar inglês no cinema?"
      ],
      answer: "Você prefere ter uma aula de inglês ou ir ao cinema?"
    },
    {
      type: "matching",
      question: "Match the sentences:",
      pairs: [
        { left: "I don't understand Portuguese", right: "Eu não entendo português" },
        { left: "A glass of water", right: "Um copo de água" },
        { left: "Why do you have to go home?", right: "Por que você tem que ir para casa?" },
        { left: "We like to help you at school", right: "Nós gostamos de ajudar você na escola" }
      ]
    }
  ]
},
{
  title: "Lesson 8",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Learn, Wash, Come, Cook, Stay and Take",
        explanation:
          "In this lesson, you will practice verbs such as learn, wash, come, cook, stay and take. You will also practice polite requests with please, questions with Do, and negative sentences.",
        examples: [
          "I learn English there → Eu aprendo inglês lá",
          "Do you wash your car? → Você lava seu carro?",
          "They come here every day → Eles vêm aqui todos os dias",
          "I like to cook with Mother → Eu gosto de cozinhar com a Mãe",
          "I want to stay with you → Eu quero ficar com você",
          "Please, take my mother to church → Por favor, leve minha mãe à igreja",
          "Do you want to wash the car? → Você quer lavar o carro?",
          "Do we have to learn Portuguese? → Nós temos que aprender português?",
          "I don't like to take my sister to school → Eu não gosto de levar minha irmã à escola",
          "Do you know how to cook? → Você sabe cozinhar?",
          "They don't want to stay home → Eles não querem ficar em casa",
          "They come home with my father → Eles vêm para casa com meu pai",
          "My brother and I wash the windows → Meu irmão e eu lavamos as janelas",
          "Do we have to stay at school today? → Nós temos que ficar na escola hoje?",
          "We cook meat every day for lunch → Nós cozinhamos carne todos os dias no almoço",
          "I like to learn English with my teacher → Eu gosto de aprender inglês com meu professor",
          "I come from Alabama → Eu venho do Alabama",
          "You have to take the children now → Você tem que levar as crianças agora",
          "I don't understand what you write → Eu não entendo o que você escreve",
          "They prefer to wash the car tomorrow → Eles preferem lavar o carro amanhã",
          "We don't like to stay at school → Nós não gostamos de ficar na escola",
          "I don't like to cook every day → Eu não gosto de cozinhar todos os dias",
          "They take my brother and Bob to school → Eles levam meu irmão e Bob à escola",
          "Please, take the papers to the office → Por favor, leve os papéis ao escritório",
          "I have to wash the windows today → Eu tenho que lavar as janelas hoje",
          "Do we have to learn Lesson One now? → Nós temos que aprender a Lição 1 agora?",
          "Why do they cook chicken every day? → Por que eles cozinham galinha todos os dias?",
          "They come here in a car with the teacher → Eles vêm aqui em um carro com o professor"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'I learn English there' mean?",
            options: [
              "Eu aprendo inglês lá",
              "Eu ensino inglês aqui",
              "Eu estudo inglês amanhã"
            ],
            answer: "Eu aprendo inglês lá"
          },
          {
            type: "text",
            question: "Translate to English: Você lava seu carro?",
            answer: "do you wash your car"
          },
          {
            type: "text",
            question: "Translate to English: Eu quero ficar com você.",
            answer: "i want to stay with you"
          },
          {
            type: "matching",
            question: "Match the verbs:",
            pairs: [
              { left: "learn", right: "aprender" },
              { left: "wash", right: "lavar" },
              { left: "come", right: "vir" },
              { left: "cook", right: "cozinhar" },
              { left: "stay", right: "ficar" },
              { left: "take", right: "levar" }
            ]
          }
        ]
      }
    },

    {
      title: "Vocabulary",
      content: {
        topic: "Food, Objects, Colors and Time",
        explanation:
          "In this module, you will practice vocabulary about food, objects, colors, time expressions and this/that.",
        examples: [
          "Please, cook rice for lunch → Por favor, cozinhe arroz para o almoço",
          "Please, cook rice for dinner → Por favor, cozinhe arroz para o jantar",
          "Please, cook rice tomorrow → Por favor, cozinhe arroz amanhã",
          "I don't like this book, but I like that magazine → Eu não gosto deste livro, mas eu gosto daquela revista",
          "I don't like this motorcycle, but I like that car → Eu não gosto desta moto, mas eu gosto daquele carro",
          "I don't like this apartment, but I like that house → Eu não gosto deste apartamento, mas eu gosto daquela casa",
          "Do you want to learn English with me? → Você quer aprender inglês comigo?",
          "Do you want to learn English with my teacher? → Você quer aprender inglês com meu professor?",
          "Do you want to learn English with my sister? → Você quer aprender inglês com minha irmã?",
          "The girl and the boy need to buy a good book → A menina e o menino precisam comprar um bom livro",
          "My sister and I need to buy a good book → Minha irmã e eu precisamos comprar um bom livro",
          "The teacher and I need to buy a good book → O professor e eu precisamos comprar um bom livro",
          "My father and my mother have an old car → Meu pai e minha mãe têm um carro velho",
          "My father and my mother have an old house → Meu pai e minha mãe têm uma casa velha",
          "My father and my mother have an old book → Meu pai e minha mãe têm um livro velho",
          "We come here to buy paper → Nós vimos aqui comprar papel",
          "We come here to buy pencils → Nós vimos aqui comprar lápis",
          "We come here to buy pens → Nós vimos aqui comprar canetas",
          "We come here to buy notebooks → Nós vimos aqui comprar cadernos",
          "They have to come here tomorrow → Eles têm que vir aqui amanhã",
          "They have to come here today → Eles têm que vir aqui hoje",
          "They have to come here now → Eles têm que vir aqui agora",
          "They have to come here this week → Eles têm que vir aqui esta semana",
          "I want to buy a beautiful car → Eu quero comprar um carro lindo",
          "I want to buy a white car → Eu quero comprar um carro branco",
          "I want to buy a blue car → Eu quero comprar um carro azul",
          "I want to buy a red car → Eu quero comprar um carro vermelho",
          "Good morning. I have to talk to you today → Bom dia. Eu tenho que falar com você hoje",
          "Good morning. I have to talk to you next week → Bom dia. Eu tenho que falar com você na semana que vem",
          "Good morning. I have to talk to you this week → Bom dia. Eu tenho que falar com você esta semana",
          "We know how to cook good food. And you? → Nós sabemos cozinhar uma boa comida. E você?",
          "Do you have a lot of money with you? → Você tem muito dinheiro consigo?",
          "Do you have a lot of pens with you? → Você tem muitas canetas consigo?",
          "Do you have a lot of paper with you? → Você tem muito papel consigo?",
          "Do you have a lot of clothes with you? → Você tem muitas roupas consigo?"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'rice' mean?",
            options: ["arroz", "feijão", "frango"],
            answer: "arroz"
          },
          {
            type: "choice",
            question: "What does 'this book' mean?",
            options: ["este livro", "aquele livro", "meu livro"],
            answer: "este livro"
          },
          {
            type: "text",
            question: "Translate to English: Eu quero comprar um carro azul.",
            answer: "i want to buy a blue car"
          },
          {
            type: "matching",
            question: "Match the vocabulary:",
            pairs: [
              { left: "rice", right: "arroz" },
              { left: "this", right: "este/esta" },
              { left: "that", right: "aquele/aquela" },
              { left: "old", right: "velho" },
              { left: "beautiful", right: "lindo" },
              { left: "red", right: "vermelho" }
            ]
          }
        ]
      }
    },

    {
      title: "Idiomatic Expressions",
      content: {
        topic: "How Much, Time of Day and Daily Routines",
        explanation:
          "In this module, you will practice useful expressions with how much, money, morning, afternoon, evening, night and daily routines.",
        examples: [
          "How much money do you have? → Quanto dinheiro você tem?",
          "How much money do you need? → Quanto dinheiro você precisa?",
          "How much money do you want? → Quanto dinheiro você quer?",
          "How much money do you prefer? → Quanto dinheiro você prefere?",
          "Do you work in the morning? → Você trabalha de manhã?",
          "Do you work in the afternoon? → Você trabalha de tarde?",
          "Do you work in the evening? → Você trabalha à noitinha?",
          "Do you work at night? → Você trabalha à noite?",
          "I don't like to wash the dishes at night → Eu não gosto de lavar a louça à noite",
          "I don't like to wash the dishes in the morning → Eu não gosto de lavar a louça de manhã",
          "I don't like to wash the dishes in the afternoon → Eu não gosto de lavar a louça de tarde",
          "I don't like to wash the dishes in the evening → Eu não gosto de lavar a louça à noitinha",
          "How much money do you need tonight? → Quanto dinheiro você precisa hoje à noite?",
          "How much money do you need tomorrow? → Quanto dinheiro você precisa amanhã?",
          "How much money do you need next week? → Quanto dinheiro você precisa na semana que vem?",
          "How much money do you need for lunch? → Quanto dinheiro você precisa para o almoço?",
          "How much rice and beans do you prefer? → Quanto arroz e feijão você prefere?",
          "How much rice and beans do you eat? → Quanto arroz e feijão você come?",
          "How much rice and beans do you want? → Quanto arroz e feijão você quer?",
          "How much rice and beans do you buy? → Quanto arroz e feijão você compra?"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'How much money do you need?' mean?",
            options: [
              "Quanto dinheiro você precisa?",
              "Quanto arroz você come?",
              "Você trabalha à noite?"
            ],
            answer: "Quanto dinheiro você precisa?"
          },
          {
            type: "text",
            question: "Translate to English: Você trabalha de manhã?",
            answer: "do you work in the morning"
          },
          {
            type: "text",
            question: "Translate to English: Eu não gosto de lavar a louça à noite.",
            answer: "i don't like to wash the dishes at night"
          },
          {
            type: "matching",
            question: "Match the expressions:",
            pairs: [
              { left: "in the morning", right: "de manhã" },
              { left: "in the afternoon", right: "de tarde" },
              { left: "in the evening", right: "à noitinha" },
              { left: "at night", right: "à noite" },
              { left: "next week", right: "semana que vem" }
            ]
          }
        ]
      }
    }
  ],

  test: [
    {
      type: "text",
      question: "Translate to English: Eu aprendo inglês lá.",
      answer: "i learn english there"
    },
    {
      type: "text",
      question: "Translate to English: Você lava seu carro?",
      answer: "do you wash your car"
    },
    {
      type: "choice",
      question: "What does 'Please, take my mother to church' mean?",
      options: [
        "Por favor, leve minha mãe à igreja",
        "Por favor, lave o carro da minha mãe",
        "Por favor, cozinhe arroz para minha mãe"
      ],
      answer: "Por favor, leve minha mãe à igreja"
    },
    {
      type: "text",
      question: "Translate to English: Eu quero comprar um carro vermelho.",
      answer: "i want to buy a red car"
    },
    {
      type: "choice",
      question: "What does 'How much money do you have?' mean?",
      options: [
        "Quanto dinheiro você tem?",
        "Quanto dinheiro você precisa?",
        "Quanto arroz você compra?"
      ],
      answer: "Quanto dinheiro você tem?"
    },
    {
      type: "text",
      question: "Translate to English: Você trabalha à noite?",
      answer: "do you work at night"
    },
    {
      type: "matching",
      question: "Match the sentences:",
      pairs: [
        { left: "They come here every day", right: "Eles vêm aqui todos os dias" },
        { left: "I don't like this book", right: "Eu não gosto deste livro" },
        { left: "We come here to buy notebooks", right: "Nós vimos aqui comprar cadernos" },
        { left: "I don't like to wash the dishes at night", right: "Eu não gosto de lavar a louça à noite" }
      ]
    }
  ]
}
];

let currentLesson = 0;
let currentModule = 0;
let isTestMode = false;

let progress = JSON.parse(localStorage.getItem("fydProgress")) || {
  completedModules: {},
  completedLessons: {}
};

function openBookOne() {
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("appScreen").classList.remove("hidden");

  currentLesson = 0;
  currentModule = 0;
  isTestMode = false;

  render();
}

function goHome() {
  document.getElementById("appScreen").classList.add("hidden");
  document.getElementById("homeScreen").classList.remove("hidden");
}

function saveProgress() {
  localStorage.setItem("fydProgress", JSON.stringify(progress));
}

function moduleKey(lessonIndex, moduleIndex) {
  return `lesson${lessonIndex}-module${moduleIndex}`;
}

function isModuleCompleted(lessonIndex, moduleIndex) {
  return !!progress.completedModules[moduleKey(lessonIndex, moduleIndex)];
}

function isLessonUnlocked(lessonIndex) {
  if (lessonIndex === 0) return true;
  return !!progress.completedLessons[`lesson${lessonIndex - 1}`];
}

function isModuleUnlocked(lessonIndex, moduleIndex) {
  if (!isLessonUnlocked(lessonIndex)) return false;
  if (moduleIndex === 0) return true;
  return isModuleCompleted(lessonIndex, moduleIndex - 1);
}

function isTestUnlocked(lessonIndex) {
  return lessons[lessonIndex].modules.every((_, index) =>
    isModuleCompleted(lessonIndex, index)
  );
}

function normalizeAnswer(answer) {
  return String(answer)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function speakText(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 0.85;
  speech.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

function getEnglishPart(example) {
  if (example.includes("→")) {
    return example.split("→")[0].trim();
  }

  return example.trim();
}

function safeTextForButton(text) {
  return text.replace(/'/g, "\\'");
}

function resetExerciseForm(formId, feedbackId) {
  const form = document.getElementById(formId);
  const feedback = document.getElementById(feedbackId);

  if (form) {
    form.reset();

    const exerciseBoxes = form.querySelectorAll(".exercise-box");

    exerciseBoxes.forEach(box => {
      box.classList.remove("wrong-answer", "correct-answer");

      const correction = box.querySelector(".correction");
      if (correction) {
        correction.innerHTML = "";
      }
    });

    const inputsAndSelects = form.querySelectorAll("input, select");

    inputsAndSelects.forEach(field => {
      field.classList.remove("wrong-answer", "correct-answer");
    });
  }

  if (feedback) {
    feedback.innerHTML = "";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function renderLessons() {
  const lessonList = document.getElementById("lessonList");
  const lessonsCount = document.getElementById("lessonsCount");

  lessonsCount.textContent = `${lessons.length} lessons available`;
  lessonList.innerHTML = "";

  lessons.forEach((lesson, lessonIndex) => {
    const card = document.createElement("div");
    card.className = "lessonCard";

    const completed = lesson.modules.filter((_, i) =>
      isModuleCompleted(lessonIndex, i)
    ).length;

    const lessonLocked = !isLessonUnlocked(lessonIndex);

    card.innerHTML = `
      <div class="lessonHeader">
        ${lessonLocked ? "🔒" : "📘"} ${lesson.title}<br>
        <small>${completed}/${lesson.modules.length} modules completed</small>
      </div>
    `;

    lesson.modules.forEach((module, moduleIndex) => {
      const item = document.createElement("div");
      item.className = "moduleItem";

      if (
        lessonIndex === currentLesson &&
        moduleIndex === currentModule &&
        !isTestMode
      ) {
        item.classList.add("active");
      }

      if (!isModuleUnlocked(lessonIndex, moduleIndex)) {
        item.classList.add("locked");
        item.innerHTML = `
          🔒 ${module.title}
          <br>
          <small>Locked</small>
        `;
      } else {
        const completedIcon = isModuleCompleted(lessonIndex, moduleIndex)
          ? "✅"
          : "⭕";

        const statusText = isModuleCompleted(lessonIndex, moduleIndex)
          ? "Completed"
          : "Available";

        item.innerHTML = `
          ${completedIcon} ${module.title}
          <br>
          <small>${statusText}</small>
        `;

        item.onclick = () => {
          currentLesson = lessonIndex;
          currentModule = moduleIndex;
          isTestMode = false;
          render();
        };
      }

      card.appendChild(item);
    });

    const testItem = document.createElement("div");
    testItem.className = "moduleItem";

    if (isTestMode && lessonIndex === currentLesson) {
      testItem.classList.add("active");
    }

    if (!isTestUnlocked(lessonIndex)) {
      testItem.classList.add("locked");
      testItem.innerHTML = `
        🔒 Final Test
        <br>
        <small>Unlock after modules</small>
      `;
    } else {
      const testPassed = !!progress.completedLessons[`lesson${lessonIndex}`];

      testItem.innerHTML = `
        ${testPassed ? "✅" : "🧪"} Final Test
        <br>
        <small>${testPassed ? "Passed" : "70% to pass"}</small>
      `;

      testItem.onclick = () => {
        currentLesson = lessonIndex;
        isTestMode = true;
        render();
      };
    }

    card.appendChild(testItem);
    lessonList.appendChild(card);
  });
}

function renderModule() {
  const module = lessons[currentLesson].modules[currentModule];

  document.getElementById("moduleTitle").textContent = module.title;

  document.getElementById("moduleContent").innerHTML = `
    <div class="card">
      <h2>${module.content.topic}</h2>
      <p>${module.content.explanation}</p>
    </div>

    <div class="card">
      <h2>Examples</h2>
      <div class="examples">
        ${module.content.examples
          .map(ex => {
            const englishText = getEnglishPart(ex);

            return `
              <div class="example">
                <span>${ex}</span>
                <button 
                  type="button" 
                  class="audio-btn" 
                  onclick="speakText('${safeTextForButton(englishText)}')"
                >
                  🔊
                </button>
              </div>
            `;
          })
          .join("")}
      </div>
    </div>

    <div class="card practice">
      <h2>Practice Activities</h2>
      <p>Complete the activities below before finishing this module.</p>

      <form id="moduleExerciseForm">
        ${renderExercises(module.content.exercises)}
        <button type="submit">Check Answers</button>
      </form>

      <div id="moduleFeedback"></div>
    </div>
  `;

  document.getElementById("completeBtn").style.display = "inline-block";
  document.getElementById("testBtn").style.display = "none";

  if (isModuleCompleted(currentLesson, currentModule)) {
    document.getElementById("completeBtn").disabled = false;
    document.getElementById("completeBtn").textContent = "Module Completed";
  } else {
    document.getElementById("completeBtn").disabled = true;
    document.getElementById("completeBtn").textContent = "Complete Module";
  }

  document.getElementById("moduleExerciseForm").onsubmit = function (event) {
    event.preventDefault();

    const result = checkExercises(
      module.content.exercises,
      event.target,
      "moduleFeedback"
    );

    if (result.percentage >= 70) {
      document.getElementById("completeBtn").disabled = false;
    }
  };
}

function renderExercises(exercises) {
  return exercises
    .map((exercise, index) => {
      let html = `
        <div class="exercise-box" id="exercise-${index}">
          <h3>${index + 1}. ${exercise.question}</h3>
      `;

      if (exercise.type === "choice") {
        exercise.options.forEach(option => {
          html += `
            <label class="option">
              <input type="radio" name="q${index}" value="${option}" required />
              ${option}
            </label>
          `;
        });
      }

      if (exercise.type === "text") {
        html += `
          <input 
            type="text" 
            name="q${index}" 
            placeholder="Type your answer here" 
            required 
          />
        `;
      }

      if (exercise.type === "matching") {
        const options = shuffleArray(exercise.pairs.map(pair => pair.right));

        exercise.pairs.forEach((pair, pairIndex) => {
          html += `
            <div class="match-row">
              <div class="match-word">${pair.left}</div>
              <select name="q${index}-${pairIndex}" required>
                <option value="">Choose the correct match</option>
                ${options
                  .map(option => `<option value="${option}">${option}</option>`)
                  .join("")}
              </select>
            </div>
          `;
        });
      }

      html += `<div class="correction" id="correction-${index}"></div>`;
      html += `</div>`;

      return html;
    })
    .join("");
}

function checkExercises(exercises, form, feedbackId) {
  let total = 0;
  let score = 0;

  exercises.forEach((exercise, index) => {
    const exerciseBox = document.getElementById(`exercise-${index}`);
    const correction = document.getElementById(`correction-${index}`);

    exerciseBox.classList.remove("wrong-answer", "correct-answer");
    correction.innerHTML = "";

    if (exercise.type === "choice" || exercise.type === "text") {
      total++;

      const userAnswer = new FormData(form).get(`q${index}`);
      const correctAnswer = exercise.answer;

      if (
        userAnswer &&
        normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer)
      ) {
        score++;
        exerciseBox.classList.add("correct-answer");
      } else {
        exerciseBox.classList.add("wrong-answer");
        correction.innerHTML = `
          Correct answer: <strong>${correctAnswer}</strong>
        `;
      }
    }

    if (exercise.type === "matching") {
      let matchingMistakes = [];

      exercise.pairs.forEach((pair, pairIndex) => {
        total++;

        const userAnswer = new FormData(form).get(`q${index}-${pairIndex}`);
        const select = form.querySelector(`[name="q${index}-${pairIndex}"]`);

        select.classList.remove("wrong-answer", "correct-answer");

        if (
          userAnswer &&
          normalizeAnswer(userAnswer) === normalizeAnswer(pair.right)
        ) {
          score++;
          select.classList.add("correct-answer");
        } else {
          select.classList.add("wrong-answer");
          matchingMistakes.push(`${pair.left} → ${pair.right}`);
        }
      });

      if (matchingMistakes.length === 0) {
        exerciseBox.classList.add("correct-answer");
        correction.innerHTML = "Great! All matches are correct.";
      } else {
        exerciseBox.classList.add("wrong-answer");
        correction.innerHTML = `
          Correct matches:<br>
          <strong>${exercise.pairs
            .map(pair => `${pair.left} → ${pair.right}`)
            .join("<br>")}</strong>
        `;
      }
    }
  });

  const percentage = Math.round((score / total) * 100);
  const feedback = document.getElementById(feedbackId);

  if (percentage >= 70) {
    feedback.innerHTML = `
      <div class="feedback success">
        Great job! You got ${percentage}%. You can continue now.
      </div>
    `;
  } else {
    const formId = form.id;

    const message =
      formId === "testForm"
        ? "Keep going! Mistakes are part of learning. Try again and improve your score!"
        : "Good try! Review the highlighted answers and try again.";

    feedback.innerHTML = `
      <div class="feedback error">
        You got ${percentage}%. ${message}
        <br><br>
        <button 
          type="button" 
          class="try-again-btn" 
          onclick="resetExerciseForm('${formId}', '${feedbackId}')"
        >
          🔁 Try Again
        </button>
      </div>
    `;
  }

  return { score, total, percentage };
}

function renderTest() {
  const test = lessons[currentLesson].test;

  document.getElementById("moduleTitle").textContent = "Final Test";

  document.getElementById("moduleContent").innerHTML = `
    <div class="card">
      <h2>Final Lesson Test</h2>
      <p>You need at least <strong>70%</strong> to pass and unlock the next lesson.</p>
    </div>

    <form id="testForm">
      ${renderExercises(test)}
      <button type="submit">Submit Test</button>
    </form>

    <div id="testResult"></div>
  `;

  document.getElementById("completeBtn").style.display = "none";
  document.getElementById("testBtn").style.display = "none";

  document.getElementById("testForm").onsubmit = function (event) {
    event.preventDefault();

    const result = checkExercises(test, event.target, "testResult");

    if (result.percentage >= 70) {
      progress.completedLessons[`lesson${currentLesson}`] = true;
      saveProgress();

      document.getElementById("testResult").innerHTML += `
        <div class="feedback success">
          Congratulations! You passed this lesson with ${result.percentage}% 🎉
          <br><br>
          Now you can click <strong>Next →</strong> to continue.
        </div>
      `;

      renderLessons();
      renderProgress();
    }
  };
}

function renderProgress() {
  const lesson = lessons[currentLesson];

  const completed = lesson.modules.filter((_, i) =>
    isModuleCompleted(currentLesson, i)
  ).length;

  const percent = Math.round((completed / lesson.modules.length) * 100);

  document.getElementById("currentLessonName").textContent = lesson.title;

  document.getElementById("progressText").textContent =
    `${completed}/${lesson.modules.length} modules - ${percent}% complete`;

  document.getElementById("progressFill").style.width = `${percent}%`;

  document.getElementById("moduleMiniList").innerHTML =
    lesson.modules
      .map(
        (m, i) => `
        <div class="miniModule">
          ${
            isModuleCompleted(currentLesson, i)
              ? "✅ Completed"
              : isModuleUnlocked(currentLesson, i)
              ? "⭕ Available"
              : "🔒 Locked"
          }
          <br>
          <strong>${m.title}</strong>
        </div>
      `
      )
      .join("") +
    `<div class="miniModule">
      ${
        isTestUnlocked(currentLesson)
          ? progress.completedLessons[`lesson${currentLesson}`]
            ? "✅ Final Test Passed"
            : "🧪 Final Test Available"
          : "🔒 Final Test Locked"
      }
    </div>`;
}

function showFinalCongratulations() {
  document.getElementById("moduleTitle").textContent = "Congratulations! 🎉";

  document.getElementById("moduleContent").innerHTML = `
    <div class="card">
      <h2>You completed Book One!</h2>
      <p>
        Amazing job! You finished all lessons from the Follow Your Dreams Interactive Workbook — Book One.
      </p>
      <p>
        You unlocked your Certificate of Completion. 🏆
      </p>
    </div>

    <div class="card certificate-card">
      <h2>Certificate of Completion</h2>
      <p><strong>Student:</strong> __________________________</p>
      <p><strong>Course:</strong> English Interactive Workbook — Book One</p>
      <p><strong>School:</strong> Follow Your Dreams</p>
      <p><strong>Date:</strong> ____ / ____ / ______</p>

      <button onclick="window.print()">🖨️ Print Certificate</button>
    </div>
  `;

  document.getElementById("completeBtn").style.display = "none";
  document.getElementById("testBtn").style.display = "none";
  document.getElementById("prevBtn").style.display = "inline-block";
  document.getElementById("nextBtn").style.display = "none";
}

function setupButtons() {
  document.getElementById("completeBtn").onclick = () => {
    progress.completedModules[moduleKey(currentLesson, currentModule)] = true;
    saveProgress();
    render();
  };

  document.getElementById("nextBtn").onclick = () => {
    const lessonCompleted = !!progress.completedLessons[`lesson${currentLesson}`];

    if (isTestMode) {
      if (lessonCompleted && currentLesson < lessons.length - 1) {
        currentLesson++;
        currentModule = 0;
        isTestMode = false;
        render();
        return;
      }

      if (lessonCompleted && currentLesson === lessons.length - 1) {
        showFinalCongratulations();
        return;
      }

      alert("You need to pass the Final Test with at least 70% before going to the next lesson.");
      return;
    }

    if (currentModule < lessons[currentLesson].modules.length - 1) {
      if (isModuleUnlocked(currentLesson, currentModule + 1)) {
        currentModule++;
        isTestMode = false;
        render();
      } else {
        alert("Complete this module before moving forward.");
      }
      return;
    }

    if (currentModule === lessons[currentLesson].modules.length - 1) {
      if (isTestUnlocked(currentLesson)) {
        isTestMode = true;
        render();
      } else {
        alert("Complete all modules before taking the Final Test.");
      }
    }
  };

  document.getElementById("prevBtn").onclick = () => {
    document.getElementById("nextBtn").style.display = "inline-block";

    if (isTestMode) {
      isTestMode = false;
      currentModule = lessons[currentLesson].modules.length - 1;
    } else if (currentModule > 0) {
      currentModule--;
    } else if (currentLesson > 0) {
      currentLesson--;
      currentModule = lessons[currentLesson].modules.length - 1;
      isTestMode = false;
    }

    render();
  };
}

function render() {
  document.getElementById("prevBtn").style.display = "inline-block";
  document.getElementById("nextBtn").style.display = "inline-block";

  renderLessons();
  renderProgress();

  if (isTestMode) {
    renderTest();
  } else {
    renderModule();
  }
}

setupButtons();