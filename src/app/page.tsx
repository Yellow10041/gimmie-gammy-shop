import HomeContent from "@/components/@home/HomeContent";
import { PostService } from "@/services/post/post.service";

async function getData() {
  let posts = await PostService.getAll();

  return { posts };
}

const Home = async () => {
  const data = await getData();

  console.log(data.posts.data[0].attributes.video.data.attributes.url);

  return <HomeContent posts={data.posts.data} />;
};

export default Home;
