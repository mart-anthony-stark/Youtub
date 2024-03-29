import { VideoComment } from "../types/Comment.type";
import { Channel, Video } from "../types/Video.type";

export const videos: Video[] = [
  {
    id: "1",
    slug: "asdvqwasv",
    channel: {
      name: "David Bombal",
      subscribers: "2.43M",
      profile_img:
        "https://yt3.ggpht.com/ZeokXdjeXW_6CpcChqvVBEBcHoJ9TAaLTnQj8yT942LLV8afhmUv6zLtqzbNS1uPnernj3SPshA=s48-c-k-c0x00ffffff-no-rj",
    },
    thumbnail: "https://i.ytimg.com/vi/-jLbRnmGYaA/maxresdefault.jpg",
    title: "Real World Hacking Tools Tutorial (Target: Tesla)",
    views: "318,169",
    description:
      "Jason demonstrates tools and techniques to discover targets using free and low cost tools. Find the weakest link and you can get inside. Learn how to attack the back door or side door instead of the front door.",
    duration: 190,
    path: "https://www.youtube.com/watch?v=-jLbRnmGYaA",
  },
  {
    id: "2",
    slug: "qkwyvbqyv",
    channel: {
      name: "Cybr",
      subscribers: "13K",
      profile_img:
        "https://yt3.ggpht.com/ytc/AIdro_mVfvpDuEY5xEz6vQboDMdcCz1RwxoJRxRSj5oB=s48-c-k-c0x00ffffff-no-rj",
    },
    thumbnail: "https://i.ytimg.com/vi/fiq59DuhY68/maxresdefault.jpg",
    title: "SQL Injections: The Full Course",
    views: "3M",
    description: `We start out by creating a safe and legal environment for us to perform attacks in. Then, we cover the core concepts of SQL and injections. After that, we learn SQL injection techniques with the help of cheat sheets and references. At that point, we start to gather information about our target in order to find weaknesses and potential vulnerabilities. 

    Once we've gathered enough information, we go full-on offensive and perform SQL injections both by hand and with automated tools. These attacks will extract data such as tokens, emails, hidden products, and password hashes which we then proceed to crack. 
    
    After successfully attacking and compromising our targets, we take a step back and discuss defensive controls at the network, application, and database layers. We also look at actual vulnerable code and show ways of fixing that vulnerable code to prevent injections.
    
    Please note: Performing these attacks on environments you do not have explicit permissions for is illegal and will get you in trouble. That is not the purpose of this course. The purpose is to teach you how to secure your own applications.`,
    duration: 620,
    path: "https://www.youtube.com/watch?v=fiq59DuhY68",
  },
  {
    id: "3",
    slug: "aklsiyvqbwi",
    channel: {
      name: "Byte BloggerBase",
      subscribers: "2.91K",
      profile_img:
        "https://yt3.ggpht.com/3Vhwh_Ev7cz3i7v8f6QwpvAJCAoSHrJTPAWUOsk4HLMEULhXCy5_1rbITHCHVuW2gYrayqGgE_M=s48-c-k-c0x00ffffff-no-rj",
    },
    thumbnail: "https://i.ytimg.com/vi/xfzx1MwYnJA/maxresdefault.jpg",
    title: "2200 Dollars | Bug Bounty | SQL Injection",
    views: "7.2K",
    description:
      "🔒 Join a thrilling journey into the world of ethical hacking as I unveil the secrets behind a secure login panel's vulnerability, resulting in a 403 error bypass through SQL injection and parameter tampering. What's more, I'll share the details of my $2200 bug bounty reward for this discovery.",
    duration: 189,
    path: "https://www.youtube.com/watch?v=xfzx1MwYnJA",
  },
  {
    id: "4",
    slug: "akjsdycbqi",
    channel: {
      name: "The Net Ninja",
      subscribers: "2M",
      profile_img:
        "https://yt3.googleusercontent.com/ytc/AIdro_nbVbd0SWK0vAJ3MTH-Q8A_JXKliSLyo4slcj9cJg=s900-c-k-c0x00ffffff-no-rj",
    },
    thumbnail:
      "https://i.ytimg.com/vi/ZjAqacIC_3c/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBc3blSmtVGX4TsNLvj385ak-6MxQ",
    title: "NextJS Tutorial",
    views: "3M",
    description:
      "Learn the fundamentals of Next.js with The Net Ninja in this comprehensive tutorial. Explore topics like server-side rendering, routing, and data fetching, and build powerful web applications with ease.",
    duration: 634,
    path: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI",
  },
  {
    id: "5",
    slug: "wervwno",
    channel: {
      name: "The PrimeTime",
      subscribers: "359K",
      profile_img:
        "https://yt3.ggpht.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s48-c-k-c0x00ffffff-no-rj",
    },
    thumbnail: "https://i.ytimg.com/vi/80MPXoRHvK8/maxresdefault.jpg",
    title: "Meet Devin",
    views: "375K",
    description:
      "This is also the best way to support me is to support yourself becoming a better backend engineer.",
    duration: 190,
    path: "https://www.youtube.com/watch?v=80MPXoRHvK8",
  },
  {
    id: "6",
    slug: "qwechybqiu",
    channel: {
      name: "Privacy Matters",
      subscribers: "11.KM",
      profile_img:
        "https://yt3.ggpht.com/2Nr2G92Ak2I5UrfjraVHGzSvXpyt2DTVUfejaVcPITdQPzcBoCUxL4DRhO7oBzKjefxxwwl30A=s48-c-k-c0x00ffffff-no-rj",
    },
    thumbnail: "https://i.ytimg.com/vi/-9iIOWBc6qw/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA_eugNEan48t8rs_xKAt3EnzNovw",
    title: "How Hackers STEAL Your Identity And LIFE in Seconds",
    views: "920",
    description: `SIM swapping attacks are scary and it's where hackers can take control of your life within seconds. You might be wondering, "How is that even possible?" or "How can you protect yourself from this attack?" 
    Don't worry; we've got you covered.`,
    duration: 250,
    path: "https://www.youtube.com/watch?v=ddiAHZkOgYE",
  },
  {
    id: "7",
    slug: "qopwucnq",
    channel: {
      name: "David Bombal",
      subscribers: "2.43M",
      profile_img:
        "https://yt3.ggpht.com/ZeokXdjeXW_6CpcChqvVBEBcHoJ9TAaLTnQj8yT942LLV8afhmUv6zLtqzbNS1uPnernj3SPshA=s48-c-k-c0x00ffffff-no-rj",
    },
    thumbnail:
      "https://i.ytimg.com/vi/nXm324qSfRA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAESEZGUAGi2au3p-LDrXmkqPTVxw",
    title: "burp suite",
    views: "427,725",
    description:
      "Learn the basics of burpsuite. Start using Burp with web applications.",
    duration: 190,
    path: "https://www.youtube.com/watch?v=IWWYNDiwYOA",
  },
  {
    id: "8",
    slug: "akjdcyqd",
    channel: {
      name: "Fireship",
      subscribers: "2.92M",
      profile_img:
        "https://yt3.ggpht.com/ytc/AIdro_ltOWCZT10fChupyd1atupxII0RoP97CwYGr0Gphw=s48-c-k-c0x00ffffff-no-rj",
    },
    thumbnail:
      "https://i.ytimg.com/vi/jYKxI1cNnYY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDYgTaALNmv7ZEkwNPUdQYZI2giGw",
    title: "AI just officially took our jobs… I hate you Devin",
    views: "1.7M",
    description:
      "Learn the fundamentals of Next.js with The Net Ninja in this comprehensive tutorial. Explore topics like server-side rendering, routing, and data fetching, and build powerful web applications with ease.",
    duration: 100,
    path: "https://www.youtube.com/watch?v=AgyJv2Qelwk",
  },
  {
    id: "9",
    slug: "erkbthri",
    channel: {
      name: "Fireship",
      subscribers: "2.92M",
      profile_img:
        "https://yt3.ggpht.com/ytc/AIdro_ltOWCZT10fChupyd1atupxII0RoP97CwYGr0Gphw=s48-c-k-c0x00ffffff-no-rj",
    },
    thumbnail:
      "https://i.ytimg.com/vi/Sxxw3qtb3_g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCSBcpiWGfspAnpjgY7FNK_Qb79FQ",
    title: "Expo in 100 Seconds",
    views: "2.92M",
    description:
      "Learn the fundamentals of React Native development in Expo in this quick breakdown. With Expo, we can build apps for iOS, Android, and the web from a single JavaScript codebase.",
    duration: 100,
    path: "https://www.youtube.com/watch?v=vFW_TxKLyrE",
  },
  {
    id: "10",
    slug: "aksdcbso",
    channel: {
      name: "zSecurity",
      subscribers: "438K",
      profile_img:
        "https://yt3.ggpht.com/ytc/AIdro_n4xyzaMyQj7kkhhCbrNkTzmf1y_M-6M4EtD3P-=s48-c-k-c0x00ffffff-no-rj",
    },
    thumbnail:
      "https://i.ytimg.com/vi/FTRSJaIAF8Y/maxresdefault.jpg",
    title: "How to Jailbreak ChatGPT (GPT4) & Use it for Hacking",
    views: "67,265",
    description:
      "This video will show you how OpenAI's ChatGPT can be jailbroken or hacked. As a result you'll learn how to bypass its censorship and get it to answer any question you want.",
    duration: 500,
    path: "https://www.youtube.com/watch?v=FTRSJaIAF8Y",
  },
  {
    id: "11",
    slug: "riutvocu",
    channel: {
      name: "David Bombal",
      subscribers: "2.43M",
      profile_img:
        "https://yt3.ggpht.com/ZeokXdjeXW_6CpcChqvVBEBcHoJ9TAaLTnQj8yT942LLV8afhmUv6zLtqzbNS1uPnernj3SPshA=s48-c-k-c0x00ffffff-no-rj",
    },
    thumbnail:
      "https://i.ytimg.com/vi/vIlGvCitMPM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCewFzBFitjQWBspbcu0HN-K4TMjA",
    title: "How TCP really works // Three-way handshake // TCP/IP Deep Dive",
    views: "625,046",
    description:
      "You need to learn TCP/IP. It's so much part of our life. Doesn't matter if you are studying for cybersecurity, or networking or something else. Learn TCP/IP.",
    duration: 190,
    path: "https://www.youtube.com/watch?v=rmFX1V49K8U",
  },
  {
    id: "12",
    slug: "ifuvwbei",
    channel: {
      name: "David Bombal",
      subscribers: "2.43M",
      profile_img:
        "https://yt3.ggpht.com/ZeokXdjeXW_6CpcChqvVBEBcHoJ9TAaLTnQj8yT942LLV8afhmUv6zLtqzbNS1uPnernj3SPshA=s48-c-k-c0x00ffffff-no-rj",
    },
    thumbnail:
      "https://i.ytimg.com/vi/SFbV7sTSAlA/maxresdefault.jpg",
    title: "Ex-NSA hacker tells us how to get into hacking!",
    views: "2.43M",
    description:
      "This is the path to becoming a hacker. Follow the advice and change your life!",
    duration: 190,
    path: "https://www.youtube.com/watch?v=1ffv507slWM",
  },
];

