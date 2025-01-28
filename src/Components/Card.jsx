import React from 'react';
import '../LocalCSS/card.css';

export default function Card() {
    const cards = [
        { title: "PHYSICS", points: ["First bullet point", "Second bullet point", "Third bullet point", "Fourth bullet point", "Fifth bullet point", "Sixth bullet point"] },
        { title: "CHEMISTRY", points: ["First bullet point", "Second bullet point", "Third bullet point", "Fourth bullet point", "Fifth bullet point", "Sixth bullet point"] },
        { title: "MATHS", points: ["First bullet point", "Second bullet point", "Third bullet point", "Fourth bullet point", "Fifth bullet point", "Sixth bullet point"] },
    ];

    return (
        <div className="container mt-4 mb-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {cards.map((card, index) => (
                    <div key={index} className="col">
                        <div className="card text-center custom-card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <strong><em>{card.title}</em></strong>
                                </h5>
                                <ul className="card-text">
                                    {card.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                                <a href="#" className="btn btn-primary">Click here</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}