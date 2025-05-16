import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi,
      </h1>
      <p className="mb-4">
        {`I’m Reda, I love sharing what I learn along the way! In my blog, I love writing about whatever related to software and the web, I will go off-script and write about life sometimes because I am not a robot yet`}
        </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
