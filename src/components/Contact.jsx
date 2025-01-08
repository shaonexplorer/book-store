import map from "./../assets/contact/map.png";

function Contact() {
  return (
    <div className="w-screen sm:w-[1192px] h-[740px] sm:h-[467px] flex flex-col sm:flex-row gap-[60px] mx-auto">
      {/* text */}
      <div className="sm:w-[554px] px-[16px] sm:px-0 flex flex-col gap-[24px] justify-between font-inter">
        <h1 className="text-[24px] sm:text-[38px] text-[#382C2C] font-semibold">
          Did you know us?
        </h1>
        <p className="text-[14px] sm:text-[16px] leading-[24px] text-[#4D4C4C]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ex
          sequi officiis, reiciendis natus iure voluptates, amet odit aperiam
          excepturi mollitia minus? Laboriosam, nostrum reprehenderit id minima
          voluptatum at quod!
        </p>
        <input
          type="text"
          placeholder="Your name"
          className="w-full py-2  placeholder:text-[#937DC2] placeholder:text-opacity-[40%] text-[16px] border-b border-[#937DC2] border-opacity-[40%] focus:outline-none"
        ></input>
        <input
          type="text"
          placeholder="Your e-mail"
          className="w-full py-2  placeholder:text-[#937DC2] placeholder:text-opacity-[40%] text-[16px] border-b border-[#937DC2] border-opacity-[40%] focus:outline-none"
        ></input>
        <button className="w-full bg-[#937DC2] px-[30px] py-[12px] text-[16px] font-inter text-white rounded-[3px]">
          Subscribe
        </button>
      </div>

      {/* map */}
      <img src={map} className="w-[567px] h-[466px] object-cover"></img>
    </div>
  );
}

export default Contact;
