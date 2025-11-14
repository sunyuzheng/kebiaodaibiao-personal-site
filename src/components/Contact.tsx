import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            联系我
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            如果你有任何问题或想要合作，欢迎通过以下方式联系我
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="mailto:contact@example.com"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-all group"
            >
              <Mail size={32} className="mb-3 text-primary group-hover:text-white" />
              <span className="text-sm font-medium">邮箱</span>
            </a>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-900 hover:text-white transition-all group"
            >
              <Github size={32} className="mb-3 text-gray-900 group-hover:text-white" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-blue-600 hover:text-white transition-all group"
            >
              <Linkedin size={32} className="mb-3 text-blue-600 group-hover:text-white" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-blue-400 hover:text-white transition-all group"
            >
              <MessageCircle size={32} className="mb-3 text-blue-400 group-hover:text-white" />
              <span className="text-sm font-medium">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

