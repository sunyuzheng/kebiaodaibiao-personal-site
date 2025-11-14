# 部署指南

## 上传到 GitHub

### 1. 在 GitHub 上创建新仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库名称建议：`kebiaodaibiao-personal-site` 或 `personal-website`
4. 选择 Public（公开）或 Private（私有）
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

### 2. 将本地代码推送到 GitHub

在项目目录下运行以下命令（将 `YOUR_USERNAME` 替换为你的 GitHub 用户名）：

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/kebiaodaibiao-personal-site.git

# 推送代码到 GitHub
git branch -M main
git push -u origin main
```

## 部署选项

### 选项 1: Vercel 部署（推荐）

Vercel 是最简单的部署方式，支持自动部署。

1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择你的 GitHub 仓库 `kebiaodaibiao-personal-site`
5. 配置：
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. 点击 "Deploy"
7. 部署完成后，你会获得一个类似 `https://your-project.vercel.app` 的 URL

### 选项 2: GitHub Pages 部署

#### 方法 A: 使用 GitHub Actions（推荐）

1. 在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. 在 GitHub 仓库设置中启用 Pages：
   - 进入 Settings > Pages
   - Source 选择 "GitHub Actions"
   - 保存后，每次推送到 main 分支会自动部署

#### 方法 B: 使用 gh-pages 包

1. 安装 gh-pages：
```bash
npm install --save-dev gh-pages
```

2. 在 `package.json` 中添加脚本：
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. 运行部署：
```bash
npm run deploy
```

4. 在 GitHub 仓库设置中启用 Pages：
   - 进入 Settings > Pages
   - Source 选择 `gh-pages` 分支
   - 保存后访问 `https://YOUR_USERNAME.github.io/kebiaodaibiao-personal-site`

### 选项 3: Netlify 部署

1. 访问 [Netlify](https://netlify.com)
2. 使用 GitHub 账号登录
3. 点击 "Add new site" > "Import an existing project"
4. 选择你的 GitHub 仓库
5. 配置：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 点击 "Deploy site"

## 自定义域名（可选）

### Vercel
1. 在项目设置中找到 "Domains"
2. 添加你的域名
3. 按照提示配置 DNS 记录

### GitHub Pages
1. 在仓库 Settings > Pages 中添加自定义域名
2. 在域名 DNS 设置中添加 CNAME 记录指向 GitHub Pages

## 更新网站

每次更新代码后：

1. 提交更改：
```bash
git add .
git commit -m "更新内容"
git push
```

2. 如果使用 Vercel 或 Netlify，会自动重新部署
3. 如果使用 GitHub Pages，需要重新运行部署命令或等待 GitHub Actions 自动部署

