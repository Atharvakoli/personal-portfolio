import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            name: "Jane Smith",
            content:
              "Sarah is a fantastic designer. She is very talented and has a great eye for design. She is also very professional, responsive, and easy to work with. I would highly recommend her to anyone looking for a great designer.",
          },
          {
            name: "John Doe",
            content:
              "Sarah is an amazing developer. She is very skilled and has a great understanding of web development. She is also very reliable, efficient, and detail-oriented. I would highly recommend her to anyone looking for a great developer.",
          },
        ].map((testimonial, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex gap-4">
              <Image
                src={`/placeholder.svg?height=64&width=64&text=${testimonial.name[0]}`}
                alt={testimonial.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-bold">
          View more testimonials
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
