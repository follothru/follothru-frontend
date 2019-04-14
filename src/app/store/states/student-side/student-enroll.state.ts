export interface StudentEnrollStatus {
  verified: boolean;
  email: string;
}

export interface StudentEnrollState {
  courseEnrollInfo?: any;
  enrollStatus: StudentEnrollStatus;
  isLoading: boolean;
}

export const initialStudentEnrollState: StudentEnrollState = {
  courseEnrollInfo: null,
  enrollStatus: null,
  isLoading: false
};

export const getCourseEnrollInfo = (state: StudentEnrollState) =>
  state.courseEnrollInfo;

export const getStudentEnrollStatus = (state: StudentEnrollState) =>
  state.enrollStatus;

export const isStudentEnrollLoading = (state: StudentEnrollState) =>
  state.isLoading;
