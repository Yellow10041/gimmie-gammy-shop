import clsx from "clsx";
import styles from "./index.module.scss";

import PostRightSide from "./components/PostRightSide";
import PostContent from "./components/PostContent";
import { IPost } from "@/types/post";

interface IPostProps {
  index: number;
  post: IPost;
}

const Post: React.FunctionComponent<IPostProps> = ({ post, index }) => {
  return (
    <div className={clsx(styles.Post)}>
      <PostContent {...post} index={index} />
      {/* <PostRightSide id={postData.id} statistic={postData.statistic} /> */}
    </div>
  );
};

export default Post;
