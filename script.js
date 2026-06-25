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

const bookOneLessons = JSON.parse(JSON.stringify(lessons));

const bookTwoLessons = [
  {
    title: "Lesson 1 - Verb To Be Review",
    modules: [
      {
        title: "Verbs and Grammar",
        content: {
          topic: "Verb To Be: affirmative, negative and questions",
          explanation: "In Book Two, you will review and expand important structures. In this lesson, you will practice the verb to be with people, places and feelings.",
          examples: [
            "I am happy → Eu estou feliz",
            "You are my friend → Você é meu amigo",
            "He is at school → Ele está na escola",
            "She is a teacher → Ela é professora",
            "We are ready → Nós estamos prontos",
            "They are not tired → Eles não estão cansados",
            "Are you okay? → Você está bem?",
            "Is he at home? → Ele está em casa?"
          ],
          exercises: [
            { type: "choice", question: "Choose the correct translation: She is a teacher.", options: ["Ela é professora", "Ela está cansada", "Ela tem uma professora"], answer: "Ela é professora" },
            { type: "text", question: "Translate to English: Eu estou feliz.", answer: "i am happy" },
            { type: "text", question: "Translate to English: Você está bem?", answer: "are you okay" },
            { type: "matching", question: "Match the sentences:", pairs: [
              { left: "He is at school", right: "Ele está na escola" },
              { left: "They are not tired", right: "Eles não estão cansados" },
              { left: "We are ready", right: "Nós estamos prontos" }
            ] }
          ]
        }
      },
      {
        title: "Vocabulary",
        content: {
          topic: "Feelings and places",
          explanation: "Practice common adjectives and places to describe how people feel and where they are.",
          examples: [
            "happy → feliz", "sad → triste", "tired → cansado", "ready → pronto", "busy → ocupado", "hungry → com fome", "school → escola", "home → casa", "classroom → sala de aula", "library → biblioteca"
          ],
          exercises: [
            { type: "choice", question: "What does 'tired' mean?", options: ["feliz", "cansado", "ocupado"], answer: "cansado" },
            { type: "text", question: "Translate to English: biblioteca", answer: "library" },
            { type: "matching", question: "Match the words:", pairs: [
              { left: "happy", right: "feliz" },
              { left: "hungry", right: "com fome" },
              { left: "classroom", right: "sala de aula" },
              { left: "home", right: "casa" }
            ] }
          ]
        }
      },
      {
        title: "Conversation",
        content: {
          topic: "At school",
          explanation: "Read the mini conversation and practice asking simple questions with the verb to be.",
          examples: [
            "A: Hi! Are you ready for class? → Oi! Você está pronto para a aula?",
            "B: Yes, I am. I am happy today. → Sim, estou. Estou feliz hoje.",
            "A: Is your teacher in the classroom? → Sua professora está na sala?",
            "B: Yes, she is. She is busy now. → Sim, está. Ela está ocupada agora."
          ],
          exercises: [
            { type: "choice", question: "Where is the teacher?", options: ["In the classroom", "At the bank", "At the market"], answer: "In the classroom" },
            { type: "text", question: "Answer in English: Are you ready?", answer: "yes i am" },
            { type: "matching", question: "Match the questions:", pairs: [
              { left: "Are you ready?", right: "Você está pronto?" },
              { left: "Is she busy?", right: "Ela está ocupada?" },
              { left: "Are they happy?", right: "Eles estão felizes?" }
            ] }
          ]
        }
      }
    ],
    test: [
      { type: "text", question: "Translate: Eu estou pronto.", answer: "i am ready" },
      { type: "choice", question: "They are not tired means:", options: ["Eles não estão cansados", "Eles estão felizes", "Eles não têm aula"], answer: "Eles não estão cansados" },
      { type: "text", question: "Translate: Ela está na sala de aula.", answer: "she is in the classroom" },
      { type: "matching", question: "Match:", pairs: [
        { left: "library", right: "biblioteca" },
        { left: "busy", right: "ocupado" },
        { left: "Are you okay?", right: "Você está bem?" }
      ] }
    ]
  },
  {
    title: "Lesson 2 - Simple Present",
    modules: [
      {
        title: "Verbs and Grammar",
        content: {
          topic: "Simple Present: routines and habits",
          explanation: "Use the Simple Present to talk about routines, habits and things that happen regularly. Remember: he, she and it usually take -s.",
          examples: [
            "I study English every day → Eu estudo inglês todos os dias",
            "You play soccer on Fridays → Você joga futebol às sextas",
            "He studies at night → Ele estuda à noite",
            "She works in the morning → Ela trabalha de manhã",
            "We don't study on Sundays → Nós não estudamos aos domingos",
            "Does she speak English? → Ela fala inglês?",
            "Do you like music? → Você gosta de música?"
          ],
          exercises: [
            { type: "choice", question: "Choose the correct sentence:", options: ["She study English", "She studies English", "She studying English"], answer: "She studies English" },
            { type: "text", question: "Translate to English: Ele trabalha de manhã.", answer: "he works in the morning" },
            { type: "text", question: "Translate to English: Você gosta de música?", answer: "do you like music" },
            { type: "matching", question: "Match:", pairs: [
              { left: "I study", right: "Eu estudo" },
              { left: "She works", right: "Ela trabalha" },
              { left: "We don't play", right: "Nós não jogamos" }
            ] }
          ]
        }
      },
      {
        title: "Vocabulary",
        content: {
          topic: "Daily routine",
          explanation: "Practice words and expressions about daily routine.",
          examples: [
            "wake up → acordar", "get up → levantar", "take a shower → tomar banho", "have breakfast → tomar café da manhã", "go to school → ir para a escola", "do homework → fazer lição de casa", "watch TV → assistir TV", "go to bed → ir para a cama"
          ],
          exercises: [
            { type: "choice", question: "What does 'do homework' mean?", options: ["fazer lição de casa", "tomar banho", "ir para a cama"], answer: "fazer lição de casa" },
            { type: "text", question: "Translate to English: acordar", answer: "wake up" },
            { type: "matching", question: "Match the routine:", pairs: [
              { left: "take a shower", right: "tomar banho" },
              { left: "have breakfast", right: "tomar café da manhã" },
              { left: "go to school", right: "ir para a escola" }
            ] }
          ]
        }
      },
      {
        title: "Writing Practice",
        content: {
          topic: "My routine",
          explanation: "Practice writing about your routine using the Simple Present.",
          examples: [
            "I wake up at seven o'clock → Eu acordo às sete horas",
            "I go to school in the morning → Eu vou para a escola de manhã",
            "I study English twice a week → Eu estudo inglês duas vezes por semana",
            "She watches TV at night → Ela assiste TV à noite"
          ],
          exercises: [
            { type: "text", question: "Translate to English: Eu estudo inglês duas vezes por semana.", answer: "i study english twice a week" },
            { type: "choice", question: "What is the best sentence?", options: ["He go to school", "He goes to school", "He going to school"], answer: "He goes to school" },
            { type: "matching", question: "Match:", pairs: [
              { left: "at night", right: "à noite" },
              { left: "in the morning", right: "de manhã" },
              { left: "twice a week", right: "duas vezes por semana" }
            ] }
          ]
        }
      }
    ],
    test: [
      { type: "choice", question: "Choose the correct sentence:", options: ["She likes English", "She like English", "She liking English"], answer: "She likes English" },
      { type: "text", question: "Translate: Eu acordo às sete horas.", answer: "i wake up at seven o'clock" },
      { type: "text", question: "Translate: Ele vai para a escola.", answer: "he goes to school" },
      { type: "matching", question: "Match:", pairs: [
        { left: "watch TV", right: "assistir TV" },
        { left: "go to bed", right: "ir para a cama" },
        { left: "do homework", right: "fazer lição de casa" }
      ] }
    ]
  },
  {
    title: "Lesson 3 - Present Continuous",
    modules: [
      {
        title: "Verbs and Grammar",
        content: {
          topic: "Actions happening now",
          explanation: "Use the Present Continuous to talk about actions happening now: am/is/are + verb-ing.",
          examples: [
            "I am studying now → Eu estou estudando agora",
            "You are reading a book → Você está lendo um livro",
            "He is playing soccer → Ele está jogando futebol",
            "She is cooking dinner → Ela está cozinhando o jantar",
            "We are learning English → Nós estamos aprendendo inglês",
            "They are not sleeping → Eles não estão dormindo",
            "Are you listening? → Você está ouvindo?"
          ],
          exercises: [
            { type: "choice", question: "Choose the Present Continuous sentence:", options: ["She cooks dinner", "She is cooking dinner", "She cooked dinner"], answer: "She is cooking dinner" },
            { type: "text", question: "Translate to English: Eu estou estudando agora.", answer: "i am studying now" },
            { type: "text", question: "Translate to English: Você está ouvindo?", answer: "are you listening" },
            { type: "matching", question: "Match:", pairs: [
              { left: "He is playing", right: "Ele está jogando" },
              { left: "We are learning", right: "Nós estamos aprendendo" },
              { left: "They are sleeping", right: "Eles estão dormindo" }
            ] }
          ]
        }
      },
      {
        title: "Vocabulary",
        content: {
          topic: "Actions now",
          explanation: "Practice action verbs used with the Present Continuous.",
          examples: ["studying → estudando", "reading → lendo", "writing → escrevendo", "listening → ouvindo", "speaking → falando", "cooking → cozinhando", "playing → jogando", "running → correndo"],
          exercises: [
            { type: "choice", question: "What does 'reading' mean?", options: ["lendo", "ouvindo", "correndo"], answer: "lendo" },
            { type: "text", question: "Translate to English: falando", answer: "speaking" },
            { type: "matching", question: "Match:", pairs: [
              { left: "writing", right: "escrevendo" },
              { left: "listening", right: "ouvindo" },
              { left: "running", right: "correndo" }
            ] }
          ]
        }
      },
      {
        title: "Conversation",
        content: {
          topic: "What are you doing?",
          explanation: "Practice short conversations about actions happening now.",
          examples: [
            "A: What are you doing? → O que você está fazendo?",
            "B: I am studying English. → Eu estou estudando inglês.",
            "A: Is your brother playing? → Seu irmão está brincando?",
            "B: No, he is reading. → Não, ele está lendo."
          ],
          exercises: [
            { type: "choice", question: "What is the person doing?", options: ["Studying English", "Sleeping", "Going to school"], answer: "Studying English" },
            { type: "text", question: "Translate: O que você está fazendo?", answer: "what are you doing" },
            { type: "matching", question: "Match:", pairs: [
              { left: "What are you doing?", right: "O que você está fazendo?" },
              { left: "He is reading", right: "Ele está lendo" },
              { left: "No, he isn't", right: "Não, ele não está" }
            ] }
          ]
        }
      }
    ],
    test: [
      { type: "text", question: "Translate: Nós estamos aprendendo inglês.", answer: "we are learning english" },
      { type: "choice", question: "Choose the correct sentence:", options: ["They sleeping", "They are sleeping", "They is sleeping"], answer: "They are sleeping" },
      { type: "text", question: "Translate: O que você está fazendo?", answer: "what are you doing" },
      { type: "matching", question: "Match:", pairs: [
        { left: "cooking", right: "cozinhando" },
        { left: "running", right: "correndo" },
        { left: "listening", right: "ouvindo" }
      ] }
    ]
  },
  {
    title: "Lesson 4 - There Is / There Are",
    modules: [
      {
        title: "Verbs and Grammar",
        content: {
          topic: "Describing places",
          explanation: "Use there is for one thing and there are for two or more things.",
          examples: [
            "There is a book on the table → Há um livro na mesa",
            "There is a teacher in the classroom → Há uma professora na sala",
            "There are two students here → Há dois alunos aqui",
            "There are many books in the library → Há muitos livros na biblioteca",
            "There isn't a pen in my bag → Não há uma caneta na minha bolsa",
            "Are there students in the classroom? → Há alunos na sala?"
          ],
          exercises: [
            { type: "choice", question: "Choose the correct sentence:", options: ["There is two books", "There are two books", "There are a book"], answer: "There are two books" },
            { type: "text", question: "Translate: Há um livro na mesa.", answer: "there is a book on the table" },
            { type: "text", question: "Translate: Há alunos na sala?", answer: "are there students in the classroom" },
            { type: "matching", question: "Match:", pairs: [
              { left: "There is", right: "Há / existe" },
              { left: "There are", right: "Há / existem" },
              { left: "There isn't", right: "Não há" }
            ] }
          ]
        }
      },
      {
        title: "Vocabulary",
        content: {
          topic: "Rooms and objects",
          explanation: "Practice vocabulary to describe houses and classrooms.",
          examples: ["bedroom → quarto", "kitchen → cozinha", "bathroom → banheiro", "living room → sala", "table → mesa", "chair → cadeira", "bag → bolsa/mochila", "window → janela"],
          exercises: [
            { type: "choice", question: "What does 'kitchen' mean?", options: ["cozinha", "quarto", "banheiro"], answer: "cozinha" },
            { type: "text", question: "Translate: janela", answer: "window" },
            { type: "matching", question: "Match:", pairs: [
              { left: "bedroom", right: "quarto" },
              { left: "chair", right: "cadeira" },
              { left: "bathroom", right: "banheiro" }
            ] }
          ]
        }
      },
      {
        title: "Writing Practice",
        content: {
          topic: "Describe a room",
          explanation: "Use there is and there are to describe a room or classroom.",
          examples: [
            "There is a table in my kitchen → Há uma mesa na minha cozinha",
            "There are three chairs in the classroom → Há três cadeiras na sala",
            "There is a window in my bedroom → Há uma janela no meu quarto",
            "There are many books on the table → Há muitos livros na mesa"
          ],
          exercises: [
            { type: "text", question: "Translate: Há três cadeiras na sala.", answer: "there are three chairs in the classroom" },
            { type: "choice", question: "Use for one object:", options: ["There is", "There are", "Are there"], answer: "There is" },
            { type: "matching", question: "Match:", pairs: [
              { left: "on the table", right: "na mesa" },
              { left: "in my bedroom", right: "no meu quarto" },
              { left: "in the kitchen", right: "na cozinha" }
            ] }
          ]
        }
      }
    ],
    test: [
      { type: "choice", question: "Choose the correct sentence:", options: ["There is a chair", "There are a chair", "There have a chair"], answer: "There is a chair" },
      { type: "text", question: "Translate: Há muitos livros na biblioteca.", answer: "there are many books in the library" },
      { type: "text", question: "Translate: cozinha", answer: "kitchen" },
      { type: "matching", question: "Match:", pairs: [
        { left: "bathroom", right: "banheiro" },
        { left: "living room", right: "sala" },
        { left: "There isn't", right: "Não há" }
      ] }
    ]
  },
  {
    title: "Lesson 5 - Can / Can't",
    modules: [
      {
        title: "Verbs and Grammar",
        content: {
          topic: "Abilities and permission",
          explanation: "Use can to talk about abilities and permission. Use can't for negative sentences.",
          examples: [
            "I can speak English → Eu consigo falar inglês",
            "She can play the piano → Ela sabe tocar piano",
            "He can't swim → Ele não sabe nadar",
            "Can you help me? → Você pode me ajudar?",
            "Can they come to class? → Eles podem vir para a aula?",
            "We can learn together → Nós podemos aprender juntos"
          ],
          exercises: [
            { type: "choice", question: "What does 'I can speak English' mean?", options: ["Eu consigo falar inglês", "Eu quero falar inglês", "Eu gosto de inglês"], answer: "Eu consigo falar inglês" },
            { type: "text", question: "Translate: Você pode me ajudar?", answer: "can you help me" },
            { type: "text", question: "Translate: Ele não sabe nadar.", answer: "he can't swim" },
            { type: "matching", question: "Match:", pairs: [
              { left: "can", right: "pode/consegue" },
              { left: "can't", right: "não pode/não consegue" },
              { left: "swim", right: "nadar" }
            ] }
          ]
        }
      },
      {
        title: "Vocabulary",
        content: {
          topic: "Abilities",
          explanation: "Practice verbs used to talk about abilities.",
          examples: ["swim → nadar", "dance → dançar", "sing → cantar", "draw → desenhar", "drive → dirigir", "cook → cozinhar", "play the guitar → tocar violão", "speak English → falar inglês"],
          exercises: [
            { type: "choice", question: "What does 'draw' mean?", options: ["desenhar", "dirigir", "cantar"], answer: "desenhar" },
            { type: "text", question: "Translate: tocar violão", answer: "play the guitar" },
            { type: "matching", question: "Match:", pairs: [
              { left: "sing", right: "cantar" },
              { left: "drive", right: "dirigir" },
              { left: "dance", right: "dançar" }
            ] }
          ]
        }
      },
      {
        title: "Speaking Practice",
        content: {
          topic: "What can you do?",
          explanation: "Practice asking and answering questions about abilities.",
          examples: [
            "A: Can you cook? → Você sabe cozinhar?",
            "B: Yes, I can. → Sim, eu sei.",
            "A: Can she play the guitar? → Ela sabe tocar violão?",
            "B: No, she can't. → Não, ela não sabe."
          ],
          exercises: [
            { type: "choice", question: "How do you answer a positive can question?", options: ["Yes, I can", "Yes, I do", "Yes, I am"], answer: "Yes, I can" },
            { type: "text", question: "Translate: Não, ela não sabe.", answer: "no she can't" },
            { type: "matching", question: "Match:", pairs: [
              { left: "Can you cook?", right: "Você sabe cozinhar?" },
              { left: "Yes, I can", right: "Sim, eu sei" },
              { left: "No, she can't", right: "Não, ela não sabe" }
            ] }
          ]
        }
      }
    ],
    test: [
      { type: "text", question: "Translate: Eu consigo falar inglês.", answer: "i can speak english" },
      { type: "choice", question: "He can't swim means:", options: ["Ele não sabe nadar", "Ele sabe nadar", "Ele quer nadar"], answer: "Ele não sabe nadar" },
      { type: "text", question: "Translate: tocar violão", answer: "play the guitar" },
      { type: "matching", question: "Match:", pairs: [
        { left: "draw", right: "desenhar" },
        { left: "cook", right: "cozinhar" },
        { left: "Can you help me?", right: "Você pode me ajudar?" }
      ] }
    ]
  },
  {
    title: "Lesson 6 - Past Simple Introduction",
    modules: [
      {
        title: "Verbs and Grammar",
        content: {
          topic: "Regular past verbs",
          explanation: "Use the Past Simple to talk about finished actions. Many regular verbs end in -ed.",
          examples: [
            "I worked yesterday → Eu trabalhei ontem",
            "She studied last night → Ela estudou ontem à noite",
            "We watched a movie → Nós assistimos a um filme",
            "They played soccer → Eles jogaram futebol",
            "I didn't work yesterday → Eu não trabalhei ontem",
            "Did you study yesterday? → Você estudou ontem?"
          ],
          exercises: [
            { type: "choice", question: "Choose the regular past verb:", options: ["played", "go", "does"], answer: "played" },
            { type: "text", question: "Translate: Eu trabalhei ontem.", answer: "i worked yesterday" },
            { type: "text", question: "Translate: Você estudou ontem?", answer: "did you study yesterday" },
            { type: "matching", question: "Match:", pairs: [
              { left: "worked", right: "trabalhou" },
              { left: "studied", right: "estudou" },
              { left: "watched", right: "assistiu" }
            ] }
          ]
        }
      },
      {
        title: "Vocabulary",
        content: {
          topic: "Past time expressions",
          explanation: "Practice words used to talk about the past.",
          examples: ["yesterday → ontem", "last night → ontem à noite", "last week → semana passada", "last month → mês passado", "two days ago → dois dias atrás", "in 2025 → em 2025"],
          exercises: [
            { type: "choice", question: "What does 'last week' mean?", options: ["semana passada", "ontem", "mês passado"], answer: "semana passada" },
            { type: "text", question: "Translate: dois dias atrás", answer: "two days ago" },
            { type: "matching", question: "Match:", pairs: [
              { left: "yesterday", right: "ontem" },
              { left: "last month", right: "mês passado" },
              { left: "last night", right: "ontem à noite" }
            ] }
          ]
        }
      },
      {
        title: "Conversation",
        content: {
          topic: "What did you do?",
          explanation: "Practice short questions and answers about yesterday.",
          examples: [
            "A: What did you do yesterday? → O que você fez ontem?",
            "B: I studied English. → Eu estudei inglês.",
            "A: Did you watch a movie? → Você assistiu a um filme?",
            "B: Yes, I did. → Sim."
          ],
          exercises: [
            { type: "choice", question: "What did the person study?", options: ["English", "Spanish", "Math"], answer: "English" },
            { type: "text", question: "Translate: O que você fez ontem?", answer: "what did you do yesterday" },
            { type: "matching", question: "Match:", pairs: [
              { left: "Did you watch?", right: "Você assistiu?" },
              { left: "Yes, I did", right: "Sim" },
              { left: "I studied English", right: "Eu estudei inglês" }
            ] }
          ]
        }
      }

    ],
    test: [
      { type: "text", question: "Translate: Ela estudou ontem à noite.", answer: "she studied last night" },
      { type: "choice", question: "Did you study yesterday? means:", options: ["Você estudou ontem?", "Você estuda ontem?", "Você vai estudar?"], answer: "Você estudou ontem?" },
      { type: "text", question: "Translate: semana passada", answer: "last week" },
      { type: "matching", question: "Match:", pairs: [
        { left: "watched", right: "assistiu" },
        { left: "yesterday", right: "ontem" },
        { left: "two days ago", right: "dois dias atrás" }
      ] }
    ]
  },
  {
    title: "Lesson 7 - Future with Going To",
    modules: [
      {
        title: "Verbs and Grammar",
        content: {
          topic: "Plans and intentions",
          explanation: "Use going to to talk about plans and intentions for the future.",
          examples: [
            "I am going to study tomorrow → Eu vou estudar amanhã",
            "She is going to travel next month → Ela vai viajar mês que vem",
            "We are going to watch a movie → Nós vamos assistir a um filme",
            "They are not going to play today → Eles não vão jogar hoje",
            "Are you going to help me? → Você vai me ajudar?"
          ],
          exercises: [
            { type: "choice", question: "Choose the future sentence:", options: ["I am going to study", "I studied", "I study every day"], answer: "I am going to study" },
            { type: "text", question: "Translate: Ela vai viajar mês que vem.", answer: "she is going to travel next month" },
            { type: "text", question: "Translate: Você vai me ajudar?", answer: "are you going to help me" },
            { type: "matching", question: "Match:", pairs: [
              { left: "tomorrow", right: "amanhã" },
              { left: "next month", right: "mês que vem" },
              { left: "going to", right: "vai / vão" }
            ] }
          ]
        }
      },
      {
        title: "Vocabulary",
        content: {
          topic: "Future plans",
          explanation: "Practice useful verbs for future plans.",
          examples: ["travel → viajar", "visit → visitar", "study → estudar", "help → ajudar", "watch → assistir", "buy → comprar", "call → ligar", "practice → praticar"],
          exercises: [
            { type: "choice", question: "What does 'travel' mean?", options: ["viajar", "comprar", "ligar"], answer: "viajar" },
            { type: "text", question: "Translate: praticar", answer: "practice" },
            { type: "matching", question: "Match:", pairs: [
              { left: "call", right: "ligar" },
              { left: "buy", right: "comprar" },
              { left: "visit", right: "visitar" }
            ] }
          ]
        }
      },
      {
        title: "Writing Practice",
        content: {
          topic: "My plans",
          explanation: "Write and practice sentences about your plans.",
          examples: [
            "I am going to practice English this week → Eu vou praticar inglês esta semana",
            "I am going to visit my friend tomorrow → Eu vou visitar meu amigo amanhã",
            "We are going to buy food today → Nós vamos comprar comida hoje"
          ],
          exercises: [
            { type: "text", question: "Translate: Eu vou praticar inglês esta semana.", answer: "i am going to practice english this week" },
            { type: "choice", question: "Which sentence is correct?", options: ["She is going to travel", "She going travel", "She are going to travel"], answer: "She is going to travel" },
            { type: "matching", question: "Match:", pairs: [
              { left: "this week", right: "esta semana" },
              { left: "tomorrow", right: "amanhã" },
              { left: "today", right: "hoje" }
            ] }
          ]
        }
      }
    ],
    test: [
      { type: "text", question: "Translate: Eu vou estudar amanhã.", answer: "i am going to study tomorrow" },
      { type: "choice", question: "She is going to travel means:", options: ["Ela vai viajar", "Ela viajou", "Ela viaja"], answer: "Ela vai viajar" },
      { type: "text", question: "Translate: mês que vem", answer: "next month" },
      { type: "matching", question: "Match:", pairs: [
        { left: "practice", right: "praticar" },
        { left: "call", right: "ligar" },
        { left: "Are you going to help me?", right: "Você vai me ajudar?" }
      ] }
    ]
  },
  {
    title: "Lesson 8 - Review and Project",
    modules: [
      {
        title: "Grammar Review",
        content: {
          topic: "Book Two review",
          explanation: "Review the main structures from Book Two: verb to be, simple present, present continuous, there is/are, can/can't, past simple and going to.",
          examples: [
            "I am happy → Eu estou feliz",
            "She studies English → Ela estuda inglês",
            "They are playing now → Eles estão jogando agora",
            "There are books on the table → Há livros na mesa",
            "I can speak English → Eu consigo falar inglês",
            "I studied yesterday → Eu estudei ontem",
            "I am going to travel → Eu vou viajar"
          ],
          exercises: [
            { type: "choice", question: "Which sentence is Present Continuous?", options: ["I am studying now", "I studied yesterday", "I study every day"], answer: "I am studying now" },
            { type: "text", question: "Translate: Eu consigo falar inglês.", answer: "i can speak english" },
            { type: "text", question: "Translate: Ela estuda inglês.", answer: "she studies english" },
            { type: "matching", question: "Match the grammar:", pairs: [
              { left: "There are", right: "Há / existem" },
              { left: "I studied", right: "Eu estudei" },
              { left: "going to", right: "vai / vão" }
            ] }
          ]
        }
      },
      {
        title: "Vocabulary Review",
        content: {
          topic: "Important words from Book Two",
          explanation: "Review useful vocabulary from the whole book.",
          examples: ["routine → rotina", "library → biblioteca", "kitchen → cozinha", "swim → nadar", "yesterday → ontem", "tomorrow → amanhã", "travel → viajar", "practice → praticar"],
          exercises: [
            { type: "choice", question: "What does 'routine' mean?", options: ["rotina", "viagem", "cozinha"], answer: "rotina" },
            { type: "text", question: "Translate: viajar", answer: "travel" },
            { type: "matching", question: "Match:", pairs: [
              { left: "library", right: "biblioteca" },
              { left: "swim", right: "nadar" },
              { left: "tomorrow", right: "amanhã" }
            ] }
          ]
        }
      },
      {
        title: "Final Project",
        content: {
          topic: "My English profile",
          explanation: "Create a short presentation about yourself using the structures from Book Two.",
          examples: [
            "My name is... → Meu nome é...",
            "I study English twice a week → Eu estudo inglês duas vezes por semana",
            "I can... → Eu consigo...",
            "Yesterday, I... → Ontem, eu...",
            "Next week, I am going to... → Semana que vem, eu vou..."
          ],
          exercises: [
            { type: "text", question: "Translate: Meu nome é Ana.", answer: "my name is ana" },
            { type: "text", question: "Translate: Semana que vem, eu vou estudar.", answer: "next week i am going to study" },
            { type: "matching", question: "Match:", pairs: [
              { left: "My name is", right: "Meu nome é" },
              { left: "Yesterday", right: "Ontem" },
              { left: "Next week", right: "Semana que vem" }
            ] }
          ]
        }
      }
    ],
    test: [
      { type: "choice", question: "Choose the correct sentence:", options: ["She studies English", "She study English", "She studying English"], answer: "She studies English" },
      { type: "text", question: "Translate: Eles estão jogando agora.", answer: "they are playing now" },
      { type: "text", question: "Translate: Eu vou viajar.", answer: "i am going to travel" },
      { type: "choice", question: "There are books on the table means:", options: ["Há livros na mesa", "Há um livro na mesa", "Os livros estão em casa"], answer: "Há livros na mesa" },
      { type: "matching", question: "Match:", pairs: [
        { left: "yesterday", right: "ontem" },
        { left: "practice", right: "praticar" },
        { left: "I can speak English", right: "Eu consigo falar inglês" }
      ] }
    ]
  }
  ,
{
  title: "Lesson 9 - Comparatives",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Comparatives: bigger, smaller, better",
        explanation: "Use comparatives to compare two people, places or things. For short adjectives, we usually add -er. For longer adjectives, we use more.",
        examples: [
          "My house is bigger than your house → Minha casa é maior que a sua casa",
          "This book is smaller than that book → Este livro é menor que aquele livro",
          "English is easier than math → Inglês é mais fácil que matemática",
          "This movie is more interesting than that movie → Este filme é mais interessante que aquele filme",
          "She is taller than me → Ela é mais alta que eu",
          "He is younger than his brother → Ele é mais novo que o irmão dele"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct sentence:",
            options: ["She is tall than me", "She is taller than me", "She more tall than me"],
            answer: "She is taller than me"
          },
          {
            type: "text",
            question: "Translate to English: Minha casa é maior que a sua casa.",
            answer: "my house is bigger than your house"
          },
          {
            type: "text",
            question: "Translate to English: Este filme é mais interessante.",
            answer: "this movie is more interesting"
          },
          {
            type: "matching",
            question: "Match the comparatives:",
            pairs: [
              { left: "bigger", right: "maior" },
              { left: "smaller", right: "menor" },
              { left: "easier", right: "mais fácil" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "Adjectives",
        explanation: "Practice adjectives used to describe and compare people, places and things.",
        examples: [
          "big → grande",
          "small → pequeno",
          "tall → alto",
          "short → baixo / curto",
          "old → velho / antigo",
          "young → jovem / novo",
          "easy → fácil",
          "difficult → difícil",
          "interesting → interessante",
          "beautiful → bonito"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'difficult' mean?",
            options: ["fácil", "difícil", "bonito"],
            answer: "difícil"
          },
          {
            type: "text",
            question: "Translate to English: bonito",
            answer: "beautiful"
          },
          {
            type: "matching",
            question: "Match the adjectives:",
            pairs: [
              { left: "young", right: "jovem" },
              { left: "old", right: "velho" },
              { left: "easy", right: "fácil" },
              { left: "big", right: "grande" }
            ]
          }
        ]
      }
    },
    {
      title: "Writing Practice",
      content: {
        topic: "Comparing things",
        explanation: "Practice writing sentences comparing two things.",
        examples: [
          "My school is bigger than my house → Minha escola é maior que minha casa",
          "This activity is easier than the test → Esta atividade é mais fácil que a prova",
          "My city is more beautiful than before → Minha cidade é mais bonita que antes"
        ],
        exercises: [
          {
            type: "text",
            question: "Translate to English: Esta atividade é mais fácil que a prova.",
            answer: "this activity is easier than the test"
          },
          {
            type: "choice",
            question: "Choose the correct comparative:",
            options: ["more easy", "easier", "easyer"],
            answer: "easier"
          },
          {
            type: "matching",
            question: "Match the sentences:",
            pairs: [
              { left: "This test is easier", right: "Esta prova é mais fácil" },
              { left: "She is taller", right: "Ela é mais alta" },
              { left: "It is more beautiful", right: "É mais bonito" }
            ]
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "Choose the correct sentence:",
      options: ["This book is bigger than that book", "This book is big than that book", "This book is more big than that book"],
      answer: "This book is bigger than that book"
    },
    {
      type: "text",
      question: "Translate: Ele é mais novo que o irmão dele.",
      answer: "he is younger than his brother"
    },
    {
      type: "text",
      question: "Translate: difícil",
      answer: "difficult"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "smaller", right: "menor" },
        { left: "taller", right: "mais alto" },
        { left: "more interesting", right: "mais interessante" }
      ]
    }
  ]
},
{
  title: "Lesson 10 - Superlatives",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Superlatives: the biggest, the best, the most beautiful",
        explanation: "Use superlatives to talk about the highest level of something in a group. We usually use the before the superlative.",
        examples: [
          "She is the tallest student in class → Ela é a aluna mais alta da sala",
          "This is the biggest room in the school → Esta é a maior sala da escola",
          "English is the easiest subject for me → Inglês é a matéria mais fácil para mim",
          "This is the most beautiful place → Este é o lugar mais bonito",
          "He is the best player → Ele é o melhor jogador",
          "This is the worst day → Este é o pior dia"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct sentence:",
            options: ["She is tallest student", "She is the tallest student", "She is the more tall student"],
            answer: "She is the tallest student"
          },
          {
            type: "text",
            question: "Translate to English: Este é o lugar mais bonito.",
            answer: "this is the most beautiful place"
          },
          {
            type: "text",
            question: "Translate to English: Ele é o melhor jogador.",
            answer: "he is the best player"
          },
          {
            type: "matching",
            question: "Match the superlatives:",
            pairs: [
              { left: "the biggest", right: "o maior" },
              { left: "the easiest", right: "o mais fácil" },
              { left: "the best", right: "o melhor" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "School subjects and places",
        explanation: "Practice vocabulary to use with superlatives.",
        examples: [
          "subject → matéria",
          "classroom → sala de aula",
          "school → escola",
          "student → aluno",
          "teacher → professor",
          "place → lugar",
          "city → cidade",
          "room → sala / quarto",
          "player → jogador",
          "team → time"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'subject' mean?",
            options: ["matéria", "cidade", "jogador"],
            answer: "matéria"
          },
          {
            type: "text",
            question: "Translate to English: cidade",
            answer: "city"
          },
          {
            type: "matching",
            question: "Match the words:",
            pairs: [
              { left: "student", right: "aluno" },
              { left: "teacher", right: "professor" },
              { left: "team", right: "time" },
              { left: "place", right: "lugar" }
            ]
          }
        ]
      }
    },
    {
      title: "Conversation",
      content: {
        topic: "Talking about favorites",
        explanation: "Practice asking and answering questions about favorites using superlatives.",
        examples: [
          "What is the best movie? → Qual é o melhor filme?",
          "What is the most interesting subject? → Qual é a matéria mais interessante?",
          "Who is the tallest student? → Quem é o aluno mais alto?",
          "This is my favorite place → Este é meu lugar favorito"
        ],
        exercises: [
          {
            type: "choice",
            question: "What question asks about a favorite movie?",
            options: ["What is the best movie?", "Where is the movie?", "Is she watching a movie?"],
            answer: "What is the best movie?"
          },
          {
            type: "text",
            question: "Translate to English: Qual é a melhor matéria?",
            answer: "what is the best subject"
          },
          {
            type: "matching",
            question: "Match the questions:",
            pairs: [
              { left: "What is the best movie?", right: "Qual é o melhor filme?" },
              { left: "Who is the tallest student?", right: "Quem é o aluno mais alto?" },
              { left: "This is my favorite place", right: "Este é meu lugar favorito" }
            ]
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "Choose the correct sentence:",
      options: ["This is the most beautiful place", "This is the beautifulest place", "This is most beautiful place"],
      answer: "This is the most beautiful place"
    },
    {
      type: "text",
      question: "Translate: Ela é a aluna mais alta da sala.",
      answer: "she is the tallest student in class"
    },
    {
      type: "text",
      question: "Translate: matéria",
      answer: "subject"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "the best", right: "o melhor" },
        { left: "the worst", right: "o pior" },
        { left: "the biggest", right: "o maior" }
      ]
    }
  ]
},
{
  title: "Lesson 11 - Some and Any",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Some and Any",
        explanation: "Use some in affirmative sentences and offers. Use any in negative sentences and questions.",
        examples: [
          "I have some books → Eu tenho alguns livros",
          "She has some water → Ela tem um pouco de água",
          "I don't have any money → Eu não tenho nenhum dinheiro",
          "Do you have any questions? → Você tem alguma pergunta?",
          "There are some students in the classroom → Há alguns alunos na sala",
          "There aren't any chairs here → Não há cadeiras aqui"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct sentence:",
            options: ["I have any books", "I have some books", "I don't have some books"],
            answer: "I have some books"
          },
          {
            type: "text",
            question: "Translate to English: Eu não tenho nenhum dinheiro.",
            answer: "i don't have any money"
          },
          {
            type: "text",
            question: "Translate to English: Você tem alguma pergunta?",
            answer: "do you have any questions"
          },
          {
            type: "matching",
            question: "Match the sentences:",
            pairs: [
              { left: "I have some water", right: "Eu tenho um pouco de água" },
              { left: "Do you have any questions?", right: "Você tem alguma pergunta?" },
              { left: "There aren't any chairs", right: "Não há cadeiras" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "Food and objects",
        explanation: "Practice words that can be used with some and any.",
        examples: [
          "water → água",
          "juice → suco",
          "milk → leite",
          "bread → pão",
          "rice → arroz",
          "money → dinheiro",
          "book → livro",
          "chair → cadeira",
          "question → pergunta",
          "student → aluno"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'money' mean?",
            options: ["dinheiro", "pergunta", "cadeira"],
            answer: "dinheiro"
          },
          {
            type: "text",
            question: "Translate to English: pergunta",
            answer: "question"
          },
          {
            type: "matching",
            question: "Match the words:",
            pairs: [
              { left: "water", right: "água" },
              { left: "juice", right: "suco" },
              { left: "chair", right: "cadeira" },
              { left: "rice", right: "arroz" }
            ]
          }
        ]
      }
    },
    {
      title: "Writing Practice",
      content: {
        topic: "Using some and any",
        explanation: "Practice writing affirmative, negative and question sentences.",
        examples: [
          "I have some friends → Eu tenho alguns amigos",
          "I don't have any questions → Eu não tenho nenhuma pergunta",
          "Are there any students here? → Há alunos aqui?"
        ],
        exercises: [
          {
            type: "text",
            question: "Translate to English: Eu tenho alguns amigos.",
            answer: "i have some friends"
          },
          {
            type: "choice",
            question: "Choose the correct question:",
            options: ["Do you have some questions?", "Do you have any questions?", "You have any questions?"],
            answer: "Do you have any questions?"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "some friends", right: "alguns amigos" },
              { left: "any questions", right: "alguma pergunta / nenhuma pergunta" },
              { left: "some water", right: "um pouco de água" }
            ]
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "Choose the correct sentence:",
      options: ["I don't have any questions", "I don't have some questions", "I not have any questions"],
      answer: "I don't have any questions"
    },
    {
      type: "text",
      question: "Translate: Há alguns alunos na sala.",
      answer: "there are some students in the classroom"
    },
    {
      type: "text",
      question: "Translate: Você tem algum livro?",
      answer: "do you have any books"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "money", right: "dinheiro" },
        { left: "question", right: "pergunta" },
        { left: "bread", right: "pão" }
      ]
    }
  ]
},
{
  title: "Lesson 12 - Should and Must",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Advice and obligation",
        explanation: "Use should to give advice. Use must to talk about obligation or something very important.",
        examples: [
          "You should study every day → Você deveria estudar todos os dias",
          "You should drink water → Você deveria beber água",
          "She should practice more → Ela deveria praticar mais",
          "You must do your homework → Você deve fazer sua lição de casa",
          "Students must respect the teacher → Os alunos devem respeitar o professor",
          "You must not use your phone in class → Você não deve usar o celular na aula"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the sentence that gives advice:",
            options: ["You should study", "You studied yesterday", "You are studying now"],
            answer: "You should study"
          },
          {
            type: "text",
            question: "Translate to English: Você deveria beber água.",
            answer: "you should drink water"
          },
          {
            type: "text",
            question: "Translate to English: Você deve fazer sua lição de casa.",
            answer: "you must do your homework"
          },
          {
            type: "matching",
            question: "Match the sentences:",
            pairs: [
              { left: "You should rest", right: "Você deveria descansar" },
              { left: "You must study", right: "Você deve estudar" },
              { left: "You must not use your phone", right: "Você não deve usar o celular" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "Rules and advice",
        explanation: "Practice words and expressions used for school rules and advice.",
        examples: [
          "rule → regra",
          "homework → lição de casa",
          "respect → respeitar",
          "listen → ouvir",
          "practice → praticar",
          "rest → descansar",
          "drink water → beber água",
          "use the phone → usar o celular",
          "arrive on time → chegar no horário",
          "be quiet → ficar em silêncio"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'rule' mean?",
            options: ["regra", "água", "horário"],
            answer: "regra"
          },
          {
            type: "text",
            question: "Translate to English: respeitar",
            answer: "respect"
          },
          {
            type: "matching",
            question: "Match the vocabulary:",
            pairs: [
              { left: "homework", right: "lição de casa" },
              { left: "rest", right: "descansar" },
              { left: "arrive on time", right: "chegar no horário" },
              { left: "be quiet", right: "ficar em silêncio" }
            ]
          }
        ]
      }
    },
    {
      title: "Conversation",
      content: {
        topic: "Giving advice",
        explanation: "Practice short conversations using should and must.",
        examples: [
          "A: I am tired. → Eu estou cansado.",
          "B: You should rest. → Você deveria descansar.",
          "A: I have a test tomorrow. → Eu tenho uma prova amanhã.",
          "B: You must study today. → Você deve estudar hoje.",
          "A: Can I use my phone? → Posso usar meu celular?",
          "B: You must not use your phone in class. → Você não deve usar o celular na aula."
        ],
        exercises: [
          {
            type: "choice",
            question: "What advice can you give to someone tired?",
            options: ["You should rest", "You must run", "You are reading"],
            answer: "You should rest"
          },
          {
            type: "text",
            question: "Translate to English: Você deve estudar hoje.",
            answer: "you must study today"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "I am tired", right: "Eu estou cansado" },
              { left: "You should rest", right: "Você deveria descansar" },
              { left: "You must study today", right: "Você deve estudar hoje" }
            ]
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "Should is used for:",
      options: ["advice", "past actions", "actions happening now"],
      answer: "advice"
    },
    {
      type: "text",
      question: "Translate: Você deveria praticar mais.",
      answer: "you should practice more"
    },
    {
      type: "text",
      question: "Translate: Os alunos devem respeitar o professor.",
      answer: "students must respect the teacher"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "rule", right: "regra" },
        { left: "homework", right: "lição de casa" },
        { left: "drink water", right: "beber água" }
      ]
    }
  ]
}
,
{
  title: "Lesson 13 - Future with Will",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Future with Will",
        explanation: "Use will to talk about future decisions, predictions, promises and spontaneous ideas.",
        examples: [
          "I will study tomorrow → Eu vou estudar amanhã",
          "She will travel next week → Ela vai viajar na próxima semana",
          "They will play soccer on Friday → Eles vão jogar futebol na sexta-feira",
          "I think it will rain → Eu acho que vai chover",
          "We will help you → Nós vamos te ajudar",
          "He will be a great teacher → Ele será um ótimo professor"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct future sentence:",
            options: ["I will study tomorrow", "I studied tomorrow", "I studying tomorrow"],
            answer: "I will study tomorrow"
          },
          {
            type: "text",
            question: "Translate to English: Eu vou estudar amanhã.",
            answer: "i will study tomorrow"
          },
          {
            type: "text",
            question: "Translate to English: Ela vai viajar na próxima semana.",
            answer: "she will travel next week"
          },
          {
            type: "matching",
            question: "Match the sentences:",
            pairs: [
              { left: "I will study", right: "Eu vou estudar" },
              { left: "She will travel", right: "Ela vai viajar" },
              { left: "They will play", right: "Eles vão jogar" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "Future time expressions",
        explanation: "Use future time expressions to say when something will happen.",
        examples: [
          "tomorrow → amanhã",
          "next week → próxima semana",
          "next month → próximo mês",
          "next year → próximo ano",
          "soon → em breve",
          "later → mais tarde",
          "tonight → hoje à noite",
          "on Friday → na sexta-feira",
          "in the future → no futuro",
          "one day → um dia"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'tomorrow' mean?",
            options: ["ontem", "amanhã", "hoje"],
            answer: "amanhã"
          },
          {
            type: "text",
            question: "Translate to English: próxima semana",
            answer: "next week"
          },
          {
            type: "matching",
            question: "Match the expressions:",
            pairs: [
              { left: "soon", right: "em breve" },
              { left: "later", right: "mais tarde" },
              { left: "next month", right: "próximo mês" },
              { left: "one day", right: "um dia" }
            ]
          }
        ]
      }
    },
    {
      title: "Writing Practice",
      content: {
        topic: "Writing about the future",
        explanation: "Practice writing short future sentences using will.",
        examples: [
          "I will learn English → Eu vou aprender inglês",
          "We will have a test next week → Nós teremos uma prova na próxima semana",
          "They will visit their grandmother → Eles vão visitar a avó deles"
        ],
        exercises: [
          {
            type: "text",
            question: "Translate to English: Nós teremos uma prova na próxima semana.",
            answer: "we will have a test next week"
          },
          {
            type: "choice",
            question: "Choose the correct sentence:",
            options: ["They will visit their grandmother", "They visited next week", "They will visited grandmother"],
            answer: "They will visit their grandmother"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "I will learn English", right: "Eu vou aprender inglês" },
              { left: "We will help you", right: "Nós vamos te ajudar" },
              { left: "It will rain", right: "Vai chover" }
            ]
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "Choose the correct sentence:",
      options: ["I will travel tomorrow", "I travel yesterday", "I will traveled tomorrow"],
      answer: "I will travel tomorrow"
    },
    {
      type: "text",
      question: "Translate: Eu vou te ajudar.",
      answer: "i will help you"
    },
    {
      type: "text",
      question: "Translate: próximo mês",
      answer: "next month"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "tomorrow", right: "amanhã" },
        { left: "next year", right: "próximo ano" },
        { left: "soon", right: "em breve" }
      ]
    }
  ]
},
{
  title: "Lesson 14 - Going To",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Future with Going To",
        explanation: "Use going to to talk about plans and intentions for the future.",
        examples: [
          "I am going to study tonight → Eu vou estudar hoje à noite",
          "She is going to visit her friend → Ela vai visitar a amiga dela",
          "They are going to play soccer → Eles vão jogar futebol",
          "We are going to watch a movie → Nós vamos assistir a um filme",
          "He is going to buy a new book → Ele vai comprar um livro novo",
          "Are you going to travel? → Você vai viajar?"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct sentence:",
            options: ["I am going to study", "I going study", "I am go to study"],
            answer: "I am going to study"
          },
          {
            type: "text",
            question: "Translate to English: Ela vai visitar a amiga dela.",
            answer: "she is going to visit her friend"
          },
          {
            type: "text",
            question: "Translate to English: Nós vamos assistir a um filme.",
            answer: "we are going to watch a movie"
          },
          {
            type: "matching",
            question: "Match the sentences:",
            pairs: [
              { left: "I am going to study", right: "Eu vou estudar" },
              { left: "She is going to visit", right: "Ela vai visitar" },
              { left: "They are going to play", right: "Eles vão jogar" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "Plans and activities",
        explanation: "Practice vocabulary related to plans and future activities.",
        examples: [
          "study → estudar",
          "travel → viajar",
          "visit → visitar",
          "watch → assistir",
          "buy → comprar",
          "sell → vender",
          "cook → cozinhar",
          "clean → limpar",
          "play soccer → jogar futebol",
          "go out → sair"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'buy' mean?",
            options: ["vender", "comprar", "limpar"],
            answer: "comprar"
          },
          {
            type: "text",
            question: "Translate to English: cozinhar",
            answer: "cook"
          },
          {
            type: "matching",
            question: "Match the activities:",
            pairs: [
              { left: "travel", right: "viajar" },
              { left: "watch", right: "assistir" },
              { left: "clean", right: "limpar" },
              { left: "go out", right: "sair" }
            ]
          }
        ]
      }
    },
    {
      title: "Conversation",
      content: {
        topic: "Talking about plans",
        explanation: "Practice short conversations using going to.",
        examples: [
          "A: What are you going to do tonight? → O que você vai fazer hoje à noite?",
          "B: I am going to study. → Eu vou estudar.",
          "A: Are you going to travel? → Você vai viajar?",
          "B: No, I am going to stay home. → Não, eu vou ficar em casa."
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the question about plans:",
            options: ["What are you going to do tonight?", "What did you do yesterday?", "Where are you now?"],
            answer: "What are you going to do tonight?"
          },
          {
            type: "text",
            question: "Translate to English: Você vai viajar?",
            answer: "are you going to travel"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "I am going to stay home", right: "Eu vou ficar em casa" },
              { left: "Are you going to travel?", right: "Você vai viajar?" },
              { left: "What are you going to do?", right: "O que você vai fazer?" }
            ]
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "Going to is usually used for:",
      options: ["plans and intentions", "past actions", "daily routine only"],
      answer: "plans and intentions"
    },
    {
      type: "text",
      question: "Translate: Eu vou estudar hoje à noite.",
      answer: "i am going to study tonight"
    },
    {
      type: "text",
      question: "Translate: Eles vão jogar futebol.",
      answer: "they are going to play soccer"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "buy", right: "comprar" },
        { left: "sell", right: "vender" },
        { left: "go out", right: "sair" }
      ]
    }
  ]
},
{
  title: "Lesson 15 - Present Perfect",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Present Perfect: have / has + past participle",
        explanation: "Use the present perfect to talk about experiences, recent actions or actions connected to the present.",
        examples: [
          "I have visited São Paulo → Eu visitei São Paulo / Eu já visitei São Paulo",
          "She has studied English → Ela estudou inglês / Ela tem estudado inglês",
          "They have finished the activity → Eles terminaram a atividade",
          "He has eaten breakfast → Ele tomou café da manhã",
          "We have watched this movie → Nós assistimos a este filme",
          "Have you ever traveled by plane? → Você já viajou de avião?"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct present perfect sentence:",
            options: ["She has studied English", "She have studied English", "She has study English"],
            answer: "She has studied English"
          },
          {
            type: "text",
            question: "Translate to English: Eu já visitei São Paulo.",
            answer: "i have visited são paulo"
          },
          {
            type: "text",
            question: "Translate to English: Eles terminaram a atividade.",
            answer: "they have finished the activity"
          },
          {
            type: "matching",
            question: "Match the sentences:",
            pairs: [
              { left: "I have visited", right: "Eu visitei / Eu já visitei" },
              { left: "She has studied", right: "Ela estudou / Ela tem estudado" },
              { left: "They have finished", right: "Eles terminaram" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "Past participles",
        explanation: "Practice common past participles used with present perfect.",
        examples: [
          "visited → visitado",
          "studied → estudado",
          "finished → terminado",
          "watched → assistido",
          "played → jogado",
          "eaten → comido",
          "seen → visto",
          "been → estado / sido",
          "done → feito",
          "written → escrito"
        ],
        exercises: [
          {
            type: "choice",
            question: "What is the past participle of eat?",
            options: ["eated", "ate", "eaten"],
            answer: "eaten"
          },
          {
            type: "text",
            question: "Translate to English: visto",
            answer: "seen"
          },
          {
            type: "matching",
            question: "Match the past participles:",
            pairs: [
              { left: "done", right: "feito" },
              { left: "written", right: "escrito" },
              { left: "finished", right: "terminado" },
              { left: "been", right: "estado / sido" }
            ]
          }
        ]
      }
    },
    {
      title: "Conversation",
      content: {
        topic: "Talking about experiences",
        explanation: "Use present perfect to ask and answer about life experiences.",
        examples: [
          "Have you ever traveled by plane? → Você já viajou de avião?",
          "Yes, I have. → Sim, já.",
          "No, I haven't. → Não, nunca.",
          "I have never been to Canada → Eu nunca estive no Canadá",
          "She has already finished the homework → Ela já terminou a lição de casa"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct answer:",
            options: ["Yes, I have", "Yes, I has", "Yes, I did have"],
            answer: "Yes, I have"
          },
          {
            type: "text",
            question: "Translate to English: Eu nunca estive no Canadá.",
            answer: "i have never been to canada"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "Have you ever traveled?", right: "Você já viajou?" },
              { left: "Yes, I have", right: "Sim, já" },
              { left: "No, I haven't", right: "Não, nunca" }
            ]
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "Choose the correct sentence:",
      options: ["I have seen this movie", "I has seen this movie", "I have saw this movie"],
      answer: "I have seen this movie"
    },
    {
      type: "text",
      question: "Translate: Ela já terminou a lição de casa.",
      answer: "she has already finished the homework"
    },
    {
      type: "text",
      question: "Translate: Você já viajou de avião?",
      answer: "have you ever traveled by plane"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "seen", right: "visto" },
        { left: "done", right: "feito" },
        { left: "written", right: "escrito" }
      ]
    }
  ]
},
{
  title: "Lesson 16 - Past Continuous",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Past Continuous: was / were + verb -ing",
        explanation: "Use past continuous to talk about actions that were happening at a specific moment in the past.",
        examples: [
          "I was studying yesterday at 8 p.m. → Eu estava estudando ontem às 20h",
          "She was watching TV → Ela estava assistindo TV",
          "They were playing soccer → Eles estavam jogando futebol",
          "We were talking to the teacher → Nós estávamos conversando com a professora",
          "He was sleeping when I called → Ele estava dormindo quando eu liguei",
          "Were you doing your homework? → Você estava fazendo sua lição de casa?"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct past continuous sentence:",
            options: ["She was watching TV", "She were watching TV", "She was watched TV"],
            answer: "She was watching TV"
          },
          {
            type: "text",
            question: "Translate to English: Eu estava estudando ontem.",
            answer: "i was studying yesterday"
          },
          {
            type: "text",
            question: "Translate to English: Eles estavam jogando futebol.",
            answer: "they were playing soccer"
          },
          {
            type: "matching",
            question: "Match the sentences:",
            pairs: [
              { left: "I was studying", right: "Eu estava estudando" },
              { left: "She was watching TV", right: "Ela estava assistindo TV" },
              { left: "They were playing", right: "Eles estavam jogando" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "Actions in progress",
        explanation: "Practice action verbs commonly used with past continuous.",
        examples: [
          "studying → estudando",
          "watching → assistindo",
          "playing → jogando",
          "talking → conversando",
          "sleeping → dormindo",
          "eating → comendo",
          "reading → lendo",
          "writing → escrevendo",
          "listening → ouvindo",
          "walking → andando"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'sleeping' mean?",
            options: ["dormindo", "lendo", "andando"],
            answer: "dormindo"
          },
          {
            type: "text",
            question: "Translate to English: escrevendo",
            answer: "writing"
          },
          {
            type: "matching",
            question: "Match the actions:",
            pairs: [
              { left: "reading", right: "lendo" },
              { left: "walking", right: "andando" },
              { left: "listening", right: "ouvindo" },
              { left: "eating", right: "comendo" }
            ]
          }
        ]
      }
    },
    {
      title: "Writing Practice",
      content: {
        topic: "Writing past continuous sentences",
        explanation: "Practice writing sentences about actions that were happening in the past.",
        examples: [
          "I was reading a book → Eu estava lendo um livro",
          "They were listening to music → Eles estavam ouvindo música",
          "We were eating dinner → Nós estávamos jantando"
        ],
        exercises: [
          {
            type: "text",
            question: "Translate to English: Eu estava lendo um livro.",
            answer: "i was reading a book"
          },
          {
            type: "choice",
            question: "Choose the correct sentence:",
            options: ["They were listening to music", "They was listening to music", "They were listened to music"],
            answer: "They were listening to music"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "We were eating dinner", right: "Nós estávamos jantando" },
              { left: "He was sleeping", right: "Ele estava dormindo" },
              { left: "I was writing", right: "Eu estava escrevendo" }
            ]
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "Past continuous is formed with:",
      options: ["was/were + verb-ing", "will + verb", "have/has + participle"],
      answer: "was/were + verb-ing"
    },
    {
      type: "text",
      question: "Translate: Ela estava assistindo TV.",
      answer: "she was watching tv"
    },
    {
      type: "text",
      question: "Translate: Nós estávamos conversando com a professora.",
      answer: "we were talking to the teacher"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "studying", right: "estudando" },
        { left: "sleeping", right: "dormindo" },
        { left: "writing", right: "escrevendo" }
      ]
    }
  ]
}
,
{
  title: "Lesson 17 - First Conditional",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "First Conditional: If + Simple Present, Will + Verb",
        explanation: "Use the first conditional to talk about real possibilities in the future.",
        examples: [
          "If I study, I will pass the test → Se eu estudar, eu vou passar na prova",
          "If it rains, we will stay home → Se chover, nós vamos ficar em casa",
          "If she practices, she will improve → Se ela praticar, ela vai melhorar",
          "If they arrive early, we will start the class → Se eles chegarem cedo, nós vamos começar a aula"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct first conditional sentence:",
            options: ["If I study, I will pass", "If I will study, I pass", "If I studied, I will pass"],
            answer: "If I study, I will pass"
          },
          {
            type: "text",
            question: "Translate to English: Se chover, nós vamos ficar em casa.",
            answer: "if it rains, we will stay home"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "If I study", right: "Se eu estudar" },
              { left: "I will pass", right: "Eu vou passar" },
              { left: "If it rains", right: "Se chover" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "Future possibilities",
        explanation: "Practice words used to talk about future situations.",
        examples: [
          "test → prova",
          "rain → chover",
          "pass → passar",
          "fail → reprovar / falhar",
          "improve → melhorar",
          "arrive → chegar",
          "early → cedo",
          "late → atrasado",
          "start → começar",
          "stay home → ficar em casa"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'improve' mean?",
            options: ["melhorar", "começar", "chover"],
            answer: "melhorar"
          },
          {
            type: "text",
            question: "Translate to English: chegar cedo",
            answer: "arrive early"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "test", right: "prova" },
              { left: "rain", right: "chover" },
              { left: "stay home", right: "ficar em casa" }
            ]
          }
        ]
      }
    },
    {
      title: "Writing Practice",
      content: {
        topic: "Writing first conditional sentences",
        explanation: "Write complete sentences using if and will.",
        examples: [
          "If I have time, I will study → Se eu tiver tempo, eu vou estudar",
          "If she calls me, I will answer → Se ela me ligar, eu vou atender",
          "If we finish early, we will watch a movie → Se terminarmos cedo, vamos assistir a um filme"
        ],
        exercises: [
          {
            type: "text",
            question: "Translate to English: Se eu tiver tempo, eu vou estudar.",
            answer: "if i have time, i will study"
          },
          {
            type: "choice",
            question: "Choose the correct sentence:",
            options: ["If she calls me, I will answer", "If she will call me, I answer", "If she called me, I will answer"],
            answer: "If she calls me, I will answer"
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "First conditional talks about:",
      options: ["real future possibilities", "finished past actions", "daily routine"],
      answer: "real future possibilities"
    },
    {
      type: "text",
      question: "Translate: Se eu estudar, eu vou passar na prova.",
      answer: "if i study, i will pass the test"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "early", right: "cedo" },
        { left: "late", right: "atrasado" },
        { left: "improve", right: "melhorar" }
      ]
    }
  ]
},
{
  title: "Lesson 18 - Second Conditional",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Second Conditional: If + Simple Past, Would + Verb",
        explanation: "Use the second conditional to talk about imaginary or unlikely situations.",
        examples: [
          "If I had money, I would travel → Se eu tivesse dinheiro, eu viajaria",
          "If she studied more, she would improve → Se ela estudasse mais, ela melhoraria",
          "If I were you, I would talk to the teacher → Se eu fosse você, eu falaria com o professor",
          "If they lived here, they would study with us → Se eles morassem aqui, eles estudariam conosco"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct second conditional sentence:",
            options: ["If I had money, I would travel", "If I have money, I would travel", "If I had money, I will travel"],
            answer: "If I had money, I would travel"
          },
          {
            type: "text",
            question: "Translate to English: Se eu fosse você, eu falaria com o professor.",
            answer: "if i were you, i would talk to the teacher"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "If I had money", right: "Se eu tivesse dinheiro" },
              { left: "I would travel", right: "Eu viajaria" },
              { left: "If I were you", right: "Se eu fosse você" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "Imaginary situations",
        explanation: "Practice vocabulary used in imaginary situations.",
        examples: [
          "money → dinheiro",
          "dream → sonho",
          "travel → viajar",
          "country → país",
          "city → cidade",
          "teacher → professor",
          "problem → problema",
          "solution → solução",
          "opportunity → oportunidade",
          "choice → escolha"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'choice' mean?",
            options: ["escolha", "dinheiro", "cidade"],
            answer: "escolha"
          },
          {
            type: "text",
            question: "Translate to English: oportunidade",
            answer: "opportunity"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "dream", right: "sonho" },
              { left: "country", right: "país" },
              { left: "solution", right: "solução" }
            ]
          }
        ]
      }
    },
    {
      title: "Conversation",
      content: {
        topic: "What would you do?",
        explanation: "Practice questions and answers using would.",
        examples: [
          "What would you do? → O que você faria?",
          "I would study more → Eu estudaria mais",
          "Would you travel? → Você viajaria?",
          "Yes, I would → Sim, eu viajaria"
        ],
        exercises: [
          {
            type: "choice",
            question: "How do you ask 'O que você faria?'",
            options: ["What would you do?", "What will you do?", "What did you do?"],
            answer: "What would you do?"
          },
          {
            type: "text",
            question: "Translate to English: Eu estudaria mais.",
            answer: "i would study more"
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "Second conditional is used for:",
      options: ["imaginary situations", "facts only", "actions happening now"],
      answer: "imaginary situations"
    },
    {
      type: "text",
      question: "Translate: Se eu tivesse dinheiro, eu viajaria.",
      answer: "if i had money, i would travel"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "money", right: "dinheiro" },
        { left: "dream", right: "sonho" },
        { left: "opportunity", right: "oportunidade" }
      ]
    }
  ]
},
{
  title: "Lesson 19 - Gerund and Infinitive",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Gerund and Infinitive",
        explanation: "Some verbs are followed by -ing, and some verbs are followed by to + verb.",
        examples: [
          "I enjoy studying English → Eu gosto de estudar inglês",
          "She likes dancing → Ela gosta de dançar",
          "I want to travel → Eu quero viajar",
          "He needs to study → Ele precisa estudar",
          "They decided to go home → Eles decidiram ir para casa",
          "We love watching movies → Nós amamos assistir filmes"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct sentence:",
            options: ["I enjoy studying English", "I enjoy to study English", "I enjoy study English"],
            answer: "I enjoy studying English"
          },
          {
            type: "text",
            question: "Translate to English: Eu quero viajar.",
            answer: "i want to travel"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "enjoy studying", right: "gostar de estudar" },
              { left: "want to travel", right: "querer viajar" },
              { left: "need to study", right: "precisar estudar" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "Activities and preferences",
        explanation: "Practice activities used with like, love, enjoy, want and need.",
        examples: [
          "studying → estudando",
          "dancing → dançando",
          "singing → cantando",
          "traveling → viajando",
          "watching movies → assistindo filmes",
          "playing games → jogando jogos",
          "reading books → lendo livros",
          "to learn → aprender",
          "to practice → praticar",
          "to improve → melhorar"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'reading books' mean?",
            options: ["lendo livros", "assistindo filmes", "jogando jogos"],
            answer: "lendo livros"
          },
          {
            type: "text",
            question: "Translate to English: praticar",
            answer: "practice"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "dancing", right: "dançando" },
              { left: "singing", right: "cantando" },
              { left: "traveling", right: "viajando" }
            ]
          }
        ]
      }
    },
    {
      title: "Writing Practice",
      content: {
        topic: "Writing about likes and plans",
        explanation: "Use gerund after enjoy/love/like and infinitive after want/need/decide.",
        examples: [
          "I like learning new words → Eu gosto de aprender palavras novas",
          "She wants to improve her English → Ela quer melhorar o inglês dela",
          "They need to practice more → Eles precisam praticar mais"
        ],
        exercises: [
          {
            type: "text",
            question: "Translate to English: Ela quer melhorar o inglês dela.",
            answer: "she wants to improve her english"
          },
          {
            type: "choice",
            question: "Choose the correct sentence:",
            options: ["They need to practice more", "They need practicing more", "They need practice more"],
            answer: "They need to practice more"
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "After enjoy, we usually use:",
      options: ["verb-ing", "to + verb", "will + verb"],
      answer: "verb-ing"
    },
    {
      type: "text",
      question: "Translate: Eu gosto de estudar inglês.",
      answer: "i enjoy studying english"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "to improve", right: "melhorar" },
        { left: "playing games", right: "jogando jogos" },
        { left: "reading books", right: "lendo livros" }
      ]
    }
  ]
},
{
  title: "Lesson 20 - Too and Enough",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Too and Enough",
        explanation: "Use too to say something is more than necessary. Use enough to say something is sufficient.",
        examples: [
          "This bag is too heavy → Esta bolsa é pesada demais",
          "The test is too difficult → A prova é difícil demais",
          "She is old enough to drive → Ela tem idade suficiente para dirigir",
          "I am not tall enough → Eu não sou alto o suficiente",
          "This room is big enough → Esta sala é grande o suficiente",
          "It is too late to go out → Está tarde demais para sair"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct sentence:",
            options: ["This bag is too heavy", "This bag is enough heavy", "This bag too is heavy"],
            answer: "This bag is too heavy"
          },
          {
            type: "text",
            question: "Translate to English: Eu não sou alto o suficiente.",
            answer: "i am not tall enough"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "too heavy", right: "pesado demais" },
              { left: "big enough", right: "grande o suficiente" },
              { left: "too late", right: "tarde demais" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "Adjectives with too and enough",
        explanation: "Practice adjectives used to describe intensity and sufficiency.",
        examples: [
          "heavy → pesado",
          "light → leve",
          "difficult → difícil",
          "easy → fácil",
          "old → velho / idade suficiente",
          "young → jovem",
          "tall → alto",
          "short → baixo",
          "big → grande",
          "small → pequeno"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'heavy' mean?",
            options: ["pesado", "leve", "pequeno"],
            answer: "pesado"
          },
          {
            type: "text",
            question: "Translate to English: fácil",
            answer: "easy"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "light", right: "leve" },
              { left: "difficult", right: "difícil" },
              { left: "young", right: "jovem" }
            ]
          }
        ]
      }
    },
    {
      title: "Writing Practice",
      content: {
        topic: "Writing with too and enough",
        explanation: "Practice describing situations using too and enough.",
        examples: [
          "The coffee is too hot → O café está quente demais",
          "The chair is not comfortable enough → A cadeira não é confortável o suficiente",
          "The activity is easy enough → A atividade é fácil o suficiente"
        ],
        exercises: [
          {
            type: "text",
            question: "Translate to English: O café está quente demais.",
            answer: "the coffee is too hot"
          },
          {
            type: "choice",
            question: "Choose the correct sentence:",
            options: ["The activity is easy enough", "The activity is enough easy", "The activity enough is easy"],
            answer: "The activity is easy enough"
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "Too means:",
      options: ["demais", "suficiente", "nunca"],
      answer: "demais"
    },
    {
      type: "text",
      question: "Translate: Esta sala é grande o suficiente.",
      answer: "this room is big enough"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "heavy", right: "pesado" },
        { left: "easy", right: "fácil" },
        { left: "small", right: "pequeno" }
      ]
    }
  ]
},
{
  title: "Lesson 21 - Relative Pronouns",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Who, Which and That",
        explanation: "Use who for people, which for things and animals, and that for people, things or animals.",
        examples: [
          "She is the teacher who helped me → Ela é a professora que me ajudou",
          "This is the book which I bought → Este é o livro que eu comprei",
          "He is the student that won the game → Ele é o aluno que venceu o jogo",
          "This is the movie that I watched yesterday → Este é o filme que eu assisti ontem"
        ],
        exercises: [
          {
            type: "choice",
            question: "Use who for:",
            options: ["people", "places only", "objects only"],
            answer: "people"
          },
          {
            type: "text",
            question: "Translate to English: Ela é a professora que me ajudou.",
            answer: "she is the teacher who helped me"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "who", right: "pessoas" },
              { left: "which", right: "coisas / animais" },
              { left: "that", right: "pessoas, coisas ou animais" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "People and objects",
        explanation: "Practice nouns used with relative pronouns.",
        examples: [
          "teacher → professor",
          "student → aluno",
          "friend → amigo",
          "person → pessoa",
          "book → livro",
          "movie → filme",
          "game → jogo",
          "song → música",
          "place → lugar",
          "animal → animal"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'person' mean?",
            options: ["pessoa", "música", "livro"],
            answer: "pessoa"
          },
          {
            type: "text",
            question: "Translate to English: filme",
            answer: "movie"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "song", right: "música" },
              { left: "place", right: "lugar" },
              { left: "friend", right: "amigo" }
            ]
          }
        ]
      }
    },
    {
      title: "Writing Practice",
      content: {
        topic: "Describing people and things",
        explanation: "Use relative pronouns to give more information.",
        examples: [
          "This is the friend who studies with me → Este é o amigo que estuda comigo",
          "This is the song that I like → Esta é a música que eu gosto",
          "This is the place which I visited → Este é o lugar que eu visitei"
        ],
        exercises: [
          {
            type: "text",
            question: "Translate to English: Esta é a música que eu gosto.",
            answer: "this is the song that i like"
          },
          {
            type: "choice",
            question: "Choose the correct sentence:",
            options: ["This is the friend who studies with me", "This is the friend which studies with me", "This is the friend where studies with me"],
            answer: "This is the friend who studies with me"
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "Which relative pronoun is best for people?",
      options: ["who", "which", "when"],
      answer: "who"
    },
    {
      type: "text",
      question: "Translate: Este é o livro que eu comprei.",
      answer: "this is the book which i bought"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "teacher", right: "professor" },
        { left: "student", right: "aluno" },
        { left: "movie", right: "filme" }
      ]
    }
  ]
},
{
  title: "Lesson 22 - Phrasal Verbs",
  modules: [
    {
      title: "Verbs and Grammar",
      content: {
        topic: "Common Phrasal Verbs",
        explanation: "Phrasal verbs are verbs combined with small words like up, on, off, in or out. The meaning can change.",
        examples: [
          "Turn on the TV → Ligue a TV",
          "Turn off the lights → Desligue as luzes",
          "Wake up early → Acordar cedo",
          "Get up at seven → Levantar às sete",
          "Go out with friends → Sair com amigos",
          "Look for my book → Procurar meu livro"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'turn on' mean?",
            options: ["ligar", "desligar", "procurar"],
            answer: "ligar"
          },
          {
            type: "text",
            question: "Translate to English: Desligue as luzes.",
            answer: "turn off the lights"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "wake up", right: "acordar" },
              { left: "get up", right: "levantar" },
              { left: "look for", right: "procurar" }
            ]
          }
        ]
      }
    },
    {
      title: "Vocabulary",
      content: {
        topic: "Daily phrasal verbs",
        explanation: "Practice phrasal verbs used in daily situations.",
        examples: [
          "turn on → ligar",
          "turn off → desligar",
          "wake up → acordar",
          "get up → levantar",
          "go out → sair",
          "come back → voltar",
          "look for → procurar",
          "put on → vestir / colocar",
          "take off → tirar",
          "sit down → sentar"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'come back' mean?",
            options: ["voltar", "sair", "sentar"],
            answer: "voltar"
          },
          {
            type: "text",
            question: "Translate to English: sentar",
            answer: "sit down"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "put on", right: "vestir / colocar" },
              { left: "take off", right: "tirar" },
              { left: "go out", right: "sair" }
            ]
          }
        ]
      }
    },
    {
      title: "Conversation",
      content: {
        topic: "Using phrasal verbs",
        explanation: "Practice short commands and everyday phrases.",
        examples: [
          "Please, sit down → Por favor, sente-se",
          "Turn off your phone → Desligue seu celular",
          "I wake up at seven → Eu acordo às sete",
          "I am looking for my notebook → Estou procurando meu caderno"
        ],
        exercises: [
          {
            type: "text",
            question: "Translate to English: Eu acordo às sete.",
            answer: "i wake up at seven"
          },
          {
            type: "choice",
            question: "Choose the correct command:",
            options: ["Please, sit down", "Please, sit up down", "Please, down sit"],
            answer: "Please, sit down"
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "What does 'turn off' mean?",
      options: ["desligar", "ligar", "levantar"],
      answer: "desligar"
    },
    {
      type: "text",
      question: "Translate: Estou procurando meu caderno.",
      answer: "i am looking for my notebook"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "wake up", right: "acordar" },
        { left: "get up", right: "levantar" },
        { left: "sit down", right: "sentar" }
      ]
    }
  ]
},
{
  title: "Lesson 23 - Reading and Conversation Review",
  modules: [
    {
      title: "Reading Practice",
      content: {
        topic: "A special school project",
        explanation: "Read the text and practice comprehension.",
        examples: [
          "Last month, the students started a special English project at school. They created posters, practiced conversation and presented their ideas to the class.",
          "Some students talked about their dreams. Others talked about technology, sports and music.",
          "The teacher said that everyone did a great job because they tried to speak English with confidence."
        ],
        exercises: [
          {
            type: "choice",
            question: "What did the students create?",
            options: ["posters", "cars", "houses"],
            answer: "posters"
          },
          {
            type: "choice",
            question: "What language did they practice?",
            options: ["English", "French", "Spanish only"],
            answer: "English"
          },
          {
            type: "text",
            question: "Translate to English: Eles apresentaram suas ideias.",
            answer: "they presented their ideas"
          }
        ]
      }
    },
    {
      title: "Conversation",
      content: {
        topic: "Talking about projects",
        explanation: "Practice questions and answers about projects, school and learning.",
        examples: [
          "What was your project about? → Sobre o que era o seu projeto?",
          "My project was about technology → Meu projeto era sobre tecnologia",
          "Did you speak English? → Você falou inglês?",
          "Yes, I tried my best → Sim, eu dei o meu melhor"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the correct question:",
            options: ["What was your project about?", "Where your project was?", "What did your project about?"],
            answer: "What was your project about?"
          },
          {
            type: "text",
            question: "Translate to English: Eu dei o meu melhor.",
            answer: "i tried my best"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "project", right: "projeto" },
              { left: "confidence", right: "confiança" },
              { left: "presented", right: "apresentaram" }
            ]
          }
        ]
      }
    },
    {
      title: "Review",
      content: {
        topic: "Mixed grammar review",
        explanation: "Review different grammar topics from Book Two.",
        examples: [
          "I have studied English → Present Perfect",
          "If I study, I will pass → First Conditional",
          "She was watching TV → Past Continuous",
          "I want to travel → Infinitive"
        ],
        exercises: [
          {
            type: "choice",
            question: "Which sentence is present perfect?",
            options: ["I have studied English", "I studied yesterday", "I will study tomorrow"],
            answer: "I have studied English"
          },
          {
            type: "choice",
            question: "Which sentence is past continuous?",
            options: ["She was watching TV", "She watches TV", "She will watch TV"],
            answer: "She was watching TV"
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "The text is about:",
      options: ["a school project", "a restaurant", "a soccer game only"],
      answer: "a school project"
    },
    {
      type: "text",
      question: "Translate: Meu projeto era sobre tecnologia.",
      answer: "my project was about technology"
    },
    {
      type: "matching",
      question: "Match:",
      pairs: [
        { left: "confidence", right: "confiança" },
        { left: "technology", right: "tecnologia" },
        { left: "music", right: "música" }
      ]
    }
  ]
},
{
  title: "Lesson 24 - Final Review and Test",
  modules: [
    {
      title: "Final Grammar Review",
      content: {
        topic: "Book Two Review",
        explanation: "Review the most important grammar topics from Book Two.",
        examples: [
          "Comparative: This book is bigger than that book → Este livro é maior que aquele livro",
          "Superlative: She is the tallest student → Ela é a aluna mais alta",
          "Future: I will study tomorrow → Eu vou estudar amanhã",
          "Going to: I am going to travel → Eu vou viajar",
          "Present Perfect: I have seen this movie → Eu já vi este filme",
          "Conditional: If I study, I will pass → Se eu estudar, eu vou passar"
        ],
        exercises: [
          {
            type: "choice",
            question: "Choose the comparative sentence:",
            options: ["This book is bigger than that book", "This is the biggest book", "I will read this book"],
            answer: "This book is bigger than that book"
          },
          {
            type: "choice",
            question: "Choose the future with going to:",
            options: ["I am going to travel", "I traveled yesterday", "I have traveled"],
            answer: "I am going to travel"
          },
          {
            type: "text",
            question: "Translate to English: Eu já vi este filme.",
            answer: "i have seen this movie"
          }
        ]
      }
    },
    {
      title: "Vocabulary Review",
      content: {
        topic: "Book Two vocabulary",
        explanation: "Review important vocabulary from the book.",
        examples: [
          "future → futuro",
          "teacher → professor",
          "student → aluno",
          "homework → lição de casa",
          "opportunity → oportunidade",
          "dream → sonho",
          "project → projeto",
          "confidence → confiança",
          "problem → problema",
          "solution → solução"
        ],
        exercises: [
          {
            type: "choice",
            question: "What does 'confidence' mean?",
            options: ["confiança", "problema", "solução"],
            answer: "confiança"
          },
          {
            type: "text",
            question: "Translate to English: oportunidade",
            answer: "opportunity"
          },
          {
            type: "matching",
            question: "Match:",
            pairs: [
              { left: "dream", right: "sonho" },
              { left: "homework", right: "lição de casa" },
              { left: "solution", right: "solução" }
            ]
          }
        ]
      }
    },
    {
      title: "Final Writing",
      content: {
        topic: "Writing about yourself",
        explanation: "Write sentences about your plans, experiences and dreams.",
        examples: [
          "I have studied English for many months → Eu estudo inglês há muitos meses",
          "I am going to improve my speaking → Eu vou melhorar minha fala",
          "If I practice, I will learn more → Se eu praticar, eu vou aprender mais",
          "My dream is to speak English with confidence → Meu sonho é falar inglês com confiança"
        ],
        exercises: [
          {
            type: "text",
            question: "Translate to English: Meu sonho é falar inglês com confiança.",
            answer: "my dream is to speak english with confidence"
          },
          {
            type: "text",
            question: "Translate to English: Se eu praticar, eu vou aprender mais.",
            answer: "if i practice, i will learn more"
          }
        ]
      }
    }
  ],
  test: [
    {
      type: "choice",
      question: "Choose the correct present perfect sentence:",
      options: ["I have studied English", "I has studied English", "I have study English"],
      answer: "I have studied English"
    },
    {
      type: "choice",
      question: "Choose the correct first conditional sentence:",
      options: ["If I study, I will pass", "If I will study, I pass", "If I studied, I will pass"],
      answer: "If I study, I will pass"
    },
    {
      type: "choice",
      question: "Choose the correct sentence with too:",
      options: ["The test is too difficult", "The test is enough difficult", "The test too difficult is"],
      answer: "The test is too difficult"
    },
    {
      type: "text",
      question: "Translate: Eu vou melhorar minha fala.",
      answer: "i am going to improve my speaking"
    },
    {
      type: "text",
      question: "Translate: Se eu praticar, eu vou aprender mais.",
      answer: "if i practice, i will learn more"
    },
    {
      type: "matching",
      question: "Final vocabulary review:",
      pairs: [
        { left: "future", right: "futuro" },
        { left: "confidence", right: "confiança" },
        { left: "opportunity", right: "oportunidade" },
        { left: "solution", right: "solução" }
      ]
    }
  ]
}
];


