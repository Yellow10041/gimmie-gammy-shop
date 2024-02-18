import HomeContent from "@/components/@home/HomeContent";
import { PostService } from "@/services/post/post.service";

async function getData() {
  let posts = await PostService.getAll();

  return { posts };
}

const Home = async () => {
  const data = await getData();

  let posts = data.posts.data;

  const compareRandom = () => {
    return Math.random() - 0.5;
  };

  posts.sort(compareRandom);

  return <>{data.posts.data[0] ? <HomeContent posts={posts} /> : <>DB connection error</>}</>;
};

export default Home;
