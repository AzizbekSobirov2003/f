"use client";

import * as React from "react";
// MUI
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
// images
import img1 from "@/assets/images/Banner.png";
import img2 from "@/assets/images/gms_4.png";
import Image from "next/image";
import Link from "next/link";
import img3 from "@/assets/images/fibro.jpg";
import img4 from "@/assets/images/gmt_na_glavnuyu2_.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    h1: "Заголовок баннера в пару строк",
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: img1,
  },
  {
    h1: "Заголовок баннера в пару строк",
    label: "Bird",
    imgPath: img3,
  },
  {
    h1: "Заголовок баннера в пару строк",
    label: "Bali, Indonesia",
    imgPath: img4,
  },
  {
    h1: "Предлагаем уникальную программу",
    label: "Goč, Serbia",
    imgPath: img2,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <Box sx={{ height:325, maxWidth: "100%", margin: "0 auto", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} className="">
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <div className="flex items-center justify-between wi rounded-[8px]">
                  <div>
                    <h1 className="text-[48px] font-[500]">
                      {step.h1}
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                      elit, sed do eiusmod tempor
                    </p>
                    <div className="mt-5">
                      <button className="rounded-[30px] bg-[#088269FF] px-5 py-3 text-[14px] text-white">
                        Запросить цену
                      </button>
                      <Link href="/catalog">
                        <button className="mx-5 rounded-[30px] border border-gray-500 px-5 py-3 text-[14px]">
                          В каталог
                        </button>
                      </Link>
                    </div>
                  </div>
                  <Image src={step.imgPath} alt={step.label} />
                </div>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              height: 7,
              width: activeStep === index ? 34 : 7,
              backgroundColor: activeStep === index ? '#088269FF' : 'grey',
              borderRadius: 5,
              mx: 0.5,
              transition: 'width 0.3s ease-in-out',
            }}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap:3,   }}>
        <Button size="small" className="relative bottom-[70px] left-[1140px] w-[41px] h-[41px] bg-white rounded-[100px] text-black" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </Button>
        <Button size="small" className="relative bottom-[70px] left-[1150px]  w-[41px] h-[41px] bg-white rounded-[100px] text-black" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      </Box>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
