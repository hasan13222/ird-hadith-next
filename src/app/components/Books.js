'use client'
import { Fragment, useEffect, useState } from "react";

const Books =  () => {
    const [books, setBooks] = useState([])

  const engToBdNum = (str) => {
    let banglaNumber = {
      0: "০",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
    };
    for (var x in banglaNumber) {
      str = str.replace(new RegExp(x, "g"), banglaNumber[x]);
    }
    return str;
  };

  useEffect(() => {
    fetch('https://ird-hadith-server.vercel.app/books')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])
  return (
    <>
      <ul>
        {books.map((book) => (
          <Fragment key={book.id}>
            <li className="rounded-xl px-4 py-4 hover:bg-green-100 bg-[#ebfcf6] mb-4">
              <a href="#" className="flex gap-4 items-center">
                <div className="number relative">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {book.abvr_code}
                  </span>
                  <svg
                    className="fill-[#f1f5f4] hover:fill-primary false"
                    width="40"
                    height="46"
                    viewBox="0 0 56 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </div>
                <div className="heading_desc">
                  <h6 className="text-base font-medium text-black mb-2">
                    {book.title}
                  </h6>
                  <p className="text-sm text-[#40404099] font-medium">
                    সর্বমোট হাদীস - {engToBdNum(book.number_of_hadis+"")}
                  </p>
                </div>
              </a>
            </li>
          </Fragment>
        ))}
      </ul>
    </>
  );
};

export default Books;
