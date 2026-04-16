import { JwtPayload } from '../common/decorators/current-user.decorator';

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
      rawToken?: string;
    }
  }
}
