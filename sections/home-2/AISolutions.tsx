import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  NodeDiagramMock,
  ChatMock,
  PromptMock,
  VoiceMock,
} from '@/components/ui/AIMocks';
import {
  PuzzlePieceIcon,
  CommandLineIcon,
  SparklesIcon,
  MicrophoneIcon,
} from '@heroicons/react/24/outline';

const tiles = [
  {
    icon: PuzzlePieceIcon,
    title: 'Your tools, finally talking to each other',
    body: 'Connect your CRM, helpdesk, ERP, and ops tools into a single automated flow. No more copy-pasting between systems — AI handles the handoffs.',
    Mock: NodeDiagramMock,
    className: 'lg:col-span-6',
    scale: 0.6,
  },
  {
    icon: SparklesIcon,
    title: 'The intelligence layer your product is missing',
    body: 'We embed GPT, Claude, and open models directly into your product — search, generation, summarisation, Q&A — tuned to your data and brand voice.',
    Mock: PromptMock,
    className: 'lg:col-span-6',
    scale: 0.82,
  },
  {
    icon: MicrophoneIcon,
    title: 'Let your users speak, tap, or show',
    body: 'Voice assistants, image understanding, and multimodal flows that meet users where they are — on any device, in any format.',
    Mock: VoiceMock,
    className: 'lg:col-span-6',
    scale: 0.82,
  },
  {
    icon: CommandLineIcon,
    title: 'A purpose-built AI product, not a plugged-in API',
    body: 'When off-the-shelf AI isn\'t enough, we build it from the ground up — scalable, secure, and owned entirely by you.',
    Mock: ChatMock,
    className: 'lg:col-span-6',
    scale: 0.58,
  },
];

export default function AISolutions() {
  return (
    <section id="ai-solutions" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-16">
          <SectionHeader
            overline="AI Solutions"
            headline="AI that works the way your business does"
            subtitle="Not generic AI tools — capabilities designed around your workflows, your data, and your customers."
            centered
          />
        </AnimatedSection>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {tiles.map((t, i) => (
            <AnimatedSection
              key={t.title}
              delay={(i % 2) * 0.08}
              className={`${t.className} h-full`}
            >
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/8">
                {/* Mock — smaller, fixed height, clipped to the box */}
                <div className="relative h-[180px] shrink-0 overflow-hidden border-b border-border bg-bg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full origin-center" style={{ transform: `scale(${t.scale})` }}>
                      <t.Mock />
                    </div>
                  </div>
                </div>
                {/* Copy */}
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light">
                    <t.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold leading-tight text-text-primary">
                    {t.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary lg:text-base">{t.body}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
