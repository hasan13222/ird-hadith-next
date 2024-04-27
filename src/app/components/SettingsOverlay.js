import crossSvg from "@/images/cross.svg";
import Image from "next/image";
const SettingsOverlay = ({setSettingsOverlay, settingsOverlay}) => {
  return (
    <>
      <div className={`${settingsOverlay ? 'block' : 'hidden'} settings_overlay_wrapper z-50 fixed w-full h-lvh bg-[rgba(0,0,0,0.5)] left-0 top-0`}>
        <div className="bg-white w-[345px] ml-auto h-full overflow-y-auto overflow-x-hidden pr-[5px]">
        <div className="settings w-[340px] bg-white p-6">
          <div className="settings_top flex justify-between items-center mb-8">
            <p className="text-2xl font-medium">সেটিংস</p>
            <Image onClick={() => setSettingsOverlay(false)} src={crossSvg} alt="cross" width={30} height={30} />
          </div>
          <div className="arabic_fonts">
            <p className="my-2 text-base text-black font-medium">
              আরবি ফন্ট সিলেক্ট করুন
            </p>
            <select
              className="w-full focus:outline-0 p-3 border rounded-lg"
              name="arabic_fonts"
              id=""
            >
              <option defaultValue="kgfq" value="kgfq">
                KGFQ
              </option>
              <option defaultValue="arbi" value="arbi">
                arbi
              </option>
              <option defaultValue="amri" value="amri">
                amri
              </option>
            </select>
          </div>
          <div className="arabic_font_size mt-6">
            <p className="my-2 text-base text-black font-medium">
              এরাবিক ফন্ট সাইজ
            </p>
            <div className="range flex items-center justify-between gap-5">
              <input
                type="range"
                min="18"
                max="40"
                style={{ backgroundSize: "18.183% 100%" }}
                defaultValue="22"
              />
              <span>২২</span>
            </div>
          </div>
          <div className="arabic_font_size mt-6">
            <p className="my-2 text-base text-black font-medium">
              অনুবাদ ফন্ট সাইজ
            </p>
            <div className="range flex items-center justify-between gap-5">
              <input
                type="range"
                min="18"
                max="40"
                style={{ backgroundSize: "18.183% 100%" }}
                defaultValue="22"
              />
              <span>২২</span>
            </div>
          </div>
          <div className="night_mode my-4">
            <div className="flex items-center justify-between gap-5">
              <p className="my-2 text-base text-black font-medium">নাইট মোড</p>
              <button className="mode w-11 relative h-5 rounded-2xl bg-gray-100"></button>
            </div>
          </div>
          <div className="sadakah my-5 bg-primary text-white rounded-lg p-5">
            <h3 className="text-2xl">আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h3>
            <p className="my-4 text-gray-300">আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।</p>
            <div className="button text-center">
                <button className="bg-white text-primary py-3 px-7 rounded-lg text-base font-medium">সাপোর্ট করুন</button>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default SettingsOverlay;
