import React from 'react';
import { pic5, pic6, pic7, pic8 } from './images';

export default function CardComponent() {
    const cards = [
        {
            id: 1,
            title: "Groceries",
            description: "We sell veggies, fruits, meat, pet food and more.",
            imgUrl: pic5,
            imgId: "img-1"
        },
        {
            id: 2,
            title: "Beauty",
            description: "You will find all the beauty products here.",
            imgUrl: pic7,
            imgId: "img-2"
        },
        {
            id: 3,
            title: "Fragrances",
            description: "We also provide perfumes and colognes.",
            imgUrl: pic6,
            imgId: "img-3"
        },
        {
            id: 4,
            title: "Furniture",
            description: "A lot of good pieces for your house are displayed here.",
            imgUrl: pic8,
            imgId: "img-4"
        }
    ];

    return (
        <div className="card-container">
            {cards.map((card,i) => (
                <div className="card" key={i}>
                    <img 
                        src={card.imgUrl} 
                        alt={card.title} 
                        className={`card-img card-img-${card.imgId}`}
                        id={card.imgId} 
                    />
                    <div className="card-content">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-description">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
