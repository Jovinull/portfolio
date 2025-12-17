import { workData } from '@/assets/assets';
import WorkCard from './WorkCard';

export default function WorkGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {workData.map((project, index) => (
        <WorkCard key={`${project.title}-${index}`} project={project} />
      ))}
    </div>
  );
}
