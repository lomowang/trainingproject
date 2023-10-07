import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="bg-black h-screen  flex flex-col justify-center items-center">
      <div className="flex space-x-1  ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:opacity-50"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 transition focus-visible:outline`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0   bg-white"
                style={{
                  borderRadius: 9999,
                }}
                // 增加彈簧效果
                transition={{ type: "spring", duration: 5 }}
              />
            )}

            <span className="relative z-10 mix-blend-exclusion">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
