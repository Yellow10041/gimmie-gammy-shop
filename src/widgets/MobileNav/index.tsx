import clsx from "clsx";
import styles from "./index.module.scss";
import ButtonMobileNav from "@/components/buttons/ButtonMobileNav";
import IconFlash from "@/public/img/icons/flash";
import IconEye from "@/public/img/icons/eye";
import IconProfile from "@/public/img/icons/profile";
import Image from "next/image";

import Avatar from "@/public/img/test/avatars/1.jpg";
import ButtonBuy from "@/components/buttons/ButtonBuy";

interface IMobileNavProps {}

const MobileNav: React.FunctionComponent<IMobileNavProps> = (props) => {
  return (
    <div className={clsx(styles.MobileNav)}>
      <ButtonMobileNav icon={<IconFlash />} />
      <ButtonMobileNav icon={<IconEye />} />
      <ButtonBuy title="Buy" />
      <ButtonMobileNav icon={<IconProfile />} />
      <div className={clsx(styles.MobileNav_profile)}>
        <div className={clsx(styles.MobileNav_profile_avatar)}>
          <Image src={Avatar} alt="avatar" width={55} height={55} />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
