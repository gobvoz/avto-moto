function Reviews() {
  return (
    <section class="reviews">
      <h3 class="visually-hidden">Отзывы</h3>

      <button class="reviews__add-review">Оставить отзыв</button>

      <article class="review">
        <p class="review__name">Борис Иванов</p>
        <dl class="reviews__pros-cons-list">
          <dt class="reviews__pros-cons-define reviews__pros-cons-define--pros">Достоинства</dt>
          <dd class="reviews__pros-cons-describe">мощность, внешний вид</dd>
          <dt class="reviews__pros-cons-define reviews__pros-cons-define--cons">Недостатки</dt>
          <dd class="reviews__pros-cons-describe">Слабые тормозные колодки (пришлось заменить)</dd>
        </dl>
        <p class="review__comment">Комментарий</p>
        <p class="review__body">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</p>
        
        <div class="review__rating">

          <img src="img/star_red.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_red.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_red.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_gray.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_gray.png" alt="рейтинг" width="20" height="17"/>

          {/* <fieldset class="review__stars">
            <input class="review__star" type="radio" name="review__rating" value="1" aria-label="Ужасно" checked />
            <input class="review__star" type="radio" name="review__rating" value="2" aria-label="Плохо" />
            <input class="review__star" type="radio" name="review__rating" value="3" aria-label="Сойдет" />
            <input class="review__star" type="radio" name="review__rating" value="4" aria-label="Хорошо" />
            <input class="review__star" type="radio" name="review__rating" value="5" aria-label="Отлично" />
          </fieldset> */}

          <span class="review__is-recommend">Советует</span>
        </div>
        <div class="review__reply">
          <span class="review__ago">1 минуту назад</span>
          <a class="review__answer" href="!#">Ответить</a>
        </div>
      </article>

      <article class="review">
        <p class="review__name">Марсель Исмагилов</p>
        <dl class="reviews__pros-cons-list">
          <dt class="reviews__pros-cons-define">Достоинства</dt>
          <dd class="reviews__pros-cons-describe">Стиль, комфорт, управляемость</dd>
          <dt class="reviews__pros-cons-define">Недостатки</dt>
          <dd class="reviews__pros-cons-describe">Дорогой ремонт и обслуживание</dd>
        </dl>
        <p class="review_comment">Комментарий</p>
        <p class="review_body">Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</p>
        <div class="review__rating">

          <img src="img/star_red.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_red.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_red.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_gray.png" alt="рейтинг" width="20" height="17"/>
          <img src="img/star_gray.png" alt="рейтинг" width="20" height="17"/>

          <span class="review__is-recommend">Советует</span>
        </div>
        <div class="review__reply">
          <span class="review__ago">1 минуту назад</span>
          <a class="review__answer" href="!#">Ответить</a>
        </div>
      </article>
      
    </section>
  );
}

export default Reviews;
