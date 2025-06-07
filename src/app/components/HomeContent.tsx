'use client';

import Link from "next/link";
import { useState } from 'react';
import TypeIt from "typeit-react";
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import { AnimatePresence, motion,} from 'framer-motion';

interface HomeContentProps {
  experiences: any[];
  projects: any[];
  resumeUrl?: string;
}

export default function HomeContent({ experiences, projects, resumeUrl }: HomeContentProps) {
  const [activeSection, setActiveSection] = useState<"experience" | "projects" | null>(null);
  const [showExperience, setShowExperience] = useState(false);
  const [showProject, setShowProject] = useState(false);

  return (
    <div className="relative">
      {/* Header */}
      <h1 className="text-8xl font-bold text-left mb-2">
        <TypeIt
          options={{
            afterComplete: (instance: any) => instance.destroy()
          }}
        >
          Stanley Zheng
        </TypeIt>
      </h1>

      {/* Links */}
      <motion.div 
        className="flex gap-4 lg:mb-30 md:mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link href="mailto:stanley.zheng00@gmail.com" className="text-xs hover:underline">[email]</Link>
        <Link href="https://www.linkedin.com/in/szheng-swe" target="_blank" className="text-xs hover:underline">[linkedin]</Link>
        <Link href="https://github.com/szheng31" target="_blank" className="text-xs hover:underline">[github]</Link>
        {resumeUrl ? (
          <Link href={resumeUrl} target="_blank" className="text-xs hover:underline">[cv]</Link>
        ) : (
          <span className="text-xs text-gray-400">[cv]</span>
        )}
      </motion.div>

      {/* Content */}
      <motion.div 
        className="flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {/* Left Column: Bio */}
        <div className="text-2xl lg:mb-25 mb-5 lg:w-1/2 flex items-center">
          <p>
            I'm a rising junior at Vanderbilt University studying Computer Science and Applied Mathematics, with a minor in Electrical/Computer Engineering. I'm interested in systems development and programming languages, and I'm currently in research involved in secure and distributed systems. In my free time, I love to collect vinyls and play ultimate frisbee!
          </p>
        </div>

        {/* Right Column: Active Section (overlay version) */}
        <div className="w-1/2 hidden lg:block">
          <AnimatePresence mode="wait">
            {activeSection === "experience" && (
              <motion.div
                key="experience"
                layoutId="experience"
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest('.title')) {
                    setTimeout(() => setActiveSection(null), 300);
                    setShowProject(false);
                    setShowExperience(true);
                  }
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Experience
                  showExperience={showExperience}
                  setShowExperience={setShowExperience}
                  experiences={experiences}
                />
              </motion.div>
            )}

            {activeSection === "projects" && (
              <motion.div
                key="projects"
                layoutId="projects"
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest('.title')) {
                    setTimeout(() => setActiveSection(null), 300);
                    setShowExperience(false);
                    setShowProject(true);
                  }
                }}
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0}}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Projects
                  showProject={showProject}
                  setShowProject={setShowProject}
                  projects={projects}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Bottom Section — always present */}
      <motion.div 
        className="flex-col gap-8 mt-8 hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <motion.div 
          className="min-h-[25px]" 
          layoutId="experience" 
          onClick={() => {
            if (activeSection === "projects") { // wait for projects to close before opening experience
              setShowProject(false);
              setTimeout(() => setActiveSection("experience"), 300);
            } else {
              setActiveSection("experience");
              setTimeout(() => setShowExperience(true), 400);
            }
          }}
        >
          {activeSection != "experience" && (
            <Experience
              showExperience={showExperience}
              setShowExperience={setShowExperience}
              experiences={experiences}
            />
          )}
        </motion.div>

        <motion.div 
          className="min-h-[25px]" 
          layoutId="projects" 
          onClick={() => {
            if (activeSection === "experience") {
              setShowExperience(false);
              setTimeout(() => setActiveSection("projects"), 300);
            } else {
              setActiveSection("projects");
              setTimeout(() => setShowProject(true), 400);
            }
          }}
        >
          {activeSection != "projects" && (
            <Projects
              showProject={showProject}
              setShowProject={setShowProject}
              projects={projects}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Mobile Experience and Projects Section */}
      <motion.div 
        className="lg:hidden flex flex-col mt-8 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <div className={`lg:hidden relative transition-all duration-300 w-full`}>
          <Experience
            showExperience={showExperience}
            setShowExperience={setShowExperience}
            experiences={experiences}
            noDelay={true}
          />
        </div>
        <div className={`lg:hidden relative transition-all duration-300 ${showExperience ? 'mt-[650px]' : 'mt-8'}`}>
          <Projects
            showProject={showProject}
            setShowProject={setShowProject}
            projects={projects}
            noDelay={true}
          />
        </div>
      </motion.div>
    </div>
  );
} 