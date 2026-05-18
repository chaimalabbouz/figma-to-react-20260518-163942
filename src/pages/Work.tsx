import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function Work() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;
      const designWidth = 1920;
      const newScale = Math.min(1, screenWidth / designWidth);
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div
      className="w-full overflow-x-hidden flex justify-center bg-[#ffffff]"
      style={{ minHeight: `${3670 * scale}px` }}
    >
      <div
        className="relative flex-shrink-0"
        style={{
          width: `1920px`,
          height: `3670px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
        <div id="figma-401-2001"><Header wORK="WORK" contact="Contact" button="Get in touch" /></div>

        {/* Section: Section Hero */}
        <div id="figma-302-607">
        <div className="flex flex-col items-center gap-[10px] pt-[64px] pb-[96px] w-full h-fit">
          <div className="flex flex-col items-center gap-[32px] w-[1800px] h-fit">
            <span className="font-['Clash Display'] text-[112px] font-semibold text-[#000000] text-center leading-[112px] tracking-[2px] uppercase w-[1800px] h-[112px]">Work</span>
          </div>
        </div>
        </div>

        {/* Section: Section Work */}
        <div id="figma-302-610">
        <div className="flex flex-col items-center gap-[48px] pb-[128px] w-[1920px] h-fit">
          <div className="flex flex-row items-center gap-[16px] w-[1824px] h-fit">
            <div className="flex flex-col gap-[16px] w-fit h-fit">
              <div className="w-[904px] h-[900px] bg-[#f0f1ef] relative border-[10px] border-[#d2f65a]">
                <img src="/src/assets/f822b9f55fcdaa0b62d3a1266db736732fbe202b.png" alt="Image" className="w-[1200px] h-[900px] object-cover absolute top-[0px] left-[-145px]" />
                <div className="flex flex-row justify-center items-center gap-[32px] px-[20px] py-[10px] w-[100px] h-[100px] bg-[#d2f65a] absolute top-[400px] left-[402px] rounded-[500px] border-[1px] border-[#ffffff]">
                  <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[36px] h-[12px]">View</span>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] w-fit h-fit">
                <span className="font-['Clash Display'] text-[24px] font-medium text-[#000000] text-left leading-[28.80000114440918px] tracking-[1px] uppercase w-[904px] h-[29px]">Vision Branding</span>
                <span className="font-['Clash Display'] text-[13px] font-medium text-[rgba(25,25,25,0.7)] text-left leading-[13px] tracking-[2px] uppercase w-[107px] h-[13px]">Logo Design</span>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] w-full h-fit flex-1">
              <div className="grid grid-cols-2 w-[904px] h-[900px] bg-[#f0f1ef]">
                <img src="/src/assets/c8cb95791b3c5d0fc4e68441b468f84db4ee4c4e.png" alt="Image" className="w-[1201px] h-[901px] object-cover" />
                <img src="/src/assets/c8cb95791b3c5d0fc4e68441b468f84db4ee4c4e.png" alt="Image" className="w-[1201px] h-[901px] object-cover" />
              </div>
              <div className="flex flex-col gap-[8px] w-full h-fit">
                <span className="font-['Clash Display'] text-[24px] font-medium text-[#000000] text-left leading-[28.80000114440918px] tracking-[1px] uppercase w-[904px] h-[29px]">Brand Studio</span>
                <span className="font-['Clash Display'] text-[13px] font-medium text-[rgba(25,25,25,0.7)] text-left leading-[13px] tracking-[2px] uppercase w-[82px] h-[13px]">Branding</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-[16px] w-[1824px] h-fit">
            <div className="flex flex-col gap-[16px] w-fit h-fit">
              <div className="w-[904px] h-[900px] bg-[#f0f1ef] relative">
                <img src="/src/assets/f681b1b3ce545d4755b5aa4bdcccb3f4347d71bd.png" alt="Image" className="w-[1200px] h-[900px] object-cover absolute top-[0px] left-[-128px]" />
              </div>
              <div className="flex flex-col gap-[8px] w-fit h-fit">
                <span className="font-['Clash Display'] text-[24px] font-medium text-[#000000] text-left leading-[28.80000114440918px] tracking-[1px] uppercase w-[904px] h-[29px]">Logo Agency</span>
                <span className="font-['Clash Display'] text-[13px] font-medium text-[rgba(25,25,25,0.7)] text-left leading-[13px] tracking-[2px] uppercase w-[114px] h-[13px]">Social Media</span>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] w-full h-fit flex-1">
              <div className="w-[904px] h-[900px] bg-[#f0f1ef] relative">
                <img src="/src/assets/3b7c007b5f38a47720bc82b1e1bb73afd9be80d3.png" alt="Image" className="w-[1200px] h-[900px] object-cover absolute top-[0px] left-[0px]" />
              </div>
              <div className="flex flex-col gap-[8px] w-full h-fit">
                <span className="font-['Clash Display'] text-[24px] font-medium text-[#000000] text-left leading-[28.80000114440918px] tracking-[1px] uppercase w-[904px] h-[29px]">Design Agency</span>
                <span className="font-['Clash Display'] text-[13px] font-medium text-[rgba(25,25,25,0.7)] text-left leading-[13px] tracking-[2px] uppercase w-[82px] h-[13px]">Branding</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Section: Section CTA */}
        <div id="figma-302-640">
        <div className="flex flex-col items-center w-[1920px] h-fit bg-[#d2f65a]">
          <div className="flex flex-col items-center w-[1920px] h-fit bg-[#d2f65a]">
            <div className="flex flex-row gap-[10px] py-[16px] w-fit h-fit">
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[168px] h-[12px]">Let’s work together</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[3px] h-[12px]">·</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[168px] h-[12px]">Let’s work together</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[3px] h-[12px]">·</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[168px] h-[12px]">Let’s work together</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[3px] h-[12px]">·</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[168px] h-[12px]">Let’s work together</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[3px] h-[12px]">·</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[168px] h-[12px]">Let’s work together</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[3px] h-[12px]">·</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[168px] h-[12px]">Let’s work together</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[3px] h-[12px]">·</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[168px] h-[12px]">Let’s work together</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[3px] h-[12px]">·</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[168px] h-[12px]">Let’s work together</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[3px] h-[12px]">·</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[168px] h-[12px]">Let’s work together</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[3px] h-[12px]">·</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[168px] h-[12px]">Let’s work together</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[3px] h-[12px]">·</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[168px] h-[12px]">Let’s work together</span>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[3px] h-[12px]">·</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[32px] pt-[128px] pb-[160px] w-full h-fit bg-[#000000]">
            <div className="w-[50px] h-[50px] bg-[#d2f65a]"></div>
            <span className="font-['Clash Display'] text-[96px] font-semibold text-[#ffffff] text-center leading-[96px] tracking-[4.800000000000001px] uppercase w-[1920px] h-[192px]">Let’s create 
        your new brand </span>
            <div className="flex flex-row justify-center items-center gap-[10px] p-[16px] w-fit h-fit bg-[#d2f65a]">
              <div className="w-[16px] h-[1px] bg-[#000000]"></div>
              <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[99px] h-[12px]">get in touch</span>
            </div>
          </div>
        </div>
        </div>

        {/* Section: Footer */}
        <div id="figma-302-641">
        <div className="flex flex-col items-center gap-[10px] pl-[48px] pr-[48px] pt-[96px] pb-[64px] w-full h-fit bg-[#000000]">
          <div className="flex flex-col gap-[96px] w-[1600px] h-fit">
            <div className="flex flex-row gap-[48px] w-full h-fit">
              <div className="flex flex-col gap-[32px] w-full h-full flex-1">
                <div className="flex flex-row items-center gap-[8px] w-fit h-fit">
                  <div className="relative">
                    <div className="w-[27.5px] h-[27.5px] bg-[#d2f65a] absolute top-[1.2px] left-[1.2px]"></div>
                  </div>
                  <div className="w-[108.45px] h-[15.51px] bg-[#ffffff]"></div>
                </div>
              </div>
              <div className="flex flex-row gap-[48px] w-full h-fit flex-1">
                <div className="flex flex-col gap-[32px] w-full h-fit flex-1">
                  <span className="font-['Clash Display'] text-[20px] font-medium text-[#ffffff] text-left leading-[20px] tracking-[2px] uppercase w-[364px] h-[20px]">Pages</span>
                  <div className="flex flex-col gap-[32px] w-full h-fit">
                    <span className="font-['Clash Display'] text-[13px] font-medium text-[#ffffff] text-left leading-[13px] tracking-[2px] uppercase w-[364px] h-[13px]">Home</span>
                    <span className="font-['Clash Display'] text-[13px] font-medium text-[#ffffff] text-left leading-[13px] tracking-[2px] uppercase w-[364px] h-[13px]">Work</span>
                    <span className="font-['Clash Display'] text-[13px] font-medium text-[#ffffff] text-left leading-[13px] tracking-[2px] uppercase w-[364px] h-[13px]">Work Single</span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-[10px] p-[16px] w-fit h-fit bg-[#d2f65a]">
                    <div className="w-[16px] h-[1px] bg-[#000000]"></div>
                    <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[131px] h-[12px]">More TEmplates</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[32px] w-full h-fit flex-1">
                  <span className="font-['Clash Display'] text-[20px] font-medium text-[#ffffff] text-left leading-[20px] tracking-[2px] uppercase w-[171px] h-[20px]">Utility Pages</span>
                  <div className="flex flex-col gap-[32px] w-fit h-fit">
                    <span className="font-['Clash Display'] text-[13px] font-medium text-[#ffffff] text-left leading-[13px] tracking-[2px] uppercase w-[138px] h-[13px]">404 Error Page</span>
                    <span className="font-['Clash Display'] text-[13px] font-medium text-[#ffffff] text-left leading-[13px] tracking-[2px] uppercase w-[192px] h-[13px]">Password Protected</span>
                    <span className="font-['Clash Display'] text-[13px] font-medium text-[#ffffff] text-left leading-[13px] tracking-[2px] uppercase w-[99px] h-[13px]">Styleguide</span>
                    <span className="font-['Clash Display'] text-[13px] font-medium text-[#ffffff] text-left leading-[13px] tracking-[2px] uppercase w-[84px] h-[13px]">Licensing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-[48px] w-full h-fit">
              <span className="font-['Clash Display'] text-[13px] font-medium text-[#ffffff] text-left leading-[13px] tracking-[2px] uppercase w-[452px] h-[13px]">© 2022 Made by Pawel Gola. Powered by Webflow.</span>
              <div className="flex flex-row gap-[32px] w-fit h-fit">
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#ffffff] text-left leading-[13px] tracking-[2px] uppercase w-[70px] h-[13px]">Privacy</span>
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#ffffff] text-left leading-[13px] tracking-[2px] uppercase w-[65px] h-[13px]">Imprint</span>
              </div>
            </div>
          </div>
        </div>
        </div>


      </div>
    </div>
  );
}
