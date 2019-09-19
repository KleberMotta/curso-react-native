import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [{ title: 'Blog Post #1' }, { title: 'Blog Post #2' }];
  let teste = 0;
  return (
    <BlogContext.Provider value={blogPosts} tst={teste} call={() => {}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
