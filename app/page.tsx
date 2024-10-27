import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi,
      </h1>
      <p className="mb-4">
        {`I’m Reda, a passionate software engineer with six years of experience in the field. Currently, I work as a TypeScript and JavaScript developer for the Air france KLM Group, where I focus on the customer-facing website of our e-commerce division. This role allows me to engage with innovative technologies that enhance user experience and drive business growth.`}</p>
        <p>{`I love sharing what I learn along the way! In my blog, I’ll be posting about various technologies I come across in my daily work, along with tips and tricks to boost developer productivity. I hope you find something helpful and inspiring here. Let’s explore the exciting world of software engineering together!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
