import React from "react";
import styles from "./TradingButton.module.css";
const TradingButton = ({ onBuyClick, onSellClick, year }) => {
  return (
    <div>
      {/* 년도 */}
      <div className={styles.year_txt}>{year}년</div>

      {/* 매수 & 매도 버튼 */}
      <div className={styles.button_wrap}>
        {/* 매수 */}
        <button className={styles.button_buy} onClick={onBuyClick}>
          매수
        </button>

        {/* 매도 */}
        <button className={styles.button_sell} onClick={onSellClick}>
          매도
        </button>
      </div>
    </div>
  );
};

export default TradingButton;
