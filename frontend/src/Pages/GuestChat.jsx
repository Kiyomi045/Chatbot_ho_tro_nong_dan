import useDarkMode from "~/hooks/useDarkMode";

import ChatHeader from "~/Components/Chat/ChatHeader";
import ChatWelcome from "~/Components/Chat/ChatWelcome";
import SuggestionCard from "~/Components/Chat/SuggestionCard";
import GuestSidebar from "~/Components/Chat/GuestSidebar";
import { useState } from "react";

function GuestChat() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="lg:grid lg:grid-cols-[287px_1fr] h-auto  dark:bg-black dark:text-white">
      <div className={`${openSidebar ? "block" : "hidden"} lg:block`}>
        <div
          class="fixed inset-0 z-1 bg-gray-800/20 lg:hidden"
          aria-hidden="true"
        ></div>
        <GuestSidebar
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
      </div>
      <div className="h-screen flex flex-col ">
        <ChatHeader
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="mx-3 min-h-0 flex-1">
          <div className="moc-scroll h-full ">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <ChatWelcome />
              <SuggestionCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestChat;
