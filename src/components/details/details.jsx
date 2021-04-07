function Details() {
  return (
    <section class="details">
      <h2 class="visually-hidden">Технические характеристики</h2>

      <p class="details__title">Марпех 11</p>

      <ul class="details__list">
        <li class="details__element details__element--fuel-type"><p class="details__description">Бензин</p></li>
        <li class="details__element details__element--gear-type"><p class="details__description">Механика</p></li>
        <li class="details__element details__element--horse-power"><p class="details__description">100 л.с.</p></li>
        <li class="details__element details__element--engine-value"><p class="details__description">1.4 л</p></li>
      </ul>

      <div class="details__prices">
        <p class="details__price details__price--current">2 300 000 ₽</p>
        <p class="details__price details__price--old">2 400 000 ₽</p>
      </div>

      <button class="details__submit" type="button">Оставить заявку</button>
      <button class="details__credit" type="button">В кредит от 11 000 ₽</button>

    </section>
  );
}

export default Details;
