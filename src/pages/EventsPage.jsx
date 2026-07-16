import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Data for different years
const eventData = {
  "2022-23": [
    {
      id: 1,
      name: "Launch of 5G Services",
      month: "October",
      date: "10-10-2022",
      theme: "Innovation and Design Thinking",
      type: "Seminar/MIC Driven Activity",
      level: "1",
    },
    {
      id: 2,
      name: "Innovation Day",
      month: "October",
      date: "15-10-2022",
      theme: "Entrepreneurship & Start Up",
      type: "Expert Talk",
      level: "1",
    },
    {
      id: 3,
      name: "National Education Day",
      month: "November",
      date: "11-11-2022",
      theme: "Innovation and Design Thinking",
      type: "Mentoring Session",
      level: "1",
    },
    {
      id: 4,
      name: "Workshop on 'Entrepreneurship and Innovation as Career Opportunity'",
      month: "November",
      date: "18-11-2022",
      theme: "Start up",
      type: "Workshop",
      level: "1",
    },
    {
      id: 5,
      name: "My Story - Motivational Session by Successful Innovators",
      month: "November",
      date: "21-11-2022",
      theme: "Entrepreneurship",
      type: "Mentoring Session",
      level: "1",
    },
    {
      id: 6,
      name: "Inter/Intra Institutional Idea Competition/Challenge/Hackathon and Reward for Best Ideas",
      month: "November",
      date: "23-11-2022",
      theme: "Entrepreneurship",
      type: "Demo Day",
      level: "1",
    },
    {
      id: 7,
      name: "Online Session on Prototype/Process Design and Development Prototyping",
      month: "November",
      date: "28-11-2022",
      theme: "Innovation and Design Thinking",
      type: "Mentoring Session",
      level: "1",
    },
    {
      id: 8,
      name: "Session on How to Plan for Start Up and Legal & Ethical Steps",
      month: "November",
      date: "29-11-2022",
      theme: "Entrepreneurship & Start Up",
      type: "Mentoring Session",
      level: "1",
    },
    {
      id: 9,
      name: "Demo Day/Exhibition/Poster Presentation of Ideas/PoC Linkage with Innovation Ambassadors/Expert for Mentorship Support through YUKTI NIR",
      month: "November",
      date: "30-11-2022",
      theme: "Entrepreneurship & Start Up",
      type: "Exhibition",
      level: "1",
    },
    {
      id: 10,
      name: "PPDT - Picture Perception and Detection Test (Entrepreneurship)",
      month: "November",
      date: "30-11-2022",
      theme: "Innovation and Design Thinking",
      type: "Competition",
      level: "1",
    },
    {
      id: 11,
      name: "National Pollution Control Day",
      month: "December",
      date: "02-12-2022",
      theme: "Innovation & Design Thinking",
      type: "Seminar",
      level: "2",
    },
    {
      id: 12,
      name: "National Energy Conservation Day",
      month: "December",
      date: "14-12-2022",
      theme: "Innovation & Design Thinking",
      type: "Celebration Activity",
      level: "2",
    },
    {
      id: 13,
      name: "Orientation Session on IIC 5.0 & Features",
      month: "January",
      date: "11-01-2023",
      theme: "Entrepreneurship & Start Up",
      type: "Mentoring Session",
      level: "2",
    },
    {
      id: 14,
      name: "National Youth Day",
      month: "January",
      date: "12-01-2023",
      theme: "Entrepreneurship & Start Up",
      type: "Mentoring Session",
      level: "2",
    },
    {
      id: 15,
      name: "National Startup Day",
      month: "January",
      date: "16-01-2023",
      theme: "Entrepreneurship & Start Up",
      type: "Celebration Activity",
      level: "2",
    },
    {
      id: 16,
      name: "Angel Investment/VC Funding Opportunity for Early Stage Entrepreneurs",
      month: "January",
      date: "24-01-2023",
      theme: "Entrepreneurship and Start Up",
      type: "Seminar",
      level: "2",
    },
    {
      id: 17,
      name: "Leadership Talk With Prof. T. G. Sitharam, Hon’ble Chairman, All India Council for Technical Education",
      month: "January",
      date: "30-01-2023",
      theme: "Entrepreneurship & Start Up",
      type: "Mentoring Session",
      level: "2",
    },
    {
      id: 18,
      name: "Workshop on 'Entrepreneurship Skill, Attitude and Behavior Development'",
      month: "February",
      date: "01-02-2023",
      theme: "Entrepreneurship & Start Up",
      type: "Workshop",
      level: "2",
    },
    {
      id: 19,
      name: "Expert Talk on Process of Innovation Development & Technology Readiness Level (TRL): Commercialisation of Lab Technologies & Tech Transfer",
      month: "February",
      date: "02-02-2022",
      theme: "IPR & Technology Transfer",
      type: "Expert Talk",
      level: "2",
    },
    {
      id: 20,
      name: "Session on Roadmap of Entrepreneurship",
      month: "February",
      date: "07-02-2023",
      theme: "Entrepreneurship & Start Up",
      type: "Seminar",
      level: "2",
    },
    {
      id: 21,
      name: "Session on Achieving Problem-Solution Fit & Product Market Fit",
      month: "February",
      date: "09-02-2023",
      theme: "Innovation and Design Thinking",
      type: "Seminar",
      level: "2",
    },
    {
      id: 22,
      name: "Srijan: The Innovative Minds",
      month: "February",
      date: "25-02-2023",
      theme: "Innovation and Design Thinking",
      type: "Competition",
      level: "2",
    },
    {
      id: 23,
      name: "Workshop on Design Thinking, Critical Thinking and Innovation Design",
      month: "February",
      date: "27-02-2023",
      theme: "Innovation and Design Thinking",
      type: "Workshop",
      level: "2",
    },
    {
      id: 24,
      name: "National Science Day",
      month: "February",
      date: "28-02-2023",
      theme: "Entrepreneurship & Start Up",
      type: "Mentoring Session",
      level: "2",
    },
    {
      id: 25,
      name: "International Women's Day",
      month: "March",
      date: "08-03-2023",
      theme: "Entrepreneurship & Innovation",
      type: "Celebration Activity",
      level: "3",
    },
    {
      id: 26,
      name: "Creating YUKTI Innovation Repository & Participation in Innovation Challenge",
      month: "March",
      date: "29-03-2023",
      theme: "Preincubation and Incubation Management",
      type: "Seminar",
      level: "3",
    },
    {
      id: 27,
      name: "Systematize and Managing Innovations in IIC’s: YUKTI Innovation Repository and Innovation Challenge",
      month: "April",
      date: "13-04-2023",
      theme: "Innovation and Design Thinking",
      type: "Seminar",
      level: "3",
    },
    {
      id: 28,
      name: "IIC: YUKTI- Innovation Repository- Scouting Ideas, Innovations and Start Ups",
      month: "April",
      date: "17-04-2023",
      theme: "Entrepreneurship & Start Up",
      type: "Mentoring Session",
      level: "3",
    },
    {
      id: 29,
      name: "Celebrating India's presidency of the G20",
      month: "April",
      date: "19-04-2023",
      theme: "Innovation & Design Thinking",
      type: "MIC Driven Activity",
      level: "3",
    },
    {
      id: 30,
      name: "Emerging Trends in Digital Marketing leading to Entrepreneurship and Start UP",
      month: "April",
      date: "20-04-2023",
      theme: "Entrepreneurship & Start Up",
      type: "Seminar",
      level: "3",
    },
      {
        "id": 31,
        "name": "World Creativity and Innovation Day",
        "month": "April",
        "date": "21-04-2023",
        "theme": "Innovation & Design Thinking",
        "type": "Mentoring Session",
        "level": "Q3"
      },
      {
        "id": 32,
        "name": "World Intellectual Property Day",
        "month": "April",
        "date": "26-04-2023",
        "theme": "IPR & IP Management",
        "type": "Seminar",
        "level": "Q3"
      },
      {
        "id": 33,
        "name": "Workshop on Intellectual Property Rights (IPRs) and IP Management for Startups",
        "month": "May",
        "date": "02-05-2023",
        "theme": "IPR & IP Management",
        "type": "Seminar",
        "level": "Q3"
      },
      {
        "id": 34,
        "name": "Session on 'How to Plan for Start Up and Legal & Ethical Steps'",
        "month": "May",
        "date": "11-05-2023",
        "theme": "Entrepreneurship & Start Up",
        "type": "Seminar",
        "level": "Q3"
      },
      {
        "id": 35,
        "name": "National Technology Week - Inaugural Address of Hon’ble Prime Minister of India",
        "month": "May",
        "date": "11-05-2023",
        "theme": "IPR & Technology Transfer",
        "type": "Seminar",
        "level": "Q3"
      },
      {
        "id": 36,
        "name": "National Technology Day",
        "month": "May",
        "date": "11-05-2023",
        "theme": "Innovation, Technology, Energy",
        "type": "Celebration Activity",
        "level": "Q3"
      },
      {
        "id": 37,
        "name": "Demo Day/Exhibition/Poster Presentation of Business Plans & Linkage with Innovation Ambassadors/Expert for Mentorship Support - Managed Through YUKTI NIR",
        "month": "May",
        "date": "30-05-2023",
        "theme": "Entrepreneurship & Start Up",
        "type": "Demo Day",
        "level": "Q3"
      },
      {
        "id": 38,
        "name": "Session/Workshop on Business Model Canvas",
        "month": "May",
        "date": "26-05-2023",
        "theme": "Entrepreneurship & Start Up",
        "type": "Seminar",
        "level": "Q3"
      },
      {
        "id": 39,
        "name": "World Environment Day",
        "month": "June",
        "date": "05-06-2023",
        "theme": "Environment & Innovation",
        "type": "Celebration Activity",
        "level": "Q4"
      },
      {
        "id": 40,
        "name": "Session on Angel Investment/VC Funding Opportunity for Early Stage Entrepreneurs",
        "month": "June",
        "date": "14-06-2023",
        "theme": "Entrepreneurship & Start Up",
        "type": "Seminar",
        "level": "Q4"
      },
      {
        "id": 41,
        "name": "Achieving Value Proposition Fit and Business Fit",
        "month": "June",
        "date": "14-06-2023",
        "theme": "Innovation & Design Thinking",
        "type": "Seminar",
        "level": "Q4"
      },
      {
        "id": 42,
        "name": "Session on Innovation/Prototype Validation - Converting Innovation into a Start Up",
        "month": "June",
        "date": "20-06-2023",
        "theme": "Innovation & Design Thinking",
        "type": "Seminar",
        "level": "Q4"
      },
      {
        "id": 43,
        "name": "Session on Road Map to Entrepreneurship",
        "month": "June",
        "date": "16-06-2023",
        "theme": "Entrepreneurship & Start Up",
        "type": "Seminar",
        "level": "Q4"
      },
      {
        "id": 44,
        "name": "Barriers of Entrepreneurship/Start Up/Research and Development",
        "month": "July",
        "date": "04-07-2023",
        "theme": "Entrepreneurship & Start Up",
        "type": "Seminar",
        "level": "Q4"
      },
      {
        "id": 45,
        "name": "NEP ki Samajh - Celebrating 3 Years of Implementation of NEP 2020",
        "month": "July",
        "date": "07-07-2023 to 14-07-2023",
        "theme": "Innovation, Entrepreneurship, Start Up, Education Policy",
        "type": "MIC Driven Activity",
        "level": "Q4"
      },
      {
        "id": 46,
        "name": "Session on Accelerators/Incubation - Opportunities for Students & Faculties - Early Stage Entrepreneurs",
        "month": "July",
        "date": "19-07-2023",
        "theme": "Entrepreneurship & Start Up",
        "type": "Seminar",
        "level": "Q4"
      },
      {
        "id": 47,
        "name": "Organise Session on 'Lean Start-up & Minimum Viable Product/Business' - Boot Camp (or) Mentoring Session",
        "month": "July",
        "date": "26-07-2023",
        "theme": "Entrepreneurship & Start Up",
        "type": "BootCamp",
        "level": "Q4"
      },
      {
        "id": 48,
        "name": "2nd Edition of the Akhil Bhartiya Shiksha Samagam",
        "month": "July",
        "date": "31-07-2023",
        "theme": "Entrepreneurship & Start Up",
        "type": "MIC Driven Activity",
        "level": "Q4"
      },
      {
        "id": 49,
        "name": "Independence Day - Celebrating Aazadi Ka Amritkal",
        "month": "August",
        "date": "15-08-2023",
        "theme": "Aazadi Ka Amritkal & Entrepreneurship",
        "type": "Celebration Activity",
        "level": "Q4"
      },
      {
        "id": 50,
        "name": "World Entrepreneurs Day",
        "month": "August",
        "date": "21-08-2023",
        "theme": "Entrepreneurship & Innovation",
        "type": "Celebration Activity",
        "level": "Q4"
      },

  ],

"2023-24": [
  {
    id: 1,
    name: "My Story - Motivational Session by Successful Entrepreneur/Start-up Founder",
    month: "October",
    date: "10-10-2023",
    theme: "Entrepreneurship & Startup",
    type: "Mentoring Session",
    level: "1",
  },
  {
    id: 2,
    name: "My Story - Motivational Session by Successful Innovators",
    month: "October",
    date: "11-10-2023",
    theme: "Innovation & Design Thinking",
    type: "Mentoring Session",
    level: "1",
  },
  {
    id: 3,
    name: "Workshop on 'Entrepreneurship and Innovation as Career Opportunity'",
    month: "October",
    date: "11-10-2023",
    theme: "Entrepreneurship & Startup",
    type: "Workshop",
    level: "3",
  },
  {
    id: 4,
    name: "Innovation Day",
    month: "October",
    date: "15-10-2023",
    theme: "Innovation & Design Thinking",
    type: "Mentoring Session",
    level: "1",
  },
  {
    id: 5,
    name: "Mastering E-mail Marketing",
    month: "October",
    date: "27-10-2023",
    theme: "Pre-Incubation & Incubation Management",
    type: "Workshop",
    level: "3",
  },
  {
    id: 6,
    name: "Enhancing Sales Competencies: Insights from PSIT Self-Driven Activity for IIC",
    month: "November",
    date: "06-11-2023",
    theme: "Entrepreneurship & Startup",
    type: "Seminar",
    level: "2",
  },
  {
    id: 7,
    name: "Exploring the Nature and Scope of Marketing and Selling wrt. Entrepreneurship",
    month: "November",
    date: "07-11-2023",
    theme: "Entrepreneurship & Startup",
    type: "Workshop",
    level: "3",
  },
  {
    id: 8,
    name: "Exploring Sales Force Staffing in Entrepreneurship",
    month: "November",
    date: "08-11-2023",
    theme: "Entrepreneurship & Startup",
    type: "Seminar",
    level: "2",
  },
  {
    id: 9,
    name: "National Entrepreneurship Day",
    month: "November",
    date: "09-11-2023",
    theme: "Entrepreneurship & Startup",
    type: "Mentoring Session",
    level: "1",
  },
  {
    id: 10,
    name: "National Education Day",
    month: "November",
    date: "11-11-2023",
    theme: "Innovation & Design Thinking",
    type: "Seminar",
    level: "2",
  },
  {
    id: 11,
    name: "Session on Problem Solving and Ideation Workshop",
    month: "November",
    date: "13-11-2023",
    theme: "Innovation & Design Thinking",
    type: "Workshop",
    level: "4",
  },
  {
    id: 12,
    name: "Types of Websites, Keywords, Understanding Domain and Webhosting",
    month: "December",
    date: "01-12-2023",
    theme: "Innovation & Design Thinking",
    type: "Workshop",
    level: "3",
  },
  {
    id: 13,
    name: "National Pollution Control Day",
    month: "December",
    date: "02-12-2023",
    theme: "Innovation & Design Thinking",
    type: "Seminar",
    level: "2",
  },
  {
    id: 14,
    name: "Report on Viksit Bharat@2047 Utsav Campus Event",
    month: "December",
    date: "11-12-2023",
    theme: "Innovation & Design Thinking",
    type: "Seminar",
    level: "2",
  },
  {
    id: 15,
    name: "Session on Achieving Problem Solution Fit and Product Market Fit",
    month: "December",
    date: "12-12-2023",
    theme: "Innovation & Design Thinking",
    type: "Seminar",
    level: "2",
  },
  {
    id: 16,
    name: "Workshop on Design Thinking, Critical Thinking and Innovation Design",
    month: "December",
    date: "13-12-2023",
    theme: "Innovation & Design Thinking",
    type: "Workshop",
    level: "2",
  },
  {
    id: 17,
    name: "National Energy Conservation Day (India)",
    month: "December",
    date: "14-12-2023",
    theme: "Innovation & Design Thinking",
    type: "Mentoring Session",
    level: "1",
  },
  {
    id: 18,
    name: "Expert Talk on Process of Innovation Development, Technology Readiness Level (TRL), and Commercialization Lab Technology and Tech Transfer",
    month: "December",
    date: "14-12-2023",
    theme: "Innovation & Design Thinking",
    type: "Expert Talk",
    level: "1",
  },
  {
    id: 19,
    name: "Mentoring Event: Demo Day/Exhibition/Poster Presentation of Innovations/Prototypes, Linkage with Innovation Ambassadors/Experts for Mentorship Support",
    month: "December",
    date: "16-12-2023",
    theme: "Innovation & Design Thinking",
    type: "Exhibition/Demo Day",
    level: "4",
  },
  {
    id: 20,
    name: "Industry Exhibition at MSME Event: Connecting Attendees with Local Businesses",
    month: "December",
    date: "19-12-2023",
    theme: "Entrepreneurship & Startup",
    type: "Exposure Visit",
    level: "3",
  },
  {
    id: 21,
    name: "MSME Workshop: Empowering Entrepreneurs through the MSME Competitive (Lean) Scheme",
    month: "December",
    date: "19-12-2023",
    theme: "Entrepreneurship & Startup",
    type: "Workshop",
    level: "4",
  },
  {
    id: 22,
    name: "National Youth Day",
    month: "January",
    date: "12-01-2024",
    theme: "Entrepreneurship & Startup",
    type: "Seminar",
    level: "2",
  },
  {
    id: 23,
    name: "National Startup Day",
    month: "January",
    date: "16-01-2024",
    theme: "Entrepreneurship & Startup",
    type: "Seminar",
    level: "2",
  },
  {
    id: 24,
    name: "IIC Regional Meet 2023-24 at Banaras Hindu University, Varanasi, India",
    month: "February",
    date: "07-02-2024",
    theme: "Entrepreneurship & Startup",
    type: "Exhibition/Demo Day",
    level: "4",
  },
  {
    id: 25,
    name: "Unveiling the World of Digital Marketing",
    month: "February",
    date: "14-02-2024",
    theme: "Entrepreneurship & Startup",
    type: "Workshop",
    level: "3",
  },
  {
    id: 26,
    name: "Strategic Insights on Sales Quota & Budgeting: PSIT Self-Driven Event for IIC",
    month: "February",
    date: "14-02-2024",
    theme: "Entrepreneurship & Startup",
    type: "Workshop",
    level: "3",
  },
  {
    id: 27,
    name: "Optimizing Sales Territory Management: Insights from PSIT Self-Driven Event for IIC",
    month: "February",
    date: "15-02-2024",
    theme: "Entrepreneurship & Startup",
    type: "Seminar",
    level: "2",
  },
  {
    id: 28,
    name: "National Science Day",
    month: "February",
    date: "28-02-2024",
    theme: "Innovation & Design Thinking",
    type: "Mentoring Session",
    level: "1",
  },
  {
    id: 29,
    name: "International Women’s Day",
    month: "March",
    date: "08-03-2024",
    theme: "Entrepreneurship & Startup",
    type: "Seminar",
    level: "2",
  },
  {
    id: 30,
    name: "Srijan: The Innovative Minds",
    month: "April",
    date: "05-04-2024",
    theme: "Innovation & Design Thinking",
    type: "Competition/Hackathon",
    level: "3",
  },
  {
    id: 31,
    name: "Campus Catalyst",
    month: "April",
    date: "05-04-2024",
    theme: "Innovation & Design Thinking",
    type:"Competition/Hacakthon",
    level:"3",
  },
  {
    id: 32,
    name: "Picture Perception and Detection Test (Entrepreneurship)",
    month: "April",
    date: "06-04-2024",
    theme: "Innovation & Design Thinking",
    type: "Competition/Hackathon",
    level: "3",
  },
  {
    id: 33,
    name: "DesignX: Shape Future Create Change",
    month: "April",
    date: "06-04-2024",
    theme: "Innovation & Design Thinking",
    type: "Competition/Hackathon",
    level: "3",
  }, 
    {
      "id": 34,
      "name": "World Creativity and Innovation Day",
      "month": "April",
      "date": "21-04-2024",
      "theme": "Innovation & Design Thinking",
      "type": "Seminar",
      "level": "2"
    },
    {
      "id": 35,
      "name": "World Intellectual Property Day",
      "month": "April",
      "date": "26-04-2024",
      "theme": "IPR & Technology Transfer",
      "type": "Mentoring Session",
      "level": "1"
    },
    {
      "id": 36,
      "name": "National Technology Day",
      "month": "May",
      "date": "11-05-2024",
      "theme": "IPR & Technology Transfer",
      "type": "Seminar",
      "level": "2"
    },
    {
      "id": 37,
      "name": "World Entrepreneurs Day",
      "month": "May",
      "date": "31-05-2024",
      "theme": "Innovation & Design Thinking",
      "type": "Competition/Hackathon",
      "level": "3"
    },
    {
      "id": 38,
      "name": "Session on 'How to Plan for Start-up and Legal & Ethical Steps'",
      "month": "June",
      "date": "03-06-2024",
      "theme": "Entrepreneurship & Startup",
      "type": "Seminar",
      "level": "2"
    },
    {
      "id": 39,
      "name": "Workshop on Intellectual Property Rights (IPRs) and IP Management for Startups",
      "month": "June",
      "date": "04-06-2024",
      "theme": "IPR & Technology Transfer",
      "type": "Seminar",
      "level": "2"
    },
    {
      "id": 40,
      "name": "World Environment Day",
      "month": "June",
      "date": "05-06-2024",
      "theme": "Innovation & Design Thinking",
      "type": "Seminar",
      "level": "2"
    },
    {
      "id": 41,
      "name": "Workshop on Prototype/Process Design and Development",
      "month": "June",
      "date": "07-06-2024",
      "theme": "Innovation & Design Thinking",
      "type": "Workshop",
      "level": "3"
    },
    {
      "id": 42,
      "name": "Session/Workshop on Business Model Canvas (BMC)",
      "month": "June",
      "date": "07-06-2024",
      "theme": "Innovation & Design Thinking",
      "type": "Workshop",
      "level": "2"
    },
    {
      "id": 43,
      "name": "Start Up Charcha 2.0",
      "month": "June",
      "date": "17-06-2024",
      "theme": "Entrepreneurship & Startup",
      "type": "Expert Talk",
      "level": "1"
    },
    {
      "id": 44,
      "name": "Hustlers: The Start Up Session",
      "month": "June",
      "date": "21-06-2024",
      "theme": "Entrepreneurship & Startup",
      "type": "Expert Talk",
      "level": "1"
    },
    {
      "id": 45,
      "name": "Guiding Framework for Creating and Engaging Trained Faculty and Student IIC Members, Innovation Ambassadors (IA) in IIC Institutions, and Rewarding Mechanisms for IAs",
      "month": "July",
      "date": "29-07-2024",
      "theme": "Innovation & Design Thinking",
      "type": "Seminar",
      "level": "2"
    },
    {
      "id": 46,
      "name": "4th Anniversary of National Education Policy (NEP) 2020",
      "month": "July",
      "date": "31-07-2024",
      "theme": "Entrepreneurship & Startup",
      "type": "Seminar",
      "level": "2"
    },
    {
      "id": 47,
      "name": "Strengthening IIC Linkages with ATLs and SICs in Schools and the Framework for Providing Mentorship and Guidance",
      "month": "July",
      "date": "31-07-2024",
      "theme": "Pre-Incubation & Incubation Management",
      "type": "Seminar",
      "level": "2"
    },
    {
      "id": 48,
      "name": "Building the Pipeline of Quality Innovations and Startups in HEIs with Ecosystem Enablers by Creating and Managing YUKTI Innovation and IPR Repository (YIIR)",
      "month": "August",
      "date": "02-08-2024",
      "theme": "Entrepreneurship & Startup",
      "type": "Seminar",
      "level": "2"
    },
    {
      "id": 49,
      "name": "Orientation cum Refreshers' Session on Institution's Innovation Council Objectives, Structure, Operation for IIC Institution",
      "month": "August",
      "date": "05-08-2024",
      "theme": "Innovation & Design Thinking",
      "type": "Seminar",
      "level": "2"
    },
    {
      "id": 50,
      "name": "Session on Angel Investment/VC Funding Opportunity for Early Stage Entrepreneur",
      "month": "August",
      "date": "07-08-2024",
      "theme": "Entrepreneurship & Startup",
      "type": "Seminar",
      "level": "2"
    },
      {
        "id": 51,
        "name": "Session on Accelerators/Incubation - Opportunities for Students & Faculties - Early Stage Entrepreneurs",
        "month": "August",
        "date": "09-08-2024",
        "theme": "Entrepreneurship & Startup",
        "type": "Seminar",
        "level": "2"
      },
      {
        "id": 52,
        "name": "Organise Session on 'Lean Start-up & Minimum Viable Product/Business' - Boot Camp (or) Mentoring Session",
        "month": "August",
        "date": "12-08-2024",
        "theme": "Innovation & Design Thinking",
        "type": "Seminar",
        "level": "2"
      },
      {
        "id": 53,
        "name": "Independence Day - Celebrating Aazadi Ka Amritkal",
        "month": "August",
        "date": "15-08-2024",
        "theme": "Innovation & Design Thinking",
        "type": "Seminar",
        "level": "2"
      },
      {
        "id": 54,
        "name": "Session on Innovation/Prototype Validation – Converting Innovation into a Start-up or Session on Achieving 'Value Proposition Fit' & 'Business Fit'",
        "month": "August",
        "date": "20-08-2024",
        "theme": "Innovation & Design Thinking",
        "type": "Seminar",
        "level": "2"
      },


],

    
  "2024-25": [
    {
      id: 1,
      name: "FROM IDEA TO IMPACT - MOTIVATIONAL SESSION BY SUCCESSFUL ENTREPRENEUR/START-UP FOUNDER",
      month: "September",
      date: "09/20/2024",
      theme: "Entrepreneurship & Startup",
      type: "Seminar",
      level: "2",
    },
    {
      id: 2,
      name: "INNOVATION DAY",
      month: "October",
      date: "10/15/2024",
      theme: "Innovation & Design Thinking",
      type: "Expert Talk",
      level: "1",
    },
    {
      id: 3,
      name: "SESSION ON MIC PROGRAMMES & SCHEMES WITH DR. ABHAY JERE",
      month: "October",
      date: "10/23/2024",
      theme: "Entrepreneurship & Startup",
      type: "Expert Talk",
      level: "1",
    },
    {
      id: 4,
      name: "MY STORY - MOTIVATIONAL SESSION BY SUCCESSFUL INNOVATORS",
      month: "November",
      date: "11/07/2024",
      theme: "Entrepreneurship & Startup",
      type: "Seminar",
      level: "2",
    },
    {
      id: 5,
      name: "NATIONAL ENTREPRENEURSHIP DAY",
      month: "November",
      date: "11/09/2024",
      theme: "Entrepreneurship & Startup",
      type: "Demo Day",
      level: "3",
    },
    {
      id: 6,
      name: "NATIONAL EDUCATION DAY",
      month: "November",
      date: "11/11/2024",
      theme: "Entrepreneurship & Startup",
      type: "Seminar",
      level: "2",
    },
    {
      id: 7,
      name: "IDEA SHOWCASE: DEMO DAY/EXHIBITION/POSTER PRESENTATION OF IDEAS/POC & LINKAGE WITH INNOVATION AMBASSADORS/EXPERTS FOR MENTORSHIP SUPPORT",
      month: "November",
      date: "11/11/2024 - 11/12/2024",
      theme: "Innovation & Design Thinking",
      type: "Competition/Hackathon",
      level: "3",
    },
    {
      id: 8,
      name: "TECH EXPO- PRELIMINARY ROUND",
      month: "November",
      date: "11/14/2024 - 11/15/2024",
      theme: "Innovation & Design Thinking",
      type: "Demo Day",
      level: "3",
    },
    {
      id: 9,
      name: "TECH EXPO-FINAL ROUND",
      month: "November",
      date: "11/22/2024 - 11/23/2024",
      theme: "Innovation & Design Thinking",
      type: "Demo Day",
      level: "3",
    },
    {
      id: 10,
      name: "BASICS OF INTELLECTUAL PROPERTY RIGHTS AND ITS IMPORTANCE FOR INNOVATORS AND ENTREPRENEURS",
      month: "November",
      date: "11/30/2024",
      theme: "IPR & Technology Transfer",
      type: "WORKSHOP",
      level: "3",
    },
    {
      id: 11,
      name: "START IN UP VISIT AT PSIT, KANPUR",
      month: "December",
      date: "12/03/2024",
      theme: "Entrepreneurship & Startup",
      type: "Exposure Visit",
      level: "1",
    },
    {
      id: 12,
      name: "MUKHYAMANTRI YUVA UDYAMI VIKAS ABHIYAN, GOVERNMENT OF UTTAR PRADESH AT HBTU, KANPUR",
      month: "December",
      date: "12/19/2024",
      theme:"Entrepreneurship & Startup",
      type: "Exposure Visit",
      level: "1",
    },
    {
      id: 13,
      name: "START-UP SCREENING-ONLINE SESSION",
      month: "December",
      date: "12/23/2024 - 12/26/2024",
      theme: "Entrepreneurship & Startup",
      type: "Competition/Hackathon",
      level: "3",
    },
    {
      id: 14,
      name: "WORKSHOP ON 'STRATEGIES OF TECHNOLOGY VALUATION AND TECHNOLOGY TRANSFER IN ACADEMIC INSTITUTIONS'",
      month: "December",
      date: "12/27/2024",
      theme: "IPR & Technology Transfer",
      type: "Workshop",
      level: "2",
    },
    {
      id: 15,
      name: "WORKSHOP ON PATENT LIFE CYCLE & PATENT FILING PROCESS IN INDIA",
      month: "December",
      date: "12/27/2024",
      theme: "IPR & Technology Transfer",
      type: "Workshop",
      level: "2",
    },
    {
      id: 16,
      name: "SESSION ON 'PATENT FILING PROCESS'",
      month: "December",
      date: "12/27/2024",
      theme: "Innovation & Design Thinking",
      type: "Workshop",
      level: "2",
    },
  ],
};





