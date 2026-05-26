import type { FaqItem } from '@/sections/home/faqData';

export const aiFaqs: FaqItem[] = [
  {
    q: 'What kinds of AI solutions does Eusopht build?',
    a: 'We build custom AI applications, AI agents and chatbots, generative AI and LLM integrations (OpenAI, Claude, open models), computer vision systems, voice and multimodal interfaces, and AI-powered workflow automation — tailored to your specific business problem.',
  },
  {
    q: 'Do I need a large dataset to start an AI project?',
    a: 'Not always. Many high-value solutions use pre-trained models, retrieval-augmented generation (RAG), or fine-tuning on small, focused datasets. During discovery we assess what data you have and recommend the most effective approach.',
  },
  {
    q: 'How long does a typical AI project take?',
    a: 'A proof of concept can take 3–6 weeks. A production-grade custom application typically runs 2–4 months depending on scope and integrations. We work in short cycles so you see progress every week.',
  },
  {
    q: 'Which AI models and platforms do you work with?',
    a: 'We are vendor-neutral. We work across OpenAI GPT, Anthropic Claude, Llama, Whisper, Hugging Face models, and can deploy on AWS, Azure, GCP, or on-premise — choosing the right fit for your accuracy, latency, cost, and privacy needs.',
  },
  {
    q: 'How do you handle data privacy and security?',
    a: 'Security is built in from the start. We support private deployments, data isolation, and compliance-aware architectures so sensitive data never leaves your control unless you choose otherwise.',
  },
  {
    q: 'Do you provide support after the AI is deployed?',
    a: 'Yes. We offer ongoing monitoring, optimisation, and support to keep your AI accurate and reliable as data and usage evolve. AI systems need maintenance, and we stay engaged for it.',
  },
];
