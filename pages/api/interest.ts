import { NextApiRequest, NextApiResponse } from "next";

export const interestData = [
  {
    id: "0",
    category: "Digital Forensic & Incident Response",
    name: "File System",
    detail:
      "",
    img: "/img/interest_01.png",
  },
  {
    id: "1",
    category: "Digital Forensic & Incident Response",
    name: "e-Discovery",
    detail:
      "",
    img: "/img/interest_02.jpeg",
  },
  {
    id: "2",
    category: "Digital Forensic & Incident Response",
    name: "Windows Forensic",
    detail:
      "",
    img: "/img/interest_03.jpg",
  },
  {
    id: "3",
    category: "Digital Forensic & Incident Response",
    name: "MAC Forensic",
    detail:
      "",
    img: "/img/interest_04.jpeg",
  },
  {
    id: "5",
    category: "Vulnerability Analysis",
    name: "Reverse Engineering",
    detail:
      "",
    img: "/img/interest_05.jpeg",
  },
  {
    id: "6",
    category: "Vulnerability Analysis",
    name: "Embedded System",
    detail:
      "",
    img: "/img/interest_06.jpg",
  },
  {
    id: "7",
    category: "Development Stack",
    name: "Python",
    detail:
      5,
    img: "/img/interest_07.png",
  },
  
  {
    id: "8",
    category: "Development Stack",
    name: "C",
    detail:
      4,
    img: "/img/interest_08.jpeg",
  },
  {
    id: "9",
    category: "Development Stack",
    name: "C++",
    detail:
      4,
    img: "/img/interest_09.png",
  },
  {
    id: "10",
    category: "Development Stack",
    name: "TypeScript",
    detail:
      2,
    img: "/img/interest_10.png",
  },
];

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(interestData);
}
