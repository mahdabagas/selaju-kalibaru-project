import React from "react";
import SectionLayout from "@/components/layouts/SectionLayout";
import TitleSection from "@/components/organisms/TitleSection";
import { TIMELINE_FESTIVAL_KOPI } from "@/constants";
import { FiMapPin } from "react-icons/fi";

const TimelineFestival = () => {
  return (
    <SectionLayout>
      <TitleSection title="Timeline Event" subtitle="Rangkain kegiatan event" />
      <div className="mt-8 gap-4 lg:flex">
        {TIMELINE_FESTIVAL_KOPI.map((timeline, idx) => (
          <div
            key={idx}
            className="p-2 lg:w-1/3 lg:rounded-xl lg:border-2 lg:border-primary"
          >
            {/* Date */}
            <div className="mb-2 ps-2 first:mt-0">
              <h3 className="text-lg font-semibold uppercase text-primary">
                {timeline.date}
              </h3>
            </div>
            {/* Content */}
            {timeline.activity.map((activity, idx) => (
              <div key={activity.location + idx} className="pl-4">
                {/* Location */}
                <div className="mb-1 flex items-center gap-x-3 pt-1 font-medium">
                  <FiMapPin className="size-7 p-1 text-slate-600" />
                  {activity.location}
                </div>
                {/* Events */}
                {activity.events.map((event, idx) => (
                  <div className="flex gap-x-3" key={event + idx}>
                    {/* Icon */}
                    <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden">
                      <div className="relative z-10 flex size-7 items-center justify-center">
                        <div className="size-2 rounded-full bg-gray-400" />
                      </div>
                    </div>
                    {/* Name Event */}
                    <div className="grow pb-2 pt-0.5">
                      <h3 className="flex gap-x-1.5 text-gray-800">{event}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default TimelineFestival;
