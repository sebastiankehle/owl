"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeIn, slideIn, staggerContainer } from "@/lib/animations";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

interface Application {
  title: string;
  description: string;
  features: string[];
}

interface Stat {
  label: string;
  value: string;
  description: string;
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section with enhanced visual elements */}
      <div className="relative min-h-[90vh] overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary))_0%,transparent_85%)] opacity-[0.03]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--secondary))_0%,transparent_50%)] opacity-[0.03]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,hsl(var(--accent))_0%,transparent_50%)] opacity-[0.03]" />

          {/* Animated grid with perspective */}
          <div
            className="absolute inset-0 bg-grid-white/[0.015] bg-[size:60px_60px]"
            style={{
              transform:
                "perspective(1000px) rotateX(70deg) translateY(-50%) scale(2)",
              transformOrigin: "50% 0%",
              maskImage:
                "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
            }}
          />

          {/* Noise texture */}
          <div className="absolute inset-0 bg-noise opacity-[0.015]" />
        </div>

        {/* Hero content with improved layout */}
        <div className="container relative flex min-h-[90vh] flex-col items-center justify-center">
          <div className="relative space-y-6 text-center">
            {/* Floating accent elements */}
            <div className="absolute -left-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
            <div className="absolute -right-4 bottom-0 h-24 w-24 rounded-full bg-secondary/10 blur-xl" />

            {/* Main content */}
            <motion.div
              className="relative space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-primary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                FOUNDED IN 2012
              </div>

              <h1 className="relative bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-light tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                Uncompromising Precision in
                <br />
                <span className="relative inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Advanced Manufacturing
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="mx-auto max-w-[42rem] text-base text-muted-foreground sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Providing innovative solutions for microfluidic devices, medical
              devices, semiconductor connectors, and automated testing with
              industry&apos;s leading precision and quality.
            </motion.p>

            {/* Enhanced CTA section */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link
                href="/services"
                className="group relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-md border border-primary/10 bg-primary/5 px-6 text-sm text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-primary/10"
              >
                <span className="relative z-10">Explore Our Technology</span>
                <ArrowRightIcon className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact Us
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-[1px] bg-gradient-to-b from-muted-foreground/20 to-transparent">
              <div className="h-1/2 w-full animate-scroll bg-gradient-to-b from-muted-foreground/40 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats with visual enhancements */}
      <AnimatedSection className="relative border-y border-muted/10 bg-muted/5 py-24">
        <div className="container">
          <motion.div variants={fadeIn} className="mb-12 text-center">
            <h2 className="text-2xl font-light text-foreground">
              Manufacturing Capabilities
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                custom={index}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                className="group relative overflow-hidden rounded-lg border border-primary/20 bg-muted/[0.02] p-8 backdrop-blur-sm transition-all duration-200 hover:border-primary/30"
              >
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="text-3xl font-light tracking-tight text-foreground">
                    {stat.value}
                  </div>
                  <p className="text-xs text-muted-foreground/80">
                    {stat.description}
                  </p>
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Innovation Highlights */}
      <AnimatedSection className="container relative z-10 py-32">
        <motion.div variants={slideIn} className="mb-16">
          <p className="mb-3 text-sm text-primary">BREAKTHROUGH TECHNOLOGY</p>
          <h2 className="max-w-3xl text-3xl font-light text-foreground">
            Pushing the Boundaries of What's Possible
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {innovations.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeIn}
              custom={index}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px -5px rgba(var(--primary), 0.2)",
              }}
              className="group relative overflow-hidden rounded-lg border border-primary/20 bg-muted/[0.03] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30"
            >
              <div className="relative space-y-4 z-10">
                <div className="text-primary">{item.metric}</div>
                <h3 className="text-lg text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      {/* Core Technologies */}
      <AnimatedSection className="relative border-y border-muted/10 bg-muted/5 py-32">
        <div className="container relative z-10">
          <motion.div variants={fadeIn} className="mb-16">
            <p className="mb-3 text-sm text-primary">CORE TECHNOLOGIES</p>
            <h2 className="max-w-2xl text-3xl font-light text-foreground">
              Advanced Manufacturing Solutions
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid gap-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={fadeIn}
                custom={index}
                whileHover={{ scale: 1.01 }}
                className="relative rounded-lg border border-primary/20 bg-muted/[0.03] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30"
              >
                {/* Technology Header */}
                <div className="mb-8 flex items-start justify-between gap-8">
                  <div className="space-y-4">
                    <div className="inline-flex h-6 items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.05] px-3 text-xs text-primary">
                      <span className="font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      <span>CORE TECHNOLOGY</span>
                    </div>
                    <h3 className="text-2xl text-foreground">{tech.title}</h3>
                    <p className="max-w-2xl text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </div>

                {/* Technology Details Grid */}
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Features Column */}
                  <div className="space-y-6">
                    <h4 className="text-sm font-medium text-foreground">
                      Key Features
                    </h4>
                    <div className="grid gap-4">
                      {tech.features.map((feature) => (
                        <div
                          key={feature.title}
                          className="relative rounded-lg border border-primary/15 bg-muted/[0.03] p-4 transition-all duration-300 hover:border-primary/25"
                        >
                          <div className="mb-2 text-sm font-medium text-foreground">
                            {feature.title}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specs Column */}
                  <div className="space-y-6">
                    <h4 className="text-sm font-medium text-foreground">
                      Technical Specifications
                    </h4>
                    <div className="grid gap-3">
                      {tech.specs.map((spec) => (
                        <div
                          key={spec}
                          className="flex items-center gap-3 rounded-lg border border-primary/15 bg-muted/[0.03] p-4 text-sm text-muted-foreground transition-all duration-300 hover:border-primary/25"
                        >
                          <div className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Industry Applications */}
      <AnimatedSection className="container relative z-10 py-32">
        <motion.div variants={slideIn} className="mb-16">
          <p className="mb-3 text-sm text-primary">APPLICATIONS</p>
          <h2 className="max-w-2xl text-3xl font-light text-foreground">
            Industry Solutions
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              variants={fadeIn}
              custom={index}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px -5px rgba(var(--primary), 0.2)",
              }}
              className="group relative overflow-hidden rounded-lg border border-primary/20 bg-muted/[0.03] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30"
            >
              <div className="relative space-y-4 z-10">
                <h3 className="text-lg text-foreground">{app.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {app.description}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {app.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1 w-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="container relative z-10 py-32">
        <motion.div variants={slideIn} className="mb-16">
          <p className="mb-3 text-sm text-primary">OUR SERVICES</p>
          <h2 className="max-w-2xl text-3xl font-light text-foreground">
            Comprehensive Manufacturing Solutions
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn}
              custom={index}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px -5px rgba(var(--primary), 0.2)",
              }}
              className="group relative overflow-hidden rounded-lg border border-primary/20 bg-muted/[0.03] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30"
            >
              <div className="relative space-y-4 z-10">
                <h3 className="text-lg text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>
    </div>
  );
}

