/* eslint-disable jsx-a11y/alt-text */
import './index.scss';
import { cardData } from '../../data/cardData';

export default function Overview() {
    return (

        <div className="row justify-content-between mt-2">
            <div className="col-7">
                <div className="headingText">Recent Activity</div>
                <div className="row">
                    {cardData?.activity.map((card, index) => (
                        <div className="col" key={index}>
                            <div className={"cardBlock " + card.type}>
                                <div className="cardIcon">
                                    <img src={card.imgUrl}></img>
                                </div>
                                <div>
                                    <div className="statsNumber">{card.total}</div>
                                    <div className="statsText">{card.text}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-5 text-end">
                <div className="text-start pb-2 headingText" style={{ paddingLeft: '0.5rem' }}>Recent Quotes</div>
                <div className="row text-start">
                    <div className="quickScrollbar" id="quickBodyCustom">

                        {
                            cardData?.quotes.map((card, index) => (
                                <div className="col-12" key={index}>
                                    <div className="row cardCss">
                                        <div className="col-8">
                                            <div className="headingText bold"> {card?.text} </div>
                                        </div>
                                        <div className="col-4">
                                            <div className={"statusBtn " + card?.type}><span className={"dot " + card?.type} ></span>  {card?.type}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
