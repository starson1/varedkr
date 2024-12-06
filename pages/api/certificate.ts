import { NextApiRequest, NextApiResponse } from "next";

export const projectData = [
  {
    id: "0",
    category: "Domestic",
    name: "Test of Economic Sense & Thinking",
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
    name: "매경 TEST",
    subname: "MK TEST of Economic & Strategic business Thinking",
    organization: "",
    grade: "Proficient(635)",
    certid: "MK102-3239921",
    acquisition: "2024-12-06",
    url: "https://exam.mk.co.kr/"
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
  {
    id: "0",
    category: "Domestic",
    name: "SQL Developer",
    subname: "SQLD",
    organization: "DATAQ",
    grade: "",
    certid: "SQLD-053012077",
    acquisition: "2024-06-21",
    url: "https://www.dataq.or.kr/www/sub/a_04.do"
  },
  {
    id: "0",
    category: "Domestic",
    name: "Linux Master",
    subname: "리눅스마스터 2급",
    organization: "KAIT",
    grade: "2",
    certid: "LMS-2403-008675",
    acquisition: "2024-10-04",
    url: "https://www.ihd.or.kr/introducesubject1.do"

  }
];

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projectData);
}
