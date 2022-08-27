import React from 'react';
import Card from './Card';
import { useAppSelector } from '../../redux/hooks';
import { charactersSel } from '../../redux/characters';
import Skeleton from './Skeleton';

interface CardsListProps {
    items: { name: string; url: string }[];
}

const CharactersList = ({ items }: CardsListProps) => {
    const isLoading = useAppSelector(charactersSel.selectLoading);

    return (
        <div className="characters-list">
            {isLoading ? (
                <Skeleton />
            ) : !items.length ? (
                <div>No Characters Found</div>
            ) : (
                <div>
                    {items.map((item) => {
                        return <Card item={item} key={item.name} />;
                    })}
                </div>
            )}
        </div>
    );
};

export default CharactersList;
