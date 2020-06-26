import { devKeys } from "./dev";
import { prodKeys } from "./prod";

export interface Keys {
  cookieSecret: string;
}

export const keys = (): Keys => {
  if (process.env.NODE_ENV === "production") {
    return prodKeys;
  } else {
    return devKeys;
  }
};
