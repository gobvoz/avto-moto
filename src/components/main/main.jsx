import Slider from '../slider/slider';
import Details from '../details/details';
import Content from '../content/content';

function Main() {
  return (
    <main class="main">
      <div class="main__inner">
        <h1 class="visually-hidden">Марпех 11</h1>

        <Slider />
        <Details />
        <Content />

      </div>
    </main>
  );
}

export default Main;
