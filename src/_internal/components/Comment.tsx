"use client";

import { useContext } from "react";

import { ModeContext } from "@-ft/mode-next";
import Giscus from "@giscus/react";

export interface CommentProps {
  name: string;
}

export function Comment({ name }: CommentProps) {
  const { theme } = useContext(ModeContext);
  return (
    <Giscus
      id="comments"
      repo="recreational-websites/color"
      repoId="R_kgDOMwFbGQ"
      category="Announcements"
      categoryId="DIC_kwDOMwFbGc4CiYLe"
      mapping="specific"
      term={name}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  );
}
