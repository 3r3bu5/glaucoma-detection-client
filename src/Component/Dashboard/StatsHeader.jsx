import React from "react";

// components

import CardStats from "./Card/StatsCard";

export default function HeaderStats({patientsLength,credits}) {
  return (
    <>
      {/* Header */}
      <div className="relative bg-moody-blue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="PATIENTS"
                  statTitle={patientsLength}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="REMAINING CREDITS"
                  statTitle={credits}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="REMAINING SCANS"
                  statTitle={credits}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
