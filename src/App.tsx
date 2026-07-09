import React from 'react';
import { Briefcase } from 'lucide-react';

const careerTimeline = [
  {
    title: "Instructional Designer",
    company: "DMA",
    companyUrl: "https://www.ana.net/",
    period: "2011 - 2014"
  },
  {
    title: "Marketing Manager",
    company: "Offerpop",
    companyUrl: "https://wyng.com",
    period: "2014 - 2016"
  },
  {
    title: "Head of Education & Support",
    company: "Ceros",
    companyUrl: "https://ceros.com",
    period: "2016 - 2024"
  },
  {
    title: "Founder",
    company: "Just One",
    companyUrl: "https://just1.co",
    period: "2024 - 2026"
  },
  {
    title: "Sr. Manager Pro Products",
    company: "ServiceTitan",
    companyUrl: "https://servicetitan.com/",
    period: "2025 - Present"
  },
];

const accomplishments = [
  {
    title: "Building Teams that Deliver",
    content: "I built and led a cross-functional team of 20+ pros who got results. From onboarding and customer success to education, we didn't just support customers; we equipped them to stick around and succeed, driving up retention and engagement where it mattered most."
  },
  {
    title: "Turning Curiosity into Results",
    content: "Many fear AI. I partnered with it. By diving deep, I built a passive business that leveraged AI-driven workflows to cut manual effort by 99% and deliver one-of-a-kind products to customers."
  },
  {
    title: "Streamlining for Success",
    content: "When processes sucked, I fixed them. I cut content creation time by 80% and resolution times from two hours to just 36 minutes by overhauling workflows and making smarter tech stack decisions."
  },
  {
    title: "From Insight to Impact",
    content: "Data isn't just numbers—it's a map to better decisions. By integrating customer feedback into strategy, I helped launch 300 product enhancements, aligned teams around real customer needs, and boosted CSAT scores by 15%."
  }
];

const projects = [
  {
    name: "Just One",
    image: "https://cdn.shopify.com/s/files/1/0877/7577/2967/files/Just_One.png?v=1738775804",
    url: "https://just1.co",
    comingSoon: false
  },
  {
    name: "Is It Cake?",
    image: "https://cdn.shopify.com/s/files/1/0877/7577/2967/files/cake.png?v=1738775804",
    url: null,
    comingSoon: false
  },
  {
    name: "SmartChef",
    image: "https://res.cloudinary.com/dcf19rbq1/image/upload/v1739740216/smartchef_pexqlq.png",
    url: null,
    comingSoon: false
  },
  {
    name: "SmartBar",
    image: "https://cdn.shopify.com/s/files/1/0877/7577/2967/files/SmartBar.png?v=1739227113",
    url: null,
    comingSoon: false
  },
  {
    name: "Asteroid or Interview?",
    image: "https://res.cloudinary.com/dcf19rbq1/image/upload/v1739633485/Asteroid_Logo_wan6hp.png",
    url: null,
    comingSoon: false
  },
  {
    name: "Styx",
    image: "https://cdn.shopify.com/s/files/1/0877/7577/2967/files/styx.png?v=1738775804",
    url: null,
    comingSoon: true
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
          Hello, I'm Rob<br />and I <s>fix</s> <span className="gradient-text">make</span> shit.
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
                Some people shy away from problems. I see them as an open challenge. Whether it's a broken system, a team that's lost direction, or a process that just flat-out doesn't work, I dive in headfirst. I don't do half-measures, and I don't waste time with fluff—I build, create, and make things better.
              </p>
              <p className="text-lg text-gray-700">
                I've built teams from scratch, turned struggling operations into high-performing machines, and used AI to automate the kind of work most people assume has to be manual. I believe in efficiency, not busywork. In smart solutions, not band-aids. My teams show up energized because I do. I wear my successes and failures on my sleeve and push those around me to take risks, own their work, and be their authentic selves.
              </p>
              <p className="text-lg text-gray-700">
                I ask the hard questions. I challenge the status quo. And when there's a better way, I find it.
              </p>
              <p className="text-lg text-gray-700 font-bold">
                If you want someone who's brave enough to stand in a room full of people and say, "I don't know how to do that. But I will by tomorrow," then we should talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-20" id="projects">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 after:content-[''] after:block after:w-24 after:h-0.5 after:bg-gray-200 after:mx-auto after:mt-4">What Am I Working On?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="aspect-[3/2] relative mb-4">
                  <img
                    src={project.image}
                    alt={`${project.name} logo`}
                    className="w-full h-full object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center group-hover:text-gray-600 transition-colors">{project.name}</h3>
                {project.comingSoon && (
                  <p className="text-center text-gray-500">Coming Soon</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="py-20" id="career">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 after:content-[''] after:block after:w-24 after:h-0.5 after:bg-gray-200 after:mx-auto after:mt-4">Career Journey</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-0 w-full h-0.5 bg-gray-200 top-[54px]" />
            <div className="grid md:grid-cols-5 gap-8">
              {careerTimeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center pt-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-black text-white">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 mb-1 hover:text-black transition-colors inline-block"
                    >
                      {item.company}
                    </a>
                    <p className="text-sm text-gray-500">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-16">
            <a
              href="https://drive.google.com/file/d/0B5n1Y8t7XZwJZnVEQnpINkNISU0/view?usp=sharing&resourcekey=0-HvGl0A4W15CbNpJoXjg8rQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="py-20" id="accomplishments">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 after:content-[''] after:block after:w-24 after:h-0.5 after:bg-gray-200 after:mx-auto after:mt-4">Accomplishments</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {accomplishments.map((item, index) => (
              <div key={index} className="space-y-2">
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
          <div className="space-y-2 mb-8">
            <a
              href="mailto:Rob@robmanning.me"
              className="text-xl hover:text-gray-600 transition-colors block"
            >
              Rob@robmanning.me
            </a>
            <a
              href="https://linkedin.com/in/manningrob"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-600 transition-colors"
            >
              linkedin.com/in/manningrob
            </a>
          </div>
          <a
            href="mailto:Rob@robmanning.me"
            className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            style={{ marginRight: '1rem' }}
          >
            GET IN TOUCH
          </a>
          <a
            href="https://calendar.app.google/3aSoa5VaABLE72Gv5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            SCHEDULE A CHAT
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center" />
    </div>
  );
}

export default App;
