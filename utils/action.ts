export const getCurrentUserBlogs = () => {
  const jsonStoreBlogs = localStorage.getItem("allBlogs");
  const blogs = jsonStoreBlogs ? JSON.parse(jsonStoreBlogs) : null;
  const user = localStorage.getItem("username");
  const filteredList = blogs?.filter((blog: any) => blog.username === user);
  return filteredList;
};
export const createQueryString = (name: any, value: any) => {
  const params = new URLSearchParams();
  params.set(name, value);

  return params.toString();
};
