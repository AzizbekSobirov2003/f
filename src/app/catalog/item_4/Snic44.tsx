import * as React from "react";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import Images1 from "@/assets/data/cata4.png";
import { Like, Reyt } from "@/assets/images";
import like2 from "@/assets/images/ticker_message_love_feedback_heart_chat_like_icon_258916.png";
import { useState } from "react";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();
  const [liked, setLiked] = useState(false); // State to track like status

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("successfully added to liked", { variant });
  };

  const handleClickLike = () => {
    setLiked(true); // Set liked to true when clicked
    localStorage.setItem(`likeData_3`, JSON.stringify(data));
    handleClickVariant("success")(); // Trigger success snackbar
  };

  const data = {
    id: 4,
    title: "Физиотерапевтическое оборудование",
    img: Images1,
    alt: "data images 4",
    class: "cata4",
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

export default function Snic2() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
