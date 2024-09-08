import React from "react";
import { FaStar } from "react-icons/fa";
import yandeks from "../../src/assets/images/yandeks.svg";

const Comments = () => {
  const stars = new Array(5).fill(true);

  return (
    <div className="p-4">
      <div className="mb-4">
        <b className="text-2xl">Отзывы</b>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="shadow-lg rounded-lg p-4">
          <div className="flex items-center mb-2">
            <img src={yandeks} alt="yandeks" className="w-12 h-12 mr-4" />
            <div>
              <p className="text-[#8C8C8C]">Яндекс</p>
              <p>Александра</p>
              <p className="text-[#8C8C8C]">Апрель 2024</p>
              <div className="flex gap-1 mt-1">
                {stars.map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
          <p>
            Я очень доволен покупкой машины в данном автосалоне. Все сотрудники
            были приветливые и готовы помочь на каждом этапе выбора и
            приобретения авто. Мне предоставили отличные условия по
            кредитованию, а также сделали хорошую скидку на машину. Все
            документы оформили быстро и без лишних хлопот
          </p>
        </div>
        <div className="shadow-lg rounded-lg p-4">
          <div className="flex items-center mb-2">
            <img src={yandeks} alt="yandeks" className="w-12 h-12 mr-4" />
            <div>
              <p className="text-[#8C8C8C]">Яндекс</p>
              <p>Александра</p>
              <p className="text-[#8C8C8C]">Апрель 2024</p>
              <div className="flex gap-1 mt-1">
                {stars.map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
          <p>
            Я очень доволен покупкой машины в данном автосалоне. Все сотрудники
            были приветливые и готовы помочь на каждом этапе выбора и
            приобретения авто. Мне предоставили отличные условия по
            кредитованию, а также сделали хорошую скидку на машину. Все
            документы оформили быстро и без лишних хлопот
          </p>
        </div>
        <div className="shadow-lg rounded-lg p-4">
          <div className="flex items-center mb-2">
            <img src={yandeks} alt="yandeks" className="w-12 h-12 mr-4" />
            <div>
              <p className="text-[#8C8C8C]">Яндекс</p>
              <p>Александра</p>
              <p className="text-[#8C8C8C]">Апрель 2024</p>
              <div className="flex gap-1 mt-1">
                {stars.map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
          <p>
            Я очень доволен покупкой машины в данном автосалоне. Все сотрудники
            были приветливые и готовы помочь на каждом этапе выбора и
            приобретения авто. Мне предоставили отличные условия по
            кредитованию, а также сделали хорошую скидку на машину. Все
            документы оформили быстро и без лишних хлопот
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
