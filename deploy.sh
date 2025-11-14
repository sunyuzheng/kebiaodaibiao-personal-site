#!/bin/bash

# 部署脚本 - 上传到 GitHub 并部署

echo "🚀 开始部署流程..."

# 检查是否已设置远程仓库
if ! git remote | grep -q origin; then
    echo "⚠️  未检测到远程仓库，请先设置："
    echo "   git remote add origin https://github.com/YOUR_USERNAME/kebiaodaibiao-personal-site.git"
    echo ""
    read -p "请输入你的 GitHub 用户名: " GITHUB_USERNAME
    
    if [ -n "$GITHUB_USERNAME" ]; then
        git remote add origin "https://github.com/$GITHUB_USERNAME/kebiaodaibiao-personal-site.git"
        echo "✅ 已添加远程仓库"
    else
        echo "❌ 未输入用户名，退出"
        exit 1
    fi
fi

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 检测到未提交的更改，正在提交..."
    git add .
    git commit -m "更新网站内容"
fi

# 推送到 GitHub
echo "📤 推送到 GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 代码已成功推送到 GitHub！"
    echo ""
    echo "📋 下一步："
    echo "1. 访问 https://github.com 查看你的仓库"
    echo "2. 在仓库 Settings > Pages 中启用 GitHub Pages"
    echo "3. 或者访问 https://vercel.com 使用 Vercel 部署（推荐）"
    echo ""
    echo "🌐 如果使用 Vercel："
    echo "   - 登录 Vercel"
    echo "   - 点击 'Add New Project'"
    echo "   - 选择你的仓库"
    echo "   - 点击 'Deploy'"
else
    echo "❌ 推送失败，请检查错误信息"
    exit 1
fi

