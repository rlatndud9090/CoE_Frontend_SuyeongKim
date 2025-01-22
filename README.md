# 현대오토에버 CoE Frontend Engineer 과제테스트 (김수영)

## API 분석

### 초기 로딩시

- 탭 별 카테고리 목록 조회
  - 메서드: GET
  - 요청 URL: api/faq/category
  - 파라미터
    - tab: string, 탭 이름('CONSULT' | 'USAGE')
  - 응답: array, 카테고리 정보
    - categoryID: number, 카테고리 id
    - name: string, 카테고리 이름

- 탭 별 FAQ 목록 조회
  - 메서드: GET
  - 요청 URL: api/faq
  - 파라미터
    - limit: number, 가져올 데이터의 갯수
    - offset: number, 가져올 데이터 시작 인덱스
    - tab: string, 탭 이름('CONSULT' | 'USAGE')
    - faqCategoryID: string, 카테고리 이름
  - 응답
    - pageInfo: object, 응답 정보
      - totalRecord: number, 해당 요청에 맞는 아이템의 갯수
      - offset: number, 반환된 데이터의 시작 인덱스 정보
      - limit: number, 반환된 데이터의 갯수
      - prevOffset: number, 이전에 반환한 데이터의 시작 인덱스 정보
      - nextOffset: number, 다음에 반환할 데이터의 시작 인덱스 정보 (더이상 더보기가 불가능하다면, offset === nextOffset이 됨)
    - items: array, 각 FAQ 아이템들 정보
      - id: number, 아이템 id
      - categoryName: string, 카테고리 이름
      - subCategoryName: string, 서브 카테고리 이름
      - question: string, 질문 내용
      - answer: html, 답변 내용에 대한 html
