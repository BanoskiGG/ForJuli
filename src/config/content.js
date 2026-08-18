/**
 * ==============================================================================
 * CENTRAL CONTENT CONFIGURATION
 * ==============================================================================
 * You can edit all names, letter paragraphs, buildup texts, scrapbook cards, 
 * photos, and YouTube background music ID here in one place.
 * ==============================================================================
 */

export const contentConfig = {
  // Names
  recipientName: "Angel",
  senderName: "Andrei",

  // Background Music (YouTube Video ID)
  // URL: https://www.youtube.com/watch?v=oInO5jx600E -> ID is 'oInO5jx600E'
  youtubeVideoId: "oInO5jx600E",
  musicLabel: "♫ Background Melody",

  // SCREEN 1 — OPENING
  opening: {
    greeting: "May itatanong sana ako.",
    subtext: "Kaso... medyo kinakabahan akong sabihin normally.",
    buttonText: "Sige, ano? ♡",
  },

  // SCREEN 2 — THE BUILDUP
  buildup: {
    messages: [
      "I really enjoy talking to you.",
      "And habang tumatagal, nare-realize ko na gusto pa kitang makilala.",
      "Hindi lang as a friend...",
      "And honestly, hindi ko alam kung paano ko sasabihin 'to like in person kahit magkasama pa tayo rn HAHAHAHA.",
      "So I made this instead.",
    ],
    handwrittenNote: "Apparently, mas magaling ako mag-code kaysa magsabi ng feelings.",
    buttonText: "May gusto pa akong ipabasa sa'yo →",
  },

  // SCREEN 3 — THE ENVELOPE INTRO
  envelope: {
    title: "Para sa'yo ♡",
    subtitle: "May sinulat ako.",
    buttonText: "Open letter",
  },

  // SCREEN 4 — THE HANDWRITTEN LETTER
  letter: {
    salutation: "Dear Angel,",
    paragraphs: [
      "Honestly, hindi ko talaga alam kung paano ko sisimulan 'to. Ilang beses ko na rin pinag-isipan kung sasabihin ko ba talaga, pero I guess gumawa na lang ako ng website para somehow mas madali.",
      "I really enjoy talking to you and hanging out with you. Kahit yung mga simpleng conversations natin, I genuinely look forward to them. And somewhere along the way, narealize ko na gusto pa kitang makilala.",
      "Everytime na I'm with you feels like I'm falling for you nang malala. Ginayuma mo talaga ako no HAHAHAHAHA.",
      "Please always remember na you're very worth it, napaka buti mong tao Juli, and as I said to Yla ang dali dali mong mahalin. Napaka genuine mo, napaka bait mo, and ang caring mo. Ik people close to you would agree too. Sorry if nagiging corny nanaman ako or cheesy but that's just how I see you as a person.",
      "I want you to feel okay everyday, I want you to feel better and be happy for the good, and make you feel loved and safe when you're with me. Let me be the person who fills the love that you really deserve.",
      "I don't want to rush anything, and I don't want you to feel pressured. Gusto ko lang maging honest sa'yo about how I feel.",
      "I like you very much, well in fact I feel more than that as you know.",
      "Gusto kitang mas makilala, makasama, and see where this could go.",
      "Thank you for being my person.",
      "Pero ayun...\nI just wanted you to know. ♡"
    ],
    signature: "- Andrei",
    buttonText: "Next →",
  },

  // SCREEN 5 — AFTER THE LETTER
  afterLetter: {
    firstLine: "Okay...",
    secondLine: "Nasabi ko na rin lahat ng gusto kong sabihin.",
    thirdLine: "So I guess there's one last thing I want to ask.",
    buttonText: "One last question →",
  },

  // SCREEN 6 — THE QUESTION
  questionScreen: {
    question: "Pwede ba kitang ligawan?",
    subtext: "No pressure. Take your time.",
    yesButton: "Yes, I'd like that ♡",
    thinkButton: "I'd like some time to think",
  },

  // SCREEN 7A — YES RESPONSE
  responseYes: {
    title: "Wait... really? ♡",
    messages: [
      "Okay. Then I guess this is where we start.",
      "Thank you for giving me the chance to know you better.",
    ],
    buttonText: "Chapter 01 →",
  },

  // SCREEN 7B — NEED TIME RESPONSE
  responseThink: {
    title: "Of course. ♡",
    messages: [
      "No rush. I just wanted to be honest with you.",
      "Whatever your answer is, I'll respect it.",
    ],
    closing: "Thank you for reading this anyway. ✿",
  },

  // OPTIONAL FINAL PAGE — CHAPTER 01
  chapterOne: {
    title: "Chapter 01",
    subtitle: "Let's see where this goes. ♡",
    cards: [
      {
        icon: "💜",
        title: "I want to treat you right",
        description: "I want you to feel cared for, appreciated, and safe when you're with me. I know I won't always be perfect, but I'll always try to treat you the way you deserve.",
      },
      {
        icon: "🌷",
        title: "Let's go places together",
        description: "I want to take you to places you've always wanted to go, discover new places with you, and make little memories along the way.",
      },
      {
        icon: "🍰",
        title: "Let's eat everything",
        description: "I want to try all the food you like, find new favorites together, and probably let you choose where we eat most of the time. HAHAHA.",
      },
      {
        icon: "🧸",
        title: "Let me be there for you",
        description: "On your good days, I'll be there to celebrate with you. On your bad days, I'll be there to listen, even when you don't really feel like talking.",
      },
      {
        icon: "✨",
        title: "The little things",
        description: "I want to remember the little things about you. Your favorite things, the things that make you happy, the random stories you tell me, and all the little details that make you, you.",
      },
      {
        icon: "♡",
        title: "And most importantly...",
        description: "I don't know exactly where this will take us. I just know that if you let me, I'd love to find out with you.",
      },
    ],
    endingNote: "So... let's start somewhere. ♡",
    signature: "— Andrei",
  },

  // OPTIONAL PHOTO MEMORIES
  // If you want to add photos to Chapter 01 or the scrapbook, add them here.
  // Example:
  // photos: [
  //   {
  //     url: "/photos/sample1.jpg",
  //     caption: "Our coffee hangout ☕",
  //     date: "June 2024",
  //     rotation: "-2deg"
  //   }
  // ]
  // If this array is empty, the website seamlessly renders without photo slots.
  photos: [],
};
