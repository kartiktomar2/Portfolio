import React from 'react';
import book from '/books.jpg';
import chatapp from '/ChatAppLogo.webp';
import { Link } from 'react-router-dom';
import NotLive from './NotLive';
import { motion } from 'motion/react';

function Portfolio() {
    const cardItem = [
        {
            id: 2,
            logo: chatapp,
            name: "Let's Chat",
            source: "https://github.com/kartiktomar2/LetsChat1",
            info: "Chat application using MERN Stack",
            live: "https://letschat2.onrender.com/"
        },
        {
            id: 1,
            logo: book,
            name: "Book Store",
            source: "https://github.com/kartiktomar2/Book_Store",
            info: "Made Book store using MERN Stack",
            live: ""
        },
    ];

    return (
        <div
            name="Projects"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
        >
            <div>
                <h1 className="text-3xl font-bold mb-5">Projects</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
                    {cardItem.map(({ id, logo, name, source, info, live }, index) => (
                        <motion.div
                            key={id}
                            className="w-full sm:w-auto border-2 rounded-lg p-3 md:p-4 cursor-pointer hover:scale-105 hover:shadow-[0px_8px_20px_rgba(113,39,186,0.5)] duration-300    border-gradient-to-tr
    from-[#1A0B2E]
    via-[#7127BA]
    to-[#070010]
    shadow-[0_4px_32px_rgba(113,39,186,0.25)]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* Project Logo */}
                            <div className="flex items-center justify-center my-2">
                                <img
                                    src={logo}
                                    alt="project_logo"
                                    className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] p-1 rounded-full border-2 object-fill"
                                />
                            </div>
                            {/* Project Info */}
                            <div>
                                <div className="font-bold text-xl mb-2 px-2 text-center">
                                    {name}
                                </div>
                                <p className="px-2 text-gray-300">{info}</p>
                            </div>
                            {/* Links */}
                            <div className="mx-2 my-3 flex flex-col justify-center text-center">
                                <a
                                    href={source}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-bold px-4 py-2 rounded border border-white hover:scale-105 my-2 transition-transform"
                                >
                                    Source Code
                                </a>
                                {live.trim() === "" ? (
                                    <Link
                                        to="/notLive"
                                        className="font-bold px-4 py-2 rounded border border-white hover:scale-105 transition-transform"
                                    >
                                        Live Link
                                    </Link>
                                ) : (
                                    <a
                                        href={live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-bold px-4 py-2 rounded border border-white hover:scale-105 transition-transform"
                                    >
                                        Live Link
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <hr className="mt-20" />
        </div>
    );
}

export default Portfolio;
