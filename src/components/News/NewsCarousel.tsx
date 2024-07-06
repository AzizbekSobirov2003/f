import * as React from 'react';

import Image from "next/image";
// MUI
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
import { Card, CardActionArea } from "@mui/material";
// data
import { newsData } from "@/data/NewsData";
// icon images
import { Left, Right } from "@/assets/images";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function NewsCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = newsData.length - 2; // Adjust for window size

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", margin: "0 auto", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {Array.from({ length: maxSteps }).map((_, index) => {
          const startIndex = index;
          const selectedNews = newsData.slice(startIndex, startIndex + 3);

          return (
            <div key={index} className="flex justify-center">
              {selectedNews.map((step) => (
                <Card
                  key={step.id}
                  className="scroll-snap-start mr-50 rounded-10 m-5 w-[1519] flex-shrink-0 origin-center transform rounded-[10px] bg-[#EFEEEAFF] transition-transform duration-500"
                >
                  <CardActionArea>
                    <div className="h-[470px] w-[300px] rounded-[10px]">
                      <div className="flex h-[300px] w-[300px] items-center justify-center rounded-[10px]">
                        <Image
                          src={step.img}
                          alt={step.alt}
                          className="m-5 rounded-[10px]"
                        />
                      </div>
                      <p className="m-6 text-[#7A7687]">{step.datas}</p>
                      <h1 className="mx-6 -mt-5 text-[18px] font-[600]">
                        {step.name}
                      </h1>
                      <div className="mx-[20px]">
                        <p className="mb-5 py-5 text-[15px] font-[500] text-[#7A7687]">
                          {step.title}
                        </p>
                      </div>
                    </div>
                  </CardActionArea>
                </Card>
              ))}
            </div>
          );
        })}
      </AutoPlaySwipeableViews>
      <div className='ml-'>
      <Button
            className="relative bottom-[-10px]"
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <Left />
          </Button>
          <Button
            className="relative bottom-[-10px]"
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <Right />
          </Button></div>
        
       
      
    </Box>
  );
}

export default NewsCarousel;
