import React, { useState, ChangeEvent, FormEvent } from "react";

const Map = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false,
    question: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = {
      name: formData.name === "",
      phone: !/^\+?\d{10,14}$/.test(formData.phone), // Telefon formatini tekshirish
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email), // Email formatini tekshirish
      question: formData.question === "",
    };

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error);

    if (!hasErrors) {
      // Formani tozalash
      setFormData({
        name: "",
        phone: "",
        email: "",
        question: "",
      });
    }
  };

  return (
    <div className="mt-[150px]">
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4477.9909401976765!2d37.547854!3d55.862745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b537991f01afa9%3A0x53c1f16b1398a554!2z0JTQvNC40YLRgNC-0LLRgdC60L7QtSDRiC4sIDg1LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI3MjM4!5e0!3m2!1sru!2sam!4v1719345687051!5m2!1sru!2sam"
            width="650"
            height="600"
            className="rounded-[10px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="w-[650px] h-[612px] bg-white rounded-[10px] p-5"
          >
            <h1 className="text-[30px] mb-5">Остались вопросы?</h1>
            <p className="text-[rgba(122,118,135,1)] w-[417px] text-[16px] mb-5">
              Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
              координаты и наш менеджер перезвонит вам через 10 минут
            </p>
            <div className="relative w-[417px] ml-10 mb-4">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`peer w-full h-[50px] rounded-[10px] px-4 placeholder-transparent focus:outline-none ${
                  formErrors.name ? "border-red-500" : "focus:border-blue-500"
                }`}
                placeholder="Ваше имя"
              />
              <label
                className={`text-[16px] absolute left-4 ${
                  formData.name ? "top-2" : "top-1/2"
                } transform -translate-y-1/2 text-gray- transition-all ${
                  formData.name ? "" : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
                }`}
                htmlFor="name"
              >
                Ваше имя
              </label>
              {formErrors.name && (
                <p className="text-red-500 text-xs mt-1">
                  Это поле обязательно для заполнения.
                </p>
              )}
              <hr
                className=" border-t-1 border-gray-400 text-[#D5D1E1] mt-2 relative right-[40px]"
                style={{ width: "570px" }}
              />
            </div>
            <div className="relative w-[417px] ml-10 mb-4">
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`peer w-full h-[50px] rounded-[10px] px-4 placeholder-transparent focus:outline-none ${
                  formErrors.phone
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
                placeholder="Ваш телефон"
              />
              <label
                className={`text-[16px] absolute left-4 ${
                  formData.phone ? "top-2" : "top-1/2"
                } transform -translate-y-1/2 text-gray- transition-all ${
                  formData.phone ? "" : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
                }`}
                htmlFor="phone"
              >
                Ваш телефон
              </label>
              {formErrors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  Пожалуйста, введите действительный номер телефона.
                </p>
              )}
              <hr
                className=" border-t-1 border-gray-400 text-[#D5D1E1] mt-2 relative right-[40px]"
                style={{ width: "570px" }}
              />
            </div>
            <div className="relative w-[417px] ml-10 mb-4">
              <input
                type="text"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`peer w-full h-[50px] rounded-[10px] px-4 placeholder-transparent focus:outline-none ${
                  formErrors.email
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
                placeholder="Ваш email"
              />
              <label
                className={`text-[16px] absolute left-4 ${
                  formData.email ? "top-2" : "top-1/2"
                } transform -translate-y-1/2 text-gray- transition-all ${
                  formData.email ? "" : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
                }`}
                htmlFor="email"
              >
                Ваш email
              </label>
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">
                  Пожалуйста, введите действительный адрес электронной почты.
                </p>
              )}
              <hr
                className=" border-t-1 border-gray-400 text-[#D5D1E1] mt-2 relative right-[40px]"
                style={{ width: "570px" }}
              />
            </div>
            <br />
            <div className="relative w-[417px] ml-10 mb-2">
              <input
                type="text"
                id="question"
                value={formData.question}
                onChange={handleChange}
                className={`peer w-full h-[50px] rounded-[10px] px-4 placeholder-transparent focus:outline-none ${
                  formErrors.question
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
                placeholder="Ваш вопрос"
              />
              <label
                className={`text-[16px] absolute left-4 ${
                  formData.question ? "top-2" : "top-1/2"
                } transform -translate-y-1/2 text-gray- transition-all ${
                  formData.question ? "" : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
                }`}
                htmlFor="question"
              >
                Ваш вопрос
              </label>
              {formErrors.question && (
                <p className="text-red-500 text-xs mt-1">
                  Это поле обязательно для заполнения.
                </p>
              )}
              <hr
                className=" border-t-1 border-gray-400 text-[#D5D1E1] mt-2 relative right-[40px]"
                style={{ width: "570px" }}
              />
            </div>
            <div className="flex gap-10">
              <button
                type="submit"
                className="w-[134px] h-[41px] rounded-[50px] bg-teal-600 text-white"
              >
                Отправить
              </button>
              <p className="w-[406px] text-[12px]">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных данных на условиях Политики конфиденциальности.
              </p>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Map;
