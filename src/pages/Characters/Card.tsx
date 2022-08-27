import React from 'react';
import MUICard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getIdFromUrl } from '../../utils/helper';
import { useNavigate } from 'react-router-dom';
import { CardActionArea } from '@mui/material';

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
        <MUICard variant="outlined" sx={{ maxWidth: 345 }} onClick={handleClick}>
            <CardActionArea>
                <CardContent>
                    <div className="no-image">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                            alt="character image"
                            title="character image"
                            width="20%"
                        />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </MUICard>
    );
};

export default Card;
