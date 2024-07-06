import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import Images1 from "@/assets/data/cata1.png";
import ButtonMy from "./Button";
import { Like, Reyt } from "@/assets/images";
import like2 from "@/assets/images/ticker_message_love_feedback_heart_chat_like_icon_258916.png";
import Image from "next/image";
function MyApp() {
  const { enqueueSnackbar } = useSnackbar();
  const [liked, setLiked] = useState(false); // State to track like status

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Successfully added to like", { variant });
  };

  const data = {
    id: 1,
    title: "Ветеринарное оборудование",
    img: Images1,
    alt: "data images",
    class: "cata1",
  };

  const handleClickLike = () => {
    setLiked(true); // Set liked to true when clicked
    localStorage.setItem(`likeData_1`, JSON.stringify(data));
    handleClickVariant("success")(); // Trigger success snackbar
  };

  return (
    <React.Fragment>
      <span
        onClick={handleClickLike}
        className={`cursor-pointer rounded-3xl px-6 py-3 text-white`}
      >
        {liked ? (
          <img src={like2.src} alt="Like Icon" className="h-6 w-6" />
        ) : (
          <Like />
        )}
      </span>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
