import React from 'react';
import CharacterCard from '../components/CharacterCard';
import StatCard from '../components/StatCard';
import InfoCard from '../components/InfoCard';
import Equipment from '../components/EquipmentCard';
import SkillsCard from '../components/SkillsCard';
import './CharacterDetail.css';

export default function CharacterDetail({ character }) {
    if (!character) return <div className="character-detail-container">No hay personaje seleccionado.</div>;

    return (
        <div className="character-detail-container">
            <div className="character-detail-row">
                <div className="character-detail-col character-detail-col-1">
                    <CharacterCard
                        title={character.title}
                        left={<img src={character.avatar} alt="avatar" style={{ height: '180px' }} />}
                        rightRows={character.rightRows}
                        borderColor={character.borderColor}
                        separatorColor={character.separatorColor}
                    />
                </div>
                <div className="character-detail-col character-detail-col-2-3">
                    <StatCard stats={character.stats} borderColor={character.borderColor} separatorColor={character.separatorColor} />
                </div>
            </div>
            <div className="character-detail-container">
                <div className="character-detail-row">
                    <div className="character-detail-col character-detail-col-1">
                        <InfoCard info={character.info} borderColor={character.borderColor} separatorColor={character.separatorColor} />
                    </div>
                    <div className="character-detail-col character-detail-col-2-3">
                        <Equipment equipment={character.equipment} />
                    </div>
                </div>
            </div>
            <div className="character-detail-row">
                <div className="character-detail-col">
                    <SkillsCard skills={character.skills} />
                </div>
            </div>
        </div>
    );
}
