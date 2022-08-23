import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCharacters } from '../../redux/characters/operations';
import { charactersSel } from '../../redux/characters';

const Characters: React.FC = () => {
    const characters = useAppSelector(charactersSel.selectCharacters);
    const isLoading = useAppSelector(charactersSel.selectLoading);
    const dispatch = useAppDispatch();
    useEffect((): void => {
        dispatch(fetchCharacters());
    }, []);

    return (
        <div>
            {isLoading ? (
                <div>loading</div>
            ) : (
                <div>
                    {characters.map((item) => {
                        return <div key={item.name}>{item.name}</div>;
                    })}
                </div>
            )}
            First
        </div>
    );
};

export default Characters;
