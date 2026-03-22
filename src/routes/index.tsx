import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const products = [
  {
    name: "Hyperborea",
    tagline: "Unlock your exercise equipment",
    description:
      "Lets any fitness app talk directly to your exercise equipment over Bluetooth and Wi-Fi — no extra hardware required.",
    href: "https://hyperborea.nettarion.com",
    cta: "Learn more",
    accentClass: "text-indigo-400",
    borderHoverClass: "hover:border-indigo-500/40",
    bgHoverClass: "hover:bg-indigo-500/5",
    dotClass: "bg-indigo-400",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
  },
  {
    name: "Haramaxitos",
    tagline: "Lawn management software",
    description:
      "Smart lawn care management — track schedules, monitor conditions, and keep your property looking its best.",
    href: undefined,
    cta: "Coming soon",
    accentClass: "text-emerald-400",
    borderHoverClass: "hover:border-emerald-500/40",
    bgHoverClass: "hover:bg-emerald-500/5",
    dotClass: "bg-emerald-400",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    ),
  },
  {
    name: "Aether",
    tagline: "Open-source air purifier",
    description:
      "An open-source DIY air purifier — monitor air quality in real time and breathe cleaner air at home.",
    href: "https://github.com/ball2jh/airpurifier",
    cta: "View on GitHub",
    accentClass: "text-sky-400",
    borderHoverClass: "hover:border-sky-500/40",
    bgHoverClass: "hover:bg-sky-500/5",
    dotClass: "bg-sky-400",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <p className="text-xs font-600 uppercase tracking-[0.2em] text-text-muted mb-4">
            Software
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tight leading-[1.08] max-w-3xl">
            Building tools
            <br />
            that just work.
          </h1>
          <p className="mt-4 text-base md:text-lg text-text-muted max-w-xl leading-relaxed">
            Nettarion builds software products — from fitness equipment
            integrations to lawn care management.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/50" />

      {/* Products */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <p className="text-xs font-600 uppercase tracking-[0.2em] text-text-muted mb-8">
            Products
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/50">
            {products.map((product) => {
              const inner = (
                <div
                  className={`group bg-bg p-6 md:p-8 flex flex-col justify-between min-h-[240px] transition-all duration-300 ${product.bgHoverClass} ${product.borderHoverClass} cursor-${product.href ? "pointer" : "default"}`}
                >
                  {/* Top */}
                  <div>
                    {/* Icon + Name row */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className={product.accentClass}>{product.icon}</div>
                      <h3 className="text-lg font-700 tracking-tight">
                        {product.name}
                      </h3>
                    </div>

                    {/* Tagline */}
                    <p className="text-sm font-500 text-text-muted mb-4">
                      {product.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-text-muted/70 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-5">
                    <span
                      className={`inline-flex items-center gap-2 text-sm font-600 ${product.accentClass} transition-all duration-200`}
                    >
                      {product.cta}
                      {product.href && (
                        <svg
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                </div>
              );

              if (product.href) {
                return (
                  <a
                    key={product.name}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <div key={product.name}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
