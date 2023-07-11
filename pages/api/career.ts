import { NextApiRequest, NextApiResponse } from "next";

export const careerData = [
  {
    id: "2",
    category: "Internship",
    name: "PLAINBIT",
    detail: "Assistant Analyst",
    date: "2022.02.01 ~ 2022.05.31",
    link: "http://plainbit.co.kr/",
    img: "/img/career_03.png",
  },
  {
    id: "1",
    category: "Lab",
    name: "DFRC",
    detail: "Undergraduate Researcher",
    date: "2021.01 ~ 2022.02",
    link: "http://forensic.korea.ac.kr/",
    img: "img/career_02.png",
  },
  {
    id: "0",
    category: "University",
    name: "Korea University",
    detail:
      "Undergraduate Student\nDepartment of Cyber Defense\nB.S in Information Security",
    date: "2019.03 ~ 2023.02",
    link: "http://korea.ac.kr",
    img: "/img/career_01.gif",
  },
  
];

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(careerData);
}
