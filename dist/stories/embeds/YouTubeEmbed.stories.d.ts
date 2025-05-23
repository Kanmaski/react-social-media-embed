import type { Meta, StoryObj } from '@storybook/react';
declare const StoryComponent: ({ url, width, height, linkText, placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled, placeholderProps, embedPlaceholder, placeholderDisabled, youTubeProps, ...divProps }: import("../../components/embeds/YouTubeEmbed").YouTubeEmbedProps) => any;
declare const meta: Meta<typeof StoryComponent>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const MainExample: Story;
export declare const Size100x100: Story;
export declare const Size100x200: Story;
export declare const Size200x100: Story;
export declare const Size200x200: Story;
export declare const Size200x400: Story;
export declare const Size400x200: Story;
export declare const Size400x600: Story;
export declare const Size600x400: Story;
export declare const Width100: Story;
export declare const Width200: Story;
export declare const Width400: Story;
export declare const Width800: Story;
export declare const Width50Percent: Story;
export declare const Width100Percent: Story;
export declare const YouTubeShorts: Story;
export declare const UrlOnly: Story;
export declare const WithPlaceholderImage: Story;
export declare const CustomPlaceholder: Story;
export declare const CustomPlaceholderLinkText: Story;
export declare const PlaceholderSpinnerDisabled: Story;
export declare const PlaceholderDisabled: Story;
