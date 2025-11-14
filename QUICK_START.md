# 快速开始指南

## 🎉 项目已创建完成！

你的个人网站项目已经准备好了。以下是快速上手的步骤：

## 📦 项目结构

```
kebiaodaibiao-personal-site/
├── src/
│   ├── components/      # React 组件
│   │   ├── Navbar.tsx   # 导航栏
│   │   ├── Hero.tsx     # 首页 Hero 区域
│   │   ├── About.tsx    # 关于我
│   │   ├── Projects.tsx # 作品集
│   │   ├── Contact.tsx  # 联系方式
│   │   └── Footer.tsx   # 页脚
│   ├── pages/
│   │   └── Home.tsx     # 首页
│   ├── App.tsx          # 主应用组件
│   ├── main.tsx         # 入口文件
│   └── index.css        # 全局样式
├── public/              # 静态资源
├── package.json         # 项目配置
└── vite.config.ts       # Vite 配置
```

## 🚀 本地开发

```bash
# 进入项目目录
cd kebiaodaibiao-personal-site

# 启动开发服务器
npm run dev

# 浏览器访问 http://localhost:3000
```

## 📝 自定义内容

### 修改个人信息

1. **Hero 区域** (`src/components/Hero.tsx`)
   - 修改标题和描述
   - 更新社交媒体链接

2. **关于我** (`src/components/About.tsx`)
   - 修改个人介绍
   - 更新技能列表

3. **作品集** (`src/components/Projects.tsx`)
   - 添加你的项目
   - 更新项目链接

4. **联系方式** (`src/components/Contact.tsx`)
   - 更新邮箱和社交媒体链接

## 🌐 部署到 GitHub

### 方法 1: 使用部署脚本（推荐）

```bash
./deploy.sh
```

脚本会引导你完成 GitHub 仓库设置和代码推送。

### 方法 2: 手动部署

1. **在 GitHub 创建仓库**
   - 访问 https://github.com/new
   - 仓库名：`kebiaodaibiao-personal-site`
   - 选择 Public
   - 点击 "Create repository"

2. **推送代码**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/kebiaodaibiao-personal-site.git
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库 Settings > Pages
   - Source 选择 "GitHub Actions"
   - 保存后自动部署

## 🎨 部署到 Vercel（最简单）

1. 访问 https://vercel.com
2. 使用 GitHub 登录
3. 点击 "Add New Project"
4. 选择你的仓库
5. 点击 "Deploy"
6. 完成！网站会自动部署

## ✨ 功能特性

- ✅ 响应式设计，支持移动端
- ✅ 流畅的滚动动画
- ✅ 现代化的 UI 设计
- ✅ SEO 友好
- ✅ 快速加载

## 📚 更多信息

查看 `DEPLOYMENT.md` 了解详细的部署选项和自定义域名配置。

## 🛠️ 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router

## 📞 需要帮助？

如有问题，请查看：
- [Vite 文档](https://vitejs.dev)
- [React 文档](https://react.dev)
- [Tailwind CSS 文档](https://tailwindcss.com)

