import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Plus } from "lucide-react";

const socialLinks = [
  {
    name: "YouTube",
    icon: AiOutlineYoutube,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    icon: FiTwitter,
  },
];

const footerSections = [
  {
    title: "Platform",
    links: ["Movies", "Genres", "Pricing", "About"],
  },
  {
    title: "For Filmmakers",
    links: ["Become a Filmmaker", "Creator Dashboard", "Resources"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact", "Privacy", "Terms"],
  },
];

export default function Footer() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <h1 className="text-2xl font-black">African</h1>

              <Plus size={15} color="#f8bf4b" strokeWidth={5} />
            </div>

            <p className="text-sm text-gray-500">The home of African cinema.</p>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <div
                    key={social.name}
                    className="group cursor-pointer rounded-md bg-primary/20 p-1 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:bg-primary/30 hover:text-primary hover:shadow-[0_6px_20px_rgba(248,191,75,0.15)]"
                  >
                    <Icon
                      size={15}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h1 className="font-bold">{section.title}</h1>

              <ul className="space-y-2 text-sm text-gray-500">
                {section.links.map((link) => (
                  <li key={link} className="hover:text-primary cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl  mx-auto flex justify-between items-center text-xs text-gray-500 border-y border-gray-100/10 p-4">
        <p>© 2026 African+. All rights reserved.</p>
        <p>Africa, on screen.</p>
      </div>
    </>
  );
}
