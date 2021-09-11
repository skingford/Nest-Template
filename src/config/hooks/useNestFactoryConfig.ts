/*
 * @Author: kingford
 * @Date: 2021-09-08 08:52:00
 * @LastEditTime: 2021-09-11 21:04:18
 */
import { setupReportLogger } from '@/modules/log/ReportLogger';

export const useNestFactoryConfig = () => {
  return {
    // cors: {
    //   origin: ['http://localhost', 'http://localhost:3000'],
    //   credentials: true,
    // },
    bufferLogs: true,
    logger: setupReportLogger(),
  };
};
