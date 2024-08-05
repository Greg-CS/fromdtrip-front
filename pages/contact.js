import { ContactMe } from "../components/ContactMe/ContactMe"

export default function ContactPage() {
    return (
      <div className="p-5 bg-[#07100B]">
        <div className="grid lg:flex p-5 bg-[#1F3C2A] border-2 border-[#365D4A] rounded-2xl">
          <div className="w-auto lg:w-6/12">
            <div>
              <h1 className="mb-6 text-4xl font-bold text-center text-[#71948D]">
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