const innovations = [
  {
    title: "Quantum-Scale Precision",
    metric: "150nm",
    description:
      "Industry-leading resolution enabling features as small as 150 nanometers, pushing the boundaries of micro-manufacturing.",
  },
  {
    title: "Advanced Materials",
    metric: "20+",
    description:
      "Proprietary photopolymer resins developed specifically for high-performance applications across industries.",
  },
  {
    title: "Global Impact",
    metric: "15+",
    description:
      "Countries served with our advanced manufacturing solutions, transforming industries worldwide.",
  },
];

const technologies = [
  {
    title: "Two-Photon Lithography",
    description:
      "Our flagship technology enables true 3D printing at the microscale, achieving unprecedented precision and complexity in manufactured components.",
    features: [
      {
        title: "Direct Laser Writing",
        description:
          "Ultra-precise 3D structuring through focused femtosecond laser pulses.",
      },
      {
        title: "Proprietary Materials",
        description:
          "Custom-developed photopolymers optimized for specific applications.",
      },
      {
        title: "Advanced Control Systems",
        description:
          "Real-time monitoring and adjustment for optimal print quality.",
      },
    ],
    specs: [
      "Resolution: Down to 150nm feature size",
      "Build Volume: Up to 100mm³",
      "Layer Thickness: 100nm - 1µm",
      "Surface Roughness: Ra < 10nm",
    ],
  },
  {
    title: "Micro-Precision Manufacturing",
    description:
      "Comprehensive manufacturing solutions combining additive and subtractive processes for complex micro-components.",
    features: [
      {
        title: "Hybrid Manufacturing",
        description: "Integration of multiple processes for optimal results.",
      },
      {
        title: "Quality Control",
        description: "Advanced metrology and inspection at every stage.",
      },
      {
        title: "Process Optimization",
        description: "Continuous improvement through data-driven analysis.",
      },
    ],
    specs: [
      "Positioning Accuracy: ±0.5µm",
      "Surface Finish: Ra 0.1µm",
      "Material Options: Polymers, Metals, Ceramics",
      "Clean Room: ISO Class 6",
    ],
  },
];

const applications: Application[] = [
  {
    title: "Medical Devices",
    description:
      "Enabling next-generation medical devices through micro-precision manufacturing and advanced materials.",
    features: [
      "Microfluidic devices for diagnostics and drug delivery",
      "Minimally invasive surgical instruments",
      "Implantable medical devices",
      "Bio-compatible micro-structures",
      "Custom medical components",
    ],
  },
  {
    title: "Semiconductor",
    description:
      "Supporting the advancement of semiconductor technology with ultra-precise components and solutions.",
    features: [
      "Advanced packaging solutions",
      "High-density interconnects",
      "Micro-lens arrays",
      "Precision alignment structures",
      "Custom IC packaging components",
    ],
  },
  {
    title: "Aerospace & Defense",
    description:
      "Delivering mission-critical components with unmatched precision for aerospace and defense applications.",
    features: [
      "Optical components and systems",
      "Sensor integration solutions",
      "RF/Microwave components",
      "Precision mechanical parts",
      "Custom aerospace components",
    ],
  },
];

const stats: Stat[] = [
  {
    label: "Founded",
    value: "2012",
    description: "By Nick Liverman, pioneering micro-precision manufacturing",
  },
  {
    label: "Patent Granted",
    value: "2017",
    description: "Production of 3D objects by stereolithography",
  },
  {
    label: "Industries",
    value: "6+",
    description: "Biotech, Medical, Semiconductor, Aerospace, Automotive, R&D",
  },
  {
    label: "Precision",
    value: "150nm",
    description: "Ultra-precise feature size for advanced applications",
  },
];

const services = [
  {
    title: "3D Printing as a Service",
    description:
      "Customized printing solutions tailored to your unique needs, ensuring precision and quality in every print.",
  },
  {
    title: "Industrial-Scale Printers",
    description:
      "State-of-the-art industrial printers designed for high-volume production, delivering unmatched speed and accuracy.",
  },
  {
    title: "Modeling and Simulation",
    description:
      "Utilizing Unreal Engine 5 to create immersive 3D environments for precise simulations, enhancing design and testing processes.",
  },
];
