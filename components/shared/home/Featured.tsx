import Image from "next/image";

const Featured = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Featured work</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Portfolio website",
            description: "A portfolio website for a photographer.",
          },
          {
            title: "E-commerce website",
            description: "An e-commerce website for a clothing brand.",
          },
          {
            title: "Web application",
            description: "A web application for a productivity tool.",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <Image
              src={`/placeholder.svg?height=200&width=300&text=Project+${
                index + 1
              }`}
              alt={project.title}
              width={300}
              height={200}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-bold">
          View more work
        </button>
      </div>
    </section>
  );
};

export default Featured;
