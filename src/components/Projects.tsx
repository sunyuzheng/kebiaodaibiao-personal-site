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
      title: 'AI Builder 项目',
      description: '使用 AI 技术构建的现代化 Web 应用，集成了多种 AI 工具和功能。',
      tags: ['React', 'TypeScript', 'AI'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
    },
    {
      id: 2,
      title: '个人博客系统',
      description: '基于 React 和 Node.js 构建的个人博客系统，支持 Markdown 编辑和评论功能。',
      tags: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: '数据分析工具',
      description: '使用 Python 和机器学习技术开发的数据分析和可视化工具。',
      tags: ['Python', 'ML', 'Data Visualization'],
      githubUrl: 'https://github.com',
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

