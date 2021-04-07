function Contacts() {
  return (
    <section class="contacts">
      <h3 class="visually-hidden">Контактная информация</h3>

      <dl class="contacts__list">
        <dt class="contacts__define">Адрес</dt>
        <dd class="contacts__describe">Санкт-Петербург, набережная реки Карповки, дом 5</dd>
        <dt class="contacts__define">Режим работы</dt>
        <dd class="contacts__describe">Ежедневно, с 10:00 до 21:00</dd>
        <dt class="contacts__define">Телефон</dt>
        <dd class="contacts__describe"><a class="contacts__link" href="tel:88003335599">8 (800) 333-55-99</a></dd>
        <dt class="contacts__define">E-mail</dt>
        <dd class="contacts__describe"><a class="contacts__link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a></dd>
      </dl>
      
      <div class="contacts__container">
        <iframe class="contacts__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.831469259072!2d30.31456080813721!3d59.96811900354503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5NzAyMg!5e0!3m2!1sru!2sca!4v1617725767371!5m2!1sru!2sca" title="карта проезда" width="431" height="271" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </section>
  );
}

export default Contacts;
