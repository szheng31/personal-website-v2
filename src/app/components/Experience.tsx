import { Timeline, Text } from '@mantine/core';
import { motion } from 'framer-motion';

interface ExperienceProps {
  showExperience: boolean;
  setShowExperience: (show: boolean) => void;
}

export default function Experience({ showExperience, setShowExperience }: ExperienceProps) {
  return (
    <div className="w-1/2">
      <span 
        onClick={() => {
          const delay = showExperience ? 0 : 500;
          setTimeout(() => setShowExperience(!showExperience), delay);
        }}
        className={`title cursor-pointer transition-all duration-300 ${showExperience ? 'underline' : ''}`}
      >
        {showExperience ? 'experience' : '[experience]'}
      </span>
      <div className={`absolute w-1/2 transition-all duration-300 overflow-hidden ${showExperience ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
        <Timeline active={8} bulletSize={24} lineWidth={2} color="black" className="w-full">
          <Timeline.Item title={
            <div className="flex justify-between items-center">
              <span>Research Intern</span>
              <span className="text-sm text-gray-500">2025 - Present</span>
            </div>
          } bullet={<div className="bg-white border-2 border-black w-full h-full rounded-full" />}>
            <Text c="dimmed" size="sm">Carnegie Mellon University - REUSE Program</Text>
          </Timeline.Item>

          <Timeline.Item title={
            <div className="flex justify-between items-center">
              <span>Head Undergraduate TA</span>
              <span className="text-sm text-gray-500">2024 - Present</span>
            </div>
          } bullet={<div className="bg-white border-2 border-black w-full h-full rounded-full" />}>
            <Text c="dimmed" size="sm">Computer Architecture</Text>
          </Timeline.Item>

          <Timeline.Item title={
            <div className="flex justify-between items-center">
              <span>Research Assistant</span>
              <span className="text-sm text-gray-500">2024 - Present</span>
            </div>
          } bullet={<div className="bg-white border-2 border-black w-full h-full rounded-full" />}>
            <Text c="dimmed" size="sm">Vanderbilt University - Prof. Bryan Ward</Text>
          </Timeline.Item>

          <Timeline.Item title={
            <div className="flex justify-between items-center">
              <span>REIDD</span>
              <span className="text-sm text-gray-500">2023</span>
            </div>
          } bullet={<div className="bg-black w-full h-full rounded-full" />}>
            <Text c="dimmed" size="sm">Software Engineering Intern</Text>
          </Timeline.Item>

          <Timeline.Item title={
            <div className="flex justify-between items-center">
              <span>Chyron</span>
              <span className="text-sm text-gray-500">2022</span>
            </div>
          } bullet={<div className="bg-black w-full h-full rounded-full" />}>
            <Text c="dimmed" size="sm">Consulting Intern</Text>
          </Timeline.Item>

          <Timeline.Item title={
            <div className="flex justify-between items-center">
              <span>theCoderSchool</span>
              <span className="text-sm text-gray-500">2022 - 2023</span>
            </div>
          } bullet={<div className="bg-black w-full h-full rounded-full" />}>
            <Text c="dimmed" size="sm">Code Coach</Text>
          </Timeline.Item>

          <Timeline.Item title={
            <div className="flex justify-between items-center">
              <span>CS Dojo</span>
              <span className="text-sm text-gray-500">2021 - 2023</span>
            </div>
          } bullet={<div className="bg-black w-full h-full rounded-full" />}>
            <Text c="dimmed" size="sm">Tutor</Text>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
} 