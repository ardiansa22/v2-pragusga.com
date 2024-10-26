"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import Particles from "@/components/particles";

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername' },
  { name: 'X (Twitter)', icon: Twitter, href: 'https://twitter.com/yourusername' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
];

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/50">
      <Particles className="absolute inset-0" />
      <div className="container px-4 mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
            Transforming Ideas into
            <br />
            Digital Reality
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Full-stack developer crafting elegant solutions to complex problems.
            Let's build something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6 mt-8"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary-orange transform hover:scale-110 transition-all"
                  aria-label={social.name}
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}