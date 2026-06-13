// 通用工具函数

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('zh-CN');
};

export const cn = (...classes: (string | undefined | false | null)[]): string => {
  return classes.filter(Boolean).join(' ');
};
