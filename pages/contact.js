import { ContactMe } from "../components/ContactMe/ContactMe"

export default function ContactPage() {
    return (
      <div
        className="p-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(53,80,112,1) 0%, rgba(0,0,0,1) 50%)",
        }}
      >
        <div className="grid lg:flex p-5 bg-[#EAAC8B] rounded-2xl">
          <div className="w-auto lg:w-6/12">
            <div>
              <h1 className="mb-6 text-4xl font-bold text-center text-[#E56B6F]">
                Contact Us
              </h1>
            </div>
            <div className="m-10">
              <ContactMe />
            </div>
          </div>
          <div className="w-auto lg:w-6/12">
            <img
              src="/img/Hero_img.png"
              alt="Contact page right image"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    );
}