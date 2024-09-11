import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Comment } from "../components/Comment";
import { contrastColor } from "../lib/contrastColor";

interface ColorPageProps {
  hexCode: string;
}

function generateSimilarColors(color: string): string[] {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  const variations = [
    { r: 20, g: 0, b: 0 },
    { r: -20, g: 0, b: 0 },
    { r: 0, g: 20, b: 0 },
    { r: 0, g: -20, b: 0 },
    { r: 0, g: 0, b: 20 },
    { r: 0, g: 0, b: -20 },
  ];

  return variations.map(({ r: dr, g: dg, b: db }) => {
    const newR = Math.max(0, Math.min(255, r + dr));
    const newG = Math.max(0, Math.min(255, g + dg));
    const newB = Math.max(0, Math.min(255, b + db));
    return `#${newR.toString(16).padStart(2, "0")}${newG
      .toString(16)
      .padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
  });
}

export default function ColorPage({ hexCode }: ColorPageProps) {
  const similarColors = generateSimilarColors(hexCode);

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Card className="w-full max-w-3xl bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Color: {hexCode}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-6">
              <div
                className="w-48 h-48 rounded-lg shadow-lg flex items-center justify-center"
                style={{ backgroundColor: hexCode }}
                aria-label={`Color sample for ${hexCode}`}
              >
                <span
                  style={{ color: contrastColor(hexCode) }}
                  className="font-bold text-lg"
                >
                  {hexCode}
                </span>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">
                  RGB:{" "}
                  {hexCode
                    .replace("#", "")
                    .match(/.{2}/g)
                    ?.map((hex) => parseInt(hex, 16))
                    .join(", ")}
                </p>
                <p className="text-md">Hex: {hexCode}</p>
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Similar Colors
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {similarColors.map((similarColor) => (
                    <Link
                      href={`/${similarColor.replace("#", "")}`}
                      key={similarColor}
                      passHref
                    >
                      <Button
                        className="w-full h-20 font-semibold transition-colors duration-200 hover:opacity-90"
                        style={{
                          backgroundColor: similarColor,
                          color: contrastColor(similarColor),
                        }}
                      >
                        {similarColor}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Comment name={hexCode} />
    </div>
  );
}
