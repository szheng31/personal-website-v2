'use client';

import { Text, Modal } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

interface ProjectsProps {
  showProject: boolean;
  setShowProject: (show: boolean) => void;
  projects: any[];
  noDelay?: boolean;
}

export default function Projects({ showProject, setShowProject, projects, noDelay }: ProjectsProps) {
  const [openedModal, setOpenedModal] = useState<string | null>(null);

  return (
    <div className="w-full">
      <span 
        onClick={() => {
          const delay = showProject ? 0 : noDelay ? 0 : 500;
          setTimeout(() => setShowProject(!showProject), delay);
        }}
        className={`title cursor-pointer transition-all duration-300 ${showProject ? 'underline' : ''}`}
      >
        {showProject ? 'projects' : '[projects]'}
      </span>
      <div className={`absolute w-1/2 transition-all duration-300 overflow-hidden ${showProject ? 'max-h-[2000px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-3">
          {projects.map((project, index) => (
            <div key={`${project.title}-${index}`}>
              <div 
                className="cursor-pointer p-4 transition-colors duration-200 hover:bg-black/5 rounded-lg"
                onClick={() => setOpenedModal(`${project.title}-${index}`)}
              >
                <span className="text-black font-bold group-hover:underline">
                  {project.title}
                </span>
                <Text c="dimmed" size="sm" className="mt-1">
                  {project.description}
                </Text>
              </div>
              <Modal
                opened={openedModal === `${project.title}-${index}`}
                onClose={() => setOpenedModal(null)}
                title={<span className="font-bold">{project.title}</span>}
                size="lg"
              >
                <div className="space-y-4 text-black">
                  {project.image && (
                    <div className="relative w-full h-80">
                      <Image
                        src={project.image.url}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <p>{project.modalDescription}</p>
                  <p className="text-sm text-gray-600">Technologies: {project.tech}</p>
                  <div className="flex gap-4">
                    {project.link && (
                      <Link href={project.link} target="_blank" className="text-sm hover:underline">
                        View Project →
                      </Link>
                    )}
                    {project.github && (
                      <Link href={project.github} target="_blank" className="text-sm hover:underline">
                        GitHub →
                      </Link>
                    )}
                  </div>
                </div>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 