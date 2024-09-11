import { env } from "@/_internal/lib/env";
import ColorPage from "@/_internal/pages/ColorPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Params {
  params: Record<"hexCode", string>;
}

export default async function Page({ params: { hexCode } }: Params) {
  if (!hexCode.match(/^[0-9a-f]{6}$/)) {
    throw notFound();
  }
  return <ColorPage hexCode={`#${hexCode}`} />;
}

export function generateMetadata({ params: { hexCode } }: Params): Metadata {
  const title = `Color #${hexCode}`;
  const description = `Color ${hexCode}`;

  return {
    metadataBase: new URL(env("METADATA_BASE")),
    title,
    description,
    openGraph: {
      title,
      images: `${env("METADATA_BASE")}api/og/${hexCode}`,
      description,
    },
  };
}
