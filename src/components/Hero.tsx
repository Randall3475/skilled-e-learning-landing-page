import Button from './Button';
export default function Hero() {
  return (
    <>
      <section>
        <div class="container mx-auto desktop:pt-[160px] tablet:pt-[100px] relative tablet:flex desktop:px-4 tablet:px-[39px] mt-[68px] px-4">
          <div className="desktop:max-w-[457px] tablet:max-w-[398px]">
            <h1 className="text-pr-dark-purple font-extrabold desktop:mb-[29px] desktop:text-[56px] desktop:leading-[71px] leading-[50px] tablet:mb-[25px] text-[40px] mb-[26px] ">
              Maximize skill, minimize budget
            </h1>
            <p className="font-medium text-[18px] text-pr-gray leading-[28px] pr-gray desktop:mb-[48px] tablet:mb-[40px] mb-[24px]">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <Button text="Get started" type="style-2" />
          </div>
          <div className="max-tablet:flex max-tablet:justify-center">
            <picture>
              <source
                media="(min-width:1110px)"
                srcSet="./images/image-hero-desktop.webp"
              />
              <source
                media="(min-width:768px)"
                srcSet="./images/image-hero-tablet.webp"
              />
              <img
                className="tablet:absolute desktop:right-[-26rem] desktop:top-[-14rem] tablet:right-[-18rem] tablet:top-[-9rem]"
                src="./images/image-hero-mobile.webp"
                alt="Woman drinkink coffee around a handful of statistic numbers about course hours and members"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}
