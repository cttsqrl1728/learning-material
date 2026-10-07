const unitsBySubject = {
  "공통국어": ["문학", "읽기", "쓰기", "문법", "듣기·말하기"],
  "공통수학": ["다항식", "방정식과 부등식", "경우의 수", "행렬"],
  "공통영어": ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5", "Lesson 6"],
  "통합사회": ["인간·사회·환경", "자연환경과 인간", "생활공간과 사회", "인권", "시장경제", "사회정의", "문화", "세계화", "지속가능한 삶"],
  "통합과학": ["과학의 기초", "물질과 규칙성", "시스템과 상호작용", "변화와 다양성"],
  "한국사": ["전근대 한국사", "근대 이전 국제관계", "근대 국가 수립", "일제강점기", "대한민국 발전", "현대 사회"],
  "정보": ["컴퓨팅 시스템", "데이터", "알고리즘과 프로그래밍", "인공지능", "디지털 문화"]
};

const materialTypes = ["개념 정리", "수업 필기", "문제 풀이", "시험 대비", "오답 정리", "수행평가 자료", "기타"];

function fillSubjects(select, firstText) {
  select.innerHTML = `<option value="">${firstText}</option>`;
  Object.keys(unitsBySubject).forEach(subject => {
    select.insertAdjacentHTML("beforeend", `<option value="${subject}">${subject}</option>`);
  });
}

function fillTypes(select, firstText) {
  select.innerHTML = `<option value="">${firstText}</option>`;
  materialTypes.forEach(type => {
    select.insertAdjacentHTML("beforeend", `<option value="${type}">${type}</option>`);
  });
}

function fillUnits(subjectValue, unitSelect, firstText) {
  unitSelect.innerHTML = `<option value="">${firstText}</option>`;
  if (!subjectValue) {
    unitSelect.disabled = true;
    return;
  }
  unitsBySubject[subjectValue].forEach(unit => {
    unitSelect.insertAdjacentHTML("beforeend", `<option value="${unit}">${unit}</option>`);
  });
  unitSelect.disabled = false;
}