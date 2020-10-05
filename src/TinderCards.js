import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from './firebase';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Tupac Shakur',
            url: 'https://www.kixart.lt/media/KIXPeople/2PAC.jpg'
        },
        {
            name: 'Snoop Dogg',
            url: 'https://pyxis.nymag.com/v1/imgs/426/382/ded810b801ba0fc5895ddc486e281cbfff-19-snoop-dog.rsquare.w1200.jpg'
        }
    ]);

   /* useEffect(() => {
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    }, []) */

    return (
        <div>

            <div className="tinderCards_container">
                {people.map(person => (
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}>

                        <div 
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card">
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
