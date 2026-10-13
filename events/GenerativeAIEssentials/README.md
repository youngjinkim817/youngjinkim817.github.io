<style> body { font-size: 9pt; line-height: 1.6; } </style>

# GitHub 커밋·푸시 가이드

로컬에서 작업한 내용을 GitHub 저장소(`youngjinkim817/youngjinkim817.github.io`)에 올리는 전체 과정을 정리한 문서입니다.
이 Mac에는 아직 git(명령줄 도구)이 설치되어 있지 않을 수 있으므로, **방법 A(GitHub Desktop)** 와 **방법 B(터미널)** 두 가지를 모두 안내합니다.

---

## 사전 정보

- **저장소**: https://github.com/youngjinkim817/youngjinkim817.github.io
- **브랜치**: `main`
- **로컬 경로**: `~/Desktop/CourseDevelop/Repository/youngjinkim817.github.io`

---

## 방법 A — GitHub Desktop (git 설치 불필요, 권장)

터미널·토큰 없이 클릭 몇 번으로 커밋·푸시할 수 있어 가장 쉽습니다.

### 1단계 · 설치 및 로그인
1. https://desktop.github.com 에서 GitHub Desktop 다운로드·설치
2. 실행 후 **File → Options → Accounts → Sign in** 으로 GitHub 계정 로그인
3. 브라우저 인증 창이 뜨면 **Authorize** 클릭

### 2단계 · 저장소 추가
1. **File → Add Local Repository**
2. 로컬 경로 선택:
   ```
   /Users/yjkim/Desktop/CourseDevelop/Repository/youngjinkim817.github.io
   ```

### 3단계 · 커밋
1. 왼쪽 **Changes** 탭에 변경·추가·삭제된 파일 목록이 표시됨
2. 하단 **Summary** 칸에 커밋 메시지 입력 (예: `feat: update course pages`)
3. **Commit to main** 클릭

### 4단계 · 푸시
1. 상단 오른쪽 **Push origin** 클릭
2. 업로드 완료 → GitHub에 반영됨

---

## 방법 B — 터미널 (git 설치 후)

### 1단계 · git 설치 (최초 1회)
```bash
xcode-select --install
```
설치 창이 뜨면 **Install** 클릭, 완료까지 몇 분 대기.
설치 확인:
```bash
git --version
```

### 2단계 · GitHub 로그인 (최초 1회)
HTTPS 방식은 비밀번호 대신 **Personal Access Token(PAT)** 이 필요합니다. 가장 쉬운 방법은 GitHub CLI 사용:
```bash
brew install gh      # Homebrew가 있을 때
gh auth login        # 안내에 따라 브라우저로 로그인
```
로그인해 두면 이후 `git push` 시 토큰 입력 없이 자동 인증됩니다.

### 3단계 · 저장소로 이동
```bash
cd ~/Desktop/CourseDevelop/Repository/youngjinkim817.github.io
```

### 4단계 · 변경사항 확인
```bash
git status            # 어떤 파일이 바뀌었는지 확인
```

### 5단계 · 스테이징 (커밋할 파일 선택)
```bash
git add -A            # 신규·수정·삭제 모두 포함 (삭제 반영이 필요하면 -A 권장)
# 또는 특정 파일만:
# git add 경로/파일명
```

### 6단계 · 커밋
```bash
git commit -m "변경 내용을 설명하는 메시지"
```

### 7단계 · 푸시 (GitHub에 업로드)
```bash
git push origin main
```

---

## 올린 뒤 확인

1. **Actions 탭**에서 빌드 상태 확인 (GitHub Pages 자동 빌드, 1~2분 소요):
   https://github.com/youngjinkim817/youngjinkim817.github.io/actions
   - 노란 점: 빌드 중 / 초록 체크: 완료 / 빨간 X: 실패
2. 사이트 접속 후 변경 확인. 예전 화면이 보이면 **하드 리프레시**:
   - Mac Chrome/Edge: `Cmd + Shift + R`
   - Mac Safari: `Cmd + Option + R`

---

## 자주 쓰는 git 명령 요약

| 명령 | 설명 |
|------|------|
| `git status` | 변경된 파일 확인 |
| `git add -A` | 모든 변경(추가·수정·삭제) 스테이징 |
| `git commit -m "메시지"` | 커밋 생성 |
| `git push origin main` | 원격 저장소로 업로드 |
| `git pull origin main` | 원격의 최신 변경 내려받기 |
| `git log --oneline -5` | 최근 커밋 5개 확인 |

---

## 커밋 메시지 작성 팁 (Conventional Commits)

- `feat:` 새 기능·페이지 추가
- `fix:` 버그·오류 수정
- `docs:` 문서 변경
- `style:` 디자인·포맷 변경 (기능 변화 없음)
- `refactor:` 구조 개선 (기능 변화 없음)

예: `feat: add Generative AI Essentials course pages`
