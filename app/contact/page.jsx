import Enquire from "@/components/Enquire";
import ContactInfographics from "@/components/ContactInfographics";
import { contact } from "@/lib/content";

export const metadata = {
  title: "Contact — IST 1947",
  description: "Register your interest, insured transit ecosystem, and 2-year digital warranty concierge.",
};

export default function ContactPage() {
  const cards = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Follow", items: contact.socials },
    { label: "Atelier", value: "India · Est. 1947" },
  ];

  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-chalk">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(44,61,143,0.10),transparent_60%)]" />

        <div className="relative mx-auto grid max-w-edge items-center gap-12 px-6 pb-20 pt-40 sm:px-10 sm:pt-48 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:pl-16">
          {/* left — text with room */}
          <div>
            <p className="eyebrow text-accent">Get in Touch</p>
            <h1 className="display mt-5 text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
              Let's talk <span className="display-italic text-accent">time</span>
            </h1>
            <p className="mt-7 max-w-md font-sans text-base leading-relaxed text-graphite">
              {contact.intro} Register your interest and our concierge team will reach out the moment
              your numbered collection launches.
            </p>
            <a
              href="#enquire"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-white transition-transform hover:scale-[1.04]"
            >
              Register interest <span>→</span>
            </a>
          </div>

          {/* right — contact cards */}
          <div className="grid gap-4">
            {cards.map((c) => (
              <div
                key={c.label}
                className="floaty elev rounded-2xl border border-black/10 bg-black/[0.03] p-6 backdrop-blur-sm"
              >
                <p className="eyebrow text-slate">{c.label}</p>
                {c.value && (
                  <p className="mt-3 text-lg text-chalk">
                    {c.href ? (
                      <a href={c.href} className="hover:text-accent">
                        {c.value}
                      </a>
                    ) : (
                      c.value
                    )}
                  </p>
                )}
                {c.items && (
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                    {c.items.map((s) => (
                      <a key={s.label} href={s.href} className="text-lg text-chalk hover:text-accent">
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactInfographics />

      <Enquire />
    </main>
  );
}
