import {Row, Col} from 'antd';
import 'antd/dist/antd.css';

import marker from '../icons/map-marker.svg';
import star from '../icons/star.svg';

const BestRealtorItem = (props) => {

    const {name, photo, city, rating, categories, i} = props;

    return(
        <div className="bestRealtors__list__item">
        <Row align="middle">
            <Col className='bestRealtors__list__item__placeWrapper mobileBig' xl={{span: 2 }} lg={{span: 2 }} md={{ span: 2 }} sm={{ span: 4 }} xs={{ span: 4 }}>
              <p className="bestRealtors__list__item__place">{i}</p>
            </Col>

            <Col className='bestRealtors__list__item__allUserInfo' xl={{ span: 8}} lg={{span: 10}} md={{span: 10}} sm={{span: 14}} xs={{span: 20}}>

            <Row align="middle">

            <Col xl={{span: 6 }} lg={{span: 6 }} md={{ span: 6 }} sm={{ span: 6 }} xs={{ span: 6 }}>
              <img src={photo} alt="Риэлтор" className="bestRealtors__list__item__img" />
            </Col>

            <Col className='bestRealtors__placeWrapper mobileSmall' xl={{span: 0 }} lg={{span: 0,  offset:0   }} md={{ span: 0,  offset:0   }} sm={{ span: 0,  offset:0   }} xs={{ span: 12,  offset:6   }}>
              <p className="bestRealtors__list__item__place">{i} место</p>
            </Col>

            <Col className='bestRealtors__list__item__mainInfo' span={18}>
              <h5 className="bestRealtors__list__item__name">{name}</h5>
              <span className="bestRealtors__list__item__city">
                 <img src={marker} alt="" /> <p>{city}</p>
                  <span className="bestRealtors__list__item__rating mobile">
                    <img src={star} alt="Рейтинг" />
                    <h6>{rating}</h6>
                </span>
              </span>
            </Col>



              </Row>
            </Col>

            <Col className='bestRealtors__list__item__categoriesWrapper' xl={{ span: 8,  offset:0  }} lg={{span: 12,  offset:0  }} md={{span: 12,  offset:0  }} sm={{span: 18,  offset:4 }} xs={{span: 20,  offset:4  }}>
              <Row className="bestRealtors__list__item__categories">

                {categories.map(category => {
                    return (
                        <Col className="bestRealtors__list__item__categories__item">
                        <p>{category}</p>
                      </Col>
                    )
                })}
            
              </Row>
            </Col>

            <Col xl={{ offset:4, span: 1 }} lg={{ offset:0, span: 0 }} md={{ offset:0, span: 0 }} sm={{ offset:0, span: 0 }} xs={{ offset:0, span: 0 }}>
              <span className="bestRealtors__list__item__rating desktop">
                <img src={star} alt="Рейтинг" />
                <h6>{rating}</h6>
              </span>
            </Col>
        </Row>
      </div>
    )
}

export default BestRealtorItem;