export type Artist = {
  id: string;
  name: string;
  profileAlt: string;
  summary: string;
  concept: string;
};

export const artists: Artist[] = Array.from({ length: 20 }, (_, index) => {
  const memberNumber = String(index + 1).padStart(2, '0');

  return {
    id: `member-${memberNumber}`,
    name: `여기에 멤버 ${memberNumber} 이름 추가`,
    profileAlt: `여기에 멤버 ${memberNumber} 프로필 이미지 설명 추가`,
    summary: '여기에 아티스트 한 줄 소개 텍스트 추가',
    concept: '여기에 특징/콘셉트/세계관 설명 추가',
  };
});
