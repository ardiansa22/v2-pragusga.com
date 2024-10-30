'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: `Cloud Platform Engineer`,
    company: `Telkomsel`,
    period: `February 2024 - June 2024`,
    location: `Jakarta, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Automated data extraction from Datadog, saving it to a database for AI-based infrastructure analysis, enhancing data processing efficiency.`,
      `Created AWS EC2 module using Terraform, enabling consistent and automated infrastructure provisioning across environments.`,
      `Built a platform for managing AWS account permissions, simplifying permission management and enhancing security compliance for cloud resources.`,
    ],
  },
  {
    title: `Software Engineer`,
    company: `Tokopedia`,
    period: `September 2023 - December 2023`,
    location: `Jakarta, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Optimized prompt engineering for AI chatbot, implementing the HYDE method to enhance response relevance and improve overall user interactions.`,
      `Refactored existing codebase, improving code readability and maintainability, making it easier for team members to collaborate and onboard.`,
      `Developed and implemented comprehensive unit tests, ensuring higher code quality and stability, and reducing potential issues in production.`,
    ],
  },
  {
    title: `Software Engineer`,
    company: `Dana Indonesia`,
    period: `May 2023 - July 2023`,
    location: `Jakarta, Indonesia`,
    type: `Apprenticeships`,
    current: false,
    responsibilities: [
      `Collaborated on Dana's fraud detection system, unifying frontend, backend, and cloud technologies to bolster 
financial security.`,
      `Enhanced fraud detection capabilities by integrating machine learning algorithms, resulting in a 40% reduction in 
false positives and a 20% increase in the accuracy of fraud detection.`,
      `Streamlined the file analysis process through cloud functions, reducing the processing time for uploaded CSV 
files by 50%, thus enabling quicker fraud prediction.`,
    ],
  },
  {
    title: `Backend Engineer`,
    company: `Nomura Research Institute`,
    period: `August 2022 - May 2023`,
    location: `Jakarta, Indonesia`,
    type: `Internship`,
    current: false,
    responsibilities: [
      `Utilized modern technologies including CQRS, event-driven development, and event store to build robust and 
scalable backend systems, ensuring high performance and maintainability.`,
      `Simplified the recruitment process by developing an automated system from initial testing and CV screening to 
interview stages, resulting in a more efficient and seamless hiring process.`,
      `Engineered an employee management system with features such as attendance tracking, leave requests, and absence 
authorization, improving overall operational efficiency.`,
    ],
  },
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
              <Card
                className={`p-6 hover:shadow-lg transition-all duration-300 ${
                  experience.current
                    ? 'border-primary-orange bg-primary-orange/5 hover:bg-primary-orange/10'
                    : 'hover:border-primary-orange/50'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-semibold flex flex-wrap gap-2 items-center">
                      {experience.title}
                      <span className="text-primary-orange">@</span>
                      {experience.company}
                      {experience.current && (
                        <Badge
                          variant="default"
                          className="ml-2 bg-primary-orange hover:bg-primary-orange-dark"
                        >
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
                  {experience.responsibilities.map(
                    (responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    )
                  )}
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
