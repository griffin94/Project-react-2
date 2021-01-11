import React from "react";

const Result = ({ result }) => {
  const headerOutput = result.currencyValue
    ? `${result.currencyValue} ${result.currencyName} = ${result.result} PLN`
    : "";
  const paragraphOutput = result.currencyValue ? (
    <span>
      <b>{`1 ${result.currencyName}`}</b> to{" "}
      <b>{`${result.exchangeRate} zł.`}</b>
    </span>
  ) : (
    ""
  );
  return (
    <div className='result'>
      <h3 className='result__header'>{headerOutput}</h3>
      <p className='result__info'>{paragraphOutput}</p>
      {result.isLoading && <div className='loader'></div>}
    </div>
  );
};

export default Result;
