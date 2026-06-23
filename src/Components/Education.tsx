import { IconSchool, IconCalendar, IconMapPin } from "@tabler/icons-react";
import { EducationInfo } from "../User";

const Education = () => {
    return (
        <div className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono" id="Education">
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
                <span className="text-primaryColor">03.&nbsp;</span>Education
            </h1>

            <div className="relative">
                {/* Vertical spine line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primaryColor opacity-20 -translate-x-1/2 sm-mx:hidden" />

                <div className="flex flex-col gap-10">
                    {EducationInfo.map((item, index) => (
                        <div
                            key={index}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-duration="800"
                            className={`flex items-start gap-6 sm-mx:gap-3 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} sm-mx:flex-row`}
                        >
                            {/* Card — takes ~45% width on desktop */}
                            <div className="w-[45%] sm-mx:w-full border border-primaryColor shadow-[0_0_12px_0_#64FFDA30] hover:-translate-y-2 transition-transform duration-300 ease-in-out rounded-2xl p-5 sm-mx:p-3 flex flex-col gap-3 bg-[#0A192F]">
                                {/* Header row */}
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 sm-mx:w-8 sm-mx:h-8 rounded-xl bg-primaryColor bg-opacity-10 border border-primaryColor border-opacity-30 flex items-center justify-center">
                                        <IconSchool className="text-primaryColor" size={20} />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <div className="text-white text-xl font-semibold sm-mx:text-base xs-mx:text-sm leading-tight">
                                            {item.degree}
                                        </div>
                                        <div className="text-primaryColor font-semibold text-base sm-mx:text-sm xs-mx:text-xs">
                                            {item.institution}
                                        </div>
                                    </div>
                                </div>

                                {/* Meta row */}
                                <div className="flex flex-wrap gap-3 text-textColor text-sm sm-mx:text-xs">
                                    <span className="flex items-center gap-1">
                                        <IconCalendar size={14} className="text-primaryColor opacity-70" />
                                        {item.date}
                                    </span>
                                    {item.location && (
                                        <span className="flex items-center gap-1">
                                            <IconMapPin size={14} className="text-primaryColor opacity-70" />
                                            {item.location}
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                {item.desc && (
                                    <p className="text-textColor text-sm sm-mx:text-xs leading-6 text-justify">
                                        {item.desc}
                                    </p>
                                )}

                                {/* GPA / grade badge */}
                                {/* {item.grade && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-textColor text-xs font-medium uppercase tracking-widest opacity-60">Grade</span>
                                        <span className="text-primaryColor font-bold text-sm border border-primaryColor border-opacity-40 rounded-md px-2 py-0.5">
                                            {item.grade}
                                        </span>
                                    </div>
                                )} */}

                                {/* Skills */}
                                {item.skills && item.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="text-xs text-primaryColor border border-primaryColor border-opacity-30 rounded-full px-2.5 py-0.5 bg-primaryColor bg-opacity-5"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Centre dot (hidden on mobile) */}
                            <div className="flex-shrink-0 w-[10%] flex justify-center items-start pt-5 sm-mx:hidden">
                                <div className="w-4 h-4 rounded-full bg-bgColor border-2 border-primaryColor shadow-[0_0_8px_2px_#64FFDA60]" />
                            </div>

                            {/* Year label on the opposite side */}
                            <div className={`w-[45%] sm-mx:hidden flex ${index % 2 === 0 ? "justify-start" : "justify-end"} items-start pt-4`}>
                                <span className="text-primaryColor font-bold text-5xl opacity-10 select-none leading-none">
                                    {item.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;