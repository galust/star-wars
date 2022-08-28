import React from 'react';
import { useNavigate } from 'react-router-dom';

import MUICard from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { getIdFromUrl } from '../../utils/helper';

import './Characters.scss';

interface CardItemsProps {
    item: { name: string; url: string };
}

const Card: React.FC<CardItemsProps> = ({ item }) => {
    const navigate = useNavigate();
    const id = getIdFromUrl(item.url);
    const handleClick = (): void => {
        navigate(`/character/${id}`, { replace: false });
    };
    return (
        <MUICard className="card" sx={{ borderRadius: '12px' }} onClick={handleClick}>
            <CardActionArea>
                <CardContent className="flex-center" sx={{ flexDirection: 'column' }}>
                    <div className="card-avatar">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                            alt={item.name}
                            title={item.name}
                        />
                    </div>
                    <Typography className="card-title" mb={0} gutterBottom>
                        {item.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </MUICard>
    );
};

export default Card;
