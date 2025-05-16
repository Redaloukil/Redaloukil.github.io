import Link from 'next/link'
import { getProjects } from 'app/projects/utils'

export function Projects() {
  let projects = getProjects()

  return (
    <div>
      {projects
        .map((post) => (
            <div className="w-full flex flex-row gap-10">
              <Link className=" text-blue-500" href={`https://chromewebstore.google.com/detail/punctuate/ndpeffmempnfhldemeddiefagnjpijmd`} target='_blank'>
                {post.metadata.title}
              </Link>
              <p className='text-neutral-700 leading-relaxed'>{post.metadata.description}</p>
            </div>

        ))}
    </div>
  )
}
