export default function ServicesPage() {
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
              OUR SERVICES
            </div>

            <h1 className="text-3xl font-light tracking-tight sm:text-5xl">
              Advanced{" "}
              <span className="bg-gradient-to-r from-primary/80 via-secondary/80 to-accent/80 dark:from-primary dark:via-secondary dark:to-accent bg-clip-text text-transparent">
                Manufacturing Solutions
              </span>
            </h1>

            <div className="relative mt-8 flex flex-col items-center">
              <p className="max-w-[42rem] text-base text-muted-foreground sm:text-lg">
                In collaboration with academic and research institutions, we're
                pushing the boundaries of scientific exploration and
                manufacturing capabilities.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                {services.slice(0, 3).map((service) => (
                  <div
                    key={service.title}
                    className="group relative overflow-hidden rounded-lg border border-primary/10 bg-primary/[0.02] p-8 transition-all duration-300 hover:bg-primary/[0.03]"
                  >
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--primary))_0%,transparent_70%)] opacity-[0.05]" />
                    <div className="relative z-10 space-y-2">
                      <h3 className="text-lg font-light text-primary">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col gap-4">
          <div className="w-fit inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            INDUSTRIES
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight sm:text-3xl">
              Industries We Serve
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg max-w-[42rem]">
              Our bespoke solutions are tailored to meet unique project
              requirements. With a team of seasoned experts, we guarantee
              successful outcomes and advanced technological solutions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group relative overflow-hidden rounded-md border border-primary/10 bg-primary/5 p-6 text-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-primary/10"
              >
                <div className="space-y-3">
                  <h3 className="text-base font-light sm:text-lg">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {industry.description}
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

const services = [
  {
    title: "3D – Printing as a Service",
    description:
      "We offer customised printing solutions tailored to your unique needs, ensuring precision and quality in every print.",
  },
  {
    title: "Industrial-Scale Printers",
    description:
      "Our state-of-the-art industrial printers are designed for high-volume production, delivering unmatched speed and accuracy.",
  },
  {
    title: "Modeling and Simulation",
    description:
      "Utilising Unreal Engine 5, we create immersive 3D environments for precise simulations, enhancing design and testing processes.",
  },
];

const industries = [
  {
    title: "Biotech & Pharmaceuticals",
    description:
      "Our microfluidic device fabrication enables advancements in drug discovery, diagnostics, and personalised medicine.",
  },
  {
    title: "Healthcare & Medical Devices",
    description:
      "We produce intricate components for medical devices, improving patient care and treatment outcomes.",
  },
  {
    title: "Semiconductor Manufacturing",
    description:
      "Our technology is crucial for the production of semiconductor connectors and interconnectors, driving innovation in electronics.",
  },
  {
    title: "Aerospace & Defense",
    description:
      "We support the development of high-precision components for aerospace and defense applications, ensuring reliability and performance.",
  },
  {
    title: "Automotive",
    description:
      "Our solutions contribute to the manufacturing of advanced automotive systems, enhancing safety and efficiency.",
  },
  {
    title: "Research & Development",
    description:
      "We collaborate with academic and research institutions to push the boundaries of scientific exploration.",
  },
];
