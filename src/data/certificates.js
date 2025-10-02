// src/data/certificates.js
import cert1 from '../assets/certificates/cert1.png';
import cert2 from '../assets/certificates/cert2.png';
import cert3 from '../assets/certificates/cert3.png';
import cert4 from '../assets/certificates/cert4.png';

const certificates = [
  {
    title: "Web Design",
    place: "1st Place",
    issuer: "M.E.S. College of Arts and Commerce, Zuarinagar, Goa",
    date: "22-02-2025",
    imageSrc: cert1
  },
  {
    title: "Technotronics",
    place: "Runners up",
    issuer: "Dnyanprasarak Mandal's College and Research Centre Assagao, Bardez, Goa",
    date: "24-01-2025",
    imageSrc: cert2
  },
  {
    title: "Lenovo Leap - Intro to AI-ML-DL",
    place: "Internship-Completion",
    issuer: "Lenovo",
    date: "20-07-2025",
    imageSrc: cert3
  },
  {
    title: "Basics of AI-ML",
    place: "Course",
    issuer: "HP-Life",
    date: "06-08-2025",
    imageSrc: cert4
  }
];

export default certificates;  // ✅ THIS IS REQUIRED
