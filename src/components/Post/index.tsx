import clsx from "clsx";
import styles from "./index.module.scss";

import PostRightSide from "./components/PostRightSide";
import PostContent from "./components/PostContent";
import { IPost } from "@/types/Post.interface";

interface IPostProps {
  index: number;
  postData: IPost;
}

const Post: React.FunctionComponent<IPostProps> = ({ postData, index }) => {
  return (
    <div className={clsx(styles.Post)}>
      <PostContent {...postData} index={index} />
      <PostRightSide id={postData.id} statistic={postData.statistic} />
    </div>
  );
};

export default Post;
