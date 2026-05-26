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
    title: 'AI Integrations & Business Process Automation',
    body: 'We wire AI into your existing systems through real-time, event-driven pipelines — across message queues, workflow orchestration, and serverless architectures.',
    Mock: NodeDiagramMock,
    // wide tile, mock beside copy
    className: 'lg:col-span-7',
    layout: 'split' as const,
  },
  {
    icon: SparklesIcon,
    title: 'Generative AI & LLM Integration',
    body: 'OpenAI, Claude, and open models integrated into your workflows — with fine-tuning, prompt engineering, and RAG.',
    Mock: PromptMock,
    // tall-ish tile, mock on top
    className: 'lg:col-span-5',
    layout: 'stacked' as const,
  },
  {
    icon: MicrophoneIcon,
    title: 'Voice & Multimodal Interfaces',
    body: 'Natural voice and multimodal experiences using speech recognition, text-to-speech, and computer vision.',
    Mock: VoiceMock,
    className: 'lg:col-span-5',
    layout: 'stacked' as const,
  },
  {
    icon: CommandLineIcon,
    title: 'Custom AI Application & Service Development',
    body: 'Scalable, secure AI-driven applications tailored to your business — containerised, Python (FastAPI), PyTorch, Node, React, and cloud-native.',
    Mock: ChatMock,
    className: 'lg:col-span-7',
    layout: 'split' as const,
  },
];

export default function AISolutions() {
  return (
    <section id="ai-solutions" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="flex flex-col items-center text-center mb-16">
          <SectionHeader
            overline="AI Solutions"
            headline="Comprehensive AI Solutions that Accelerate Your Business"
            subtitle="From intelligent automation to generative AI and voice — we build the AI capabilities that move your business forward."
            centered
          />
        </AnimatedSection>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {tiles.map((t, i) => (
            <AnimatedSection
              key={t.title}
              delay={(i % 2) * 0.08}
              className={t.className}
            >
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/8">
                {t.layout === 'split' ? (
                  <div className="grid h-full grid-cols-1 sm:grid-cols-2">
                    {/* Copy */}
                    <div className="flex flex-col p-7">
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light">
                        <t.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="mb-2 text-lg font-bold leading-snug text-text-primary">
                        {t.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text-secondary">{t.body}</p>
                    </div>
                    {/* Mock */}
                    <div className="relative min-h-[220px] border-t border-border bg-bg sm:border-l sm:border-t-0">
                      <t.Mock />
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full flex-col">
                    {/* Mock */}
                    <div className="relative min-h-[200px] flex-1 border-b border-border bg-bg">
                      <t.Mock />
                    </div>
                    {/* Copy */}
                    <div className="p-7">
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light">
                        <t.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="mb-2 text-lg font-bold leading-snug text-text-primary">
                        {t.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text-secondary">{t.body}</p>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
