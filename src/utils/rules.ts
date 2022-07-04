import moment, { Moment } from 'moment';

export const rules = {
  required: (message: string) => ({
    required: true,
    message,
  }),
};
