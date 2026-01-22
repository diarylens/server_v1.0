import { HttpStatus } from '@nestjs/common';

export const EXCEPTION_MESSAGE = {
  server: {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    message: '오류가 발생했습니다. 서버 관리자에게 문의하세요',
  },
  unauthorized: {
    status: HttpStatus.UNAUTHORIZED,
    message: '접근 권한이 없습니다.',
  },
  forbidden: {
    status: HttpStatus.FORBIDDEN,
    message: '세션이 만료되었습니다. 재로그인 해주세요.',
  },
  alreadyExist: {
    status: HttpStatus.BAD_REQUEST,
    message: '이미 존재하는 정보입니다.',
  },
  inconsistency: {
    status: HttpStatus.BAD_REQUEST,
    message: '입력된 정보가 일치하지 않습니다.',
  },
  isSameInsert: {
    status: HttpStatus.BAD_REQUEST,
    message: '변경된 정보가 없습니다.',
  },
  noFind: {
    status: HttpStatus.NOT_FOUND,
    message: '조회되는 정보가 없습니다.',
  },
  alreadyProcessed: {
    status: HttpStatus.BAD_GATEWAY,
    message: '이미 처리되었습니다.',
  },
};
