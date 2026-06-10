import {
  Strategy as JwtStrategy,
  ExtractJwt,
  type StrategyOptions,
} from "passport-jwt";
import { getUserById } from "../model/usersQueries.js";
import passport from "passport";

export const passportSetup = () => {
  const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "",
  };

  passport.use(
    new JwtStrategy(opts, async (payload, done) => {
      try {
        const user = getUserById(payload.sub);
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    }),
  );
};
