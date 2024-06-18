import { NextApiRequest, NextApiResponse } from "next";

export const projectData = [
  {
    id: "0",
    category: "Domestic",
    name: "Test of Economic Sense And Thinking",
    subname: "TESAT",
    organization: "Hankyung",
    grade: "Grade 2",
    certid: "8700004074",
    acquisition: "2024-04-20",
    url: "https://www.tesat.or.kr/"
  },
  {
    id: "0",
    category: "Domestic",
    name: "Test of English Proficiency by SNU",
    subname: "TEPS",
    organization: "Seoul National University",
    grade: "Grade 1(480)",
    certid: "RNXFQ8558RFTG",
    acquisition: "2024-06-08",
    url: "https://www.teps.or.kr/"
  },
  {
    id: "0",
    category: "Domestic",
    name: "Engineer Information Processing",
    subname: "정보처리기사",
    organization: "Q-Net",
    grade: "",
    certid: "24201120466G",
    acquisition: "2024-06-18",
    url: "https://www.q-net.or.kr/crf005.do?id=crf00505&gSite=Q&gId="
  },
];

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projectData);
}
