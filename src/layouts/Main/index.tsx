"use client";

import clsx from "clsx";
import styles from "./index.module.scss";

import { useEffect, useLayoutEffect, useState } from "react";

import { MainContext } from "@/providers/MainContext";

import { useModal } from "@/hooks/useModal";
import { useModalShareVideo } from "@/hooks/useModalShareVideo";
import { useModalVideo } from "@/hooks/useModalVideo";

import { IPost } from "@/types/Post.interface";

import { dataPosts } from "@/data/dataPosts";

import Modal from "@/components/Modal";
import Burger from "@/components/modals/Burger";
import Cookies from "@/components/modals/Cookies";
import CreateAccount from "@/components/modals/CreateAccount";
import Email from "@/components/modals/Email";
import FullScreenVideo from "@/components/modals/FullScreenVideo";
import ShareVideo from "@/components/modals/ShareVideo/Index";
import MainDesk from "./components/MainDesk";
import MainMob from "./components/MainMob";

import IconLogo from "@/public/img/icons/logo";
import { useModalOrder } from "@/hooks/useModalOrder";
import Order from "@/components/modals/Order";

interface ILayoutMainProps {
  children: React.ReactNode;
}

const LayoutMain: React.FunctionComponent<ILayoutMainProps> = ({ children }) => {
  const [load, setLoad] = useState<boolean>(false);
  const [videoID, setVideoID] = useState<number>(-2);
  const [windowWidth, setWindowWidth] = useState<number>(2000);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [device, setDevice] = useState<"desktop" | "mobile">();
  const [buttonTrigger, setButtonTrigger] = useState<string>("");

  const modalFullScreenVideo = useModalVideo();
  const modalShareVideo = useModalShareVideo();
  const modalEmail = useModal();
  const modalCreateAccount = useModal();
  const modalOrder = useModalOrder();
  const modalBurger = useModal();
  const modalCookies = useModal();

  useLayoutEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window?.innerWidth);
    };

    updateWindowWidth();

    window?.addEventListener("resize", updateWindowWidth);

    return () => {
      window?.removeEventListener("resize", updateWindowWidth);
    };
  });

  const filterPostData = (orientation: "h" | "v") => {
    let filterPostData = dataPosts.filter((post) => {
      if (post.orientation == orientation && post.id != videoID) {
        return true;
      } else return false;
    }) as IPost[];

    return filterPostData;
  };

  const updatePostData = () => {
    if (videoID != -2) {
      let postData = [];
      let postID: IPost | undefined;

      postID = dataPosts.find((post) => post.id == videoID) as IPost;

      // console.log(dataPosts.find((post) => post.id == videoID));

      if (windowWidth > 1025) {
        postData.push(...filterPostData("h"));
        setDevice("desktop");
      } else {
        postData.push(...filterPostData("h"));
        setDevice("mobile");
      }

      if (postID) {
        postData.unshift(postID);
      }

      // console.log(postData);

      setPosts(postData);
    }
  };

  useEffect(() => {
    updatePostData();

    setTimeout(() => {
      setLoad(true);
      windowWidth > 1025 &&
        setTimeout(() => {
          modalCookies.openModal();
        }, 1000);
    }, 100);
  }, [videoID]);

  return (
    <MainContext.Provider
      value={{
        modalFullScreenVideo,
        modalEmail,
        modalCreateAccount,
        modalShareVideo,
        modalBurger,
        modalCookies,
        modalOrder,
        windowWidth,
        posts,
        load,
        device,
        buttonTrigger,
        setButtonTrigger,
        setVideoID,
      }}
    >
      <div className={clsx(styles.LayoutMain_logo, load && styles.hidden)}>
        <IconLogo />
      </div>
      <div className={clsx(styles.LayoutMain, load && styles.load)}>
        <Modal modal={modalBurger}>
          <Burger />
        </Modal>
        <Modal modal={modalFullScreenVideo}>
          <FullScreenVideo />
        </Modal>
        <Modal modal={modalEmail}>
          <Email />
        </Modal>
        <Modal modal={modalCreateAccount}>
          <CreateAccount />
        </Modal>
        <Modal modal={modalShareVideo}>
          <ShareVideo />
        </Modal>
        <Modal modal={modalOrder}>
          <Order />
        </Modal>

        {windowWidth > 1025 ? (
          <>
            <Modal modal={modalCookies}>
              <Cookies />
            </Modal>
            <MainDesk>{children}</MainDesk>
          </>
        ) : (
          <MainMob>{children}</MainMob>
        )}
      </div>
      <script src="/libs/sharer.min.js"></script>
    </MainContext.Provider>
  );
};

export default LayoutMain;
