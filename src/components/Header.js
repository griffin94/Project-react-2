import React from "react";

const Header = () => {
  return (
    <header className='header'>
      <span className='fa fa-cubes header__logo' aria-hidden='true'></span>
      <div className='col'>
        <h1 className='header__title'>Przelicznik walut</h1>
        <p className='header__description'>
          W pole tekstowe wpisz kwotę, a następnie wybierz walutę. Po
          naciśnięciu przycisku "Przelicz" wpisana kwota zostanie zamieniona na
          PLN. Aktualny kurs waluty pobierany jest z API NBP.
        </p>
      </div>
    </header>
  );
};

export default Header;
