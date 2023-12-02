import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import PropTypes from 'prop-types'


const Cards = ({addList}) => {

    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data/course.json')
        .then(res => res.json())
        .then (data => setCards(data))
    }, [])

    return (
        <div className="md:w-3/4">
            <div className="grid grid-cols-3 gap-4">
                {
                    cards.map(card => <Card key={card.id} card={card} addList={addList}></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    addList: PropTypes.func
}

export default Cards;