export interface AlertState {
  alertEntities: any;
}

export const initialAlertState: AlertState = {
  alertEntities: {}
};

export const getAlertEntities = (state: AlertState) => state.alertEntities;
