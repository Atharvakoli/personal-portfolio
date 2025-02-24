import Image from "next/image";
import image1 from "@/assets/images/image1.png";

const ResponsiveProfile = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
          <Image
            src={image1}
            alt="Jenny Ramos"
            width={128}
            height={128}
            className="rounded-full"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Jenny Ramos
            </h1>
            <p className="text-gray-600 mb-4">
              UX/UI designer for 6 years in the tech industry. I specialize in
              mobile and responsive design.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Hire me
            </button>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
          <p className="text-gray-600">
            I am a freelance UX/UI designer with over 6 years of experience
            working in the technology industry. I have a passion for creating
            beautiful, intuitive, and user-friendly designs. I specialize in
            mobile and responsive design and have worked with clients ranging
            from startups to large corporations. My goal is to help you create a
            product that not only looks great but also provides an exceptional
            user experience. If you are looking for a designer who can bring
            your vision to life, I did love to chat!
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="space-y-4">
            {[
              {
                title: "Senior UX Designer at Tech Co",
                period: "2020-Present",
              },
              { title: "UX Designer at Startup", period: "2017-2020" },
              {
                title: "Product Designer at E-commerce Co",
                period: "2015-2017",
              },
            ].map((job, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-gray-600">{job.period}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "User research",
              "Wireframing",
              "Prototyping",
              "Interaction design",
              "Mobile design",
              "Responsive design",
              "Design systems",
              "Illustration",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="space-y-4">
            {[
              { degree: "Master of Arts in Graphic Design", year: "2015" },
              { degree: "Bachelor of Arts in Fine Arts", year: "2012" },
            ].map((edu, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResponsiveProfile;
