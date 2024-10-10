"use client";
import { useEffect } from "react";

export default function Face() {
  useEffect(() => {
    function eyeball(event: MouseEvent) {
      const eye = document.querySelectorAll(
        "#eye i"
      ) as NodeListOf<HTMLElement>;
      eye.forEach(function (eye) {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rot = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = "rotate(" + rot + "deg)";
      });
    }

    const handleMouseMove = (event: Event) => {
      eyeball(event as MouseEvent);
    };

    document
      .querySelector("#body")
      ?.addEventListener("mousemove", handleMouseMove);

    return () => {
      document
        .querySelector("#body")
        ?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="body"
      className="flex justify-center items-center w-[200px] h-[200px]"
    >
      <div className="relative w-[160px] h-[200px] shadow-eyes-shadow overflow-hidden">
        <div
          id="hair"
          className="absolute z-[20] bottom-[140px] left-[50%] translate-x-[-50%] w-[60px] h-[20px] bg-black rounded-tl-[40px] rounded-tr-[40px]"
        ></div>
        <div
          id="bottom"
          className="absolute w-[128px] h-[72px] bottom-0 left-[50%] bg-eyered translate-x-[-50%] rounded-tl-[60px] rounded-tr-[60px] z-[9] overflow-hidden before:content-[''] before:absolute before:top-[32px] before:left-[39px] before:w-[8px] before:h-[8px] before:bg-white before:z-[1] before:rounded-[50%] after:content-[''] after:absolute after:top-[32px] after:right-[39px] after:w-[8px] after:h-[8px] after:bg-white after:z-[1] after:rounded-[50%]"
        >
          <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[72px] h-[40px] rounded-tl-[16px] bg-eyeblue rounded-tr-[16px] before:content-[''] before:absolute before:top-[-36px] before:left-[4px] before:w-[12px] before:h-[40px] before:bg-eyeblue before:rotate-[345deg] after:content-[''] after:absolute after:top-[-36px] after:right-[4px] after:w-[12px] after:h-[40px] after:bg-eyeblue after:rotate-[15deg]"></span>
        </div>
        <div>
          <div
            id="neck"
            className="absolute bottom-[56px] left-[50%] translate-x-[-50%] w-[28px] h-[40px] bg-skin z-[10] rounded-bl-[16px] rounded-br-[16px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[75%] before:bg-skin-shadow"
          ></div>
          <div
            id="face"
            className="absolute top-[48px] left-[50%] translate-x-[-50%] w-[64px] h-[72px] bg-skin z-[12] rounded-[50%] rounded-tl-[30%] rounded-tr-[30%] group cursor-pointer"
          >
            <div
              id="eyes"
              className="absolute flex justify-between w-[65%] items-center top-[20px] translate-x-[-50%] left-[50%]"
            >
              <span
                id="eye"
                className="relative w-[18px] h-[18px] before:content-[''] before:absolute before:top-[-3px] before:left-0 before:w-full before:h-[50%] before:bg-transparent before:rounded-[50%] before:shadow-eyebrush"
              >
                <i className="absolute left-0 bottom-0 w-full h-full flex items-center justify-center bg-white rounded-[50%] before:content-[''] before:absolute before:w-[3px] before:h-[3px] before:bg-eyeblack before:rounded-[50%] before:shadow-eye-shadow before:translate-x-[-4px] before:translate-y-[1px]"></i>
              </span>
              <span
                id="eye"
                className="relative w-[18px] h-[18px] before:content-[''] before:absolute before:top-[-3px] before:left-0 before:w-full before:h-[50%] before:bg-transparent before:rounded-[50%] before:shadow-eyebrush"
              >
                <i className="absolute left-0 bottom-0 w-full h-full flex items-center justify-center bg-white rounded-[50%] before:content-[''] before:absolute before:w-[3px] before:h-[3px] before:bg-eyeblack before:rounded-[50%] before:shadow-eye-shadow before:translate-x-[-4px] before:translate-y-[1px]"></i>
              </span>
            </div>
            <div
              id="mouth"
              className="absolute w-[24px] h-[12px] bottom-[12px] left-[50%] transition-all duration-500 bg-mouth translate-x-[-50%] rounded-bl-[12px] rounded-br-[12px] shadow-mouth-shadow group-hover:h-[6px] group-hover:w-[28px] group-hover:bottom-[16px] group-hover:rounded-[4px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
