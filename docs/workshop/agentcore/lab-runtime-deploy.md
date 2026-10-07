---
layout: doc
section: workshop
category: agentcore
title_ko: Lab 2. AgentCore Runtime에 에이전트 배포하기
title_en: Lab 2. Deploy an Agent to AgentCore Runtime
summary_ko: Strands Agents 에이전트를 로컬에서 테스트한 뒤 AgentCore Runtime에 배포하고 호출해 봐요.
summary_en: Test a Strands agent locally, then deploy it to AgentCore Runtime and invoke it.
date: 2026-10-01
duration_ko: 40분
duration_en: 40 min
tags:
- AgentCore
- Runtime
- Strands Agents
course: /courses/agentcore/day1/
permalink: /workshop/agentcore/lab-runtime-deploy/
---

## 실습 목표

Strands Agents로 만든 에이전트를 **AgentCore Runtime**에 배포하고, 배포한 에이전트를 직접 호출해 봐요.

> 💡 AgentCore Runtime은 에이전트를 **ARM64 컨테이너**로 실행하고, **포트 8080**의 `/invocations`(POST)와 `/ping`(GET) 엔드포인트로 요청을 받아요.

## 1. 환경 준비

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install strands-agents bedrock-agentcore bedrock-agentcore-starter-toolkit
```

`requirements.txt` 파일도 만들어 두세요. 배포할 때 이 파일로 컨테이너를 만들어요.

```text
strands-agents
bedrock-agentcore
```

## 2. 에이전트 코드 작성

`agent.py` 파일을 만들어요.

```python
from bedrock_agentcore.runtime import BedrockAgentCoreApp
from strands import Agent

app = BedrockAgentCoreApp()
agent = Agent(system_prompt="You are a helpful AWS training assistant.")

@app.entrypoint
def invoke(payload):
    prompt = payload.get("prompt", "Hello")
    result = agent(prompt)
    return {"result": str(result)}

if __name__ == "__main__":
    app.run()
```

## 3. 로컬에서 테스트

```bash
python agent.py
```

다른 터미널을 열고 요청을 보내 봐요.

```bash
curl -X POST http://localhost:8080/invocations \
  -H "Content-Type: application/json" \
  -d '{"prompt": "AgentCore가 뭐야?"}'
```

## 4. AgentCore Runtime에 배포

```bash
agentcore configure -e agent.py
agentcore launch
```

배포가 끝나면 에이전트를 호출해 봐요.

```bash
agentcore invoke '{"prompt": "Hello AgentCore"}'
```

## 5. 확인하기

- Amazon Bedrock AgentCore 콘솔에서 **Runtime** 메뉴에 에이전트가 보이는지 확인하세요.
- 실습이 끝나면 비용이 나오지 않도록 만든 리소스를 삭제하세요.
