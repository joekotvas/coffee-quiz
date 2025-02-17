
export type CoffeeGroup = "A" | "B" | "C";

export interface AnswerOption {
    label: string;
    group: CoffeeGroup;
    image: string;
  }

export interface QuizQuestion {
    id: number;
    text: string;
    answers: AnswerOption[];
  }

export interface ResultType {
    title: string;
    description: string;
  }
  
  export interface GroupMapping {
    A: ResultType;
    B: ResultType;
    C: ResultType;
    TIE: ResultType;
  }
  
  export interface OverallMapping {
    A: GroupMapping;
    B: GroupMapping;
    C: GroupMapping;
  }
  

  export const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      text: "What’s Your Signature Coffee Style?",
      answers: [
        { label: "Dark & Daring (pure, no-frills black coffee)", group: "A", image: "dark-coffee.webp" },
        { label: "Sweet Symphony (creamy, sweet, and comforting)", group: "A", image: "sweet-symphony.webp" },
        { label: "Iced & Invincible (cool, refreshing, and trendy)", group: "B", image: "iced-coffee.webp" },
        { label: "Latté Love (smooth, popular, and effortlessly chic)", group: "B", image: "latte-love.webp" },
        { label: "Artisanal Affair (fancy, artisanal twists)", group: "C", image: "artisanal-twist.webp" },
        { label: "Mix-It-Up Maverick (boldly inventive with flavor mashups)", group: "C", image: "citrus-mashup.webp" },
      ],
    },
    {
      id: 2,
      text: "How Do You Brew Your Magic Potion?",
      answers: [
        { label: "Classic Drip (reliable, everyday ritual)", group: "A", image: "coffeepot.webp" },
        { label: "Stovetop Moka Magic (old-school charm with a robust punch)", group: "A", image: "stovetop.webp" },
        { label: "French Press Finesse (deliberate, immersive, and full-bodied)", group: "B", image: "french-press.webp" },
        { label: "Espresso Elegance (intense, refined, and artful)", group: "B", image: "espresso-elegance.webp" },
        { label: "Cool Cold Brew (smooth, laid-back, and effortlessly cool)", group: "C", image: "cold-brew.webp" },
        { label: "Instant Inspiration (quick, convenient, and spontaneous)", group: "C", image: "instant-coffee.webp" },
      ],
    },
    {
      id: 3,
      text: "How Many Cups a Day Fuel Your Fire?",
      answers: [
        { label: "One Cup Wonder", group: "A", image: "one-cup.webp" },
        { label: "Dynamic Duo", group: "A", image: "two-cups.webp" },
        { label: "Triple Threat", group: "B", image: "three-cups.webp" },
        { label: "Quadruple Kick", group: "B", image: "four-cups.webp" },
        { label: "Walking Bean", group: "C", image: "five-cups.webp" },
        { label: "Caffeine Connoisseur", group: "C", image: "six-cups.webp" },
      ],
    },
    {
      id: 4,
      text: "What’s Your Relationship with Coffee?",
      answers: [
        { label: "Head Over Heels", group: "A", image: "head-over-heels.webp" },
        { label: "Passionate Affair", group: "A", image: "passionate-affair.webp" },
        { label: "BFF Status", group: "B", image: "bff-status.webp" },
        { label: "Respectful Companion", group: "B", image: "respectful-companion.webp" },
        { label: "Pragmatic Partnership", group: "C", image: "pragmatic-partnership.webp" },
        { label: "Bittersweet Romance", group: "C", image: "bittersweet-romance.webp" },
      ],
    },
];
  
  export const resultMapping: OverallMapping = {
    A: {
      A: {
        title: "The Reliable Ritualist",
        description:
          "You cherish classic routines and dependability. Your steadfast nature is as comforting as a perfectly brewed drip.",
      },
      B: {
        title: "The Heartfelt Homesteader",
        description:
          "Your rituals are infused with warmth and tradition. You value deep connections and homey comforts in every sip.",
      },
      C: {
        title: "The Minimalist Maven",
        description:
          "Less is more for you. You streamline your day with simplicity and efficiency, savoring each unembellished moment.",
      },
      TIE: {
        title: "The Unapologetic Traditionalist",
        description:
          "Bold and unfiltered, you mix tradition with a touch of maverick flair—living life on your own unapologetic terms.",
      },
    },
    B: {
      A: {
        title: "The Chic Curator",
        description:
          "You design your life with care and style, curating each moment with a refined and sophisticated touch.",
      },
      B: {
        title: "The Sophisticated Sipper",
        description:
          "Balanced and polished, you infuse modern living with a quiet elegance that turns everyday routines into art.",
      },
      C: {
        title: "The Trendsetter Taster",
        description:
          "Always ahead of the curve, your innovative choices set trends. You embrace modernity with a dynamic, daring spirit.",
      },
      TIE: {
        title: "The Urban Artisan",
        description:
          "Versatile and creative, you blend diverse influences into a vibrant, ever-evolving lifestyle that’s uniquely yours.",
      },
    },
    C: {
      A: {
        title: "The Bold Experimenter",
        description:
          "Fearless and inventive, you’re always on the hunt for the next big idea. Adventure and innovation fuel every step.",
      },
      B: {
        title: "The Rebel Roaster",
        description:
          "Unconventional and passionate, you break the rules in pursuit of your creative vision—living boldly on your own terms.",
      },
      C: {
        title: "The Caffeine Crusader",
        description:
          "High-energy and driven, you channel intense creativity and power through every challenge, fueled by a relentless spark.",
      },
      TIE: {
        title: "The Eclectic Alchemist",
        description:
          "Multifaceted and experimental, you blend tradition and innovation in unexpected ways, crafting a life of creative fusion.",
      },
    },
  };
  