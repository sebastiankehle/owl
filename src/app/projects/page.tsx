import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary))_0%,transparent_85%)] opacity-[0.03]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--secondary))_0%,transparent_50%)] opacity-[0.03]" />
          <div className="absolute inset-0 bg-noise opacity-[0.015]" />
        </div>

        <div className="container relative py-24 md:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <div className="w-fit inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary opacity-80" />
              OUR PROJECTS
            </div>

            <h1 className="text-3xl font-light tracking-tight sm:text-5xl">
              Pioneering{" "}
              <span className="bg-gradient-to-r from-primary/80 via-secondary/80 to-accent/80 dark:from-primary dark:via-secondary dark:to-accent bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>

            <p className="mx-auto max-w-[42rem] text-base text-muted-foreground sm:text-lg">
              From immersive gaming worlds to revolutionary DeFi platforms,
              we're pushing the boundaries of technology and user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col gap-4">
          <div className="w-fit inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary opacity-80" />
            FEATURED PROJECTS
          </div>

          <div className="space-y-12">
            {/* Abyss Online Project */}
            <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-primary/[0.02] p-8">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--primary))_0%,transparent_70%)] opacity-[0.05]" />

              <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
                <div className="space-y-4">
                  <Link
                    href="https://www.abyssonline.com"
                    target="_blank"
                    className="group/link inline-flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <h3 className="text-2xl font-light">Abyss Online</h3>
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                  <p className="text-base text-muted-foreground">
                    A next-generation MMORPG built in Unreal Engine 5, featuring
                    a unique blend of survival, crafting, and community-driven
                    world development. Set in a vast world with eight distinct
                    biomes, each inspired by real-world cultures and
                    mythologies.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-muted-foreground">
                        Technology
                      </div>
                      <div className="text-sm">
                        Unreal Engine 5, Advanced Physics, Cloud Infrastructure
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-muted-foreground">
                        Features
                      </div>
                      <div className="text-sm">
                        Survival Mechanics, Deep Crafting Systems, Player-Driven
                        Economy
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 lg:border-l lg:border-primary/10 lg:pl-8">
                  <h4 className="text-sm font-light uppercase tracking-wider text-muted-foreground">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/50" />
                      <span>Culturally inspired biomes and environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/50" />
                      <span>Advanced survival and crafting mechanics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/50" />
                      <span>Community-shaped world development</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link
                      href="https://www.abyssonline.com/"
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm text-primary/80 hover:text-primary transition-colors"
                    >
                      <span>Explore Game Details</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Divine Project */}
            <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-primary/[0.02] p-8">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--secondary))_0%,transparent_70%)] opacity-[0.05]" />

              <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
                <div className="space-y-4">
                  <Link
                    href="https://www.chaosanddisorder.ai"
                    target="_blank"
                    className="group/link inline-flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <h3 className="text-2xl font-light">Divine</h3>
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                  <p className="text-base text-muted-foreground">
                    A revolutionary AI system built around the "Hivewave"
                    concept, where community interaction shapes the AI's
                    development. Divine actively learns from and engages with
                    the community across multiple platforms.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-muted-foreground">
                        Platform
                      </div>
                      <div className="text-sm">
                        Multi-platform AI Integration
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm text-muted-foreground">
                        Features
                      </div>
                      <div className="text-sm">
                        Community-Driven Evolution, Real-time Learning, Content
                        Creation
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 lg:border-l lg:border-primary/10 lg:pl-8">
                  <h4 className="text-sm font-light uppercase tracking-wider text-muted-foreground">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/50" />
                      <span>Community-shaped AI development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/50" />
                      <span>Multi-platform feedback integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/50" />
                      <span>Autonomous content creation</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link
                      href="https://www.chaosanddisorder.ai"
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm text-primary/80 hover:text-primary transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="container py-12 md:py-24 bg-primary/[0.01]">
        <div className="mx-auto flex max-w-[980px] flex-col gap-4">
          <div className="w-fit inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary opacity-80" />
            TECHNOLOGY
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group relative overflow-hidden rounded-lg border border-primary/10 bg-primary/[0.02] p-6"
              >
                <div className="space-y-2">
                  <h3 className="text-base font-light">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col gap-4">
          <div className="w-fit inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary opacity-80" />
            PROCESS
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {processes.map((process) => (
              <div
                key={process.title}
                className="group relative overflow-hidden rounded-lg border border-primary/10 bg-primary/[0.02] p-6"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-light">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const technologies = [
  {
    name: "Unreal Engine 5",
    description:
      "Next-gen game development with advanced physics and rendering capabilities.",
  },
  {
    name: "Solana Blockchain",
    description:
      "High-performance blockchain platform for decentralized applications.",
  },
  {
    name: "Advanced Physics",
    description: "Custom physics simulation for realistic game mechanics.",
  },
  {
    name: "Smart Contracts",
    description: "Secure and efficient DeFi mechanisms implementation.",
  },
  {
    name: "Cloud Infrastructure",
    description: "Scalable backend systems for multiplayer gaming.",
  },
  {
    name: "AI Integration",
    description: "Machine learning for enhanced gameplay and market analysis.",
  },
];

const processes = [
  {
    title: "Research & Development",
    description:
      "Continuous exploration of cutting-edge technologies and methodologies.",
  },
  {
    title: "Community Engagement",
    description:
      "Active collaboration with users and stakeholders throughout development.",
  },
  {
    title: "Iterative Development",
    description: "Agile methodology with regular updates and improvements.",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and optimization for optimal performance.",
  },
];
