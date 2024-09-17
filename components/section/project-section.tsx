"use client";

import Section from "@/components/section";
import Experience from "@/components/experience";
import LabelWithGraphic from "@/components/label-with-graphic";
import { Icons } from "@/components/icons";
import Title from "@/components/label-with-link";
import { useContext } from "react";
import { LanguageContext } from "@/components/lang/language-provider";
import { now } from "@/lib/now-utils";

type Props = {
  usage: "live" | "pdf";
};

const exp_en: ExperienceProps[] = [
  // {
  //   head1: "Poetry Card",
  //   head2: <Title title="Open-source Project" icon={Icons.SmartPhone} link="https://github.com/shyu216/ShiYin-Poem-RN" />,
  //   head3: <LabelWithGraphic icon={Icons.Stack} content="React Native, SQLite" />,
  //   head4: "Dec 2023 - " + now("en"),
  //   bulletPoints: [
  //     "To create a user-friendly way for people to access and appreciate Chinese classical poetry.",
  //     "Design and implement the application's user interface, integrate the chinese-poetry database.",
  //     "Developed this application using React Native and SQLite, and implemented features including poetry display, random refresh, and history rollback.",
  //     "Published the source code on GitHub and released a downloadable Android application."
  //   ,]
  // },
  {
    head1: "3D Object Detection",
    head2: <Title title="Final Year Project" icon={Icons.Code} link="https://github.com/shyu216/DPC" />,
    head3: <LabelWithGraphic icon={Icons.Stack} content="Python, PyTorch, Open3D" />,
    head4: "Sep 2022 - May 2023",
    bulletPoints: [
      "Existing 3D object detection methods struggled to predict accurate bounding boxes for objects with fewer points, limiting current detectors' performance.",
      "Enhance 3D detectors by integrating densified point clouds generated through depth completion methods using a two-branch neural network architecture.",
      "Conducted extensive research, implemented the neural network, and collaborated with my advisor and peers to validate the approach.",
      "Produced a thesis and gave an oral presentation, showcasing the research findings.",
    ],
  },
  // {
  //   head1: (<Title title="Draw & Guess Game" icon={Icons.LayoutTemplate} link="https://github.com/easyDG" />),
  //   head2: <LabelWithGraphic content="Course Project" />,
  //   head3: <LabelWithGraphic icon={Icons.Stack} content="MySQL, ExpressJS, NodeJS" />,
  //   head4: "Jan 2022 - May 2022",
  //   bulletPoints: [
  //     "As part of a team to create an engaging and interactive web application.",
  //     "Contribute to the design and development of the application, including the database, user login and profile interfaces, and routing system.",
  //     "Collaborated with the team to write a thorough specification document, designed and implemented user-friendly interfaces and routers using NodeJS and ExpressJS.",
  //     "Deployed to AWS EC2, and successfully launched a demo among 4 computers.",
  //   ]
  // }
];

const exp_zh: ExperienceProps[] = [
  // {
  //   head1: "诗词卡片应用",
  //   head2: <Title title="开源项目" icon={Icons.SmartPhone} link="https://github.com/shyu216/ShiYin-Poem-RN" />,
  //   head3: <LabelWithGraphic icon={Icons.Stack} content="React Native, SQLite" />,
  //   head4: "2023年12月 - " + now("zh"),
  //   bulletPoints: [
  //     "创建一个用户友好的方式让人们能够接触和欣赏中国古典诗词。",
  //     "设计和实现应用的用户界面，集成 chinese-poetry 开源数据集。",
  //     "使用 React Native 和 SQLite 进行开发，实现了诗词的展示、随机刷新和历史回滚等功能。",
  //     "在 GitHub 上发布了源代码，和一个可供下载的 Android 应用程序。",
  //   ]
  // },
  {
    head1: "3D物体检测",
    head2: <Title title="毕业设计" icon={Icons.Code} link="https://github.com/shyu216/DPC" />,
    head3: <LabelWithGraphic icon={Icons.Stack} content="Python, PyTorch, Open3D" />,
    head4: "2022年9月 - 2023年5月",
    bulletPoints: [
      "现有的3D物体检测方法在预测点较少的物体的边界框时，精度较低，限制了当前检测器的性能。",
      "通过使用两分支神经网络架构，整合通过深度完成方法生成的密集点云，提高3D检测器的性能。",
      "进行了广泛的研究，实现了神经网络，并与我的导师和学长合作验证了这种方法。",
      "撰写了论文并进行了口头答辩，展示了研究成果。",
    ],
  },
  // {
  //   head1: (<Title title="画图猜词游戏" icon={Icons.LayoutTemplate} link="https://github.com/easyDG" />),
  //   head2: <LabelWithGraphic content="课程项目" />,
  //   head3: <LabelWithGraphic icon={Icons.Stack} content="MySQL, ExpressJS, NodeJS" />,
  //   head4: "2022年1月 - 2022年5月",
  //   bulletPoints: [
  //     "作为团队一员，创建一个有趣、互动性强的网络应用程序。",
  //     "设计和开发应用程序，包括数据库、用户登录和个人资料界面以及路由系统。",
  //     "与团队合作编写了详尽的规格文档，并使用 NodeJS 设计和开发了友好的界面和健壮的路由系统。",
  //     "在 AWS EC2 上部署，并成功在4台计算机之间启动了一个演示游戏。",
  //   ]
  // },
];

export default function ProjectSection({ usage }: Props) {
  const { language } = useContext(LanguageContext);

  const exp = language === "en" ? exp_en : exp_zh;
  const title = language === "en" ? "PROJECT" : "项目经历";

  
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
