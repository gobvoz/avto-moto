import Chars from '../chars/chars';
// import Reviews from '../reviews/reviews';
// import Contacts from '../contacts/contacts';

function Content() {
  return (
    <section class="content">
      <h2 class="visually-hidden">Дополнительная информация</h2>

      <ul class="content__list">
        <li class="content__element">
          <input class="content__check visually-hidden" type="radio" name="category" id="chars" value="1" checked />
          <label class="content__label" for="chars">Характеристики</label>
        </li>
        <li class="content__element">
          <input class="content__check visually-hidden" type="radio" name="category" id="reviews" value="2" />
          <label class="content__label" for="reviews">Отзывы</label>
        </li>
        <li class="content__element">
          <input class="content__check visually-hidden" type="radio" name="category" id="contacts" value="3" />
          <label class="content__label" for="contacts">Контакты</label>
        </li>
      </ul>

      <Chars />
      {/* <Reviews />
      <Contacts /> */}
      
    </section>
  );
}

export default Content;
