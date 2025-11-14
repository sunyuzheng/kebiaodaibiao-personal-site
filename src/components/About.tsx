const About = () => {
  const skills = [
    '前端开发',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'AI/ML',
  ];

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            关于我
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-full h-64 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white text-6xl font-bold">
                课
              </div>
            </div>
            
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                我是课代表立正，一名热爱技术和学习的开发者。我喜欢探索新技术，
                分享知识，并通过代码创造价值。
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                在我的学习和工作中，我专注于前端开发、全栈应用和人工智能领域。
                我相信持续学习和实践是成长的关键。
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">技能</h3>
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

