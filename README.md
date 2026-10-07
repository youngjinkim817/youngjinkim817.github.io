# youngjinkim817.github.io

AWS Technical Trainer 김영진의 강의 과정 소개와 핸즈온 실습 가이드 사이트입니다.
GitHub Pages의 기본 Jekyll 빌드로 배포돼요. `main` 브랜치에 올리면 자동으로 반영됩니다.

## 구조

```
_config.yml              # 사이트 설정, 메뉴, 카테고리(course_categories)
index.md                 # 홈
courses.md / workshop.md # 과정 목록 / 워크숍 목록
tags.md / about.md       # 태그 / 소개
_layouts/                # default, home, course, doc, listing, tags, about
_includes/               # topbar, footer, course-card, pager
assets/                  # css, js, icons
docs/courses/<카테고리>/  # 강의 과정 페이지 (layout: course)
docs/workshop/<카테고리>/ # 실습 가이드 (layout: doc)
```

## 과정 추가하기

1. `docs/courses/<카테고리>/` 폴더에 `.md` 파일을 만들고, 기존 과정 파일의 front matter를 복사해서 고쳐요.
2. 새 카테고리라면 `_config.yml`의 `course_categories`에 항목을 추가하고, `assets/icons/`에 아이콘을 넣어요.
3. 본문 대신 HTML 문서 하나로 보여 주고 싶으면 front matter에 `report: /경로/파일.html`을 넣어요.
