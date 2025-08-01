'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin,Instagram } from 'lucide-react';
import Particles from '@/components/particles';
import Link from 'next/link';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/ardiansa22' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ardiansaferian' },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ferian-ardiansa-junardi-82a8a0269/',
  },
];

export default function BannerPage() {
  return (
    <div className="h-screen my-auto container mx-auto relative bg-background overflow-hidden">
      <Particles className="absolute inset-0" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25px_25px,_var(--primary-blue)_2%,transparent_0%),radial-gradient(circle_at_75px_75px,_var(--primary-blue)_2%,transparent_0%)] bg-[length:100px_100px] opacity-5" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-16">
        {/* Avatar Container */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1 }}
          className="mb-8 p-2 rounded-full border-2 border-primary-blue shine-border"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img
              src="https://github.com/Ferian25.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <div className="text-6xl font-bold mb-4">
            <h1 className="bg-gradient-to-r from-primary-blue to-blue-600 text-transparent bg-clip-text leading-tight">
              Taufik Ferian
            </h1>
          </div>
          <p className="text-2xl text-muted-foreground">
            Full-Stack Software Engineer
          </p>
        </motion.div>

        {/* Skills Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 mb-12"
        >
          {[
            'React',
            'Next.js',
            'Node.js',
            'TypeScript',
            'Python',
            'Golang',
          ].map((skill) => (
            <div
              key={skill}
              className="px-6 py-2 rounded-full bg-primary-blue/10 text-primary-blue text-xl"
            >
              {skill}
            </div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-8"
        >
          {socialLinks.map(({ name, icon: Icon, href }) => (
            <Link
              key={name}
              className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="w-6 h-6 text-primary-blue" />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
