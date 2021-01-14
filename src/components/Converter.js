import React from "react";

const Converter = ({ setResult }) => {
  const getExchangeRate = async (currencyName) => {
    try {
      const response = await fetch(
        `https://api.nbp.pl/api/exchangerates/rates/a/${currencyName}/?format=json`
      );
      const parsedResponse = await response.json();
      return parsedResponse.rates[0].mid;
    } catch {
      throw new Error("Failure during fetch data");
    }
  };

  const convertCurrency = async (data) => {
    try {
      setResult({ isLoading: true });
      const exchangeRate = await getExchangeRate(data.currencyName);
      const result = {
        result: (data.currencyValue * exchangeRate).toFixed(2),
        currencyValue: data.currencyValue,
        currencyName: data.currencyName,
        exchangeRate: exchangeRate,
        isLoading: false,
      };
      setResult(result);
    } catch (err) {
      alert(err);
      setResult({ isLoading: false });
    }
  };

  const isValuePositiveNumber = (input, value) => {
    const re = /(^\d*\.?\d*[1-9]+\d*$)|(^[1-9]+\d*\.\d*$)/;
    const result = re.test(value);
    if (result) {
      input.classList.remove("text-field__input--error");
      input.nextElementSibling.textContent = "";
    } else {
      input.classList.add("text-field__input--error");
      input.nextElementSibling.textContent = "Niepoprawna wartość";
    }

    return result;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      currencyValueInput: e.target.elements["currency-amount"],
      currencyName: e.target.elements["currency-name"].value,
      currencyValue: e.target.elements["currency-amount"].value.replace(
        /,/,
        "."
      ),
    };
    isValuePositiveNumber(
      formData.currencyValueInput,
      formData.currencyValue
    ) && convertCurrency(formData);
  };

  return (
    <div className='converter'>
      <form
        className='converter__form'
        id='currency-form'
        onSubmit={submitHandler}
      >
        <div className='text-field'>
          <label htmlFor='currency-amount' className='label text-field__label'>
            Kwota
          </label>
          <input
            type='text'
            className='text-field__input'
            id='currency-amount'
            placeholder='Wpisz'
            autoComplete='off'
          />
          <div className='text-field__validation'></div>
        </div>
        <div className='drop-down'>
          <label htmlFor='currency-name' className='label drop-down__label'>
            Waluta
          </label>
          <select className='drop-down__select' id='currency-name'>
            <option value='EUR' className='drop-down__option'>
              EUR
            </option>
            <option value='USD' className='drop-down__option'>
              USD
            </option>
            <option value='CHF' className='drop-down__option'>
              CHF
            </option>
          </select>
        </div>
        <button className='button'>Przelicz</button>
      </form>
    </div>
  );
};

export default Converter;
