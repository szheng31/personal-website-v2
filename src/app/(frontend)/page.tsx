import '@mantine/core/styles.css';
import HomeContent from '@/app/components/HomeContent';
import config from '@payload-config'
import { getPayload } from 'payload'

// Add revalidation to ensure page updates when content changes
export const revalidate = 0; // revalidate at every request

export default async function Home() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const {docs: experiences} = await payload.find({
    collection: 'experiences',
    limit: 100,
    depth: 1,
    sort: '-startDate',
  })

  const {docs: projects} = await payload.find({
    collection: 'projects',
    limit: 100,
    depth: 1,
  })

  const {docs: resumes} = await payload.find({
    collection: 'resume',
    where: {
      isActive: {
        equals: true
      }
    },
    limit: 1,
  })

  const resumeUrl = resumes[0]?.url || undefined

  return (
    <main className="min-h-[1200px] px-24 py-16">
      <HomeContent 
        experiences={experiences} 
        projects={projects} 
        resumeUrl={resumeUrl} 
      />
    </main>
  );
}
