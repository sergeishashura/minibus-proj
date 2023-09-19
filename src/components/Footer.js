import React, { useEffect } from 'react';

const Footer = () => {

    return (
        <div className="footer">
            <div className="links">
                <h3>Ссылки</h3>
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/about">О нас</a></li>
                    <li><a href="/services">Услуги</a></li>
                    <li><a href="/contact">Контакты</a></li>
                </ul>
            </div>
            <div className="numbers">
                <h3>Номера телефонов</h3>
                <ul>
                    <li>+1 123 456 7890</li>
                    <li>+1 234 567 8901</li>
                </ul>
            </div>
            <div className="info">
                <h3>Данные о компании</h3>
                <p>Название компании: Example Company</p>
                <p>Адрес: 123 Example Street, City, Country</p>
                <p>Электронная почта: info@example.com</p>
            </div>
        </div>
    );
};

export default Footer;

