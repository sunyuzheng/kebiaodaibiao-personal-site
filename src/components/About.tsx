const About = () => {
  const skills = [
    'AIGC',
    'LLM 应用开发',
    'AI 原生应用架构',
    'Prompt Engineering',
    'Python',
    'Go',
    'Node.js',
    '分布式系统',
    'Docker',
    'Kubernetes',
    '开源社区运营',
    '创业',
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
                alt="孙煜征"
                className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Sun+Yuzheng&size=400&background=3b82f6&color=fff&bold=true';
                }}
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">孙煜征 (Sun Yuzheng)</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                你好，我是孙煜征。我是一名创业者、软件工程师，也是一位开源精神的坚定信奉者。目前，我作为 <strong>Superlinear</strong> 的联合创始人，正与团队一起探索 AI 原生（AI-native）技术的边界，致力于通过构建新一代的学习与工作平台，彻底重塑我们与知识及信息交互的方式。
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                我的职业生涯始于对构建高效、可靠软件系统的热情。在<strong>微软 (Microsoft)</strong> 和<strong>字节跳动 (ByteDance)</strong> 的工作经历，让我积累了大规模后端系统研发与软件工程的坚实经验。这段旅程不仅磨练了我的技术能力，更让我深刻洞察到前沿技术如何驱动产品创新，并最终影响数亿用户。
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                随着 AIGC 和大语言模型（LLM）浪潮的到来，我敏锐地意识到一场新的技术革命正在发生。为了让更多人能够轻松使用和探索 LLM 的强大能力，我创建了开源项目 <strong>Chuanhu-Hi-Tutor（川虎Hi-Tutor）</strong>。这个项目获得了社区的广泛关注与喜爱，也让我更加坚信开源协作是推动技术普惠的强大动力。
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                我毕业于<strong>南加州大学 (USC)</strong>，获得计算机科学硕士学位，并拥有<strong>同济大学</strong>的软件工程学士学位。无论是作为一名创业者还是开发者，我的核心目标始终未变：<strong>用代码构建工具，用工具放大创造力。</strong>
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

