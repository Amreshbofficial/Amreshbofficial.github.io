export type Project = {
  id: number;
  name: string;
  description: string;
  link: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Appointment System Project",
    description: "A Django-based appointment scheduling system designed to streamline booking and management processes.",
    link: "https://github.com/Amreshbofficial/Appointment_System_Project",
  },
  {
    id: 2,
    name: "HTML Login Page Project",
    description: "A responsive website built using HTML and CSS, showcasing modern web design principles and clean code structure.",
    link: "https://github.com/Amreshbofficial/HTM-Project-1",
  },
  {
    id: 3,
    name: "JARVIS-AI-Assistant",
    description: "An advanced AI-powered virtual assistant built using Python. It includes voice recognition, automation features, and smart responses to enhance productivity.",
    link: "https://github.com/Amreshbofficial/JARVIS-AI-Assistant"
  },
  {
    id: 4,
    name: "Number Guessing Game",
    description: "A Python-based game where the user guesses a randomly generated number. Built with simplicity and fun in mind!",
    link: "https://github.com/Amreshbofficial/Number-Guessing-Game-Python-Projects",
  },
  {
    id: 5,
    name: "Portfolio-Project-0.1",
    description: "A web application showcasing my Full-Stack Developer skills, featuring project displays, skill descriptions, and contact info. Built as a demonstration of my abilities, not a personal profile.",
    link: "https://github.com/Amreshbofficial/Portfolio-Website-Project-0.1",
  },
  {
    id: 6,
    name: "Python Django Project: Pin Your Notes",
    description: "A full-stack web application built with Django for managing and organizing notes efficiently.",
    link: "https://github.com/Amreshbofficial/Python-Django-Project-Pin-Your-Notes",
  },
  {
    id: 7,
    name: "Simple Alarm Clock",
    description: "A Python-based alarm clock application that allows users to set an alarm and plays a sound at the specified time.",
    link: "https://github.com/Amreshbofficial/Simple-Alarm-Clock-Python-Project",
  },
  {
    id: 8,
    name: "Simple Calculator Python Project",
    description: "This is a simple calculator program written in Python that performs basic arithmetic operations: addition, subtraction, multiplication, and division.",
    link: "https://github.com/Amreshbofficial/Simple-Calculator-Python-Project",
  },
  {
    id: 9,
    name: "Todo List App (React Mini Project)",
    description: "A React-based to-do list application with features like task creation, editing, and deletion.",
    link: "https://github.com/Amreshbofficial/Todo-list-app-React-Mini-Project",
  },
].sort((a, b) => a.name.localeCompare(b.name));
