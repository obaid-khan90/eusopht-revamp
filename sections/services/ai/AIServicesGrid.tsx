import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  MapIcon,
  BeakerIcon,
  CpuChipIcon,
  SparklesIcon,
  CubeTransparentIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: MapIcon,
    title: 'AI Strategy & Discovery',
    body: 'We assess your data, workflows, and goals to identify the highest-impact AI opportunities and a clear roadmap to deliver them.',
  },
  {
    icon: BeakerIcon,
    title: 'MVP & Proof of Concept',
    body: 'Validate an AI idea fast with a focused prototype — measurable, demoable, and built to evolve into production.',
  },
  {
    icon: CpuChipIcon,
    title: 'Custom AI Application Development',
    body: 'Full-stack AI products tailored to your domain — secure, scalable, and engineered for real-world usage.',
  },
  {
    icon: SparklesIcon,
    title: 'Generative AI Development',
    body: 'LLM-powered features — chat, content, summarisation, RAG — using OpenAI, Claude, and open models.',
  },
  {
    icon: CubeTransparentIcon,
    title: 'AI Model Development & Optimisation',
    body: 'Custom model training, fine-tuning, and optimisation for accuracy, latency, and cost at scale.',
  },
  {
    icon: PuzzlePieceIcon,
    title: 'AI Integration, Support & Scaling',
    body: 'We embed AI into your existing stack and keep it reliable with monitoring, support, and continuous improvement.',
  },
];

export default function AIServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-14">
          <SectionHeader
            overline="What We Offer"
            headline="AI Development Services"
            subtitle="End-to-end AI capabilities — from first strategy session to a scaled, production-grade system."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/8 hover:border-accent/30">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light">
                  <s.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-text-primary">{s.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{s.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
