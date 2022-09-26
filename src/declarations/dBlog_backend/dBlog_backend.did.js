export const idlFactory = ({ IDL }) => {
  const Blog = IDL.Record({
    'title' : IDL.Text,
    'content' : IDL.Text,
    'writer' : IDL.Text,
  });
  return IDL.Service({
    'createBlog' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], ['oneway']),
    'readBlogs' : IDL.Func([], [IDL.Vec(Blog)], ['query']),
    'removeBlog' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
