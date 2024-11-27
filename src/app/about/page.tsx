export default function AboutPage() {
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
              ABOUT OWL
            </div>

            <h1 className="text-3xl font-light tracking-tight sm:text-5xl">
              Pioneering{" "}
              <span className="bg-gradient-to-r from-primary/80 via-secondary/80 to-accent/80 dark:from-primary dark:via-secondary dark:to-accent bg-clip-text text-transparent">
                Micro-Precision Manufacturing
              </span>
            </h1>

            <div className="relative mt-8 grid gap-8 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-lg border border-primary/10 bg-primary/[0.02] p-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--primary))_0%,transparent_70%)] opacity-[0.05]" />
                <div className="space-y-4">
                  <h2 className="text-xl font-light">Our Mission</h2>
                  <p className="text-base text-muted-foreground">
                    Founded in 2012, we're dedicated to advancing manufacturing
                    through innovative micro-precision technology, delivering
                    solutions that transform industries.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg border border-primary/10 bg-primary/[0.02] p-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--secondary))_0%,transparent_70%)] opacity-[0.05]" />
                <div className="space-y-4">
                  <h2 className="text-xl font-light">Our Impact</h2>
                  <p className="text-base text-muted-foreground">
                    From medical devices to semiconductor components, our
                    technology enables the creation of complex structures with
                    unprecedented precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Story Section - Cleaner layout */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col gap-4">
          <div className="w-fit inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 dark:border-primary/10 dark:bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary opacity-80" />
            EARLY STAGES
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-light tracking-tight sm:text-3xl">
                From NASA Internships to Manufacturing Innovation
              </h2>
            </div>
            <div className="space-y-6 text-base text-muted-foreground sm:text-lg">
              <p>
                From the age of 12, Nick Liverman discovered a fervor for
                robotics. His journey began with the creation of his first
                virtual robot, scripted within the digital world of Ultima
                Online. This rudimentary automaton, programmed to mine ore and
                craft items. An early understanding of cartesian robotics led to
                internships at NASA and an early introduction to 3D printing.
              </p>
              <p>
                A decade ago, as consumer 3D printing started gaining traction,
                Nick was captivated by the prospect of democratizing 3D design.
                He invested in one of the pioneering 3D printer kits available
                to consumers, only to be disheartened by its lackluster
                resolution and accuracy. Despite months of relentless tweaking,
                the machine fell short of his expectations.
              </p>
              <p>
                Leveraging his substantial expertise in robotics and
                fabrication, Nick founded Old World Labs. His goal was clear: to
                create a 3D printer of uncompromising precision and accuracy,
                capable of satisfying the toughest industrial standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Refined */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col gap-4">
          <div className="w-fit inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 dark:border-primary/10 dark:bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary opacity-80" />
            KEY MILESTONES
          </div>

          <h2 className="text-2xl font-light tracking-tight sm:text-3xl">
            A Decade of Innovation
          </h2>

          <div className="relative mt-8">
            {/* Main vertical line */}
            <div className="absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />

            <div className="space-y-6">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="group relative pl-28">
                  {/* Year badge */}
                  <div className="absolute left-0 top-0 inline-flex h-8 items-center rounded-full border border-primary/20 bg-primary/10 dark:border-primary/10 dark:bg-primary/5 px-3 text-sm font-medium text-primary">
                    {milestone.year}
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-20 top-3 -translate-x-1/2">
                    <div className="relative h-2.5 w-2.5">
                      <div className="absolute inset-0 rounded-full bg-primary" />
                      <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping opacity-75" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="group relative overflow-hidden rounded-md border border-primary/20 bg-primary/[0.03] dark:border-primary/10 dark:bg-primary/[0.015] p-6 text-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 dark:hover:border-primary/30 hover:bg-primary/[0.05] dark:hover:bg-primary/[0.03]">
                    <div className="space-y-2">
                      <h3 className="text-base font-light sm:text-lg">
                        {milestone.title}
                      </h3>
                      {milestone.achievements.length > 0 && (
                        <div className="text-sm text-muted-foreground">
                          {milestone.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/50" />
                              <p>{achievement}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Section - Matching home page cards */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col gap-4">
          <div className="w-fit inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 dark:border-primary/10 dark:bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary opacity-80" />
            IN THE MEDIA
          </div>

          <h2 className="text-2xl font-light tracking-tight sm:text-3xl">
            Old World Labs in the Media
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {mediaHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="group relative overflow-hidden rounded-md border border-primary/20 bg-primary/[0.03] dark:border-primary/10 dark:bg-primary/[0.015] p-6 text-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 dark:hover:border-primary/30 hover:bg-primary/[0.05] dark:hover:bg-primary/[0.03]"
              >
                <div className="text-sm text-primary/80">
                  {highlight.timeAgo} ago
                </div>
                <h3 className="mt-2 text-base font-light sm:text-lg">
                  {highlight.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const milestones = [
  {
    year: 2021,
    title: "ABYSS ONLINE",
    achievements: [
      "We have integrated many cutting edge research projects into a medium of entertainment: www.abyssonline.com",
    ],
  },
  {
    year: 2020,
    title: "DIGITAL TWINS EXPERIMENTS",
    achievements: [
      "We are developing digital worlds using advances in Unreal Engine 5.",
    ],
  },
  {
    year: 2019,
    title: "FULLY AUTOMATED MANUFACTURING LINE",
    achievements: [
      "Partnership Clear Forward",
      "Contract with VersAbility for mass production in ISO Certified clean room",
    ],
  },
  {
    year: 2018,
    title: "PUBLICATION ON HIGH VOLUME MANUFACTURING TECHNOLOGY",
    achievements: [
      "Department of Veterans Affairs Contract",
      "Recognition by National Institute of Standards & Technology",
      "Begin mass production of clear aligners for the dental industry",
    ],
  },
  {
    year: 2017,
    title: "PATENT GRANTED",
    achievements: ["Patent for production of 3D objects by stereolithography"],
  },
  {
    year: 2016,
    title: "PRODUCT MATURITY",
    achievements: ["CES 2016", "Artificial Lung Project", "Venostent Project"],
  },
  {
    year: 2015,
    title: "MC PRINTER LINE UNVEILED",
    achievements: ["CES 2015"],
  },
  {
    year: 2014,
    title: "LAUNCH ULTRA PRECISION 3D PRINTER",
    achievements: ["Patent pending, CES"],
  },
  {
    year: 2013,
    title: "PATENTS SUBMITTED",
    achievements: [],
  },
  {
    year: 2012,
    title: "OWL FOUNDED",
    achievements: [],
  },
];

const mediaHighlights = [
  {
    title:
      "Researchers strive to make 3D-printed artificial lung to help Vets with respiratory disease",
    timeAgo: "6 years",
  },
  {
    title: "3D micro-mirror lithography for mass production",
    timeAgo: "7 years",
  },
  {
    title: "Old World Labs MC2",
    timeAgo: "9 years",
  },
  {
    title:
      "Bye, Bye Baubles: New 3D Printers Could Build Implants, Electronics",
    timeAgo: "10 years",
  },
];

const aboutStats = [
  {
    value: "2012",
    label: "Founded",
  },
  {
    value: "5µm",
    label: "Feature Size",
  },
  {
    value: "10+",
    label: "Patents",
  },
];