const EventsPage = () => {
  // State for the selected year
  const [selectedYear, setSelectedYear] = useState("2023-24");

  // Handle year change
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="p-8">
      <div className="heading mb-[30px]">
        <h2 className="flex justify-center font-semibold text-4xl text-black pb-5">
        Event Schedule {selectedYear}
        </h2>
        <div className="flex justify-center">
          <div className="bg-green-500 h-[5px] w-[250px]" />
        </div>
        </div>
        
        {/* Year selection dropdown */}
        <div className="mb-4 flex justify-center">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="2022-23">2022-23</option>
            <option value="2023-24">2023-24</option>
            <option value="2024-25">2024-25</option>
          </select>
        </div>

        {/* Event Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse bg-white text-left">
            <thead>
              <tr className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">Event Name</th>
                <th className="py-3 px-6">Month</th>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Theme</th>
                <th className="py-3 px-6">Program Type</th>
                <th className="py-3 px-6">Level</th>
              </tr>
            </thead>
            <tbody>
              {eventData[selectedYear].map((event, index) => (
                <tr
                  key={event.id}
                  className={`border-b hover:bg-green-100 transition ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-6">{event.id}</td>
                  <td className="py-3 px-6 font-semibold text-gray-700">{event.name}</td>
                  <td className="py-3 px-6">{event.month}</td>
                  <td className="py-3 px-6">{event.date}</td>
                  <td className="py-3 px-6">{event.theme}</td>
                  <td className="py-3 px-6">{event.type}</td>
                  <td className="py-3 px-6">{event.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;










