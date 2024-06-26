'use client'
import { useState } from "react";
import Books from "./Books";
import Chapters from "./Chapters";

const BookChpHeading = () => {
    const [bookActive, setBookActive] = useState(false);
    console.log(bookActive)
  return (
    <>
        
        <div className="book_chapter h-full bg-white rounded-2xl">
            <div className="heading flex w-[350px] border-b">
              <h6
                onClick={() => setBookActive(true)}
                className={`${
                  bookActive ? "bg-primary text-white" : ""
                } text-center text-xl text-black w-1/2 py-3 rounded-ss-lg cursor-pointer`}
              >
                বই
              </h6>
              <h6
                onClick={() => setBookActive(false)}
                className={`${
                  bookActive ? "" : "bg-primary text-white"
                } text-center text-xl text-black w-1/2 py-3 rounded-se-lg cursor-pointer`}
              >
                অধ্যায়
              </h6>
            </div>
            <div className="heading_btm h-full p-4">
              <div className="search_box border-2 border-none mt-2 mb-4 w-full bg-gray-100 rounded-lg h-[52px] flex items-center">
                <form className="flex items-center">
                  <div className="search_icon mx-3">
                    <svg
                      className="fill-[#5C5C5C] dark:fill-white lg-min:absolute left-4 top-[1.1rem]"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.8174 13.9331L11.0867 10.2025C12.1034 8.95911 12.6032 7.37254 12.4829 5.77096C12.3625 4.16938 11.6312 2.67532 10.4402 1.59781C9.2492 0.520305 7.68959 -0.0582065 6.084 -0.0180617C4.47841 0.0220832 2.94966 0.677813 1.81398 1.81349C0.678301 2.94918 0.0225715 4.47792 -0.0175734 6.08351C-0.0577183 7.68911 0.520793 9.24871 1.5983 10.4397C2.67581 11.6307 4.16987 12.3621 5.77145 12.4824C7.37303 12.6027 8.9596 12.1029 10.203 11.0862L13.9336 14.8169C14.0515 14.9307 14.2094 14.9937 14.3732 14.9923C14.5371 14.9909 14.6939 14.9251 14.8097 14.8092C14.9256 14.6934 14.9913 14.5366 14.9928 14.3727C14.9942 14.2089 14.9312 14.051 14.8174 13.9331ZM6.25047 11.25C5.26157 11.25 4.29487 10.9567 3.47262 10.4073C2.65038 9.85793 2.00951 9.07703 1.63108 8.1634C1.25264 7.24977 1.15362 6.24444 1.34655 5.27453C1.53947 4.30463 2.01568 3.41371 2.71494 2.71445C3.4142 2.01519 4.30512 1.53899 5.27502 1.34606C6.24493 1.15313 7.25026 1.25215 8.16389 1.63059C9.07752 2.00903 9.85842 2.64989 10.4078 3.47213C10.9572 4.29438 11.2505 5.26108 11.2505 6.24999C11.249 7.57561 10.7217 8.84652 9.78436 9.78388C8.847 10.7212 7.5761 11.2485 6.25047 11.25Z"></path>
                    </svg>
                  </div>
                  <input
                    className="font-sans placeholder:font-sans focus:outline-0 bg-transparent"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search Hadith"
                  />
                </form>
              </div>
              <div
                className={`books overflow-auto ${bookActive ? "" : "hidden"}`}
              >
                <Books/>
              </div>
              <div
                className={`chapters overflow-auto ${
                  bookActive ? "hidden" : ""
                }`}
              >

                <Chapters/>
              </div>
            </div>
          </div>
    </>
  )
}

export default BookChpHeading