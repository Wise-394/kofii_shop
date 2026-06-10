import {
  Strategy as JwtStrategy,
  ExtractJwt,
  type StrategyOptions,
} from "passport-jwt";
import passport from "passport";

export const passportSetup = () => {
  const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "",
  };

  //   passport.use(new JwtStrategy(opts, async(payload, done)=> {

  //   }))
};
