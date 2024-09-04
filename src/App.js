import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import coin_img from "./assets/dollar.png";
import disabled_coin from "./assets/disabled_coin.png";
import flat_coin from "./assets/flat_icon.png";

const App = () => {
  const maxCoins = 10;
  const [coins, setCoins] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [accumulatedCoins, setAccumulatedCoins] = useState([]);
  const telegram = window.Telegram.WebApp;

  const handleDropCoin = useCallback(() => {
    if (clicks + 1 <= maxCoins && accumulatedCoins.length < maxCoins) {
      setClicks((prevClick) => prevClick + 1);
      const newCoin = {
        id: Date.now(),
        left: Math.random() * 90 + "%",
      };

      // CREATE COIN FALLING ANIMATION BY ADDING PUSHING COIN DATA TO THE ARRAY
      setCoins((prevCoins) => [...prevCoins, newCoin]);

      setTimeout(() => {
        setCoins((prevCoins) =>
          prevCoins.filter((coin) => coin.id !== newCoin.id)
        );
        // DISPLAY COINS ON THE SCREEN PREVIOUS ANIMATION HAS ENDED
        setAccumulatedCoins((prevCoins) => [...prevCoins, newCoin]);
      }, 2000);

      // REMOVE COINS FROM SCREEN AFTER 9 SECONDS
      setTimeout(() => {
        setAccumulatedCoins((prevCoins) =>
          prevCoins.filter((coin) => coin.id !== newCoin.id)
        );
        setClicks(0);
      }, 9000);
    }
  }, [clicks, accumulatedCoins, maxCoins]);

  useEffect(() => {
    if (window.Telegram && telegram) {
      telegram.ready();
    }
  }, [telegram]);

  return (
    <div className="App relative h-screen">
      <div onClick={handleDropCoin} className="pt-8 pb-4 flex  justify-center">
        {clicks < maxCoins && accumulatedCoins.length < maxCoins ? (
          <div className="cursor-pointer">
            <img src={coin_img} alt="coin" className="w-[80px] h-[80px]" />
          </div>
        ) : (
          <div className="cursor-not-allowed">
            <img
              src={disabled_coin}
              alt="coin"
              className="w-[140px] h-[140px]"
            />
          </div>
        )}
      </div>
      {coins.map((coin) => (
        <div key={coin.id} className="coin" style={{ left: coin.left }}>
          <img src={coin_img} alt="coin svg" className=" w-[60px] h-[60px]" />
        </div>
      ))}

      <div className="absolute bottom-10">
        <div className="flex flex-row-reverse flex-wrap items-center gap-3">
          {accumulatedCoins.map((coins, index) => {
            return (
              <div key={index}>
                {" "}
                <img
                  src={flat_coin}
                  alt="coin svg"
                  className=" w-[30px] h-[30px]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
