'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-primary-orange">Me</span>
              </h2>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Hi! I'm{' '}
                  <span className="text-primary-orange font-semibold">
                    Taufik Pragusga
                  </span>
                  , a passionate software engineer with a keen eye for detail
                  and a drive for creating impactful solutions. With expertise
                  in both frontend and backend development, I bring ideas to
                  life through clean, efficient code.
                </p>
                <p>
                  My journey in tech has equipped me with a diverse skill set
                  and the ability to tackle complex challenges head-on. I
                  believe in writing maintainable code that scales and delivers
                  exceptional user experiences.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative shine-border">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-orange/10 to-transparent rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
