// colorUtils.ts
export interface ColorSet {
  bgLight: string;
  bgMedium: string;
  bgDark: string;
  text: string;
  border: string;
}

// 미리 정의된 색상 세트
export const colorSets: Record<string, ColorSet> = {
  pink: {
    bgLight: 'bg-pink-50',
    bgMedium: 'bg-pink-100',
    bgDark: 'bg-pink-200',
    text: 'text-pink-500',
    border: 'border-pink-300',
  },
  blue: {
    bgLight: 'bg-blue-50',
    bgMedium: 'bg-blue-100',
    bgDark: 'bg-blue-200',
    text: 'text-blue-500',
    border: 'border-blue-300',
  },
  green: {
    bgLight: 'bg-green-50',
    bgMedium: 'bg-green-100',
    bgDark: 'bg-green-200',
    text: 'text-green-500',
    border: 'border-green-300',
  },
  purple: {
    bgLight: 'bg-purple-50',
    bgMedium: 'bg-purple-100',
    bgDark: 'bg-purple-200',
    text: 'text-purple-500',
    border: 'border-purple-300',
  },
  yellow: {
    bgLight: 'bg-yellow-50',
    bgMedium: 'bg-yellow-100',
    bgDark: 'bg-yellow-200',
    text: 'text-yellow-500',
    border: 'border-yellow-300',
  },
  red: {
    bgLight: 'bg-red-50',
    bgMedium: 'bg-red-100',
    bgDark: 'bg-red-200',
    text: 'text-red-500',
    border: 'border-red-300',
  },
  gray: {
    bgLight: 'bg-gray-50',
    bgMedium: 'bg-gray-100',
    bgDark: 'bg-gray-200',
    text: 'text-gray-500',
    border: 'border-gray-300',
  }
};

// 색상 매핑 함수
export const getColorSet = (color: string): ColorSet => {
  return colorSets[color] || colorSets.pink; // 기본값은 pink
};

// 기본 색상 세트
export const defaultColorSet: ColorSet = colorSets.pink;