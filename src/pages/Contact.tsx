import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Input from '../components/Input';

export default function Contact() {
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
      style={{ minHeight: `${1576 * scale}px` }}
    >
      <div
        className="relative flex-shrink-0"
        style={{
          width: `1920px`,
          height: `1576px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
        <div id="figma-401-2027"><Header wORK="WORK" contact="Contact" button="Get in touch" /></div>

        {/* Section: Section Heading */}
        <div id="figma-65-292">
        <div className="flex flex-col items-center gap-[32px] py-[160px] w-[1920px] h-fit">
          <div className="flex flex-row gap-[64px] w-[1600px] h-fit">
            <div className="flex flex-col gap-[64px] w-full h-fit flex-1">
              <div className="flex flex-col justify-between gap-[16px] w-full h-[428px]">
                <div className="flex flex-col gap-[16px] w-fit h-fit">
                  <div className="flex flex-row items-center gap-[8px] w-[300px] h-fit">
                    <div className="w-[24px] h-[2px] bg-[#000000]"></div>
                    <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[77px] h-[13px]">Contact</span>
                  </div>
                  <span className="font-['Clash Display'] text-[112px] font-semibold text-[#000000] text-left leading-[112px] tracking-[2px] uppercase w-[768px] h-[224px]">Get in touch</span>
                </div>
                <div className="flex flex-row items-center gap-[16px] pr-[16px] w-fit h-fit">
                  <div className="relative">
                    <img src="/src/assets/26278058091092379f488f829028d0c8948c36f5.png" alt="Image" className="w-[242px] h-[362px] object-cover absolute top-[-167.9px] left-[-84px]" />
                  </div>
                  <div className="flex flex-col gap-[4px] w-fit h-fit">
                    <span className="font-['Clash Display'] text-[20px] font-medium text-[#000000] text-left leading-[20px] tracking-[2px] uppercase w-[157px] h-[20px]">Finn Solveig</span>
                    <span className="font-['Clash Display'] text-[13px] font-medium text-[rgba(25,25,25,0.7)] text-left leading-[13px] tracking-[2px] uppercase w-[139px] h-[13px]">Brand Designer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[32px] w-full h-fit flex-1">
              <div className="flex flex-col gap-[32px] w-[600px] h-fit">
                <div id="figma-401-2041" className="w-full h-fit">
          <Input yourEmail="Your Name" />
        </div>
                <div id="figma-401-2050" className="w-full h-fit">
          <Input yourEmail="Your Email" />
        </div>
                <div id="figma-401-2052" className="w-full h-[200px]">
          <Input yourEmail="Your Message" />
        </div>
                <div id="figma-67-458" className="w-fit h-fit">
          <Button button="Send Message" />
        </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Section: Section Socials */}
        <div id="figma-65-312">
        <div className="flex flex-col items-center py-[48px] w-[1920px] h-fit bg-[#d2f65a]">
          <div className="flex flex-row justify-center items-center gap-[10px] py-[16px] w-[1600px] h-fit">
            <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[1372px] h-[38px]">Follow me on social Media</span>
            <div className="flex flex-row gap-[32px] w-fit h-fit">
              <div className="flex flex-row items-center gap-[8px] w-fit h-fit">
                <div className="w-[24px] h-[2px] bg-[#000000]"></div>
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[14px] h-[13px]">IN</span>
              </div>
              <div className="flex flex-row items-center gap-[8px] w-fit h-fit">
                <div className="w-[24px] h-[2px] bg-[#000000]"></div>
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[25px] h-[13px]">TW</span>
              </div>
              <div className="flex flex-row items-center gap-[8px] w-fit h-fit">
                <div className="w-[24px] h-[2px] bg-[#000000]"></div>
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[19px] h-[13px]">FB</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div id="figma-65-316"><Footer pages="Pages" home="Home" work="Work" workSingle="Work Single" button="More TEmplates" utilityPages="Utility Pages" 404ErrorPage="404 Error Page" passwordProtected="Password Protected" styleguide="Styleguide" licensing="Licensing" 2022MadeByPawelGolaPoweredByWebflow="© 2022 Made by Pawel Gola. Powered by Webflow." privacy="Privacy" imprint="Imprint" /></div>


      </div>
    </div>
  );
}
