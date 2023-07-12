import { NextApiRequest, NextApiResponse } from "next";

export const paperData = [
  {
    id: "2",
    category: "SCI",
    name: "Data reconstruction and recovery of deduplicated files having non-resident attributes in NTFS volume",
    authors: "Sang Hyuk An, Sangjin Lee, Jaehyeok Han",
    date: "2023.05.20",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S266628172300080X?via%3Dihub",
    place: "FSI-DI",
    position: "First Author",
  },
  {
    id: "1",
    category: "KCI",
    name: "Firmware acquisition and analysis environment establishment of automotive electronic control unit using chip-off methodology",
    authors: "Sang Hyuk An , Dong-Young Kim, Si-Hyeong Jeong, You-Kyeong Ko, Ye-Jun Lee, Yu-Jin Bae, Jin-myeong Park",
    date: "2023.06.??",
    link: "",
    place: "KIISC",
    position: "First Author",    
  },
  {
    id: "0",
    category: "KCI",
    name: "Secure and Efficient Package Management Techniques in Closed Networks",
    authors: "Gun-hee Ahn, Sang-hyuk An, Dong-kyun Lim, Su-hwan Jeong, Jaewoo Kim, and Youngjoo Shin",
    date: "2021.??.??",
    link: "",
    place: "KTCCS",
    position: "First Author",
  },
  
];

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(paperData);
}
