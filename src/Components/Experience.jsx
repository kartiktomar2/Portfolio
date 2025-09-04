import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div
      id="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      {/* Heading stays static */}
      <h1 className="text-3xl font-bold mb-5">Experience</h1>

      {/* Animated content on scroll / navbar jump */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} 
        // once:false → triggers every time it comes into view
        // amount:0.2 → triggers when 20% of it is visible
      >
        <p>
          <span className="font-semibold">
            Frontend Web Developer Intern at{" "}
            <a
              href="https://salesqueen.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Salesqueen Software Solutions
            </a>
          </span>{" "}
          (March 2025 - June 2025)
        </p>

        {/* Animate list items one by one */}
        <ul className="list-disc ml-5 mt-2 space-y-2">
          {[
            "Collaborated with the UI/UX team to identify and resolve user interface issues in live web applications.",
            "Diagnosed and fixed layout bugs documented in internal reports, ensuring consistent and responsive designs.",
            "Improved usability and visual appeal of client websites aligned with user experience best practices.",
          ].map((text, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {text}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <hr className="mt-10" />
    </div>
  );
}

export default Experience;
