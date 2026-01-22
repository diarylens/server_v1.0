import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';

// 플러그인 등록
dayjs.extend(utc);
dayjs.extend(timezone);

// 현재 시간 → 한국 시간(KST)으로 변환
export const dayjsKST = (...args: Parameters<typeof dayjs>) => {
  return dayjs(...args).tz('Asia/Seoul');
};
