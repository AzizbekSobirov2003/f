import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import Image from "next/image";
import { catalogData } from "@/data/CatalogData";
import CatalogHandleBusket from "./CatalogHandleBusket";
import CatalogHandleFast from "./CatalogFast";
import { Left, Right } from "@/assets/images";
import { Card } from "@mui/material";

const HorizontalCarousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Math.ceil(catalogData.length / 3);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ position: 'relative',  maxWidth: '100%', margin: '0 auto', flexGrow: 1 }}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {Array.from({ length: maxSteps }).map((_, index) => {
          const startIndex = index * 3;
          const selectedCatalogItems = catalogData.slice(startIndex, startIndex + 3);

          return (
            <div key={index} className="flex justify-center overflow-hidden">
              {selectedCatalogItems.map((item) => (
                <Card
                  key={item.id}
                  className="scroll-snap-start mr-50 rounded-10 m-5 flex-shrink-0 origin-center transform rounded-[10px] bg-[#EFEEEAFF] transition-transform duration-500"
                >
                  <button className="absolute left-5 top-5 rounded-[20px] border border-[#088269FF] px-3 py-2 font-[600] text-[#088269FF]">
                    Новинка
                  </button>
                  <div className="w-[300px] rounded-[10px]">
                    <div className="flex items-center justify-center rounded-[10px] bg-white">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        className="m-5 rounded-[10px]"
                        width={300}
                        height={200}
                      />
                    </div>
                    <div className="mx-[20px]">
                      <p className="py-5 text-[16px] font-[600]">
                        {item.nameE} <br /> {item.nameL}
                      </p>
                      <p>Артикул: {item.aticul}</p>
                      <p>{item.nalich}</p>
                      <p className="text-[18px] font-[600]">{item.money}</p>
                      <div className="mb-5 mt-5">
                        <CatalogHandleBusket data={item} />
                        <CatalogHandleFast item={item} />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          );
        })}
      </SwipeableViews>
      <Box sx={{ position: 'absolute', bottom: '-6%', left: '10%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{ minWidth: 0, padding: 0, marginRight: 1 }}
        >
          <Left />
        </Button>
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          sx={{ minWidth: 0, padding: 0, marginLeft: 1 }}
        >
          <Right />
        </Button>
      </Box>
    </Box>
  );
};

export default HorizontalCarousel;
