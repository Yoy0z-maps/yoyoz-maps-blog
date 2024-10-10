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
      className="flex justify-center items-center min-h-[100vh] bg-eyebackground"
    >
      <div className="relative w-[400px] h-[500px] bg-white m-[40px] shadow-eyes-shadow overflow-hidden">
        <div
          id="hair"
          className="absolute z-[20] bottom-[350px] left-[50%] translate-x-[-50%] w-[150px] h-[50px] bg-black rounded-tl-[100px] rounded-tr-[100px]"
        ></div>
        <div
          id="bottom"
          className="absolute w-[320px] h-[180px] bottom-0 left-[50%] bg-eyered translate-x-[-50%] rounded-tl-[150px] rounded-tr-[150px] z-[9] overflow-hidden before:content-[''] before:absolute before:top-[80px] before:left-[97px] before:w-[20px] before:h-[20px] before:bg-white before:z-[1] before:rounded-[50%] after:content-[''] after:absolute after:top-[80px] after:right-[97px] after:w-[20px] after:h-[20px] after:bg-white after:z-[1] after:rounded-[50%]"
        >
          <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[180px] h-[100px] rounded-tl-[40px] bg-eyeblue rounded-tr-[40px] before:content-[''] before:absolute before:top-[-90px] before:left-[10px] before:w-[30px] before:h-[100px] before:bg-eyeblue before:rotate-[345deg] after:content-[''] after:absolute after:top-[-90px] after:right-[10px] after:w-[30px] after:h-[100px] after:bg-eyeblue after:rotate-[15deg]"></span>
        </div>
        <div>
          <div
            id="neck"
            className="absolute bottom-[140px] left-[50%] translate-x-[-50%] w-[70px] h-[100px] bg-skin z-[10] rounded-bl-[40px] rounded-br-[40px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[75%] before:bg-skin-shadow"
          ></div>
          <div
            id="face"
            className="absolute top-[120px] left-[50%] translate-x-[-50%] w-[160px] h-[180px] bg-skin z-[12] rounded-[50%] rounded-tl-[30%] rounded-tr-[30%] group cursor-pointer"
          >
            <div
              id="eyes"
              className="absolute flex justify-between w-[65%] items-center top-[50px] translate-x-[-50%] left-[50%]"
            >
              <span
                id="eye"
                className="relative w-[45px] h-[45px] before:content-[''] before:absolute before:top-[-8px] before:left-0 before:w-full before:h-[50%] before:bg-transparent before:rounded-[50%] before:shadow-eyebrush"
              >
                <i className="absolute left-0 bottom-0 w-full h-full flex items-center justify-center bg-white rounded-[50%] before:content-[''] before:absolute before:w-[8px] before:h-[8px] before:bg-eyeblack before:rounded-[50%] before:shadow-eye-shadow before:translate-x-[-10px] before:translate-y-[2px]"></i>
              </span>
              <span
                id="eye"
                className="relative w-[45px] h-[45px] before:content-[''] before:absolute before:top-[-8px] before:left-0 before:w-full before:h-[50%] before:bg-transparent before:rounded-[50%] before:shadow-eyebrush"
              >
                <i className="absolute left-0 bottom-0 w-full h-full flex items-center justify-center bg-white rounded-[50%] before:content-[''] before:absolute before:w-[8px] before:h-[8px] before:bg-eyeblack before:rounded-[50%] before:shadow-eye-shadow before:translate-x-[-10px] before:translate-y-[2px]"></i>
              </span>
            </div>
            <div
              id="mouth"
              className="absolute w-[60px] h-[30px] bottom-[30px] left-[50%] transition-all duration-500 bg-mouth translate-x-[-50%] rounded-bl-[30px] rounded-br-[30px] shadow-mouth-shadow group-hover:h-[15px] group-hover:w-[70px] group-hover:bottom-[40px] group-hover:rounded-[10px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
