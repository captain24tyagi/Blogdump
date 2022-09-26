import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Blog {
  'title' : string,
  'content' : string,
  'writer' : string,
}
export interface _SERVICE {
  'createBlog' : ActorMethod<[string, string, string], undefined>,
  'readBlogs' : ActorMethod<[], Array<Blog>>,
  'removeBlog' : ActorMethod<[bigint], undefined>,
}
