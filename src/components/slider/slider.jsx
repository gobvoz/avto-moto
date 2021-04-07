function Slider() {
  return (
    <section class="slider">
      <h2 class="visually-hidden">Фотогалерея</h2>

      <div class="slider__photos new-model">
        <img class="slider__photo" src="img/slide_1.jpg" alt="Марпех 11 на фоне зданий" width="600" height="375" />
        {/* <img class="slider__photo" src="img/slide_2.jpg" alt="Внутренняя отделка кожей, деревом и металлом" width="600" height="375" />
        <img class="slider__photo" src="img/slide_3.jpg" alt="Стильная оранжевая подсветка приборной панели" width="600" height="375" /> */}
      </div>

      <div class="slider__wrapper">
        <button class="slider__button slider__button--prev">
          <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="slider__path" d="M1.00427 6.17188L6.91841 0.368597M1.00427 6.17188L6.69294 11.9692M1.00427 6.17188L19.9813 6.35128" />
          </svg>
        </button>
        
        <img class="slider__preview" src="img/slide_1.jpg" alt="Марпех 11 на фоне зданий" width="128" height="80" />
        <img class="slider__preview" src="img/slide_2.jpg" alt="Внутренняя отделка кожей, деревом и металлом" width="128" height="80" />
        <img class="slider__preview" src="img/slide_3.jpg" alt="Стильная оранжевая подсветка приборной панели" width="128" height="80" />
        
        <button class="slider__button slider__button--next">
          <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="slider__path" d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128" />
          </svg>
        </button>
      </div>

    </section>
  );
}

export default Slider;
