import type { Config } from "@measured/puck";
import { textConfig } from "@components/Text";
import type { TextProps } from "@components/Text";
import { heroConfig } from "@components/Hero";
import type { HeroProps } from "@components/Hero";
import { ImageComponentProps, imageConfig } from "@components/Image";
import { verticalSpaceConfig } from "@components/VerticalSpace";
import type { VerticalSpaceProps } from "@components/VerticalSpace";


type Props = {
    Text: TextProps;
    Hero: HeroProps;
    Image: ImageComponentProps
    VerticalSpace: VerticalSpaceProps;
};

export const config: Config<Props> = {
    components: {
        Text: textConfig,
        Hero: heroConfig,
        Image: imageConfig,
        VerticalSpace: verticalSpaceConfig,
    },
};

export default config;
