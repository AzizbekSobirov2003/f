import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { LinkIcon } from "@/assets/images";

// Custom ExpandMoreIcon
const ExpandMoreIconCustom = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  borderRadius: "50%",
  backgroundColor: "#FFFFFF",
  color: "#088269FF",
  fontWeight: "bold",
  fontSize: 18,
}));

export default function AccordionUsage() {
  return (
    <div>
      <Accordion
        defaultExpanded
        className="border-none bg-[#088269FF] shadow-none"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIconCustom>+</ExpandMoreIconCustom>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <span className="text-[18px] font-[600] text-white">О компании</span>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-[16px] font-[500] text-white">
            Но синтетическое тестирование, в своём классическом представлении,
            <br />
            допускает внедрение поэтапного и последовательного развития
            общества.
            <br />В рамках спецификации современных стандартов, сторонники
            <br />
            тоталитаризма в науке будут функционально разнесены.
            <br />
          </span>
          <h1 className="text-[#088269FF]">.</h1>
          <h1 className="text-[#088269FF]">.</h1>
          <Link href="#" className="mt-[40px] flex items-center text-white">
            Подробнее <LinkIcon />
          </Link>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mt-5 border-none bg-[#088269FF] shadow-none">
        <AccordionSummary
          expandIcon={<ExpandMoreIconCustom>+</ExpandMoreIconCustom>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <span className="text-[18px] font-[600] text-white">
            Преимущества сотрудников
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-[14px] font-[600] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mt-5 border-none bg-[#088269FF] shadow-none">
        <AccordionSummary
          expandIcon={<ExpandMoreIconCustom>+</ExpandMoreIconCustom>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <span className="text-[18px] font-[600] text-white">
            Достижения компании
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-[14px] font-[600] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mt-5 border-none bg-[#088269FF] shadow-none">
        <AccordionSummary
          expandIcon={<ExpandMoreIconCustom>+</ExpandMoreIconCustom>}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <span className="text-[18px] font-[600] text-white">
            Карьерный рост
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-[14px] font-[600] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
