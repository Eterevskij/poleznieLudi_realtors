import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import BestRealtorItem from './components/BestRealtorItem';

import realtor from './img/realtor.jpg';

const realtorsData = [
  {name: 'Павел Дуров', photo: realtor, city: 'Ростов-на-Дону', rating: 38, categories: ['Новостройки', 'Аренда', 'Продажа', 'Вторичный рынок', 'Коммерческая недвижимость']},
  {name: 'Анастасия Заворотнюк', photo: realtor, city: 'Санкт-Петербург', rating: 24, categories: ['Новостройки', 'Аренда', 'Продажа', 'Загородная', 'Коммерческая недвижимость', 'Вторичный рынок']},
  {name: 'Николай Распутин', photo: realtor, city: 'Новосибирск', rating: 22, categories: ['Коммерческая недвижимость', 'Вторичный рынок', 'Аренда']},
  {name: 'Николай Галкин', photo: realtor, city: 'Ижевск', rating: 19, categories: ['Новостройка', 'Аренда', 'Продажа']},
  {name: 'Екатерина Великая', photo: realtor, city: 'Москва', rating: 1.5, categories: ['Новостройка', 'Аренда', 'Продажа', 'Коммерческая недвижимость', 'Вторичный рынок']},
]

const city = 'Ростова-на-Дону';

function App() {
  return (
    <div className="App">

      <div className="container">

      <section className="bestRealtors">
        <h2 className="bestRealtors__title">Лучшие риэлторы {city && <span className='bestRealtors__title__city'>{city}</span>}</h2>

        <div className="bestRealtors__list">

        {
          realtorsData.map((realtor, i) => {
            return <BestRealtorItem {...realtor} i={i + 1} />
          })
        }

        </div>

      </section>
      </div>
    </div>
  );
}

export default App;
