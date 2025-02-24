export default function Work() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store built with Next.js and Stripe",
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time analytics dashboard for social media management",
    },
    {
      title: "Mobile Fitness App",
      description:
        "Cross-platform mobile app for tracking workouts and nutrition",
    },
    {
      title: "Corporate Website Redesign",
      description: "Modern redesign of a Fortune 500 company website",
    },
  ];

  return (
    <div className="space-y-6">
      <h1>My Work</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={`/placeholder.svg?height=200&width=400`}
              alt={project.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p>{project.description}</p>
            <a href="#" className="text-blue-600 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
