const data = `Senseoriginal Technologies | Mohammed Saalim / Harshit Goel | IoT, SaaS & Deeptech | Early Revenue | senseoriginal.com
Ochaat Pvt Ltd | Somnath Das / Dr Manish Kumar | Finance & Electronics | Pre-seed | ochaat.in
KCKM Pvt Ltd | Somnath Das / Dr Manish Kumar | Electronics | Pre-seed
Good Ferment Beverages | Yash Raj Bhatia | Food Technology | Pre-Seed | baykombucha.com
Strinity Automation | Nishant Pal | Tech-Furniture | Development | strinityautomation.in
Samocha | Shivendra Gupta | Food & Beverage | Growth/Scale | samocha.co
Dualite Technology | Prakhar Tandon | SaaS | Development | dualite.dev
BharatOne Care | Naman Agarwal | Healthcare | Pre-Seed | bharatonecare.com
FluxVisio Dynamics | Shreyansh Shukla / Ishita Chaturvedi | AI, Fintech | Pre-seed
Soulo LLP | Arpan Shukla / Shriyaansh Shukla | AI, IoT, Sustainability | Development | soulo.co.in
Wyvate Tech | Sanchit Gupta | SaaS/Enterprise Software | Development | wyvate.com
Greenhale Wellness (Kojo Life) | Akash Sagar | Personal Care | Growth/Scale | kojolife.com
Shakti Wearables | Srishti Sharma | Deep Tech / IoT | Development | shaktiwearables.com
EPR Recyclers | Kohima Dhandhania | Sustainability | Scaling | eprrecycler.com
Srishti Sharma LLP | Srishti Sharma | Deep Tech / IoT | Development | shaktiwearables.com
Avyukt Core Technology | Anshuman Singh / Shreya Mishra / Anuj Shukla | IT | Scaling | avyuktcoretechnologies.com
Nutty Village (Freshily19) | Aman Kumar | Agri-Tech / Food | Early Revenue
VN Organics | Nisha Niranjan | Food & Beverages | MVP
100service (Homivo) | Harsh Katiyar | Home Services | Early Revenue | 100service.in
Edubuk Technologies | Shivani Mehrotra | Education, Blockchain, AI | Early Revenue | edubuk.io
Samrupa Tech LLP | Samar Choudhury | Automobile, Sustainability | Prototyping | samrupa.com
Saat Phere | Manoj Kumar | Wedding & Events, AI | Early Revenue | saat-phere.in
Clean Vitals (Dassonz) | Dr. Soumyakant Das | Food & Health Tech | Early Revenue | cleanvitals.com
Campus Haat | Guddu Kumar | FoodTech | Early Revenue | campushaat.com
GreenArrive | Shubham Gupta / Sachin Sengar | Agritech | Early Revenue
Tepi AI | Akshita Bhardwaj | Education, AI | Ideation | tepiai.com
Raman Research & Innovation | Lavitra Sahu | Robotics / IoT | Ideation | wegyanik.in
ADAS Power Solutions | Dhruv Agarwal | Technology Hardware | Prototyping
RaySync Innovation | Gaurav Tiwari | IoT | Ideation | raysyncinnovation.in
Tackle Studioz | Aryan Bajpai | IT Services | — | tacklestudioz.com
Arixolve Ventures | Anmol Mishra | IT Services | —
RASS Neuro Dynamics | Sparsh Verma | IoT / Automation | Early Traction
VOIKES Technologies | Ananvay Pandey | Human-Centric / Med-Tech | — | voikes.framer.website
Trinova Innovation | Akash Sahu | IoT Technology | —
Aarush Eco Tech | Dr. Amit Singh Chauhan | AI/ML | — | ecotech.co.in
Thinktechno / Adflix | Ms. Anannya Sharma | AI/ML | — | exhiby.in
Fibra Clothing | Yogesh Singh | Textile & Apparel | —
Edufutura | Nishant Dixit | IT Services | —
Kanpur Aero Modelling Club | Aditya Kumar Kushwaha | Education Technology | —
Zerythron | Mo Ryan Yunus | Waste Management | —`;

const startups = data.split('\n').map(line => {
  const [name, founders, industry, stage, website] = line.split('|').map(s => s.trim());
  return {
    name,
    founders,
    industry,
    stage,
    website: website || '',
    description: \`A PSIT-SIF incubated startup specializing in \${industry}.\`
  };
});

console.log(JSON.stringify(startups, null, 2));
