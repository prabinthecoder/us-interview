import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  dates: string;
  image?: string;
  status?: string;
  authorName?: string;
  authorUrl?: string;
  attempt?: string;
  interviewDate?: string;
  country?: string;
}

export function ProjectCard({
  title,
  href,
  dates,
  image,
  status,
  authorName,
  authorUrl,
  attempt,
  interviewDate,
  country,
}: Props) {
  return (
    <Card className={"flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"}>
      <Link href={href || "#"} className={cn("block cursor-pointer")}>

        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={400}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
        <CardHeader>

          {/* Top Approved / Rejected Box */}
          <div className={`flex flex-col items-center justify-center text-white ${status === 'Approved' ? 'bg-green-900' : status === 'Rejected' ? 'bg-red-900' : 'bg-gray-100 text-gray-800'}`}>
            <p className="text-sm">{status}</p>
          </div>

          <span className="space-y-1 px-2">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">{formatDate(dates)}</p>
          </span>
        </CardHeader>


        <CardContent className="mt-auto flex flex-col px-2 mb-1">
          <table className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            <tbody>
              <tr>
                <td>Posted By</td>
                <td>
                  <Link href={authorUrl || "#"}>
                    {authorName}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Attempt</td>
                <td>{attempt}</td>
              </tr>
              <tr>
                <td>Interview Date</td>
                <td>{interviewDate}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{country}</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Link>
    </Card>
  );
}
