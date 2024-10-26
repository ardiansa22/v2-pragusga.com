"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    current: true,
    responsibilities: [
      "Led development of microservices architecture",
      "Implemented CI/CD pipelines",
      "Mentored junior developers"
    ]
  },
  {
    title: "Software Engineer",
    company: "StartUp Inc",
    period: "2020 - 2022",
    location: "New York, NY",
    type: "Full-time",
    current: false,
    responsibilities: [
      "Developed full-stack applications",
      "Optimized database performance",
      "Implemented user authentication"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Tech Solutions",
    period: "2019 - 2020",
    location: "Boston, MA",
    type: "Internship",
    current: false,
    responsibilities: [
      "Assisted in frontend development",
      "Fixed bugs and improved performance",
      "Participated in code reviews"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-6 hover:shadow-lg transition-all duration-300 ${
                experience.current 
                  ? 'border-primary-orange bg-primary-orange/5 hover:bg-primary-orange/10' 
                  : 'hover:border-primary-orange/50'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-semibold flex flex-wrap gap-2 items-center">
                      {experience.title}
                      <span className="text-primary-orange">@</span>
                      {experience.company}
                      {experience.current && (
                        <Badge variant="default" className="ml-2 bg-primary-orange hover:bg-primary-orange-dark">
                          Current
                        </Badge>
                      )}
                    </h3>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <Badge variant="secondary" className="mb-4">
                  {experience.type}
                </Badge>

                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;