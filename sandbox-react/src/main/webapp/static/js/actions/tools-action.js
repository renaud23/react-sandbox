export const headerGetJson = () => {
  const method = "GET";
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return { method, headers };
};
