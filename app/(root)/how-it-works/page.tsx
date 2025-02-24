export default function HowItWorks() {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We discuss your project requirements and goals",
    },
    {
      title: "Planning and Design",
      description: "Creating wireframes and mockups for your approval",
    },
    {
      title: "Development",
      description: "Building your project with the latest technologies",
    },
    {
      title: "Testing and Refinement",
      description: "Ensuring everything works perfectly",
    },
    {
      title: "Launch and Support",
      description: "Deploying your project and providing ongoing support",
    },
  ];

  return (
    <div className="space-y-6">
      <h1>How It Works</h1>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
              {index + 1}
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
