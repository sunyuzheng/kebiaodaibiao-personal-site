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
      title: 'Superlinear Academy (超线性学院)',
      description: '我创立的线上教育平台，旨在帮助专业人士掌握 AI 时代的必备技能。旗舰课程《Build with AI》专注于将 AI 大模型与实际工作流结合，从想法到原型，真正动手创造价值。2024年，仅通过 Stripe 处理的课程销售额就超过了35万美元。',
      tags: ['在线教育', 'AI 课程', '社区', '创业'],
      demoUrl: 'https://www.superlinear.academy/ai-builders',
    },
    {
      id: 2,
      title: 'Statsig',
      description: 'A/B 测试领域的创业公司，致力于将顶级科技公司的实验分析能力产品化，服务于 OpenAI、Notion 等客户。我在此担任数据科学家和技术布道师，专注于 A/B 测试、产品实验和数据驱动决策的最佳实践推广。Statsig 后被 OpenAI 收购。',
      tags: ['A/B 测试', '数据科学', '产品实验', '技术布道'],
      demoUrl: 'https://www.statsig.com',
    },
    {
      id: 3,
      title: '课代表立正 - 内容创作',
      description: '以"课代表立正"的身份在全网拥有超过30万名关注者，在 YouTube、Bilibili 等平台分享关于 AI、数据科学、职场成长等话题。内容形式包括深度访谈、技术科普和个人思考，致力于分享实用且有深度的知识。',
      tags: ['内容创作', '数据科学', 'AI 教育', '社区'],
      demoUrl: 'https://www.youtube.com/@kedaibiao',
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

