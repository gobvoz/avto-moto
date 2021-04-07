function Reviews() {
  return (
    <section className="reviews">
      <h3 className="visually-hidden">Отзывы</h3>

      <button className="reviews__add-review">Оставить отзыв</button>

      <article className="review">
        <p className="review__name">Борис Иванов</p>
        <dl className="reviews__pros-cons-list">
          <dt className="reviews__pros-cons-define reviews__pros-cons-define--pros">Достоинства</dt>
          <dd className="reviews__pros-cons-describe">мощность, внешний вид</dd>
          <dt className="reviews__pros-cons-define reviews__pros-cons-define--cons">Недостатки</dt>
          <dd className="reviews__pros-cons-describe">Слабые тормозные колодки (пришлось заменить)</dd>
        </dl>
        <p className="review__comment">Комментарий</p>
        <p className="review__body">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</p>
        
        <div className="review__rating">

          <img src="img/star_red.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_red.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_red.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_gray.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_gray.png" alt="рейтинг" width="20" height="17"/>

          <span className="review__is-recommend">Советует</span>
        </div>
        <div className="review__reply">
          <span className="review__ago">1 минуту назад</span>
          <a className="review__answer" href="!#">Ответить</a>
        </div>
      </article>

      <article className="review">
        <p className="review__name">Марсель Исмагилов</p>
        <dl className="reviews__pros-cons-list">
          <dt className="reviews__pros-cons-define">Достоинства</dt>
          <dd className="reviews__pros-cons-describe">Стиль, комфорт, управляемость</dd>
          <dt className="reviews__pros-cons-define">Недостатки</dt>
          <dd className="reviews__pros-cons-describe">Дорогой ремонт и обслуживание</dd>
        </dl>
        <p className="review__comment">Комментарий</p>
        <p className="review__body">Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</p>
        <div className="review__rating">

          <img src="img/star_red.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_red.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_red.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_gray.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_gray.png" alt="рейтинг" width="20" height="17"/>

          <span className="review__is-recommend">Советует</span>
        </div>
        <div className="review__reply">
          <span className="review__ago">1 минуту назад</span>
          <a className="review__answer" href="!#">Ответить</a>
        </div>
      </article>
      
    </section>
  );
}

export default Reviews;
