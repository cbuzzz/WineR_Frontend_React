import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import topPlansBackground from '../assets/top-plans-background.jpg';
import expImg from '../assets/exp.jpg';
import wineRLogo from '../assets/winerlogo.png';
import starIcon from '../assets/star.png';
import wineIcon from '../assets/wine.png';
import ubiIcon from '../assets/ubi.png';
import tasteIcon from '../assets/taste.png';
import restaurantIcon from '../assets/restaurant.png';
import parkingIcon from '../assets/parking.png';
import uvaIcon from '../assets/uva.png';

interface Experience {
    id: string;
    name: string;
    location: string;
    price: string;
    description: string;
    availability: string;
    rating: number;
    imageUrl: string;
}

const Home: React.FC = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        const dummyData: Experience[] = [
            {
                id: '1',
                name: 'Clos Mogador',
                location: 'Priorat',
                price: '€€€€€',
                description: 'A fusion of tradition and innovation embedded in our wines.',
                availability: 'Only 2 Spots Left',
                rating: 4.8,
                imageUrl: '/assets/clos-mogador.jpg',
            },
            {
                id: '2',
                name: 'Mas Oller',
                location: 'Empordà',
                price: '€€€€',
                description: 'Experience the essence of our boutique winery through personalized tastings, guided tours around the vineyards, and exclusive events in l’empordà.',
                availability: 'Available',
                rating: 4.5,
                imageUrl: '/assets/mas-oller.jpg',
            },
            {
                id: '3',
                name: 'Celler Bárbara Forés',
                location: 'Terra Alta',
                price: '€€€',
                description: 'Uncover the artistry of winemaking through intimate tastings in our lush vineyards. Cheers to the essence of tradition and innovation in every sip. ',
                availability: 'Available',
                rating: 4.3,
                imageUrl: '/assets/celler-barbara-fores.jpg',
            },
        ];
        setExperiences(dummyData);
    }, []);

    return (
        <div className="home-container">
            {/* Barra de Navegación */}
            <nav className="navigation-bar">
                <img src={wineRLogo} alt="WineR Logo" className="nav-logo" />
                <button className="nav-button">Learn</button>
                <button className="nav-button active">Home</button>
                <button className="nav-button">Bookings</button>
                <button className="nav-button">Profile</button>
            </nav>

            {/* Sección de Top Plans */}
            <div
                className="top-plans"
                style={{ backgroundImage: `url(${topPlansBackground})` }}
            >
                <div className="top-plans-content">
                    <h1>Hello, Alex</h1>
                    <h2>Top Plans for You</h2>
                    <p>Based on your quiz results</p>
                    <button className="see-more-btn">See more</button>
                </div>
            </div>

            {/* Botón de Filtros */}
            <div className="filters-container">
                <button className="filter-btn">Filter</button>
            </div>

            {/* Lista de Experiencias */}
            <div className="experience-list">
                {experiences.map((experience, index) => (
                    <div className="experience-card" key={index}>
                        <img
                            src={expImg}
                            alt={experience.name}
                            className="experience-image"
                        />
                        <div className="experience-info">
                            <div className="experience-name">
                                <img
                                    src={wineIcon}
                                    alt="Wine bottle"
                                    style={{ width: "20px", height: "auto" }}
                                    className="icon-wine"
                                />
                                {experience.name}
                            </div>
                            <div className="experience-location">
                                <img
                                    src={ubiIcon}
                                    alt="Location"
                                    style={{ width: "15px", height: "auto" }}
                                    className="icon-ubi"
                                />
                                {experience.location} {experience.price}
                            </div>
                            <div className="experience-description">
                                {experience.description}
                            </div>
                            <div className="experience-rating">
                                <img
                                    src={starIcon}
                                    alt="Rating"
                                    style={{ width: "15px", height: "auto" }}
                                    className="icon-star"
                                />
                                {experience.rating}
                            </div>
                            <div className="experience-icons">
                                <div className="icon-item">
                                    <img
                                        src={tasteIcon}
                                        alt="Wine Tastings"
                                        style={{ width: "20px", height: "auto" }}
                                        className="icon-taste"
                                    />
                                    <span>Wine tastings</span>
                                </div>
                                <div className="icon-item">
                                    <img
                                        src={restaurantIcon}
                                        alt="Restaurant"
                                        style={{ width: "20px", height: "auto" }}
                                        className="icon-restaurant"
                                    />
                                    <span>Restaurant</span>
                                </div>
                                <div className="icon-item">
                                    <img
                                        src={parkingIcon}
                                        alt="Parking"
                                        style={{ width: "20px", height: "auto" }}
                                        className="icon-parking"
                                    />
                                    <span>Parking</span>
                                </div>
                                <div className="icon-item">
                                    <img
                                        src={uvaIcon}
                                        alt="Vineyard Tours"
                                        style={{ width: "20px", height: "auto" }}
                                        className="icon-uva"
                                    />
                                    <span>Vineyard tours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;