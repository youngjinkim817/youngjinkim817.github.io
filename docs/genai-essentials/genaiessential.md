---
layout: course
section: courses
category: genai-essentials
title_ko: Generative AI Essentials on AWS - Day 1
title_en: Generative AI Essentials on AWS - Day 1
summary_ko: 생성형 AI의 핵심 개념과 Amazon Bedrock 기초. 파운데이션 모델, 프롬프트 엔지니어링, RAG의 기본기를 다룹니다.
summary_en: 'Day 1: core generative AI concepts and Amazon Bedrock basics, from foundation models to prompt engineering and RAG.'
date: 2026-10-12
duration_ko: 1일 (8시간)
duration_en: 1 day (8 hours)
level: Foundational
format_ko: 강의 + 핸즈온 실습
format_en: Lecture + hands-on labs
audience_ko: 생성형 AI를 AWS에서 처음 시작하는 개발자·실무자
audience_en: Developers and practitioners starting generative AI on AWS
tags:
- Generative AI
- Amazon Bedrock
- Foundation Model
- Prompt Engineering
- RAG
permalink: /courses/genai-essentials/day1/
---

## 과정 소개

생성형 AI의 **핵심 개념**을 이해하고, **Amazon Bedrock**으로 파운데이션 모델을 직접 호출해 보는 입문 과정입니다. 모델이 무엇인지, 토큰과 추론이 어떻게 동작하는지부터 시작해, 프롬프트 엔지니어링과 RAG(검색 증강 생성)의 기본기까지 하루 안에 한 흐름으로 익힙니다.

## 학습 목표

- 파운데이션 모델(FM)과 대규모 언어 모델(LLM)의 기본 개념을 설명할 수 있다
- Amazon Bedrock에서 모델을 선택하고 API로 호출할 수 있다
- 프롬프트를 구조화해 원하는 출력을 안정적으로 얻을 수 있다
- RAG가 필요한 이유와 기본 구성을 이해한다

## 커리큘럼

| 모듈 | 주제 | 실습 |
|---|---|---|
| 1 | 생성형 AI 개요: FM/LLM, 토큰, 추론(inference)의 기본 | - |
| 2 | Amazon Bedrock 둘러보기: 모델 선택, 콘솔, InvokeModel API | Lab 1. Bedrock에서 첫 모델 호출 |
| 3 | 프롬프트 엔지니어링: 역할·맥락·예시, 출력 형식 제어 | Lab 2. 프롬프트 개선 실습 |
| 4 | RAG 기초: 임베딩, 벡터 검색, 지식 소스 연결 | Lab 3. 간단한 RAG 파이프라인 |

## 사전 준비

- AWS 계정 (Amazon Bedrock 모델 액세스 활성화)
- Python 3.10 이상, AWS CLI 자격 증명 설정
- Python 기본 문법과 AWS 콘솔 사용 경험

## 실습 자료

핸즈온 가이드는 [워크숍 페이지](/workshop/genai-essentials/lab-bedrock-first-call/)에서 따라 할 수 있습니다. (실습 문서는 `docs/workshop/genai-essentials/`에 추가하세요.)
