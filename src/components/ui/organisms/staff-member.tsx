import React from 'react';

export interface StaffMemberProps {
    data: {
    profileImage?: string;
    name: string;
    title: string;
    }

}

export const StaffMember: React.FC<StaffMemberProps> = ({data}) => {
  return (<>
    <div className="flex items-center inline-block">
      {data.profileImage && <img src={data.profileImage}   alt={`Profile of ${data.name}`} className="w-20 self-center rounded-full mt-6 ml-6 mb-6"/>}
      <div className='ml-6'>
        <strong>{data.name}</strong><br/>
        <span>{data.title}</span>
      </div>
    </div>
  </>)
}