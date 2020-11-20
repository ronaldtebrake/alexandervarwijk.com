import {getAllPosts } from "../../lib/blog";
import TeaserHorizontal from "../../components/TeaserHorizontal";

export async function getStaticProps({ params }) {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  }
}

export default function Index({ posts }) {
  return (
    <>
      <h1>Posts</h1>
      {posts.map(post => (
        <TeaserHorizontal
          key={post.slug}
          {...post}
          slug={`/blog/${post.slug}`}
          HeadingLevel="h2"
        />
      ))}
    </>
  );
}