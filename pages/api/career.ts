import { NextApiRequest, NextApiResponse } from "next";

export const careerData = [
  {
    id: "3",
    category: "work",
    subcategory: "Military Serving",
    name: "ROKA Air Force",
    detail: "정보보호병",
    date: "2023.08.14 - 2025.05.14",
    link: "",
    img: "/img/career_03.png",
  },
  {
    id: "2",
    category: "work",
    subcategory: "Internship",
    name: "PLAINBIT",
    detail: "Assistant Analyst",
    date: "2022.02.01 - 2022.05.31",
    link: "http://plainbit.co.kr/",
    img: "/img/career_03.png",
  },
  {
    id: "1",
    category: "work",
    subcategory: "Lab",
    name: "DFRC",
    detail: "Undergraduate Researcher",
    date: "2021.01 - 2022.02",
    link: "http://forensic.korea.ac.kr/",
    img: "img/career_02.png",
  },
  {
    id: "0",
    category: "scholar",
    subcategory: "B.S in Information Security",
    name: "Korea University",
    detail:
      "Undergraduate Student\nDepartment of Cyber Defense",
    date: "2019.03 - 2023.02",
    link: "http://korea.ac.kr",
    img: "/img/career_01.gif",
  },
  {
    id: "5",
    category: "scholar",
    subcategory: "High School",
    name: "Gaepo High School",
    detail:
      "High School Student",
    date: "2014.03 - 2017.02",
    link: "https://gaepo.sen.hs.kr/",
    img: "/img/career_01.gif",
  }
  
];

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(careerData);
}
