---
layout: course
section: courses
category: agentcore
title_ko: AI Agent with Amazon Bedrock AgentCore - Day 1
title_en: AI Agent with Amazon Bedrock AgentCore - Day 1
summary_ko: Strands Agents로 에이전트를 만들고 AgentCore Runtime에 배포하는 1일차 과정이에요. 에이전트 기본 구조부터 MCP 서버 배포까지 실습합니다.
summary_en: 'Day 1: build an agent with Strands Agents and deploy it to AgentCore Runtime, from agent basics to deploying an MCP server.'
date: 2026-10-01
duration_ko: 1일 (8시간)
duration_en: 1 day (8 hours)
level: Intermediate
format_ko: 강의 + 핸즈온 실습
format_en: Lecture + hands-on labs
audience_ko: AI 에이전트를 처음 배포하는 개발자
audience_en: Developers deploying their first AI agent
tags:
- AgentCore
- Runtime
- Strands Agents
- MCP
repo: https://github.com/youngjinkim817/AI-Agent-with-Amazon-AgentCore_Day1
permalink: /courses/agentcore/day1/
---

## 과정 소개

AI 에이전트의 기본 구조를 이해하고, **Strands Agents**로 직접 만든 에이전트를 **Amazon Bedrock AgentCore Runtime**에 배포하는 과정이에요. 로컬에서 동작하는 에이전트를 운영 환경으로 옮기는 전체 흐름을 하루 동안 실습합니다.

## 학습 목표

- AI 에이전트의 구성 요소(모델, 프롬프트, 도구, 에이전트 루프)를 설명할 수 있다
- Strands Agents로 도구를 사용하는 에이전트를 만들 수 있다
- AgentCore Runtime의 동작 방식과 배포 요구 사항을 이해한다
- MCP 서버를 AgentCore Runtime에 배포하고 에이전트와 연결할 수 있다

## 커리큘럼

| 모듈 | 주제 | 실습 |
|---|---|---|
| 1 | AI 에이전트 개요: 에이전트 루프, 도구 사용, 멀티 에이전트 패턴 | - |
| 2 | Strands Agents 시작하기: 모델, 시스템 프롬프트, `@tool` | Lab 1. 첫 에이전트 만들기 |
| 3 | AgentCore Runtime: 세션 격리, `/invocations` · `/ping` 엔드포인트, ARM64 컨테이너 | Lab 2. Runtime에 에이전트 배포 |
| 4 | MCP와 AgentCore: MCP 서버 배포와 에이전트 연결 | Lab 3. MCP 서버 배포 |

## 사전 준비

- AWS 계정 (Amazon Bedrock 모델 액세스 활성화)
- Python 3.10 이상, AWS CLI 자격 증명 설정
- Python 기본 문법과 AWS 콘솔 사용 경험

## 실습 자료

실습 코드는 [GitHub 레포](https://github.com/youngjinkim817/AI-Agent-with-Amazon-AgentCore_Day1)에 있어요. 단계별 가이드는 [워크숍 페이지](/workshop/agentcore/lab-runtime-deploy/)를 참고하세요.
