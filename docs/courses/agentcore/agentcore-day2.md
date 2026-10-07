---
layout: course
section: courses
category: agentcore
title_ko: AI Agent with Amazon Bedrock AgentCore - Day 2
title_en: AI Agent with Amazon Bedrock AgentCore - Day 2
summary_ko: Memory, Gateway, Identity로 에이전트를 확장하고, Observability와 Evaluations로 운영 품질을 관리하는 2일차 과정이에요.
summary_en: 'Day 2: extend agents with Memory, Gateway, and Identity, then manage quality with Observability and Evaluations.'
date: 2026-10-02
duration_ko: 1일 (8시간)
duration_en: 1 day (8 hours)
level: Advanced
format_ko: 강의 + 핸즈온 실습
format_en: Lecture + hands-on labs
audience_ko: 에이전트를 운영 환경에 적용하려는 개발자
audience_en: Developers taking agents to production
tags:
- AgentCore
- Memory
- Gateway
- Observability
- Evaluations
repo: https://github.com/youngjinkim817/AI-Agent-with-Amazon-AgentCore_Day2
permalink: /courses/agentcore/day2/
---

## 과정 소개

1일차에서 배포한 에이전트에 **기억(Memory)**, **도구 연결(Gateway)**, **인증(Identity)**을 더하고, 운영 중인 에이전트를 **관찰(Observability)**하고 **평가(Evaluations)**하는 방법을 다뤄요. 실제 서비스 수준의 에이전트를 만드는 데 필요한 요소를 실습합니다.

## 학습 목표

- 단기 메모리와 장기 메모리의 차이를 이해하고 에이전트에 적용할 수 있다
- AgentCore Gateway로 기존 API와 Lambda 함수를 MCP 도구로 연결할 수 있다
- 에이전트 실행 과정을 트레이스로 확인하고 문제를 찾을 수 있다
- 배치 평가와 온라인 평가로 에이전트 품질을 측정할 수 있다

## 커리큘럼

| 모듈 | 주제 | 실습 |
|---|---|---|
| 1 | AgentCore Memory: 단기 메모리(이벤트)와 장기 메모리(전략 기반 추출) | Lab 4. 대화를 기억하는 에이전트 |
| 2 | AgentCore Gateway: API · Lambda를 MCP 도구로 변환 | Lab 5. Gateway로 도구 연결 |
| 3 | AgentCore Identity: 인바운드 인증과 외부 서비스 OAuth | - |
| 4 | Observability: CloudWatch에서 트레이스와 스팬 확인 | Lab 6. 에이전트 실행 추적 |
| 5 | Evaluations: 배치 평가, 온라인 평가, 사용자 지정 평가자 | Lab 7. 에이전트 품질 평가 |

## 사전 준비

- Day 1 과정 수료 또는 AgentCore Runtime 배포 경험
- AWS 계정 (Amazon Bedrock 모델 액세스 활성화)

## 실습 자료

실습 코드는 [GitHub 레포](https://github.com/youngjinkim817/AI-Agent-with-Amazon-AgentCore_Day2)에 있어요.
