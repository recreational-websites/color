import { Metadata } from "next";

import MainPage, {
  generateMetadata as mainGenerateMetaData,
} from "./[hexCode]/page";

const DEFAULT = "000000";

export default async function Page() {
  return MainPage({ params: { hexCode: DEFAULT } });
}

export function generateMetadata(): Metadata {
  return mainGenerateMetaData({ params: { hexCode: DEFAULT } });
}
