import { useContext } from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";
import { CursorContext } from "../context/CursorContext";

export default function Socials() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li>
          <a href="http://facebook.com" target="_blank" rel="noreferrer">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="http://twitter.com" target="_blank" rel="noreferrer">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="http://pinterest.com" target="_blank" rel="noreferrer">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="http://instagram.com" target="_blank" rel="noreferrer">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="http://youtube.com" target="_blank" rel="noreferrer">
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
}