let currentLesson = 0;
let currentModule = 0;
let isTestMode = false;
let currentBookKey = "bookOne";
let currentBookTitle = "Book One";
let currentUser = JSON.parse(localStorage.getItem("fydCurrentUser")) || null;

let progress = {
  completedModules: {},
  completedLessons: {}
};

function getUsers() {
  return JSON.parse(localStorage.getItem("fydUsers")) || [];
}

function saveUsers(users) {
  localStorage.setItem("fydUsers", JSON.stringify(users));
}

function normalizeEmail(email) {
  return String(email).trim().toLowerCase();
}

function getProgressKey() {
  if (!currentUser || !currentUser.email) return "fydProgress_guest";
  return "fydProgress_" + currentBookKey + "_" + normalizeEmail(currentUser.email);
}

function loadProgress() {
  progress = JSON.parse(localStorage.getItem(getProgressKey())) || {
    completedModules: {},
    completedLessons: {}
  };
}

function showLoginTab() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("loginTabBtn").classList.add("active");
  document.getElementById("registerTabBtn").classList.remove("active");
  setLoginMessage("");
}

function showRegisterTab() {
  document.getElementById("registerForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerTabBtn").classList.add("active");
  document.getElementById("loginTabBtn").classList.remove("active");
  setLoginMessage("");
}

