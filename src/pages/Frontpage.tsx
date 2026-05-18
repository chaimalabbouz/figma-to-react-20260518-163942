import React, { useEffect, useState } from 'react';
import Badge from '../components/Badge';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionBanner from '../components/SectionBanner';
import SectionCTA from '../components/SectionCTA';
import SectionHeading from '../components/SectionHeading';

export default function Frontpage() {
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
      style={{ minHeight: `${5907 * scale}px` }}
    >
      <div
        className="relative flex-shrink-0"
        style={{
          width: `1920px`,
          height: `5907px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
        <div id="figma-30-585"><Header wORK="WORK" contact="Contact" button="Get in touch" /></div>

        {/* Section: Grid */}
        <div id="figma-30-1105">
        <div className="flex flex-col gap-[16px] pb-[32px] w-fit h-fit">
          <div className="w-[1824px] h-[339px] bg-[#000000]"></div>
          <span className="font-['Clash Display'] text-[48px] font-medium text-[#000000] text-left leading-[57.60000228881836px] tracking-[1px] uppercase w-[1824px] h-[58px]">Brand Designer from Berlin</span>
        </div>
        </div>

        {/* Section: Section Hero */}
        <div id="figma-30-586">
        <div className="flex flex-col items-center px-[48px] w-full h-fit">
          <div id="figma-401-2204" className="w-full h-fit">
          <SectionBanner branding="Branding" value="·" logoDesign="Logo Design" socialMediaBranding="Social Media Branding" text="Text" />
        </div>
          <div className="relative">
            <img src="/src/assets/3b7c007b5f38a47720bc82b1e1bb73afd9be80d3.png" alt="Image" className="w-[1944px] h-[1458px] object-cover absolute top-[0px] left-[-98px]" />
          </div>
        </div>
        </div>

        <div id="figma-401-1953"><Badge f="f" r="r" e="e" text=" " w="w" b="b" l="l" o="o" t="t" m="m" p="p" a="a" value="+" /></div>

        {/* Section: Section Stats */}
        <div id="figma-39-670">
        <div className="flex flex-col items-center gap-[10px] pt-[96px] w-full h-fit">
          <div className="flex flex-row gap-[96px] w-[1600px] h-fit">
            <div className="flex flex-col gap-[20px] w-full h-fit flex-1">
              <div className="w-[328px] h-[2px] bg-[#000000]"></div>
              <div className="flex flex-col gap-[12px] w-full h-fit">
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[67px] h-[13px]">Clients</span>
                <span className="font-['Clash Display'] text-[80px] font-semibold text-[#000000] text-left leading-[80px] tracking-[1px] uppercase w-[328px] h-[80px]">200+</span>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] w-full h-fit flex-1">
              <div className="w-[328px] h-[2px] bg-[#000000]"></div>
              <div className="flex flex-col gap-[12px] w-full h-fit">
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[84px] h-[13px]">Projects</span>
                <span className="font-['Clash Display'] text-[80px] font-semibold text-[#000000] text-left leading-[80px] tracking-[1px] uppercase w-[328px] h-[80px]">300+</span>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] w-full h-fit flex-1">
              <div className="w-[328px] h-[2px] bg-[#000000]"></div>
              <div className="flex flex-col gap-[12px] w-full h-fit">
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[88px] h-[13px]">Follower</span>
                <span className="font-['Clash Display'] text-[80px] font-semibold text-[#000000] text-left leading-[80px] tracking-[1px] uppercase w-[328px] h-[80px]">90K</span>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] w-full h-fit flex-1">
              <div className="w-[328px] h-[2px] bg-[#000000]"></div>
              <div className="flex flex-col gap-[12px] w-full h-fit">
                <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[125px] h-[13px]">Happy Clients</span>
                <span className="font-['Clash Display'] text-[80px] font-semibold text-[#000000] text-left leading-[80px] tracking-[1px] uppercase w-[328px] h-[80px]">100%</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Section: Section Logos */}
        <div id="figma-44-186">
        <div className="flex flex-col items-center gap-[64px] pt-[128px] w-full h-fit">
          <div className="flex flex-row items-center gap-[64px] w-[1600px] h-fit">
            <div className="flex flex-row items-center gap-[8px] w-[355px] h-fit">
              <div className="w-[24px] h-[2px] bg-[#000000]"></div>
              <span className="font-['Clash Display'] text-[13px] font-medium text-[#000000] text-left leading-[13px] tracking-[2px] uppercase w-[95px] h-[13px]">My Clients</span>
            </div>
            <div className="flex flex-row justify-between items-center gap-[92px] w-full h-fit flex-1">
              <div className="w-[99.17px] h-[25px] relative">
                <div className="w-[94.91px] h-[21.38px] bg-[#000000] absolute top-[1.8px] left-[2.5px]"></div>
              </div>
              <div className="grid grid-cols-5 w-[140px] h-[30px]">
                <div className="w-[16.03px] h-[16.04px] bg-[#000000]"></div>
                <div className="w-[24.73px] h-[24.72px] bg-[#000000]"></div>
                <div className="w-[16.03px] h-[16.04px] bg-[#000000]"></div>
                <div className="w-[2.97px] h-[14.45px] bg-[#000000]"></div>
                <div className="w-[10.49px] h-[10.49px] bg-[#000000]"></div>
                <div className="w-[10.65px] h-[14.43px] bg-[#000000]"></div>
                <div className="w-[10.49px] h-[10.49px] bg-[#000000]"></div>
                <div className="w-[3.56px] h-[14.34px] bg-[#000000]"></div>
                <div className="w-[10.66px] h-[14.14px] bg-[#000000]"></div>
                <div className="w-[8.37px] h-[10.47px] bg-[#000000]"></div>
                <div className="w-[9.5px] h-[10.19px] bg-[#000000]"></div>
                <div className="w-[14.85px] h-[10.19px] bg-[#000000]"></div>
                <div className="w-[4.41px] h-[4.41px] bg-[#000000]"></div>
              </div>
              <div className="grid grid-cols-2 w-[52.5px] h-[35px]">
                <div className="w-[3.28px] h-[2.19px] bg-[#000000]"></div>
                <div className="w-[52.5px] h-[35px] bg-[#000000]"></div>
              </div>
              <div className="grid grid-cols-2 w-[78px] h-[30px]">
                <div className="w-[52.2px] h-[30px] bg-[#000000]"></div>
                <div className="w-[52.2px] h-[30px] bg-[#000000]"></div>
              </div>
              <div className="w-[132px] h-[35px] relative">
                <div className="w-[6.33px] h-[10.06px] bg-[#000000] absolute top-[12.2px] left-[29.2px]"></div>
                <div className="w-[8px] h-[10.48px] bg-[#000000] absolute top-[12px] left-[39.1px]"></div>
                <div className="w-[8.06px] h-[10.49px] bg-[#000000] absolute top-[12px] left-[51.4px]"></div>
                <div className="w-[8px] h-[10.48px] bg-[#000000] absolute top-[12px] left-[63.6px]"></div>
                <div className="w-[1.02px] h-[10.06px] bg-[#000000] absolute top-[12.2px] left-[76.3px]"></div>
                <div className="w-[7.16px] h-[10.06px] bg-[#000000] absolute top-[12.2px] left-[82.4px]"></div>
                <div className="w-[7.73px] h-[10.54px] bg-[#000000] absolute top-[12px] left-[93.6px]"></div>
                <div className="w-[7.62px] h-[10.27px] bg-[#000000] absolute top-[12.2px] left-[105.7px]"></div>
                <div className="w-[9.12px] h-[10.06px] bg-[#000000] absolute top-[12.2px] left-[118.2px]"></div>
                <div className="w-[18.72px] h-[28.49px] bg-[#000000] absolute top-[3px] left-[4px]"></div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Section: Section Values */}
        <div id="figma-30-985">
        <div className="flex flex-col items-center gap-[48px] px-[96px] py-[160px] w-full h-fit">
          <div className="flex flex-row gap-[96px] w-[1600px] h-fit">
            <div className="flex flex-col justify-between gap-[16px] w-fit h-full">
              <div className="flex flex-col gap-[16px] w-fit h-fit">
                <div className="w-[48px] h-[48px] bg-[#d2f65a]"></div>
                <span className="font-['Clash Display'] text-[80px] font-semibold text-[#000000] text-left leading-[80px] tracking-[1px] uppercase w-[752px] h-[160px]">Brand
        Services</span>
              </div>
              <div className="flex flex-row items-center gap-[16px] pr-[16px] w-fit h-fit">
                <div className="relative">
                  <img src="/src/assets/fe3774994f06f67964c802face677ea8d04b5429.png" alt="pexels-cottonbro-studio-8680728 2" className="w-[121px] h-[182px] object-cover absolute top-[-24.5px] left-[-34px]" />
                  <img src="/src/assets/26278058091092379f488f829028d0c8948c36f5.png" alt="Image" className="w-[242px] h-[362px] object-cover absolute top-[-167.9px] left-[-84px]" />
                </div>
                <div className="flex flex-col gap-[4px] w-fit h-fit">
                  <span className="font-['Clash Display'] text-[20px] font-medium text-[#000000] text-left leading-[20px] tracking-[2px] uppercase w-[123px] h-[20px]">Hi, I’m Finn</span>
                  <span className="font-['Clash Display'] text-[13px] font-medium text-[rgba(25,25,25,0.7)] text-left leading-[13px] tracking-[2px] uppercase w-[139px] h-[13px]">Brand Designer</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] w-full h-fit flex-1">
              <div className="flex flex-col gap-[16px] p-[48px] w-full h-fit bg-[#f8f8f8]">
                <div className="flex flex-row items-center gap-[16px] w-full h-fit">
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[35px] h-[38px]">01</span>
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[7px] h-[38px]">·</span>
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[174px] h-[38px]">Branding</span>
                </div>
                <span className="font-['Inter'] text-[18px] font-normal text-[#191919] text-left leading-[30.600000381469727px] w-[656px] h-[93px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Massa tempor nec feugiat nisl.</span>
              </div>
              <div className="flex flex-col gap-[16px] p-[48px] w-full h-fit bg-[#f8f8f8]">
                <div className="flex flex-row items-center gap-[16px] w-full h-fit">
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[44px] h-[38px]">02</span>
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[7px] h-[38px]">·</span>
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[224px] h-[38px]">Logo Design</span>
                </div>
                <span className="font-['Inter'] text-[18px] font-normal text-[#191919] text-left leading-[30.600000381469727px] w-[656px] h-[93px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Massa tempor nec feugiat nisl.</span>
              </div>
              <div className="flex flex-col gap-[16px] p-[48px] w-full h-fit bg-[#f8f8f8]">
                <div className="flex flex-row items-center gap-[16px] w-full h-fit">
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[45px] h-[38px]">03</span>
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[7px] h-[38px]">·</span>
                  <span className="font-['Clash Display'] text-[32px] font-medium text-[#000000] text-left leading-[38.400001525878906px] tracking-[1px] uppercase w-[237px] h-[38px]">Social Media</span>
                </div>
                <span className="font-['Inter'] text-[18px] font-normal text-[#191919] text-left leading-[30.600000381469727px] w-[656px] h-[93px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Massa tempor nec feugiat nisl.</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div id="figma-401-2303"><SectionHeading gallery="Gallery" value="·" /></div>

        {/* Section: Section Work */}
        <div id="figma-30-1045">
        <div className="flex flex-col items-center gap-[16px] pt-[48px] pb-[96px] w-[1920px] h-fit">
          <div className="flex flex-row items-center gap-[16px] w-[1824px] h-fit">
            <div className="flex flex-col gap-[16px] w-fit h-fit">
              <div className="w-[904px] h-[900px] bg-[#f0f1ef] relative border-[10px] border-[#d2f65a]">
                <img src="/src/assets/f822b9f55fcdaa0b62d3a1266db736732fbe202b.png" alt="Image" className="w-[1200px] h-[900px] object-cover absolute top-[0px] left-[-145px]" />
                <div className="flex flex-row justify-center items-center gap-[32px] px-[20px] py-[10px] w-[100px] h-[100px] bg-[#d2f65a] absolute top-[400px] left-[402px] rounded-[500px] border-[1px] border-[#ffffff]">
                  <span className="font-['Clash Display'] text-[12px] font-medium text-[#000000] text-left leading-[12px] tracking-[1.5px] uppercase w-[36px] h-[12px]">View</span>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] w-fit h-fit">
                <span className="font-['Clash Display'] text-[24px] font-medium text-[#000000] text-left leading-[28.80000114440918px] tracking-[1px] uppercase w-[904px] h-[29px]">Invision Studio</span>
                <span className="font-['Clash Display'] text-[13px] font-medium text-[rgba(25,25,25,0.7)] text-left leading-[13px] tracking-[2px] uppercase w-[94px] h-[13px]">Packaging</span>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] w-full h-fit flex-1">
              <div className="grid grid-cols-2 w-[904px] h-[900px] bg-[#f0f1ef]">
                <img src="/src/assets/c8cb95791b3c5d0fc4e68441b468f84db4ee4c4e.png" alt="Image" className="w-[1201px] h-[901px] object-cover" />
                <img src="/src/assets/c8cb95791b3c5d0fc4e68441b468f84db4ee4c4e.png" alt="Image" className="w-[1201px] h-[901px] object-cover" />
              </div>
              <div className="flex flex-col gap-[8px] w-full h-fit">
                <span className="font-['Clash Display'] text-[24px] font-medium text-[#000000] text-left leading-[28.80000114440918px] tracking-[1px] uppercase w-[904px] h-[29px]">Invision Studio</span>
                <span className="font-['Clash Display'] text-[13px] font-medium text-[rgba(25,25,25,0.7)] text-left leading-[13px] tracking-[2px] uppercase w-[62px] h-[13px]">Poster</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div id="figma-67-485"><SectionCTA branding="Branding" value="·" logoDesign="Let’s work Together" socialMediaBranding="Social Media Branding" text="Text" letSCreateYourNewBrand="Let’s create  your new brand " button="get in touch" /></div>

        <div id="figma-49-137"><Footer pages="Pages" home="Home" work="Work" workSingle="Work Single" button="More TEmplates" utilityPages="Utility Pages" 404ErrorPage="404 Error Page" passwordProtected="Password Protected" styleguide="Styleguide" licensing="Licensing" 2022MadeByPawelGolaPoweredByWebflow="© 2022 Made by Pawel Gola. Powered by Webflow." privacy="Privacy" imprint="Imprint" /></div>


      </div>
    </div>
  );
}
