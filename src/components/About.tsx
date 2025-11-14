const About = () => {
  const skills = [
    'A/B 测试',
    '实验设计',
    '增长科学',
    '因果推断',
    '计量经济学',
    '大语言模型 (LLM) 应用',
    'AI 产品开发',
    'AI Agent',
    '技术写作',
    '视频制作',
    '社区运营',
    '在线课程设计',
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
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=YuzhengSun&backgroundColor=b6e3f4,c0aede,d1d4f9"
                alt="孙煜征"
                className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Yuzheng+Sun&size=400&background=3b82f6&color=fff&bold=true';
                }}
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">孙煜征 (Yuzheng Sun)</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                我是一名充满热情的数据科学家和教育者，致力于让数据和 AI 的力量变得触手可及。我坚信"数据科学是一门手艺 (Data science is a craft)"，最宝贵的知识来自于亲手实践。
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                我的职业生涯始于<strong>康奈尔大学</strong>，在那里我获得了经济学博士学位。随后，我先后在<strong>亚马逊 (Amazon)</strong> 担任经济学家，在<strong>Meta (前 Facebook)</strong> 担任数据科学家，在<strong>腾讯游戏 (Tencent Games)</strong> 担任增长策略与数据科学副总监，深入探索了数据在不同行业的应用。
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                最近，我在 A/B 测试领域的创业公司 <strong>Statsig</strong> 担任数据科学家和技术布道师 (Evangelist)。Statsig 致力于将顶级科技公司的实验分析能力产品化，服务于 OpenAI、Notion 等客户，并最终被 OpenAI 收购。
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                工作之外，我以"<strong>课代表立正</strong>"的身份，在全网拥有超过30万名关注者，分享关于数据科学、AI 应用和职业成长的见解。同时，我创立了 <strong>Superlinear Academy (超线性学院)</strong>，旨在通过体系化的课程和社区，帮助更多人从 AI 的使用者 (Users) 进阶为创造者 (Builders)。
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

