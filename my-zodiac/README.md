# my-zodiac (별자리 운세)

---

### 주요 기능

태어난 월과 일을 입력하면 해당하는 별자리의 데이터를 볼 수 있음

- 별자리 데이터- 상징 이미지, 성향, 강점, 약점, 대표인물

---

### 데이터 파일

1. components
    - ZodiacStart.jsx - 탄생월일 입력 후 시작버튼
    - ZodiacResult.jsx - 해당 별자리에 관한 정보 / 다시 시작 버튼
2. public
    - zodiac - 각 별자리를 상징하는 이미지
    - background-sky.jpg - 배경에 해당하는 밤하늘 이미지
3. utils
    - getZodiac.js - 입력받은 탄생월일에 따른 별자리 이름 반환
4. zodiacData.js - 별자리에 따른 정보(성향, 강점, 약점, 대표인물) 저장
5. result - 예상 이미지 (Figma 이용) / 결과 이미지 포함 파일
