export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design for digital products",
    },
    {
      title: "SEO Optimization",
      description: "Improve your online visibility and rankings",
    },
  ];

  return (
    <div className="space-y-6">
      <h1>Services</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