export const videoComments: VideoComment[] = [
  {
    id: "comment-1",
    comment: "Great video! Very informative.",
    handle: "JohnDoe123",
    reacts: "15",
    like: "12",
    dislikes: "3",
  },
  {
    id: "comment-2",
    comment: "I didn't understand the last part, can you explain?",
    handle: "CuriousGeorge",
    reacts: "8",
    like: "6",
    dislikes: "2",
  },
  {
    id: "comment-3",
    comment: "This video changed my perspective completely!",
    handle: "MindBlown",
    reacts: "25",
    like: "20",
    dislikes: "5",
  },
  {
    id: "comment-4",
    comment: "I've been waiting for this tutorial, thank you!",
    handle: "CodeNinja",
    reacts: "12",
    like: "10",
    dislikes: "2",
  },
];


export const channels: Channel[] = [
  {
    name: "Jocelyn Necio",
    subscribers: "2M",
    profile_img: "https://avatars.githubusercontent.com/u/160461110?v=4.png",
  },
  {
    name: "Anthony Stark",
    subscribers: "3K",
    profile_img:
      "https://github.com/mart-anthony-stark/CV-Vanilla-JS-SPA/blob/main/src/assets/images/mart-white-bg.png?raw=true",
  },
  {
    name: "Justin Viber",
    subscribers: "2M",
    profile_img: "https://avatars.githubusercontent.com/u/83799855?v=4.png",
  },
  {
    name: "JR Siaboc",
    subscribers: "2M",
    profile_img: "https://avatars.githubusercontent.com/u/160460651?v=4",
  },
  {
    name: "LeanNotFound",
    subscribers: "2K",
    profile_img: "https://avatars.githubusercontent.com/u/113871679?v=4.png",
  },
  {
    name: "JepJep",
    subscribers: "2M",
    profile_img: "https://avatars.githubusercontent.com/u/90635364?v=4",
  },
];