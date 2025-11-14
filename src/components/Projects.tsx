import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: '个人网站',
      description: '使用 React + TypeScript + Vite 构建的现代化个人网站，展示个人作品和技能。',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      githubUrl: 'https://github.com/sunyuzheng/kebiaodaibiao-personal-site',
      demoUrl: 'https://kebiaodaibiao-personal-site.ai-builders.space',
    },
    {
      id: 2,
      title: 'AI 驱动的文本摘要工具',
      description: '基于 Transformer 模型的开源文本摘要应用，使用 PyTorch 和 FastAPI 构建。',
      tags: ['Python', 'PyTorch', 'FastAPI', 'NLP'],
      githubUrl: 'https://github.com/sunyuzheng',
    },
    {
      id: 3,
      title: '全栈开发辅助平台',
      description: '面向开发者的 AI 代码辅助平台，集成大语言模型实现智能代码补全和错误诊断。',
      tags: ['React', 'Node.js', 'GraphQL', 'AI'],
      githubUrl: 'https://github.com/sunyuzheng',
    },
  ];

  return (
    <section id="projects" className="section-spacing bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          我的作品
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">代码</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">演示</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

