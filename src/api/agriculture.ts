import { agricultureReport } from "../core/AgricultureReport";

export async function GET() {
  return Response.json({
    success: true,
    division: "Agriculture & Food Security",
    report: agricultureReport.generate(),
  });
}
