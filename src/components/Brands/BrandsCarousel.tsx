"use client";
import * as React from "react";
// MUI
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
// next images
import Image from "next/image";
// data
import { brandsData } from "@/data/BrandsData";
//icon images
import { Left, Right } from "@/assets/images";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function BrandsCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = brandsData.length - 2; // Adjust for window size

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
          const selectedBrands = brandsData.slice(startIndex, startIndex + 3);

          return (
            <div key={index} className="flex justify-center">
              {selectedBrands.map((step) => (
                <div key={step.id} className="mx-2 rounded-[10px] border">
                  <div className="flex h-[200px] items-center justify-center rounded-[10px] bg-white">
                    <Image
                      src={step.img}
                      className="rounded-[10px]"
                      alt={step.alt}
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="mx-5 p-5 text-[16px] font-[500]">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </AutoPlaySwipeableViews>
          <Button className="relative bottom-[-10px]" size="small" onClick={handleBack} disabled={activeStep === 0}>
            <Left />
          </Button>
          <Button className="relative bottom-[-10px]"
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            
          >
            <Right />
          </Button>
        
      
      
    </Box>
  );
}

export default BrandsCarousel;
