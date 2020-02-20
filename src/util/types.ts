export type Entity<T = any> = {
  [id in string | number]: T;
};
