import {
  IUserAuthData,
  JWTToken,
  IUserForgotPasswordData,
  IUserResetPasswordData,
  IUserChangePasswordData,
} from 'models/user'

export interface IAuth {
  sendAuthorized(params: IUserAuthData): Promise<JWTToken>
  sendForgotPassword(params: IUserForgotPasswordData): Promise<Boolean>
  sendResetPassword(params: IUserResetPasswordData): Promise<Boolean>
  sendChangePassword(params: IUserChangePasswordData): Promise<Boolean>
}
