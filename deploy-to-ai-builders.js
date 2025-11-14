#!/usr/bin/env node

/**
 * 部署脚本 - 使用 ai-builders-coach API 部署到 ai-builders.space
 * 
 * 使用方法:
 * node deploy-to-ai-builders.js <github-repo-url> <service-name> <branch>
 * 
 * 示例:
 * node deploy-to-ai-builders.js https://github.com/username/kebiaodaibiao-personal-site kebiaodaibiao-personal-site main
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 从环境变量或 .env 文件读取 token
function getToken() {
  // 优先从环境变量读取
  if (process.env.AI_BUILDER_TOKEN) {
    return process.env.AI_BUILDER_TOKEN;
  }
  
  // 尝试从 .env 文件读取
  try {
    const envPath = join(__dirname, '.env');
    const envContent = readFileSync(envPath, 'utf-8');
    const match = envContent.match(/AI_BUILDER_TOKEN=(.+)/);
    if (match) {
      return match[1].trim();
    }
  } catch (error) {
    // .env 文件不存在，继续
  }
  
  throw new Error('AI_BUILDER_TOKEN 未找到。请设置环境变量 AI_BUILDER_TOKEN 或在 .env 文件中配置。');
}

async function deploy(repoUrl, serviceName, branch) {
  const token = getToken();
  const apiUrl = 'https://www.ai-builders.com/resources/students-backend/v1/deployments';
  
  const payload = {
    repo_url: repoUrl,
    service_name: serviceName,
    branch: branch,
  };
  
  console.log('🚀 开始部署...');
  console.log(`📦 仓库: ${repoUrl}`);
  console.log(`🏷️  服务名称: ${serviceName}`);
  console.log(`🌿 分支: ${branch}`);
  console.log('');
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`部署失败: ${response.status} ${response.statusText}\n${errorText}`);
    }
    
    const result = await response.json();
    
    console.log('✅ 部署已提交！');
    console.log('');
    console.log('📊 部署信息:');
    console.log(`   服务名称: ${result.service_name}`);
    console.log(`   状态: ${result.status}`);
    console.log(`   消息: ${result.message || '部署已排队'}`);
    
    if (result.url) {
      console.log(`   URL: ${result.url}`);
    }
    
    console.log('');
    console.log('⏳ 部署通常需要 5-10 分钟完成。');
    console.log('📝 你可以使用以下命令查看部署状态:');
    console.log(`   curl -H "Authorization: Bearer ${token.substring(0, 10)}..." ${apiUrl}/${serviceName}`);
    
    return result;
  } catch (error) {
    console.error('❌ 部署失败:', error.message);
    process.exit(1);
  }
}

// 主函数
const args = process.argv.slice(2);

if (args.length < 3) {
  console.error('❌ 使用方法:');
  console.error('   node deploy-to-ai-builders.js <github-repo-url> <service-name> <branch>');
  console.error('');
  console.error('示例:');
  console.error('   node deploy-to-ai-builders.js https://github.com/username/kebiaodaibiao-personal-site kebiaodaibiao-personal-site main');
  process.exit(1);
}

const [repoUrl, serviceName, branch] = args;

// 验证服务名称格式
if (!/^[a-z0-9-]{3,32}$/.test(serviceName)) {
  console.error('❌ 服务名称格式错误！');
  console.error('   服务名称只能包含小写字母、数字和连字符，长度 3-32 个字符');
  process.exit(1);
}

deploy(repoUrl, serviceName, branch).catch(console.error);

