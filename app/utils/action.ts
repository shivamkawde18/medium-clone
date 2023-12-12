export const getCurrentUserBlogs = () => {
  const jsonStoreBlogs = localStorage.getItem("allBlogs");
  const blogs = jsonStoreBlogs ? JSON.parse(jsonStoreBlogs) : null;
  const user = localStorage.getItem("username");
  const filteredList = blogs.filter((blog: any) => blog.username === user);
  return filteredList;
};
