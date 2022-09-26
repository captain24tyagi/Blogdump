import List "mo:base/List";
import Debug "mo:base/Debug"

actor dBlog{

//public keyword  helps the datatype to be used anywhere in the program
  public type Blog = {
    title: Text;
    content: Text;
    writer: Text;
  };

  var blogs: List.List<Blog> = List.nil<Blog>();

  public func createBlog(titleText: Text, contentText: Text, writerText: Text){

    let newBlog: Blog = {
      title = titleText;
      content = contentText;
      writer = writerText;
    };

    //:=, assign operator, pushes newBlog into the list named blogs
    blogs := List.push(newBlog, blogs);  
    Debug.print(debug_show(blogs));
  };

  public query func readBlogs(): async [Blog] {
    return List.toArray(blogs);                    //converts list to array
  };

  public func removeBlog(id: Nat) {
    let listFront = List.take(blogs, id);
    let listBack = List.drop(blogs, id + 1);
    blogs := List.append(listFront, listBack);     //append list front to list back
  };
}