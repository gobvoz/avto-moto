function Modal() {
  return (
    <section className="modal">


    <div className="modal__container">
      <h2>Оставить отзыв</h2>

      <form className="modal__form" method="post">
        <fieldset className="modal__fieldset">
          <div className="modal__required modal__required__test">
            <span className="visually-hidden">Пожалуйста, заполните поле</span>
            <input className="modal__input" type="text" name="name" id="name" placeholder="Имя" aria-label="Имя пользователя" required />
          </div>
          <input type="text" name="pros" id="pros" placeholder="Достоинства" aria-label="Достоинства" />
          <input type="text" name="contras" id="contras" placeholder="Недостатки" aria-label="Недостатки" />
          <div className="modal__value">
            <span>Оцените товар:</span>
              
            <fieldset className="modal__stars">
              <input className="modal__star" type="radio" name="modal__rating" value="1" aria-label="Ужасно" checked />
              <input className="modal__star" type="radio" name="modal__rating" value="2" aria-label="Плохо" />
              <input className="modal__star" type="radio" name="modal__rating" value="3" aria-label="Сойдет" />
              <input className="modal__star" type="radio" name="modal__rating" value="4" aria-label="Хорошо" />
              <input className="modal__star" type="radio" name="modal__rating" value="5" aria-label="Отлично" />
            </fieldset>

          </div>
          <div className="modal__required">
            <span className="visually-hidden">Пожалуйста, заполните поле</span>
            <textarea className="modal__input" placeholder="Комментарий" name="comment" id="comment" required aria-label="Текст комментария"></textarea>
          </div>
        </fieldset>
        <button className="modal__submit button button--red">Оставить отзыв</button>
        <button className="modal__close" aria-label="Close modal"></button>
      </form>
    </div>
 
      
    </section>
  );
}

export default Modal;
