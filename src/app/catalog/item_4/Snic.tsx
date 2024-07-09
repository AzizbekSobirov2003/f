import * as React from "react";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import Images1 from "@/assets/data/cata4.png";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    enqueueSnackbar("Savatchaga muvaffaqiyatli qo'shildi", { variant });
  };

  const data = {
    id: 4,
    title: "Физиотерапевтическое оборудование",
    img: Images1,
    alt: "data images 4",
    class: "cata4",
  };

  const addToCart = () => {
    localStorage.setItem(`cartData_4`, JSON.stringify(data));
    handleClickVariant("success")();
  };

  return (
    <React.Fragment>
      <span
        onClick={addToCart}
        className="cursor-pointer rounded-3xl bg-[#088269FF] px-6 py-3 text-white active:scale-95"
      >
        Добавить в корзину
      </span>
    </React.Fragment>
  );
}

export default function CartComponent() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
