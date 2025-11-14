import { ArrowDown, Github, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20"
    >
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
            你好，我是
            <span className="text-primary block mt-2">课代表立正</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            分享知识、经验和思考
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            欢迎来到我的个人空间，这里记录着我的学习历程、项目经验和生活感悟
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/sunyuzheng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="mailto:yz@superlinear.academy"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <Mail size={20} />
              联系我
            </a>
            <a
              href="https://www.linkedin.com/in/sunyuzheng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex flex-col items-center text-gray-600 hover:text-primary transition-colors animate-bounce"
          >
            <span className="mb-2">了解更多</span>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

