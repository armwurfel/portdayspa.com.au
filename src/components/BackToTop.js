import React from 'react';
import { MdExpandLess } from 'react-icons/md';
import ScrollToTop from 'react-scroll-up';

const BackToTop = () => (
  <div className="fixed inset-0 max-w-6xl mx-auto pointer-events-none w-full z-50">
    <div className="absolute bottom-0 mb-8 mr-4 xl:-mr-12 pointer-events-auto right-0 text-3xl z-50">
      <ScrollToTop
        showUnder={160}
        style={{
          position: `relative`,
          bottom: `auto`,
          right: `auto`,
          cursor: `pointer`,
          transition: `opacity 0.2s linear 0s, visibility`,
          opacity: 1,
          visibility: `visible`,
        }}
      >
        <div className="bg-gray-800 flex h-8 items-center justify-center rounded-full text-white w-8">
          <MdExpandLess className="text-white" />
        </div>
      </ScrollToTop>
    </div>
  </div>
);

export default BackToTop;
