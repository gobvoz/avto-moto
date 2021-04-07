import Slider from '../slider/slider';
import Details from '../details/details';
import Content from '../content/content';

function Main({ slides, chars, details }) {
  return (
    <main className="main">
      <div className="main__inner">
        <h1 className="visually-hidden">Марпех 11</h1>

        <Slider
          slides={ slides }
        />
        <Details
          details={ details }
        />
        <Content 
          chars={ chars }
        />

      </div>
    </main>
  );
}

export default Main;
