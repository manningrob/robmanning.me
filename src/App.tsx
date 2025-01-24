import React from 'react';
import { Mail } from 'lucide-react';

const accomplishments = [
  {
    title: "Building Teams that Deliver",
    content: "I built and led a cross-functional team of 20+ pros who got results. From onboarding to education, we didn't just support customers; we equipped them to stick around and succeed, driving up retention and engagement where it mattered most."
  },
  {
    title: "Turning Curiosity into Results",
    content: "Many fear AI. I partnered with it. By diving deep, I built a passive business that leverages AI-driven workflows to cut manual effort by 99% and deliver one-of-a-kind products to customers."
  },
  {
    title: "Streamlining for Success",
    content: "When processes sucked, I fixed them. I cut content creation time by 80% and resolution times from two hours to just 36 minutes by overhauling workflows and making smarter tech stack decisions."
  },
  {
    title: "From Insight to Impact",
    content: "Data isn't just numbers; it's a map to better decisions. By integrating customer feedback into strategy, I helped launch 300 product enhancements, aligned teams around real customer needs, and boosted CSAT scores by 15%."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
          Hello, I'm Rob<br />and I fix shit.
        </h1>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 after:content-[''] after:block after:w-24 after:h-0.5 after:bg-gray-200 after:mx-auto after:mt-4">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square relative">
              <img
                src="https://cdn.shopify.com/s/files/1/0877/7577/2967/files/Rob.png?v=1737740991"
                alt="Professional portrait"
                className="w-full h-full object-cover rounded-lg shadow-lg grayscale"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Some people shy away from problems. I run toward them. Whether it's solving a broken system or creating something better from the ground up, I bring drive, creativity, and grit to the table. I don't dance around issues or sugarcoat the truth. I'm here to get results, plain and simple.
              </p>
              <p className="text-lg text-gray-700">
                Challenges don't intimidate me. In fact, they fuel me. And when I don't know the answer, I'll find it. No bullshit, no excuses—just hard work and smart solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="py-20" id="accomplishments">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 after:content-[''] after:block after:w-24 after:h-0.5 after:bg-gray-200 after:mx-auto after:mt-4">Accomplishments</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {accomplishments.map((item, index) => (
              <div
                key={index}
                className="space-y-2"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 after:content-[''] after:block after:w-24 after:h-0.5 after:bg-gray-200 after:mx-auto after:mt-4">Let's Talk</h2>
          <p className="text-lg text-gray-700 mb-8">
            I may not tick every box, but I won't waste your time. If you want someone who cuts through the noise and gets shit done, we should talk.
          </p>
      <p className="text-xl mb-8">Rob@robmanning.me</p>
      <p className="text-xl mb-8">
      <a href="https://linkedin.com/in/manningrob">linkedin.com/in/manningrob</a>
        </p>


          <a
            href="mailto:Rob@robmanning.me"
            className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center" />
    </div>
  );
}

export default App;
