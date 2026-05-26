import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import TechIcon from '@/components/ui/TechIcon';

type Tech = { name: string; icon: string; color: string };

const capabilities: {
  title: string;
  body: string;
  highlight: string;
  tools: Tech[];
}[] = [
    {
      title: 'AI Integrations & Business Process Automation',
      body: 'We wire AI into your existing systems through real-time, event-driven pipelines. Our engineers work across message queues, workflow orchestration, and serverless architectures to keep data flowing cleanly.',
      highlight: 'Automate end-to-end workflows and remove repetitive manual tasks — so your team focuses on the work that matters.',
      tools: [
        { name: 'Apache Kafka', icon: 'apachekafka', color: '231F20' },
        { name: 'n8n', icon: 'n8n', color: 'EA4B71' },
        { name: 'Zapier', icon: 'zapier', color: 'FF4F00' },
        { name: 'AWS', icon: 'amazonwebservices', color: 'FF9900' },
        { name: 'Celery', icon: 'celery', color: '37814A' },
      ],
    },
    {
      title: 'Custom AI Application & Service Development',
      body: 'We design and ship scalable, secure AI-driven applications tailored to your business. Our stack spans containerised deployments, Python (FastAPI), PyTorch, Node, React, and cloud-native infrastructure.',
      highlight: 'Get custom AI products built and shipped faster, with production-grade quality from day one.',
      tools: [
        { name: 'FastAPI', icon: 'fastapi', color: '009688' },
        { name: 'PyTorch', icon: 'pytorch', color: 'EE4C2C' },
        { name: 'Node.js', icon: 'nodedotjs', color: '5FA04E' },
        { name: 'React', icon: 'react', color: '61DAFB' },
        { name: 'Docker', icon: 'docker', color: '2496ED' },
        { name: 'Kubernetes', icon: 'kubernetes', color: '326CE5' },
      ],
    },
    {
      title: 'Generative AI & LLM Integration',
      body: 'We integrate cutting-edge generative AI and LLMs — OpenAI, Claude, and open models — into your workflows to automate content creation, data extraction, and knowledge management.',
      highlight: 'Our expertise includes fine-tuning, prompt engineering, and Retrieval-Augmented Generation (RAG).',
      tools: [
        { name: 'OpenAI GPT', icon: 'openai', color: '412991' },
        { name: 'Anthropic Claude', icon: 'anthropic', color: 'D97757' },
        { name: 'LangChain', icon: 'langchain', color: '1C3C3C' },
        { name: 'Hugging Face', icon: 'huggingface', color: 'FFD21E' },
        { name: 'Meta Llama', icon: 'meta', color: '0467DF' },
      ],
    },
    {
      title: 'Voice & Multimodal Interfaces',
      body: 'We build natural voice and multimodal experiences using speech recognition (Whisper), text-to-speech, and computer vision — fully integrated into your existing platforms.',
      highlight: 'Boost engagement with seamless, intuitive interactions across voice, text, and visual channels.',
      tools: [
        { name: 'Whisper', icon: 'openai', color: '412991' },
        { name: 'OpenCV', icon: 'opencv', color: '5C3EE8' },
        { name: 'TensorFlow', icon: 'tensorflow', color: 'FF6F00' },
        { name: 'PyTorch', icon: 'pytorch', color: 'EE4C2C' },
      ],
    },
  ];

export default function AISolutions() {
  return (
    <section id="ai-solutions" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Sticky left rail */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <AnimatedSection>
                <SectionHeader
                  overline="AI Solutions"
                  headline="AI capabilities that move your business forward"
                  subtitle="From intelligent automation to generative AI and voice — built on a production-grade stack."
                />
                <a
                  href="#contact"
                  className="btn-primary mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white"
                >
                  Start a Project
                </a>
              </AnimatedSection>
            </div>
          </div>

          {/* Scrolling right column */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {capabilities.map((c, i) => (
                <AnimatedSection key={c.title} delay={(i % 2) * 0.05}>
                  <div className="border-t border-border py-7 first:border-t-0 first:pt-0 mb-6">
                    <div className="flex items-start gap-3.5">
                      <span
                        aria-hidden
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent opacity-40"
                      />
                      <div>
                        <h3 className="mb-2 text-lg font-bold leading-snug text-text-primary lg:text-xl">
                          {c.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-text-secondary">{c.body}</p>
                        {/* <p className="mt-2 text-sm font-semibold text-text-primary">{c.highlight}</p> */}

                        {/* Tech stack with real icons */}
                        {/* <ul className="mt-4 flex flex-wrap gap-1.5">
                          {c.tools.map((tool) => (
                            <li
                              key={tool.name}
                              className="inline-flex items-center gap-1.5 rounded-full border  border-border bg-white px-2 py-1 text-[10px] font-medium text-text-secondary opacity-90"
                            >
                              <TechIcon name={tool.name} icon={tool.icon} color={tool.color} />
                              {tool.name}
                            </li>
                          ))}
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
