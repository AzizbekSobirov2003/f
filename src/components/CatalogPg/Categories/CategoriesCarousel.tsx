"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
import Image from "next/image";
import { Card, CardActionArea } from "@mui/material";
import { catalogData } from "@/data/CatalogData";
import { Left, Right } from "@/assets/images";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CategoriesCarousel = () => {
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
    <Box sx={{ maxWidth: "100%", margin: "0 auto", flexGrow: 1, position: 'relative',}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {Array.from({ length: maxSteps }).map((_, index) => {
          const startIndex = index * 3;
          const selectedCatalogItems = catalogData.slice(
            startIndex,
            startIndex + 3
          );

          return (
            <div key={index} className="flex justify-center ">
              {selectedCatalogItems.map((item) => (
                <Card
                  key={item.id}
                  className="scroll-snap-start mr-50 rounded-10 m-5 flex-shrink-0 origin-center transform rounded-[10px] bg-[#EFEEEAFF] transition-transform duration-500"
                >
                  <CardActionArea>
                    <div className="w-[300px] rounded-[10px]">
                      <div className="flex h-[200px] w-[300px] items-center justify-center rounded-[10px] bg-white">
                        <Image
                          src={item.img}
                          alt={item.alt}
                          className="m-5 rounded-[10px]"
                          height={200}
                        />
                      </div>
                      <div className="mx-[20px]">
                        <p className="py-5 text-[16px] font-[600]">{item.title}</p>
                      </div>
                    </div>
                  </CardActionArea>
                </Card>
              ))}
            </div>
          );
        })}
      </AutoPlaySwipeableViews>
      <Box sx={{ display: 'flex',  alignItems: 'center', position: 'absolute', top: '100%', width: '100%', transform: 'translateY(-50%)', px: 2  }}>
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{ minWidth: 0, padding: 0 }}
          className="m-3 relative bottom-[-10px]"
        >
          <Left />
        </Button>
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          sx={{ minWidth: 0, padding: 0 }}
          className="m-3 relative bottom-[-10px]"
        >
          <Right />
        </Button>
      </Box>
    </Box>
  );
};

export default CategoriesCarousel;
