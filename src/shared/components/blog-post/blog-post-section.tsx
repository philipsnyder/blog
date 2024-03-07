import { BlogPost } from "./blog-post";

// TODO: needs to take a blog posts collection as input
export function BlogPostSection() {
  return (
    <>
      <section className="mx-12 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
        </div>
      </section>
    </>
  );
}
