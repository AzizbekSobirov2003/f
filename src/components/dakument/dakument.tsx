import AccordionUsage from "./Accordion";
import Link from "next/link";
const dakument = () => {
  return (
    <div className="mt-[100px] bg-[#E5E4ED]">
      <div className="flex justify-between p-10">
        <div>
          <br />
          <br />
          <br />
          <h1 className="m-[0px] text-[30px] font-[500]  w-[395px]">
          Документы, необходимые для получения груза
          </h1>
          <br />
          <p className=" w-[540px] text-[16px]">По копиям доверенностей и доверенностям с незаполненными обязательными реквизитами отгрузка не производится</p>
        </div>
        <div className="w-[50%]">
          <AccordionUsage />
        </div>
      </div>
    </div>
  );
};

export default dakument;
