// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tYXzbT3akEBS2QTgZkCmo
// Component: Zk9YReWZ-0Bia
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 44ZR4WMrh4kuH/component
import TopSection from "../../TopSection"; // plasmic-import: WfFCgqZ-qzZgh/component
import Section from "../../Section"; // plasmic-import: j0bHHALR-Nq4c/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: RqlhVybYf0LbI/component
import Testimonial from "../../Testimonial"; // plasmic-import: r8kO_MTbhPBGsK/component
import HomeCta from "../../HomeCta"; // plasmic-import: shWxgBNdQl-u-/component
import Footer from "../../Footer"; // plasmic-import: EdY1MlBpyZAeu/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: TkUsxLO-19vUgi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: tYXzbT3akEBS2QTgZkCmo/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: Zk9YReWZ-0Bia/css

import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: XGIosDyOxH36fj/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: C6WaXsPjsjt2n3/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: uS3N-8WxkinYcu/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: QHemqD72jf41hJ/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: -HHhDPjctIYROr/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: fE11uV_uZhiOU8/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: GzRlFfxLJPXjEm/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: N7u8HSqsm_U3bU/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: i7bmM9XNDGglxW/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: GmwhVQ3lXAOnHb/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: U5S3Fwd4aH6PqD/icon

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof TopSection>;
  testimonial?: p.Flex<typeof Testimonial>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {
  dataFetches: PlasmicHome__Fetches;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  dataFetches?: PlasmicHome__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div className={classNames(defaultcss.all, sty.freeBox__yp7J6)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__xPBzT)}
            >
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
              />

              <TopSection
                data-plasmic-name={"topSection"}
                data-plasmic-override={overrides.topSection}
                className={classNames("__wab_instance", sty.topSection)}
              />

              <Section
                className={classNames("__wab_instance", sty.section__chFDo)}
                subtitle={
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
                title={"Explore the solutions"}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__fp1C8)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__xRjRk)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__ruxRr
                    )}
                  >
                    {"Powerful suite of tools"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__t9GQn
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                    }
                  </div>

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__iNtO2
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <LightningIcon
                        className={classNames(defaultcss.all, sty.svg__eh7Z2)}
                        role={"img"}
                      />
                    }
                    long={"long" as const}
                    title={"Building the Simple ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__qav0W
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <HammerIcon
                        className={classNames(defaultcss.all, sty.svg__keWhe)}
                        role={"img"}
                      />
                    }
                    long={"long" as const}
                    title={"Building the Simple Ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__fvkGc
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <PencilIcon
                        className={classNames(defaultcss.all, sty.svg__szdq)}
                        role={"img"}
                      />
                    }
                    long={"long" as const}
                    title={"Building the Simple Ecosystem"}
                  />
                </p.Stack>

                <div className={classNames(defaultcss.all, sty.freeBox__bcpo3)}>
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__nbzI)}
                    role={"img"}
                    src={
                      "/plasmic/simple_light_landing_page/images/simpleProject.png"
                    }
                  />

                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__fkeuq)}
                    role={"img"}
                    src={"/plasmic/simple_light_landing_page/images/task.png"}
                  />
                </div>
              </p.Stack>
            </p.Stack>
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__s0W3)}>
            <div className={classNames(defaultcss.all, sty.freeBox___1UwBs)} />

            <div className={classNames(defaultcss.all, sty.freeBox__jHLt9)}>
              <div className={classNames(defaultcss.all, sty.freeBox__zNcQt)}>
                <Section
                  className={classNames("__wab_instance", sty.section__uHpQ)}
                  subtitle={
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                  }
                  title={"How Simple works"}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__cAuP)}
                >
                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard___62Las
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <SwapIcon
                        className={classNames(defaultcss.all, sty.svg__ejkfe)}
                        role={"img"}
                      />
                    }
                    title={"Initial Contact"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__tC2Av
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <SlotIcon
                        className={classNames(defaultcss.all, sty.svg__s6Amj)}
                        role={"img"}
                      />
                    }
                    title={"Discovery Session"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard___76NZq
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <CycleIcon
                        className={classNames(defaultcss.all, sty.svg__fCys)}
                        role={"img"}
                      />
                    }
                    title={"Contracting"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__xBbRt
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <HammerIcon
                        className={classNames(defaultcss.all, sty.svg__tJLvp)}
                        role={"img"}
                      />
                    }
                    title={"Fast Prototyping"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard___1LyLb
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <PencilIcon
                        className={classNames(defaultcss.all, sty.svg__ztewi)}
                        role={"img"}
                      />
                    }
                    title={"Design Phase"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__w6SLe
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <LightningIcon
                        className={classNames(defaultcss.all, sty.svg__qiPU)}
                        role={"img"}
                      />
                    }
                    title={"Develop & Launch"}
                  />
                </p.Stack>
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__hzhVb)} />
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__tZvBz)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__ocT0)}
            >
              <Section
                className={classNames("__wab_instance", sty.section__d3Ksi)}
                subtitle={
                  "Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
                }
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__quvkS)}
              >
                <FacebookLogoIcon
                  className={classNames(defaultcss.all, sty.svg__pcjbl)}
                  role={"img"}
                />

                <TinderLogoIcon
                  className={classNames(defaultcss.all, sty.svg__waGcF)}
                  role={"img"}
                />

                <AirbnbLogoIcon
                  className={classNames(defaultcss.all, sty.svg___1N5M8)}
                  role={"img"}
                />

                <HubspotLogoIcon
                  className={classNames(defaultcss.all, sty.svg__k5WA9)}
                  role={"img"}
                />

                <AmazonLogoIcon
                  className={classNames(defaultcss.all, sty.svg__la6AH)}
                  role={"img"}
                />
              </p.Stack>

              <Testimonial
                data-plasmic-name={"testimonial"}
                data-plasmic-override={overrides.testimonial}
                className={classNames("__wab_instance", sty.testimonial)}
              />

              <HomeCta
                data-plasmic-name={"homeCta"}
                data-plasmic-override={overrides.homeCta}
                className={classNames("__wab_instance", sty.homeCta)}
              />

              <Footer
                data-plasmic-name={"footer"}
                data-plasmic-override={overrides.footer}
                className={classNames("__wab_instance", sty.footer)}
              />
            </p.Stack>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "topSection", "testimonial", "homeCta", "footer"],
  header: ["header"],
  topSection: ["topSection"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof TopSection;
  testimonial: typeof Testimonial;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHome__Fetches;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
