"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    images: ["/project1-1.jpg", "/project1-2.jpg"],
    techStack: ["React", "Node.js", "MongoDB"],
    sourceCode: "https://github.com",
    liveDemo: "https://demo.com",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-primary-orange/50 group">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex}>
                        <div className="relative aspect-video">
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${imageIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="text-primary-orange hover:bg-primary-orange/20" />
                  <CarouselNext className="text-primary-orange hover:bg-primary-orange/20" />
                </Carousel>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 min-w-[140px] hover:bg-primary-orange hover:text-white border-primary-orange/50"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 min-w-[140px] hover:bg-primary-orange hover:text-white border-primary-orange/50"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;