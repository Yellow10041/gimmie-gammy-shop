import { useClickAway } from "@uidotdev/usehooks";
import clsx from "clsx";
import gsap from "gsap";
import { FC, MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import styles from "./index.module.scss";
import { IconArrowSmall } from "@/public/img/icons/arrow-small";

export type SelectItem = { title: string; value: string };

interface ISelect {
  items: { label: string; value: string }[];
  onDataChange: (data: string) => void;
  clearTrigger: boolean;
}

export const Select: FC<ISelect> = ({ items, onDataChange, clearTrigger }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("");

  const itemsSearch = useMemo(() => {
    return items.filter((item) => item.label.includes(searchValue));
  }, [searchValue]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAnimation, setAnimation] = useState<boolean>(false);
  const [isMounted, setMounted] = useState<boolean>(false);
  const [indexActiveElem, setIndexActiveElem] = useState<number>(0);

  const refClick: MutableRefObject<Element | null> = useClickAway(() => {
    setIsOpen(false);
  });

  const refSelect = useRef<HTMLDivElement>(null);
  const refInput = useRef<HTMLInputElement>(null);

  const handleOpen = () => {
    if (!isAnimation) {
      setIsOpen((prev) => !prev);
    }
  };

  const animSelect = (isOpen: boolean) => {
    if (isOpen) {
      gsap.fromTo(
        refSelect.current,
        { opacity: 0, y: 10 },
        {
          duration: 0.5,
          opacity: 1,
          y: 0,
          onStart: () => {
            setAnimation(true);
          },
          onComplete: () => {
            setAnimation(false);
          },
        }
      );
    } else {
      gsap.to(refSelect.current, {
        duration: 0.5,
        opacity: 0,
        y: 10,
        onStart: () => {
          setAnimation(true);
        },
        onComplete: () => {
          setAnimation(false);
        },
      });
    }
  };

  useEffect(() => {
    animSelect(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (refInput.current) refInput.current.value = selectValue;
  }, [selectValue]);

  useEffect(() => {
    setSearchValue("");
  }, [clearTrigger]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // для плавної прокрутки
    });
  };

  return (
    <div className={clsx(styles.Select)} ref={(ref) => (refClick.current = ref as Element)}>
      <div className={clsx(styles.Select_header)} onClick={handleOpen}>
        <div className={clsx(styles.Select_header_title)}>
          {/* <div className={clsx(styles.Select_header_title_icon)}>
            <IconBed />
          </div> */}
          <input
            className={clsx(styles.Select_header_title_text)}
            onBlur={scrollToTop}
            type="text"
            name="country"
            placeholder="Choose your country"
            onChange={(e) => setSearchValue(e.target.value)}
            ref={refInput}
          />
        </div>
        <div className={clsx(styles.Select_header_icon, isOpen && styles.active)}>
          <IconArrowSmall />
        </div>
      </div>

      {isMounted &&
        createPortal(
          <CSSTransition in={isOpen} timeout={500} unmountOnExit mountOnEnter>
            <div className={clsx(styles.Select_menu)} ref={refSelect}>
              <div className={clsx(styles.Select_menu_inner)} ref={refSelect}>
                {itemsSearch.map((e, i) => (
                  <div
                    className={clsx(styles.Select_menu_item, indexActiveElem === i && styles.active)}
                    onClick={() => {
                      handleOpen();
                      setIndexActiveElem(i);
                      onDataChange(e.label as string);
                      setSelectValue(e.label);
                    }}
                    key={i}
                  >
                    {e.label}
                  </div>
                ))}
              </div>
            </div>
          </CSSTransition>,
          refClick.current ? refClick.current : document.body
        )}
    </div>
  );
};
