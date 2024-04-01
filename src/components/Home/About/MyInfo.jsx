import React from 'react'

export const MyInfo = ({ name, street, email, phone }) => {
    return (
        <div className="my-info mt-4">
            <div className="single-info"><span>Nombre:</span><p>{name}</p></div>
            <div className="single-info"><span>De:</span><p>{street}</p></div>
            <div className="single-info"><span>Gmail:</span><p><a href="#"><span className="__cf_email__"></span>{email}</a></p></div>
            <div className="single-info"><span>Celular:</span><p><a href="tel:+21 234 567 8901">{phone}</a></p></div>
        </div>
    );
}