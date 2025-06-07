'use client';

import { Timeline, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { format } from 'date-fns';


interface ExperienceProps {
  showExperience: boolean;
  setShowExperience: (show: boolean) => void;
  experiences: any[];
  noDelay?: boolean;
}


export default function Experience({ showExperience, setShowExperience, experiences, noDelay }: ExperienceProps) {
  return (
    <div className="w-full">
      <span 
        onClick={() => {
          const delay = showExperience ? 0 : noDelay ? 0 : 500;
          setTimeout(() => setShowExperience(!showExperience), delay);
        }}
        className={`title cursor-pointer transition-all duration-300 ${showExperience ? 'underline' : ''}`}
      >
        {showExperience ? 'experience' : '[experience]'}
      </span>
      <div className={`absolute w-full lg:w-1/2 transition-all duration-300 overflow-hidden ${showExperience ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
        <Timeline active={experiences.length} bulletSize={24} lineWidth={2} color="black" className="w-full">
          {experiences.map((experience) => (
            <Timeline.Item 
              key={experience.id}
              title={
                <div className="flex justify-between items-center">
                  <span>{experience.title}</span>
                  <span className="text-sm text-gray-500">{format(new Date(experience.startDate), 'MMM yyyy')} - {experience.current ? format(new Date(experience.endDate), 'MMM yyyy') : 'Present'}</span>
                </div>
              } 
              bullet={<div className={`${!experience.current ? 'bg-white border-2 border-black' : 'bg-black'} w-full h-full rounded-full`} />}
            >
              <Text  color="gray"size="sm">{experience.organization}</Text>
              {experience.description && (
                <Text size="sm" mt={4}>{experience.description}</Text>
              )}
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
} 