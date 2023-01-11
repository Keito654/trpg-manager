export const convertPathToName = (path: string): string => {
  type Obj = {
    [key: string]: string;
  };

  const pathToNameObj: Obj = {
    "/": "グループ一覧",
    "/login": "ログイン",
  };

  return pathToNameObj[path] ?? "NoTitle";
};
