import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [incidents, setincidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setincidents(response.data)
        })
    }, [ongId]);

    async function handleDeleteIncidents(id) {
        try {
            await api.delete(`incidenta/{$id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setincidents(incidents.filter(incidents => incidents.id !== id));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente mais tarde');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>

                <span>Bem vinda, {ongName}</span>
            
                <Link className="button" to="/incidents/new" >Cadatrar novo caso</Link>
                <button type="button" onClick={handleLogout} >
                    <FiPower size={18} color="#E02048" />
                </button>
            </header>

            <h1>Casos registrados</h1>

            <ul>
                {incidents.map(incidents => (
                <li key={incidents.id} >
                    <strong>Caso:</strong>
                    <p>{incidents.title}</p>

                    <strong>Descricao:</strong>
                    <p>{incidents.description}</p>

                    <strong>Valor</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', curency: 'BRL' }).format(incidents.value)}</p>

                    <button onClick={() => handleDeleteIncidents(incidents.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>))}
            </ul>
        </div>
    );
}