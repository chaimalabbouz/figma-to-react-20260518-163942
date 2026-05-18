import React, { useEffect, useState } from 'react';
import ButtonText from '../components/ButtonText';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionBanner from '../components/SectionBanner';
import SectionCTA from '../components/SectionCTA';
import SectionHeading from '../components/SectionHeading';

export default function WorkSingle() {
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
      style={{ minHeight: `${6630 * scale}px` }}
    >
      <div
        className="relative flex-shrink-0"
        style={{
          width: `1920px`,
          height: `6630px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
        <div id="figma-401-2014"><Header wORK="WORK" contact="Contact" button="Get in touch" /></div>

        {/* Section: Section Heading */}
        <div id="figma-49-525">
        <div className="flex flex-col items-center gap-[10px] pt-[64px] w-full h-fit">
          <div className="flex flex-col items-center gap-[32px] w-[1800px] h-fit">
            <span className="font-['Clash Display'] text-[112px] font-semibold text-[#000000] text-center leading-[112px] tracking-[2px] uppercase w-[1800px] h-[112px]">Vision Square</span>
          </div>
        </div>
        </div>

        {/* Section: Section Meta */}
        <div id="figma-67-2568">
        <div className="flex flex-col items-center gap-[10px] pt-[128px] pb-[96px] w-full h-fit">
          <div className="flex flex-row gap-[96px] w-[1600px] h-fit">
            <div className="flex flex-col gap-[20px] w-full h-fit flex-1">
              <div className="w-[328px] h-[2px] bg-[#000000]"></div>
              <div className="flex flex-col gap-[12px] w-full h-fit">
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[56px] h-[13px]">Client</span>
                <span className="font-['Clash Display'] text-[24px] font-medium text-[#000000] text-left leading-[28.80000114440918px] tracking-[1px] uppercase w-[328px] h-[29px]">Invision STudio</span>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] w-full h-fit flex-1">
              <div className="w-[328px] h-[2px] bg-[#000000]"></div>
              <div className="flex flex-col gap-[12px] w-full h-fit">
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[73px] h-[13px]">Timeline</span>
                <span className="font-['Clash Display'] text-[24px] font-medium text-[#000000] text-left leading-[28.80000114440918px] tracking-[1px] uppercase w-[328px] h-[29px]">4 Weeks</span>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] w-full h-fit flex-1">
              <div className="w-[328px] h-[2px] bg-[#000000]"></div>
              <div className="flex flex-col gap-[12px] w-full h-fit">
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[67px] h-[13px]">Service</span>
                <span className="font-['Clash Display'] text-[24px] font-medium text-[#000000] text-left leading-[28.80000114440918px] tracking-[1px] uppercase w-[328px] h-[29px]">Brand Design</span>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] w-full h-fit flex-1">
              <div className="w-[328px] h-[2px] bg-[#000000]"></div>
              <div className="flex flex-col gap-[12px] w-full h-fit">
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[71px] h-[13px]">Website</span>
                <span className="font-['Clash Display'] text-[24px] font-medium text-[#000000] text-left leading-[28.80000114440918px] tracking-[1px] uppercase w-[328px] h-[29px]">gola.io</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Section: Section Image */}
        <div id="figma-67-2507">
        <div className="flex flex-col items-center gap-[10px] px-[48px] w-full h-fit">
          <div className="grid grid-cols-2">
            <img src="/src/assets/c8cb95791b3c5d0fc4e68441b468f84db4ee4c4e.png" alt="Image" className="w-[2000px] h-[1500px] object-cover" />
            <div id="figma-401-2055" className="w-[1920px] h-fit">
          <SectionBanner branding="Branding" value="·" logoDesign="Logo Design" socialMediaBranding="Social Media Branding" text="Text" />
        </div>
          </div>
        </div>
        </div>

        {/* Section: Section Values */}
        <div id="figma-67-2477">
        <div className="flex flex-col items-center gap-[48px] px-[96px] py-[160px] w-full h-fit">
          <div className="flex flex-row gap-[96px] w-[1600px] h-fit">
            <div className="flex flex-col gap-[16px] w-fit h-full">
              <div className="w-[48px] h-[48px] bg-[#d2f65a]"></div>
              <span className="font-['Clash Display'] text-[80px] font-semibold text-[#000000] text-left leading-[80px] tracking-[1px] uppercase w-[752px] h-[160px]">Brand new
        branding</span>
            </div>
            <div className="flex flex-col gap-[32px] w-full h-fit flex-1">
              <div className="flex flex-col gap-[16px] p-[48px] w-full h-fit bg-[#f8f8f8]">
                <div className="flex flex-row items-center gap-[16px] w-full h-fit">
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[35px] h-[38px]">01</span>
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[7px] h-[38px]">·</span>
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[203px] h-[38px]">Challenge</span>
                </div>
                <span className="font-['Satoshi'] text-[18px] font-normal text-[#191919] text-left leading-[30.600000381469727px] w-[656px] h-[217px]">Eu ultrices vitae auctor eu augue ut. Purus gravida quis blandit turpis cursus in hac habitasse. Arcu dictum varius duis at consectetur lorem donec. Ultricies lacus sed turpis tincidunt id. 

        Cursus sit amet dictum sit amet. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Nunc lobortis mattis aliquam faucibus purus in massa. Consequat mauris nunc congue nisi vitae.</span>
              </div>
              <div className="flex flex-col gap-[16px] p-[48px] w-full h-fit bg-[#f8f8f8]">
                <div className="flex flex-row items-center gap-[16px] w-full h-fit">
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[44px] h-[38px]">02</span>
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[7px] h-[38px]">·</span>
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[95px] h-[38px]">Goal</span>
                </div>
                <span className="font-['Satoshi'] text-[18px] font-normal text-[#000000] text-left leading-[32.39999771118164px] w-[656px] h-[128px]">Dolor magna eget est lorem ipsum dolor sit amet consectetur. Bibendum est ultricies integer quis auctor elit sed. Odio morbi quis commodo odio aenean sed. Pharetra diam sit amet nisl suscipit adipiscing. Eget nunc scelerisque viverra mauris. Senectus et netus et malesuada fames.</span>
              </div>
              <div className="flex flex-col gap-[16px] p-[48px] w-full h-fit bg-[#f8f8f8]">
                <div className="flex flex-row items-center gap-[16px] w-full h-fit">
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[45px] h-[38px]">03</span>
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[7px] h-[38px]">·</span>
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[169px] h-[38px]">Solution</span>
                </div>
                <span className="font-['Satoshi'] text-[18px] font-normal text-[#191919] text-left leading-[30.600000381469727px] w-[656px] h-[93px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Massa tempor nec feugiat nisl.</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div id="figma-401-2243"><SectionHeading gallery="Gallery" value="·" /></div>

        {/* Section: Section Work */}
        <div id="figma-67-2381">
        <div className="flex flex-col items-center gap-[16px] pt-[48px] w-[1920px] h-fit">
          <div className="flex flex-row items-center gap-[16px] w-[1824px] h-fit">
            <div className="w-full h-[900px] flex-1 bg-[#f0f1ef] relative">
              <img src="/src/assets/f822b9f55fcdaa0b62d3a1266db736732fbe202b.png" alt="Image" className="w-[1200px] h-[900px] object-cover absolute top-[0px] left-[-145px]" />
            </div>
            <div className="w-full h-[900px] flex-1 bg-[#f0f1ef] relative">
              <img src="/src/assets/4e2be910976b86c4f2f9c2d6ceec53a503937f60.png" alt="Image" className="w-[1201px] h-[901px] object-cover absolute top-[0px] left-[-176px]" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-[16px] w-[1824px] h-fit">
            <div className="w-full h-[900px] flex-1 bg-[#f0f1ef] relative">
              <img src="/src/assets/f681b1b3ce545d4755b5aa4bdcccb3f4347d71bd.png" alt="Image" className="w-[1200px] h-[900px] object-cover absolute top-[0px] left-[-128px]" />
            </div>
            <div className="w-full h-[900px] flex-1 bg-[#f0f1ef] relative">
              <img src="/src/assets/c8cb95791b3c5d0fc4e68441b468f84db4ee4c4e.png" alt="Image" className="w-[1201px] h-[901px] object-cover absolute top-[0px] left-[-176px]" />
            </div>
          </div>
        </div>
        </div>

        {/* Section: Section Pagination */}
        <div id="figma-67-2632">
        <div className="flex flex-col items-center gap-[64px] py-[64px] w-full h-fit">
          <div className="flex flex-row items-center gap-[64px] w-[1824px] h-fit">
            <div className="flex flex-row items-center gap-[16px] w-fit h-fit">
              <div className="relative">
                <img src="/src/assets/f681b1b3ce545d4755b5aa4bdcccb3f4347d71bd.png" alt="Image" className="w-[107px] h-[80px] object-cover absolute top-[0px] left-[-14px]" />
              </div>
              <div className="flex flex-col gap-[4px] w-fit h-fit">
                <span className="font-['Clash Display'] text-[13px] font-medium text-[rgba(25,25,25,0.7)] text-left leading-[13px] tracking-[2px] uppercase w-[79px] h-[13px]">Previous</span>
                <span className="font-['Clash Display'] text-[20px] font-medium text-[#000000] text-left leading-[20px] tracking-[2px] uppercase w-[167px] h-[20px]">Vision Studio</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[10px] w-full h-fit flex-1">
              <div id="figma-67-2649" className="w-fit h-fit">
          <ButtonText backToOverview="Go back" />
        </div>
            </div>
            <div className="flex flex-row items-center gap-[16px] w-fit h-fit">
              <div className="flex flex-col items-end gap-[4px] w-fit h-fit">
                <span className="font-['Clash Display'] text-[13px] font-medium text-[rgba(25,25,25,0.7)] text-left leading-[13px] tracking-[2px] uppercase w-[42px] h-[13px]">Next</span>
                <span className="font-['Clash Display'] text-[20px] font-medium text-[#000000] text-left leading-[20px] tracking-[2px] uppercase w-[167px] h-[20px]">Vision Studio</span>
              </div>
              <div className="relative">
                <img src="/src/assets/c8cb95791b3c5d0fc4e68441b468f84db4ee4c4e.png" alt="Image" className="w-[107px] h-[80px] object-cover absolute top-[0px] left-[-13px]" />
              </div>
            </div>
          </div>
        </div>
        </div>

        <div id="figma-67-2241"><SectionCTA branding="Branding" value="·" logoDesign="Let’s work Together" socialMediaBranding="Social Media Branding" text="Text" letSCreateYourNewBrand="Let’s create  your new brand " button="get in touch" /></div>

        <div id="figma-49-552"><Footer pages="Pages" home="Home" work="Work" workSingle="Work Single" button="More TEmplates" utilityPages="Utility Pages" 404ErrorPage="404 Error Page" passwordProtected="Password Protected" styleguide="Styleguide" licensing="Licensing" 2022MadeByPawelGolaPoweredByWebflow="© 2022 Made by Pawel Gola. Powered by Webflow." privacy="Privacy" imprint="Imprint" /></div>


      </div>
    </div>
  );
}