function setLoginMessage(message, type = "") {
  const element = document.getElementById("loginMessage");
  element.textContent = message;
  element.className = "login-message";
  if (type) element.classList.add(type);
}

function registerUser() {
  const name = document.getElementById("registerName").value.trim();
  const email = normalizeEmail(document.getElementById("registerEmail").value);
  const password = document.getElementById("registerPassword").value.trim();

  if (!name || !email || !password) {
    setLoginMessage("Preencha nome, e-mail e senha para criar a conta.", "error");
    return;
  }

  if (password.length < 4) {
    setLoginMessage("Crie uma senha com pelo menos 4 caracteres.", "error");
    return;
  }

  const users = getUsers();
  const userExists = users.some(user => normalizeEmail(user.email) === email);

  if (userExists) {
    setLoginMessage("Este e-mail já possui cadastro. Use a aba Entrar.", "error");
    return;
  }

  const newUser = {
    name: name,
    email: email,
    password: password,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);

  currentUser = { name: newUser.name, email: newUser.email };
  localStorage.setItem("fydCurrentUser", JSON.stringify(currentUser));
  loadProgress();
  openHomeAfterLogin();
}

function loginUser() {
  const email = normalizeEmail(document.getElementById("loginEmail").value);
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    setLoginMessage("Digite e-mail e senha para entrar.", "error");
    return;
  }

  const users = getUsers();
  const user = users.find(item => normalizeEmail(item.email) === email && item.password === password);

  if (!user) {
    setLoginMessage("E-mail ou senha incorretos. Verifique os dados ou crie uma conta.", "error");
    return;
  }

  currentUser = { name: user.name, email: user.email };
  localStorage.setItem("fydCurrentUser", JSON.stringify(currentUser));
  loadProgress();
  openHomeAfterLogin();
}

