import style from './Home.module.css';
import Apresentacao from '../pages/Apresentacao';
import SobreMim from '../pages/SobreMim';

function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.apresentacaoWrapper}>
          <Apresentacao />

        </div>
      </div>

      <div className={style.sobreMim}>
        <SobreMim />
      </div>
      
    </>
  );
}

export default Home;
