import { Code, Palette } from "lucide-react";

const Services = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">
        I offer services in design and development
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl">
        I offer a range of services in design and development. Whether you need
        help with a specific project or ongoing support, I can help. Below are
        some of the services I offer. If you have a project in mind that is not
        listed, feel free to reach out and ask.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            icon: Palette,
            title: "Design",
            description:
              "I design websites, apps, and more. I can help with branding, user interface design, and user experience design.",
          },
          {
            icon: Code,
            title: "Development",
            description:
              "I develop websites, web applications, and more. I can help with front-end development, back-end development, and full-stack development.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 flex flex-col gap-4"
          >
            <service.icon className="h-12 w-12 text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