function openHomeAfterLogin() {
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("appScreen").classList.add("hidden");
  document.getElementById("homeScreen").classList.remove("hidden");
  updateHeaderUser();
}

function updateHeaderUser() {
  const badge = document.getElementById("studentBadge");
  const logoutBtn = document.getElementById("logoutBtn");

  if (currentUser) {
    badge.textContent = "👤 " + currentUser.name;
    badge.classList.remove("hidden");
    logoutBtn.classList.remove("hidden");
  } else {
    badge.textContent = "";
    badge.classList.add("hidden");
    logoutBtn.classList.add("hidden");
  }
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem("fydCurrentUser");

  document.getElementById("appScreen").classList.add("hidden");
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("loginScreen").classList.remove("hidden");

  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";
  showLoginTab();
  updateHeaderUser();
}

function initializeLogin() {
  if (currentUser) {
    loadProgress();
    openHomeAfterLogin();
  } else {
    document.getElementById("loginScreen").classList.remove("hidden");
    document.getElementById("homeScreen").classList.add("hidden");
    document.getElementById("appScreen").classList.add("hidden");
    updateHeaderUser();
  }
}

function setActiveBook(bookKey, bookTitle, lessonData) {
  currentBookKey = bookKey;
  currentBookTitle = bookTitle;

  lessons.splice(0, lessons.length, ...lessonData);
  loadProgress();

  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("appScreen").classList.remove("hidden");
  const sidebarBookTitle = document.getElementById("sidebarBookTitle");
  if (sidebarBookTitle) sidebarBookTitle.textContent = bookTitle;

  currentLesson = 0;
  currentModule = 0;
  isTestMode = false;

  render();
}

function openBookOne() {
  if (!currentUser) {
    alert("Faça login para acessar a apostila.");
    return;
  }

  setActiveBook("bookOne", "Book One", bookOneLessons);
}

function openBookTwo() {
  if (!currentUser) {
    alert("Faça login para acessar a apostila.");
    return;
  }

  setActiveBook("bookTwo", "Book Two", bookTwoLessons);
}

function goHome() {
  document.getElementById("appScreen").classList.add("hidden");
  document.getElementById("homeScreen").classList.remove("hidden");
}

function saveProgress() {
  localStorage.setItem(getProgressKey(), JSON.stringify(progress));
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
      <h2>You completed ${currentBookTitle}!</h2>
      <p>
        Amazing job! You finished all lessons from the Follow Your Dreams Interactive Workbook — ${currentBookTitle}.
      </p>
      <p>
        You unlocked your Certificate of Completion. 🏆
      </p>
    </div>

    <div class="card certificate-card">
      <h2>Certificate of Completion</h2>
      <p><strong>Student:</strong> ${currentUser ? currentUser.name : "__________________________"}</p>
      <p><strong>Course:</strong> English Interactive Workbook — ${currentBookTitle}</p>
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
initializeLogin();