import HomeContent from "@/components/@home/HomeContent";
import { PostService } from "@/services/post/post.service";

async function getData() {
  let posts = await PostService.getAll();

  return { posts };
}

const Home = async () => {
  const data = await getData();

  return <>{data.posts.data[0] ? <HomeContent posts={data.posts.data} /> : <>DB connection error</>}</>;
};

export default Home;
