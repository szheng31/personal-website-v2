import { Text, Modal } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import BridgingSeas from '../../../public/bridgingseas.png';
import JudgeDashboard from '../../../public/judge-dashboard.gif';

interface Project {
  id: string;
  image: StaticImageData ;
  title: string;
  description: string;
  modalDescription: string;
  tech: string;
  link?: string;
  github: string;
}

interface ProjectsProps {
  showProject: boolean;
  setShowProject: (show: boolean) => void;
  
}

export default function Projects({ showProject, setShowProject }: ProjectsProps) {
  const [openedModal, setOpenedModal] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'bridgingseas',
      image: BridgingSeas,
      title: 'BridgingSeas',
      description: 'Organization connecting international students with mentors.',
      modalDescription: 'Built a website for BridgingSeas, an organization connecting international students with mentors.',
      tech: 'SvelteKit, Tailwind CSS',
      link: 'https://bridgingseas.com',
      github: 'https://github.com/BridgingSeas/bridgingseasweb'
    },
    {
      id: 'lipher',
      image: JudgeDashboard,
      title: 'Lipher',
      description: 'Realtime AI built from scratch that reads lips.',
      modalDescription: 'Built a realtime AI that reads lips in realtime. It was trained on a dataset of 1000+ videos of people speaking, and is fully testable on a web application.',
      tech: 'Python, PyTorch, PyAudio',
      github: 'https://github.com/szheng31/lipher'
    },
    {
      id: 'witness',
      image: JudgeDashboard,
      title: 'Witness',
      description: 'Dashboard for VandyHacks judges to view submissions and vote on projects.',
      modalDescription: 'Built a dashboard for VandyHacks judges to view submissions and vote on projects. I personally designed the new Analytics page, helping the team track logistics of the event.',
      tech: 'React, Tailwind CSS, Supabase',
      github: 'https://github.com/VandyHacks/witness'
    },
    {
      id: 'ttpython',
      image: JudgeDashboard,
      title: 'TTPython',
      description: 'A language and programm environment for distributed systems.',
      modalDescription: 'During the CMU REUSE program, I helped develop features for TTPython. I built specific features that enables multi tenancy, making changes to the compiler to support it.',
      tech: 'Python',
      link: 'https://ccsg.ece.cmu.edu/ttpython/overview.html',
      github: 'https://bitbucket.org/ccsg-res/ticktalkpython/src/master/'
    }
  ];

  return (
    <div className="w-1/2">
      <span 
        onClick={() => {
          const delay = showProject ? 0 : 500;
          setTimeout(() => setShowProject(!showProject), delay);
        }}
        className={`title cursor-pointer transition-all duration-300 ${showProject ? 'underline' : ''}`}
      >
        {showProject ? 'projects' : '[projects]'}
      </span>
      <div className={`absolute w-1/2 transition-all duration-300 overflow-hidden ${showProject ? 'max-h-[2000px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-3">
          {projects.map((project) => (
            <div key={project.id}>
              <div 
                className="cursor-pointer p-4 transition-colors duration-200 hover:bg-black/5 rounded-lg"
                onClick={() => setOpenedModal(project.id)}
              >
                <span className="text-black font-bold group-hover:underline">
                  {project.title}
                </span>
                <Text c="dimmed" size="sm" className="mt-1">
                  {project.description}
                </Text>
              </div>
              <Modal
                opened={openedModal === project.id}
                onClose={() => setOpenedModal(null)}
                title={<span className="font-bold">{project.title}</span>}
                size="lg"
              >
                <div className="space-y-4 text-black">
                  <div className="relative w-full h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p>{project.modalDescription}</p>
                  <p className="text-sm text-gray-600">Technologies: {project.tech}</p>
                  <div className="flex gap-4">
                    {project.link && (
                      <Link href={project.link} target="_blank" className="text-sm hover:underline">
                        View Project →
                      </Link>
                    )}
                    <Link href={project.github} target="_blank" className="text-sm hover:underline">
                      GitHub →
                    </Link>
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