const About = () => {
  const skills = [
    'Python',
    'React',
    'TypeScript',
    'Node.js',
    'PyTorch',
    'TensorFlow',
    'FastAPI',
    'Docker',
    'Kubernetes',
    'PostgreSQL',
    'MongoDB',
    'AWS',
  ];

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            关于我
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=SunYuzheng&backgroundColor=b6e3f4,c0aede,d1d4f9"
                alt="课代表立正"
                className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  // 如果图片加载失败，使用占位符
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Sun+Yuzheng&size=400&background=3b82f6&color=fff&bold=true';
                }}
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">孙宇正 (Sun Yuzheng)</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                您好，我是孙宇正，一名专注于人工智能、机器学习与全栈开发领域的软件工程师。我对利用前沿技术解决复杂问题充满热情，并坚信技术创新是驱动业务增长的核心动力。
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                我热衷于通过开源项目探索和实践新技术，致力于将前沿的AI理论转化为高效、可靠且富有创造力的软件解决方案。在过往的工作中，我专注于将机器学习模型与可扩展的后端架构相结合，构建端到端的智能系统。
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                我热衷于探索技术的边界，并期待在充满挑战的环境中与优秀的团队共同创造价值。
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">核心技能</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

