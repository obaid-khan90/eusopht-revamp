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

const rows = [
  {
    icon: PuzzlePieceIcon,
    title: 'AI Integrations & Business Process Automation',
    body: 'We wire AI into your existing systems through real-time, event-driven pipelines. Our engineers work across message queues, workflow orchestration, and serverless architectures to keep data flowing cleanly.',
    highlight: 'Automate end-to-end workflows and remove repetitive manual tasks — so your team focuses on the work that matters.',
    Mock: NodeDiagramMock,
    reverse: false,
  },
  {
    icon: CommandLineIcon,
    title: 'Custom AI Application & Service Development',
    body: 'We design and ship scalable, secure AI-driven applications tailored to your business. Our stack spans containerised deployments, Python (FastAPI), PyTorch, Node, React, and cloud-native infrastructure.',
    highlight: 'Get custom AI products built and shipped faster, with production-grade quality from day one.',
    Mock: ChatMock,
    reverse: true,
  },
  {
    icon: SparklesIcon,
    title: 'Generative AI & LLM Integration',
    body: 'We integrate cutting-edge generative AI and LLMs — OpenAI, Claude, and open models — into your workflows to automate content creation, data extraction, and knowledge management.',
    highlight: 'Our expertise includes fine-tuning, prompt engineering, and Retrieval-Augmented Generation (RAG).',
    Mock: PromptMock,
    reverse: false,
  },
  {
    icon: MicrophoneIcon,
    title: 'Voice & Multimodal Interfaces',
    body: 'We build natural voice and multimodal experiences using speech recognition (Whisper), text-to-speech, and computer vision — fully integrated into your existing platforms.',
    highlight: 'Boost engagement with seamless, intuitive interactions across voice, text, and visual channels.',
    Mock: VoiceMock,
    reverse: true,
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

        {/* Simple scrollable feature rows */}
        <div className="flex flex-col gap-6">
          {rows.map((row, i) => (
            <AnimatedSection key={row.title} delay={(i % 2) * 0.05}>
              <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-border bg-white p-6 shadow-sm lg:grid-cols-2 lg:gap-12 lg:p-10">
                {/* Mock visual */}
                <div
                  className={`relative min-h-[260px] overflow-hidden rounded-2xl border border-border bg-bg ${
                    row.reverse ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <row.Mock />
                </div>

                {/* Copy */}
                <div className={row.reverse ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light">
                    <row.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-text-primary lg:text-2xl">{row.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{row.body}</p>
                  <p className="mt-4 text-sm font-semibold text-text-primary">{row.highlight}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
