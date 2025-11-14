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
      title: 'Superlinear',
      description: 'Superlinear 是一个 AI 原生的学习与工作平台，旨在通过深度集成大语言模型，重构知识管理、团队协作和个人创造力的流程。我们相信，未来的工具应当是智能的、主动的、与人无缝协作的。',
      tags: ['AI-Native', 'SaaS', 'LLM', '创业'],
      demoUrl: 'https://superlinear.academy',
    },
    {
      id: 2,
      title: 'Chuanhu-Hi-Tutor (川虎Hi-Tutor)',
      description: '一个广受欢迎的开源项目，为大型语言模型（LLM）提供了易于使用的 Web 用户界面。基于 Gradio 构建，让更多人能够轻松使用和探索 LLM 的强大能力。',
      tags: ['开源', 'LLM', 'Gradio', 'Python'],
      githubUrl: 'https://github.com/sunyuzheng/Chuanhu-Hi-Tutor',
    },
    {
      id: 3,
      title: 'awesome-aigc-pop-ai',
      description: '一个 AIGC 资源聚合列表项目，收集和整理 AI 生成内容相关的优质资源和工具，帮助开发者快速找到所需的技术和工具。',
      tags: ['AIGC', '资源聚合', '开源'],
      githubUrl: 'https://github.com/sunyuzheng/awesome-aigc-pop-ai',
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

