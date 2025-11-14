#!/usr/bin/env python3
"""
使用 ai-builders-coach API 部署到 ai-builders.space
"""

import os
import sys
import json
import requests
from pathlib import Path

# API 端点
API_BASE = "https://www.ai-builders.com/resources/students-backend"
DEPLOY_ENDPOINT = f"{API_BASE}/v1/deployments"

def get_token():
    """获取 AI_BUILDER_TOKEN"""
    # 优先从环境变量读取
    token = os.getenv("AI_BUILDER_TOKEN")
    if token:
        return token
    
    # 尝试从 .env 文件读取
    env_file = Path(__file__).parent / ".env"
    if env_file.exists():
        with open(env_file) as f:
            for line in f:
                if line.startswith("AI_BUILDER_TOKEN="):
                    return line.split("=", 1)[1].strip()
    
    raise ValueError(
        "未找到 AI_BUILDER_TOKEN。\n"
        "请设置环境变量: export AI_BUILDER_TOKEN=your_token\n"
        "或在 .env 文件中配置: AI_BUILDER_TOKEN=your_token"
    )

def deploy(repo_url, service_name, branch):
    """部署服务"""
    token = get_token()
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}",
    }
    
    payload = {
        "repo_url": repo_url,
        "service_name": service_name,
        "branch": branch,
    }
    
    print("🚀 开始部署...")
    print(f"📦 仓库: {repo_url}")
    print(f"🏷️  服务名称: {service_name}")
    print(f"🌿 分支: {branch}")
    print()
    
    try:
        response = requests.post(DEPLOY_ENDPOINT, json=payload, headers=headers)
        response.raise_for_status()
        
        result = response.json()
        
        print("✅ 部署已提交！")
        print()
        print("📊 部署信息:")
        print(f"   服务名称: {result.get('service_name', 'N/A')}")
        print(f"   状态: {result.get('status', 'N/A')}")
        print(f"   消息: {result.get('message', '部署已排队')}")
        
        if result.get('url'):
            print(f"   URL: {result['url']}")
        
        print()
        print("⏳ 部署通常需要 5-10 分钟完成。")
        print("📝 你可以使用以下命令查看部署状态:")
        print(f"   curl -H 'Authorization: Bearer {token[:10]}...' {DEPLOY_ENDPOINT}/{service_name}")
        
        return result
        
    except requests.exceptions.HTTPError as e:
        print(f"❌ 部署失败: {e}")
        if e.response is not None:
            try:
                error_detail = e.response.json()
                print(f"   错误详情: {json.dumps(error_detail, indent=2, ensure_ascii=False)}")
            except:
                print(f"   响应内容: {e.response.text}")
        sys.exit(1)
    except Exception as e:
        print(f"❌ 部署失败: {e}")
        sys.exit(1)

def main():
    if len(sys.argv) < 4:
        print("❌ 使用方法:")
        print(f"   python {sys.argv[0]} <github-repo-url> <service-name> <branch>")
        print()
        print("示例:")
        print(f"   python {sys.argv[0]} https://github.com/username/kebiaodaibiao-personal-site kebiaodaibiao-personal-site main")
        sys.exit(1)
    
    repo_url = sys.argv[1]
    service_name = sys.argv[2]
    branch = sys.argv[3]
    
    # 验证服务名称格式
    import re
    if not re.match(r'^[a-z0-9-]{3,32}$', service_name):
        print("❌ 服务名称格式错误！")
        print("   服务名称只能包含小写字母、数字和连字符，长度 3-32 个字符")
        sys.exit(1)
    
    deploy(repo_url, service_name, branch)

if __name__ == "__main__":
    main()

