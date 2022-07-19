import { FC } from "react";
import { CookiePolicyLink } from "../links/CookiePolicyLink";
import { PrivacyPolicyLink } from "../links/PrivacyPolicyLink";
import { SocialLinksGroup } from "../SocialLinksGroup";
import { CopyRightText } from "./CopyRightText";
import { InstillAiLogo } from "./InstillAiLogo";
import { SimpleHorizontalLine } from "./SimpleHorizontalLine";

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <div className="flex w-full bg-instillGray95">
      <div className="mt-auto flex w-full max-w-[1440px] flex-col py-5 px-4 md:mx-auto max:w-10/12 max:px-0">
        <SimpleHorizontalLine styleName="mb-5 border-instillGray70" />
        <div className="flex flex-col gap-y-[60px] sm:gap-y-10">
          <div className="flex flex-col">
            <h3 className="instill-text-h3 mb-5 max-w-[256px] text-instillGray05">
              Visual Data Preparation Made for All
            </h3>
            <InstillAiLogo type="logoOnlyWhite" width={30} />
          </div>
          <div className="flex flex-col-reverse gap-y-[30px] sm:grid sm:grid-cols-3 sm:gap-y-0">
            <CopyRightText />
            <div className="flex flex-col gap-y-[60px] sm:hidden">
              <SocialLinksGroup styleName="sm:justify-center" />
              <div className="flex flex-row gap-x-5 sm:justify-end">
                <CookiePolicyLink />
                <div className="my-1.5 border-r border-instillGray15" />
                <PrivacyPolicyLink />
              </div>
            </div>
            <SocialLinksGroup styleName="hidden sm:flex sm:justify-center" />
            <div className="hidden gap-x-2 sm:flex sm:flex-row sm:justify-end md:gap-x-5">
              <CookiePolicyLink />
              <div className="my-1.5 max-h-[16px] border-r border-instillGray15" />
              <PrivacyPolicyLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};