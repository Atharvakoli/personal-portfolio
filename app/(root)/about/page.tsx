import Image from "next/image";

export default function About() {
  return (
    <div className="space-y-6">
      <h1>About Me</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Profile"
            className="rounded-full w-full"
            width={100}
            height={100}
          />
        </div>
        <div className="md:w-2/3">
          <p>
            I am a skilled developer with a passion for creating beautiful and
            functional web applications. With years of experience in various
            technologies, I bring creativity and technical expertise to every
            project.
          </p>
          <p>
            My journey in web development started with a curiosity for how
            things work on the internet. Since then, I have honed my skills in
            front-end and back-end technologies, always staying up-to-date with
            the latest trends and best practices.
          </p>
          <p>
            When I am not coding, you can find me exploring nature, reading tech
            blogs, or contributing to open-source projects.
          </p>
        </div>
      </div>
    </div>
  );
}
