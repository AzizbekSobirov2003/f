import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { LinkIcon } from "@/assets/images";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion
        defaultExpanded
        className="border-none bg-[#E5E4ED] shadow-none"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <span className="text-[18px] font-[600] ">Юридические лица</span>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-[16px] font-[500] ">
            Но синтетическое тестирование, в своём классическом представлении,
            <br />
            допускает внедрение поэтапного и последовательного развития
            общества.
            <br />В рамках спецификации современных стандартов, сторонники
            <br />
            тоталитаризма в науке будут функционально разнесены.
            <br />
          </span>
          <h1 className="text-[]">.</h1>
          <h1 className="text-[#088269FF]">.</h1>
          <Link href="#" className="mt-[40px] flex items-center">
            Подробнее <LinkIcon />
          </Link>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion className="mt-5 border-none bg-[#E5E4ED] shadow-none">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <span className="text-[18px] font-[600]">
          Индивидуальные предприниматели
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-[14px] font-[600] ">
          Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.

          </span>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion className="mt-5 border-none bg-[#E5E4ED] shadow-none">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <span className="text-[18px] font-[600] ">
          Физические лица          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-[14px] font-[600]">
          Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.
          </span>
        </AccordionDetails>
      </Accordion>
      {/*  */}
  
    </div>
  );
}
