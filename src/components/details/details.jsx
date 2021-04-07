function Details() {
  return (
    <section className="details">
      <h2 className="visually-hidden">Технические характеристики</h2>

      <p className="details__title">Марпех 11</p>

      <ul className="details__list">
        <li className="details__element details__element--fuel-type"><p className="details__description">Бензин</p></li>
        <li className="details__element details__element--gear-type"><p className="details__description">Механика</p></li>
        <li className="details__element details__element--horse-power"><p className="details__description">100 л.с.</p></li>
        <li className="details__element details__element--engine-value"><p className="details__description">1.4 л</p></li>
      </ul>

      <div className="details__prices">
        <p className="details__price details__price--current">2 300 000 ₽</p>
        <p className="details__price details__price--old">2 400 000 ₽</p>
      </div>

      <button className="details__submit" type="button">Оставить заявку</button>
      <button className="details__credit" type="button">В кредит от 11 000 ₽</button>

    </section>
  );
}

export default Details;
