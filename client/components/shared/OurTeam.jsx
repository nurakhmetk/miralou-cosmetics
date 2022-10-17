import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const OurTeam = ({ teamInfo }) => {
  return (
    <div className='w-full h-[640px] grid grid-flow-row grid-cols-3 auto-rows-auto gap-7'>
      {teamInfo &&
        teamInfo.map((person) => (
          <TeamMemberCard personData={person} key={person.id} />
        ))}
    </div>
  );
};

export default OurTeam;
