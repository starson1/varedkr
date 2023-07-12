import { NextApiRequest, NextApiResponse } from "next";

export const projectData = [
  {
    id: "2",
    category: "Commercial",
    name: "FAB Risk Analysis",
    company: "SK Hynix",
    position: "Software Development",
  },
  {
    id: "1",
    category: "Commercial",
    name: "Carpe Forensics",
    company: "DFRC",
    position: "GUI Development",
  },
  {
    id: "1",
    category: "Commercial",
    name: "Police Lab (Project AF)",
    company: "Korean National Police Agency",
    position: "Secure Messenger Analysis",
  },
  {
    id: "1",
    category: "Commercial",
    name: "Police Lab (Project AF)",
    company: "Korean National Police Agency",
    position: "Crypto Wallet Analysis",
  },
  {
    id: "1",
    category: "Commercial",
    name: "Network Penetration Testing",
    company: "ROKA DoD",
    position: "Vulnerability Analysis",
  },
  {
    id: "1",
    category: "Commercial",
    name: "Implementation of In-Car and External Artifact Collection and Analysis Technology using Event-Based System",
    company: "IITP",
    position: "Embedded system Analysis",
  },
  {
    id: "0",
    category: "Personal",
    name: "MS Windows Server Analysis",
    company:"",
    position: "Analyzer",
  },
  {
    id: "0",
    category: "Personal",
    name: "Stock Trade Automation",
    company:"",
    position: "Developer",
  },
  {
    id: "0",
    category: "Personal",
    name: "TeamBlind Application Analysis",
    company:"",
    position: "Analyzer",
  },
  {
    id: "0",
    category: "Personal",
    name: "Forensic Cheatsheet",
    company:"",
    position: "Developer, Writer",
  },
  {
    id: "0",
    category: "Personal",
    name: "IVI Analysis Environment Setup",
    company:"",
    position: "Project Manager",
  },
];

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projectData);
}
