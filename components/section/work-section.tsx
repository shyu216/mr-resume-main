"use client";

import Section from "@/components/section";
import Experience from "@/components/experience";
import LabelWithGraphic from "@/components/label-with-graphic";
import { Icon, Icons } from "@/components/icons";
import Title from "@/components/label-with-link";
import { useContext } from "react";
import { LanguageContext } from "@/components/lang/language-provider";

const exp_en: ExperienceProps[] = [
  {
    head1: "Full Stack Developer",
    head2: <Title icon={Icons.Building} title="ReCube, Hong Kong" link="https://www.re3.world" />,
    head3: <LabelWithGraphic icon={Icons.Stack} content="Next.js, AWS" />,
    head4: "Apr 2023 - Feb 2024",
    bulletPoints: [
      "To develop a reusable tableware borrowing program, aiding Hong Kong's environmental progress.",
      "Explored the state-of-the-art solutions to develop and maintain the software application and database.",
      "Implemented and deployed critical features to enhance user experience and maximize user satisfaction, including user authentication, payment integration, and email notifications, etc.",
    ],
  },
];

const exp_zh: ExperienceProps[] = [
  {
    head1: "全栈开发",
    head2: <Title icon={Icons.Building} title="ReCube, 香港" link="https://www.re3.world" />,
    head3: <LabelWithGraphic icon={Icons.Stack} content="Next.js, AWS" />,
    head4: "2023年4月 - 2024年2月",
    bulletPoints: [
      "开发一个重用餐具的租用程序，助力香港环保事业发展。",
      "探索最先进的解决方案，开发和维护应用程序的前后端。",
      "实现并部署了关键功能以增强用户体验，包括用户认证、支付集成、和电子邮件通知等。",
    ],
  },
];

type Props = {
  usage: "live" | "pdf";
};

export default function WorkSection({ usage }: Props) {
  const { language } = useContext(LanguageContext);
  const exp = language === "en" ? exp_en : exp_zh;
  const title = language === "en" ? "WORK EXPERIENCE" : "工作经历";

  return (
    <Section title={title} usage={usage}>
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} usage={usage} />
        ))}
      </div>
    </Section>
  );
}
