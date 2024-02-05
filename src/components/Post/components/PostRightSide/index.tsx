import clsx from "clsx";
import styles from "./index.module.scss";

import { useContext, useMemo } from "react";

import { MainContext } from "@/providers/MainContext";

import ButtonPostStat from "@/components/buttons/ButtonPostStat";

import IconLike from "@/public/img/icons/like";
import IconComments from "@/public/img/icons/comment";
import IconSent from "@/public/img/icons/sent";
import { IPostStatistic } from "@/types/Post.interface";
import getRandomNumber from "@/utils/getRandomNumber";

interface PostRightSideProps {
  id: number;
  // statistic: IPostStatistic;
}

const PostRightSide: React.FunctionComponent<PostRightSideProps> = ({ id }) => {
  const { modalShareVideo, modalEmail, setButtonTrigger } = useContext(MainContext);

  const HandleButtonComment = () => {
    setButtonTrigger("Comment");
    modalEmail.openModal();
  };

  const HandleButtonRepost = () => {
    modalShareVideo.openModal();
    modalShareVideo.setVideoID(id);
  };

  const likes = useMemo(() => {
    return getRandomNumber(100, 1000);
  }, []);

  const comments = useMemo(() => {
    return getRandomNumber(100, likes);
  }, []);

  return (
    <div className={clsx(styles.PostRightSide)}>
      <ButtonPostStat icon={<IconLike />} value={likes} like />
      <ButtonPostStat icon={<IconComments />} value={comments} onClick={HandleButtonComment} />
      {/* <ButtonPostStat
        icon={<IconSent />}
        value={statistic.repost}
        onClick={HandleButtonRepost}
      /> */}
    </div>
  );
};

export default PostRightSide;
