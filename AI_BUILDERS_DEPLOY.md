# AI Builders 部署指南

## 快速部署

项目已经准备好部署到 `ai-builders.space` 平台。

### 前置要求

1. **GitHub 仓库** - 代码必须推送到 GitHub
2. **AI_BUILDER_TOKEN** - 部署 API 的认证 token

### 部署步骤

#### 1. 推送代码到 GitHub

如果还没有 GitHub 仓库，请先创建：

```bash
# 在 GitHub 上创建新仓库（通过网页或 GitHub CLI）
# 然后添加远程仓库并推送
git remote add origin https://github.com/YOUR_USERNAME/kebiaodaibiao-personal-site.git
git branch -M main
git push -u origin main
```

#### 2. 设置 AI_BUILDER_TOKEN

创建 `.env` 文件（已添加到 .gitignore）：

```bash
echo "AI_BUILDER_TOKEN=your_token_here" > .env
```

或者设置环境变量：

```bash
export AI_BUILDER_TOKEN=your_token_here
```

#### 3. 使用部署脚本部署

```bash
node deploy-to-ai-builders.js \
  https://github.com/YOUR_USERNAME/kebiaodaibiao-personal-site \
  kebiaodaibiao-personal-site \
  main
```

#### 4. 或者直接使用 curl/API

```bash
curl -X POST https://www.ai-builders.com/resources/students-backend/v1/deployments \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $AI_BUILDER_TOKEN" \
  -d '{
    "repo_url": "https://github.com/YOUR_USERNAME/kebiaodaibiao-personal-site",
    "service_name": "kebiaodaibiao-personal-site",
    "branch": "main"
  }'
```

### 部署参数说明

- **repo_url**: GitHub 仓库的完整 URL（必须是公开仓库）
- **service_name**: 服务名称，将作为子域名（3-32 个字符，只能是小写字母、数字和连字符）
  - 示例：`kebiaodaibiao-personal-site`
  - 部署后的 URL：`https://kebiaodaibiao-personal-site.ai-builders.space`
- **branch**: Git 分支名称（通常是 `main` 或 `master`）

### 检查部署状态

```bash
curl -H "Authorization: Bearer $AI_BUILDER_TOKEN" \
  https://www.ai-builders.com/resources/students-backend/v1/deployments/kebiaodaibiao-personal-site
```

### 注意事项

1. **部署时间**: 通常需要 5-10 分钟
2. **资源限制**: 256 MB RAM（nano 容器）
3. **免费期限**: 12 个月免费托管
4. **服务限制**: 每个用户有最大服务数量限制（默认 2 个）

### 项目已准备就绪

✅ Dockerfile - 已创建，使用多阶段构建
✅ Express 服务器 - 已创建，提供静态文件服务
✅ PORT 环境变量 - 服务器已配置读取 PORT
✅ 构建测试 - 已通过测试

### 需要帮助？

如果部署遇到问题，请检查：
1. GitHub 仓库是否为公开仓库
2. 代码是否已推送到指定分支
3. Dockerfile 是否正确
4. AI_BUILDER_TOKEN 是否正确设置

