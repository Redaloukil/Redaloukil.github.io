import { Projects } from "app/components/projects"

export const metadata = {
  title: 'Projects',
  description: 'Projects that I am working on',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My projects</h1>
      {Projects()}
    </section>
  )
}
