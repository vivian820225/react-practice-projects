import ProjectsCard from './ProjectsCard'
import SectionTitle from './SectionTitle'
import { projects } from '../data'

const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}
export default Projects
