import React from 'react'
import ai from '/src/assets/ai.png';
import aws from '/src/assets/aws.png';
import azu from '/src/assets/azu.png';
import gcp from '/src/assets/gcp.png';
import devops from '/src/assets/devops.png';
import kuber from '/src/assets/kuber.png';
import da from '/src/assets/da.png';
import react from '/src/assets/react.png';
import html from '/src/assets/html.png';
import py from '/src/assets/py.png';
import jav from '/src/assets/jav.png';
import json from '/src/assets/json.png';



const projects = [
  {
    id: 1,
    name: "AI Explorers",
    description: "React & tailwindLet's explore your processes and how AI can be weaved into them in an ethical and natural way that feels good",
    image: ai,
    link: "https://www.aiexplorers.io/",
  },
  {
    id: 2,
    name: "AWS",
    description: "AWS is a comprehensive cloud computing platform provided by Amazon.",
    image: aws,
    link: "https://aws.amazon.com/",
  },
  {
    id: 3,
    name: "AZURE",
    description: "Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
    image: azu,
    link: "https://azure.microsoft.com/",
  },
  {
    id: 4,
    name: "Google Cloud",
    description: "Google Cloud is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products.",
    image: gcp,
    link: "https://cloud.google.com/",
  },
  {
    id: 5,
    name: "DEVOPS",
    description: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle.",
    image: devops,
    link: "https://aws.amazon.com/devops/",
  },
  {
    id: 6,
    name: "KUBERNETES",
    description: "Kubernetes is an open-source container orchestration platform designed to automate the deployment, scaling, and management of containerized applications.",
    image: kuber,
    link: "https://kubernetes.io/",
  },
  {
    id: 7,
    name: "Data Science",
    description: "Data Science is a multidisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
    image: da,
    link: "https://www.datascience.org/",
  },
  {
    id: 8,
    name: "React",
    description: "React is a JavaScript library for building user interfaces.",
    image: react,
    link: "https://reactjs.org/",
  },
  {
    id: 9,
    name: "HTML",
    description: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.",
    image: html,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 10,
    name: "Python",
    description: "Python is a high-level, interpreted programming language known for its readability and versatility.",
    image: py,
    link: "https://www.python.org/",
  },
  {
    id: 11,
    name: "Java",
    description: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    image: jav,
    link: "https://www.java.com/",
  },
  {
    id: 12,
    name: "JSON",
    description: "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.",
    image: json,
    link: "https://www.json.org/",
  },
];


const Technology = () => {


  return (
    <div className="w-full px-4 py-8 mt-16" id="technology">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8 drop-shadow">Technologies We Cover</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg flex flex-col items-stretch p-10">
            <div className="w-full flex justify-center items-center mb-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-contain rounded-t-xl bg-white"
                style={{ maxHeight: '180px' }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{project.name}</h3>
            <p className="text-gray-700 text-center mb-4">{project.description}</p>
            <div className="w-full flex justify-center mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-all duration-200 transform hover:scale-110"
              >
                Docs
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Technology
