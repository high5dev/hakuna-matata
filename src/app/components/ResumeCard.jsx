import React from "react";
import { motion, useInView } from "framer-motion";

const ResumeCard = ({ title, company, location, start, end, description, techniques }) => {
    return (
        <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg text-white">
            <div className="px-4 py-6">
                <h5 className="text-xl font-semibold mb-2 inline">{title}</h5> at {company}, {location} | {start} - {end}
            </div>
            <div className="px-4 py-2">
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 px-4 py-2">
                {techniques.map((technique, index) => (
                    <li key={index} className="text-[#ADB7BE]">&#x2022; {technique}</li>
                ))}
            </div>
        </div>
    );
};

export default ResumeCard;
