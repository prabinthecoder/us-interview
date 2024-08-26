import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileBadge, Send } from "lucide-react";

export const DATA = {
  name: "US Interview Questions 2025",
  initials: "US",
  url: "https://us-interview.netlify.app",
  avatarUrl: "/usa.png",
  description: "Use the sample questions provided to prepare and rehearse your answers.",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/interview", icon: FileBadge, label: "Interview Experience" },
    { href: "/send", icon: Send, label: "Send Experience" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.instagram.com/prabinthecoder",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.instagram.com/prabinthecoder",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://www.instagram.com/prabinthecoder",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.instagram.com/prabinthecoder",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  question: [
    {
      title: "Study Plans 🤓",
      questions: [
        "Why do you want to study in the US?",
        "What will you specialize in for your degree?",
        "What will be your major?",
        "How will this study program relate to your past work or studies?",
        "Where did you go to school before now?",
        "Who is your current employer? What do you do?",
        "Why can’t you continue your education in your home country?",
        "What are you planning to study?",
        "Have you been to the United States before?",
      ],
    },
    {
      title: "University Choice 🎓",
      questions: [
        "Why did you choose this university?",
        "How many different universities did you apply to?",
        "What city is your school located in? What do you know about the local area?",
        "Do you know your professors at that university? What are their names?",
      ],
    },
    {
      title: "Academic Capability 📰",
      questions: [
        "What are your test scores?",
        "What was your previous GPA?",
        "How will you manage the cultural and educational differences in the US?",
        "How well can you speak English?",
        "Why do you want to pursue a degree in the US?",
        "Why not study in Canada, Australia or the UK?",
        "What do you know about US schools?",
        "Can you share your high school transcripts?",
      ],
    },
    {
      title: "Financial Status 💰",
      questions: [
        "How do you plan to fund the entire duration of your education?",
        "What is your monthly income?",
        "What is your sponsor’s annual income?",
        "How much does your school cost?",
        "Who is going to sponsor your education?",
        "How will you meet these expenses?",
        "What is your sponsor's occupation?",
        "Do you have a copy of your bank statements?",
        "Did you get offered a scholarship at your school?",
        "Can I see your tax returns?",
        "Do you plan on working while you are studying in the US?",
      ],
    },
    {
      title: "Post-Graduation Plans ☄️",
      questions: [
        "Do you plan to return to your home country after completing your studies?",
        "Do you have family, relatives, or friends in the US? ",
        "Do you have a job or career in mind post-graduation?",
      ],
    }

  ],
} as const;
