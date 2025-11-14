const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © {currentYear} 课代表立正. 保留所有权利.
          </p>
          <p className="text-gray-500 text-sm">
            用 ❤️ 和代码构建
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

