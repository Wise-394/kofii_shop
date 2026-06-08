import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export function Footer() {
  return (
    <footer
      className="flex flex-row items-center px-3 py-5 bg-brown-500 text-white
        justify-between"
    >
      <a href="https://jrdumlao.com">jrdumlao.com</a>
      <div className="flex gap-4 items-center justify-center text-lg">
        <FaGithub />
        <FaLinkedin />
        <FaYoutube />
      </div>
    </footer>
  );
}
