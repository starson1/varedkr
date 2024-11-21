import { NextApiRequest, NextApiResponse } from "next";

export const paperData = [
  {
    id: "10",
    category: "2024",
    name: "DFRWS Challenge 2023 - Troubled Elevator",    
    link: "https://dfrws.org/forensic-challenges/",
    position : "1st place",
    place: "DFRWS"
  },
  {
    id: "9",
    category: "2023",
    name: "Cybercrime Forensics specialist group poster competition",
    link: "https://www.bcs.org/membership-and-registrations/member-communities/cybercrime-forensics-specialist-group/competitions/cybercrime-forensics-specialist-group-poster-competition-2023/",
    position: "1st place",
    place: "BCS",
    
  },
  {
    id: "8",
    category: "2023",
    name: "KIISC Summer Conference",
    link: "https://cisc.or.kr/notice/article/977",
    position: "Speaker",
    place: "Korea Institute of Information Security & Cryptology",
  },
  {
    id: "7",
    category: "2022",
    name: "2022 Codegate BoB Session",
    link: "https://codegate.org/",
    position: "Speaker",
    place: "Codegate",
  },
  {
    id: "6",
    category: "2022",
    name: "디지털 범인을 찾아라 8회",
    link: "https://forensickorea.org/wp/?page_id=38&mod=document&uid=121",
    position: "Participation Award",
    place: "Korea Institue of Forensic Sciences",
  },
  {
    id: "5",
    category: "2022",
    name: "Belka CTF #5: Party Girl - Missing",
    link: "https://belkasoft.com/ctf",
    position: "2nd place",
    place: "Belkasoft",
  },
  {
    id: "4",
    category: "2022",
    name: "Best of Best 11th (Vuln Track)",
    link: "https://www.kitribob.kr/",
    position: "Trainee",
    place: "Korea Information Technology Research Institute",
  },
  {
    id: "3",
    category: "2022",
    name: "DFRWS Challenge 2021",
    link: "https://dfrws.org/forensic-challenges/",
    position: "TBA",
    place: "DFRWS",
  },
  {
    id: "2",
    category: "2021",
    name: "digital forensic challenge 2021",
    link: "https://dfchallenge.org/",
    position: "5th place",
    place: "Korea Institute of Information Security & Cryptology",
  },
  {
    id: "1",
    category: "2021",
    name: "Korea University CC CTF",
    link: "https://dreamhack.io/ctf/22",
    position: "examiner",
    place: "Korea University",
  },
  {
    id: "0",
    category: "2020",
    name: "AI Security Education",
    link: "https://www.kisia.or.kr/talent_support/education_business/ai_security_technology_development/",
    position: "Trainee",
    place: "Korea Internet & Security Agency",
  },
  
];

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(paperData);
}
