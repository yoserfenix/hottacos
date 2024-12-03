import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Importando los íconos de Font Awesome

import './ReviewPage.css';

const ReviewPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [rating, setRating] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedWaitress, setSelectedWaitress] = useState(null);
    const [comment, setComment] = useState('');
    const [submittedComment, setSubmittedComment] = useState(false); // Estado para controlar si el comentario fue enviado

    // Función para avanzar al siguiente paso
    const handleNextStep = () => {
        // Validación para el paso 4, si es "Servicio", debe haber una mesera seleccionada
        if (currentStep === 4 && selectedCategory === 'service' && !selectedWaitress) {
            alert('Por favor, selecciona una mesera');
            return;
        }
        // Avanzamos al siguiente paso
        setCurrentStep((prev) => Math.min(prev + 1, 5));
    };

    // Función para retroceder al paso anterior
    const handlePreviousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    // Función para manejar el comentario
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmitComment = () => {
        // Guardamos el comentario y mostramos el mensaje de agradecimiento
        if (comment.trim()) {
            setSubmittedComment(true); // Marcar que el comentario fue enviado
        } else {
            alert("Por favor, escribe un comentario antes de enviar.");
        }
    };

    // Paso 1: Selección de lugar
    const places = [
        { id: 1, name: 'Restaurante A', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Restaurante B', imageUrl: 'https://via.placeholder.com/150' }
    ];

    const handlePlaceSelect = (placeId) => {
        setSelectedPlace(placeId);
    };

    // Paso 2: Selección de estrellas
    const handleRating = (rate) => {
        setRating(rate);
    };

    // Paso 3: Selección de categoría
    const categories = [
        { id: 'service', name: 'Servicio', icon: 'fa-cogs' },
        { id: 'food', name: 'Alimentos', icon: 'fa-utensils' },
        { id: 'location', name: 'Lugar', icon: 'fa-map-marker-alt' }
    ];

    // Paso 4: Meseras o Comentarios
    const waitresses = [
        { id: 1, name: 'Mesera 1', imageUrl: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Mesera 2', imageUrl: 'https://via.placeholder.com/100' },
        { id: 3, name: 'Mesera 3', imageUrl: 'https://via.placeholder.com/100' }
    ];

    return (
        <div className="review-page-container">
            <div className="review-page">
                <h1>Escribe tu opinión</h1>
                {currentStep === 1 && (
                    <div>
                        <label htmlFor="place">Selecciona el lugar</label>
                        <div className="card-container">
                            {places.map((place) => (
                                <div
                                    key={place.id}
                                    className="card"
                                    onClick={() => handlePlaceSelect(place.id)}
                                    style={{
                                        border: selectedPlace === place.id ? '2px solid #6c63ff' : 'none',
                                    }}
                                >
                                    <img src={place.imageUrl} alt={place.name} />
                                    <p>{place.name}</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleNextStep} disabled={!selectedPlace}>
                            Siguiente
                        </button>
                    </div>
                )}

                {currentStep === 2 && (
                    <div>
                        <label htmlFor="rating">Calificación</label>
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map((rate) => (
                                <FaStar
                                    key={rate}
                                    className={`star ${rating >= rate ? 'active' : ''}`}
                                    onClick={() => handleRating(rate)}
                                />
                            ))}
                        </div>
                        <button className="back-button" onClick={handlePreviousStep}>
                            Atrás
                        </button>
                        <button onClick={handleNextStep}>Siguiente</button>
                    </div>
                )}

                {currentStep === 3 && (
                    <div>
                        <label htmlFor="about">Acerca de</label>
                        <div className="card-container">
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    className="card"
                                    onClick={() => setSelectedCategory(category.id)}
                                    style={{
                                        border: selectedCategory === category.id ? '2px solid #6c63ff' : 'none',
                                    }}
                                >
                                    <i className={`fas ${category.icon}`} style={{ fontSize: '30px', marginBottom: '10px' }}></i>
                                    <p>{category.name}</p>
                                </div>
                            ))}
                        </div>
                        <button className="back-button" onClick={handlePreviousStep}>
                            Atrás
                        </button>
                        <button onClick={handleNextStep} disabled={!selectedCategory}>
                            Siguiente
                        </button>
                    </div>
                )}

                {currentStep === 4 && (
                    <div>
                        {selectedCategory === 'service' && (
                            <div>
                                <label htmlFor="waitress">Selecciona una mesera</label>
                                <div className="card-container">
                                    {waitresses.map((waitress) => (
                                        <div
                                            key={waitress.id}
                                            className="card-waitress"
                                            onClick={() => setSelectedWaitress(waitress.id)}
                                            style={{
                                                border: selectedWaitress === waitress.id ? '2px solid #6c63ff' : 'none',
                                            }}
                                        >
                                            <img src={waitress.imageUrl} alt={waitress.name} />
                                            <p>{waitress.name}</p>
                                        </div>
                                    ))}
                                </div>
                                {/* Botón "Siguiente" solo visible si se selecciona una mesera */}
                                <button
                                    onClick={handleNextStep}
                                    disabled={!selectedWaitress}
                                    className={`next-button ${selectedWaitress ? 'active' : ''}`}
                                >
                                    Siguiente
                                </button>
                            </div>
                        )}
                        {(selectedCategory === 'food' || selectedCategory === 'location') && (
                            <div className="comment-container">
                                <label htmlFor="comment">Escribe un comentario</label>
                                <textarea
                                    id="comment"
                                    value={comment}
                                    onChange={handleCommentChange}
                                    placeholder="Escribe tu comentario..."
                                />
                                <button onClick={handleNextStep}>Siguiente</button>
                            </div>
                        )}
                        <button className="back-button" onClick={handlePreviousStep}>
                            Atrás
                        </button>
                    </div>
                )}

                {currentStep === 5 && selectedCategory === 'service' && selectedWaitress && !submittedComment && (
                    <div>
                        <h2>¡Gracias por tu comentario sobre {waitresses.find(w => w.id === selectedWaitress).name}!</h2>
                        <label htmlFor="comment">Escribe tu comentario sobre el servicio</label>
                        <textarea
                            id="comment"
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Escribe tu comentario..."
                        />
                        <button onClick={handleSubmitComment}>Enviar Comentario</button>
                    </div>
                )}

                {submittedComment && currentStep === 5 && selectedCategory === 'service' && selectedWaitress && (
                    <div>
                        <h2>¡Gracias por tu comentario sobre {waitresses.find(w => w.id === selectedWaitress).name}!</h2>
                        <button onClick={handlePreviousStep}>Volver</button>
                    </div>
                )}

                {currentStep === 5 && (selectedCategory === 'food' || selectedCategory === 'location') && (
                    <div>
                        <h2>¡Gracias por tu comentario sobre {selectedCategory}!</h2>
                        <button onClick={handlePreviousStep}>Volver</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewPage;
